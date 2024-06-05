import { BaseLayout } from "@/widgets/layouts";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  </>
);

export default App;