export default function Header() {
    return (
        <div className="w-screen text-center font-display p-8">
            <div className="flex justify-between relative">
                <div className="underline underline-offset-4 text-sm fixed z-10">CL</div>
                <div className="text-3xl w-full text-center">Colin Lupe</div>
                <div className="flex gap-4 underline underline-offset-4 text-sm fixed z-10 right-8">
                    <div>About</div>
                    <div>IG</div>
                </div>
            </div>
        </div>
    )
}