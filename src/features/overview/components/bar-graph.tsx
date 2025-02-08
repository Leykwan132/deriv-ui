'use client';

import * as React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';

export const description = 'An interactive bar chart';

const chartData = [
  { date: '2024-11-01', dispute: 45, urgent: 1 },
  { date: '2024-11-02', dispute: 52, urgent: 1 },
  { date: '2024-11-03', dispute: 48, urgent: 1 },
  { date: '2024-11-04', dispute: 63, urgent: 2 },
  { date: '2024-11-05', dispute: 58, urgent: 1 },
  { date: '2024-11-06', dispute: 54, urgent: 4 },
  { date: '2024-11-07', dispute: 49, urgent: 2 },
  { date: '2024-11-08', dispute: 61, urgent: 1 },
  { date: '2024-11-09', dispute: 52, urgent: 1 },
  { date: '2024-11-10', dispute: 57, urgent: 2 },
  { date: '2024-11-11', dispute: 53, urgent: 1 },
  { date: '2024-11-12', dispute: 59, urgent: 1 },
  { date: '2024-11-13', dispute: 55, urgent: 2 },
  { date: '2024-11-14', dispute: 48, urgent: 3 },
  { date: '2024-11-15', dispute: 51, urgent: 1 },
  { date: '2024-11-16', dispute: 54, urgent: 2 },
  { date: '2024-11-17', dispute: 62, urgent: 1 },
  { date: '2024-11-18', dispute: 58, urgent: 1 },
  { date: '2024-11-19', dispute: 53, urgent: 2 },
  { date: '2024-11-20', dispute: 49, urgent: 1 },
  { date: '2024-11-21', dispute: 57, urgent: 0 },
  { date: '2024-11-22', dispute: 61, urgent: 2 },
  { date: '2024-11-23', dispute: 54, urgent: 1 },
  { date: '2024-11-24', dispute: 58, urgent: 1 },
  { date: '2024-11-25', dispute: 52, urgent: 1 },
  { date: '2024-11-26', dispute: 49, urgent: 0 },
  { date: '2024-11-27', dispute: 63, urgent: 1 },
  { date: '2024-11-28', dispute: 55, urgent: 2 },
  { date: '2024-11-29', dispute: 51, urgent: 1 },
  { date: '2024-11-30', dispute: 57, urgent: 1 },
  { date: '2024-12-01', dispute: 54, urgent: 2 },
  { date: '2024-12-02', dispute: 59, urgent: 1 },
  { date: '2024-12-03', dispute: 52, urgent: 1 },
  { date: '2024-12-04', dispute: 58, urgent: 2 },
  { date: '2024-12-05', dispute: 63, urgent: 0 },
  { date: '2024-12-06', dispute: 56, urgent: 1 },
  { date: '2024-12-07', dispute: 51, urgent: 2 },
  { date: '2024-12-08', dispute: 54, urgent: 0 },
  { date: '2024-12-09', dispute: 57, urgent: 1 },
  { date: '2024-12-10', dispute: 62, urgent: 2 },
  { date: '2024-12-11', dispute: 58, urgent: 1 },
  { date: '2024-12-12', dispute: 53, urgent: 1 },
  { date: '2024-12-13', dispute: 49, urgent: 2 },
  { date: '2024-12-14', dispute: 61, urgent: 1 },
  { date: '2024-12-15', dispute: 56, urgent: 1 },
  { date: '2024-12-16', dispute: 52, urgent: 2 },
  { date: '2024-12-17', dispute: 58, urgent: 1 },
  { date: '2024-12-18', dispute: 54, urgent: 1 },
  { date: '2024-12-19', dispute: 59, urgent: 2 },
  { date: '2024-12-20', dispute: 53, urgent: 1 },
  { date: '2024-12-21', dispute: 57, urgent: 1 },
  { date: '2024-12-22', dispute: 51, urgent: 2 },
  { date: '2024-12-23', dispute: 55, urgent: 1 },
  { date: '2024-12-24', dispute: 62, urgent: 1 },
  { date: '2024-12-25', dispute: 58, urgent: 2 },
  { date: '2024-12-26', dispute: 53, urgent: 4 },
  { date: '2024-12-27', dispute: 56, urgent: 1 },
  { date: '2024-12-28', dispute: 61, urgent: 2 },
  { date: '2024-12-29', dispute: 54, urgent: 1 },
  { date: '2024-12-30', dispute: 59, urgent: 0 },
  { date: '2024-12-31', dispute: 52, urgent: 2 },
  { date: '2025-01-01', dispute: 57, urgent: 1 },
  { date: '2025-01-02', dispute: 63, urgent: 1 },
  { date: '2025-01-03', dispute: 55, urgent: 0 },
  { date: '2025-01-01', dispute: 51, urgent: 1 },
  { date: '2025-01-05', dispute: 58, urgent: 0 },
  { date: '2025-01-06', dispute: 54, urgent: 2 },
  { date: '2025-01-07', dispute: 59, urgent: 1 },
  { date: '2025-01-08', dispute: 52, urgent: 3 },
  { date: '2025-01-09', dispute: 57, urgent: 2 },
  { date: '2025-01-10', dispute: 61, urgent: 0 },
  { date: '2025-01-11', dispute: 55, urgent: 1 },
  { date: '2025-01-12', dispute: 53, urgent: 2 },
  { date: '2025-01-13', dispute: 58, urgent: 0 },
  { date: '2025-01-14', dispute: 54, urgent: 1 },
  { date: '2025-01-15', dispute: 59, urgent: 0 },
  { date: '2025-01-16', dispute: 52, urgent: 1 },
  { date: '2025-01-17', dispute: 57, urgent: 1 },
  { date: '2025-01-18', dispute: 63, urgent: 0 },
  { date: '2025-01-19', dispute: 55, urgent: 1 },
  { date: '2025-01-20', dispute: 51, urgent: 1 },
  { date: '2025-01-21', dispute: 58, urgent: 2 },
  { date: '2025-01-22', dispute: 54, urgent: 0 },
  { date: '2025-01-23', dispute: 59, urgent: 1 },
  { date: '2025-01-24', dispute: 52, urgent: 2 },
  { date: '2025-01-25', dispute: 57, urgent: 0 },
  { date: '2025-01-26', dispute: 61, urgent: 1 },
  { date: '2025-01-27', dispute: 55, urgent: 0 },
  { date: '2025-01-28', dispute: 53, urgent: 1 },
  { date: '2025-01-29', dispute: 58, urgent: 1 },
  { date: '2025-01-30', dispute: 54, urgent: 2 }
];

