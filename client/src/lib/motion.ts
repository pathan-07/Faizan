export const fadeIn = (
  direction: string, 
  type: string, 
  delay: number, 
  duration: number
) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (
  direction: string, 
  type: string, 
  delay: number, 
  duration: number
) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren: number, 
  delayChildren: number
) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const textVariant = (delay: number) => {
  return {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const zoomIn = (delay: number, duration: number) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

export const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

export const rotateAnimation = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// New animations to enhance your portfolio

// Bounce animation for interactive elements
export const bounceAnimation = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2
    }
  }
};

// Flip animation for cards or images
export const flipAnimation = {
  initial: { rotateY: 0 },
  animate: {
    rotateY: 180,
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  }
};

// Staggered fade for lists (skills, projects, etc.)
export const staggeredFade = (delay = 0.1) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: delay
    }
  }
});

// Child element for staggeredFade
export const staggeredItem = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

// Shimmer effect for highlighting elements
export const shimmerAnimation = {
  animate: {
    background: [
      "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)",
      "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 0%)"
    ],
    backgroundPosition: ["200% 0", "-200% 0"],
    backgroundSize: "200% 100%",
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

// Typing animation for text
export const typingAnimation = (text: string) => ({
  hidden: { width: "0%" },
  visible: {
    width: "100%",
    transition: {
      duration: 0.05 * text.length,
      ease: "linear"
    }
  }
});

// 3D tilt effect for cards
export const tiltAnimation = {
  rest: { 
    rotateX: 0, 
    rotateY: 0, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  hover: { 
    rotateX: 10, 
    rotateY: 15, 
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

// Improved float animation with more customization
export const enhancedFloatAnimation = (
  height: number = 10, 
  duration: number = 3, 
  direction: "vertical" | "horizontal" = "vertical"
) => ({
  animate: {
    y: direction === "vertical" ? [0, -height, 0] : 0,
    x: direction === "horizontal" ? [0, height, 0] : 0,
    transition: {
      duration: duration,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut"
    }
  }
});

// Scroll reveal animation with direction options
export const scrollReveal = (
  direction: "left" | "right" | "up" | "down" = "up",
  distance: number = 50,
  duration: number = 0.8,
  delay: number = 0
) => ({
  hidden: {
    x: direction === "left" ? -distance : direction === "right" ? distance : 0,
    y: direction === "up" ? -distance : direction === "down" ? distance : 0,
    opacity: 0
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: duration,
      delay: delay,
      bounce: 0.3
    }
  }
});

// Parallax effect for background elements
export const parallaxEffect = (speed: number = 0.5) => ({
  initial: { y: 0 },
  animate: {
    y: ["0%", `${speed * 10}%`],
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
      ease: "linear"
    }
  }
});

// Morph animation for SVG paths
export const morphAnimation = (
  startPath: string,
  endPath: string,
  duration: number = 2
) => ({
  initial: { d: startPath },
  animate: {
    d: [startPath, endPath, startPath],
    transition: {
      duration: duration,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut"
    }
  }
});

// Gradient animation for modern UI elements
export const gradientAnimation = (
  startColor: string = "rgba(238,174,202,1)",
  endColor: string = "rgba(148,187,233,1)",
  duration: number = 3
) => ({
  animate: {
    background: [
      `linear-gradient(90deg, ${startColor} 0%, ${endColor} 100%)`,
      `linear-gradient(180deg, ${startColor} 0%, ${endColor} 100%)`,
      `linear-gradient(270deg, ${startColor} 0%, ${endColor} 100%)`,
      `linear-gradient(360deg, ${startColor} 0%, ${endColor} 100%)`,
      `linear-gradient(90deg, ${startColor} 0%, ${endColor} 100%)`
    ],
    transition: {
      duration: duration,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear"
    }
  }
});

// Wave animation for text or decorative elements
export const waveAnimation = (delay: number = 0, offset: number = 0.1) => ({
  animate: {
    y: [0, -15, 0, -7, 0],
    transition: {
      delay: delay,
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeatDelay: offset
    }
  }
});

// Elastic entry animation for important elements
export const elasticEntry = (delay: number = 0) => ({
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: delay
    }
  }
});

// Slide-up blur effect for section transitions
export const slideUpBlur = (delay: number = 0, duration: number = 0.7) => ({
  hidden: { 
    y: 100, 
    opacity: 0,
    filter: "blur(12px)" 
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: delay,
      duration: duration,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
});

// 3D specific animations to enhance Three.js components

// Glow pulse animation for planets/spheres in 3D scenes
export const glowPulseAnimation = (
  minIntensity: number = 0.5,
  maxIntensity: number = 1.2,
  duration: number = 3
) => ({
  animate: {
    emissiveIntensity: [minIntensity, maxIntensity, minIntensity],
    scale: [1, 1.05, 1],
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
});

// Orbit animation for elements circling around a center point
export const orbitAnimation = (
  radius: number = 5,
  speed: number = 1,
  clockwise: boolean = true,
  yAxis: number = 0
) => ({
  animate: {
    rotateY: clockwise ? [0, 360] : [360, 0],
    transition: {
      duration: 20 / speed,
      repeat: Infinity,
      ease: "linear"
    }
  },
  // This is to be used within the ThreeJS context for actual positioning
  custom: {
    radius,
    yAxis,
    clockwise
  }
});

// Hover effect specifically for 3D objects
export const object3DHover = {
  initial: {
    scale: 1,
    emissiveIntensity: 0.5,
    z: 0
  },
  hover: {
    scale: 1.2,
    emissiveIntensity: 1.5,
    z: 0.5,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Camera movement animation for 3D scenes
export const cameraAnimation = (
  startPosition: [number, number, number] = [0, 0, 10],
  endPosition: [number, number, number] = [5, 2, 15],
  duration: number = 5
) => ({
  initial: { 
    cameraPosition: startPosition,
    lookAt: [0, 0, 0]
  },
  animate: {
    cameraPosition: endPosition,
    transition: {
      duration: duration,
      ease: "easeInOut"
    }
  }
});

// 3D rotating card with depth and perspective
export const card3DAnimation = {
  rest: { 
    rotateY: 0, 
    rotateX: 0, 
    z: 0,
    boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.3)",
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    }
  },
  hover: { 
    rotateY: 15, 
    rotateX: -10, 
    z: 20,
    boxShadow: "0px 30px 50px -10px rgba(0, 0, 0, 0.5)",
    transition: { 
      duration: 0.3, 
      ease: "easeOut" 
    }
  }
};

// Radial explosion animation for particle effects
export const radialExplosion = (
  duration: number = 1.5, 
  distance: number = 100
) => ({
  initial: {
    scale: 0,
    opacity: 1
  },
  animate: {
    scale: 1,
    opacity: 0,
    transition: {
      duration: duration,
      ease: [0.32, 0.72, 0, 1]
    }
  },
  custom: {
    distance: distance
  }
});

// Enhanced glow effect for text or UI elements
export const enhancedGlowEffect = (
  color: string = "#ffffff",
  intensity: number = 10
) => ({
  initial: {
    textShadow: "none",
    boxShadow: "none"
  },
  animate: {
    textShadow: `0 0 ${intensity}px ${color}`,
    boxShadow: `0 0 ${intensity}px ${color}`,
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
});
