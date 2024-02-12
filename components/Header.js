import Link from "next/link";

export default function Header() {
    return (
        <div className="fixed z-10 w-screen text-center title p-4 text-white">
            <div className="flex justify-between relative">
                <div className="underline underline-offset-4 text-sm fixed z-10">
                    <Link href="/">Colin Lupe</Link>
                </div>
                <div className="flex gap-4 underline underline-offset-4 text-sm fixed z-10 right-4">
                    <div>
                        <Link href="/about">About</Link>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/infinitylupee/" target="_blank">Ig</a>
                    </div>
                </div>
            </div>
        </div>
    )
}