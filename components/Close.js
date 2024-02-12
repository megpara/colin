import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Close({ toggle }) {
    const [closeVisible, setCloseVisible] = useState(true);

    useEffect(() => {
      let idleTimer = null;
      let idleState = false;
  
      function showClose(time) {
        console.log('functioning')
        clearTimeout(idleTimer);
        if (idleState == true) {
          setCloseVisible(true);
        }
        idleState = false;
        idleTimer = setTimeout(function() {
          setCloseVisible(false);
          idleState = true;
        }, time);
      }
  
      showClose(3000);
  
      document.addEventListener('mousemove', () => showClose(3000));
  
      return () => {
        document.removeEventListener('mousemove', () => showClose(3000));
      };
    }, []);

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: "2" }}
        >
          <button
              className={"absolute right-0 top-0 m-10 text-xs uppercase tracking-[0.3em] hover:tracking-[0.4em] duration-700 z-10 transition-opacity duration-600 text-white " + (closeVisible ? " opacity-100" : " opacity-0")}
              onClick={toggle}
          >
              close
          </button>
        </motion.div>
    )
}
