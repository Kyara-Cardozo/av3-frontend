/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import links from "@/components/data/constants/LinksAdmin";
import { IconLibrary } from "@tabler/icons-react";

import style from '@/components/css/style.module.css'

export default function Home() {

    return (
        <div className="flex flex-1 h-screen">
            <Sidebar>
                <SidebarBody className={`${style.borda_menu}`}>
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                        <div className="flex gap-2 items-center">
                            <IconLibrary />
                            <span>Bem vindo</span>
                        </div>
                        <div className="mt-7 flex flex-col gap-2">
                            {links.map((link, idx) => (
                                <SidebarLink
                                    key={idx}
                                    link={link}
                                />
                            ))}
                        </div>
                    </div>
                </SidebarBody>  
            </Sidebar>

            <div className="flex flex-col flex-1 w-full h-screen">

            </div>
        </div>
   )
}
