import { Wallet, WalletProps } from "./wallet";
import { Story } from "@storybook/react";

export default {
  title: "Example/Wallet",
  component: Wallet,
};

const Template: Story<WalletProps> = (args: WalletProps) => {
  return (
    <Wallet
      setModalActive={() => {}}
      currentPrice={100}
      walletDifference={10}
      walletDifferencePercent={10}
    />
  );
};
export const DefaultWallet = Template.bind({});
DefaultWallet.args = {};
