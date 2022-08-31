import React from 'react';
import { ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, CandleSeries, Category, Tooltip, DateTime, Zoom, Logarithmic, ColumnSeries, Crosshair, StripLine, RowDirective, RowsDirective, SeriesDirective, Inject, HiloSeries } from '@syncfusion/ej2-react-charts';

import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';
import { chartData } from '../../data/candleChartData'
import { useStateContext } from '../../contexts/ContextProvider';
import { ChartsHeader } from '../../components';

const date1 = new Date('2017, 1, 1');

function filterValue(value) {
  if (value.x >= date1) {
    return value.x, value.high, value.low;
  }
}
const returnValue = financialChartData.filter(filterValue);

const Financial = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl shadow-2xl mr-0 pr-0 pl-5">
      <ChartsHeader category="Financial Candle Chart" title="APPLE Historical" />
      <div className="w-full">

        <ChartComponent
          id='financial-candle-chart'
          primaryXAxis={{
            valueType: 'DateTime',
            crosshairTooltip: { enable: true },
            majorGridLines: { width: 0 }
          }}
          primaryYAxis={{
            title: 'Volume',
            rangePadding: 'None',
            valueType: 'Logarithmic',
            opposedPosition: true,
            majorGridLines: { width: 1 },
            lineStyle: { width: 0 },
            stripLines: [
              {
                end: 1300000000, startFromAxis: true, text: '', color: 'black', visible: true,
                opacity: 0.03, zIndex: 'Behind'
              }
            ]
          }}
          tooltip={{
            enable: true, shared: true
          }}
          crosshair={{ enable: true, lineType: 'Vertical' }}
          chartArea={{ border: { width: 0 } }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject services={[CandleSeries, StripLine, Category, Tooltip, DateTime, Zoom, ColumnSeries, Logarithmic, Crosshair]} />

          <RowsDirective>
            <RowDirective height={'30%'}>
            </RowDirective>
            <RowDirective height={'70%'}>
            </RowDirective>
          </RowsDirective>

          <AxesDirective>
            <AxisDirective name='secondary' opposedPosition={true} rowIndex={1} majorGridLines={{ width: 1 }} labelFormat='n0' title='Price' plotOffset={30} lineStyle={{ width: 0 }}>
            </AxisDirective>
          </AxesDirective>

          <SeriesCollectionDirective>
            <SeriesDirective type='Column' dataSource={chartData} animation={{ enable: true }} xName='x' yName='volume' name='Volume'>
            </SeriesDirective>
            <SeriesDirective type='Candle' yAxisName='secondary' bearFillColor='#2ecd71' bullFillColor='#e74c3d' dataSource={chartData} animation={{ enable: true }} xName='x' low='low' high='high' open='open' close='close' name='Apple Inc' volume='volume'>
            </SeriesDirective>
          </SeriesCollectionDirective>

        </ChartComponent>


        <br />
        <hr />
        <br />

        <ChartsHeader category="Financial Hilo Chart" title="APPLE Inc." />

        <ChartComponent
          id="charts"
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true, shared: true }}
          crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject services={[HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={returnValue}
              xName="x"
              yName="low"
              name="Apple Inc"
              type="Hilo"
              low="low"
              high="high"
            />
          </SeriesCollectionDirective>
        </ChartComponent>

      </div>
    </div>
  );
};

export default Financial;