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
            return (
              <img {...props} src={props.src} alt={props.alt} className={className} onClick={() => {
                  setShowImage({ ...showImage, src: props.src, alt: props.alt });
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