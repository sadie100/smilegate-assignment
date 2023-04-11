import { FormProvider, useForm } from "react-hook-form";
import FormInput from "@/components/common/FormInput";
import { useContext } from "react";
import { CouponContext } from "@/contexts/couponContext";

const SearchForm = () => {
  const { dispatch } = useContext(CouponContext);
  const methods = useForm();
  const { handleSubmit, register, watch } = methods;
  const handleSearch = (data: any) => {
    const { searchStr } = data;
    dispatch({
      type: "SEARCH_UPDATE",
      payload: searchStr,
    });
  };

  const handleChange = () => {
    const val = watch("category");
    dispatch({
      type: "CATEGORY_UPDATE",
      payload: val,
    });
  };

  return (
    <FormProvider {...methods}>
      <form
        id="SearchForm"
        onSubmit={handleSubmit(handleSearch)}
        className="flex justify-center items-center gap-3 w-full"
      >
        <select
          {...register("category", {
            onChange: handleChange,
          })}
          name="category"
          className="block rounded border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value="*">전체</option>
          <option value="name">이름</option>
          <option value="phone">휴대전화 번호</option>
        </select>
        <FormInput
          name="searchStr"
          type="search"
          placeholder="검색할 내용을 입력해 주세요."
          validation={{
            setValueAs: (val) => val.replaceAll("-", ""),
          }}
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
