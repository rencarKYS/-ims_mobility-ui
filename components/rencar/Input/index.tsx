import React, { useRef } from 'react'
import CommonInput from '../../../packages/Input'
import { InputProps } from 'packages/Input'

function Input(props: InputProps) {
  const inputRef = useRef(null)
  console.log(inputRef, 123)
  return (
    <CommonInput {...props} ref={inputRef} />
  )
}

export default Input
