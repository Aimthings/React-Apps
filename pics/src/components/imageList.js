import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';
const ImageList=props=>{
  const images= props.images.map((image)=>{
       return <ImageCard key={image.id} image={image} />; // first see which root element is returning here it is img it could have been div then we must write key in that only. 
   });
    return <div className="image-list">{images}</div>;
};

export default ImageList;