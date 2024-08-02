import React from 'react';

interface ExpandIconProps {
  rotate?: number; // Угол вращения
  onClick?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void; // Обработчик клика
}

export const ExpandIcon: React.FC<ExpandIconProps> = ({ rotate = 0, onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotate}deg)`, transition: 'transform 0.3s' }}
    >
      <path
        d="M12.9008 12L8.30078 7.4L9.70078 6L15.7008 12L9.70078 18L8.30078 16.6L12.9008 12Z"
        fill="black"
      />
    </svg>
  );
};
