import { useLocation } from "react-router-dom"

const CATEGORIE = 'categorie'

export const useLocationDetection = () => {
  const { pathname } = useLocation()
  const isCategoriesPage = pathname.toLowerCase().includes(CATEGORIE) 
  return {
    isCategoriesPage,
  }
}
