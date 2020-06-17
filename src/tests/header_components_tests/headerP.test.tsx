import React from 'react'
import { create } from 'react-test-renderer'
import { Header } from '../../components/header/Header'
import { BrowserRouter, NavLink } from 'react-router-dom'
import { Logo } from '../../components/header/Logo'

describe('Logo presentation container:', () => {
  const props = {
    logo: {
      logotext: 'Textshifter'
    }
  }
  
  describe('In logo presentation component:', () => {
    const newProps = {
      ...props,
      logo: {
        ...props.logo,
        logotext: 'Textshifter'
      }
    }
    const logo = create(<BrowserRouter><Logo {...newProps.logo}/></BrowserRouter>)
    const root = logo.root

    it('Must be 2 NavLink', () => {
      const link = root.findAllByType(NavLink)

      expect(link).toHaveLength(2)
    })
  })
  
  describe('First child in NavLink:', () => {
    const newProps = {
      ...props,
      logo: {
        ...props.logo,
        logotext: 'Textshifter'
      }
    }
    const logo = create(<BrowserRouter><Logo {...newProps.logo}/></BrowserRouter>)
    const root = logo.root
    const link = root.findAllByType(NavLink)[0]

    it('Must have props className and to', () => {
      expect(link.props.className).toContain('img')
      expect(link.props.to).toContain('./')
    })
      
    describe('Children of first NavLink:', () => {
      const img = link.findAllByType('img')

      it('Must be img', () => {
        expect(img).toHaveLength(1)
      })
    })
    
    describe('Props of children:', () => {
      it('Must be src and alt', () => {
        const img = link.findByType('img')

        expect(img.props.src).toContain('logo.svg')
        expect(img.props.alt).toContain('logo the app')
      })
    })
  })

  describe('Second child in NavLink:', () => {
    const newProps = {
      ...props,
      logo: {
        ...props.logo,
        logotext: 'Textshifter'
      }
    }
    const logo = create(<BrowserRouter><Logo {...newProps.logo}/></BrowserRouter>)
    const root = logo.root
    const link = root.findAllByType(NavLink)[1]

    it('Must have props className and to', () => {
      expect(link.props.className).toContain('txt')
      expect(link.props.to).toContain('./')
    })

    //Children of second NavLink

    describe('Children of second NavLink:', () => {
      it('Must be span', () => {
        const span = link.findAllByType('span')

        expect(span).toHaveLength(1)
      })
    })

    describe('Props of children:', () => {
      it('Must be src and alt', () => {
        const img = link.findByType('span')

        expect(img.props.children).toContain('Textshifter')
      })
    })
  })
})

describe('Header presentation container:', () => {
  const props = {
    logo: {
      logotext: 'Textshifter',
      toggleTheme: () => {}
    }
  }

  describe('Header element:', () => {
    const newProps = {
      ...props,
      logo: {
        ...props.logo,
        logotext: 'Textshifter',
        toggleTheme: () => {}
      }
    }
    const header = create(<BrowserRouter><Header {...newProps.logo}/></BrowserRouter>)
    const root = header.root
    const headerEl = root.findByType('header')

    it('Must be containt <header/>', () => {
      expect(headerEl).toBeDefined()
    })
    it('Must have classNam', () => {
      expect(headerEl.props.className).toContain('header')
    })
  })
  describe('Tag <a> in Header component', () => {
    const newProps = {
      ...props,
      logo: {
        ...props.logo,
        logotext: 'Textshifter',
        toggleTheme: () => {}
      }
    }
    const header = create(<BrowserRouter><Header {...newProps.logo}/></BrowserRouter>)
    const root = header.root

    it('Must be three', () => {
      const href = root.findAllByType('a')
      expect(href).toHaveLength(3)      
    })

    describe('Props of first element:', () => {
      const href = root.findAllByType('a')[0]

      it('Must be className, href and link name', () => {
        expect(href.props.className).toContain('skip-link')
        expect(href.props.href).toContain('#main')
        expect(href.props.children).toContain('Skip to main')
      })
    })
  })

  describe('Component Link in Header component:', () => {
    const newProps = {
      ...props,
      logo: {
        ...props.logo,
        logotext: 'Textshifter',
        toggleTheme: () => {}
      }
    }
    const header = create(<BrowserRouter><Header {...newProps.logo}/></BrowserRouter>)
    const root = header.root

    describe('Availability:', () => {
      const logo = root.findAllByType(Logo)
      
      it('Logo component must be defined', () => {
        expect(logo).toBeDefined()
      })
      
      it('Amount Logo component must be one', () => {
        expect(logo).toHaveLength(1)
      })
    })

    describe('Props:', () => {
      it('Must be logotext', () => {
        const logo = root.findByType(Logo)

        expect(logo.props.logotext).toContain('Textshifter')
      })
    })
  })

  describe('Tag <button> in Header component:', () => {
    const newProps = {
      ...props,
      logo: {
        ...props.logo,
        logotext: 'Textshifter',
        toggleTheme: () => {}
      }
    }
    const header = create(<BrowserRouter><Header {...newProps.logo}/></BrowserRouter>)
    const root = header.root
    const button = root.findByType('button')

    it('Must be defined', () => {
      expect(button).toBeDefined()
    })

    describe('Props:', () => {
      it('Must be className and onClick', () => {
        expect(button.props.className).toContain('theme')
        expect(button.props.onClick).toBe(newProps.logo.toggleTheme)
      })
    })
  })
})