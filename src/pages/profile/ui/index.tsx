"use client";
 
import './styles.scss';
import Flex from "@/shared/ui/flex";
import TypographyWrapper from "@/shared/ui/typography";
import FullWidthImage from "@/widgets/FullWidthImage/ui/FullWidthImage";
import { MainLayout } from "@/widgets/layouts";
import React from "react";
import { UserPlank } from "@/widgets/user-plank";

import Space from "@/shared/ui/space";
import { getIcon } from "@/shared/ui/icons/iconUtils/iconUtils";
import { profileConfig } from '@/entities/profile/model';
import { UserContactPlank } from '@/entities/profile/ui';
import translateType from '@/entities/profile/model/translate-type';
import { useSession } from 'next-auth/react';


export function ProfilePage() {
  const { data: session, status } = useSession();
  return (
    <>
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
          className="mb-4 mt-9 font-bold"
          style={{
            fontSize: "32px",
            lineHeight: "var(--heading-font-line-height)",
          }}
        >
          ООО “Квадрат С”
        </TypographyWrapper>
        <UserPlank
          userImage='/images/user.png'
          userName={`${session?.user?.name}`}
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
    </>
  );
}

export default ProfilePage;