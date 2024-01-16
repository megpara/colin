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
                <div>
                    <div className="p-8">Olipop</div>
                </div>
            }
            </div>
            <div className="absolute w-full h-full" id="super8">
                <div className={mousePercentage > 50 && mousePercentage < 75 ? "visible" : "invisible"}>
                    <div className="p-16">Super 8</div>
                </div>
            </div>
            <div className="absolute w-full h-full" id="titleCard">
                <div className={mousePercentage > 75 && mousePercentage < 95 ? "visible" : "invisible"}>
                    <div className="p-20">Title Card</div>
                </div>
            </div>
            <div className="absolute w-full h-full" id="chicago">
                <div className={mousePercentage > 55 && mousePercentage < 85 ? "visible" : "invisible"}>
                    <div className="p-24">Chicago</div>
                </div>
            </div>
            <div className="absolute w-full h-full" id="looking">
                <div className={mousePercentage > 65 && mousePercentage < 95 ? "visible" : "invisible"}>
                    <div className="p-32">Looking</div>
                </div>
            </div>
            <div className="absolute w-full h-full" id="nike">
                <div className={mousePercentage > 65 ? "visible" : "invisible"}>
                    <div className="p-36">Nike</div>
                </div>
            </div>
        </div>
    )
}