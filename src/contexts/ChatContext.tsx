import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ChatContextType {
  currentTopic: string;
  setCurrentTopic: (topic: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentTopic, setCurrentTopic] = useState('');

  return (
    <ChatContext.Provider value={{ currentTopic, setCurrentTopic }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};
