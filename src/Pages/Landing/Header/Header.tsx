import React from 'react';
import styles from './Header.module.scss';

// images
import logo from './../../../Assets/images/logo2.svg';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.leftBlock}>
          <img className={styles.logo} src={logo} alt="logo" />
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.choice}>
            <div className={styles.choiceItem}>Я студент</div>
            <div className={styles.choiceItem}>Я школьник</div>
          </div>
          <div className={styles.nav}>
            <div className={styles.navItem}>О НАС</div>
            <div className={styles.navItem}>ОБУЧЕНИЕ</div>
            <div className={styles.navItem}>КОНТАКТЫ</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Header);
