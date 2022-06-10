import React from 'react'
import clsx from 'clsx'
import styles from './index.module.scss'

export default function Result(props) {
    const { clickPlayAgain, text } = props
    return (
      <div className={clsx(styles.result__wrapper)}>
        <div className={clsx(styles.result__wrapper__left)}>
          <p>SEÇTiĞİN</p>
          {props.children[0]}
        </div>
        <div className={clsx(styles.result__wrapper__center)}>
          <span>{text}</span>
          <div
            onClick={clickPlayAgain}
            className={clsx(styles.result__wrapper__center__again)}
          >
            <p>TEKRAR OYNA</p>
          </div>
        </div>
        <div className={clsx(styles.result__wrapper__right)}>
          <p>RAKİBİN SEÇTİĞİ</p>
          {props.children[1]}
        </div>
      </div>
    );
}
