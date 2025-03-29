"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { GetDataNps } from "../../services/DashboardServices";
import { DashboardNpsGraphModel } from "../../models/DashboardModel";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ChartsBarNps() {
  const [series, setSeries] = useState<ApexAxisChartSeries>([
    {
      name: "Promotor",
      color: "#9B59B6",
      data: [],
    },
    {
      name: "Destrator",
      data: [],
      color: "#1DB954",
    },
    {
      name: "NPS",
      data: [],
      color: "#3B82F6",
    },
  ]);
  const [options, setOptions] = useState<ApexOptions>({
    chart: {
      sparkline: {
        enabled: false,
      },
      type: "bar",
      width: "100%",
      height: 400,
      toolbar: {
        show: false,
      },
    },
    fill: {
      opacity: 1,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: "100%",
        borderRadiusApplication: "end",
        borderRadius: 6,
        dataLabels: {
          position: "top",
        },
      },
    },
    legend: {
      show: true,
      position: "bottom",
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
        formatter: function (value) {
          return "✨" + value;
        },
      },
      categories: [],
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
      },
    },
    grid: {
      show: true,
      strokeDashArray: 4,
      padding: {
        left: 12,
        right: 2,
        top: -20,
      },
    },
  });

  const getDataNps = async () => {
    try {
      const response = await GetDataNps();

      const data: DashboardNpsGraphModel[] = response.data.data;
      const promotor = [];
      const destrator = [];
      const nps = [];
      const produto = [];
      for (const item of data) {
        produto.push(item.nm_product);
        promotor.push(item.pct_promotor);
        destrator.push(item.pct_detrador);
        nps.push(item.nu_nps);
      }

      setSeries([
        { ...series[0], data: promotor },
        { ...series[1], data: destrator },
        { ...series[2], data: nps },
      ]);

      setOptions({
        ...options,
        xaxis: {
          ...options.xaxis,
          categories: produto,
        },
      });
    } catch (error) {}
  };

  useEffect(() => {
    getDataNps();
  }, []);

  return (
    <div>
      <ApexChart type="bar" options={options} series={series} />
    </div>
  );
}
