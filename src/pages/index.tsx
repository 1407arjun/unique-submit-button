import { Center, Button } from "@chakra-ui/react"
import type { NextPage } from "next"
import { useEffect, useState } from "react"
import Head from "../components/Head"

const onHover = () => {
    let boolean = true
    const button = document.querySelector("button")

    if (button)
        button.addEventListener("mouseover", (ev) => {
            console.log(1)
        })
}

const Home: NextPage = () => {
    return (
        <Center minH="100vh">
            <Head />
            <Button>Submit</Button>
        </Center>
    )
}

export default Home
