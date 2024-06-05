import type { PropsWithChildren } from 'react';
import 'processes/root';
export const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <main className="main">{children}</main>
    </>
  );
};