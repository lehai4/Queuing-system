import { useState } from "react";
import Select from "react-select";
type SelectProp = {
  options: any[];
  name: string;
  placeholder: string;
  value: any;
  handleChange: (e: any) => void;
};
const Selected = (props: SelectProp) => {
  const { options, handleChange, name, placeholder } = props;
  const [selectedOption, setSelectedOption] = useState(null);
  const handleSelectChange = (e: any) => {
    setSelectedOption(e);
    handleChange({
      target: {
        name: name,
        value: e.value,
      },
    });
  };
  return (
    <Select
      options={options}
      name={name}
      placeholder={placeholder}
      value={selectedOption}
      onChange={(event) => {
        handleSelectChange(event);
      }}
    />
  );
};

export default Selected;
