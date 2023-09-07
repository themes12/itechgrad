"use client"
// import { useRef } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import { ChevronDownIcon, MagnifyingGlassPlusIcon, ArrowTrendingUpIcon, BoltIcon, ServerIcon, UserIcon } from "@heroicons/react/24/outline"
import Image from 'next/image';
import { navItems } from "@/utils/navbar";

type Props = {}

const NavbarHeader = (props: Props) => {
    // const chevronDown = useRef<SVGSVGElement>(null);
    // const onChevronPress = () : void => {
    //     chevronDown.current?.classList.toggle("rotate-180")
    //     console.log("press")
    // }

    return (
        <Navbar className="py-3" classNames={{
            wrapper: "!max-w-none px-10"
        }}>
            <NavbarBrand>
                <Image src="/logo.svg" alt="Logo CSCMU" width="90" height="90" />
                <h2 className="font-semibold text-xl">Computer Science CMU</h2>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                {navItems.map((item, index) =>
                    item.type === "dropdown" ? <Dropdown key={item.title}>
                        <NavbarItem>
                            <DropdownTrigger>
                                <Button
                                    disableRipple
                                    className="p-0 bg-transparent data-[hover=true]:bg-transparent text-sm font-medium uppercase"
                                    // endContent={<ChevronDownIcon ref={chevronDown} className="w-5 h-5 transition duration-300" />}
                                    // onPressStart={onChevronPress}
                                    endContent={<ChevronDownIcon className="w-5 h-5" />}
                                    radius="sm"
                                    variant="light"
                                >
                                    {item.title}
                                </Button>
                            </DropdownTrigger>
                        </NavbarItem>
                        <DropdownMenu
                            className="w-full"
                            itemClasses={{
                                base: "gap-4",
                            }}
                        >
                            {
                                item.options ? item.options?.map((value, index) =>
                                    <DropdownItem
                                        key={value.title}
                                        className="capitalize"
                                    >
                                        {value.title}
                                    </DropdownItem>
                                ) : <></>
                            }
                        </DropdownMenu>
                    </Dropdown> :
                        <NavbarItem key={item.title}>
                            <Link className="text-sm font-medium uppercase" color="foreground" href="#">
                                {item.title}
                            </Link>
                        </NavbarItem>
                )}
            </NavbarContent>
        </Navbar>
    )
}

export default NavbarHeader