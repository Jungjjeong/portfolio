import React from 'react';
import * as R from 'reaviz';
import SectionWrapper from './TechStack.style';

const chartData = [
  { key: 'JAVASCRIPT', data: 30 },
  { key: 'PYTHON', data: 10 },
  { key: 'REACT', data: 20 },
  { key: 'HTML', data: 30 },
  { key: 'EMOTION', data: 15 },
  { key: 'CSS', data: 30 },
  { key: 'SCSS', data: 15 },
  { key: 'VUE', data: 10 },
  { key: 'NEXTJS', data: 10 },
  { key: 'TYPESCRIPT', data: 15 },
  { key: 'STRAPI', data: 5 },
  { key: 'FLASK', data: 5 },
  { key: 'SWIFT', data: 5 },
];

const TechStack = () => {
  const handleBubbleMouseEnter = (e: React.MouseEvent<HTMLOrSVGElement>) => {
    const target = e.target as SVGCircleElement;
    const { cx, cy } = target;
    target.style.transformOrigin = `${cx.animVal.value}px ${cy.animVal.value}px`;
    target.style.transform = 'scale(1.1)';
    target.style.transition = 'all 0.2s';
  };

  const handleBubbleMouseLeave = (e: React.MouseEvent<HTMLOrSVGElement>) => {
    const target = e.target as SVGCircleElement;
    target.style.transform = 'scale(1.0)';
    target.style.transition = 'all 0.2s';
  };

  return (
    <SectionWrapper>
      <R.BubbleChart
        height={600}
        width={600}
        data={chartData}
        series={
          <R.BubbleSeries
            colorScheme={'Pastel1'}
            bubble={
              <R.Bubble
                tooltip={<R.ChartTooltip disabled />}
                onMouseEnter={handleBubbleMouseEnter}
                onMouseLeave={handleBubbleMouseLeave}
              />
            }
            label={<R.BubbleLabel fontFamily='Inter' />}
          />
        }
      />
    </SectionWrapper>
  );
};

export default TechStack;
