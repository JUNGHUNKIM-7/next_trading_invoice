import type { NextPage } from 'next'
import m from '../../src/components/dashboard/dash-board.module.scss'
import DashboardLayout from '../../src/components/dashboard/dashboard-layout'
import DashBoard from '../../src/wrappers/dash-board'

const Index: NextPage = () => {
    return (
        <DashboardLayout>
            <main>
                <DashBoard />
            </main>
        </DashboardLayout>
    )
}

export default Index
