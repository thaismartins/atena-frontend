import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from '@rebass/grid'
import avatarSvg from '../../assets/avatar.svg'
import { StyledUserCard, Container, Position, Info, Point } from './style'

const UserCard = ({ position, name, avatar, xp, level, first }) => (
  <StyledUserCard first={first}>
    <Container>
      <figure>
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
      </figure>
      <Position>{position}º</Position>
      <Info>
        <h1>{name}</h1>
        <Flex justifyContent="center">
          <Point border>
            LEVEL
            <p>{level}</p>
          </Point>
          <Point>
            XP
            <p>{xp}</p>
          </Point>
        </Flex>
      </Info>
    </Container>
  </StyledUserCard>
)

UserCard.propTypes = {
  position: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  xp: PropTypes.number.isRequired,
  first: PropTypes.bool
}

export default UserCard
