import React from 'react'
import style from '../../style/footer.module.scss'

/**
 * This function just returning the footer component.
 * @returns tag footer with a nested span tag
 */
export const Footer: React.FC = () => (
  <footer className={style.footer}>
    <span>©Textshifter 2020</span>
  </footer>
)