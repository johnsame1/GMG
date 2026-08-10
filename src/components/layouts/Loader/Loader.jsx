import { motion } from "framer-motion";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <motion.div
      className={styles.loader}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
    >
      <motion.div
        className={styles.brand}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className={styles.bar} />
        <div>
          <div className={styles.title}>GMG</div>
          <div className={styles.subtitle}>Luxury Stone</div>
        </div>
      </motion.div>

      <motion.div
        className={styles.progress}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default Loader;
