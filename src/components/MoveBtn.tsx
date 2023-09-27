const MoveBtn = ({ onClick }: { onClick: () => void }): JSX.Element => {
  return (
    <>
      <button
        className="w-[300px] h-[50px] rounded-full bg-[#65D26E] text-black font-semibold"
        onClick={onClick}
      >
        로그인하기
      </button>
    </>
  );
};

export default MoveBtn;
