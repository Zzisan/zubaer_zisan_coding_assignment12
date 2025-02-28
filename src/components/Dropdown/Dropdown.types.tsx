export interface DropdownOption {
    label: string;
    value: string;
  }
  
  export interface DropdownProps {
    options: DropdownOption[];
    onChange?: (value: string) => void;
    disabled?: boolean;
  }
  
  export {}; // Ensures this file is treated as a module
  