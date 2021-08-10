import { FC } from 'react'
import preloader from '../../public/img/preloader.png'
import './Preloader.css'

export const Preloader: FC = () => (
  <div className="overlay">
    <img className="preloader" width="150" height="150" src={preloader} alt="preloader" />
  </div>
)
