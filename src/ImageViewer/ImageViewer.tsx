import React, { ImgHTMLAttributes } from "react";
import { Button, Image } from "../Elements";

import "./ImageViewer.css";

interface ImageViewerProps extends ImgHTMLAttributes<HTMLImageElement> {
  onClose: () => void;
}

export const ImageViewer: React.FC<ImageViewerProps> = (props) => {
  return (
    <div className="imageViewer">
      <Button className="closeButton" onClick={() => { props.onClose(); }}>X</Button>
      <Image alt={props.alt} src={props.src}></Image>
    </div>
  )
}