import Header from "../components/Header";
import HorizontalScroll from "../components/HorizontalScroll";

export default function Page() {
    return (
        <div className="absolute bg-black text-white flex flex-col">
            <Header />
            <HorizontalScroll/>
            <div className="w-screen h-[150px] text-center"></div>
        </div>
    )
}