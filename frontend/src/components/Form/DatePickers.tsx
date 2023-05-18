import DatePicker from "react-datepicker";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Icon from "@mui/material/Icon";
import "react-datepicker/dist/react-datepicker.css";
type DatePickerProps = {
  valueStart: Date | undefined;
  valueEnd: Date | undefined;
  showIcon: boolean;
  isRange: boolean;
  setValueStart: (value: Date) => void;
  setValueEnd: (value: Date) => void;
};

const DatePickers = (props: DatePickerProps) => {
  return (
    <>
      {!props.isRange ? (
        <DatePicker
          dateFormat="dd/MM/yyyy"
          startDate={props.valueStart}
          showIcon={props.showIcon}
          selected={props.valueStart}
          onChange={(date: Date) => props.setValueStart(date)}
        />
      ) : (
        <>
          <DatePicker
            dateFormat="dd/MM/yyyy"
            selectsStart
            showIcon={props.showIcon}
            selected={props.valueStart}
            onChange={(date: Date) => props.setValueStart(date)}
          />
          <ArrowRightIcon />
          <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={props.valueEnd}
            onChange={(date: Date) => props.setValueEnd(date)}
            selectsEnd
            startDate={props.valueStart}
            endDate={props.valueEnd}
            showIcon={props.showIcon}
            minDate={props.valueStart}
          />
        </>
      )}
    </>
  );
};

export default DatePickers;
