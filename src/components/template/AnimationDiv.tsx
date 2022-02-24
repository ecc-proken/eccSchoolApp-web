import { ReactNode, VFC } from 'react';
import { motion } from 'framer-motion';

type Props = {
  className: string;
  children: ReactNode;
};
const AnimationDiv: VFC<Props> = ({ className, children }) => {
  const pageMotion = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  // ToDo: Animation を変更する
  return (
    <motion.div
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={pageMotion}
      transition={{ type: 'linear' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimationDiv;
