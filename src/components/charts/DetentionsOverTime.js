import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';


const getDetentionsOverTime = () => {
  return fetch('https://mult-co-jail-data.herokuapp.com/api/v1/dailyCounts')
    .then(res => res.json());
};

const DetentionsOverTimeChart = () => {
  const dummyData = {
    '_id': '5e7536f9ad4dcf00040dbef6',
    'counts': [
      {
        '_id': '5e7536f9ad4dcf00040dbf35',
        'date': '2020-01-16T00:00:00.000Z',
        'count': 1350
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf34',
        'date': '2020-01-17T00:00:00.000Z',
        'count': 1101
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf33',
        'date': '2020-01-18T00:00:00.000Z',
        'count': 1087
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf32',
        'date': '2020-01-19T00:00:00.000Z',
        'count': 1107
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf31',
        'date': '2020-01-20T00:00:00.000Z',
        'count': 1130
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf30',
        'date': '2020-01-21T00:00:00.000Z',
        'count': 1149
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf2f',
        'date': '2020-01-22T00:00:00.000Z',
        'count': 1134
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf2e',
        'date': '2020-01-23T00:00:00.000Z',
        'count': 1125
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf2d',
        'date': '2020-01-24T00:00:00.000Z',
        'count': 1104
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf2c',
        'date': '2020-01-25T00:00:00.000Z',
        'count': 1113
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf2b',
        'date': '2020-01-26T00:00:00.000Z',
        'count': 1136
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf2a',
        'date': '2020-01-27T00:00:00.000Z',
        'count': 1143
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf29',
        'date': '2020-01-29T00:00:00.000Z',
        'count': 1093
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf28',
        'date': '2020-01-30T00:00:00.000Z',
        'count': 1088
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf27',
        'date': '2020-01-31T00:00:00.000Z',
        'count': 1088
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf26',
        'date': '2020-02-02T00:00:00.000Z',
        'count': 1129
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf25',
        'date': '2020-02-03T00:00:00.000Z',
        'count': 1139
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf24',
        'date': '2020-02-04T00:00:00.000Z',
        'count': 1101
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf23',
        'date': '2020-02-05T00:00:00.000Z',
        'count': 1100
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf22',
        'date': '2020-02-06T00:00:00.000Z',
        'count': 1101
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf21',
        'date': '2020-02-07T00:00:00.000Z',
        'count': 1085
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf20',
        'date': '2020-02-08T00:00:00.000Z',
        'count': 1076
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf1f',
        'date': '2020-02-09T00:00:00.000Z',
        'count': 1100
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf1e',
        'date': '2020-02-10T00:00:00.000Z',
        'count': 1121
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf1d',
        'date': '2020-02-11T00:00:00.000Z',
        'count': 1110
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf1c',
        'date': '2020-02-12T00:00:00.000Z',
        'count': 1112
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf1b',
        'date': '2020-02-13T00:00:00.000Z',
        'count': 1145
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf1a',
        'date': '2020-02-14T00:00:00.000Z',
        'count': 1125
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf19',
        'date': '2020-02-15T00:00:00.000Z',
        'count': 1095
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf18',
        'date': '2020-02-16T00:00:00.000Z',
        'count': 1110
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf17',
        'date': '2020-02-17T00:00:00.000Z',
        'count': 1125
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf16',
        'date': '2020-02-18T00:00:00.000Z',
        'count': 1145
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf15',
        'date': '2020-02-19T00:00:00.000Z',
        'count': 1165
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf14',
        'date': '2020-02-20T00:00:00.000Z',
        'count': 1156
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf13',
        'date': '2020-02-21T00:00:00.000Z',
        'count': 1127
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf12',
        'date': '2020-02-22T00:00:00.000Z',
        'count': 1119
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf11',
        'date': '2020-02-23T00:00:00.000Z',
        'count': 1135
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf10',
        'date': '2020-02-24T00:00:00.000Z',
        'count': 1147
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf0f',
        'date': '2020-02-25T00:00:00.000Z',
        'count': 1134
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf0e',
        'date': '2020-02-26T00:00:00.000Z',
        'count': 1109
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf0d',
        'date': '2020-02-27T00:00:00.000Z',
        'count': 1111
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf0c',
        'date': '2020-02-28T00:00:00.000Z',
        'count': 1102
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf0b',
        'date': '2020-02-29T00:00:00.000Z',
        'count': 1100
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf0a',
        'date': '2020-03-01T00:00:00.000Z',
        'count': 1129
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf09',
        'date': '2020-03-02T00:00:00.000Z',
        'count': 1139
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf08',
        'date': '2020-03-03T00:00:00.000Z',
        'count': 1108
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf07',
        'date': '2020-03-04T00:00:00.000Z',
        'count': 1107
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf06',
        'date': '2020-03-05T00:00:00.000Z',
        'count': 1116
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf05',
        'date': '2020-03-06T00:00:00.000Z',
        'count': 1113
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf04',
        'date': '2020-03-07T00:00:00.000Z',
        'count': 1099
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf03',
        'date': '2020-03-08T00:00:00.000Z',
        'count': 1132
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf02',
        'date': '2020-03-09T00:00:00.000Z',
        'count': 1147
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf01',
        'date': '2020-03-10T00:00:00.000Z',
        'count': 1126
      },
      {
        '_id': '5e7536f9ad4dcf00040dbf00',
        'date': '2020-03-11T00:00:00.000Z',
        'count': 1129
      },
      {
        '_id': '5e7536f9ad4dcf00040dbeff',
        'date': '2020-03-12T00:00:00.000Z',
        'count': 1145
      },
      {
        '_id': '5e7536f9ad4dcf00040dbefe',
        'date': '2020-03-13T00:00:00.000Z',
        'count': 1111
      },
      {
        '_id': '5e7536f9ad4dcf00040dbefd',
        'date': '2020-03-14T00:00:00.000Z',
        'count': 1096
      },
      {
        '_id': '5e7536f9ad4dcf00040dbefc',
        'date': '2020-03-15T00:00:00.000Z',
        'count': 1126
      },
      {
        '_id': '5e7536f9ad4dcf00040dbefb',
        'date': '2020-03-16T00:00:00.000Z',
        'count': 1144
      },
      {
        '_id': '5e7536f9ad4dcf00040dbefa',
        'date': '2020-03-17T00:00:00.000Z',
        'count': 1088
      },
      {
        '_id': '5e7536f9ad4dcf00040dbef9',
        'date': '2020-03-18T00:00:00.000Z',
        'count': 1027
      },
      {
        '_id': '5e7536f9ad4dcf00040dbef8',
        'date': '2020-03-19T00:00:00.000Z',
        'count': 992
      },
      {
        '_id': '5e7536f9ad4dcf00040dbef7',
        'date': '2020-03-20T00:00:00.000Z',
        'count': 929
      }
    ],
    '__v': 0
  };

  const smartData = dummyData.counts.map(item => {
    let container = [];
    container.push(item['date'].toString().slice(0, -10));
    container.push(item.count);
    return container;
  });
 
  const [detentionCounts, setDetentionCounts] = useState('loading');
      
  
  
  useEffect(() => {
    getDetentionsOverTime()
      .then(res => {
        const displayData = res.counts.map(item => {
          let container = [];
          container.push(item['date'].toString().slice(0, -14));
          container.push(item.count);
          return container;
        });
        setDetentionCounts(displayData);
      });
  }, []);


  return (
    <>
      <h1>Detentions Over Time in Multnomah County</h1><br/>
      <Chart
        width={'800px'}
        height={'400px'}
        chartType="Line"
        loader={<div>Loading Chart</div>}
        data= {[['', ''], //optional labels for axes
          ...detentionCounts]}
        options={{
          colors: ['#A2506A', '#1F4763', '#9161A2', '#13646A', '#058F7A'],
          legend: { position: 'none' },
          curveType: 'function'
        }}
      />
    </>
  );
};


export default DetentionsOverTimeChart;
