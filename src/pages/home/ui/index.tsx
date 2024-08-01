"use client";
import { MainLayout } from "@/widgets/layouts";
import { SessionProvider, useSession } from "next-auth/react";
import { SessionProviderWrapper } from "../../../app/providers/session-provider-wrapper";
import { getClassifiers } from "@/entities/classifiers/api/data";
import { useEffect, useState } from "react";
import { ClassifierObject } from "@/entities/classifiers/model";

export const HomePage = () => {
  const sessionData = useSession();
  const [classifiers, setClassifiers] = useState<ClassifierObject[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getClassifiers();
        setClassifiers(res);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
    console.log(classifiers);
  }, []);

  return (
    <SessionProviderWrapper>
      <MainLayout sessionData={sessionData}>
        <div>
          {classifiers.map(item => (
            <div key={item?.id}>{item.id}</div>
          ))}
        </div>
      </MainLayout>
    </SessionProviderWrapper>
  );
};

export default HomePage;
