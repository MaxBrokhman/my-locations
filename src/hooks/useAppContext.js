import { useContext } from "react"

import { Context } from '../reducer/reducer'

export const useAppContext = () => useContext(Context)
