import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addHeight } from "../../../../RTK/slices/scrolll-horizontal-section-slice";

export default function ScrollHorizontal({ children, windowHeight }) {
  let targetRef = useRef();
  let dispatch = useDispatch();
  useEffect(() => {
    let total = targetRef.current.offsetTop + targetRef.current.offsetHeight;
    dispatch(
      addHeight({
        total: targetRef.current.offsetTop + targetRef.current.offsetHeight,
        realHeight: total - windowHeight,
        top: targetRef.current.offsetTop,
      })
    );
  });

  let { scrollYProgress } = useScroll({ target: targetRef });
  let x = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  return (
    <>
      <div
        ref={targetRef}
        className="scroll h-[150vh] endPhone:h-[150vh] w-full  relative"
      >
        <div className=" h-screen flex top-0 sticky  items-center endPhone:items-start overflow-hidden">
          <motion.div style={{ x }} className="flex gap-8">
            {children}
          </motion.div>
        </div>
      </div>
    </>
  );
}
