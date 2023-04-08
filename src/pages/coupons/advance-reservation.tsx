import Link from "next/link";
import Header from "@/components/Header";
import Button from "@/components/Button";
import { useContext } from "react";
import { ModalContext } from "@/contexts/modalContext";

const AdvanceReservation = () => {
  const { state, dispatch } = useContext(ModalContext);
  const handleOpen = () => {
    dispatch({ type: "open", payload: "advance-reservation" });
  };

  return (
    <div className="flex min-h-screen flex-col gap-5 items-center bg-white">
      <Header>@@게임 사전 예약</Header>
      <Button text="쿠폰 발급하기" handleClick={handleOpen} width="10rem" />
      <Link href="/">뒤로 가기</Link>
    </div>
  );
};

export default AdvanceReservation;
