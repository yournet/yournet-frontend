import { useCallback, useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { usePostPost } from "../../hooks/usePostPost";

function Write() {
  const cookies = new Cookies();
  // onChange로 관리할 문자열
  // const [hashtag, setHashtag] = useState("");
  // 해시태그를 담을 배열
  const [hashArr, setHashArr] = useState([]);

  useEffect(() => {
    console.log(cookies.get("token"));
  });

  const [postInfo, setPostInfo] = useState({
    title: "",
    content: "",
    hashtag: "",
    // hashtag: [{ name: "" }],
  });
  const { title, content, hashtag } = postInfo;
  const { mutate } = usePostPost();

  function handleInput(e) {
    const { value, name } = e.target;
    console.log(e.target.value);
    setPostInfo({ ...postInfo, [name]: value });
  }

  function postSubmit(e) {
    e.preventDefault();
    mutate({ title, content, hashtag: hashArr });
  }

  const onKeyUp = useCallback(
    (e) => {
      // if (process.browser) {
      /* 요소 불러오기, 만들기*/
      const $HashWrapOuter = document.querySelector(".HashWrapOuter");
      const $HashWrapInner = document.createElement("div");
      $HashWrapInner.className = "HashWrapInner";

      /* 태그를 클릭 이벤트 관련 로직 */
      $HashWrapInner.addEventListener("click", () => {
        $HashWrapOuter?.removeChild($HashWrapInner);
        console.log($HashWrapInner.innerHTML);
        setHashArr(hashArr.filter((hashtag) => hashtag));
      });

      /* enter 키 코드 :13 */
      if (e.keyCode === 13 && e.target.value.trim() !== "") {
        console.log("Enter Key 입력됨!", e.target.value);
        $HashWrapInner.innerHTML = "#" + e.target.value;
        $HashWrapOuter?.appendChild($HashWrapInner);
        setHashArr((hashArr) => [...hashArr, hashtag]);
        setPostInfo({ ...postInfo, hashtag: "" });
      }
      // }
    },
    [hashtag, hashArr, postInfo]
  );

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="mt-10">게시물 작성</div>
      <div className="container flex max-w-[400px] flex-col gap-3 rounded-md p-6">
        <label htmlFor="title" className="text-sm text-gray-800 flex flex-col">
          <input
            // required
            placeholder="제목"
            className="w-full rounded-md border bg-gray-50 p-2"
            id="emtitleail"
            name="title"
            type="text"
            value={title}
            onChange={handleInput}
          />
        </label>
        <div className="HashWrap">
          <div className="HashWrapOuter"></div>
          <input
            className="HashInput"
            type="text"
            value={hashtag}
            name="hashtag"
            onChange={handleInput}
            onKeyUp={onKeyUp}
            placeholder="해시태그 입력"
          />
        </div>
        <label
          htmlFor="content"
          className="text-sm text-gray-800 flex flex-col"
        >
          <textarea
            placeholder="내용"
            style={{ height: "70vh" }}
            className="w-full rounded-md border bg-gray-50 p-2"
            id="content"
            name="content"
            value={content}
            onChange={handleInput}
          />
        </label>
        <button
          className="mt-2 w-full rounded-md bg-[#578e2d] p-2 text-sm text-white font-bold"
          type="submit"
          onClick={postSubmit}
        >
          작성
        </button>
      </div>
    </div>
  );
}
export default Write;
