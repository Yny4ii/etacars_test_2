import { Pagination, PaginationProps } from "./Pagination";
import { Story } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Example/Pagination",
  component: Pagination,
};

const Template: Story<PaginationProps> = (args: PaginationProps) => {
  const [currency, setCurrency] = useState<number>(100);

  const [currenciesPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Pagination
      {...args}
      paginate={paginate}
      currenciesPerPage={currenciesPerPage}
      totalCurrency={currency}
    />
  );
};
export const DefaultPagination = Template.bind({});
DefaultPagination.args = {};
