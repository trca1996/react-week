import React, { CSSProperties } from 'react'

interface HeadingProps {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    title?: string
    styles: CSSProperties
}

const Heading = ({ variant, title, styles }: HeadingProps) => {
    return title ? React.createElement(variant, { styles }, title) : null
}

export default Heading
