export interface LabelProps {
  children: React.ReactNode; // FIXED: Changed from text to children
  htmlFor?: string;
  disabled?: boolean;
}
