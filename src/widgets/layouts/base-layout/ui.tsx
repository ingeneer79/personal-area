"use client"
import type { PropsWithChildren } from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
export const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Theme preset={presetGpnDefault}>
        <main className="main">{children}</main>
      </Theme>
    </>
  );
};