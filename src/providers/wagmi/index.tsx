import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygonMumbai],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors: [new MetaMaskConnector({ chains })],
});

const WagmiProvider = ({ children }: { children: React.ReactNode }) => {
  return <WagmiConfig config={config}>{children}</WagmiConfig>;
};

export default WagmiProvider;
