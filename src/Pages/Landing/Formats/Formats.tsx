import React from 'react';
import styles from './Formats.module.scss';

// images
import icon1 from './../../../Assets/images/formats/icon1.svg';
import classes from './../../../Assets/images/icons/class.svg';

// components
import Format from './Format/Format';

const Formats = () => {
  return (
    <div className={styles.formats}>
      <div className={styles.content}>
        <div className={styles.row1}>
          <div className={styles.title}>Мы подберём формат обучения, который подходит именно Вам по всем критериям.</div>
          <div style={{display: 'flex'}}>
            <Format title="Подготовка к ЕГЭ" text="Индивидуальные и групповые занятия по подготовке для учеников 10-11 классов" price="1 475  ₽/ак.час" image={icon1} />
            <Format title="Подготовка к ОГЭ" text="Индивидуальные и групповые занятия по подготовке для учеников 8-9 классов" price="1 245  ₽/ак.час" image={icon1} />
            <Format title="Подготовка к ВПР" text="Индивидуальные и групповые занятия по подготовке для учеников 5-11 классов" price="1 245  ₽/ак.час" image={icon1} />
          </div>
        </div>
        <div className={styles.row2}>
          <div className={styles.iconBlock}>
            <img className={styles.icon} src={classes} alt="" />
          </div>
          <div className={styles.fff} style={{display: 'flex'}}>
            <Format title="https://www.youtube.com/watch?v=dQw4w9WgXcQ" text="" price="" image="" />
            <Format title="Олимпиадная подготовка" text="Индивидуальные и групповые занятия" price="1 475  ₽/ак.час" image={icon1} />
            <Format title="Основной курс" text="Индивидуальные занятия с репетиторами 5 – 8 класс" price="1 475  ₽/ак.час" image={icon1} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Formats);