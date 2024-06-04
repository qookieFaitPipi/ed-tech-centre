import React from 'react';
import styles from './Advantages.module.scss';

// images
import vector from './../../../Assets/images/background/advantagesVector.svg';

const Advantages = () => {
  return (
    <div className={styles.advantages} style={{backgroundImage: `url(${vector})`}}>
      <div className={styles.content}>
        <div className={styles.title}>Почему вы должны выбрать именно нас?</div>
        
        <div className={styles.container}>
          <div className={styles.leftBlock}>
            <div className={styles.helloTitle}>Давайте немного познакомимся</div>
            <div className={styles.helloText}>Также как экономическая повестка сегодняшнего дня, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений. Каждый из нас понимает очевидную вещь: начало повседневной работы по формированию позиции говорит о возможностях вывода текущих активов. Но начало повседневной работы по формированию позиции требует определения и уточнения системы обучения кадров, соответствующей насущным потребностям. Внезапно, явные признаки победы институционализации лишь добавляют фракционных разногласий и призваны к ответу.Также как экономическая повестка сегодняшнего дня, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений. Каждый из нас понимает очевидную вещь: начало повседневной работы по формированию позиции говорит о возможностях вывода текущих активов.</div>
          </div>
          <div className={styles.rightBlock}>
            <div className={styles.factSmall}>Факт1</div>
            <div className={styles.factSmall}>Факт2</div>
            <div className={styles.factSmall}>Факт3</div>
            <div className={styles.factLarge}>Факт4</div>
            <div className={styles.factSmall}>Факт5</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Advantages);