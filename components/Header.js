export default function Header() {
    return (
        <div className="fixed z-10 w-screen text-center title p-4">
            <div className="flex justify-between relative">
                <div className="underline underline-offset-4 text-sm fixed z-10">Colin Lupe</div>
                <div className="flex gap-4 underline underline-offset-4 text-sm fixed z-10 right-4">
                    <div>About</div>
                    <div>IG</div>
                </div>
            </div>
        </div>
    )
}