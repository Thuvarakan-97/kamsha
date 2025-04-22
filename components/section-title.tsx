import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({ 
  title, 
  subtitle, 
  className 
}: SectionTitleProps) {
  return (
    <div className={cn("text-center mb-12", className)}>
      <h2 className="text-3xl font-bold mb-2 tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
      <div className="mt-4 w-24 h-1 bg-primary mx-auto rounded-full" />
    </div>
  );
}