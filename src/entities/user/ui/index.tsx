"use client";
import TypographyWrapper from "@/shared/ui/typography";
import { UserNameProps } from "../model/types";
import { useAppSelector } from "@/shared/lib";
import { getUser } from "../model/selectors";
import { StoreProvider } from "@/app/providers/store-provider";

export function UserName() {
  const { userData } = useAppSelector(getUser);
  return userData ? (
    <TypographyWrapper className="ml-3 mr-3 font-medium w-full">
        {userData?.name}
    </TypographyWrapper>
  ) : 'loading';
}

export default UserName;
