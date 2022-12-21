import { createContext, useState } from "react";

//* CONTEXT *//
//* CONTEXT *//
interface UIContextProps {
  isPostModalOpen: boolean;
  isSidebarOpen: boolean;
  togglePostModal(): void;
  toggleSidebar(): void;
}

export const UIContext = createContext({} as UIContextProps);

//* PROVIDER *//
//* PROVIDER *//
interface UIProviderProps {
  children: React.ReactNode;
}

export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const togglePostModal = () => setIsPostModalOpen((prev) => !prev);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <UIContext.Provider
      value={{
        isPostModalOpen,
        isSidebarOpen,

        togglePostModal,
        toggleSidebar,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
