import Header from "../components/Header";
import HorizontalScroll from "../components/HorizontalScroll";

export default function Home() {
    return (
        <div className="absolute bg-black text-white flex flex-col">
            <Header />
            <HorizontalScroll/>
        </div>
    )
}
