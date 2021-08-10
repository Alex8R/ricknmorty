import { Dispatch, FC, SetStateAction } from 'react'
import "./SearchBar.css"

interface ISearchBar {
  value: string
  setSearchValue: Dispatch<SetStateAction<string>>
}

export const SearchBar: FC<ISearchBar> = ({ value, setSearchValue }) => (
  <input
    className="searchbar"
    placeholder="Type character name"
    type="text"
    maxLength={50}
    value={value}
    onChange={(e) => setSearchValue(e.target.value)}
  />
)
