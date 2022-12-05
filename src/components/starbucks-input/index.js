const StarbucksInput = ({ name, value, onChange, error }) => {
    return(
        <>
            <label htmlFor="nickname-id">Nickname :</label>    
            <input 
                name={name}
                id="nickname-id"
                value={value}
                type="text"
                onChange={(e) => onChange(e.target.value)}
            />
            { error && <span>{error}</span> }
        </>)
}

export default StarbucksInput;