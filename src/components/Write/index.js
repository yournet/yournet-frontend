import { useCallback, useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { usePostPost } from "../../hooks/usePostPost";

function Write() {
  const cookies = new Cookies();
  const [hashArr, setHashArr] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    console.log(cookies.get("token"));
  });

  const [postInfo, setPostInfo] = useState({
    title: "",
    content: "",
    hashtag: "",
  });

  const { title, content, hashtag } = postInfo;
  const { mutate } = usePostPost();

  const handleInput = (e) => {
    const { value, name } = e.target;
    setPostInfo({ ...postInfo, [name]: value });
  };

  const postSubmit = (e) => {
    e.preventDefault();
    const postData = {
      title,
      content,
      hashTag: hashArr.map(tag => ({ name: tag })),
      ...selectedImage,
    };
    mutate(postData);
  };

  const onKeyUp = useCallback(
      (e) => {
        const $HashWrapOuter = document.querySelector(".HashWrapOuter");
        const $HashWrapInner = document.createElement("div");
        $HashWrapInner.className = "HashWrapInner";
        $HashWrapInner.addEventListener("click", () => {
          $HashWrapOuter?.removeChild($HashWrapInner);
          setHashArr(hashArr.filter((tag) => tag !== $HashWrapInner.innerHTML.replace(/^#/, '')));
        });

        if (e.keyCode === 13 && e.target.value.trim() !== "") {
          $HashWrapInner.innerHTML = "#" + e.target.value;
          $HashWrapOuter?.appendChild($HashWrapInner);
          setHashArr([...hashArr, e.target.value.trim()]);
          setPostInfo({ ...postInfo, hashtag: "" });
        }
      },
      [hashtag, hashArr, postInfo]
  );

  const handleImageSelect = (imageData) => {
    setSelectedImage(imageData);
  };

  // 여기에 이미지 선택 로직을 추가할 수 있습니다. 예를 들어, 버튼 클릭 시 handleImageSelect 함수를 호출하도록 설정합니다.

  return (
      <div className="flex justify-center items-center flex-col">
        <div className="mt-10">게시물 작성</div>
        <div className="container flex max-w-[400px] flex-col gap-3 rounded-md p-6">
          <input
              placeholder="제목"
              className="w-full rounded-md border bg-gray-50 p-2"
              name="title"
              type="text"
              value={title}
              onChange={handleInput}
          />
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
          <textarea
              placeholder="내용"
              className="w-full rounded-md border bg-gray-50 p-2"
              style={{ height: "70vh" }}
              name="content"
              value={content}
              onChange={handleInput}
          />
          <button
              className="mt-2 w-full rounded-md bg-[#578e2d] p-2 text-sm text-white font-bold"
              onClick={postSubmit}
          >
            작성
          </button>
        </div>
      </div>
  );
}

export default Write;
