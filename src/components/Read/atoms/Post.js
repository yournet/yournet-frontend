import { useEffect } from "react";
import { usePostLike } from "../../../hooks/usePostLike";
import like from "../../../img/like.png";
import dislike from "../../../img/x.png";

function Post({ name, title, content, hashtag, postId }) {
  const { mutate } = usePostLike();

  return (
    <div className="px-8 pt-5 pb-14 flex flex-col justify-center content-center w-auto">
      <div className="text-xl font-semibold">{`${name}님의 글`}</div>
      <div className="shadow-md my-3 px-3 py-1 rounded-[50px] text-[#4A4A4A] font-medium text-md">
        {title}
      </div>
      <div className="overflow-x-auto overflow-y-hidden h-8 flex">
        {hashtag?.length === 0 ? (
          <span className="flex justify-center items-center text-sm text-gray-400">
            해쉬태그 없음
          </span>
        ) : (
          hashtag?.map((element) => {
            return (
              <>
                <span className="p-2 text-sm text-white mr-2 rounded-2xl bg-[#41960072] flex justify-center items-center">
                  {element.name}
                </span>
              </>
            );
          })
        )}
      </div>
      <div className="shadow-md my-3 px-3 py-3 rounded-[10px] h-[500px] text-[#4A4A4A] text-sm">
        {content}
      </div>
      <div className="flex flex-row justify-between w-48 self-center">
        <img
          src={like}
          alt="like"
          onClick={() => {
            mutate({ postId });
          }}
        />
        <img src={dislike} alt="like" />
      </div>
    </div>
  );
}
export default Post;
