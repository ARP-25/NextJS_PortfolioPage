import { create } from "zustand";

interface TechstackModalStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

const useTechstackModal = create<TechstackModalStore>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}));

export default useTechstackModal;
