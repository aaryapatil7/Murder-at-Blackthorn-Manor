import {
  createContext,
  useState,
  useEffect,
} from "react";

export const ClueContext = createContext();

export const ClueProvider = ({ children }) => {
  const [foundClues, setFoundClues] = useState(() => {
    const savedClues =
      localStorage.getItem("foundClues");

    return savedClues
      ? JSON.parse(savedClues)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "foundClues",
      JSON.stringify(foundClues)
    );
  }, [foundClues]);

  const addClue = (clue) => {
    if (!foundClues.includes(clue)) {
      setFoundClues((prev) => [
        ...prev,
        clue,
      ]);
    }
  };

  const resetClues = () => {
    setFoundClues([]);
    localStorage.removeItem("foundClues");
  };

  return (
    <ClueContext.Provider
      value={{
        foundClues,
        addClue,
        resetClues,
      }}
    >
      {children}
    </ClueContext.Provider>
  );
};