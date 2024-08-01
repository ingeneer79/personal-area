"use client";

import React, { ReactNode } from "react";
import Flex from "@/shared/ui/flex";
import Image from "next/image";
import TypographyWrapper from "@/shared/ui/typography";
import { Button } from "@/shared/ui";
import { getIcon } from "@/shared/ui/icons/iconUtils/iconUtils";
import { UserData, UserName } from "@/entities/user";

type Props = {
  userImage: string;
  session?: UserData;
  editCallBack?: () => void;
};

export const UserPlank = ({ userImage, editCallBack, session }: Props) => {
  return (
    <Flex
      className="w-full rounded-2xl py-2 px-4 items-center"
      style={{ backgroundColor: "var(--bg-color-gray)" }}
    >
      <Image
        className="w-16 h-16 rounded-full object-cover mr-4"
        width={64}
        height={64}
        src={userImage}
        alt={"Портрет пользователя"}
        priority={false}
      />
      <UserName session={session}/>
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
