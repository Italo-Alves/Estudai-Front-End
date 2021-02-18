import styled from 'styled-components'

export const Container = styled.div`
  color: var(--color-title-in-primary);
  padding: 25px;
  font-size: 12px;

  background: var(--color-header-and-footer);
`
export const Row = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;

  > span:first-child {
    margin-bottom: 0.8rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    > span:first-child {
      margin-bottom: 0;
    }
  }
`

export const Links = styled.ul`
  display: flex;

  > li:not(:last-child) {
    margin-right: 1rem;
  }

  > li {
    > a {
      display: inline-block;
      cursor: pointer;

      > img {
        width: 22px;
      }
    }
  }
`
