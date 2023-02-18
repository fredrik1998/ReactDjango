import  Confetti  from 'react-confetti';
import { motion } from 'framer-motion';
import {useWindowSize } from '@react-hook/window-size'

const ConfettiAnimation = () => {
    const [width, height] = useWindowSize()
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
    >
      <Confetti
        width={width}
        height={height}
        numberOfPieces={200}
        recycle={false}
      />
    </motion.div>
  );
};

export default ConfettiAnimation;
