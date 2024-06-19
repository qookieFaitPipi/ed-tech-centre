import React from 'react';
import styles from './Steps.module.scss';

// images
import vector from './../../../Assets/images/background/stepsVector.svg';
import cup from './../../../Assets/images/icons/cup.svg';

// components
import Step from './Step/Step';

const Steps: React.FC = () => {
  return (
    <div className={styles.steps} style={{backgroundImage: `url(${vector})`}}>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.row1}>
            <div className={styles.title}>Как мы поможем Вам добиться самых <br/> высоких результатов?</div>
            <Step title="Немножко Вашего желания обучаться..." text="" />
          </div>
          <div className={styles.row}>
            <Step title="Удобная  платформа" text="Всю теории, практические задания, конспекты и др. даем вам в личном кабинете" />
            <Step title="Обучающие семнары" text="Каждый месяц встречи с топовыми специалистами и преподавателями ведущих ВУЗов нашей страны" />
            <Step title="Много-много практики" text="Возможность получить теоретические знания и научиться их применять" />
          </div>
          <div className={styles.row}>
            <Step title="Персональный менеджер" text="Оперативная помощь ученику по любым техническим и организационным вопросам" />
            <Step title="Онлайн  занятия" text=" Удобный и наиболее комфортный формат обучения не выходя из дома" />
            <Step title="Разные форматы обучения" text="Индивидуальные и групповые занятия" />
            <Step title="Авторские методики" text="Разработанные нашими сотрудниками планы комфортного обучения" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Steps);