import Link from "next/link";
import Header from "@/components/common/Header";
import Button from "@/components/common/Button";
import { useContext } from "react";
import { ModalContext } from "@/contexts/modalContext";
import CouponForm from "@/components/pages/advanceReserve/CouponForm";
import axios, { AxiosError } from "axios";

type ReservationType = {
  name: string;
  phone: string;
};

const AdvanceReservation = () => {
  const { state, dispatch } = useContext(ModalContext);
  const handleReserve = async (data: ReservationType) => {
    try {
      console.log(data);
      const res = await axios.post("http://localhost:8000/api/reserve", data);
      const { couponId } = res.data;
      if (res.status === 200) {
        alert(`쿠폰 발급이 완료되었습니다.\n발급된 쿠폰 : ${couponId}`);
        dispatch({ type: "close" });
      }
    } catch (e: unknown) {
      if (e instanceof AxiosError && e.response && e.response.data) {
        alert(e.response.data);
      } else {
        console.log(e);
        alert("오류가 발생했습니다.");
      }
    }
  };
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
            form: "CouponForm",
            onClick: handleReserve,
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
