"use client";
import { useEffect, useRef } from "react";
import ChartAuto from "chart.js/auto";
import Chart from "chart.js";

interface ChartProps {
  type:
    | "bar"
    | "line"
    | "bubble"
    | "doughnut"
    | "pie"
    | "polarArea"
    | "scatter"
    | "radar";
  data: Chart.ChartData;
}

const ChartComponent: React.FC<ChartProps> = ({ data, type }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  //   const plugin = {
  //     id: "customCanvasBackgroundColor",
  //     beforeDraw: (chart: any, args: any, options: any) => {
  //       const { ctx } = chart;
  //       ctx.save();
  //       ctx.globalCompositeOperation = "destination-over";
  //       ctx.fillStyle = options.color || "#99ffff";
  //       ctx.fillRect(0, 0, chart.width, chart.height);
  //       ctx.restore();
  //     },
  //   };
  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        new ChartAuto(ctx, {
          type: type,
          data: data,

          // change backgroundColor
          //   options: {
          //     plugins: {
          //       customCanvasBackgroundColor: {
          //         color: "lightGreen",
          //       },

          //   subtitle: {
          //     display: true,
          //     text: "Custom Chart Subtitle",
          //   },
          //   title: {
          //     display: true,
          //     text: 'Custom Chart Title'
          // }
          //     },
          //   },
          //   plugins: [plugin],
        });
      }
    }
  }, [data, type]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
