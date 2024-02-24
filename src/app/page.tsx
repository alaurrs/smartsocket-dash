import Image from "next/image";
import Login from "@/app/login/login";

export default function Home() {
  return (
      <h1 className={"text-3xl"}>
        Smartsocket Dash
          <Login/>
      </h1>
  );
}
