import { createContext, useState } from "react";

export const InterrogationContext = createContext();

export function InterrogationProvider({ children }) {
  const [conversations, setConversations] = useState({});

  const addConversation = (suspectId, question, answer) => {
    setConversations((prev) => {
      const existing = prev[suspectId] || [];

      const alreadyAsked = existing.some(
        (item) => item.question === question
      );

      if (alreadyAsked) return prev;

      return {
        ...prev,
        [suspectId]: [
          ...existing,
          {
            question,
            answer,
          },
        ],
      };
    });
  };

  return (
    <InterrogationContext.Provider
      value={{
        conversations,
        addConversation,
      }}
    >
      {children}
    </InterrogationContext.Provider>
  );
}