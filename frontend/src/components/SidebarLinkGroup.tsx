import { useState } from "react";
type Props = { children: any; activecondition: boolean };
function SidebarLinkGroup({ children, activecondition }: Props) {
  const [open, setOpen] = useState(activecondition);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`pt-15-override pb-15-override pl-7 px-3 py-2 mb-0.5 last:mb-0 ${
        activecondition && "bg-orange-400"
      }`}
    >
      {children(handleClick, open)}
    </div>
  );
}

export default SidebarLinkGroup;
