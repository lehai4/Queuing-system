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
  statusActive: string;
};
export const gridActiveApliance = (props: gridActiveAplianceProps) => (
  <>
    {props.statusActive === "Hoạt động" ? (
      <div className="status status--active inline-flex items-center">
        <img
          src={`${active}`}
          alt=""
          style={{ borderRadius: "50%", height: "fit-content" }}
        />
        <button
          type="button"
          className="ml-2 button-active capitalize rounded-2xl text-md"
        >
          {props.statusActive}
        </button>
      </div>
    ) : props.statusActive === "Ngưng hoạt động" ? (
      <div className="status status--disable inline-flex items-center">
        <img
          src={`${disabled}`}
          alt=""
          style={{ borderRadius: "50%", height: "fit-content" }}
        />
        <button
          type="button"
          className="ml-2 button-disable capitalize rounded-2xl text-md"
        >
          {props.statusActive}
        </button>
      </div>
    ) : (
      <></>
    )}
  </>
);
type gridConnectAplianceProps = {
  statusConnect: string;
};
export const gridConnectApliance = (props: gridConnectAplianceProps) => (
  <>
    {props.statusConnect === "Kết nối" ? (
      <div className="status status--connect inline-flex items-center">
        <img
          src={`${active}`}
          alt=""
          style={{ borderRadius: "50%", height: "fit-content" }}
        />
        <button
          type="button"
          className="ml-2 button-connect capitalize rounded-2xl text-md"
        >
          {props.statusConnect}
        </button>
      </div>
    ) : props.statusConnect === "Mất kết nối" ? (
      <div className="status status--disconnect inline-flex items-center">
        <img
          src={`${disabled}`}
          alt=""
          style={{ borderRadius: "50%", height: "fit-content" }}
        />
        <button
          type="button"
          className="ml-2 button-disconnect capitalize rounded-2xl text-md"
        >
          {props.statusConnect}
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
