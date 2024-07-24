"use client";

import Flex from "@/shared/ui/flex";
import TypographyWrapper from "@/shared/ui/typography";
import FullWidthImage from "@/widgets/FullWidthImage/ui/FullWidthImage";
import { MainLayout } from "@/widgets/layouts";
import React from "react";
import { UserPlank } from "@/widgets/user-plank";
import { profileConfig } from "../model/profileConfig";
import Space from "@/shared/ui/space";
import UserContactPlank from "@/entities/profile/ui/UserContactPlank";
import { getIcon } from "@/shared/ui/icons/iconUtils/iconUtils";
import translateType from "./translate-type";

export function ProfilePage() {
  return (
    <MainLayout>
      <FullWidthImage
        src="/images/banner.jpeg"
        alt="Баннер профиля"
        height={203}
        width={1920}
      />
      <Flex
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
          className="mb-4 mt-9 font-bold text-"
          style={{
            fontSize: "32px",
            lineHeight: "var(--heading-font-line-height)",
          }}
        >
          ООО “Квадрат С”
        </TypographyWrapper>
        <UserPlank
          userImage='/images/user.png'
          userName={`${profileConfig.firstName} ${profileConfig.lastName}`}
          editCallBack={() => {
            console.log("callback works");
          }}
        />
        <TypographyWrapper className="font-bold" style={{ fontSize: "20px" }}>
          Данные
        </TypographyWrapper>
        <Space direction="vertical" size={16}>
          {profileConfig.attributes.map((attribute, key) => (
          // @ts-ignore
          <UserContactPlank icon={getIcon(attribute.type)} contactSign={translateType(attribute.type)} contact={attribute.values[0].value} key={key}/>
          ))}
        </Space>
      </Flex>
    </MainLayout>
  );
}

export default ProfilePage;