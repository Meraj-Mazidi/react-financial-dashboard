import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { ChartData } from '@syncfusion/ej2/documenteditor';

const Notification = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96 hover:drop-shadow-2xl shadow-2xl">
      <div className='flex justify-between items-center'>
        <div className="flex gap-3">
          <p className='text-lg font-semibold dark:text-gray-200'>
            Notifications
          </p>
          <button
            type='button'
            className='text-white text-xs rounded p-1 px-2'
            style={{ background: currentColor }}
          >
            5 New
          </button>
        </div>
        <Button
          icon={<MdOutlineCancel />}
          color='rgb(153, 171, 180)'
          bgHoverColor='light-gray'
          size='2xl'
          borderRadius='50%'
        />
      </div>

      <div className='mt-5'>
        {chatData?.map((item, index) => (
          <div
            key={index}
            className='flex items-center leading-8 gap-5 border-b-1 border-color p-3 hover:shadow-xl rounded-md cursor-pointer'
          >
            <img
              src={item.image}
              alt='teammatesImg'
              className="rounded-full h-10 w-10"
            />
            <div>
              <p className="font-semibold dark:text-gray-200">
                {item.message}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

        <div className="mt-5">
          <Button
            color='white'
            bgColor={currentColor}
            text='See all notifications'
            borderRadius='10px'
            width='full'
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;
