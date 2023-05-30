"use client";
import ConnectBtn from "./components/connectBtn";

export function Connect() {
  return (
    <div className="p-10 grid gap-10">
      <h1 className="text-2xl font-bold">Connect Wallet</h1>
      <ConnectBtn />
    </div>
  );
}

export default Connect;
