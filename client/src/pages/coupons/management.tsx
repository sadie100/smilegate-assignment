import { useState, useEffect, useContext } from "react";
import SearchForm from "@/components/pages/couponManage/SearchForm";
import Header from "@/components/common/Header";
import Link from "next/link";
import CouponTable from "@/components/pages/couponManage/CouponTable";
import axios, { AxiosError } from "axios";
import { CouponContext, CouponProvider } from "@/contexts/couponContext";

const Management = () => {
  const {
    state: { search },
    dispatch,
  } = useContext(CouponContext);

  return (
    <div className="flex min-h-screen flex-col gap-5 items-center bg-white">
      <Header>쿠폰 관리 페이지</Header>
      <Link href="/">뒤로 가기</Link>
      <CouponProvider>
        <SearchForm />
        <CouponTable />
      </CouponProvider>
    </div>
  );
};

export default Management;
