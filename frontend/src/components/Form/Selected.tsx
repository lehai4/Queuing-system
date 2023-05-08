import { useState } from "react";
import Select from "react-select";
type SelectProp = {
  options: any[];
  name: string;
  placeholder: string;
  value: any;
  multi: boolean;
  handleChange: (e: any) => void;
};
type SelectedProps = {
  label: string;
  value: string;
};
const Selected = (props: SelectProp) => {
  const { options, handleChange, name, placeholder, value, multi } = props;
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionMulti, setSelectedOptionMulti] = useState<
    SelectedProps[]
  >([]);

  // select
  let valueCurr = { label: value, value: value };
  const handleSelectChange = (e: any) => {
    setSelectedOption(e);
    handleChange({
      target: {
        name: name,
        value: e.value,
      },
    });
  };
  // select Multi
  let valueMulti = value?.split(", ").map((item: any) => {
    return {
      label: item,
      value: item,
    };
  });
  const handleSelectChangeMulti = (e: any) => {
    setSelectedOptionMulti(e);
    let newValue = e
      .map((item: any) => {
        return item.value;
      })
      .join(", ");
    handleChange({
      target: {
        name: name,
        value: newValue,
      },
    });
  };
  return (
    <>
      {multi ? (
        <Select
          isMulti={multi}
          options={options}
          name={name}
          placeholder={placeholder}
          className="select-multi"
          value={
            selectedOptionMulti.length < 0 ? selectedOptionMulti : valueMulti
          }
          onChange={(event) => {
            handleSelectChangeMulti(event);
          }}
        />
      ) : (
        <Select
          isMulti={multi}
          options={options}
          name={name}
          placeholder={placeholder}
          value={selectedOption === null ? valueCurr : selectedOption}
          onChange={(event) => {
            handleSelectChange(event);
          }}
        />
      )}
    </>
  );
};

export default Selected;
