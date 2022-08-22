import React, { useEffect, useRef, useState } from "react";
// @ts-ignore
import * as d3 from "d3";
import { Wallet } from "../../interfaces/Wallet";

export interface PieChartProps {
  walletCurrency: Wallet[];
}

export const PieChart = ({ walletCurrency }: PieChartProps) => {
  const [data] = useState(
    walletCurrency.map((e) => {
      return { property: e.name, value: e.count * e.price };
    })
  );
  const svgRef = useRef();
  useEffect(() => {
    const w = 100;
    const h = 100;
    const radius = w / 2;

    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("overflow", "visible")
      .style("margin-top", "50px");

    const formattedData = d3.pie().value((d) => d.value)(data);
    const arcGenerator = d3.arc().innerRadius(0).outerRadius(radius);
    const color = d3.scaleOrdinal().range(d3.schemeSet2);

    svg
      .selectAll()
      .data(formattedData)
      .join("path")
      .attr("d", arcGenerator)
      .attr("fill", (d) => color(d.value))
      .style("opacity", 0.7);

    svg
      .selectAll()
      .data(formattedData)
      .join("text")
      .text((d) => d.data.property)
      .attr("transform", (d) => `translate(${arcGenerator.centroid(d)})`)
      .style("text-anchor", "middle");
  }, [data]);

  return (
    <div className="pie-chart">
      <svg className="pie-chart-svg" ref={svgRef}></svg>
    </div>
  );
};
