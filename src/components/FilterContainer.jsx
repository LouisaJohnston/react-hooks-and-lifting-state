import { useEffect, useState } from 'react'

import FilterForm from './FilterForm'
import FruitList from './FruitList'

export default function FilterContainer() {
    // the shared state will live here
    const [fruits, setFruits] = useState([
        'pineapple',
        'mango',
        'banana',
        'apple',
        'kiwi',
        'pear',
        'strawberry'
    ])
    // add state value for input
    const [fruitInputValue, setFruitInputValue] = useState('')

    // debug check that state is updating
    useEffect(() =>{
        setFruitInputValue('')
    }, [fruits])

    // add submit event handler
    const handleFruitSubmit = e => {
        e.preventDefault()
        // only let fruits pass that do not equal the input value
        // from the form
        const filteredFruit = fruits.filter(fruit => {
            return fruit !== fruitInputValue
        })

        setFruits(filteredFruit)
    }

    // add change event handler
    const handleFruitChange = e => {
        setFruitInputValue(e.target.value)
    }


    return(
        <div className='filter-container'>
            <FilterForm 
                handleFruitChange={handleFruitChange}
                fruitInputValue={fruitInputValue}
                handleFruitSubmit={handleFruitSubmit}
            />
            <FruitList fruits={fruits}/>
        </div>
    )
}