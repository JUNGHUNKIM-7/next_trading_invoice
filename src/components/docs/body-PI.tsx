import type { NextPage } from 'next'
import l from '../../wrappers/docs-grid.module.scss'

const BodyPI: NextPage = () => {
    return (
        <div className={l.gridWrapper__pageBody__mainBodyPI}>
            <div className={l.gridWrapper__pageBody__mainBodyPI__elems}>
                <div
                    className={l.gridWrapper__pageBody__mainBodyPI__elems__left}
                >
                    <div>
                        <label>product code</label>
                        <input />
                    </div>
                    <div>
                        <label>description of goods</label>
                        <input />
                    </div>
                </div>

                <div
                    className={
                        l.gridWrapper__pageBody__mainBodyPI__elems__right
                    }
                >
                    <div>
                        <label>unit qty</label>
                        <input />
                    </div>
                    <div>
                        <label>type</label>
                        <input />
                    </div>
                    <div>
                        <label>price</label>
                        <input />
                    </div>
                    <div>
                        <label>amount</label>
                        <input />
                    </div>
                </div>
            </div>

            <footer className={l.gridWrapper__pageBody__mainBodyPI__bodyFooter}>
                <div>
                    <label>consignment total</label>
                </div>
                <div>
                    <div>0</div>
                    <div>0.00</div>
                </div>
            </footer>

            <div className={l.gridWrapper__pageBody__mainBodyPI__btnWrapper}>
                <button>+ add another line</button>
                <button>+ import lines</button>
            </div>
        </div>
    )
}

export default BodyPI
