"use client";

import React from "react";
import WagmiProvider from "../providers/wagmi";
import ReactQueryProvider from "@/providers/reactQuery";

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ReactQueryProvider>
        <WagmiProvider>{children}</WagmiProvider>
      </ReactQueryProvider>
    </div>
  );
};

export default RootProvider;
