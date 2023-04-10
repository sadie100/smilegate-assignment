import SearchForm from "@/components/pages/couponManage/SearchForm";
import Header from "@/components/common/Header";
import Link from "next/link";

const Management = () => {
  return (
    <div className="flex min-h-screen flex-col gap-5 items-center bg-white">
      <Header>쿠폰 관리 페이지</Header>
      <SearchForm />
      <table />
      <Link href="/">뒤로 가기</Link>
    </div>
  );
};

export default Management;
