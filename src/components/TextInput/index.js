import './style.css'

export default function TextInput({ searchValue, handleChange, handleClick }) {
    return (
        <div className="search-container">
            <input
                onChange={handleChange}
                value={searchValue}
                type="search"
                placeholder="Type the pokemon name..."
            />
            <button title="search" onClick={handleClick}>
                <p>Get</p>
            </button>

        </div>
    )
}