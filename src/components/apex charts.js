import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Card, CardContent } from '@mui/material';
import Chart from 'react-apexcharts';
import { Api_url } from '../api_url/api';
import { useState, useEffect } from 'react';

export function ApexChart() {
  const [tableData, setTableData] = useState([]);

  const Getapi= async () => {
    const data1 = await fetch(Api_url);
    const data = await data1.json();
    setTableData(data);
  }

  useEffect(() => {
        Getapi()
    }, []);
 
  const mongodb1 = tableData.filter(data => data.subject === 'Mongo db');
  const mongodb = (mongodb1.length);  

  const express1 = tableData.filter(data => data.subject === 'Express js');
  const express = (express1.length);

  const react1 = tableData.filter(data => data.subject === 'React js');
  const react = (react1.length);

  const node1 = tableData.filter(data => data.subject === 'Node js');
  const node = (node1.length);

  return (
    <div>
      <Card sx={{ Width: 600, height: 500 }}>
        <CardContent>
          <Typography variant="body2">
            <Chart type="donut"
              width={500}
              height={550}
              series={[mongodb, express, react, node]}
              options={{
                labels: ['Mongo db', 'Express js', 'React js', 'Node js'],
                tooltip: {
                  y: {
                    formatter: (val) => {
                      return `${val}`;
                    }
                  }
                },
                title: {
                  text: "Class chart"
                },
                plotOptions: {
                  pie: {
                    donut: {
                      size: '55px'
                    }
                  }
                }
              }}>
            </Chart>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}