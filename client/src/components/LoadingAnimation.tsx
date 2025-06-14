import React from 'react';
import { motion } from 'framer-motion';

interface LoadingAnimationProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({
  size = 'medium',
  color = 'primary',
}) => {
  // Size mapping
  const sizeMap = {
    small: 'w-8 h-8',
    medium: 'w-16 h-16',
    large: 'w-24 h-24',
  };

  // Color mapping to Tailwind classes
  const colorClass = `text-${color}`;

  // Animation variants
  const containerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 2,
        ease: 'linear',
        repeat: Infinity,
      },
    },
  };

  const circleVariants = {
    initial: { opacity: 0.3 },
    animate: {
      opacity: [0.3, 1, 0.3],
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${sizeMap[size]} relative`}
        variants={containerVariants}
        animate="animate"
      >
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${colorClass}`}
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${i * 60}deg) translate(0, -${size === 'small' ? '120' : size === 'medium' ? '150' : '180'}%) translate(-50%, -50%)`,
            }}
            variants={circleVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: i * 0.1 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LoadingAnimation;