import * as React from "react";

interface ContentRendererProps {
  content: string;
  className?: string;
}

interface ContentBlock {
  type: "heading" | "paragraph" | "list";
  content: string | string[];
}

function parseContent(content: string): ContentBlock[] {
  const lines = content.split("\n");
  const blocks: ContentBlock[] = [];
  let currentList: string[] = [];

  const flushList = () => {
    if (currentList.length > 0) {
      blocks.push({ type: "list", content: [...currentList] });
      currentList = [];
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList();
      continue;
    }

    if (trimmed.startsWith("## ")) {
      flushList();
      blocks.push({ type: "heading", content: trimmed.replace("## ", "") });
    } else if (trimmed.startsWith("- ")) {
      currentList.push(trimmed.replace("- ", ""));
    } else {
      flushList();
      blocks.push({ type: "paragraph", content: trimmed });
    }
  }

  flushList();
  return blocks;
}

export function ContentRenderer({ content, className }: ContentRendererProps) {
  const blocks = parseContent(content);

  return (
    <div className={className}>
      {blocks.map((block, index) => {
        const key = `block-${index}`;

        switch (block.type) {
          case "heading":
            return (
              <h2 key={key} className="text-2xl font-bold mt-8 mb-4">
                {block.content as string}
              </h2>
            );
          case "list":
            return (
              <ul key={key} className="list-disc list-inside mb-4 space-y-1">
                {(block.content as string[]).map((item, itemIndex) => (
                  <li key={`${key}-item-${itemIndex}`} className="text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "paragraph":
            return (
              <p key={key} className="text-muted-foreground mb-4">
                {block.content as string}
              </p>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
