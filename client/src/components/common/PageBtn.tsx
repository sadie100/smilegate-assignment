import { useContext } from "react";
import { CouponContext } from "@/contexts/couponContext";

const normalPageClass =
  "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
const currentPageClass =
  "z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white";

const PageBtn = ({ page }: { page: number }) => {
  const {
    state: { currentPage },
    dispatch,
  } = useContext(CouponContext);

  const handleClick = () => {
    dispatch({
      type: "CURPAGE_UPDATE",
      payload: page,
    });
  };
  return (
    <li>
      <button
        onClick={handleClick}
        className={currentPage === page ? currentPageClass : normalPageClass}
      >
        {page}
      </button>
    </li>
  );
};

export default PageBtn;
