import React from 'react';
import { myPieData } from '../../data/dummy';

import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip, Inject } from '@syncfusion/ej2-react-charts';

import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';


const Pie = () => {

  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl shadow-2xl mr-0 pr-0 pl-5">
      <ChartsHeader category="Pie" title="Project Cost Breakdown" />
      <div className="w-full">

        <AccumulationChartComponent
          id='pie-chart'
          legendSettings={{
            visible: true,
            reverse: true,
            background: 'white'
          }}
          enableSmartLabels={true}
          enableAnimation={true}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? 'transparent' : '#fff'}
        >
          <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />

          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={myPieData}
              xName='x'
              yName='y'
              innerRadius='20%'
              dataLabel={{
                visible: true, position: 'Outside', name: 'x'
              }}
              radius='r'
            >

            </AccumulationSeriesDirective>
          </AccumulationSeriesCollectionDirective>

        </AccumulationChartComponent>


      </div>
    </div>
  )
}

export default Pie;