import Chart from "react-apexcharts";
type RadialbarMultiProps = {
  options: object;
  series: number[];
};
const RadialbarMulti = (props: RadialbarMultiProps) => {
  return (
    <Chart
      options={props.options}
      series={props.series}
      type="radialBar"
      height="120"
      width="120"
    />
  );
};

export default RadialbarMulti;
