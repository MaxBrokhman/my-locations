import { useHistory } from "react-router-dom"

export const useNewItemFormSubmit = ({
  action,
  data,
  newUrl,
  dispatch,
}) => {
  const history = useHistory()
  const submitHandler = (evt) => {
    evt.preventDefault()
    console.log(data)
    action(data, dispatch)
    history.push(newUrl)
  }

  return {
    submitHandler,
  }
}
