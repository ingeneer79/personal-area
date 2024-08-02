import { StoreProvider } from "@/app/providers/store-provider";
import { FinanceActionsPanel } from "@/entities/finance";
import { FinanceFilter } from "@/entities/finance/ui/finance-filter";
import { constantsMap } from "@/shared/model";
import TypographyWrapper from "@/shared/ui/typography";
import { BreadCrumbWidget } from "@/widgets/bread-crumbs";
import { Flex } from "antd";
import { FC } from "react";
import { financeActionButtons } from '../../../entities/finance/ui/model/types';

export const FinancePage: FC = () => {
  return (
    <>
      <Flex gap="middle" vertical>
        <BreadCrumbWidget items={constantsMap.pages.finance.breadCrumbs}></BreadCrumbWidget>                                 
        <TypographyWrapper style={{ fontSize: "var(--size-text-3xl)" }} className="font-medium">
          {constantsMap.pages.finance.mainText}
        </TypographyWrapper>
        <FinanceFilter isLoading={false} />
        <FinanceActionsPanel isLoading={false} />
      </Flex>
    </>
  );
};

export default FinancePage;