import { Button } from "@/components/atoms";
import Link from "next/link";
import { useState } from "react";

const login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitForm = () => {};

  return (
    <div className="md:flex md:flex-row flex flex-col justify-between items-center gap-2 h-screen">
      {/* for desktop and tablet screen */}
      <div className="bg-black  md:w-2/5  h-full md:flex md:justify-center md:items-center hidden">
        <h1 className="text-white text-6xl font-bold">Board.</h1>
      </div>
      {/* for mobile screen view only */}
      <div className="bg-black w-full flex justify-center items-center md:hidden py-3">
        <h1 className="text-white text-3xl font-bold">Board.</h1>
      </div>
      <div className="md:w-3/5 bg-[#f5f5f5] h-full flex justify-center items-center w-full px-4 py-5 ">
        <div className="py-5 px-2 space-y-4">
          <div>
            <h1 className="text-2xl font-bold">Sign In</h1>
            <p className="text-sm font-bold">sign in to your account</p>
          </div>
          <div className="flex justify-between items-center w-full gap-5">
            <Button
              bannerImage="https://img.icons8.com/color/48/000000/google-logo.png"
              label="Sign In With Google"
            />
            <Button
              bannerImage="https://img.icons8.com/color/48/000000/google-logo.png"
              label="Sign In With Google"
            />
          </div>
          <form className="px-6 py-6 bg-[#ffffff] w-full space-y-3 rounded-md">
            <div className="space-y-2">
              <label>Email address</label>
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md bg-[#f5f5f5] py-2 px-2 focus:ring-0 outline-none border-0"
              />
            </div>
            <div className="space-y-2">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-md bg-[#f5f5f5] py-2 px-2  focus:ring-0 outline-none border-0 "
              />
            </div>
            <p className="text-[#4276d7] font-sm my-2">
              {" "}
              <Link href="#">Forget password ?</Link>
            </p>
            <Button
              className="bg-black text-white py-2 px-2 rounded-md w-full"
              action={() => submitForm}
              label="Sign In"
            />
          </form>
          <Link href="#">
            <p className="text-center mt-4 text-[#858585]">
              Don't have an Account?
              <span className="text-[#4276d7] font-sm"> Register here</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default login;
