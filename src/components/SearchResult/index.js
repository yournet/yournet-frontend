import { useLocation } from "react-router-dom";
import { useGetSearch } from "../../hooks/useGetSearch";
import Preview from "../Main/atoms/Preview";
import Loading from "../Loading";

function SearchResult() {
  const location = useLocation();
  const searchValue = location.state.hashtag;

  const { data, isLoading } = useGetSearch({ hashtag: searchValue });
  console.log(searchValue);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-5 ml-5 text-xl font-semibold self-start">
        검색 결과
      </div>
      {!isLoading ? (
        data?.map((element, index) => {
          return (
            <Preview
              key={`${index}`}
              title={element?.title}
              content={element?.content}
              postId={element?.id}
            ></Preview>
          );
        })
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
}

export default SearchResult;
