import iconCatdat from "../assets/icon/setting.png";
import iconMoniter from "../assets/icon/monitor.png";
import iconDichvu from "../assets/icon/dichvu.png";
import iconCapso from "../assets/icon/capso.png";
import iconBaocao from "../assets/icon/baocao.png";
import iconDashboard from "../assets/icon/dashboard.png";
import active from "../assets/icon/active.png";
import disabled from "../assets/icon/disable.png";
import iconOne from "../assets/icon/calender.png";
import iconTwo from "../assets/icon/calender1.png";
import iconThree from "../assets/icon/contact.png";
import iconFour from "../assets/icon/star.png";
import iconInscrease from "../assets/icon/increase.png";
import iconDescrease from "../assets/icon/decrease.png";
import monitorMinor from "../assets/icon/monitorMinor.png";
import service from "../assets/icon/mess.png";
import grantnumber from "../assets/icon/icon dasboard03.png";
import dotWaiting from "../assets/icon/dotdangcho.png";
import dotsudung from "../assets/icon/dotBoqua.png";
import dotboqa from "../assets/icon/disable.png";
type gridActiveAplianceProps = {
  statusActive: string;
};
type gridConnectAplianceProps = {
  statusConnect: string;
};
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
export const statusGrant = (data: number | undefined) => {
  return (
    <>
      {data === 1 ? (
        <div className="flex flex-row gap-2 items-center">
          <img src={`${dotsudung}`} alt="" />
          <span>Đang sử dụng</span>
        </div>
      ) : data === 0 ? (
        <div className="flex flex-row gap-2 items-center">
          <img src={`${dotWaiting}`} alt="" />
          <span>Đang chờ</span>
        </div>
      ) : data === -1 ? (
        <div className="flex flex-row gap-2 items-center">
          <img src={`${dotboqa}`} alt="" />
          <span>Bỏ qua</span>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export const item = [
  {
    name: "Số thứ tự đã cấp",
    icon: iconOne,
    total: 4.221,
    rate: "32,41%",
    iconRate: iconInscrease,
  },
  {
    name: "Số thứ tự đã sử dụng",
    icon: iconTwo,
    total: 3.721,
    rate: "32,41%",
    iconRate: iconDescrease,
  },
  {
    name: "Số thứ tự đang chờ",
    icon: iconThree,
    total: 468,
    rate: "56,41%",
    iconRate: iconInscrease,
  },
  {
    name: "Số thứ tự đã bỏ qua",
    icon: iconFour,
    total: 32,
    rate: "22,41%",
    iconRate: iconDescrease,
  },
];
export const items = [
  {
    total: 4.221,
    type: "Thiết bị",
    icon: monitorMinor,
    active: 3.799,
    noactive: 422,
    options: {
      colors: ["#FF7506", "#7E7D88"],
      plotOptions: {
        radialBar: {
          hollow: {
            size: "40%",
          },
          dataLabels: {
            name: {
              show: true,
              fontSize: "16px",
            },
            value: {
              show: true,
              fontSize: "14px",
            },
            total: {
              show: true,
              label: "Total",
            },
          },
        },
      },
      labels: ["Thiết bị", "Dịch vụ"],
    },
    series: [90, 15],
  },
  {
    total: 276,
    type: "Dịch vụ",
    icon: service,
    active: 3.799,
    noactive: 422,
    options: {
      colors: ["#4277FF", "#7E7D88"],
      plotOptions: {
        radialBar: {
          hollow: {
            size: "40%",
          },
          dataLabels: {
            name: {
              show: true,
              fontSize: "16px",
            },
            value: {
              show: true,
              fontSize: "14px",
            },
            total: {
              show: true,

              label: "Total",
            },
          },
        },
      },
      labels: ["Dịch vụ", ""],
    },
    series: [76, 25],
  },
  {
    total: 4.221,
    type: "Cấp số",
    icon: grantnumber,
    ussing: 3.721,
    waiting: 486,
    ignore: 32,
    options: {
      colors: ["#35C75A", "#7E7D88", "#F178B6"],
      plotOptions: {
        radialBar: {
          hollow: {
            size: "20%",
          },
          dataLabels: {
            name: {
              show: true,
              fontSize: "16px",
            },
            value: {
              show: true,
              fontSize: "14px",
            },
            total: {
              show: true,
              label: "Total",
            },
          },
        },
      },
      labels: ["Cấp số", "", ""],
    },
    series: [86, 15, 10],
  },
];

export const notifiItem = [
  {
    name: "Lê Chí Hải",
    timestamp: new Date(),
  },
  {
    name: "Lê Quỳnh Ái Vân",
    timestamp: new Date(),
  },
  {
    name: "Nguyễn Thúc Thanh Ngân",
    timestamp: new Date(),
  },
  {
    name: "Hồ Hoàng Lam",
    timestamp: new Date(),
  },
  {
    name: "Lê Chí Hải",
    timestamp: new Date(),
  },
];
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
export const paginationComponentOptions = {
  rowsPerPageText: "Page Number",
  rangeSeparatorText: "page",
  selectAllRowsItem: true,
  selectAllRowsItemText: "ALL",
};
