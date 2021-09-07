import type { NextPage } from 'next'
import { PageProps } from '../docsRoute'
import HeaderPI from '../sub-components/invoices/header-PI'
import Body from '../sub-components/invoices/body'
import Footer from '../sub-components/invoices/footer'
import l from './styles/docs-grid.module.scss'

const ProformaInvoice: NextPage<Pick<PageProps, 'title'>> = ({ title }) => {
    return (
        <div className={l.gridWrapper}>
            <h3 className={l.gridWrapper__title}>
                {title?.replaceAll('-', ' ')}
            </h3>

            <div className={l.gridWrapper__pageBody}>
                <HeaderPI />
                <Body />
                <Footer />
            </div>
        </div>
    )
}

export default ProformaInvoice
