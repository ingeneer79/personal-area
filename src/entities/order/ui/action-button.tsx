import { Button } from "antd";
import { FC } from "react";
import { OrderActionButtonProps } from "./types";
import { DownloadIcon } from "./download-icon";

export const OrderActionButton: FC<OrderActionButtonProps> = ({
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
