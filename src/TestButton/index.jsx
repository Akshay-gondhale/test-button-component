const TestButton = ({ title = "This is test button" }) => {
  return (
    <>
      <div className="w-max h-[3rem] px-[1rem] mt-[2rem] transition-all duration-300 flex justify-center items-center border-red-300 border-[2px] border-dashed hover:border-solid ">
        <p>{title}</p>
      </div>
    </>
  );
};
export default TestButton;
