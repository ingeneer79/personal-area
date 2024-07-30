import React from "react";
import { IconEdit } from "../Icon-edit";
import { IconLocation } from "../icon-location";
import { IconPhone } from "../Icon-phone";
import { IconEmail } from "../Icon-profile";
import IconAdd from "../icon-add";

// Объект сопоставления названий и компонентов иконок
const icons = {
  edit: IconEdit,
  phone: IconPhone,
  email: IconEmail,
  address: IconLocation,
  телефон: IconPhone,
  почта: IconEmail,
  адрес: IconLocation,
  add: IconAdd
};

// Функция для получения компонента иконки по названию
export const getIcon = (iconName: keyof typeof icons): JSX.Element => {
  const IconComponent = icons[iconName];
  if (!IconComponent) {
    console.log(`Иконка ${iconName} не найдена. Иконки находятся в файле iconUtils.ts`);
  }
  return <IconComponent />;
};
