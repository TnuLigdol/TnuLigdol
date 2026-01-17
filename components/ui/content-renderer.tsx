import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ContentRendererProps {
  content: string;
  className?: string;
}

export function ContentRenderer({ content, className }: ContentRendererProps) {
  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ node: _, ...props }) => (
            <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />
          ),
          p: ({ node: _, ...props }) => (
            <p className="text-muted-foreground mb-4" {...props} />
          ),
          ul: ({ node: _, ...props }) => (
            <ul className="list-disc list-inside mb-4 space-y-1" {...props} />
          ),
          li: ({ node: _, ...props }) => (
            <li className="text-muted-foreground" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
