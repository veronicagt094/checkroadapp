import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { createStandaloneToast } from "@chakra-ui/toast";

const { ToastContainer, toast } = createStandaloneToast();
function MyApp({ Component, pageProps }) {
  // <ChakraProvider>
  return <Component {...pageProps} />;
  <ToastContainer />;
  // <Component {...pageProps} />;
  // </ChakraProvider>;
}

export default MyApp;
