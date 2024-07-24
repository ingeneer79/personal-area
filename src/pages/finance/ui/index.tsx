import { StoreProvider } from "@/app/providers/store-provider";
import { FinanceActionsPanel } from "@/entities/finance";
import { FinanceFilter } from "@/entities/finance/ui/finance-filter";
import { constantsMap } from "@/shared/model";
import TypographyWrapper from "@/shared/ui/typography";
import { Flex } from "antd";
import { FC } from "react";

export const FinancePage: FC = () => {
  return (
    <StoreProvider>
      <Flex gap="middle" vertical>
        <TypographyWrapper style={{ fontSize: "32px" }} className="font-medium">
          {constantsMap.pages.finance.mainText}
        </TypographyWrapper>
        <FinanceFilter isLoading={false} />
        <FinanceActionsPanel isLoading={false} />
      </Flex>
    </StoreProvider>
  );
};

export default FinancePage;