import React from 'react'
import { ButtonProps } from 'packages/Button'
import CommonButton from '../../../packages/Button'

/**
- 렌카에 보여지는 다양한 버튼들입니다.
**/

export default function Button(props: ButtonProps) {
  return (
    <CommonButton {...props} rencar={true} />
  )
}
