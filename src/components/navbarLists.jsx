"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

{/*passing props to compare muenlist url with the pathname hook in next js*/}

const NavbarLists =({menuList})=>{
    const pathName = usePathname();

return (
    <Link href={menuList.url} className={`${pathName === menuList.url && `rounded p-1 bg-black text-white`}`}>
            {menuList.title}
    </Link>
)
}

export default NavbarLists