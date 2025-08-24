import { createContext, useContext } from 'react';

// Create the context interface
interface EmailContextType {
  registeredEmail: string;
  setRegisteredEmail: (email: string) => void;
}

// Create the context with a default value
export const EmailContext = createContext<EmailContextType | undefined>(
  undefined
);

// Custom hook to use the email context
export const useEmail = (): EmailContextType => {
  const context = useContext(EmailContext);
  if (context === undefined) {
    throw new Error('useEmail must be used within an EmailProvider');
  }
  return context;
};
