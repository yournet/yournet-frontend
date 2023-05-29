import { useNavigate } from "react-router-dom";
import { useGetSearch } from "../../../hooks/useGetSearch";
import { useState } from "react";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  function searchSubmit() {
    navigate("/search", {
      state: {
        hashtag: searchValue,
      },
    });
  }

  return (
    <>
      <form onSubmit={searchSubmit} className="w-11/12">
        <input
          placeholder="검색어를 입력하세요"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          className="w-11/12 mt-5 bg-slate-50 p-2 text-sm rounded-md"
        ></input>
      </form>
    </>
  );
}

export default Search;
