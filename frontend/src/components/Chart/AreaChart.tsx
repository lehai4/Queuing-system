import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { data } from "../../mock/dummy";

type AreaProps = {
  value: string;
};
const AreaChart = ({ value }: AreaProps) => {
  const [datas, setDatas] = useState<any[]>(data.day.arr.map((item) => item));
  const options = {
    chart: {
      height: 550,
      stacked: true,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [20, 100, 100, 100],
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#8e8da4",
        },
        offsetX: 0,
        formatter: function (val: number) {
          return (val * 1).toFixed(0);
        },
      },
    },
  };
  const series = [
    {
      name: "Total",
      data: datas,
    },
  ];

  useEffect(() => {
    let result =
      value === "Ngày"
        ? data.day?.arr.map((item) => item)
        : value === "Tuần"
        ? data.week?.arr.map((item) => item)
        : data.month?.arr.map((item) => item);
    setDatas(result);
  }, [value]);
  return <Chart options={options} series={series} type="area" height={350} />;
};

export default AreaChart;
