import React from 'react';

import { ChartsHeader, LineChart } from '../../components';

const Line = () => (
  <div className="m-4 pr-0 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl shadow-2xl">
    <ChartsHeader category="Line" title="Inflation Rate" />

    <div className='w-full flex justify-center items-center'>
      <LineChart />
    </div>
  </div>
);

export default Line;
