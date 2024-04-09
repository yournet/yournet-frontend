import { useEffect } from "react";
import { useGetPosts } from "../../hooks/useGetPosts";
import Post from "./atoms/Post";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Loading";

function Read() {
  const { id } = useParams();
  const { data, isLoading } = useGetPosts({ id });
  const navigate = useNavigate();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      {!isLoading ? (
        <>
          <div
            onClick={() => {
              navigate("/");
            }}
            className="ml-8 text-2xl font-semibold text-[#578e2d] mt-10"
          >
            CHORA
          </div>
          <Post
            postId={data?.id}
            name={data?.user.name}
            title={data?.title}
            content={data?.content}
            hashtag={data?.hashTag}
          />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}
export default Read;
