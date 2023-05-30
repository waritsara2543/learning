import dynamic from "next/dynamic";

const ConnectBtn = dynamic(() => import("./connectBtn"), { ssr: false });

export default ConnectBtn;
