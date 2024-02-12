export default function Banner({ src }) {
    return (
        <div className="h-screen w-[33.3333vw] relative" id="directing_banner">
            <video loop autoPlay muted src={src} className="absolute top-0 left-0 w-full h-full object-cover border-x-[5px] border-black" />
        </div>
    )
}
