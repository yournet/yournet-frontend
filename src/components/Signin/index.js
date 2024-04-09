import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { usePostLogin } from "../../hooks/usePostLogin";

function Signin() {
    const navigation = useNavigate();
    const { mutate } = usePostLogin();

    const [userInfo, setUserInfo] = useState({ email: "", password: "" });
    const { email, password } = userInfo;

    function postSubmit(e) {
        e.preventDefault();
        mutate({ email, password });
    }

    function handleInput(e) {
        const { value, name } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    }

    return (
        <main className="flex h-full min-h-screen w-full items-center justify-center bg-orange-100 flex-col">
            <div className="text-2xl font-semibold text-orange-700">CHORA</div>
            <form
                className="container flex max-w-[300px] flex-col gap-3 rounded-md p-6 bg-orange-50"
                onSubmit={postSubmit}
            >
                <label htmlFor="email" className="text-sm text-orange-800 flex flex-col">
                    <input
                        required
                        placeholder="이메일"
                        className="w-full rounded-md border border-orange-300 bg-white p-2"
                        id="email"
                        name="email"
                        type="text"
                        value={email}
                        onChange={handleInput}
                    />
                </label>
                <label
                    htmlFor="password"
                    className="text-sm text-orange-800 flex flex-col"
                >
                    <input
                        required
                        placeholder="비밀번호"
                        className="w-full rounded-md border border-orange-300 bg-white p-2"
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={handleInput}
                    />
                </label>
                <button
                    className="mt-2 w-full rounded-md bg-orange-600 p-2 text-sm text-white font-bold"
                    type="submit"
                >
                    로그인
                </button>
            </form>
            <span
                className="text-xs text-orange-600 cursor-pointer"
                onClick={() => {
                    navigation("/signup");
                }}
            >
        회원가입
      </span>
        </main>
    );
}

export default Signin;
