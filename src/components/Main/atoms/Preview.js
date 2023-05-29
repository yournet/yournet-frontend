import { useNavigate } from "react-router-dom";

function Preview({ title, content, postId }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/detail/${postId}`);
      }}
      className="w-full bg-slate-50 h-20 p-3 rounded-md mt-4"
    >
      <p
        style={{ textOverflow: "ellipsis", overflow: "hidden" }}
        className="font-semibold"
      >
        {title}
      </p>
      <p
        style={{ textOverflow: "ellipsis", overflow: "hidden" }}
        className="whitespace-nowrap"
      >
        {content}
      </p>
    </div>
  );
}
export default Preview;
