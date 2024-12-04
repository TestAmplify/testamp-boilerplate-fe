"use client";
import { Icon } from "@iconify/react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useTheme } from "@/contexts/ThemeContext";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TrackProgress = () => {
  const { darkMode } = useTheme();

  const options = {
    responsive: true,
    spanGaps: true,
    plugins: {
      legend: {
        display: false, // Hides the legend
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hides vertical grid lines
        },
        border: {
          display: false, // Removes the top border above the months
        },
        ticks: {
          color: `${darkMode ? "#6b7280" : "#676767"}`, // Gray or white color for the month labels
          font: {
            size: 13, // Font size for x-axis labels
          },
        },
      },
      y: {
        display: false, // Hides the Y-axis completely
      },
    },
    elements: {
      line: {
        borderWidth: 1.5, // Thickness of the line
      },
    },
  };

  const data = {
    labels: [
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],

    datasets: [
      {
        label: "Progress",
        data: [5, 10, , 2, 15, 13, 18, 10, , 30],
        borderColor: `${darkMode ? "#405CBA" : "#142E84"}`,
        pointBorderColor: "#FFFFFF",
        pointBackgroundColor: "#142E84",
        pointBorderWidth: 4,
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0,
      },
    ],
  };

  return (
    <div className="px-7 pt-4 pb-2 border border-foundation-grey-light dark:border-gray-700 drop-shadow-sm rounded-xl h-full">
      <div className="flex items-center flex-wrap gap-2 mb-7">
        <h3 className="font-semibold text-[22px]">Track your progress</h3>
        <span className="flex items-center gap-2 font-medium text-[13px] text-dashboard-green">
          <Icon icon="meteor-icons:arrow-trend-up" className="w-5 h-5" />
          +15.2% this month
        </span>
      </div>
      <Line data={data} options={options} height={"100%"} />
    </div>
  );
};
export default TrackProgress;
