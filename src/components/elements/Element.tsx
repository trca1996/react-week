type Props = {
    value: any
}

const Element = ({ value }: Props) => {
    // check value for instance
    // check tye of value
    return <>{value ? value : null}</>
}

export default Element
