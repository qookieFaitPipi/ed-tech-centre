import React from 'react';
import styles from './Advantages.module.scss';

// images
import vector from './../../../Assets/images/background/advantagesVector.svg';

const Advantages = () => {
  return (
    <div className={styles.advantages} style={{backgroundImage: `url(${vector})`}} id='scrollAbout'>
      <div className={styles.content}>
        <div className={styles.title}>Почему вы должны выбрать именно нас?</div>
        <div className={styles.container}>
          <div className={styles.leftBlock}>
            <div className={styles.helloTitle}>Давайте немного познакомимся</div>
            <div className={styles.helloText}>Мы команда специалистов с опытом работы с детьми и преподаванием более 4-х лет, осуществляем подготовку детей к ОГЭ и ЕГЭ, а также к олимпиадам по математике и физике. Наши ученики победители и призеры всероссийских олимпиад по школьным предметам, победители и призеры по компетенциям чемпионата «Профессионалы» и «Искатели профессий», а также по олимпиаде НТО. Имеем соглашения о сотрудничестве с ведущими ВУЗами Санкт-Петербурга, благодаря которым имеем возможность знакомить детей со специальностями и проводить подготовку на высоком уровне. Наши программы сертифицированы. Есть программы в рамках которых возможно обучение сотрудников предприятий. Также наши преподаватели являются сотрудниками Госкорпорации «Росатом» и знают о инженерных специальностях не понаслышке.</div>
          </div>
          <div className={styles.rightBlock}>
            <div className={styles.factSmall}>Отзывчивые преподаватели</div>
            <div className={styles.factSmall}>Ученики занимают призовые места на олимиадах</div>
            <div className={styles.factSmall}>Сертифицированные образовательные программы</div>
            <div className={styles.factLarge}>Преподаватели нашей команды являются сотрудниками Госкорпорации «Росатом»</div>
            <div className={styles.factSmall}>Команда специалистов с более чем 4-летним опытом работы</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Advantages);