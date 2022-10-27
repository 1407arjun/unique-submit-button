import { Center, Button } from "@chakra-ui/react"
import type { NextPage } from "next"
import { useState } from "react"
import Head from "../components/Head"

const Home: NextPage = () => {
    const [move, setMove] = useState(true)

    const onHover = () => {
        const button = document.querySelector("#submit") as HTMLButtonElement

        if (button) {
            button.style.animationPlayState = "paused"
            if (move) button.style.animationName = "move"
            else button.style.animationName = "move-back"
            button.style.animationPlayState = "running"
            setMove(!move)
        }
    }

    return (
        <Center minH="100vh">
            <Head />
            <Button id="submit" onMouseOver={onHover}>
                Submit
            </Button>
        </Center>
    )
}

export default Home
