import create from "zustand";

// home
interface NavItem {
  name: string;
  text: string;
  comment: string;
}

interface StoreState {
  navList: NavItem[];
  navIndex: number | null;
  setNavIndex: (index: number | null) => void;
  isHover: boolean;
  setIsHover: (hover: boolean) => void;
}

export const useStore = create<StoreState>((set) => ({
  navList: [
    { name: "hoo", text: "HOO", comment: "WHO's HOO?" },
    { name: "ro", text: "RO", comment: "THE ROAD I’ve TRAVELED." },
    { name: "log", text: "LOG", comment: "LEAVE A LOG!" },
  ],

  navIndex: null,
  setNavIndex: (index: number | null) => set({ navIndex: index }),

  isHover: false,
  setIsHover: (hover: boolean) => set({ isHover: hover }),
}));
