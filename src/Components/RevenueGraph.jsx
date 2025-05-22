import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const RevenueGraph = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Revenue",
        data: [100, 120, 80, 150, 200, 180, 220, 170, 190, 160, 210, 180],
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        fill: true,
      },
      {
        label: "Expenses",
        data: [80, 100, 60, 120, 150, 140, 160, 130, 140, 120, 160, 140],
        borderColor: "#FBBF24",
        backgroundColor: "rgba(251, 191, 36, 0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top", labels: { font: { size: 10 } } },
      title: { display: true, text: "Revenue: $18,500 All Time", font: { size: 14 } },
    },
    scales: {
      x: { ticks: { font: { size: 10 } } },
      y: { ticks: { font: { size: 10 } } },
    },
  };

  return (
    <div className="bg-white p-3 md:p-4 rounded-lg shadow">
      <Line data={data} options={options} height={200} />
    </div>
  );
};

export default RevenueGraph;


