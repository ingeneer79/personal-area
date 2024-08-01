"use client";
import TypographyWrapper from "@/shared/ui/typography";
import { UserNameProps } from "../model/types";
import { useAppSelector } from "@/shared/lib";
import { getUser } from "../model/selectors";

export function UserName() {
    const { userData } = useAppSelector(getUser);
  return (
    <TypographyWrapper className="ml-3 mr-3 font-medium">
        {userData?.name}
    </TypographyWrapper>
  );
}

export default UserName;
