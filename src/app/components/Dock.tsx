import React, { PropsWithChildren, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export interface DockProps {
  className?: string;
  magnification?: number;
  distance?: number;
  direction?: "top" | "middle" | "bottom";
  children: React.ReactNode;
}

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className = "",
      children,
      magnification = DEFAULT_MAGNIFICATION,
      distance = DEFAULT_DISTANCE,
      direction = "bottom",
    },
    ref
  ) => {
    const mouseX = useMotionValue(Infinity);

    const alignClass =
      direction === "top"
        ? "items-start"
        : direction === "middle"
        ? "items-center"
        : "items-end";

    const renderChildren = () =>
      React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === DockIcon) {
          return React.cloneElement(child as React.ReactElement<DockIconProps>, {
            ...child.props,
            mouseX,
            magnification,
            distance,
          });
        }
        return child;
      });

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={`flex gap-2 rounded-2xl border border-white/20 bg-black/50 p-2 backdrop-blur-xl ${alignClass} ${className}`}
        style={{ height: 58, width: "max-content" }}
      >
        {renderChildren()}
      </motion.div>
    );
  }
);

Dock.displayName = "Dock";

export interface DockIconProps {
  magnification?: number;
  distance?: number;
  mouseX?: ReturnType<typeof useMotionValue<number>>;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  title?: string;
}

const DockIcon = ({
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className = "",
  children,
  onClick,
  title,
}: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const safeMouseX = mouseX ?? useMotionValue(Infinity); // eslint-disable-line

  const distanceCalc = useTransform(safeMouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [40, magnification, 40]
  );

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={`flex aspect-square cursor-pointer items-center justify-center rounded-full ${className}`}
      onClick={onClick}
      title={title}
    >
      {children}
    </motion.div>
  );
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon };
