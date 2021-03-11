export default function FilterForm(props) {
    // react inline style
    // camelCase or strings work
    const formStyles = {
        border: '.3em solid green',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    return(
        <div style={formStyles}>
            <form onSubmit={props.handleFruitSubmit}>
                <label htmlFor='fruit-filter'>Fruit Time!</label>
                <input 
                    type='text'
                    value={props.fruitInputValue}
                    onChange={props.handleFruitChange}
                    placeholder='Enter a fruit 🍊' 
                />

                <input
                    type='submit'
                    value='Submit to the FRUIT'
                />
            </form>
        </div>
    )
}