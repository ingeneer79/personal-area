import { FC } from "react";
import Flex from '@/shared/ui/Flex';
import { Button, Typography } from "antd";
import { pad } from "../lib/utils";

export interface QuantityControlProps {
    quantity: number;
    onChange: (value: number) => void
}


export const QuantityControl: FC<QuantityControlProps> = ({quantity, onChange}) => {
    return (
        <Flex align="center" gap={"small"}>
            <Button type="text" onClick={() => onChange(quantity - 1)}>-</Button>
            <Typography>{quantity}</Typography>
            <Button type="text" onClick={() => onChange(quantity + 1)}>+</Button>
        </Flex>
    );
};

