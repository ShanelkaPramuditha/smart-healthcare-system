import React from 'react';
import avatar from '@/assets/avatar/user.jpg';
import { Link } from 'react-router-dom';

const DoctorCard = ({ text }) => {
  return (
    <div class="max-w-[300px] bg-white border border-gray-200 rounded-lg shadow">
      <img
        class="rounded-full p-5"
        src={avatar}
        alt={avatar}
      />
      <p class="text-xs text-center font-normal text-gray-700">
        Male
      </p>
      <div class="px-5 pb-5">
        <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900">
          Dr. Samatha
        </h5>
        <p class="mb-3 text-xs text-center font-normal text-gray-700">
          CARDIOLOGIST
        </p>
        <Link
          to="doctor/hospitals"
          class="flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Channel Now
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
