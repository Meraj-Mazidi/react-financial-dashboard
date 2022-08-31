import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/myProfilePic.jpg';

const UserProfile = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96 hover:drop-shadow-2xl shadow-2xl">
      <div className='flex justify-between items-center'>
        <p className="text-lg font-semibold dark:text-gray-200">
          User Profile
        </p>
        <Button
          icon={<MdOutlineCancel />}
          color='rgb(153, 171, 180)'
          bgHoverColor='light-gray'
          size='2xl'
          borderRadius='50%'
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          src={avatar}
          alt=""
          className="w-24 h-24 rounded-full shadow-xl hover:drop-shadow-lg cursor-pointer"
        />
        <div>
          <p className="text-xl font-semibold dark:text-gray-200">
            Meraj Mazidi
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Administrator
          </p>
          <p className="text-sm text-gray-500 font-semibold dark:text-gray-400">
            merajmazidiwork@gmail.com
          </p>
        </div>
      </div>

      <div>
        {userProfileData.map((item, index) => (
          <div
            key={index}
            className='flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer dark:hover:bg-[#42464D]'
          >
            <button
              type='button'
              className='text-xl rounded-lg p-3 hover:bg-light-gray'
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
            >
              {item.icon}
            </button>

            <div>
              <p className='font-semibold dark:text-gray-200'>
                {item.title}
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <Button
          color='white'
          bgColor={currentColor}
          text='Logout'
          borderRadius='10px'
          width='full'
        />
      </div>

    </div>
  );
};

export default UserProfile;
