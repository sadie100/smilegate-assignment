import Header from "@/components/common/Header";
import Button from "@/components/common/Button";
import { useContext } from "react";
import { ModalContext } from "@/contexts/modalContext";
import CouponForm from "@/components/pages/couponReserve/CouponForm";
import axios, { AxiosError } from "axios";

type ReservationType = {
  name: string;
  phone: string;
};

const Reservation = () => {
  const { dispatch } = useContext(ModalContext);
  const handleReserve = async (data: ReservationType) => {
    try {
      const res = await axios.post("http://localhost:8000/api/coupon", data);
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

  const modalButtons = {
    cancel: {
      label: "취소",
    },
    confirm: {
      label: "발급하기",
      form: "CouponForm",
      onClick: handleReserve,
    },
  };

  const handleOpen = () => {
    dispatch({
      type: "open",
      payload: {
        title: "쿠폰 발급하기",
        content: <CouponForm />,
        buttons: modalButtons,
      },
    });
  };

  return (
    <div className="flex min-h-screen flex-col gap-5 items-center bg-white">
      <Header text="스마일게이트 게임 사전 예약" />
      <Button
        text="사전예약 쿠폰 발급하기"
        handleClick={handleOpen}
        width="15rem"
      />
    </div>
  );
};

export default Reservation;
