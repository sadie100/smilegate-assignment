import { useContext } from "react";
import { CouponContext } from "@/contexts/couponContext";
import PageBtn from "@/components/common/PageBtn";
import PagePrevBtn from "@/components/common/PagePrevBtn";
import PageNextBtn from "@/components/common/PageNextBtn";

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
          {currentPage > 1 && <PagePrevBtn />}
          {totalPage <= PAGE_MAX
            ? Array.from({ length: totalPage }, (_, index) => index + 1).map(
                (page, idx) => {
                  return <PageBtn page={page} />;
                }
              )
            : Array.from({ length: PAGE_MAX }, (_, index) => {
                if (currentPage <= PAGE_MAX / 2) {
                  return index + 1;
                }
                return currentPage - (PAGE_MAX / 2 - index);
              }).map((page, idx) => {
                return <PageBtn page={page} />;
              })}
          {currentPage < totalPage && <PageNextBtn />}
        </ul>
      </nav>
    </div>
  );
};

export default CouponTable;
