import { FC } from "react";
import "./Tooltip.css";

interface ITooltip {
    name: string;
    status: string;
    species: string;
}

export const Tooltip: FC<ITooltip> = ({ name, status, species }) => (
        <ul className="tooltip">
            <li className="tooltip__item">Name: {name}</li>
            <li className="tooltip__item">Status: {status}</li>
            <li className="tooltip__item">Species: {species}</li>
        </ul>
    )