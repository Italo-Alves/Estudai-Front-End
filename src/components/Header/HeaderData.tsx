import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io5'

import { logout } from '../../services/auth'

export const HeaderLogOutData = [
  {
    name: 'Login',
    icon: <AiIcons.AiOutlineUser />,
    location: '/auth/login'
  },
  {
    name: 'Carrinho',
    icon: <AiIcons.AiOutlineShoppingCart />,
    location: '/cart'
  },
  {
    name: 'Sair',
    icon: <IoIcons.IoLogInOutline />,
    location: '#',
    click: logout
  }
]

export const HeaderData = [
  {
    name: 'Login',
    icon: <AiIcons.AiOutlineUser />,
    location: '/auth/login'
  },
  {
    name: 'Carrinho',
    icon: <AiIcons.AiOutlineShoppingCart />,
    location: '/cart'
  }
]
