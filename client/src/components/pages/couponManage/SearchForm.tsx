import { FormProvider, useForm } from "react-hook-form";
import { useContext } from "react";
import { ModalContext } from "@/contexts/modalContext";
import FormItem from "@/components/common/FormItem";

const SearchForm = () => {
  const {
    state: {
      buttons: { confirm },
    },
  } = useContext(ModalContext);
  const methods = useForm();
  const { watch, setValue, handleSubmit } = methods;
  const onSubmit = (data: any) => {
    console.log("검색");
  };

  return (
    <FormProvider {...methods}>
      <form
        id="SearchForm"
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center items-center gap-3 w-[80%]"
      >
        <FormItem
          name="name"
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
