import "@/components/course_components/table_courses.css";
import React from "react";
import { MyModal } from '@/components/course_components/phdPageInner';
import {
  Pagination,
  Button
} from "@nextui-org/react";
import { Course } from "@/types/course";


export const Table_courses = ({ courses }: { courses: Course[] }) => {
  // const [page, setPage] = React.useState(1);
  // const rowsPerPage = 6;

  // const pages = Math.ceil(dataItems.length / rowsPerPage);
  // const onNextPage = React.useCallback(() => {
  //     if (page < pages) {
  //     setPage(page + 1);
  //     }
  // }, [page, pages]);

  // const onPreviousPage = React.useCallback(() => {
  //     if (page > 1) {
  //     setPage(page - 1);
  //     }
  // }, [page]);

  // const items = React.useMemo(() => {
  //     const start = (page - 1) * rowsPerPage;
  //     const end = start + rowsPerPage;
  //     return dataItems.slice(start, end);
  // }, [page, dataItems]);
  return (
    <div>
      <div className="table-container">
        <div className="inline-flex bg-[#3E99ED] lg:text-xl md:text-base sm:text-base xs:text-sm xxs:text-sm xxxs:text-xs font-normal pt-1.5 pb-1.5 px-20 mb-5 text-[#FFF] rounded-full">Recent course 2/2023</div>
        <table>
          <thead>
            <tr className="table-header">
              <th className="table-header1">
                <div className="lg:ml-20 md:px-10">
                  Course code
                </div>
              </th>
              <th className="table-header2">Course name</th>
              <th className="table-header3"></th>
            </tr>
          </thead>
        </table>

        {
          courses.map((course) => <div key={course._id} className="table-row">
            <div className="grid grid-cols-6">
              <div className="lg:col-start-3 lg:col-end-4  md:col-start-3 md:col-end-4  sm:col-start-2 sm:col-end-3 xs:col-start-2 xs:col-end-3 xxs:col-start-2 xxs:col-end-3">
                <span className="bg-[#262626] rounded-full px-3 py-2 font-medium lg:text-base md:text-base sm:text-base xs:text-sm text-white xxs:text-xs xxxs:text-xs">{course._id}</span>
              </div>
            </div>
            
            <span className="table-cell-2">
              <span className="english-course-name">{course.name_en}</span>{" "} <br />
              <span className="thai-course-name">{course.name_th}</span>
            </span>
              <span className="table-cell-3">
                <MyModal course={course} />
              </span>
          </div>)
        }
        {" "}
        <br />
        {/* {items.map((item, index) => (
        <span className="table-row" key={index}>
            <span className="table-cell-1">{item.Course_code}</span>
            <span className="table-cell-2">
            <span className="english-course-name">{item.Course_name_en}</span>{" "} <br />
            <span className="thai-course-name">{item.Course_name_th}</span>
            </span>
            <span className="table-cell-3"><PhdPageInner/></span>
        </span>
        ))} */}

        {/* ปุ่มกดเลือกหน้าที่ต้องการ */}

        {/* {pages > 1 && (
                <div>
                <div className="divider" />
                <div className="flex w-full">
                    <Button
                    className="button-Previous"
                    isDisabled={page === 1}
                    size="sm"
                    variant="flat"
                    onClick={onPreviousPage}
                    >
                        <div className="arrow-right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path d="M15.8334 10.5H4.16675M4.16675 10.5L10.0001 16.3334M4.16675 10.5L10.0001 4.66669" stroke="#667085" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    Previous
                    </Button>
                    <div className="flex w-full justify-center">
                    <Pagination
                        isCompact
                        showControls
                        showShadow
                        color="primary"
                        page={page}
                        total={pages}
                        onChange={(newPage) => setPage(newPage)}
                    />
                    </div>
                    <Button
                    className="button-Next"
                    isDisabled={page === pages}
                    size="sm"
                    variant="flat"
                    onClick={onNextPage}
                    >
                    Next
                    <div className="arrow-right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path d="M4.1665 10.5H15.8332M15.8332 10.5L9.99984 4.66669M15.8332 10.5L9.99984 16.3334" stroke="#667085" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    </Button>
                </div>
                </div>
            )} */}
      </div>
    </div>
  );
};