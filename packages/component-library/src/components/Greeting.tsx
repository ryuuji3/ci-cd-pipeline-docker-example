import { JSX } from 'react'

function Greeting({ name }: GreetingProps): JSX.Element {
    return <p>`Hello, {name}`</p>
}

interface GreetingProps {
    name: string;
}

export default Greeting;