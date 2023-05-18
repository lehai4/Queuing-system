import { SvgIcon } from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
type MiniCalendarProps = {
  selectedDate: Date;
  selectRange: boolean;
  handleChange: (e: any) => void;
};
export default function MiniCalendar(props: MiniCalendarProps) {
  const { selectRange, handleChange, selectedDate } = props;
  return (
    <Calendar
      value={selectedDate}
      selectRange={selectRange}
      onChange={(e) => handleChange(e)}
      view={"month"}
      tileContent={<span color="brand.500"></span>}
      prevLabel={<SvgIcon component={MdChevronLeft} />}
      nextLabel={<SvgIcon component={MdChevronRight} />}
    />
  );
}
