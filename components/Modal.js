import { AnimatePresence, motion } from "framer-motion";
import Close from "../components/Close";

export default function Modal({ open, toggle }) {
    return (
        <AnimatePresence>
        {open && (
            <motion.div                 
            initial={{ opacity: 0 }}
            animate={{
            opacity: 1,
            transition: { duration: 1 },
            }}
            exit={{
            opacity: 0,
            transition: { duration: 1 },
            }}
            className="absolute top-0 left-0 bg-black w-screen h-screen z-50"
            >
              <Close toggle={toggle} />
              <div className="w-full h-full p-12 flex flex-col items-center justify-center">
                <div className="w-full h-full relative">
                  <iframe src="https://player.vimeo.com/video/911319946?h=71f1037d61&autoplay=1&title=0&byline=0&portrait=0" className="absolute top-0 left-0 w-full h-full" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
                    </iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
                <p className="text-xs pt-8">Concept, Choreography, and Direction: Megan Paradowski<br />
                DP: Colin Lupe<br />
                Performers: Marco Palomino, Daphne Fernberger, Travis Lim<br />
                Space: Reunion LA<br />
                Producer: Halston Bruce<br />
                Music: 3. Sequentia: Lacrimosa by Jacky Terrasson</p>
              </div>
              </motion.div>
        )}
        </AnimatePresence>
    )
}