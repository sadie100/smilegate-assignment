import Link from "next/link";
export default () => {
  return (
    <div className="flex min-h-screen justify-center flex-col items-center gap-10 p-24 bg-white">
      <div>사전 예약 페이지</div>
      <button>쿠폰 발급하기</button>
      <Link href="/">뒤로 가기</Link>
    </div>
  );
};
