import { Bar } from "react-chartjs-2";
import "./customBarChart.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type _data = {
  topic: string;
  count: any;
};

interface data {
  barChartData: _data[] | undefined;
  service_type: string | undefined;
}

function CustomBarChart({ barChartData, service_type }: data) {
  // if (!barChartData || barChartData.length === 0 || !barChartData[0].topic || !barChartData[0].count ) {
  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         height: "400px",
  //       }}
  //     >
  //       <p>No data available for the bar chart.</p>
  //     </div>
  //   );
  // }

  const sortedData = barChartData
    ?.filter((item: { topic: string }) => item.topic !== "Other")
    .sort(
      (a: { count: string }, b: { count: string }) =>
        (b.count as unknown as number) - (a.count as unknown as number)
    );

  sortedData?.push(
    barChartData?.find((item: { topic: string }) => item.topic === "Other")!
  );

  const labels = sortedData?.map((item: { topic: any }) => item?.topic);
  const counts = sortedData?.map((item: { count: any }) => item?.count);
  const data = {
    labels: labels,
    datasets: [
      {
        label: `Total Revenue by ${service_type}`,
        data: counts,
        backgroundColor: [
          "#9AABFF",
          "#9A9EB2",
          "#0E8C43",
          "#CC2929",
          "#E09EFF",
        ],
        barThickness: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      datalabels: {
        display: false,
      },
    },
    scales: {
      x: {
        display: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <Bar data={data} options={options} />
      {/* <Bar data={data} options={options} /> */}
    </>
  );
}

export default CustomBarChart;
