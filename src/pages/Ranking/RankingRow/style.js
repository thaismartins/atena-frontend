import styled from 'styled-components'
import { RankingHeader } from '../styles'
import theme from '../../../styles/theme'

export const StyledRankingRow = styled(RankingHeader)`
  background-color: ${theme.color.white};
  height: 107px;
  box-shadow: 8px 8px 60px 0px rgba(0, 0, 0, 0.08);
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  .ranking {
    color: #666c71;
    text-align: center;
    align-self: center;
  }

  .userInfo {
    display: flex;
    padding-left: 10px;
    color: #666c71;
    align-self: center;
    align-items: center;
    border-right: solid 1px #e2e2e2;
    border-left: solid 1px #e2e2e2;
    img {
      max-width: 60px;
      max-height: 60px;
      border-radius: 50%;
    }
    p {
      padding-left: 18px;
    }
  }
  .level {
    color: #666c71;
    text-align: center;
    align-self: center;
    border-right: solid 1px #e2e2e2;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .xp {
    color: #666c71;
    text-align: center;
    align-self: center;
  }
`
