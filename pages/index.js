import React, { useEffect, useState } from "react";

export default function Home() {
    const [mousePercentage, setMousePercentage] = useState(0);

    const useMousePosition = () => {
        const [
        mousePosition,
        setMousePosition
        ] = useState({ x: null, y: null });
    
        useEffect(() => {
            const updateMousePosition = ev => {
                setMousePosition({ x: ev.clientX, y: ev.clientY });
            };
            
            window.addEventListener('mousemove', updateMousePosition);

            return () => {
                window.removeEventListener('mousemove', updateMousePosition);
            };
        }, []);

        return mousePosition;
    };

    const mousePosition = useMousePosition();

    useEffect(() => {
        setMousePercentage((mousePosition.x) / (window.innerWidth) * 100);
    }, [mousePosition]);

    console.log(mousePercentage);

    return (
        <div className="w-full h-full">
            <div className="absolute w-full h-full" id="olipop">
            {mousePercentage < 75 && 
                <div className="w-full h-full">
                    <video loop autoPlay muted src="olipop.mp4" className="w-full h-full object-cover" />
                </div>
            }
            </div>
            <div className="absolute w-full h-full" id="chicago">
                {(mousePercentage > 55 && mousePercentage < 85) && (
                    <div className="w-full h-full">
                        <video loop autoPlay muted src="chicago-encoded-hevc-safari.mp4" className="w-full h-full object-cover" />
                    </div> 
                )}
            </div>
            <div className="absolute w-full h-full" id="super8">
                {(mousePercentage > 50 && mousePercentage < 75) && (
                <div className="w-full h-full">
                    <video loop autoPlay muted src="super8-hevc-safari.mp4" className="w-full h-full object-cover" />
                </div>
                )}
            </div>
            <div className="absolute w-full h-full" id="looking">
                {(mousePercentage > 65 && mousePercentage < 95) && (
                     <div className="w-full h-full">
                        <video loop autoPlay muted src="looking-hevc-safari.mp4" className="w-full h-full object-cover" />
                    </div>
                )}
            </div>
            <div className="absolute w-full h-full" id="titleCard">
                {(mousePercentage > 75 && mousePercentage < 95) && (
                    <div className="w-full h-full">
                        <video loop autoPlay muted src="title.mp4" className="w-full h-full object-cover" />
                    </div> 
                )}
            </div>
            <div className="absolute w-full h-full" id="nike">
                {mousePercentage > 65 && (
                    <div className="w-full h-full">
                        <video loop autoPlay muted src="nike.mp4" className="w-full h-full object-cover" />
                    </div>
                )}
            </div>
        </div>
    )
}