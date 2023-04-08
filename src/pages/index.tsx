import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import Button from "@/components/common/Button";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const router = useRouter();
  const handleAdvanceReserve = () => {
    router.push("/coupons/advance-reservation");
  };
  return (
    <main className="flex min-h-screen justify-center flex-col items-center gap-10 p-24 bg-white">
      <Button
        text="게임 사전 예약 쿠폰 발급 페이지"
        handleClick={handleAdvanceReserve}
      />
      <Button text="쿠폰 관리 페이지" handleClick={handleAdvanceReserve} />
    </main>
  );
};

export default Home;
