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

  const handleSearch = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/search", {
        params: search,
      });
      const datas = res.data;
      if (res.status === 200) {
        dispatch({ type: "setData", payload: datas });
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
  useEffect(() => {
    (async () => {
      await handleSearch();
    })();
  }, []);

  return (
    <div className="flex min-h-screen flex-col gap-5 items-center bg-white">
      <Header>쿠폰 관리 페이지</Header>
      <Link href="/">뒤로 가기</Link>
      <CouponProvider>
        <SearchForm handleSearch={handleSearch} />
        <CouponTable />
      </CouponProvider>
    </div>
  );
};

export default Management;
