import React from 'react'
import CommonInput from '../../../packages/Input'
import { InputProps } from 'packages/Input'

function Input(props: InputProps, ref: React.Ref<HTMLInputElement>) {
  return (
    <CommonInput {...props} ref={ref} />
  )
}

export default React.forwardRef(Input)
