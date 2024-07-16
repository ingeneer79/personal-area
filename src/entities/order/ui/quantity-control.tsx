import { FC } from "react";
import Flex from '@/shared/ui/Flex';
import { Button } from "antd";
import { pad } from "../lib/utils";

export interface QuantityControlProps {
    quantity: number;
    onChange: (value: number) => void
}


export const QuantityControl: FC<QuantityControlProps> = ({quantity, onChange}) => {
    return (
        <Flex>
            <Button type="text" icon="minus" onClick={() => onChange(quantity - 1)}></Button>
            {pad(quantity, 3)}
            <Button type="text" icon="plus" onClick={() => onChange(quantity + 1)}></Button>
        </Flex>
    );
};

