"use client";

import { Button } from "antd";
import React from "react";
type Props = {
  icon: React.ReactElement;
  contact: string;
  contactType: "Телефон" | "Почта" | "Адрес";
};

const ContactButton = ({ icon, contact, contactType }: Props) => {
  const handleClick = () => {
    if (contactType === "Телефон") {
      window.open(`tel:${contact}`);
    } else if (contactType === "Почта") {
      window.open(`mailto:${contact}`);
    } else if (contactType === "Адрес") {
      window.open(`https://yandex.ru/maps/?text=${contact}`);
    }
  };
  return (
    <Button
      icon={icon}
      onClick={(e) => {
        console.log('onClick работает')
        handleClick();
      }}
      style={{ border: "none", background: "rgb(245, 245, 247)" }}
    />
  );
};

export default ContactButton;
