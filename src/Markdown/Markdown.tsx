import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

import "./Markdown.scss";

interface MarkdownProps {
  markdown: string;
  className?: string;
}

export const Markdown: React.FC<MarkdownProps> = (rest) => {
  return (
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
            <img {...props} src={props.src} alt={props.alt} className={className} onClick={(e) => {
              console.log(e);
            }}>
              {children}
            </img>
          );
        },
      }}
      >
      { rest.markdown }
    </ReactMarkdown>
  )
}