import React from 'react'
import { Field, reduxForm } from 'redux-form'
import style from '../../style/input.module.scss'

const InputArea = () => {
  return (
    <div className={style.inputs} >
      <Field component='textarea' name="text" type="text" />
      <Field component='textarea' name="text" type="text" />
    </div>
  )
}

export const Input = reduxForm({form: 'text-input'})(InputArea)