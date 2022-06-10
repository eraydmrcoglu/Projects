import React from 'react'
import clsx from 'clsx'
import styles from './index.module.scss'
import rulesImg from '../../images/image-rules.svg'
import close from '../../images/icon-close.svg'

export default function Rules(props) {
    const { clickRules, rules, isPlay } = props
    return (
        <>
            <div onClick={clickRules} className={clsx(styles.rulesBtn,
                {
                    [styles.play]: isPlay
                }
            )}>
            <p>
                KURALLAR
            </p>
            </div>
            { rules && <div className={clsx(styles.overlay)}>
                <div className={clsx(styles.overlay__rules)}>
                    <div className={clsx(styles.overlay__rules__title)}>
                        <p>KURALLAR</p>
                        <div onClick={clickRules} >
                            <img src={close} alt="close"/>
                        </div>
                    </div>
                    <div className={clsx(styles.overlay__rules__img)}>
                        <img src={rulesImg} alt="rules"/>
                    </div>
                </div>
            </div>
            }
            
        </>
        
    )
}
