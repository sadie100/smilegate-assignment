import SearchForm from "@/components/pages/couponManage/SearchForm";
import Header from "@/components/common/Header";
import FormLabel from "@/components/common/FormLabel";
import Form from "@/components/common/Form";
import FormItem from "@/components/common/FormItem";

const Management = () => {
  return (
    <div className="flex min-h-screen flex-col gap-5 items-center bg-white">
      <Header>쿠폰 관리 페이지</Header>
      <SearchForm />
      <table />
    </div>
  );
};

export default Management;
