import type { FC, SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  icon: string;
  size: number;
}

const Icon: FC<IconProps> = ({ icon, size = 24, ...props }) => (
  <svg width={size} height={size} role="img" aria-label={icon} {...props}>
    <use href={`/icons/sprites.svg#${icon}`} />
  </svg>
);

export default Icon;
