import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Card, CardContent } from '@mui/material';
import Chart from 'react-apexcharts';

export default function TChart() {
  
  return (
    <div>
      <Card sx={{ Width: 600, height: 500 }}>
        <CardContent>
          <Typography variant="body2">
            <Chart type="donut"
              width={500}
              height={550}
              series={[3, 4, 2, 2]}
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
                  text: "Teacher chart"
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