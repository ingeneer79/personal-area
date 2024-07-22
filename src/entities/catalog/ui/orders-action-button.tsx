import { Button } from "antd";
import { FC } from "react";
import { OrdersActionButtonProps } from "./types";
import { DownloadIcon } from "@/shared/ui/icons/download-icon";

export const OrdersActionButton: FC<OrdersActionButtonProps> = ({
  label,
  icon,
  onClick,
}) => {
  return (
    <Button
      className="px-0"
      type="text"
      icon={icon ?? <DownloadIcon></DownloadIcon>}
      onClick={onClick}
      style={{ color: "var(--control-order-panel-button)", fontWeight: 500, fontSize: "12px", paddingLeft: 0, height: "48px" }}
    >
      {label}
    </Button>
  );
};
