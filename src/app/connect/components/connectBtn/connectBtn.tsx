"use client";
import { useAccount, useBalance, useConnect, useNetwork } from "wagmi";
export function Connect() {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { isConnected, address } = useAccount();
  const { data } = useBalance({
    address: address,
  });
  const { chain } = useNetwork();
  return (
    <div>
      {isConnected ? (
        <>
          <div>Your wallet address {address}</div>
          <div>Your balance {data?.formatted}</div>
          <div>{chain?.name} Chain</div>
        </>
      ) : (
        <>
          {connectors.map((connector) => (
            <button
              disabled={!connector.ready}
              key={connector.id}
              onClick={() => connect({ connector })}
              className="bg-gradient-to-r from-blue-700 to-blue-400 p-2 rounded-md"
            >
              Connect with {connector.name}
              {!connector.ready && " (unsupported)"}
              {isLoading &&
                connector.id === pendingConnector?.id &&
                " (connecting)"}
            </button>
          ))}

          {error && <div>{error.message}</div>}
        </>
      )}
    </div>
  );
}

export default Connect;
