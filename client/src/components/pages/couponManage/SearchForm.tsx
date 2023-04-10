import { FormProvider, useForm } from "react-hook-form";
import FormItem from "@/components/common/FormItem";
import { useContext } from "react";
import { CouponContext } from "@/contexts/couponContext";

const SearchForm = () => {
  const { dispatch } = useContext(CouponContext);
  const methods = useForm();
  const { handleSubmit } = methods;

  const handleSearch = (data: any) => {
    const { searchStr } = data;
    dispatch({
      type: "setSearch",
      payload: searchStr,
    });
  };

  return (
    <FormProvider {...methods}>
      <form
        id="SearchForm"
        onSubmit={handleSubmit(handleSearch)}
        className="flex justify-center items-center gap-3 w-[80%]"
      >
        <FormItem
          name="searchStr"
          type="search"
          placeholder="검색할 내용을 입력해 주세요."
        />
        <button
          type="submit"
          className="w-fix break-keep rounded-md bg-main-600 py-2.5 px-3 text-sm font-semibold text-white shadow-sm hover:bg-main-500 text-lg"
        >
          검색
        </button>
      </form>
    </FormProvider>
  );
};

export default SearchForm;
