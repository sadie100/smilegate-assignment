import { useContext } from "react";
import { CouponContext } from "@/contexts/couponContext";
import PageBtn from "@/components/common/PageBtn";
import PagePrevBtn from "@/components/common/PagePrevBtn";
import PageNextBtn from "@/components/common/PageNextBtn";

const PAGE_MAX = 10;

const CouponTable = () => {
  const {
    state: { data, currentPage, totalPage },
  } = useContext(CouponContext);

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
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
            {data.map(({ name, phone, couponId, createdAtFormat }, idx) => {
              return (
                <tr
                  key={idx}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-center"
                >
                  <td className="px-6 py-4">{name}</td>
                  <td className="px-6 py-4">{phone}</td>
                  <td className="px-6 py-4">{couponId}</td>
                  <td className="px-6 py-4">{createdAtFormat}</td>
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
                  return <PageBtn page={page} key={idx} />;
                }
              )
            : Array.from(
                {
                  length: Math.min(
                    PAGE_MAX,
                    PAGE_MAX / 2 + totalPage - currentPage + 1
                  ),
                },
                (_, index) => {
                  if (currentPage <= PAGE_MAX / 2) {
                    return index + 1;
                  }
                  return currentPage - (PAGE_MAX / 2 - index);
                }
              ).map((page, idx) => {
                return <PageBtn page={page} key={idx} />;
              })}
          {currentPage < totalPage && <PageNextBtn />}
        </ul>
      </nav>
    </div>
  );
};

export default CouponTable;
