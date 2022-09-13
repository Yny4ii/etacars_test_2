import { TopCurrency, TopCurrencyProps } from "./topCurrency";
import { Story } from "@storybook/react";

export default {
  title: "Example/TopCurrency",
  component: TopCurrency,
};

const Template: Story<TopCurrencyProps> = (args: TopCurrencyProps) => {
  const topCurrencies = [
    {
      id: "bitcoin",
      rank: "1",
      symbol: "bit",
      name: "Bitcoin",
      supply: "12",
      maxSupply: "12",
      marketCapUsd: "12",
      volumeUsd24Hr: "12",
      priceUsd: "12",
      changePercent24Hr: "12",
      vwap24Hr: "12",
    },
    {
      id: "eth",
      rank: "2",
      symbol: "eth",
      name: "Ethereum",
      supply: "10",
      maxSupply: "10",
      marketCapUsd: "10",
      volumeUsd24Hr: "10",
      priceUsd: "10",
      changePercent24Hr: "10",
      vwap24Hr: "10",
    },
  ];
  return <TopCurrency topCurrencies={topCurrencies} />;
};

export const DefaultTopCurrency = Template.bind({});
DefaultTopCurrency.args = {};
