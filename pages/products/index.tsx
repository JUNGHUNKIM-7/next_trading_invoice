import type { NextPage } from 'next'
import PageController from '../../src/components/pages/pageController'

const Index: NextPage = () => {
    return (
        <div>
            <PageController title={'products'} />
        </div>
    )
}

export default Index
