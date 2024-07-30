export interface WaybillObject {
  id: string;
  status: number;
  wayBillNumber: string;
  date: Date;
  sum: number;
  mark: number;
  ownerId: number;
  markStatus: number;
}

export interface WaybillActionsControlButton {
  onClick: (value: number) => void;
}

