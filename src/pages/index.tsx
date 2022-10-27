import {
    Container,
    Button,
    Input,
    VStack,
    Center,
    Heading
} from "@chakra-ui/react"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText
} from "@chakra-ui/react"
import type { NextPage } from "next"
import { ChangeEvent, useEffect, useState } from "react"
import Head from "../components/Head"

const Home: NextPage = () => {
    const [move, setMove] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [disabled, setDisabled] = useState(false)

    const emailRegex =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value.trim())
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
        setPassword(e.target.value.trim())

    const isEmailError = email !== "" && !emailRegex.test(email)
    const isPasswordError = password !== "" && !passwordRegex.test(password)

    let timers: NodeJS.Timeout[] = []

    const onHover = (check = false) => {
        if (
            check ||
            isEmailError ||
            isPasswordError ||
            email === "" ||
            password === ""
        ) {
            const button = document.querySelector(
                "#submit"
            ) as HTMLButtonElement

            if (button) {
                button.style.animationPlayState = "paused"
                if (move) button.style.animationName = "move"
                else button.style.animationName = "move-back"
                button.style.animationPlayState = "running"
                setMove(!move)
            }
        }
    }

    return (
        <Container minH="100vh" maxW="container.sm">
            <Head />
            <VStack p={{ base: 8, md: 16 }} spacing={4}>
                <Heading mb={{ base: 4, md: 8 }} textAlign="center">
                    Unique Submit Button
                </Heading>
                <FormControl isInvalid={isEmailError}>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        value={email}
                        autoComplete="off"
                        onChange={handleEmailChange}
                    />
                    {!isEmailError ? (
                        <FormHelperText>Enter your email</FormHelperText>
                    ) : (
                        <FormErrorMessage>Invalid email</FormErrorMessage>
                    )}
                </FormControl>
                <FormControl isInvalid={isPasswordError}>
                    <FormLabel>Password</FormLabel>
                    <Input
                        type="password"
                        value={password}
                        autoComplete="off"
                        onChange={handlePasswordChange}
                    />
                    {!isPasswordError ? (
                        <FormHelperText>Enter your password</FormHelperText>
                    ) : (
                        <FormErrorMessage>
                            Password should of at least 8 characters and should
                            contain at least one uppercase letter, a number and
                            a special character.
                        </FormErrorMessage>
                    )}
                </FormControl>
                <Button
                    onAnimationStart={() => {
                        setDisabled(true)
                        if (move) timers.forEach((t) => clearTimeout(t))
                    }}
                    onAnimationEnd={() => {
                        setDisabled(false)
                        if (!move)
                            timers.push(
                                setTimeout(() => {
                                    if (!move) onHover(true)
                                }, 2000)
                            )
                    }}
                    id="submit"
                    onMouseOver={() => {
                        if (!disabled) onHover()
                    }}
                    alignSelf="end"
                    colorScheme="messenger"
                    size={{ base: "sm", md: "md" }}
                    onClick={() => {
                        if (
                            email !== "" &&
                            password !== "" &&
                            !isEmailError &&
                            !isPasswordError
                        )
                            alert("Success")
                    }}>
                    Submit
                </Button>
            </VStack>
        </Container>
    )
}

export default Home
