import { Button } from '@/components/ui/button';
import { MdBloodtype } from 'react-icons/md';
import { RiBodyScanFill } from 'react-icons/ri';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { InputField } from '@/components/input';
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import {
  GetProfileDataId,
  useUpdateProfile,
} from '@/hooks/use-users';
import { Modal } from '@/components/modals';
import { useParams } from 'react-router-dom';

const allergiesOptions = [
  'Medication Allergies',
  'Food Allergies',
  'Environmental Allergies',
  'Severity and Reactions',
];

const cardiovascularOptions = [
  'Hypertension',
  'Coronary Artery Disease',
  'Heart Failure',
];

const otherConditions = [
  'Asthma',
  'Diabetes',
  'Musculoskeletal Disorders',
  'Neurological Disorders',
  'Mental Health Disorders',
  'Cancer',
  'Chronic Kidney Disease',
  'Other',
];

const MedicalHistoryStaff = () => {
  // Read ID from URL
  const { id } = useParams();

  const { data: profileData, refetch: refetchProfile } =
    GetProfileDataId(true, id);

  const medForm = useForm({
    defaultValues: {
      allergies: profileData?.medicalData?.allergies || [],
      cardiovascular:
        profileData?.medicalData?.cardiovascular || [],
      otherCondition:
        profileData?.medicalData?.otherCondition || [],
      specialNote:
        profileData?.medicalData?.specialNote || '',
    },
  });

  const {
    mutate: updateMutate,
    // isPending: updatePending,
    // isSuccess: updateSuccess,
  } = useUpdateProfile(refetchProfile);

  const onSubmit = (data) => {
    // Send data as medicalData
    updateMutate({
      ...profileData,
      medicalData: data,
    });
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 items-center justify-between mb-4 border-b border-gray-200 pb-4">
        {/* Left Section (Blood Group & Weight) */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {/* Blood Group */}
          <Button
            variant="outline"
            className="flex items-center gap-2 p-4 text-left bg-white rounded-lg shadow-md w-full h-full justify-between"
          >
            <MdBloodtype className="w-10 h-10 text-red-600 mx-5" />
            <div>
              <p className="mb-1 text-sm font-semibold">
                Blood Group
              </p>
              <p className="text-sm">O+</p>
            </div>
          </Button>

          {/* Weight */}
          <Button
            variant="outline"
            className="flex items-center gap-2 p-4 text-left bg-white rounded-lg shadow-md w-full h-full justify-between"
          >
            <RiBodyScanFill className="w-10 h-10 text-yellow-400" />
            <div>
              <p className="mb-1 text-sm font-semibold">
                Weight
              </p>
              <p className="text-sm">70 kg</p>
            </div>
          </Button>

          {/* Reports */}
          <Button
            variant="outline"
            className="flex items-center gap-2 p-4 text-left bg-white rounded-lg shadow-md w-full h-full justify-between"
          >
            <HiOutlineClipboardDocumentList className="w-10 h-10 text-blue-600" />
            <div className="ms-2 text-left w-full">
              <p className="mb-1 text-sm font-semibold">
                Blood Test
              </p>
              <p className="text-sm">2021-09-01</p>
            </div>
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 p-4 text-left bg-white rounded-lg shadow-md w-full h-full justify-between"
          >
            <HiOutlineClipboardDocumentList className="w-10 h-10 text-blue-600" />
            <div className="ms-2 text-left w-full">
              <p className="mb-1 text-sm font-semibold">
                General Report
              </p>
              <p className="text-sm">2021-09-01</p>
            </div>
          </Button>
        </div>
      </div>

      {/* Data */}
      <div className="bg-gray-50 p-8 rounded-lg shadow-lg max-w-full">
        <Form {...medForm}>
          <form onSubmit={medForm.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Allergies Section */}
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Allergies
                </h3>

                <div className="flex items-center space-x-2 mb-2">
                  <InputField
                    className="flex flex-row-reverse items-center space-x-3 space-y-0 gap-4"
                    type="checkbox"
                    values={allergiesOptions?.map(
                      (option) => ({
                        id: option,
                        label: option,
                      }),
                    )}
                    name="allergies"
                    control={medForm.control}
                  />
                </div>
              </div>

              {/* Cardiovascular Diseases Section */}
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Cardiovascular Diseases
                </h3>

                <div className="flex items-center space-x-2 mb-2">
                  <InputField
                    className="flex flex-row-reverse items-center space-x-3 space-y-0 gap-4"
                    type="checkbox"
                    values={cardiovascularOptions?.map(
                      (option) => ({
                        id: option,
                        label: option,
                      }),
                    )}
                    name="cardiovascular"
                    control={medForm.control}
                  />
                </div>
              </div>

              {/* Other Conditions */}
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Other Conditions
                </h3>

                <div className="flex items-center space-x-2 mb-2">
                  <InputField
                    className="flex flex-row-reverse items-center space-x-3 space-y-0 gap-4"
                    type="checkbox"
                    values={otherConditions?.map(
                      (option) => ({
                        id: option,
                        label: option,
                      }),
                    )}
                    name="otherCondition"
                    control={medForm.control}
                  />
                </div>
              </div>
              {/* For Doctor Section */}
              <div className="">
                <h3 className="text-lg font-semibold mb-2">
                  Special Note
                </h3>
                <InputField
                  inputStyle="min-h-52"
                  type="textarea"
                  name="specialNote"
                  control={medForm.control}
                />
                <Modal
                  variant="primary"
                  buttonText={'Update'}
                  buttonStyles="text-blue-500 font-semibold text-md p-0 m-0 my-4"
                  header="Save Changes"
                  description="Do you want to save the changes?"
                  onClick={() =>
                    medForm.handleSubmit(onSubmit)()
                  }
                  actionButtonText="Save"
                />
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default MedicalHistoryStaff;
