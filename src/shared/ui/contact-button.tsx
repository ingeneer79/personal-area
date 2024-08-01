"use client";

import { Button } from "antd";
import React from "react";
type Props = {
  icon: React.ReactNode;
  contact: string;
  contactType: "Телефон" | "Почта" | "Адрес" | undefined;
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
      onClick={(e) => handleClick()}
      style={{ border: "none", background: "var(--bg-color-gray)" }}
    />
  );
};

export default ContactButton;
