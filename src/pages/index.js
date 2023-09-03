import { Button } from "@/components/atoms";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const route = useRouter();
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center gap-3 bg-[#3c80ef]">
      <h1 className="text-white font-bold text-5xl">Welcome to</h1>
      <p className="text-white font-bold text-2xl">Board.</p>
      <h3 className="text-white font-bold text-sm">Note:</h3>
      <p className="text-white text-xs font-bold">
        email:abc@gmail.com && password : abc123#
      </p>
      <p className="text-white text-xs font-bold text-center">
        As this project do not fully impletement the login and sign up
        functionality{" "}
      </p>
      <Button
        label="Start Here"
        className="bg-black text-white py-2 px-2 rounded-md w-[200px]"
        action={() => route.push("/login")}
      />
    </div>
  );
}
