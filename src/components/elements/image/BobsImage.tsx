import styles from './Card.module.css'
import Image from 'next/image'
import ImageProps from 'next/image'
import React from 'react'

export interface BobsImageProps extends ImageProps {
    src: string
}

const BobsImage = ({ src, ...attrs }: BobsImageProps) => {
    return <Image src={src} {...attrs} />
}

export default BobsImage
