import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { NavItems } from "@/components/NavItems";
import { NavMobile } from "@/components/NavMobile";

export const Header = () => {
    return (
        <header className="w-full border-b">
            <div className="flex items-center justify-between wrapper">
                <Link href="/" className="w-36">
                    <Image 
                        alt="logo"
                        src="/logo.svg"
                        width={128}
                        height={38}
                    />
                </Link>
                <nav className="md:flex-between hidden w-full max-w-xs">
                    <NavItems />
                </nav>
                <div className="flex w-32 justify-end gap-3">
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                    <NavMobile />
                    <SignedOut>
                        <Button asChild className="rounded-full" size="lg">
                            <Link href="/sign-in">
                                Login
                            </Link>
                        </Button>
                    </SignedOut>
                </div>
            </div>
        </header>
    )
};