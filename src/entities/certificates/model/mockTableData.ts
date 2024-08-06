interface TableData {
  article: string;
  name: string;
  series: {
    date: string;
    number: string;
  }[];
}

const tableData: TableData[] = [
  {
    article: "1",
    name: "Название",
    series: [
      { date: "01.01.2023", number: "123456789" },
      { date: "01.01.2023", number: "123456789" },
      { date: "01.01.2023", number: "123456789" },
    ],
  },
  {
    article: "2",
    name: "Название",
    series: [
      { date: "01.01.2023", number: "123456789" },
      { date: "01.01.2023", number: "123456789" },
      { date: "01.01.2023", number: "123456789" },
      { date: "01.01.2023", number: "123456789" },
      { date: "01.01.2023", number: "123456789" },
      { date: "01.01.2023", number: "123456789" },
    ],
  },
  {
    article: "3",
    name: "Название",
    series: [
      { date: "01.01.2023", number: "123456789" },
      { date: "01.01.2023", number: "123456789" },
      { date: "01.01.2023", number: "123456789" },
    ],
  },
];

export default tableData;
