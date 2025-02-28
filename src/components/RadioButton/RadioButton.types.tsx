export interface RadioButtonProps {
    label: string;
    name: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
  }
  
  export {}; // Ensures this file is treated as a module
  