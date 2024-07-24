'use client'
import Image from 'next/image';
import React from 'react';
import { FullWidthImageProps } from '../models';

const FullWidthImage: React.FC<FullWidthImageProps> = ({ src, alt, height, width }) => {
  return (
    <div style={{ width: '100%', position: 'relative', height: 'fit-content', maxHeight: `${height}px`, borderRadius: '20px', overflow: 'hidden' }}>
      <Image src={src} alt={alt} width={width} height={height} priority={true} style={{objectFit: 'cover'}}/>
    </div>
  );
};

export default FullWidthImage;