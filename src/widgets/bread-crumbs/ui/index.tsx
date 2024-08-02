import { Breadcrumb } from "antd";
import { BreadCrumbWidgetProps } from "../model";
import { FC } from "react";



export const BreadCrumbWidget: FC<BreadCrumbWidgetProps> = ({items}) => {
  return (
    <Breadcrumb
      separator="&#x2022;"
      style={{ margin: "var(--space-m) 0" }}
      items={items}
    ></Breadcrumb>
  );
};
