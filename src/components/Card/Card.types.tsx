export interface CardProps {
    image?: string;
    title: string;
    description: string;
    buttonText?: string;
    onButtonClick?: () => void;
    width?: string;
  }
  
  export {}; // Ensures this file is treated as a module
  