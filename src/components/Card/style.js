import styled from 'styled-components'
import theme from '../../styles/theme'

const StyledCard = styled.div`
  background-color: ${theme.color.white};
  color: ${theme.color.gray};
  padding: 40px;
  border-radius: ${theme.fontSize.medium};
  margin: auto;
  box-shadow: 8px 8px 60px rgba(0, 0, 0, 0.2);
  max-width: 640px;
  text-align: left;
  position: relative;
  height: 100%;

  h1 {
    color: ${theme.color.primary};
  }

  ${props =>
    props.large &&
    `
    text-align: center;
    padding: 60px 60px 80px;

    h1 {
      margin-top: 30px;
    }
  `}

  .cardIcon {
    background-color: ${theme.color.white};
    margin: -100px auto 50px;
    display: block;
    padding: 14px;
    width: fit-content;
    border-radius: 100%;
  }

  .cardIcon i {
    font-size: ${theme.fontSize.super};
    color: ${theme.color.white};
    background: ${theme.color.primary};
    border-radius: 100%;
    padding-top: 5px;
    display: block;
    width: 108px;
    height: 109px;
  }

  @media (max-width: 760px) {
    padding: 12px 12px 20px;
    margin: 15px;

    .cardIcon {
      margin: -40px auto 20px;
      padding: 5px;
    }

    .cardIcon i {
      font-size: 60px;
      width: 68px;
      height: 69px;
    }
  }
`

export const StyledUserCard = styled.div`
  background-color: ${theme.color.white};
  min-height: 413px;
`

export default StyledCard
