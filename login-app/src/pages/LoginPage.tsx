import User from "@/icons/User";
import LockClosed from "@/icons/LockClosed";
import { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-700">
      <main className="flex w-[420px] flex-col  bg-purple-700 text-white">
        <form action="">
          <h1 className="text-center text-[36px] font-extrabold">Login</h1>
          {/* Input box */}
          <div className="my-[30px] h-[50px] w-full">
            <input
              type="text"
              placeholder="Username"
              required
              className="h-full w-full rounded-[40px] border-2 border-white border-opacity-20 bg-transparent outline-none placeholder:text-white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <User className="h-6 w-6" />
          </div>
          <div className="my-[30px] h-[50px] w-full ">
            <input
              type="password"
              placeholder="Password"
              required
              className="h-full w-full rounded-[40px] border-2 border-white border-opacity-20 bg-transparent outline-none placeholder:text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <LockClosed className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit">Login</button>
          <div>
            <p>
              Don't have an account? <a href="#">Register</a>
            </p>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log(username, password);
            }}
          >
            Debug
          </button>
        </form>
      </main>
    </div>
  );
};

export default LoginPage;
