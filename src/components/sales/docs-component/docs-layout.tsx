import type { NextPage } from 'next'
import { useRouting } from '../../../utils/route/routing'
import { BiLeftArrowCircle } from 'react-icons/bi'
import p from './styles/docsLayout.module.scss'

const DocsLayout: NextPage = ({ children }) => {
    const { routerBack } = useRouting()

    return (
        <div className={p.pageWrapper}>
            <div className={p.pageWrapper__back}>
                <div className={p.pageWrapper__back__btn} onClick={routerBack}>
                    <BiLeftArrowCircle size={35} />
                    <p>back to previous page</p>
                </div>

                <div>
                    <button>logout</button>
                </div>
            </div>

            {children}
        </div>
    )
}

export default DocsLayout
