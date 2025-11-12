import React, { createContext, useContext, useState } from "react";

interface ScrollControlContextType {
  isPaused: boolean;
  togglePause: () => void;
}

const ScrollControlContext = createContext<
  ScrollControlContextType | undefined
>(undefined);

export const ScrollControlProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isPaused, setIsPaused] = useState(false);

  const togglePause = () => setIsPaused((prev) => !prev);

  return (
    <ScrollControlContext.Provider value={{ isPaused, togglePause }}>
      {children}
    </ScrollControlContext.Provider>
  );
};

export const useScrollControl = () => {
  const context = useContext(ScrollControlContext);
  if (!context) {
    throw new Error(
      "useScrollControl must be used within ScrollControlProvider"
    );
  }
  return context;
};
