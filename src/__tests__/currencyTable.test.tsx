import { render, screen } from "@testing-library/react";
import { CurrencyTable } from "../stories/table/currencyTable";

describe("Modal form component", () => {
  const currencies = [
    {
      id: "bitcoin",
      rank: "1",
      symbol: "BTC",
      name: "Bitcoin",
      supply: "19149693.0000000000000000",
      maxSupply: "21000000.0000000000000000",
      marketCapUsd: "402091403415.8631463722631014",
      volumeUsd24Hr: "19346822228.5613648545965550",
      priceUsd: "20997.2767404607032798",
      changePercent24Hr: "-5.7727431389189568",
      vwap24Hr: "22241.4956375044450376",
    },
    {
      id: "ethereum",
      rank: "2",
      symbol: "ETH",
      name: "Ethereum",
      supply: "122351764.7490000000000000",
      maxSupply: "1",
      marketCapUsd: "194293285603.3285218556828995",
      volumeUsd24Hr: "8409320825.3628812780378802",
      priceUsd: "1587.9892374410276832",
      changePercent24Hr: "-8.4171526438751993",
      vwap24Hr: "1706.7761798522703310",
    },
    {
      id: "tether",
      rank: "3",
      symbol: "USDT",
      name: "Tether",
      supply: "67818333473.3648700000000000",
      maxSupply: "1",
      marketCapUsd: "67873036532.9709547662747813",
      volumeUsd24Hr: "28810137285.7666378970758921",
      priceUsd: "1.0008066116756993",
      changePercent24Hr: "0.0459040203290992",
      vwap24Hr: "1.0007039308432112",
    },
  ];
  it("Modal form render", () => {
    render(
      <CurrencyTable
        currencies={currencies}
        setModalActive={() => {}}
        setSelectedCurrency={() => {}}
      />
    );
    const currencyTable = screen.getByRole("table");
    expect(currencyTable).toBeInTheDocument();
    expect(currencyTable).toHaveClass("table");
  });
});
