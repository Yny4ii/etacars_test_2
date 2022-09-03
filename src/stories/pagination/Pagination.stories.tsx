import { Pagination, PaginationProps } from "./Pagination";
import { Story } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Example/Pagination",
  component: Pagination,
};

const Template: Story<PaginationProps> = (args: PaginationProps) => {
  const limit = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Pagination
      {...args}
      limit={limit}
      currentPage={currentPage}
      pagination={paginate}
    />
  );
};
export const DefaultPagination = Template.bind({});
DefaultPagination.args = {};
