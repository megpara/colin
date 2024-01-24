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
        <div className="w-full h-full relative">
            <div className="absolute w-full h-full" id="directing">
            {mousePercentage < 32 && 
                <div className="w-full h-full">
                    <video loop autoPlay muted src="directingreel.mp4" className="w-full h-full object-cover" />
                </div>
            }
            </div>
            <div className="absolute w-full h-full" id="train2">
            {(mousePercentage > 31 && mousePercentage < 37) && (
                <div className="w-full h-full">
                    <video loop autoPlay muted src="train2.mp4" className="w-full h-full object-cover" />
                </div>
            )}
            </div>
            <div className="absolute w-full h-full" id="lizzo1">
                {(mousePercentage > 33 && mousePercentage < 37) && (
                    <div className="w-full h-full">
                        <img src="lizzo1.png" className="w-full h-full object-cover" />
                    </div> 
                )}
            </div>
            <div className="absolute w-full h-full" id="lizzo2">
                {(mousePercentage > 36 && mousePercentage < 39) && (
                <div className="w-full h-full">
                    <img src="lizzo2.png" className="w-full h-full object-cover" />
                </div>
                )}
            </div>
            <div className="absolute w-full h-full" id="gucci1">
                {(mousePercentage > 27 && mousePercentage < 34) && (
                <div className="w-full h-full">
                    <img src="gucci1.png" className="w-full h-full object-cover" />
                </div>
                )}
            </div>
            <div className="absolute w-full h-full" id="nike2">
                {(mousePercentage > 29 && mousePercentage < 36) && (
                <div className="w-full h-full">
                    <img src="nike2.png" className="w-full h-full object-cover" />
                </div>
                )}
            </div>
            <div className="absolute w-full h-full" id="editing">
                {(mousePercentage > 38 && mousePercentage < 63) && (
                    <div className="w-full h-full">
                        <video loop autoPlay muted src="editingreel.mp4" className="w-full h-full object-cover" />
                    </div>
                )}
            </div>
            <div className="absolute w-full h-full" id="train1">
                {(mousePercentage > 62 && mousePercentage < 70) && (
                    <div className="w-full h-full">
                        <video loop autoPlay muted src="train1.mp4" className="w-full h-full object-cover" />
                    </div> 
                )}
            </div>
            <div className="absolute w-full h-full" id="olipop1">
                {(mousePercentage > 59 && mousePercentage < 66) && (
                     <div className="w-full h-full">
                        <img src="olipop1.png" className="w-full h-full object-cover" />
                    </div>
                )}
            </div>
            <div className="absolute w-full h-full" id="gucci">
                {(mousePercentage > 61 && mousePercentage < 68) && (
                     <div className="w-full h-full">
                        <img src="gucci.png" className="w-full h-full object-cover" />
                    </div>
                )}
            </div>
            <div className="absolute w-full h-full" id="looking">
                {(mousePercentage > 64 && mousePercentage < 70) && (
                     <div className="w-full h-full">
                        <img src="looking.png" className="w-full h-full object-cover" />
                    </div>
                )}
            </div>
            <div className="absolute w-full h-full" id="cinematography">
                {mousePercentage > 69 && (
                    <div className="w-full h-full">
                        <video loop autoPlay muted src="cinematographyreel.mp4" className="w-full h-full object-cover" />
                    </div>
                )}
            </div>
            <div className={"absolute w-full h-full flex title text-white text-3xl tracking-wide" + (((mousePercentage > 30 && mousePercentage < 36) || (mousePercentage > 63 && mousePercentage < 69)) ? " divide-x-[0.5px] divide-white" : "")}>
                <div className="basis-1/3 flex flex-col w-full h-full items-center justify-center group">
                    <div className="invisible group-hover:visible">Directing</div>
                </div>
                <div className="basis-1/3 flex flex-col w-full h-full items-center justify-center group">
                    <div className="invisible group-hover:visible">Editing</div>
                </div>
                <div className="basis-1/3 flex flex-col w-full h-full items-center justify-center group">
                    <div className="invisible group-hover:visible">Cinematography</div>
                </div>
            </div>
        </div>
    )
}