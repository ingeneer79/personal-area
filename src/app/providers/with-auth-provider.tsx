import { AppProps, AppType } from "next/app";

export const withAuthProvider = (Component: AppType) => {
  const WithAuthProvider: AppType = (props: AppProps) => {
    return (
      <Component {...props} />
    );
  };

  WithAuthProvider.displayName = `withAuthProvider(${Component.displayName || Component.name || 'Component'})`;
  return WithAuthProvider;
};