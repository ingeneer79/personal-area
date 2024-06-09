import { Breadcrumb } from "antd";

export const BreadcrumbWidget = () => {
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
          path: "/inbound",
        },
        {
          title: "Претензии",
          path: "/petitions",
        },
      ]}
    ></Breadcrumb>
  );
};
