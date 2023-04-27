import iconCatdat from "../assets/icon/setting.png";
import iconMoniter from "../assets/icon/monitor.png";
import iconDichvu from "../assets/icon/dichvu.png";
import iconCapso from "../assets/icon/capso.png";
import iconBaocao from "../assets/icon/baocao.png";
import iconDashboard from "../assets/icon/dashboard.png";
import active from "../assets/icon/active.png";
import disabled from "../assets/icon/disable.png";

export const links = [
  {
    name: "Daskboard",
    iconVector: iconDashboard,
    path: "dashboard",
    children: "",
  },
  {
    name: "Thiết bị",
    iconVector: iconMoniter,
    path: "thiet-bi",
    children: "",
  },
  {
    name: "Dịch vụ",
    iconVector: iconDichvu,
    path: "dich-vu",
    children: "",
  },
  {
    name: "Cấp số",
    iconVector: iconCapso,
    path: "cap-so",
    children: "",
  },
  {
    name: "Báo cáo",
    iconVector: iconBaocao,
    path: "bao-cao",
    children: "",
  },
  {
    name: "Cài đặt hệ thống",
    iconVector: iconCatdat,
    path: "cai-dat",
    children: "",
  },
];
type gridActiveAplianceProps = {
  statusActive: number;
};
export const gridActiveApliance = (props: gridActiveAplianceProps) => (
  <>
    {props.statusActive === 1 ? (
      <div className="status status--active inline-flex">
        <img src={`${active}`} alt="" />
        <button
          type="button"
          className="button-active capitalize rounded-2xl text-md"
        >
          Hoạt động
        </button>
      </div>
    ) : props.statusActive === 0 ? (
      <div className="status status--disable inline-flex">
        <img src={`${disabled}`} alt="" />
        <button
          type="button"
          className="button-disable capitalize rounded-2xl text-md"
        >
          Ngừng hoạt động
        </button>
      </div>
    ) : (
      <></>
    )}
  </>
);
type gridConnectAplianceProps = {
  statusConnect: number;
};
export const gridConnectApliance = (props: gridConnectAplianceProps) => (
  <>
    {props.statusConnect === 1 ? (
      <div className="status status--connect inline-flex">
        <img src={`${active}`} alt="" />
        <button
          type="button"
          className="button-connect capitalize rounded-2xl text-md"
        >
          Kết nối
        </button>
      </div>
    ) : props.statusConnect === 0 ? (
      <div className="status status--disconnect inline-flex">
        <img src={`${disabled}`} alt="" />
        <button
          type="button"
          className="button-disconnect capitalize rounded-2xl text-md"
        >
          Mất kết nối
        </button>
      </div>
    ) : (
      <></>
    )}
  </>
);

export const Pagination = () => {
  let gridElement: any = document.getElementById("gridcomp");
  if (gridElement && gridElement.ej2_instances[0]) {
    let gridInstance = gridElement.ej2_instances[0];
    const rowHeight = gridInstance.getRowHeight();
    const gridHeight = gridInstance.height;
    const pageSize = gridInstance.pageSettings.pageSize;
    const pageResize = (gridHeight - pageSize * rowHeight) / rowHeight;
    gridInstance.pageSettings.pageSize = pageSize + Math.round(pageResize);
  }
};
