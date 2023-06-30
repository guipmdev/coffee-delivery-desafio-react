import { styled } from 'styled-components'

import Background from '../../assets/background.svg'

export const HomeContainer = styled.main`
  .intro-wrapper {
    background: no-repeat url(${Background}) center / cover;
  }
`

export const Intro = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  gap: 3.5rem;

  max-width: ${(props) => props.theme['max-width']};
  padding: 5.875rem 2rem 6.75rem;
  margin: 0 auto;

  & > img {
    width: 100%;
    min-width: 238px;
    max-width: 476px;
    margin: 0 auto;
  }

  h1 {
    color: ${(props) => props.theme['base-title']};
    font: ${(props) => props.theme['title-xl']};

    & + p {
      color: ${(props) => props.theme['base-subtitle']};
      font: ${(props) => props.theme['text-l']};
      font-weight: 400;

      margin: 1rem 0 4.125rem;
    }
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1.25fr;
    grid-column-gap: 2.5rem;
    grid-row-gap: 1.25rem;

    align-items: center;

    list-style: none;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media (max-width: 868px) {
    ul {
      grid-template-columns: 1fr;
    }
  }
`

interface DifferentialProps {
  backgroundColor: string
}

export const Differential = styled.li<DifferentialProps>`
  display: flex;
  align-items: center;

  span {
    height: 100%;
    padding: 0.5rem;
    border-radius: 50%;
    margin-right: 0.75rem;

    color: ${(props) => props.theme.white};
    line-height: 0;

    background: ${(props) => props.theme[props.backgroundColor]};
  }

  p {
    font: ${(props) => props.theme['text-m']};
  }
`

export const CoffeeList = styled.section`
  max-width: ${(props) => props.theme['max-width']};
  padding: 0 2rem 9.8125rem;
  margin: 0 auto;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font: ${(props) => props.theme['title-l']};

    margin-bottom: 3.375rem;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    gap: 2.5rem 2rem;
  }
`
