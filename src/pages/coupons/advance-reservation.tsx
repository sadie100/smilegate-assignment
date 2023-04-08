import Link from "next/link";
import Header from "@/components/Header";
import Button from "@/components/Button";
import { useContext } from "react";
import { ModalContext } from "@/contexts/modalContext";
import CouponForm from "@/components/pages/advanceReserve/CouponForm";

const AdvanceReservation = () => {
  const { state, dispatch } = useContext(ModalContext);
  const handleOpen = () => {
    dispatch({
      type: "open",
      payload: {
        title: "쿠폰 발급하기",
        content: <CouponForm />,
        buttons: {
          cancel: {
            label: "취소",
          },
          confirm: {
            label: "발급하기",
            onClick: () => alert("dd"),
          },
        },
      },
    });
  };

  return (
    <div className="flex min-h-screen flex-col gap-5 items-center bg-white">
      <Header>스마일게이트 게임 사전 예약</Header>
      <Button
        text="사전예약 쿠폰 발급하기"
        handleClick={handleOpen}
        width="15rem"
      />
      <Link href="/">뒤로 가기</Link>
    </div>
  );
};

export default AdvanceReservation;
