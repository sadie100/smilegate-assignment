import { useContext } from "react";
import { CouponContext } from "@/contexts/couponContext";
import axios from "axios";
import Button from "@/components/common/Button";

const SampleButton = () => {
  const { dispatch } = useContext(CouponContext);

  const makeSample = async () => {
    try {
      const res = await axios.post("http://localhost:8000/api/sample");
      if (res.status === 200) {
        alert("샘플 데이터가 생성되었습니다.");
        dispatch({ type: "CURPAGE_UPDATE", payload: 0 });
      }
    } catch (e: unknown) {
      console.log(e);
      alert("오류가 발생했습니다.");
    }
  };

  return <Button text="샘플 만들기" handleClick={makeSample} />;
};

export default SampleButton;
