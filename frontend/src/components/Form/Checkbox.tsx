import React from "react";
type CheckBoxProps = {
  id: string;
  type: string;
  name: string;
  isChecked: boolean | undefined;
  handleClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Checkbox = ({
  id,
  type,
  name,
  handleClick,
  isChecked,
}: CheckBoxProps) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      onChange={handleClick}
      checked={isChecked}
      value={(!isChecked).toString()}
    />
  );
};

export default Checkbox;
