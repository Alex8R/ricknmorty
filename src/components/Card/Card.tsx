import { FC } from 'react'
import { Tooltip } from '../Tooltip/Tooltip'
import './Card.css'

interface ICard {
  image: string
  name: string
  species: string
  status: string
}

export const Card: FC<ICard> = ({ image, name, species, status }) => (
  <div className="wrapper">
    <img className="character" src={image} alt={name} />
    <Tooltip name={name} status={status} species={species} />
  </div>
)
