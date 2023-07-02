'use client';
import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {stockImage} from '../../app/page'
import Image from "next/image"

interface ImageListProps {
    Images: stockImage[];
}

const ImageListComponent: React.FC<ImageListProps>= ({Images}) => {
  return (
    <ImageList sx={{ width: 800, height: 450}} cols={5} rowHeight={100}>
      {Images.map((item) => (
        <ImageListItem key={item.id}>
          <Image
            src={`${item.ImageURL}`}
            alt={`${item.Ticker}`}
            width={100}
            height={100}
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default ImageListComponent