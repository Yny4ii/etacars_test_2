import { PieChart, PieChartProps } from "./pieChart";
import { Story } from "@storybook/react";

export default {
  title: "Example/PieChart",
  component: PieChart,
};

const Template: Story<PieChartProps> = (args: PieChartProps) => {
  const walletCurrency = [
    {
      id: "bitcoin",
      name: "bitcoin",
      count: 2,
      price: 12,
    },
    {
      id: "ethereum",
      name: "ethereum",
      count: 5,
      price: 3,
    },
  ];
  return <PieChart walletCurrency={walletCurrency} />;
};

export const DefaultPieChart = Template.bind({});
DefaultPieChart.args = {};
