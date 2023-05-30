import { Suspense } from "react";
import ChartComponent from "./chart";
import Chart from "chart.js";
import Loading from "./loading";

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const barData: Chart.ChartData = {
  labels: labels,
  datasets: [
    {
      label: "My Bar Chart",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};

const lineData: Chart.ChartData = {
  labels: labels,
  datasets: [
    {
      label: "My Line Chart",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

const bubbleData: Chart.ChartData = {
  datasets: [
    {
      label: "First Dataset",
      data: [
        {
          x: 20,
          y: 30,
          r: 15,
        },
        {
          x: 40,
          y: 10,
          r: 10,
        },
        {
          x: 28,
          y: 20,
          r: 20,
        },
      ],
      backgroundColor: "rgb(255, 99, 132)",
    },
  ],
};

const doughnutData: Chart.ChartData = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

const scatterData: Chart.ChartData = {
  labels: ["January", "February", "March", "April"],
  datasets: [
    {
      type: "bar",
      label: "Bar Dataset",
      data: [10, 20, 30, 40],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
    },
    {
      type: "line",
      label: "Line Dataset",
      data: [50, 50, 50, 50],
      fill: false,
      borderColor: "rgb(54, 162, 235)",
    },
  ],
};

const radarData = {
  labels: [
    "Eating",
    "Drinking",
    "Sleeping",
    "Designing",
    "Coding",
    "Cycling",
    "Running",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "My Second Dataset",
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgb(54, 162, 235)",
      pointBackgroundColor: "rgb(54, 162, 235)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)",
    },
  ],
};

const Home: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="p-10 bg-white min-h-screen">
        <h1 className="py-10 text-black font-bold text-2xl">
          Chart.js with Next.js
        </h1>
        <div className="grid gap-10">
          <div className="flex gap-10 w-full">
            <div className="w-full">
              <ChartComponent data={barData} type={"bar"} />
            </div>
            <div className="w-full">
              <ChartComponent data={lineData} type={"line"} />
            </div>
          </div>

          <div className="flex gap-10 w-full">
            <div className="w-full">
              <ChartComponent data={bubbleData} type={"bubble"} />
            </div>
            <div className="w-full">
              <ChartComponent data={scatterData} type={"scatter"} />
            </div>
          </div>

          <div className="flex gap-10 w-full max-h-[500px]">
            <div className="w-full">
              <ChartComponent data={doughnutData} type={"doughnut"} />
            </div>
            <div className="w-full">
              <ChartComponent data={radarData} type={"radar"} />
            </div>
          </div>
        </div>
        {/* <div className="grid md:grid-cols-2 md:grid-rows-3 grid-cols-1 grid-rows-1 gap-10 h-full">
        <div className="">
          <ChartComponent data={barData} type={"bar"} />
        </div>
        <div className="">
          <ChartComponent data={lineData} type={"line"} />
        </div>
        <div className="">
          <ChartComponent data={bubbleData} type={"bubble"} />
        </div>
        <div className="">
          <ChartComponent data={doughnutData} type={"doughnut"} />
        </div>
        <div>
          <ChartComponent data={scatterData} type={"scatter"} />
        </div>
        <div>
          <ChartComponent data={radarData} type={"radar"} />
        </div>
      </div> */}
      </div>
    </Suspense>
  );
};

export default Home;
