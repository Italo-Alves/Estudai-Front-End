import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as GoIcons from 'react-icons/go'

export const SidebarData = [
  {
    title: 'Ínicio',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },

  {
    title: 'Meus Cursos',
    path: '/courses',
    icon: <GoIcons.GoMortarBoard />,
    cName: 'nav-text'
  },

  {
    title: 'Quem Somos',
    path: '/quem-somos',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },

  {
    title: 'Mensagens',
    path: '/mensagens',
    icon: <FaIcons.FaEnvelopeOpen />,
    cName: 'nav-text'
  },

  {
    title: 'Suporte',
    path: '/suporte',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
]
