"use client";
import { useState } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:8000", {
  transports: ["websocket"],
});

export default function Home() {
  const [name, setName] = useState("");
  const [list, setList] = useState<Array<{ post: string }>>([]);
  const handlePost = () => {
    socket.emit("roomone", { post: name });
  };
  socket.on("list", (data) => {
    setList([...list, data]);
  });
  return (
    <div className="grid gap-10 p-10">
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold">Home</h1>
      </div>

      <div className="grid grid-cols-6 gap-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-black col-start-2 col-span-3 rounded-md px-2"
        />

        {/* <Button variant="contained" onClick={handlePost}>
          Send Comment
        </Button> */}

        <button
          onClick={handlePost}
          className="bg-gradient-to-r from-blue-700 to-blue-400 p-2 rounded-md"
        >
          Send Comment
        </button>
      </div>
      <div className="flex justify-center">
        <div className="grid gap-2">
          {list?.map((item: { post: string }) => (
            <li key={item.post}>{item.post}</li>
          ))}
        </div>
      </div>
    </div>
  );
}
