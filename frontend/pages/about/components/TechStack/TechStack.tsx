import { BubbleChart, Bubble, BubbleSeries, ChartTooltip } from 'reaviz';

const data = [
  { key: 'JAVASCRIPT', data: 20 },
  { key: 'PYTHON', data: 10 },
  { key: 'REACT', data: 15 },
  { key: 'HTML', data: 20 },
  { key: 'CSS', data: 20 },
  { key: 'SCSS', data: 15 },
  { key: 'VUE', data: 10 },
  { key: 'NEXTJS', data: 10 },
];

const TechStack = () => {
  return (
    <BubbleChart
      height={500}
      width={500}
      data={data}
      series={
        <BubbleSeries
          colorScheme={'PuBu'}
          bubble={<Bubble tooltip={<ChartTooltip disabled />} />}
        />
      }
    />
  );
};

export default TechStack;
