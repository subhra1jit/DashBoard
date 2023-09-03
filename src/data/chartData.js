export const TotalRevenueSeries = [
  {
    name: "guest",
    data: [500, 350, 200, 400],
  },
  {
    name: "user",
    data: [400, 450, 300, 350],
  },
];

export const TotalRevenueOptions = {
  chart: {
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  colors: ["#98d89e", "#ee8484"],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: "35%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: true,
  },
  stroke: {
    colors: ["transparent"],
    width: 4,
  },
  xaxis: {
    categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
  },
  yaxis: {
    title: {
      text: "",
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
  },
  tooltip: {
    y: {
      formatter(val) {
        return `$ ${val} thousands`;
      },
    },
  },
};
