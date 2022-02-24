import { ReactNode, VFC } from 'react';
import { motion } from 'framer-motion';

type Props = {
  className: string;
  children: ReactNode;
};
const AnimationDiv: VFC<Props> = ({ className, children }) => {
  const pageMotion = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  };

  // ToDo: Animation を変更する
  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit='exit'
      variants={pageMotion}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimationDiv;
