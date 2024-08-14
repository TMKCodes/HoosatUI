import React, { Suspense, memo, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

import "./Markdown.css";
import { Image } from '../Elements/Media/Image/Image';
import { ImageViewer } from '../ImageViewer/ImageViewer';

interface MarkdownProps {
  markdown: string;
  className?: string;
}

interface showImageDTO {
  src: string | undefined,
  alt: string | undefined,
}

const Loading = () => {
  return <h2>🌀 Loading...</h2>;
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
    if (src && src.includes("|")) {
      const newsrc = src.split("|")[0];
      const style = {
        maxWidth: getParameter("width", src),
        maxHeight: getParameter("height", src),
      }
      return { src: newsrc, style: style};
    } else {
      return { src: src, style: {}}
    }
  }

  const handleImageClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>, src: string, alt: string) => {
    event.preventDefault();
    setShowImage({ src, alt });
  };

  const handleCloseImage = () => {
    setShowImage({ src: undefined, alt: undefined });
  };

  const MemoizedImage = memo(Image);

  return (
    <>
      <ReactMarkdown
        className={`gfm ${rest.className}`}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          code: ({ node, inline, className, children, ...props }) => {
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
              <Suspense fallback={<Loading />}>
                <MemoizedImage
                  {...props}
                  src={src}
                  alt={props.alt}
                  className={className!}
                  style={style}
                  onClick={(e) => {
                    handleImageClick(e, src, props.alt!)
                  }}>
                  {children}
                </MemoizedImage>
              </Suspense>
            );
          },
        }}
      >
        {rest.markdown}
      </ReactMarkdown>
      {showImage.src !== undefined ? (
        <ImageViewer
          src={showImage.src}
          alt={showImage.alt}
          onClose={handleCloseImage}
        />
      ) : null}
    </>
  );
}