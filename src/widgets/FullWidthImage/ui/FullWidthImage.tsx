'use client'
import Image from 'next/image';
import React from 'react';

interface FullWidthImageProps {
  src: string;
  alt: string;
  height: number;
}

const FullWidthImage: React.FC<FullWidthImageProps> = ({ src, alt, height }) => {
  return (
    <div style={{ width: '100%', position: 'relative', height: `${height}px`, borderRadius: '20px', overflow: 'hidden' }}>
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </div>
  );
};

export default FullWidthImage;