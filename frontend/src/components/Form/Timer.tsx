type TimerProps = {
  step: number;
  value: string;
  name: string;
  handleChangeTime: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Timer = ({ name, value, step, handleChangeTime }: TimerProps) => {
  return (
    <input
      type="time"
      value={value}
      name={name}
      step={step}
      onChange={handleChangeTime}
    />
  );
};

export default Timer;
