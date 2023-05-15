import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

type MiniCalendarProps = {
  selectRange: boolean;
};
export default function MiniCalendar(props: MiniCalendarProps) {
  const { selectRange } = props;
  const [value, setValue] = useState<Date>(new Date());
  const handleChange = (event: any) => {
    setValue(event);
  };
  return (
    <Calendar
      onChange={(e) => handleChange(e)}
      value={value}
      selectRange={selectRange}
      view={"month"}
      tileContent={<span color="brand.500"></span>}
      //   prevLabel={<Icon as={MdChevronLeft} w="24px" h="24px" mt="4px" />}
      //   nextLabel={<Icon as={MdChevronRight} w="24px" h="24px" mt="4px" />}
    />
  );
}
