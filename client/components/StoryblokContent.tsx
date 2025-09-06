import { richTextResolver } from "@storyblok/richtext";

interface StoryblokContentProps {
  content: any;
  className?: string;
}

export default function StoryblokContent({
  content,
  className,
}: StoryblokContentProps) {
  if (!content) return null;

  // For simple text content
  if (typeof content === "string") {
    return <div className={className}>{content}</div>;
  }

  // For rich text objects, use the richTextResolver
  if (content && typeof content === "object") {
    try {
      const renderedContent = richTextResolver(content);
      return (
        <div
          className={`storyblok-rich-text ${className || ""}`}
          dangerouslySetInnerHTML={{ __html: renderedContent }}
        />
      );
    } catch (error) {
      console.warn("Error rendering rich text:", error);
      // Fallback to displaying the content as text
      return <div className={className}>{JSON.stringify(content)}</div>;
    }
  }

  return <div className={className}>{String(content)}</div>;
}
