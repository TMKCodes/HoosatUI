import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

import "./Markdown.css";
import { ImageViewer } from '../ImageViewer/ImageViewer';

interface MarkdownProps {
  markdown: string;
  className?: string;
}

interface showImageDTO {
  src: string | undefined,
  alt: string | undefined,
}

export const Markdown: React.FC<MarkdownProps> = (rest) => {
  const [showImage, setShowImage] = useState<showImageDTO>({ src: undefined, alt: undefined});

  const getParameter = (parameter: string, src: string): string => {
    const parts = src.split('|');
    for (const part of parts) {
      const splitted = part.split('=');
      if (splitted.length === 2 && splitted[0] === parameter) {
        return splitted[1];
      }
    }
    return "";
  }

  const ImgStyles = (src: string | undefined) =>  {
    src = decodeURIComponent(src!);
    console.log(src);
    if (src && src.includes("|")) {
      const newsrc = src.split("|")[0];
      console.log(newsrc)
      const style = {
        maxWidth: getParameter("width", src),
        maxHeight: getParameter("height", src),
      }
      console.log(style);
      return { src: newsrc, style: style};
    } else {
      return { src: src, style: {}}
    }
  }

  return (
    <>
      { (showImage.src !== undefined) && 
        <ImageViewer 
          src={showImage.src} 
          alt={showImage.alt}
          onClose={() => { setShowImage({ ...showImage, src: undefined, alt: undefined })}}
        >
        </ImageViewer>
      }
      <ReactMarkdown 
        className={`gfm ${rest.className}`}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          code: ({node, inline, className, children, ...props}) => {
            const language = className && className.replace(/language-/, '');
            return (
              <code className={`language-${language}`} {...props}>
                {children}
              </code>
            );
          },
          img: ({ node, className, children, ...props }) => {
            const { src, style } = ImgStyles(props.src);
            return (
              <img {...props} src={src} alt={props.alt} className={className} style={style} onClick={() => {
                  setShowImage({ ...showImage, src: src, alt: props.alt });
                }}>
                {children}
              </img>
            );
          },
        }}
        >
        { rest.markdown }
      </ReactMarkdown>
    </>
  )
}