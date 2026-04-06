"use client";

import { Button, type ButtonProps } from "@/components/ui/button";

function scrollToLeadForm() {
  const target = document.getElementById("lead-form-top") ?? document.getElementById("lead-form");

  if (!target) return;

  requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

export default function ScrollToLeadButton({
  children,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <Button
      {...props}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          scrollToLeadForm();
        }
      }}
    >
      {children}
    </Button>
  );
}
