import { Center, Button, Input, VStack } from "@chakra-ui/react"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText
} from "@chakra-ui/react"
import type { NextPage } from "next"
import { ChangeEvent, useState } from "react"
import Head from "../components/Head"

const Home: NextPage = () => {
    const [move, setMove] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailRegex = "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/"
    const passwordRegex =
        "/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/"

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value.trim())
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
        setPassword(e.target.value.trim())

    const isEmailError = email !== "" && !email.match(emailRegex)
    const isPasswordError = password !== "" && !email.match(passwordRegex)

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
            <VStack>
                <FormControl isInvalid={isEmailError}>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        value={email}
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
                        onChange={handlePasswordChange}
                    />
                    {!isPasswordError ? (
                        <FormHelperText>Enter your password</FormHelperText>
                    ) : (
                        <FormErrorMessage>
                            Password should be between 6 to 16 characters and
                            should contain at least a number, and at least a
                            special character.
                        </FormErrorMessage>
                    )}
                </FormControl>
                <Button id="submit" onMouseOver={onHover}>
                    Submit
                </Button>
            </VStack>
        </Center>
    )
}

export default Home
