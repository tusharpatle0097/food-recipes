import React from "react";
import { Input } from "@/components/ui/input";

const SearchInput = ({ onChange, value }) => {
  return (
    <div>
      <Input
        type="email"
        placeholder="Search..."
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default SearchInput;
