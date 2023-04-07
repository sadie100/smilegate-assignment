import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

function Home() {
  const router = useRouter();
  const handleAdvanceReserve = () => {
    router.push("/coupons/advance-reservation");
  };
  return (
    <main className="flex min-h-screen justify-center flex-col items-center justify-content gap-10 p-24 bg-white">
      <button
        className="w-[80%] min-w-[200px] rounded-md bg-main-600 px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-main-500 text-lg"
        onClick={handleAdvanceReserve}
      >
        게임 사전 예약 쿠폰 발급 페이지
      </button>
      <button
        className="w-[80%] min-w-[200px] rounded-md bg-main-600 px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-main-500 text-lg"
        onClick={handleAdvanceReserve}
      >
        쿠폰 관리 페이지
      </button>
    </main>
  );
}

export default Home;
