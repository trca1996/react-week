import Link from 'next/link'

type BobsLinkProps = {
    title: string
    href: string
}

const BobsLink = ({ title, href }: BobsLinkProps) => {
    return <Link href={href}>{title}</Link>
}

export default BobsLink
