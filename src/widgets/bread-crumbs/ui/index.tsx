import { Breadcrumb } from "antd";

export const BreadCrumbWidget = () => {
  return (
    <Breadcrumb
      separator="&#x2022;"
      style={{ margin: "16px 0" }}
      items={[
        {
          title: "Главная",
          path: "/main",
        },
        {
          title: "Накладные",
          path: "/waybills",
        },
        {
          title: "Претензии",
          path: "/petitions",
        },
      ]}
    ></Breadcrumb>
  );
};
