import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="border-t">
            <div className="flex-center wrapper flex-between flex-container flex-col gap-4 p-5 text-center sm:flex-row">
                <Link href="/">
                    <Image 
                        alt="Festiva Logo"
                        src="/logo.svg"
                        width={128}
                        height={38}
                    />
                </Link>
                <p><span className="text-[#FF006B]">2023 Festiva.</span> All rights reserved.</p>
            </div>
        </footer>
    )
};