import React from 'react'
import PropTypes from 'prop-types'
import { StyledRankingRow } from './style'
import avatarSvg from '../../../assets/avatar.svg'

const RankingRow = ({ position, name, avatar, level, xp }) => (
  <StyledRankingRow>
    <div className="ranking">{position}º</div>
    <div className="userInfo">
      {avatar ? (
        <img
          src={avatar}
          alt=""
          onError={e => {
            e.target.onerror = null
            e.target.src = avatarSvg
          }}
        />
      ) : (
        <img src={avatarSvg} alt={name} />
      )}
      <p>{name}</p>
    </div>
    <div className="level">{level}</div>
    <div className="xp">{xp}</div>
  </StyledRankingRow>
)

RankingRow.propTypes = {
  position: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  xp: PropTypes.number.isRequired
}

export default RankingRow
