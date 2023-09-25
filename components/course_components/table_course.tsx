import "@/components/course_components/table_courses.css";
import React from "react";
import {MyModal} from '@/components/course_components/phdPageInner';
import {
    Pagination,
    Button
  } from "@nextui-org/react";
  


export const Table_courses = () => {
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
        <table>
        <thead>
            <tr className="table-header">
            <th className="table-header1 lg:pl-[90px] md:pl-[45px]">Course code</th>
            <th className="table-header2">Course name</th>
            <th className="table-header3"></th>
            </tr>
        </thead>
        </table>
        <span className="table-row">
            <span className="table-cell-1">204700</span>
            <span className="table-cell-2">
            <span className="english-course-name">Data Structure and Programming Languages</span>{" "} <br />
            <span className="thai-course-name">โครงสร้างข้อมูลและภาษาโปรแกรม</span>
            </span>
            <span className="table-cell-3"><MyModal/></span>
        </span>
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
  );
};