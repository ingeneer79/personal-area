import { Button } from "antd";
import { FC } from "react";

import { DownloadIcon } from "@/shared/ui/icons/download-icon";
import { ActionButtonProps } from "../model/types";

export const ActionButton: FC<ActionButtonProps> = ({
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

export default ActionButton
