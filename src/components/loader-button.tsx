import { Loader2Icon } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/utils/utils";

export function LoaderButton({
  children,
  isLoading,
  className,
  ...props
}: ButtonProps & { isLoading: boolean }) {
  return (
    <Button
      disabled={isLoading}
      {...props}
      className={cn("flex gap-2 justify-center px-3", className)}
    >
      {isLoading && <Loader2Icon className="animate-spin w-4 h-4" />}
      {children}
    </Button>
  );
}
