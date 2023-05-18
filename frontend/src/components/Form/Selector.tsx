import { useEffect, useState } from "react";
import arrow from "../../assets/icon/fi_chevron-down.png";
type SelectorProps = {
  items: any[];
  isShowCommon: boolean;
  optionComon: string;
  setValue: (value: string) => void;
};
const Selector = (props: SelectorProps) => {
  const [selected, setSelected] = useState<string>(props.optionComon);
  const [open, setOpen] = useState(false);

  const newArr = props.optionComon;

  const currentArr = props.isShowCommon
    ? [newArr, ...props.items]
    : props.items;
  useEffect(() => {
    props.setValue(selected);
  }, [selected]);

  return (
    <div className="relative font-medium">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full  p-2 flex items-center justify-between border border-solid rounded ${
          !selected && "text-gray-700"
        }
        ${open ? "border-orange-300" : "border-zinc-300"}
        `}
      >
        {selected
          ? selected?.length > 19
            ? selected?.substring(0, 19) + "..."
            : selected
          : `${props.optionComon}`}
        <img src={`${arrow}`} alt="" className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`absolute w-full z-20 bg-white border border-solid border-zinc-300 overflow-y-auto  ${
          open ? "block" : "hidden"
        }`}
      >
        {currentArr
          .filter((item, i, arrayCurrent) => {
            return arrayCurrent.indexOf(item) === i;
          })
          .map((item, i) => (
            <li
              key={i}
              className={`p-2 mt-1 mb-1 text-sx hover:bg-orange-50 hover:text-black
                ${item === selected && "bg-orange-10 text-black"}
                `}
              onClick={() => {
                if (item !== selected) {
                  setSelected(item);
                  setOpen(false);
                }
              }}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Selector;
