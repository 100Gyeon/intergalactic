import React from 'react';
import { Plot, Bubble, XAxis, YAxis, Tooltip } from '@semcore/d3-chart';
import { scaleLinear } from 'd3-scale';
import { Text } from '@semcore/typography';

export default () => {
  const MARGIN = 40;
  const width = 500;
  const height = 300;

  const xScale = scaleLinear()
    .range([MARGIN, width - MARGIN])
    .domain([0, 10]);

  const yScale = scaleLinear()
    .range([height - MARGIN, MARGIN])
    .domain([0, 10]);

  return (
    <Plot data={data} scale={[xScale, yScale]} width={width} height={height}>
      <YAxis>
        <YAxis.Ticks />
        <YAxis.Grid />
      </YAxis>
      <XAxis>
        <XAxis.Ticks />
      </XAxis>
      <Bubble x="x" y="y" value="value" label="label" />
      <Tooltip>
        {({ dataRow }) => {
          return {
            children: (
              <>
                <Tooltip.Title>Data</Tooltip.Title>
                <Text tag="div">X axis {dataRow.x}</Text>
                <Text tag="div">Y axis {dataRow.y}</Text>
                <Text tag="div">Value {dataRow.value}</Text>
              </>
            ),
          };
        }}
      </Tooltip>
    </Plot>
  );
};

const data = Array(10)
  .fill({})
  .map((d, i) => ({
    x: Math.random().toFixed(1) * 10,
    y: Math.random().toFixed(1) * 10,
    value: Math.random().toFixed(1) * 1000,
    label: `Label ${i}`,
  }));
