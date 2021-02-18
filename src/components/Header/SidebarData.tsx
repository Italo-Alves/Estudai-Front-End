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
    liClass: 'active'
  },

  {
    title: 'Meus Cursos',
    path: '/courses',
    icon: <GoIcons.GoMortarBoard />
  },

  {
    title: 'Quem Somos',
    path: '/quem-somos',
    icon: <IoIcons.IoMdPeople />
  },

  {
    title: 'Mensagens',
    path: '/mensagens',
    icon: <FaIcons.FaEnvelopeOpen />
  },

  {
    title: 'Suporte',
    path: '/suporte',
    icon: <IoIcons.IoMdHelpCircle />
  }
]
