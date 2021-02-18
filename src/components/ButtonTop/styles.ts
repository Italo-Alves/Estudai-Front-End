import styled from 'styled-components'

export const Button = styled.button`
  position: fixed;
  bottom: 60px;
  right: 30px;
  z-index: 1;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  border: none;
  font-size: 18px;
  line-height: 0.125em;
  outline: none !important;
  background-color: #000;
  color: white;
  opacity: 0;
  transform: translateY(130px);
  cursor: pointer;
  transition: all 0.5s ease;

  &.show {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    background-color: #404040;
  }
`
