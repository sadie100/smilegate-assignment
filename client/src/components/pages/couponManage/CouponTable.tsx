import { useContext } from "react";
import { CouponContext } from "@/contexts/couponContext";

const PAGE_MAX = 10;

const normalPageClass =
  "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
const currentPageClass =
  "z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white";

const CouponTable = () => {
  const {
    state: { search, data, currentPage, totalPage },
    dispatch,
  } = useContext(CouponContext);

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                이름
              </th>
              <th scope="col" className="px-6 py-3">
                휴대전화 번호
              </th>
              <th scope="col" className="px-6 py-3">
                쿠폰 번호
              </th>
              <th scope="col" className="px-6 py-3">
                발급 일자
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ name, phone, couponId, createdAt }, idx) => {
              return (
                <tr
                  key={idx}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4">{name}</td>
                  <td className="px-6 py-4">{phone}</td>
                  <td className="px-6 py-4">{couponId}</td>
                  <td className="px-6 py-4">{createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <nav
        className="flex items-center justify-center pt-4"
        aria-label="Table navigation"
      >
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <a
              href="#"
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
            </a>
          </li>
          {totalPage <= PAGE_MAX
            ? Array.from({ length: totalPage }, (_, index) => index + 1).map(
                (page, idx) => {
                  return (
                    <li>
                      <a
                        href="#"
                        className={
                          currentPage === page
                            ? currentPageClass
                            : normalPageClass
                        }
                      >
                        {page}
                      </a>
                    </li>
                  );
                }
              )
            : Array.from(
                { length: PAGE_MAX },
                (_, index) => currentPage - (PAGE_MAX - index)
              ).map((page, idx) => {
                return (
                  <li>
                    <a
                      href="#"
                      className={
                        currentPage === page
                          ? currentPageClass
                          : normalPageClass
                      }
                    >
                      {page}
                    </a>
                  </li>
                );
              })}
          <li>
            <a
              href="#"
              className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CouponTable;
