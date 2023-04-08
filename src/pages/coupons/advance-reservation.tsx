import Link from "next/link";
import Header from "@/components/Header";

const AdvanceReservation = () => {
  return (
    <div className="flex min-h-screen flex-col gap-5 items-center bg-white">
      <Header>@@게임 사전 예약</Header>
      <button>쿠폰 발급하기</button>
      <Link href="/">뒤로 가기</Link>
    </div>
  );
};

export default AdvanceReservation;
