import React, { useEffect } from "react";
// @ts-ignore
import * as d3 from "d3";
import { Wallet } from "../../interfaces/Wallet";

export interface PieChartProps {
  walletCurrency: Wallet[];
}

export const PieChart = ({ walletCurrency }: PieChartProps) => {
  const data = walletCurrency.map((e) => {
    return { property: e.name, value: e.count * e.price };
  });
  useEffect(() => {
    if (!d3.select(".pie").selectAll("svg").empty()) {
      d3.select(".pie").selectAll("svg").remove();
    }
    if (!d3.select(".labels").selectAll("svg").empty()) {
      d3.select(".labels").selectAll("svg").remove();
    }

    const w = 100;
    const h = 100;
    const radius = w / 2;

    const svg = d3
      .select(".pie")
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .append("g")
      .style("margin-top", "50px")
      .attr("transform", `translate(${w / 2},${h / 2})`);
    const labels = d3
      .select(".labels")
      .append("svg")
      .attr("width", w * 2)
      .attr("height", data.length * 25 + 25);

    // @ts-ignore
    const formattedData = d3.pie().value((d) => d.value)(data);
    const arcGenerator = d3.arc().innerRadius(0).outerRadius(radius);
    const color = d3.scaleOrdinal().domain(data).range(d3.schemeSet2);

    // @ts-ignore
    svg
      .selectAll()
      .data(formattedData)
      .join("path")
      .attr("d", arcGenerator) // @ts-ignore
      .attr("fill", (d) => color(d))
      .style("opacity", 0.7);

    svg
      .selectAll()
      .data(formattedData)
      .join("text") // @ts-ignore
      .text((d) => d.property) // @ts-ignore
      .attr("transform", `translate(${w / 2}, ${h / 2})`);

    labels
      .selectAll("mydots")
      .data(formattedData)
      .enter()
      .append("circle")
      .attr("cx", 30) // @ts-ignore
      .attr("cy", (d, i) => 30 + i * 25) // 100 is where the first dot appears. 25 is the distance between dots
      .attr("r", 7)
      // @ts-ignore
      .style("fill", (d) => {
        return color(d);
      });

    labels
      .selectAll("mylabels")
      .data(formattedData)
      .enter()
      .append("text")
      .attr("x", 45) // @ts-ignore
      .attr("y", (d, i) => 35 + i * 25) // 100 is where the first dot appears. 25 is the distance between dots
      // @ts-ignore
      .text((d) => d.data.property)
      // @ts-ignore
      .style("fill", (d) => color(d))
      .style("text-anchor", "some middle");
  });

  return (
    <div className="pie-chart">
      <div className="pie"></div>
      <div className="labels"></div>
    </div>
  );
};
