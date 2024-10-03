/* eslint-disable react/prop-types */
import Chart from "react-google-charts";

const PieChart = ({ data }) => {
  // Options
  const options = {
    legendTextStyle: {
      color: "white",
      backgroundColor: "transparent",
    },
    pieStartAngle: 100,
    backgroundColor: "transparent",
    color: "white",
  };
  return (
    <div className="h-[calc(100%-324px)]  overflow-hidden lg:h-auto  dark:bg-transparent bg-slate-800 mt-5 rounded-xl">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"450px"}
      />
    </div>
  );
};
export default PieChart;
