import React from 'react';
import styles from './About.module.scss';

// images
import vector from './../../../Assets/images/background/aboutVector2.svg';
import a from './../../../Assets/images/about4.svg';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <img className={styles.mainImage} src={a} alt="about" />
        <div className={styles.buttonBlock}>
          <div className={styles.button}>Оставить заявку</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(About);