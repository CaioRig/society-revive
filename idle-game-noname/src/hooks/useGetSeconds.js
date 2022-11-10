import { useEffect, useState } from "react"

const useGetSeconds = () => {
    const [second, setSecond] = useState()

    useEffect(() => {
        setInterval(() => {
            const date = new Date().getSeconds()
            setSecond(date)
        }, 1000);
    }, [])

    return second
}

export default useGetSeconds;