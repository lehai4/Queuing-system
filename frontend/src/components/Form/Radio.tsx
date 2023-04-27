type RadioProps = {
  id: string;
  value: number;
  checked: boolean;
  type: string | number;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string | number
  ) => void;
};
const Radio = ({ id, value, checked, handleChange, type }: RadioProps) => {
  return (
    <input
      id={id}
      type="radio"
      checked={checked}
      value={value}
      onChange={(e) => handleChange(e, type)}
    />
  );
};

export default Radio;
