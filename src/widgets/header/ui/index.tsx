"use client";
import { Button, Typography } from "antd";
import { Layout } from "antd";

import "./styles.module.scss";
import { BagButton } from "./bagButton";
import Image from "next/image";
import { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { constantsMap } from "@/shared/model";
import { UserName } from "@/entities/user";
import { useDispatch } from "react-redux";
import { setUserData } from "@/entities/user/model/slice";

const { Header } = Layout;

export const profileConfig = {
  "id": 1,
  "firstName": "Иван",
  "secondName": "",
  "lastName": "Пупкин",
  "imageUrl": "",
  "email": "z7aCQ@example.com",
  "attributes": [
      {
          "type": "phone",
          "values": [
              {
                  "id": 1,
                  "value": "+7 999 999 99 99"
              }
          ]
      },
      {
          "type": "email",
          "values": [
              {
                  "id": 1,
                  "value": "z7aCQ@example.com"
              }
          ]
      },
      {
          "type": "address",
          "values": [
              {
                  "id": 1,
                  "value": "Москва, ул. Пушкина, д. 1"
              },
              {
                  "id": 2,
                  "value": "Усачев, д1 к9"
              }
          ]
      }
  ]   
}

function keycloakSessionLogOut(): Promise<Response | null> {
  try {
    return fetch(`/api/auth/logout`, { method: "GET" });
  } catch (err) {
    console.error(err);
  }
  return Promise.resolve(null);
}

export function MainHeader() {
  const dispatch = useDispatch();  
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated" && session) {            
      dispatch(setUserData({...profileConfig, name: session.user?.name ?? ''}));
    }
  }, [status, session, dispatch]);

  return (
    <Header className="header flex items-center justify-end bg-transparent border-b-2">
      <Button
        size="large"
        type="primary"
        iconPosition="end"
        icon={<BagButton count={0} />}
      >
        {constantsMap.widgets.header.bag}
      </Button>
      <UserName session={session} />
      {status === "authenticated" && (
        <Image src="/images/user.svg" width={48} height={48} alt="" />
      )}
      {status === "authenticated" && (
        <Button
          size="large"
          className="ml-3 mr-3"
          type="primary"
          onClick={() =>
            keycloakSessionLogOut().then(() => signOut({ callbackUrl: "/" }))
          }
        >
          {constantsMap.widgets.header.logout}
        </Button>
      )}
    </Header>
  );
}
