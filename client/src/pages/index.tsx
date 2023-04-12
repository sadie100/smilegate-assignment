import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import Button from "@/components/common/Button";

const Home = () => {
  const router = useRouter();
  const handleReserve = () => {
    router.push("/coupons/reservation");
  };
  const handleManage = () => {
    router.push("/coupons/management");
  };
  return (
    <main className="flex min-h-screen justify-center flex-col items-center gap-10 p-24 bg-white">
      <Button
        text="게임 사전 예약 쿠폰 발급 페이지"
        handleClick={handleReserve}
      />
      <Button text="쿠폰 관리 페이지" handleClick={handleManage} />
    </main>
  );
};

export default Home;
