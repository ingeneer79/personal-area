import Flex from "@/shared/ui/Flex";
import FullWidthImage from "@/widgets/FullWidthImage/ui/FullWidthImage";
import { MainLayout } from "@/widgets/layouts";
import React from "react";

type Props = {};

export async function ProfilePage(props: Props) {
  return (
    <MainLayout>
      <Flex>Профиль</Flex>
      <FullWidthImage src="/images/banner.jfif" alt="Баннер профиля" height={203}/>
    </MainLayout>
  );
};

export default ProfilePage;
