import { BaseLayout } from "@/widgets/layouts";
import { ConfigProvider } from "antd";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
  <>
   <ConfigProvider theme={{
      token: {
        // Seed Token
        colorPrimary: '#00b96b',
        borderRadius: 2,

        // Alias Token
        colorBgContainer: '#f6ffed',
      },
    }}>
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
    </ConfigProvider>
  </>
);

export default App;