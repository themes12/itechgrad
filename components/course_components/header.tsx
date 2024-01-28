"use client"
import { SettingCourse } from '@/types/setting';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import React from 'react'

function Header({ setting }: { setting: SettingCourse; }) {
    const pathname = usePathname();
    const locale = useLocale();
    const arrayOfLocale = pathname.split("/");
    return (
        <div className="inline-flex bg-[#3E99ED] lg:text-xl md:text-base sm:text-base xs:text-sm xxs:text-sm xxxs:text-xs font-normal pt-1.5 pb-1.5 px-20 mb-5 text-[#FFF] rounded-full">
            {
                arrayOfLocale[arrayOfLocale.length - 1] === "all" ? <>All courses</> :
                    <>Recent courses {setting.semester}/
                        {locale === "th"
                            ? new Date(setting.year).getFullYear() + 543
                            : new Date(setting.year).getFullYear()}</>
            }
        </div>
    )
}

export default Header