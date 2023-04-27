type InputProps = {
  placeholder: string;
  name: string;
  typeInput: string;
  id: string;
  value: string | undefined;
  width: number;
  className: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input = ({
  placeholder,
  name,
  typeInput,
  width,
  className,
  value,
  id,
  handleChange,
}: InputProps) => {
  return (
    <input
      type={typeInput !== "" ? typeInput : "text"}
      name={name}
      id={id}
      style={{ width }}
      value={value}
      placeholder={`${placeholder}`}
      className={className != "" ? className : ""}
      onChange={handleChange}
    />
  );
};

export default Input;
