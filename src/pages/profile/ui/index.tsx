import Flex from "@/shared/ui/Flex";
import { MainLayout } from "@/widgets/layouts";
import React from "react";

type Props = {};

export const ProfilePage = async (props: Props) => {
  return (
    <MainLayout>
      <Flex>Профиль</Flex>
    </MainLayout>
  );
};

export default ProfilePage;
