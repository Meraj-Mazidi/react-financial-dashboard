import React from 'react';

import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationDataLabel, AccumulationTooltip, PieSeries, Inject, } from '@syncfusion/ej2-react-charts';

import { semiPieData } from '../../data/dummy'

const SemiPieChart = () => {
    return (
        <AccumulationChartComponent
            id="semiPieChart"
            tooltip={{
                enable: true,
                format: '${point.x} : <b>${point.y}%</b>'
            }}
            legendSettings={{ visible: false }}
            background='transparent'
        >
            <Inject services={[AccumulationDataLabel, AccumulationTooltip, PieSeries]} />

            <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective
                    name='Product Sales'
                    dataSource={semiPieData}
                    xName='x'
                    yName='y'
                    startAngle={270}
                    endAngle={90}
                    radius='90%'
                    explode={true}
                    innerRadius='40%'
                    dataLabel={{
                        visible: true,
                        position: 'Outside',
                        connectorStyle: { length: '10%' },
                        name: 'text',
                        font: {
                            size: '14px',
                            color: 'gray'
                        },
                    }}
                >

                </AccumulationSeriesDirective>
            </AccumulationSeriesCollectionDirective>

        </AccumulationChartComponent >
    );
}

export default SemiPieChart;
