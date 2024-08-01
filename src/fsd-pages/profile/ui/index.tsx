"use client";

import "./styles.scss";
import Flex from "@/shared/ui/flex";
import TypographyWrapper from "@/shared/ui/typography";
import FullWidthImage from "@/widgets/FullWidthImage/ui/FullWidthImage";
import React, { useEffect } from "react";
import { UserPlank } from "@/widgets/user-plank";

import Space from "@/shared/ui/space";
import { UserContactPlank, UserContactsPlank } from "@/entities/profile/ui";
import translateType from "@/entities/profile/model/translate-type";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { getProfileIcon } from "@/shared/lib/utils";
import { profileIcons } from "@/shared/model/icons";
import { StoreProvider } from "@/app/providers/store-provider";
import { useSession } from "next-auth/react";
import { setUserData } from "@/entities/user/model/slice";
import { profileConfig } from "@/widgets/header/ui";

export function ProfilePage() {

  return (

      <><FullWidthImage
      src="/images/banner.jpeg"
      alt="Баннер профиля"
      height={203}
      width={1920} /><Flex
        style={{
          maxWidth: "1093px",
          width: "100%",
          margin: "0 auto",
          alignItems: "start",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <TypographyWrapper
          className="mb-4 mt-9 font-bold"
          style={{
            fontSize: "32px",
            lineHeight: "var(--heading-font-line-height)",
          }}
        >
          ООО “Квадрат С”
        </TypographyWrapper>
        <UserPlank
          userImage="/images/user.png"
          editCallBack={() => {
            console.log("callback works");
          } } />
        <TypographyWrapper className="font-bold" style={{ fontSize: "20px" }}>
          Данные
        </TypographyWrapper>
        <Space direction="vertical" size={16}>
          <UserContactsPlank />
        </Space>
      </Flex></>

  );
}

export default ProfilePage;
