import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  TooltipItem,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

type _data = {
 labels: any;
  percentage: any;
};

interface data {
  pieChartdata: _data[] | undefined;
  service_type: string | undefined;
}

const CustomPieChart = ({ pieChartdata, service_type }: data) => {
  if (
    !pieChartdata ||
    pieChartdata.length === 0 ||
    !pieChartdata[0].labels ||
    !pieChartdata[0].percentage
  ) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
        }}
      >
        <p>No data available for the Pie chart.</p>
      </div>
    );
  }

  const labels: string[] = [];

  const percentages: number[] = [];

  const total = pieChartdata.reduce((acc, data) => {
    return acc + data.percentage;
  }, 0);

  pieChartdata.forEach((data) => {
    labels.push(data.labels);
    percentages.push((data.percentage / total) * 100);
    
  });

  const data = {
    labels: labels,
    datasets: [
      {
        label: `Total Revenue by ${service_type}`,
        data: percentages,
        backgroundColor: [
          "#004DE5",
          "#9A9EB2",
          "#BABDCC",
          "#D8DAE5",
          "#EBECF2",
        ],
        hoverBackgroundColor: [
          "#004DE5",
          "#9A9EB2",
          "#BABDCC",
          "#D8DAE5",
          "#EBECF2",
        ],
      },
    ],
  };

  return (
    <div style={{ width: "400px", margin: "0 auto" }}>
      <Pie
        data={data}
        options={{
          responsive: true,
          plugins: {
            datalabels: {
              color: "#fff",
              formatter: (value: number) => {
                return `${value.toFixed(2)}%`;
              },
            },
          },
        }}
      />
    </div>
  );
};

export default CustomPieChart;
