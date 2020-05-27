import React from 'react'
import { Field, reduxForm } from 'redux-form'
import style from '../../style/input.module.scss'

const InputArea = () => {
  return (
    <div className={style.inputs} >
      <Field 
        component='textarea' 
        name='input' 
        type='text'
        placeholder='Enter you text'
      />
      <Field 
        component='textarea' 
        name='output' 
        type='text'
        placeholder='Result the edit your text'
      />
    </div>
  )
}

export const Input = reduxForm({form: 'text-input'})(InputArea)