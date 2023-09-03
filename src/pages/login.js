import { Button } from "@/components/atoms";
import {
  faDiscord,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const login = () => {
  const route = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ValidEmail = "abc@gmail.com";
  const ValidPassword = "abc123#";

  const submitForm = () => {
    try {
      console.log("Submit button clicked");
      if (email === "" || password === "") {
        alert("Enter both email and password");
      } else if (email === ValidEmail && password === ValidPassword) {
        console.log("Valid credentials. Redirecting...");
        route.push("/dashboard");
      } else {
        alert("Invalid email and password");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className="md:flex md:flex-row flex flex-col justify-between items-center h-screen "
      style={{
        backgroundImage:
          "linear-gradient(280deg, #f8faff 55%, transparent 40%, #3c80ef 20%)",
      }}
    >
      {/* for desktop and tablet screen */}
      <div className=" md:w-2/5  h-full md:flex md:flex-col md:justify-around hidden">
        <div className="flex justify-start">
          <h2 className="text-white text-2xl px-4 py-2 font-bold">Logo</h2>
        </div>
        <h1 className="text-white text-6xl font-bold text-center">Board.</h1>
        <div className="flex justify-center items-center space-x-5">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-white w-8 h-8 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-white w-8 h-8 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faGithub}
            className="text-white w-8 h-8 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faDiscord}
            className="text-white w-8 h-8 cursor-pointer"
          />
        </div>
      </div>
      <div className="md:w-3/5  h-full flex justify-center items-center w-full px-4 py-5 ">
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
              bannerImage="https://img.icons8.com/?size=512&id=86009&format=png"
              label="Sign In With Apple"
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
              <Link href="/login">Forget password ?</Link>
            </p>
            <Button
              className="bg-[#3c80ef] text-white py-2 px-2 rounded-md w-full"
              action={submitForm}
              label="Sign In"
            />
          </form>
          <Link href="/login">
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
