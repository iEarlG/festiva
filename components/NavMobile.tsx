
import Image from "next/image";

import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

import { NavItems } from "@/components/NavItems";
  
export const NavMobile = () => {
    return (
        <nav className="md:hidden">
            <Sheet>
                <SheetTrigger className="align-middle">
                    <Menu className="w-6 h-6 cursor-pointer" />
                </SheetTrigger>
                <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
                    <Image 
                        alt="logo"
                        src="/logo.svg"
                        width={128}
                        height={38}
                    />
                    <Separator className="border border-gray-50" />
                    <NavItems />
                </SheetContent>
            </Sheet>
        </nav>
    )
};