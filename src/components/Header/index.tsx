import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { HeaderLogOutData } from './HeaderData'
import { SidebarData } from './SidebarData'

import * as FaIcons from 'react-icons/fa'
import { IconContext } from 'react-icons'

import {
  Container,
  Wrapper,
  SearchHeaderForm,
  NavItem,
  Sidebar,
  SearchSidebar,
  SearchSidebarForm,
  SidebarOverlay
} from './styles'

interface Props {
  showLogOut?: boolean
}

const HeaderLogOut: React.FC<Props> = ({ showLogOut = false }) => {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <IconContext.Provider value={{ color: '#f5f5f5' }}>
      <Container>
        <Wrapper>
          <div className="left">
            <Link to="#">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>

            <Link to="/" className="logo">
              Estudai
            </Link>
            <SearchHeaderForm>
              <input placeholder="Pesquisar"></input>
            </SearchHeaderForm>
          </div>

          <div className="right">
            <nav>
              <ul>
                {HeaderLogOutData.map((item, index) => {
                  if (index === 2) {
                    if (showLogOut) {
                      return (
                        <NavItem key={index}>
                          <Link
                            to={item.location}
                            title={item.name}
                            onClick={item.click}
                          >
                            {item.icon}
                          </Link>
                        </NavItem>
                      )
                    } else {
                      return null
                    }
                  }
                  return (
                    <NavItem key={index}>
                      <Link to={item.location} title={item.name}>
                        {item.icon}
                      </Link>
                    </NavItem>
                  )
                })}
              </ul>
            </nav>
          </div>

          <Sidebar className={sidebar ? 'active' : ''}>
            <SearchSidebar>
              <li>
                <SearchSidebarForm>
                  <input placeholder="Pesquisar" />
                </SearchSidebarForm>
              </li>
            </SearchSidebar>
            <ul>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.liClass}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </Sidebar>

          <SidebarOverlay
            className={sidebar ? 'active' : ''}
            onClick={showSidebar}
          ></SidebarOverlay>
        </Wrapper>
      </Container>
    </IconContext.Provider>
  )
}
export default HeaderLogOut
