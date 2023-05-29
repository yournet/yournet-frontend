import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostRegister } from "../../hooks/usePostRegister";

function Signup() {
  const navigation = useNavigate();
  const { mutate } = usePostRegister();

  const [userInfo, setUserInfo] = useState({
    name: "",
    password: "",
    email: "",
  });
  const { email, name, password } = userInfo;

  function postSubmit(e) {
    e.preventDefault();
    mutate({ email, name, password });
  }

  function handleInput(e) {
    const { value, name } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  }
  return (
    <main className="flex h-full min-h-screen w-full items-center justify-center bg-gray-100 flex-col">
      <div className="text-2xl font-semibold text-[#578e2d]">Yournet</div>
      <form
        className="container flex max-w-[300px] flex-col gap-3 rounded-md p-6"
        onSubmit={postSubmit}
      >
        <label htmlFor="name" className="text-sm text-gray-800 flex flex-col">
          <input
            required
            placeholder="이름"
            className="w-full rounded-md border bg-gray-50 p-2"
            id="name"
            name="name"
            type="text"
            onChange={handleInput}
            value={name}
          />
        </label>
        <label htmlFor="email" className="text-sm text-gray-800 flex flex-col">
          <input
            required
            placeholder="이메일"
            className="w-full rounded-md border bg-gray-50 p-2"
            id="email"
            name="email"
            type="text"
            onChange={handleInput}
            value={email}
          />
        </label>
        <label
          htmlFor="password"
          className="text-sm text-gray-800 flex flex-col"
        >
          <input
            required
            placeholder="비밀번호"
            className="w-full rounded-md border bg-gray-50 p-2"
            id="password"
            name="password"
            type="password"
            onChange={handleInput}
            value={password}
          />
        </label>
        <button
          className="mt-2 w-full rounded-md bg-[#578e2d] p-2 text-sm text-white font-bold"
          type="submit"
        >
          회원가입
        </button>
      </form>
      <span
        className="text-xs"
        onClick={() => {
          navigation("/signin");
        }}
      >
        로그인
      </span>
    </main>
  );
}

export default Signup;
