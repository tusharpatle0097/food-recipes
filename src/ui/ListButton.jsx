import React from "react";
import { Button } from "@/components/ui/button";

const ListButton = ({ children, onClick, selectCategory }) => {
  return (
    <>
      <Button
        className={`cursor-pointer text-[13px] rounded-2xl px-3 mx-2  py-3 my-2 lg:flex items-center ${
          selectCategory
            ? "bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input"
            : ""
        }`}
        onClick={onClick}
        variant="outline"
      >
        {children}
      </Button>
    </>
  );
};

export default ListButton;
