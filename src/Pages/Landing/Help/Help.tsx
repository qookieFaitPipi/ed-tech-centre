import React from 'react';
import styles from './Help.module.scss';

const Help = () => {
  return (
    <div className={styles.help}>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.title}>Остались вопросы? <br/>Получите персональную консультацию</div>
          <div className={styles.button}>Оставить заявку</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Help);