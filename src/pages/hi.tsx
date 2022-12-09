import HiPage from 'app/HiPage'

import PrimaryLayout from 'components/layouts/PrimaryLayout'

import { NextPageWithLayout } from './page'

const Hi: NextPageWithLayout = () => {
    return <HiPage />
}

Hi.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export default Hi
