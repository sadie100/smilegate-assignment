import { useContext } from "react";
import SearchForm from "@/components/pages/couponManage/SearchForm";
import Header from "@/components/common/Header";
import CouponTable from "@/components/pages/couponManage/CouponTable";
import axios, { AxiosError } from "axios";
import { CouponContext, CouponProvider } from "@/contexts/couponContext";
import SampleButton from "@/components/pages/couponManage/SampleButton";

const Management = () => {
  return (
    <div className="flex min-h-screen flex-col gap-5 items-center bg-white">
      <Header text="쿠폰 관리 페이지" />
      <CouponProvider>
        <SampleButton />
        <div className="flex min-h-screen flex-col gap-5 w-[80%]">
          <SearchForm />
          <CouponTable />
        </div>
      </CouponProvider>
    </div>
  );
};

export default Management;
