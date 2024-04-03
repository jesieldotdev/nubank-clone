// SvgIcon.tsx
import React from 'react';

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
 width?: string | number;
 height?: string | number;
 color?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({ width, height, color, children, ...props }) => {
 return (
    <svg
      width={width}
      height={height}
      fill={color}
      {...props}
    >
      {children}
    </svg>
 );
};

export default SvgIcon;
