import { useContext } from "react";
import SearchForm from "@/components/pages/couponManage/SearchForm";
import Header from "@/components/common/Header";
import CouponTable from "@/components/pages/couponManage/CouponTable";
import axios, { AxiosError } from "axios";
import { CouponContext, CouponProvider } from "@/contexts/couponContext";

const Management = () => {
  const {
    state: { search },
    dispatch,
  } = useContext(CouponContext);

  const makeSample = async () => {
    try {
      const res = await axios.post("http://localhost:8000/api/sample");
      if (res.status === 200) {
        dispatch({ type: "CURPAGE_UPDATE", payload: 1 });
      }
    } catch (e: unknown) {
      console.log(e);
      alert("오류가 발생했습니다.");
    }
  };
  return (
    <div className="flex min-h-screen flex-col gap-5 items-center bg-white">
      <Header text="쿠폰 관리 페이지" />
      <button onClick={makeSample}>샘플 만들기</button>
      <CouponProvider>
        <div className="flex min-h-screen flex-col gap-5 w-[80%]">
          <SearchForm />
          <CouponTable />
        </div>
      </CouponProvider>
    </div>
  );
};

export default Management;
