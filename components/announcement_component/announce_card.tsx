import React, { useState } from "react";
import { Image } from "@nextui-org/react";
import {
    Pagination,
    Button, 
    Input
  } from "@nextui-org/react";

import'@/components/course_components/course_navbar.css';
import { useTranslations } from "next-intl";

export const Announcement_card = () => {
    const [hoveredBox, setHoveredBox] = useState<number | null>(null);

    const handleMouseEnter = (boxNumber: number) => {
        setHoveredBox(boxNumber);
    };

    const handleMouseLeave = () => {
        setHoveredBox(null);
    };

    const isImageHovered = (boxNumber: number) => {
        return hoveredBox === boxNumber;
    };

    const isTextHovered = (boxNumber: number) => {
        return hoveredBox === boxNumber;
    };

    const isUnderlineHovered = (boxNumber: number) => {
        return hoveredBox === boxNumber;
    };

    const buttonStyles = {
        height: '2.5rem', 
        fontSize: '1rem', 
        fontWeight: 400,
        marginRight: '0.625rem', 
        marginBottom: '0.625rem', 
        border: '0.0625rem solid #797979', 
        alignItems: 'left', 
        transition: 'background-color 1.0s ease'
    };
    
    

    const hoveredtext = {
        textDecoration: "underline",
        textDecorationThickness: "0.125rem"
    };
    

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
    
    const t = useTranslations("Annoucement");
  return (
    <div>
            <div className="navbar" style={{ marginBottom: '3.125rem' }}>
                <div
                style={{
                    width: '100%', 
                    height: '0.0625rem',
                    backgroundColor: '#ccc',
                    margin: '3.125rem 0', 
                    display: 'block',
                }}
                    />
                <div className="md:ml-auto md:mr-auto flex flex-wrap items-center">
                    <div className="items-right w-[365px] py-1 px-3 lg:ml-auto mb-5 md:items-left lg:order-2">
                        <Input
                            type="text"
                            variant="bordered"
                            placeholder="Search..."
                        />
                    </div>
                    <div className="lg:order-1">
                        <Button radius="full" variant="light" style={buttonStyles} className="Button_announ">{t("button1")}</Button>
                        <Button radius="full" variant="light" style={buttonStyles} className="Button_announ">{t("button2")}</Button>
                        <Button radius="full" variant="light" style={buttonStyles} className="Button_announ">{t("button3")}</Button>
                        <Button radius="full" variant="light" style={buttonStyles} className="Button_announ">{t("button4")}</Button>
                        <Button radius="full" variant="light" style={buttonStyles} className="Button_announ">{t("button5")}</Button>
                    </div>
                </div>
            </div>
        
        <div className="card">
            <div className="grid md:grid-cols-12 gap-6 md:gap-4 justify-center mb-20">
                {/* Grid 1 (empty) */}
                <div className="col-span-1"></div>

                {/* Grid 2 */}
                <div className="col-span-5 md:col-span-6">
                    <p className="text-[#1C5CFF] text-[16px] font-[500] leading-normal">
                        Announcement
                    </p>
                    <div
                        className={`flex flex-col ${isTextHovered(1) ? "hovered" : ""}`}
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={handleMouseLeave}
                        style={{
                        transform: isTextHovered(1) ? "translateY(10px)" : "none",
                        transition: "transform 0.8s ease",
                        }}
                    >
                        <p
                            className={`font-[700] text-[30px] text-[#1E1E1E] leading-normal pt-[20px] pb-[20px]`}
                            style={isUnderlineHovered(1) ? hoveredtext : {}}
                        >
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            Powerful Trading Tools and Features for Experienced Investors
                        </a>
                        </p>
                        <p
                        className="font-[400] text-[15px] text-[#7D7D7D] leading-normal pt-[20px] pb-[20px]"
                        style={{ maxWidth: "85%" }}
                        >
                        I’m always trying to think of new and interesting business ideas. I
                        generally try to come up with ideas by thinking of what I would want
                        to do or see in the world. Then, I try to find reasons why it wouldn’t
                        work...
                        </p>
                        <p className="font-[400] text-[15px] text-[#797979] leading-normal pt-[20px] pb-[20px]">
                        Day 21/09/2023
                        </p>
                    </div>
                </div>

                {/* Grid 3 */}
                <div className="col-span-6 md:col-span-4 flex items-center justify-center">
                    <div
                        className="image-container"
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={handleMouseLeave}
                        style={{
                        transformOrigin: "top left",
                        transform: isImageHovered(1) ? "scale(1.05)" : "scale(1)",
                        transition: "transform 0.8s ease",
                        width: "100%",
                        }}
                    >
                        <Image
                        alt=""
                        className="flex object-cover aspect-video lg:h-[300px] w-auto md:h-[300px]"
                        src={`https://picsum.photos/seed/${Image}/750`}
                        />
                    </div>
                </div>

            
            </div> 


            <div className="grid md:grid-cols-12 gap-6 md:gap-4 justify-center mb-20">
                {/* Grid 1 (empty) */}
                <div className="col-span-1"></div>

                {/* Grid 2 */}
                <div className="col-span-5 md:col-span-6">
                    <p className="text-[#1C5CFF] text-[16px] font-[500] leading-normal">
                        News
                    </p>
                    <div
                        className={`flex flex-col ${isTextHovered(2) ? "hovered" : ""}`}
                        onMouseEnter={() => handleMouseEnter(2)}
                        onMouseLeave={handleMouseLeave}
                        style={{
                        transform: isTextHovered(2) ? "translateY(10px)" : "none",
                        transition: "transform 0.8s ease",
                        }}
                    >
                        <p
                            className={`font-[700] text-[30px] text-[#1E1E1E] leading-normal pt-[20px] pb-[20px]`}
                            style={isUnderlineHovered(2) ? hoveredtext : {}}
                        >
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            Powerful Trading Tools 
                        </a>
                        </p>
                        <p
                        className="font-[400] text-[15px] text-[#7D7D7D] leading-normal pt-[20px] pb-[20px]"
                        style={{ maxWidth: "85%" }}
                        >
                        I’m always trying to think of new and interesting business ideas. I
                        generally try to come up with ideas by thinking of what I would want
                        to do or see in the world. Then, I try to find reasons why it wouldn’t
                        work...
                        </p>
                        <p className="font-[400] text-[15px] text-[#797979] leading-normal pt-[20px] pb-[20px]">
                        Day 21/09/2023
                        </p>
                    </div>
                </div>

                {/* Grid 3 */}
                <div className="col-span-6 md:col-span-4 flex items-center justify-center">
                    <div
                        className="image-container"
                        onMouseEnter={() => handleMouseEnter(2)}
                        onMouseLeave={handleMouseLeave}
                        style={{
                        transformOrigin: "top left",
                        transform: isImageHovered(2) ? "scale(1.05)" : "scale(1)",
                        transition: "transform 0.8s ease",
                        width: "100%",
                        }}
                    >
                        <Image
                        alt=""
                        className="flex object-cover aspect-video lg:h-[300px] w-auto md:h-[300px]"
                        src={`https://picsum.photos/seed/${Image}/750`}
                        />
                    </div>
                </div>

            
            </div>
        </div>

        





        {/* <div className="next_previous">
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
        </div> */}

    </div>
  );
};
