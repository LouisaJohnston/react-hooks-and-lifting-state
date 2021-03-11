import { useState, useEffect } from 'react'

export default function Counter() {
    // useState hook returns state value and function to set the state
    const [count, setCount] = useState(1)
    // example of having an object
    const [user] = useState({ name: 'Louisa' })


    // useEffect hooks
    // useEffect runs after every render
    useEffect(() => {
        console.log('after every render')
        console.log(count)


        // ...return callback is invoked on unmount like componentWillMount
        return () => {
            console.log('on every unmount')
        }
    })

    // you can have more than one useEffect hook!
    // ...unless you pass it a variable in an array as a second arg
    useEffect(() => {
        console.log('i only go when user changes!')
    }, [user])

    // ...or you tell it to watch nothing...so it only runs once!
    useEffect(() => {
        console.log('I only run once!')
        return () => {
            console.log('I will never run!')
        }
    }, [])

    // Event handlers
    const handleIncreaseCount = () => {
        // setCount is still async
        setCount(count + 1)
    }

    return (
        <div>
            <h1>Hello Functional Components!</h1>

            <h2>the count is {count}</h2>

            <h3>Hello {user.name}! Are you loving functional components?</h3>

            <button onClick={handleIncreaseCount}>Increase The Count!</button>
        </div>
    )
}