import styled from 'styled-components'

export const Container = styled.header`
  background: var(--color-header-and-footer);
  padding: 0 10px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 2;

  @media (min-width: 768px) {
    padding: 0 30px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  height: 65px;

  .left,
  .right nav {
    display: flex;
    align-items: center;
    flex: 1;
  }

  .left a:first-child {
    display: flex;
    font-size: 3rem;
    padding-right: 1rem;
  }

  .left .logo {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.6rem;
    text-decoration: none;
  }

  .right nav {
    height: 100%;
  }

  .right ul {
    display: flex;
  }
`
export const SearchHeaderForm = styled.form`
  padding-left: 16px;
  width: 100%;

  display: none;
  @media (min-width: 768px) {
    display: block;
  }

  input {
    background: var(--color-search);
    color: var(--color-text-search);
    outline: 0;
    border-radius: 6px;
    padding: 7px 12px;
    width: 100%;

    &:focus {
      width: 318px;
    }

    &::placeholder {
      color: hsla(0, 0%, 100%, 0.75);
    }

    transition: width 0.2s ease-out;
  }
`

export const NavItem = styled.li`
  &:first-child {
    padding-left: 16px;
  }

  &:not(:last-child) {
    a {
      margin-right: 3rem;
    }
  }

  a {
    font-size: 18px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.6;
    }
  }
`

export const Sidebar = styled.nav`
  width: 250px;
  height: 100vh;

  position: fixed;
  top: 0;
  left: -250px;
  z-index: 2;
  transition: left 0.3s;
  background: var(--color-header-and-footer);

  margin-top: 65px;

  &.active {
    left: 0;
    transition: left 0.3s;
  }

  ul:last-child {
    li {
      padding: 8px 0 0 20px;
      height: 60px;

      &.active a {
        background: #565857;
      }

      a {
        width: 95%;
        height: 100%;

        display: flex;
        align-items: center;

        padding: 0 16px;
        border-radius: 4px;

        color: var(--color-line-in-white);
        font-size: 16px;

        text-decoration: none;

        &:hover {
          background: #565857;
        }

        span {
          margin-left: 16px;
        }
      }
    }
  }
`

export const SearchSidebar = styled.ul`
  border-bottom: 1px solid var(--color-text-base);
  padding: 2rem 0;

  display: none;

  li {
    padding: 0 1rem;
  }

  @media (max-width: 767px) {
    display: block;
  }
`

export const SearchSidebarForm = styled.form`
  width: 100%;

  input {
    background: var(--color-search);
    color: var(--color-text-search);
    outline: 0;
    border-radius: 6px;
    padding: 7px 12px;
    width: 100%;
  }
`

export const SidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  opacity: 0;
  visibility: hidden;

  width: 100vw;
  height: 100vh;

  margin-top: 65px;

  background: rgba(0, 0, 0, 0.8);

  &.active {
    opacity: 1;
    visibility: visible;
  }
`
