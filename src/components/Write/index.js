import { useCallback, useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import axios from "axios";
import { usePostPost } from "../../hooks/usePostPost";

function Write() {
  const cookies = new Cookies();
  const [hashArr, setHashArr] = useState([]);
  const [images, setImages] = useState([]); // 이미지 목록을 저장하는 상태
  const [selectedImage, setSelectedImage] = useState(null);
  const [file, setFile] = useState(null); // Added to handle file input

  useEffect(() => {
    console.log(cookies.get("token"));
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get("http://your-server-url/post/image", {
        headers: {
          "Authorization": `Bearer ${cookies.get("token")}`
        }
      });
      setImages(response.data);
    } catch (error) {
      console.error("이미지 로드 실패:", error);
    }
  };

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

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post("http://your-server-url/post/image", formData, {
        headers: {
          "Authorization": `Bearer ${cookies.get("token")}`,
          "Content-Type": "multipart/form-data",
        }
      });
      setImages([...images, ...response.data]); // Add new images to the existing list
      alert("Image uploaded successfully.");
    } catch (error) {
      console.error("Image upload failed:", error);
      alert("Failed to upload image.");
    }
  };

  const selectImage = (image) => {
    setSelectedImage(image);
  };

  return (
      <div className="flex justify-center items-center flex-col">
        <div className="mt-10">게시물 작성</div>
        <div className="container flex max-w-[400px] flex-col gap-3 rounded-md p-6">
          <input type="file" onChange={handleFileChange} />
          <button onClick={uploadImage}>Upload Image</button>
          {images.map((image, index) => (
              <div key={index} className="flex items-center justify-between">
                <img src={image.url} alt={`Prompt: ${image.prompt}`} onClick={() => selectImage(image)} style={{width: 100, height: 100, cursor: 'pointer'}} />
              </div>
          ))}
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
