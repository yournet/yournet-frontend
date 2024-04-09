import { useNavigate } from "react-router-dom";
import { useGetRecommend } from "../../hooks/useGetRecommend";
import Preview from "./atoms/Preview";
import SimilarUser from "./atoms/SimilarUser";
import { useGetSimilarUser } from "../../hooks/useGetSimilarUser";
import Search from "./atoms/Search";
import Loading from "../Loading";

function Main() {
  const { data: recommendData, isLoading } = useGetRecommend();
  const { data: similarData, isLoading: isLoading2 } = useGetSimilarUser();
  const navigate = useNavigate();
  return (
      <>
        {!isLoading && !isLoading2 ? (
            <div className="flex flex-col justify-center items-center py-10">
              <div className="text-2xl font-semibold text-orange-700">CHORA</div>
              <Search />
              <div className="mt-10 ml-5 text-xl font-semibold self-start text-orange-800">
                회원님을 위한 추천글
              </div>
              <div className="w-11/12 flex flex-col justify-center">
                {recommendData?.map((element, index) => {
                  return (
                      <Preview
                          key={`${index}`}
                          title={element?.title}
                          content={element?.content}
                          postId={element?.post_id}
                      ></Preview>
                  );
                })}
              </div>

              <div
                  onClick={() => {
                    navigate("/write");
                  }}
                  className="bg-orange-600 h-16 w-16 flex rounded-full text-white justify-center items-center font-semibold text-3xl self-end mr-3 fixed bottom-5"
              >
                <p className="w-10 h-10 text-center">+</p>
              </div>
            </div>
        ) : (
            <Loading />
        )}
      </>
  );
}
export default Main;
