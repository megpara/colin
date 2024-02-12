export default function StillWrapper({ src, children }) {
    return (
        <div className="w-screen h-screen relative group">
            <video loop autoPlay muted src={src} className="w-full h-full object-cover" />
            {children}
        </div>
    )
}