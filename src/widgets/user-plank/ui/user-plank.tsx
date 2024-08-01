"use client";

import React from "react";
import Flex from "@/shared/ui/flex";
import Image from "next/image";
import { Button } from "@/shared/ui";
import { UserName } from "@/entities/user";
import { iconsMap } from '../../../shared/model/icons';

type Props = {
  userImage: string;
  editCallBack?: () => void;
};

export const UserPlank = ({ userImage, editCallBack }: Props) => {
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
      <UserName/>
      {editCallBack ? (
        <Button
          size="middle"
          icon={<iconsMap.IconEdit/>}
          onClick={editCallBack}
          style={{ border: "none" }}
        />
      ) : null}
    </Flex>
  );
};
