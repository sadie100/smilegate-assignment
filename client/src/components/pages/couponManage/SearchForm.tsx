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
        className="flex flex-col justify-stretch items-stretch gap-3 w-full"
      >
        <FormItem
          name="name"
          type="search"
          label="검색하기"
          placeholder="이름을 입력해 주세요."
        />
        <button>검색</button>
      </form>
    </FormProvider>
  );
};

export default SearchForm;
