import * as React from 'react';
import AmCharts from '@amcharts/amcharts3-react';

const Cylinder3DChart = props => {
  var dataProvider = [],
    colors = [
      '#FF0F00',
      '#F8FF01',
      '#04D215',
      '#0D52D1',
      '#CD0D74',
      '#0D8ECF',
      '#8A0CCF',
      '#B0DE09',
      '#DDDDDD',
      '#333333',
    ];

  // props.data.map((place, index) => {
  //   dataProvider.push({ color: colors[index], ...place })
  // })

  for (let i = 0; i < props.data.length && i < 5; i++) {
    dataProvider.push({ color: colors[i], ...props.data[i] });
  }

  const config = {
    theme: 'light',
    type: 'serial',
    startDuration: 2,
    dataProvider: dataProvider,

    valueAxes: [
      {
        position: 'left',
        axisAlpha: 0,
        gridAlpha: 0,
      },
    ],
    graphs: [
      {
        balloonText: '[[category]]: <b>[[value]]</b>',
        colorField: 'color',
        fillAlphas: 0.85,
        lineAlpha: 0.1,
        type: 'column',
        topRadius: 1,
        valueField: 'count',
      },
    ],
    depth3D: 20,
    angle: 30,
    chartCursor: {
      categoryBalloonEnabled: false,
      cursorAlpha: 0,
      zoomable: false,
    },
    categoryField: 'geofence_name',
    categoryAxis: {
      gridPosition: 'start',
      axisAlpha: 0,
      gridAlpha: 0,
      labelFunction: function(valueText, serialDataItem, categoryAxis) {
        if (valueText.length > 15) return valueText.substring(0, 15) + '...';
        else return valueText;
      },
    },
    export: {
      enabled: true,
    },

    rotate: true,
  };
  return (
    <div className="App">
      <AmCharts.React
        style={{ width: '100%', height: '320px' }}
        options={config}
      />
    </div>
  );
};

export default Cylinder3DChart;
