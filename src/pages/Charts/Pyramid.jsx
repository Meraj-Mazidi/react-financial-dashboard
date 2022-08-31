import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationSelection } from '@syncfusion/ej2-react-charts';

import { PyramidData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { ChartsHeader } from '../../components';

const Pyramid = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl shadow-2xl mr-0 pr-0 pl-5">
      <ChartsHeader category="Pyramid" title="Food Comparison Chart" />
      <div className="w-full">

        <AccumulationChartComponent
          id='pyramid-chart'
          legendSettings={{
            visible: true,
            background: 'white'
          }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? 'transparent' : '#fff'}
        >
          <Inject services={[AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationLegend, AccumulationSelection]} />

          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name='Food'
              dataSource={PyramidData}
              xName='x'
              yName='y'
              type='Pyramid'
              width="45%"
              height="80%"
              neckWidth='15%'
              gapRatio={0.03}
              explode={true}
              emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
              dataLabel={{
                visible: true, position: 'Inside',
                name: 'text',
              }}>
            </AccumulationSeriesDirective>
          </AccumulationSeriesCollectionDirective>

        </AccumulationChartComponent>

      </div>
    </div>
  );
};

export default Pyramid;