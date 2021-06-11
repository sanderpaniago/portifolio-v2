import { useEffect, useState } from 'react'

export default function useToggleMessage() {
    const [active, setActive] = useState(false)
    const [play, setPlay] = useState(false)
    

    const delay = (amount = 5000) => new Promise(resolve => setTimeout(resolve, amount))

    useEffect(()=> {
        async function toggle() {
            await delay()

            setActive(!active)
        }
    },[play])

    return {active, onPlay: setPlay}
}