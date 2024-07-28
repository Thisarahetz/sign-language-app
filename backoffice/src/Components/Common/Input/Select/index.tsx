import React, { useState } from "react";

type Order_Status =
  | "PENDING"
  | "ONGOING"
  | "WATING_FOR_START"
  | "PAID_WATING_FOR_START"
  | "SCHEDULED"
  | "COMPLETED";

interface SelectProps {
  searchQuery: {
    order_type: Order_Status | null | undefined;
  };
  setSearchQuery: React.Dispatch<
    React.SetStateAction<{
      order_type: Order_Status | null | undefined;
    }>
  >;
}

const Select: React.FC<SelectProps> = ({ searchQuery, setSearchQuery }) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchQuery({
      ...searchQuery,
      order_type: e.target.value as Order_Status,
    });
  };

  return (
    <select
      className="form_input"
      name="payoutStatus"
      id="payoutStatus"
      value={
        searchQuery.order_type === null || searchQuery.order_type === undefined
          ? "Select"
          : searchQuery.order_type
      }
      onChange={handleSelectChange}
    >
      <option value="">Select</option>
      <option value="PENDING">Pending</option>
      <option value="ONGOING">Ongoing</option>
      <option value="WATING_FOR_START">Waiting for Start</option>
      <option value="PAID_WATING_FOR_START">Paid Waiting for Start</option>
      <option value="SCHEDULED">Scheduled</option>
      <option value="COMPLETED">Completed</option>
    </select>
  );
};

export default Select;
