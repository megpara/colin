import HorizontalScroll from "../components/HorizontalScroll";

export default function Page() {
    return (
        <div className="absolute bg-black text-white flex flex-col">
            <div className="w-screen h-[150px] text-center">Colin Lupe</div>
            <HorizontalScroll/>
            <div className="w-screen h-[150px] text-center">Colin Lupe</div>
        </div>
    )
}