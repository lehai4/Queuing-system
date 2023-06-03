import { useEffect, useState } from "react";
type Props = { children: any; activecondition: boolean };
function SidebarLinkGroup({ children, activecondition }: Props) {
  const [open, setOpen] = useState(activecondition);

  const handleClick = () => {
    setOpen(!open);
  };
  useEffect(() => {
    console.log(open);
  }, [open]);
  return (
    <div
      className={`pt-15-override pb-15-override pl-7 px-3 py-2 mb-0.5 last:mb-0 text-black ${
        activecondition && "bg-orange-400"
      }`}
    >
      {children(handleClick, open)}
    </div>
  );
}

export default SidebarLinkGroup;
