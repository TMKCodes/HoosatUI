import React, { ImgHTMLAttributes, Suspense } from "react";
import { Button, Image } from "../Elements";

import "./ImageViewer.css";

interface ImageViewerProps extends ImgHTMLAttributes<HTMLImageElement> {
  onClose: () => void;
}


const Loading = () => {
  return <h2>🌀 Loading...</h2>;
}


export const ImageViewer: React.FC<ImageViewerProps> = (props) => {
  return (
    <>
      <Button className="closeButton" onClick={() => { props.onClose(); }}>X</Button>
      <Suspense fallback={<Loading />}>
        <Image className="imageViewer" alt={props.alt} src={props.src}></Image>
      </Suspense>
    </>
  )
}