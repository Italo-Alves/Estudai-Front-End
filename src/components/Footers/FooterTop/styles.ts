import styled from 'styled-components'

export const Container = styled.div`
  background: var(--color-box-footer);
  color: var(--color-title-in-primary);
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 0 2rem;
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Column = styled.div`
  position: relative;
  width: 100%;
  padding: 0rem 1.5rem;
  flex: 0 0 100%;
  max-width: 100%;
  margin-bottom: 1.6rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex: 0 0 33.3333%;
  }
`

export const Title = styled.h3`
  font-size: 1.6rem;
  padding-bottom: 5px;
  font-weight: 700;
  margin-bottom: 0.8rem;
`
export const ListMenu = styled.ul`
  li {
    padding: 5px 0;
    font-size: 1.4rem;

    > a {
      color: var(--color-title-in-primary);
    }
  }
`

export const EmailSpan = styled.span`
  font-size: 1.4rem;
  font-weight: 700;

  > a {
    color: var(--color-title-in-primary);

    &:hover {
      text-decoration: underline;
    }
  }
`
