import React from "react";
import { Input } from "@/components/ui/input";

const SearchInput = ({ onChange, value,placeholder }) => {
  return (
    <div>
      <Input
        type="email"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
     
      />
    </div>
  );
};

export default SearchInput;
