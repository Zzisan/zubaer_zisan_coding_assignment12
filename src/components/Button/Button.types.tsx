// src/components/Button/Button.types.tsx
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
}
// Ensure the file is treated as a module:
export {};
