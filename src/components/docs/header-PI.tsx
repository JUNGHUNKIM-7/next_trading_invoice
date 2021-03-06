import type { NextPage } from 'next'
import l from '../../wrappers/docs-grid.module.scss'

const HeaderPI: NextPage = () => {
    return (
        <div className={l.gridWrapper__pageBody__mainHeaderPI}>
            <section className={l.gridWrapper__pageBody__mainHeaderPI__left}>
                <article
                    className={
                        l.gridWrapper__pageBody__mainHeaderPI__left__header
                    }
                >
                    <label>seller</label>
                    <div>
                        <textarea></textarea>
                    </div>
                </article>

                <article
                    className={
                        l.gridWrapper__pageBody__mainHeaderPI__left__body
                    }
                >
                    <label>buyer</label>
                    <div>
                        <textarea></textarea>
                    </div>
                </article>

                <article
                    className={
                        l.gridWrapper__pageBody__mainHeaderPI__left__footer
                    }
                >
                    <div>
                        <div>
                            <label>method of dispatch</label>
                            <input />
                        </div>

                        <div>
                            <label>port of loading</label>
                            <input />
                        </div>
                    </div>

                    <div>
                        <div>
                            <label>type of shipment</label>
                            <input />
                        </div>

                        <div>
                            <label>port of discharge</label>
                            <input />
                        </div>
                    </div>
                </article>
            </section>

            <section className={l.gridWrapper__pageBody__mainHeaderPI__right}>
                <article
                    className={
                        l.gridWrapper__pageBody__mainHeaderPI__right__header
                    }
                >
                    <div
                        className={
                            l.gridWrapper__pageBody__mainHeaderPI__right__header__pages
                        }
                    >
                        <label>pages</label>
                        <label>1 of 1</label>
                    </div>

                    <div
                        className={
                            l.gridWrapper__pageBody__mainHeaderPI__right__header__flex
                        }
                    >
                        <div>
                            <label>invoice number</label>
                            <input />
                        </div>

                        <div>
                            <label>date</label>
                            <input />
                        </div>
                    </div>
                </article>

                <article
                    className={
                        l.gridWrapper__pageBody__mainHeaderPI__right__body
                    }
                >
                    <label>delivery date</label>
                    <input />
                </article>

                <article
                    className={
                        l.gridWrapper__pageBody__mainHeaderPI__right__footer
                    }
                >
                    <label>term / method of payment</label>
                    <div>
                        <textarea></textarea>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default HeaderPI
