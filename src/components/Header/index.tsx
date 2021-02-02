/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../services/auth'
import { SidebarData } from './SidebarData'

import searchIcon from '../../assets/images/icons/search-solid.svg'

import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { IconContext } from 'react-icons'

import './styles.css'
import './Sidebar.css'
import './script.jsx'

const images = [
  {
    name: 'Login',
    url: require('../../assets/images/icons/user-regular.svg'),
    location: 'auth/login'
  },
  {
    name: 'Carrinho',
    url: require('../../assets/images/icons/shopping-cart-solid.svg'),
    location: 'cart'
  }
]

const Header: React.FC = () => {
  useEffect(() => {
    function insertAfter(referenceNode: HTMLElement | null, newNode: Node) {
      referenceNode?.parentNode?.insertBefore(
        newNode,
        referenceNode.nextSibling
      )
    }
    function outerHeight() {
      var height = document.getElementById('navbar-wrapper')?.offsetHeight
      var result = height!.toString()
      var el = document.createElement('div')
      el.classList.add('nav-wrapper')
      el.style.marginTop = result + 'px'
      var referenceNode = document.getElementById('navbar-wrapper')

      insertAfter(referenceNode, el)
    }
    outerHeight()
  }, [])

  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <IconContext.Provider value={{ color: '#f5f5f5' }}>
      <div
        className="navbar-wrapper pl-3 pr-3 pr-md-2 pt-1 pt-md-2 pb-1 pb-md-2 navbar-header fixed-top bg-blue shadow"
        id="navbar-wrapper"
      >
        <nav
          className="navbar navbar-expand-lg navbar-light
                     navbar-offcanvas justify-content-between h-100 w-100"
          id="sideBar"
        >
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>

          <Link to="/" className="navbar-brand mr-auto">
            Estudai
          </Link>

          <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span className={item.cSpanName}>{item.title}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="d-flex justify-content-between">
            <ul className="navbar-nav d-flex justify-content-center">
              <li className="nav-item pl-2 pr-2 d-none d-sm-block">
                <a
                  href="#"
                  className="nav-link btn-open-search"
                  title="Pesquisar"
                >
                  <img src={searchIcon} alt="Pesquisar" />
                </a>
              </li>
              {images.map(image => {
                return (
                  <li key={image.name} className="nav-item pl-2 pr-2">
                    <Link
                      to={'/' + image.location}
                      className="nav-link"
                      title={image.name}
                    >
                      <img src={image.url} alt={image.name} />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>
        <div
          className="wrapper-search pt-2 pr-2 pb-2 pl-0 d-none"
          id="wrapperSearch"
        >
          <div className="container">
            <form action="#" className="form-inline active">
              <div className="input-group w-100">
                <input
                  type="search"
                  className="form form-control"
                  id="iptSearch"
                  placeholder="Faça uma Pesquisa"
                  name="search"
                  aria-label="Pesquisar"
                  aria-describedby="button-search"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-danger"
                    type="submit"
                    id="buttonSearch"
                  >
                    Pesquisar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  )
}
const imagesLogin = [
  {
    name: 'Login',
    url: require('../../assets/images/icons/user-regular.svg'),
    location: 'myprofile'
  },
  {
    name: 'Carrinho',
    url: require('../../assets/images/icons/shopping-cart-solid.svg'),
    location: 'Carrinho'
  },
  {
    name: 'Sair',
    url: require('../../assets/images/icons/sign-out-alt-solid.svg'),
    location: '',
    click: logout
  }
]

const HeaderLogin: React.FC = () => {
  useEffect(() => {
    function insertAfter(referenceNode: HTMLElement | null, newNode: Node) {
      referenceNode?.parentNode?.insertBefore(
        newNode,
        referenceNode.nextSibling
      )
    }
    function outerHeight() {
      var height = document.getElementById('navbar-wrapper')?.offsetHeight
      var result = height!.toString()
      var el = document.createElement('div')
      el.classList.add('nav-wrapper')
      el.style.marginTop = result + 'px'
      var referenceNode = document.getElementById('navbar-wrapper')

      insertAfter(referenceNode, el)
    }
    outerHeight()
  }, [])

  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <IconContext.Provider value={{ color: '#f5f5f5' }}>
      <div
        className="navbar-wrapper pl-3 pr-3 pr-md-2 pt-1 pt-md-2 pb-1 pb-md-2 navbar-header fixed-top bg-blue shadow"
        id="navbar-wrapper"
      >
        <nav
          className="navbar navbar-expand-lg navbar-light
                     navbar-offcanvas justify-content-between h-100 w-100"
          id="sideBar"
        >
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>

          <Link to="/" className="navbar-brand mr-auto">
            Estudai
          </Link>

          <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span className={item.cSpanName}>{item.title}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="d-flex justify-content-between">
            <ul className="navbar-nav d-flex justify-content-center">
              <li className="nav-item pl-2 pr-2 d-none d-sm-block">
                <a
                  href="#"
                  className="nav-link btn-open-search"
                  title="Pesquisar"
                >
                  <img src={searchIcon} alt="Pesquisar" />
                </a>
              </li>
              {imagesLogin.map(image => {
                return (
                  <li key={image.name} className="nav-item pl-2 pr-2">
                    <Link
                      to={'/' + image.location}
                      className="nav-link"
                      title={image.name}
                      onClick={image.click}
                    >
                      <img src={image.url} alt={image.name} />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>
        <div
          className="wrapper-search pt-2 pr-2 pb-2 pl-0 d-none"
          id="wrapperSearch"
        >
          <div className="container">
            <form className="form-inline active">
              <div className="input-group w-100">
                <input
                  type="search"
                  className="form form-control"
                  id="iptSearch"
                  placeholder="Faça uma Pesquisa"
                  name="search"
                  aria-label="Pesquisar"
                  aria-describedby="button-search"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-danger"
                    type="submit"
                    id="buttonSearch"
                  >
                    Pesquisar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  )
}
export { Header, HeaderLogin }
