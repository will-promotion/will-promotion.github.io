"use strict";

// chart.js
const tooltips = {
  callbacks: {
    label: (tooltipItem, data) => {
      return `${data.labels[tooltipItem.index]}`;
    },
  },
};

const legend = {
  display: true,
  fullWidth: false,
  position: "right",
  labels: {
    fontSize: 16,
    boxWidth: 15,
    boxHeight: 10,
  },
};

const options = {
  rotation: 0,
  cutoutPercentage: 70,
  tooltips: tooltips,
  legend: legend,
};

const years = document.querySelector("#years");
const yearsChart = new Chart(years, {
  type: "doughnut",
  data: {
    labels: ["1年 32人", "2年 14人", "3年 2人", "4年 3人"],
    datasets: [
      {
        backgroundColor: ["#f4b3ca", "#b0da37", "#fa7972", "#644529"],
        data: [32, 14, 2, 3],
      },
    ],
  },
  options: options,
});

const gender = document.querySelector("#gender");
const genderChart = new Chart(gender, {
  type: "doughnut",
  data: {
    labels: ["男子 38人", "女子 13人"],
    datasets: [
      {
        backgroundColor: ["#f4b3ca", "#b0da37"],
        data: [38, 13],
      },
    ],
  },
  options: options,
});

const university = document.querySelector("#university");
const universityChart = new Chart(university, {
  type: "doughnut",
  data: {
    labels: ["早稲田 49人", "他大 2人"],
    datasets: [
      {
        backgroundColor: ["#f5b8b5", "#b5c97c"],
        data: [49, 2],
      },
    ],
  },
  options: options,
});

const department = document.querySelector("#department");
const departmentChart = new Chart(department, {
  type: "doughnut",
  data: {
    labels: [
      "国教 3人",
      "社学 9人",
      "教育 7人",
      "商 4人",
      "法 3人",
      "創造 2人",
      "先進 1人",
      "基幹 15人",
      "人科 2人",
      "文構 1人",
      "政経 2人",
    ],
    datasets: [
      {
        backgroundColor: [
          "#be8096",
          "#f4b3ca",
          "#ff3e82",
          "#cd0049",
          "#644529",
          "#bf7e45",
          "#d96600",
          "#3b5000",
          "#638600",
          "#87b701",
          "#a7e200",
        ],
        data: [3, 9, 7, 4, 3, 2, 1, 15, 2, 1, 2],
      },
    ],
  },
  options: {
    rotation: -3.3,
    cutoutPercentage: 70,
    legend: legend,
    tooltips: tooltips,
  },
});
