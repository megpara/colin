import { useRef, useState } from "react"
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";

export default function HorizontalScroll() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });

    const [showLizzo, setShowLizzo] = useState(false);

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.18) {
            setShowLizzo(true);
        } else {
            setShowLizzo(false);
        }
        console.log("Page scroll: ", latest)
      })
  
    return (
        <section ref={targetRef} className="relative h-[300vh]">
            <div className="sticky top-0 flex items-center overflow-hidden">
                <motion.div style={{ x }} className="flex overflow-hidden">
                    <div className="w-screen h-screen">
                        <video loop autoPlay muted src="directingreel.mp4" className="w-full h-full object-cover overflow-hidden" />
                    </div>
                    <div className="w-screen h-screen relative">
                        <video loop autoPlay muted src="train2.mp4" className="w-full h-full object-cover" />
                        <div className={"w-full h-full absolute top-0" + (showLizzo ? " visible" : " invisible")}>
                            <img src="lizzo1.png" className="w-full h-full object-cover" />
                        </div> 
                    </div>
                    <div className="w-screen h-screen">
                        <video loop autoPlay muted src="editingreel.mp4" className="w-full h-full object-cover overflow-hidden" />
                    </div>
                    <div className="w-screen h-screen">
                        <video loop autoPlay muted src="cinematographyreel.mp4" className="w-full h-full object-cover overflow-hidden" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}