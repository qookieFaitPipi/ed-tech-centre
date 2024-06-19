import React from 'react';
import styles from './Help.module.scss';
import { Link } from 'react-router-dom';

const Help = () => {
  return (
    <div className={styles.help}>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.title}>Остались вопросы? <br/>Получите персональную консультацию</div>
          <Link to="https://t.me/NSarch1"  className={styles.button}>Оставить заявку</Link>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Help);