const chartConfig = {
  views: {
    label: 'Page Views'
  },
  dispute: {
    label: 'Dispute Cases',
    color: 'hsl(var(--chart-1))'
  },
  urgent: {
    label: 'Urgent Cases',
    color: 'hsl(var(--chart-2))'
  }
  // error: {
  //   label: 'Error',
  //   color: 'hsl(var(--chart-2))'
  // }
} satisfies ChartConfig;

export function BarGraph() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>('dispute');

  const total = React.useMemo(
    () => ({
      dispute: chartData.reduce((acc, curr) => acc + curr.dispute, 0),
      urgent: chartData.reduce((acc, curr) => acc + curr.urgent, 0)
    }),
    []
  );

  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  // React.useEffect(() => {
  //   if (activeChart === 'error') {
  //     throw new Error('Mocking Error');
  //   }
  // }, [activeChart]);

  if (!isClient) {
    return null;
  }

  return (
    <Card>
      <CardHeader className='flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row'>
        <div className='flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6'>
          <CardTitle>Dispute Cases & Urgent (Escalation) Cases</CardTitle>
          <CardDescription>for the last 3 months</CardDescription>
        </div>
        <div className='flex'>
          {['dispute', 'urgent'].map((key) => {
            const chart = key as keyof typeof chartConfig;
            if (!chart || total[key as keyof typeof total] === 0) return null;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className='relative flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6'
                onClick={() => setActiveChart(chart)}
              >
                <span className='text-xs text-muted-foreground'>
                  {chartConfig[chart].label}
                </span>
                <span className='text-lg font-bold leading-none sm:text-3xl'>
                  {total[key as keyof typeof total]?.toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className='px-2 sm:p-6'>
        <ChartContainer
          config={chartConfig}
          className='aspect-auto h-[280px] w-full'
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='date'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className='w-[150px]'
                  nameKey='views'
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
