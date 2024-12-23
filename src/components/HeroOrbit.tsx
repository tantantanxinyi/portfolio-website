import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  shouldSpin = false,
  OrbitDuration,
  SpinDuration
}: PropsWithChildren<{
  size: number;
  rotation: number;
  SpinDuration?: string;
  OrbitDuration?: string;
  shouldOrbit?: boolean;
  shouldSpin?: boolean;
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 ">
      <div
        className={twMerge(shouldOrbit === true && "animate-spin")}
        style={{ animationDuration: OrbitDuration }}
      >
        <div
          className="flex items-start justify-start "
          style={{
            height: `${size}px`,
            width: `${size}px `,
            transform: `rotate(${rotation}deg )`
          }}
        >
          <div
            className={twMerge(shouldSpin && "animate-spin")}
            style={{ animationDuration: SpinDuration }}
          >
            <div
              className="inline-flex"
              style={{
                transform: `rotate(${rotation * -1}deg)`
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
