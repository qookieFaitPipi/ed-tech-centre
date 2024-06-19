import React from 'react';
import styles from './About.module.scss';

// images
import vector from './../../../Assets/images/background/aboutVector2.svg';
import a from './../../../Assets/images/about4.svg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <img className={styles.mainImage} src={a} alt="about" />
        <div className={styles.buttonBlock}>
          <Link to="https://t.me/NSarch1" className={styles.button}>Оставить заявку</Link>
        </div>
      </div>
    </div>
  )
}

export default React.memo(About);