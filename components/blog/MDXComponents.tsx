import Image from 'next/image'
import { ReactNode, Children, isValidElement } from 'react'
import { highlight } from 'sugar-high'

interface PreProps {
  children: ReactNode
  [key: string]: unknown
}

interface CodeProps {
  children: string
  [key: string]: unknown
}

interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  [key: string]: unknown
}

interface VideoProps {
  src: string
  title?: string
  [key: string]: unknown
}

const Video = ({ src, title = "Video", ...props }: VideoProps) => {
  // YouTube video
  if (src.includes('youtube.com') || src.includes('youtu.be')) {
    const videoId = src.includes('youtube.com')
      ? src.split('v=')[1]?.split('&')[0]
      : src.split('youtu.be/')[1]?.split('?')[0];
    
    return (
      <div className="relative w-full aspect-video my-8 rounded-lg overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
          {...props}
        />
      </div>
    );
  }

  // Vimeo video
  if (src.includes('vimeo.com')) {
    const videoId = src.split('vimeo.com/')[1]?.split('?')[0];
    
    return (
      <div className="relative w-full aspect-video my-8 rounded-lg overflow-hidden">
        <iframe
          src={`https://player.vimeo.com/video/${videoId}`}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
          {...props}
        />
      </div>
    );
  }

  // Direct video file
  return (
    <div className="my-8 rounded-lg overflow-hidden">
      <video
        src={src}
        title={title}
        controls
        className="w-full rounded-lg"
        style={{ maxWidth: '100%', height: 'auto' }}
        {...props}
      />
    </div>
  );
};

export const mdxComponents = {
  pre: ({ children, ...props }: PreProps) => {
    // Support MDX's <pre><code className="language-js">...</code></pre> structure
    let className = '';
    let codeString = '';
    if (Children.count(children) === 1 && isValidElement(children)) {
      const childProps = (children as React.ReactElement<{ className?: string; children?: string }>).props || {};
      className = typeof childProps.className === 'string' ? childProps.className : '';
      codeString = typeof childProps.children === 'string' ? childProps.children : '';
    }
    // Extract language from className (e.g., language-js)
    const match = className.match(/language-(\w+)/);
    const language = match ? match[1] : '';
    return (
      <pre {...props} className="overflow-x-auto p-4 bg-muted rounded-lg border border-border my-6">
        <code className={className} data-language={language}>
          {codeString}
        </code>
      </pre>
    );
  },
  code: ({ children = '', className = '', ...props }: CodeProps) => {
    // Only highlight if not inline code
    const classNameStr = typeof className === 'string' ? className : '';
    const match = classNameStr.match(/language-(\w+)/);
    const language = match ? match[1] : '';
    const codeHTML = highlight(String(children));
    return (
      <code
        dangerouslySetInnerHTML={{ __html: codeHTML }}
        className={`bg-muted px-1 py-0.5 rounded text-sm font-mono ${classNameStr}`}
        data-language={language}
        {...props}
      />
    );
  },
  img: ({ src, alt, width = 800, height = 600, ...props }: ImageProps) => {
    return (
      <Image 
        src={src} 
        alt={alt} 
        width={width}
        height={height}
        {...props} 
        className="rounded-2xl shadow-lg max-w-full h-auto border border-border mx-auto my-8 block"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    )
  },
  video: Video,
  h1: ({ children, ...props }: { children: ReactNode; [key: string]: unknown }) => (
    <h1 {...props} className="text-4xl font-bold mt-8 mb-4 text-foreground">
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: { children: ReactNode; [key: string]: unknown }) => (
    <h2 {...props} className="text-3xl font-semibold mt-8 mb-12 text-foreground">
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: { children: ReactNode; [key: string]: unknown }) => (
    <h3 {...props} className="text-2xl font-semibold mt-6 mb-3 text-foreground">
      {children}
    </h3>
  ),
  p: ({ children, ...props }: { children: ReactNode; [key: string]: unknown }) => {
    // Check if paragraph contains only an image
    const childArray = Children.toArray(children);
    const hasOnlyImage = childArray.length === 1 && 
      isValidElement(childArray[0]) && 
      childArray[0].type === 'img';
    
    if (hasOnlyImage) {
      // Return the image directly without wrapping in p tag
      return <>{children}</>;
    }
    
    return (
      <p {...props} className="mb-4 text-lg leading-relaxed text-foreground">
        {children}
      </p>
    );
  },
  ul: ({ children, ...props }: { children: ReactNode; [key: string]: unknown }) => (
    <ul {...props} className="list-disc list-inside mb-4 space-y-2 text-foreground">
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: { children: ReactNode; [key: string]: unknown }) => (
    <ol {...props} className="list-decimal list-inside mb-4 space-y-2 text-foreground">
      {children}
    </ol>
  ),
  li: ({ children, ...props }: { children: ReactNode; [key: string]: unknown }) => (
    <li {...props} className="mb-1">
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: { children: ReactNode; [key: string]: unknown }) => (
    <blockquote {...props} className="border-l-4 border-info pl-4 my-6 italic text-foreground bg-muted py-2 rounded-r">
      {children}
    </blockquote>
  ),
  a: ({ children, href, ...props }: { children: ReactNode; href?: string; [key: string]: unknown }) => (
    <a 
      href={href} 
      {...props} 
      className="text-foreground hover:text-yellow-400 text-wabi-earth transition-colors"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  )
} 