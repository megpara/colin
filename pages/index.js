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
                        <img src="chicago.png" className="w-full h-full object-cover" />
                    </div> 
                )}
            </div>
            <div className="absolute w-full h-full" id="super8">
                {(mousePercentage > 50 && mousePercentage < 75) && (
                <div className="w-full h-full">
                    <img src="super8.png" className="w-full h-full object-cover" />
                </div>
                )}
            </div>
            <div className="absolute w-full h-full" id="nike">
                {mousePercentage > 83 && (
                    <div className="w-full h-full">
                        <video loop autoPlay muted src="nike.mp4" className="w-full h-full object-cover" />
                    </div>
                )}
            </div>
            <div className="absolute w-full h-full" id="titleCard">
                {(mousePercentage > 75 && mousePercentage < 85) && (
                    <div className="w-full h-full">
                        <video loop autoPlay muted src="title.mp4" className="w-full h-full object-cover" />
                    </div> 
                )}
            </div>
            <div className="absolute w-full h-full" id="looking">
                {(mousePercentage > 65 && mousePercentage < 85) && (
                     <div className="w-full h-full">
                        <img src="looking.png" className="w-full h-full object-cover" />
                    </div>
                )}
            </div>
        </div>
    )
}