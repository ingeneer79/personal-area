'use client'
import Image from 'next/image';
import React from 'react';
import { FullWidthImageProps } from '../models';

const FullWidthImage: React.FC<FullWidthImageProps> = ({ src, alt, height, width }) => {
  return (
      <Image src={src} alt={alt} height={height} width={width} style={{objectFit: 'cover', maxWidth: '100%', maxHeight: `${height}px`, borderRadius: '36px'}}/>
  );
};

export default FullWidthImage;