import { JSX } from 'react'

function Farewell({ name }: FarewellProps): JSX.Element {
    return <p>`Goodbye, {name}`</p>
}

interface FarewellProps {
    name: string;
}

export default Farewell;