import { use, useRef, useState } from "react"
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { CircleIndicator } from "./CircleScroll";
import TopLeft from "./ProjectLinks/TopLeft";
import TopRight from "./ProjectLinks/TopRight";
import BottomRight from "./ProjectLinks/BottomRight";
import BottomLeft from "./ProjectLinks/BottomLeft";

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
    const [showTds1, setShowTds1] = useState(false);
    const [showTds2, setShowTds2] = useState(false);
    const [showTds3, setShowTds3] = useState(false);
    const [showDj1, setShowDj1] = useState(false);
    const [showDj2, setShowDj2] = useState(false);
    const [showDj3, setShowDj3] = useState(false);
    const [showTv, setShowTv] = useState(false);
    const [showWiz1, setShowWiz1] = useState(false);
    const [showWiz2, setShowWiz2] = useState(false);
    const [showLizzo, setShowLizzo] = useState(false);

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if ( latest > 0.02 && latest < 0.2 ) {
            setShowCheese(true);
        } else {
            setShowCheese(false);
        }

        if ( latest > 0.08 && latest < 26.666) {
            setShowMonitor(true);
        } else {
            setShowMonitor(false);
        }

        if ( latest > 0.2 && latest < 0.25 ) {
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

        if ( latest > 0.35 && latest < 0.4 ) {
            setShowTds1(true);
        } else {
            setShowTds1(false);
        }

        if ( latest > 0.4 && latest < 0.45 ) {
            setShowTds2(true);
        } else {
            setShowTds2(false);
        }

        if ( latest > 0.45 && latest < 0.5 ) {
            setShowTds3(true);
        } else {
            setShowTds3(false);
        }

        if ( latest > 0.7 && latest < 0.83 ) {
            setShowDj1(true);
        } else {
            setShowDj1(false);
        }

        if ( latest > 0.82 && latest < 0.88 ) {
            setShowDj2(true);
        } else {
            setShowDj2(false);
        }

        if ( latest > 0.87 && latest < 0.95 ) {
            setShowDj3(true);
        } else {
            setShowDj3(false);
        }

        if ( latest > 0.74 && latest < 0.90 ) {
            setShowTv(true);
        } else {
            setShowTv(false);
        }

        if ( latest > 0.8 && latest < 0.85 ) {
            setShowWiz1(true);
        } else {
            setShowWiz1(false);
        }

        if ( latest > 0.85 && latest < 0.9 ) {
            setShowWiz2(true);
        } else {
            setShowWiz2(false);
        }

        if ( latest > 0.9 && latest < 1 ) {
            setShowLizzo(true);
        } else {
            setShowLizzo(false);
        }
        
        if ( latest > 0.318 ) {
            setPlayDirecting(true);
        } else {
            setPlayDirecting(false);
        }

        if ( latest > 0.66) {
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
            <CircleIndicator />
            <div className="sticky top-0 left-0 flex items-center overflow-hidden">
                <motion.div style={{ x }} className="flex overflow-hidden">
                    <img src="Crop_01379_01379.png" className="absolute w-full h-full top-0 left-0 z-20" />
                        {showCheese && <img src="2_cheese_v1_(2x20)_00439.png" className="absolute top-0 left-0 w-full h-full object-cover z-30"/>}
                        {showOverhead1 && <img src="5_overhead1_v1_(20x25)_00434.png" className="absolute top-0 left-0 w-full h-full object-cover z-30"/>}
                        {showOverhead2 && <img src="6_overhead2_v1_(15x20)_00439_00448.png" className="absolute top-0 left-0 w-full h-full object-cover z-30"/>}
                        {showOverhead3 && <img src="7_overhead3_v1_(20x26.666)_00461.png" className="absolute top-0 left-0 w-full h-full object-cover z-30"/>}
                        {showTds1 && <img src="8_tds1_v1_(35x40)_00792_00792.png" className="absolute top-0 left-0 w-full h-full object-cover z-30"/>}
                        {showTds2 && <img src="9_tds2_v1_(40-45)_00804_00809_00806.png" className="absolute top-0 left-0 w-full h-full object-cover z-30"/>}
                        {showTds3 && <img src="10_tds3_v1_(45-50)_00833_00826.png" className="absolute top-0 left-0 w-full h-full object-cover z-30"/>}
                        {showDj1 && <img src="12_dj1_v1_(52-53.333)_00851_00870_00890_00893_00849.png" className="absolute top-0 left-0 w-full h-full object-cover z-30"/>}
                        {showDj2 && <img src="12_dj2_v1_(51-52)_00851_00870_00870.png" className="absolute top-0 left-0 w-full h-full object-cover z-30"/>}
                        {showDj3 && <img src="12_dj3_v1_(52-53.333)_00851_00870_00890_00893.png" className="absolute top-0 left-0 w-full h-full object-cover z-30"/>}
                        {showWiz1 && <img src="15_wiz1_v1_(68-73)_00851_00870_01803_01817.png" className="absolute top-0 left-0 w-full h-full object-cover z-30"/>}
                        {showWiz2 && <img src="16_wiz2_v1_(73-75)_00851_00870_01803_01816_01842.png" className="absolute top-0 left-0 w-full h-full object-cover z-30"/>}
                        {showLizzo && <img src="17_lizzo_v1_(75-80)_00851_00870_01803_01855_01855.png" className="absolute top-0 left-0 w-full h-full object-cover z-30"/>}
                    
                    {/* CREATOR */}
                    <div className="w-screen h-screen relative group">
                        <video autoPlay muted src="1_intro_v1_(0x21).mp4" className="absolute top-0 left-0 w-full h-full object-cover" />
                        {showMonitor &&
                            <video autoPlay muted loop src="Monitor-hevc-safari.mp4" className="absolute bottom-0 right-0 w-1/2 object-cover"/>
                        }
                    </div>

                    {/* DIRECTOR  */}
                    <div className="h-screen w-[33.3333vw] relative" id="directing_banner">
                        <video loop autoPlay muted src="1.2_directingbanner_v1_(0x26.66).mp4" className="absolute top-0 left-0 w-full h-full object-cover border-x-[5px] border-black" />
                    </div>
                    <div className="w-screen h-screen relative group">
                        <video loop autoPlay muted src="4_directingstill_v1_(46x46.666).mp4" className="w-full h-full object-cover" />
                        {playDirecting && (
                            <div className="absolute top-0 left-0 w-full h-full">
                                <video loop autoPlay muted src="3_directingreel_v1_(46.666x63.402).mp4" className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden" />
                                <TopLeft name="Olipop" />
                                <TopRight name="Movement" />
                                <BottomLeft name="Nike" />
                                <BottomRight name="Nike" />
                            </div>
                        )}
                    </div>

                    {/* CINEMATOGRAPHER */}
                    <div className="h-screen w-[33.3333vw] relative" id="cine_banner">
                        <video loop autoPlay muted src="cinebanner_v1_(26.66x).mp4" className="absolute top-0 left-0 w-full h-full object-cover border-x-[5px] border-black" />
                    </div>
                    <div className="w-screen h-screen relative group">
                    <video loop autoPlay muted src="Ciniebanner_v1_(26.666x43.402).mp4" className="w-full h-full object-cover" />
                        {playCine && (
                            <video loop autoPlay muted src="4_cinereel_v1_(46.666x63.402).mp4" className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden" />
                        )}
                        {showTv && (
                            <video loop autoPlay muted src="TV-1-hevc-safari.mp4" className="absolute top-0 right-[-20%] z-20 w-1/2 w-full h-full object-cover overflow-hidden" />
                        )}
                    </div>

                    {/* EDITOR */}
                    <div className="h-screen w-[33.3333vw] relative" id="directing_banner">
                        <video loop autoPlay muted src="editingbanner_v1_(75x100).mp4" className="absolute top-0 left-0 w-full h-full object-cover border-x-[5px] border-black" />
                    </div>
                    <div className="w-screen h-screen relative group">
                        <video loop autoPlay muted src="4.1_editingstill_v1.mp4" className="w-full h-full object-cover" />
                        {playEditing && (
                            <video loop autoPlay muted src="editingreel.mp4" className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden" />
                        )}
                    </div>

                </motion.div>
            </div>
        </section>
    )
}