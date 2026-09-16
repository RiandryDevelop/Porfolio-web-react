/**
 * Shared motion variants. Keep easing and distance consistent so the whole page
 * moves with one personality.
 *
 * Global CSS already neutralises transitions under `prefers-reduced-motion`;
 * these stay short and small so the remaining movement is unobtrusive.
 */

const EASE = [0.16, 1, 0.3, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

/* Cards reveal a touch later than surrounding copy. */
export const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

/*
 * Shared viewport config for `whileInView`. framer-motion propagates variants
 * from a `whileInView` parent to its children, so containers can drive their
 * own reveal without a ref.
 */
export const inView = { once: true, amount: 0.15 };
