import { useRef, useState } from "react"
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { CircleIndicator } from "./CircleScroll";

export default function HorizontalScroll() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });

    const [showLizzo, setShowLizzo] = useState(false);
    const [showGucci1, setShowGucci1] = useState(false);
    const [showNike2, setShowNike2] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const [playReel, setPlayReel] = useState(false);

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0) {
            setShowTitle(true);
        } else {
            setShowTitle(false);
        }
        if (latest > 0 && latest < 0.24) {
            setShowLizzo(true);
        } else {
            setShowLizzo(false);
        }
        if (latest > 0.1 && latest < 0.20) {
            setShowGucci1(true);
        } else {
            setShowGucci1(false);
        } if (latest > 0.15 && latest < 0.35) {
            setShowNike2(true);
        } else {
            setShowNike2(false);
        }
        if (latest > 0.24) {
            setPlayReel(true);
        } else {
            setPlayReel(false);
        }
        console.log("Page scroll: ", latest)
      })
  
    return (
        <section ref={targetRef} className="relative h-[300vh]">
            <CircleIndicator />
            <div className="sticky top-0 flex items-center overflow-hidden">
                <motion.div style={{ x }} className="flex overflow-hidden">
                    <div className="w-screen h-screen relative group">
                        <video loop autoPlay muted src="directingreel.mp4" className="w-full h-full object-cover overflow-hidden" />
                        <div className={"absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10" + (showTitle ? " visible" : " invisible")}>
                            <div className="font-display text-3xl underline underline-offset-8">Directing</div>
                        </div>
                        <div className={"w-[200%] h-full absolute top-0 flex flex-col items-center z-10" + (showGucci1 ? " visible" : " invisible")}>
                            <img src="gucci1.png" className="w-1/2 h-full object-cover" />
                        </div>
                    </div>
                    <div className="w-screen h-screen relative">
                        <video loop autoPlay muted src="train2.mp4" className="w-full h-full object-cover" />
                        <div className={"w-full h-full absolute top-0 flex flex-col z-10 delay-300" + (showLizzo ? " visible" : " invisible")}>
                            <img src="lizzo1.png" className="w-full h-full object-cover" />
                        </div>
                        {playReel && (
                            <div className="w-full h-full absolute top-0">
                                <video loop autoPlay muted src="editingreel.mp4" className="w-full h-full object-cover overflow-hidden" />
                            </div>
                        )}
                        {/*<div className={"w-full h-full absolute top-0 flex flex-col items-center z-10" + (showNike2 ? " visible" : " invisible")}>
                            <img src="nike2.png" className="w-full h-full object-cover" />
                        </div> */}
                    </div>
                    <div className="w-screen h-screen relative">
                        <video loop autoPlay muted src="editingreel.mp4" className="w-full h-full object-cover overflow-hidden" />
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10">
                            <div className="font-display text-3xl underline underline-offset-8">Editing</div>
                        </div>
                    </div>
                    <div className="w-screen h-screen relative">
                        <video loop autoPlay muted src="cinematographyreel.mp4" className="w-full h-full object-cover overflow-hidden" />
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10">
                            <div className="font-display text-3xl underline underline-offset-8">Cinematography</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}