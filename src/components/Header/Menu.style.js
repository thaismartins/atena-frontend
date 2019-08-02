import styled from 'styled-components'
import theme from '../../styles/theme'

const StyledMenu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  width: fit-content;
  margin: 0 auto;

  li + li::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 4px;
    background: ${props => theme.color.secondary};
    border-radius: 3px;
    margin-bottom: 3px;
    margin-left: ${props => theme.fontSize.default};
    margin-right: ${props => theme.fontSize.default};
  }

  li {
    &:not(:first-child) a::after {
      transform: translateY(5px) translateX(32px);
    }
  }

  .user {
    margin-top: -15px;
    ::before {
      background: none;
    }

    img {
      border-radius: 50%;
      width: 50px;
      height: 50px;
    }
  }

  button {
    color: ${theme.color.white};
    text-transform: uppercase;
    background: transparent;
    font-weight: 600;
    outline: none;
    cursor: pointer;

    &::after {
      content: '';
      display: block;
      width: 0px;
      height: 3px;
      background: ${theme.color.primaryLight};
      border-radius: 3px;
      position: absolute;
      transform: translateY(5px);
      transition: 0.2s all ease-in;
    }

    &.selected::after {
      width: 20px;
    }

    &:hover {
      color: ${props => theme.color.primaryLight};

      &::after {
        width: 20px;
      }
    }
  }

  @media (max-width: 760px) {
    position: fixed;
    z-index: 900;
    background: ${props => theme.color.primary};
    top: 0;
    bottom: 0;
    left: 0;
    flex-direction: column;
    padding: 30px;
    transform: translateX(-100%);

    li + li::before {
      display: none;
    }

    a {
      padding: ${props => theme.fontSize.default};
      display: block;

      &::after {
        display: none;
      }
    }
  }
`

export default StyledMenu
