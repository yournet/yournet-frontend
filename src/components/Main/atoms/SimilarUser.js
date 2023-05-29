function SimilarUser({ name, email }) {
  return (
    <div
      style={{ flex: "0 0 auto" }}
      className="bg-[#41960072] flex justify-center items-center mt-4 mr-5 border text-white w-[100px] h-[100px] rounded-full"
    >
      <p>{name}</p>
    </div>
  );
}
export default SimilarUser;
