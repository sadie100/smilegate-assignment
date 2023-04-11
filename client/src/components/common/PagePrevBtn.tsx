import { useContext } from "react";
import { CouponContext } from "@/contexts/couponContext";

const PagePrevBtn = () => {
  const {
    state: { currentPage },
    dispatch,
  } = useContext(CouponContext);

  const handleClick = () => {
    dispatch({
      type: "CURPAGE_UPDATE",
      payload: currentPage - 1,
    });
  };
  return (
    <li>
      <button
        onClick={handleClick}
        className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <span className="sr-only">Previous</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </li>
  );
};

export default PagePrevBtn;
