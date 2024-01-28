import React, { useEffect, useState } from 'react';

interface IconProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}

export const DynamicIcon: React.FC<IconProps> = ({ name, className, style }) => {
  const [DynamicIcon, setDynamicIcon] = useState<React.FC<React.SVGProps<SVGSVGElement>> | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    import(`./icons/${name}.svg`)
      .then((module) => {
        if (isMounted) {
          setDynamicIcon(module.default);
          setIsLoaded(true);
        }
      })
      .catch((error) => console.error(`Error loading icon: ${name}`, error));

    return () => {
      isMounted = false;
    };
  }, [name]);

  if (!isLoaded) {
    // Render the same placeholder on both server and client initially
    return <div className={className} style={style}>Icon Placeholder</div>;
  }

  if (DynamicIcon) {
    return <DynamicIcon className={className} style={style} />;
  }

  // Fallback in case of an error
  return <div className={className} style={style}>Error Loading Icon</div>;
};
