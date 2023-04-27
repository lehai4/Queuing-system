import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import moment from "moment";
type DatePickerProps = {
  handleChangeDate: (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => void;
  format: string;
  placholder: string;
  className: string;
  value: string;
  name: string;
};
const DatePicker = ({
  handleChangeDate,
  format,
  placholder,
  className,
  value,
  name,
}: DatePickerProps) => {
  let currentDate = moment(value, "DD/MM/YYYY").toDate();
  return (
    <DatePickerComponent
      format={format}
      value={currentDate}
      placeholder={placholder}
      name={name}
      className={className ? className : "default"}
      onChange={(e: React.ChangeEvent<HTMLInputElement>, type: string) =>
        handleChangeDate(e, type)
      }
    />
  );
};

export default DatePicker;
