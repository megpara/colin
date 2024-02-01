import { use, useRef, useState } from "react"
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { CircleIndicator } from "./CircleScroll";

export default function HorizontalScroll() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });

    const [playDirecting, setPlayDirecting] = useState(false);
    const [playCine, setPlayCine] = useState(false);
    const [playEditing, setPlayEditing] = useState(false);
    const [showCheese, setShowCheese] = useState(false);
    const [showMonitor, setShowMonitor] = useState(false);
    const [showOverhead1, setShowOverhead1] = useState(false);
    const [showOverhead2, setShowOverhead2] = useState(false);
    const [showOverhead3, setShowOverhead3] = useState(false);

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if ( latest > 0.01 && latest < 0.2 ) {
            setShowCheese(true);
        } else {
            setShowCheese(false);
        }

        if ( latest > 0.08 && latest < 26.666) {
            setShowMonitor(true);
        } else {
            setShowMonitor(false);
        }

        if ( latest > 0.1 && latest < 0.15 ) {
            setShowOverhead1(true);
        } else {
            setShowOverhead1(false);
        }

        if ( latest > 0.15 && latest < 0.2 ) {
            setShowOverhead2(true);
        } else {
            setShowOverhead2(false);
        }

        if ( latest > 0.2 && latest < 0.318 ) {
            setShowOverhead3(true);
        } else {
            setShowOverhead3(false);
        }

        if ( latest > 0.318 ) {
            setPlayDirecting(true);
        } else {
            setPlayDirecting(false);
        } 

        if ( latest > 0.669) {
            setPlayCine(true);
        } else {
            setPlayCine(false);
        }

        if ( latest == 1 ) {
            setPlayEditing(true);
        } else {
            setPlayEditing(false);
        }

        console.log("Page scroll: ", latest)
      })
  
    return (
        <section ref={targetRef} className="relative h-[900vh]">
            {/* <CircleIndicator /> */}
            <div className="sticky top-0 flex items-center overflow-hidden">
                <motion.div style={{ x }} className="flex overflow-hidden">
                    <div className="absolute top-0 w-full h-full z-10">
                        <div className="relative w-full h-full">
                        {showCheese && <img src="2_cheese_v1_(2x20)_00439.png" className="absolute top-0 left-0 w-full h-full object-cover"/>}
                        {showMonitor && <video autoPlay muted loop src="3_monitor_v1_(8x26.66).mov" className="absolute top-0 left-0 w-full h-full object-cover"/>}
                        {showOverhead1 && <img src="5_overhead1_v1_(10x15)_00434.png" className="absolute top-0 left-0 w-full h-full object-cover"/>}
                        {showOverhead2 && <img src="6_overhead2_v1_(15x20)_00439_00448.png" className="absolute top-0 left-0 w-full h-full object-cover"/>}
                        {showOverhead3 && <img src="7_overhead3_v1_(20x26.666)_00461.png" className="absolute top-0 left-0 w-full h-full object-cover"/>}
                        </div>
                    </div>
                    <div className="w-screen h-screen relative group">
                        <video loop autoPlay muted src="1_intro_v1_(0x21).mp4" className="w-full h-full object-cover overflow-hidden" />
                    </div>
                    <div className="h-screen w-max relative" id="directing_banner">
                        <video autoPlay muted src="1.2_directingbanner_v1_(0x26.66).mp4" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-screen h-screen relative group">
                        <video loop autoPlay muted src="4_directingstill_v1_(6x26.666).mp4" className="w-full h-full object-cover" />
                        {playDirecting && (
                            <video loop autoPlay muted src="3_directingreel_v1_(26.666x43.402).mp4" className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden" />
                        )}
                    </div>
                    <div className="h-screen w-max relative" id="directing_banner">
                        <video autoPlay muted src="cinebanner_v1_(26.66x).mp4" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-screen h-screen relative group">
                    <video loop autoPlay muted src="Ciniebanner_v1_(26.666x43.402).mp4" className="w-full h-full object-cover" />
                        {playCine && (
                            <video loop autoPlay muted src="4_cinereel_v1_(26.666x43.402).mp4" className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden" />
                        )}
                    </div>
                    <div className="h-screen w-max relative" id="directing_banner">
                        <video autoPlay muted src="editingbanner_v1_(75x100).mp4" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-screen h-screen relative group">
                        {playEditing && (
                            <video loop autoPlay muted src="editingreel.mp4" className="w-full h-full object-cover overflow-hidden" />
                        )}
                    </div>
                    {/* <div className="w-screen h-screen relative">
                        <video loop autoPlay muted src="train2.mp4" className="w-full h-full object-cover" />
                        <div className={"w-full h-full absolute top-0 flex flex-col z-10 delay-300" + (showLizzo ? " visible" : " invisible")}>
                            <img src="lizzo1.png" className="w-full h-full object-cover" />
                        </div>
                        {playReel && (
                            <div className="w-full h-full absolute top-0">
                                <video loop autoPlay muted src="editingreel.mp4" className="w-full h-full object-cover overflow-hidden" />
                            </div>
                        )}
                    </div> */}
                    {/* <div className="w-screen h-screen relative">
                        <video loop autoPlay muted src="editingreel.mp4" className="w-full h-full object-cover overflow-hidden" />
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10">
                            <div className="font-display text-3xl underline underline-offset-8">Editing</div>
                        </div>
                    </div> */}
                    {/* <div className="w-screen h-screen relative">
                        <video loop autoPlay muted src="cinematographyreel.mp4" className="w-full h-full object-cover overflow-hidden" />
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10">
                            <div className="font-display text-3xl underline underline-offset-8">Cinematography</div>
                        </div>
                    </div> */}
                </motion.div>
            </div>
        </section>
    )
}