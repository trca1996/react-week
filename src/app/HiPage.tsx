import { useEffect, useState } from 'react'

import User from 'lib/models/User'

type Props = {}

const HiPage = (_props: Props) => {
    // Old way of maintaining a state to update it once the data is fetched
    const [users, _setUsers] = useState<User | null>()

    useEffect(() => {}, [])

    // Check if data is undefined then handle loading state
    if (!users) return <h5>Loading...</h5>

    return <div>Hi</div>
}

export default HiPage
