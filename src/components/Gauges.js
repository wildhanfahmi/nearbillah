import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Gauge } from '@ant-design/charts';
import { Card } from 'antd';

const Gauges = (props) => {

  const config = {
    percent: 0.3,
    range: {
      color: 'l(0) 0:#B8E1FF 1:#3D76DD',
    },
    startAngle: Math.PI,
    endAngle: 2 * Math.PI,
    indicator: null,
    statistic: {
      title: {
        offsetY: -36,
        style: {
          fontSize: '36px',
          color: '#4B535E',
        },
        formatter: () => props.progress,
      },
      content: {
        style: {
          fontSize: '24px',
          lineHeight: '44px',
          color: '#4B535E',
        },
        formatter: () => props.labelProgress,
      },
    },
  };
  return (
    <Card style={{ width: 300 }}>
      <Gauge {...config} />
    </Card>
  )
};

export default Gauges
