import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const EmailChart = () => {
  const data = {
    labels: ["Sent", "Read", "Failed"],
    datasets: [
      {
        data: [70, 24, 6],
        backgroundColor: ["#3B82F6", "#FBBF24", "#D1D5DB"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "bottom", labels: { font: { size: 10 } } },
      title: { display: true, text: "Email Sent", font: { size: 14 } },
    },
  };

  return (
    <div className="bg-white p-3 md:p-4 rounded-lg shadow">
      <Doughnut data={data} options={options} height={200} />
    </div>
  );
};

export default EmailChart;
