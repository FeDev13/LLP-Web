import { useState } from 'react'

const useForm = (inputs: any) => { //inputs como parametros
  const [input, setInput] = useState(inputs) //recibe los inputs

  const handleInputChange = ({ target }: any) => {
    setInput({ ...input, [target.name]: target.value })
  }
  return [input, handleInputChange, setInput]
}

export default useForm