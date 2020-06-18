import React from 'react'
import { create } from 'react-test-renderer'
import { Footer } from '../components/footer/Footer'

describe('Footer presentation container:', () => {
  const footer = create(<Footer />)
  const root = footer.root 

  describe('Footer element:', () => {
    const footerEl = root.findByType('footer')

    it('To be difined', () => {
      expect(footerEl).toBeDefined()
    })
  })

  describe('Props of footer:', () => {
    const footerEl = root.findAllByType('footer')[0]

    it('Must be className', () => {
      expect(footerEl.props.className).toContain('footer')
    })
  })

  describe('Child of footer:', () => {
    const span = root.findAllByType('span')

    it('Must be span', () => {
      expect(span).toHaveLength(1)
    })
  })

  describe('Props of child', () => {
    const span = root.findAllByType('span')[0]
    
    it('Must be only inner text', () => {
      expect(span.children).toContain('©Textshifter 2020')
    })
  })
})