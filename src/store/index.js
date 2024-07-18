import { create } from 'zustand'


export const useStore = create((set) => ({
  products: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
  updateProducts: (newProducts) => set({ products: newProducts }),
}))

export const useProduct = create((set) => ({
  product: {},
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
  setProduct: (newProduct) => set({ product: newProduct }),
}))

export const useCategory = create((set) => ({
  categoryId: "",
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
  updateCategoryId: (newCategoryId) => set({ categoryId: newCategoryId }),
}))

export const useSearchItem = create((set) => ({
  searchItem: "",
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
  updateSearchItem: (newSearchItem) => set({ searchItem: newSearchItem}), //function to update
}))






