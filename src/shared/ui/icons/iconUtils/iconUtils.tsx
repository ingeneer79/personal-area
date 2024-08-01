import React from "react";
import { profileIcons } from "@/shared/model/icons";


// Функция для получения компонента иконки по названию
export const getProfileIcon = (iconName: keyof typeof profileIcons): JSX.Element => {
  const IconComponent = profileIcons[iconName];
  if (!IconComponent) {
    console.log(`Иконка ${iconName} не найдена. Иконки находятся в файле iconUtils.ts`);
  }
  return <IconComponent />;
};
