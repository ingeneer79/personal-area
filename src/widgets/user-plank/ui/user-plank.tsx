"use client";

import React, { ReactNode } from "react";
import Flex from "@/shared/ui/flex";
import Image from "next/image";
import TypographyWrapper from "@/shared/ui/typography";
import { Button } from "@/shared/ui";
import { getIcon } from "@/shared/ui/icons/iconUtils/iconUtils";

type Props = {
  userImage: string;
  userName: string;
  editCallBack?: () => void;
};

export const UserPlank = ({ userImage, userName, editCallBack }: Props) => {
  return (
    <Flex
      className="w-full rounded-2xl py-2 px-4 items-center"
      style={{ backgroundColor: "rgba(245, 245, 247, 1)" }}
    >
      <Image
        className="w-16 h-16 rounded-full object-cover mr-4"
        width={64}
        height={64}
        src={userImage}
        alt={"Портрет пользователя"}
        priority={false}
      />
      <TypographyWrapper className="mr-auto text-base font-medium">
        {userName}
      </TypographyWrapper>
      {editCallBack ? (
        <Button
          size="middle"
          icon={getIcon("edit")}
          onClick={editCallBack}
          style={{ border: "none" }}
        />
      ) : null}
    </Flex>
  );
};
