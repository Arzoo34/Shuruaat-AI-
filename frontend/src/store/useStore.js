import { create } from "zustand";

export const useStore = create((set) => ({
  selectedLanguage: "en",
  sellerProfile: {
    name: "",
    shopName: "",
    craftType: "",
  },
  uploadedImages: [],
  currentListing: null,
  craftStory: "",

  setSelectedLanguage: (selectedLanguage) => set({ selectedLanguage }),
  
  setSellerProfile: (updater) =>
    set((state) => ({
      sellerProfile: typeof updater === "function" ? updater(state.sellerProfile) : updater,
    })),
    
  addUploadedImage: (img) =>
    set((state) => ({
      uploadedImages: [...state.uploadedImages, img],
    })),
    
  removeUploadedImage: (index) =>
    set((state) => ({
      uploadedImages: state.uploadedImages.filter((_, i) => i !== index),
    })),
    
  clearUploadedImages: () => set({ uploadedImages: [] }),
  
  setCurrentListing: (currentListing) => set({ currentListing }),
  
  setCraftStory: (craftStory) => set({ craftStory }),
  
  resetStore: () =>
    set({
      selectedLanguage: "en",
      sellerProfile: { name: "", shopName: "", craftType: "" },
      uploadedImages: [],
      currentListing: null,
      craftStory: "",
    }),
}));
