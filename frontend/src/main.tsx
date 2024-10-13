import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { MetaMaskProvider } from "@metamask/sdk-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MetaMaskProvider
      debug={true}
      sdkOptions={{
        dappMetadata: {
          name: "Auction App",
          url: window.location.href,
        },
      }}
    >
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </MetaMaskProvider>
  </StrictMode>
);
