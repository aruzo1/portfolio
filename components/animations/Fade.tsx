import { ReactNode } from "react";
import { motion } from "framer-motion";

function Fade({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{once : true}}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default Fade;
