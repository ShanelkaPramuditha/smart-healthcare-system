import React from 'react';

const AppointmentForm = () => {
  return (
    <>
      <section className="container">
        <div className="mt-10">
          <div className="mb-10 text-xl font-semibold">
            Place Appointment
          </div>
          <form className="grid grid-cols-1 xl:grid-cols-5 gap-5">
            <div>
              <div className="p-5 rounded-xl shadow border border-gray-200 flex xl:gap-0 gap-10 flex-col md:flex-row xl:flex-col">
                <div>
                  <div>
                    <div className="font-semibold">
                      Arogya Hospital
                    </div>
                    <div className="text-sm text-gray-500">
                      Gampaha
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="text-sm xl:text-xs 2xl:text-sm">
                      Session date
                    </div>
                    <div className="font-medium text-xs mt-1">
                      19 October 2024
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="text-sm xl:text-xs 2xl:text-sm">
                      Session time
                    </div>
                    <div className="font-medium text-xs mt-1">
                      06:45 PM
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="text-sm xl:text-xs 2xl:text-sm">
                      Appointment no
                    </div>
                    <div className="font-medium text-xs mt-1">
                      1
                    </div>
                  </div>
                  <div className="text-xs mt-4 text-gray-500">
                    Your estimated appointment time is{' '}
                    <span className="text-textBlue font-medium">
                      6:45 PM
                    </span>
                    . This time is depending on the time
                    spend with patients / applicants ahead
                    of you
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-3">
              <div>
                <div className="grid grid-cols-1 md:grid-cols-8 gap-5 gap-y-5 md:gap-y-8">
                  <div className="flex  md:col-span-4">
                    <div className="w-full">
                      <div className="text-xs mb-2 font-medium pl-2">
                        Name
                        <span className="text-red-500 ml-1">
                          *
                        </span>
                      </div>
                      <div className="relative">
                        <div className="relative">
                          <input
                            className="w-full undefined false rounded-xl py-[12px] px-4 text-sm focus:outline-none border border-blue-500"
                            placeholder="Enter patient name"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-4">
                    <div className="text-xs mb-2 font-medium pl-2">
                      Email
                    </div>
                    <div className="relative">
                      <div className="relative">
                        <input
                          className="w-full undefined false rounded-xl py-[12px] px-4 text-sm focus:outline-none border border-blue-500"
                          placeholder="Receipt will send to this email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex  md:col-span-4">
                    <div className="w-1/3">
                      <div className="text-xs mb-2 font-medium pl-2">
                        Number
                        <span className="text-red-500 ml-1">
                          *
                        </span>{' '}
                      </div>
                      <div className="relative">
                        <button className="w-full rounded-r-none border-r-0 py-3 px-4 text-sm focus:outline-none rounded-xl border border-blue-500 bg-white text-left ">
                          <div className="flex justify-between items-center">
                            +94
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="w-full mt-6">
                      <div className="relative">
                        <div className="relative">
                          <input
                            className="w-full rounded-l-none false rounded-xl py-[12px] px-4 text-sm focus:outline-none border border-blue-500"
                            placeholder="71XXXXXXX"
                            type="number"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-4">
                    <div className="text-xs mb-2 font-medium pl-2">
                      Area
                    </div>
                    <div className="relative">
                      <div className="relative">
                        <input
                          className="w-full undefined false rounded-xl py-[12px] px-4 text-sm focus:outline-none border border-blue-500"
                          placeholder="Please enter your closest city"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex  md:col-span-5 col-start-1">
                    <div className="w-full">
                      <div className="text-xs mb-2 font-medium pl-2">
                        NIC Number
                        <span className="text-red-500 ml-1">
                          *
                        </span>
                      </div>
                      <div className="relative">
                        <div className="relative">
                          <input
                            className="w-full undefined false rounded-xl py-[12px] px-4 text-sm focus:outline-none border border-blue-500"
                            placeholder="Enter NIC number"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="shadow border border-gray-200 p-5 rounded-xl mb-5">
                <div className="font-semibold text-blue-500 mb-1">
                  Payment Details
                </div>
                <div className="text-xs text-gray-500">
                  Detailed payment breakdown on your
                  transaction
                </div>
                <div>
                  <div className="flex flex-col gap-4 border-y border-black/5 py-4 mt-4">
                    <div className="flex items-center justify-between">
                      <div className="text-xs 2xl:text-sm">
                        Doctor fee
                      </div>
                      <div className="font-semibold text-sm xl:text-xs 2xl:text-sm ">
                        Rs 1,500.00
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-xs 2xl:text-sm">
                        Hospital fee
                      </div>
                      <div className="font-semibold text-sm xl:text-xs 2xl:text-sm ">
                        Rs 600.00
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-xs 2xl:text-sm">
                        eChannelling fee
                      </div>
                      <div className="font-semibold text-sm xl:text-xs 2xl:text-sm ">
                        Rs 199.00
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-xs 2xl:text-sm">
                        Discount
                      </div>
                      <div className="font-semibold text-sm xl:text-xs 2xl:text-sm text-red-600">
                        - Rs 0.00
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-xs 2xl:text-sm">
                        No show fee
                      </div>
                      <div className="font-semibold text-sm xl:text-xs 2xl:text-sm ">
                        Rs 0.00
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="font-semibold">
                      Total fee
                    </div>
                    <div className="font-semibold">
                      Rs 2,299.00
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full px-7 py-1.5 text-sm bg-blue-500 text-white px-2 py-1.5 md:py-3 mt-auto rounded-xl text-sm group border border-blue-500"
              >
                <div className="flex justify-center items-center group-hover:gap-3">
                  <div className="mr-3 group-hover:mr-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-4 text-white"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex items-center capitalize gap-3 whitespace-nowrap">
                    Pay
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-4 group-hover:ml-0 -ml-7 group-hover:opacity-100 opacity-0 duration-200 stroke-current stroke-2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      ></path>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AppointmentForm;
