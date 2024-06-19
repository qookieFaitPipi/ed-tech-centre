import React from 'react';
import styles from './Areas.module.scss';

// images
import vector from './../../../Assets/images/background/areasVector2.svg';

// components
import Area from './Area/Area';

// images
import icon1 from './../../../Assets/images/areas/icon1.svg';
import icon2 from './../../../Assets/images/areas/icon2.svg';
import icon3 from './../../../Assets/images/areas/icon3.svg';
import icon4 from './../../../Assets/images/areas/icon4.svg';
import icon5 from './../../../Assets/images/areas/icon5.svg';
import icon6 from './../../../Assets/images/areas/icon6.svg';
import icon7 from './../../../Assets/images/areas/icon7.svg';
import icon8 from './../../../Assets/images/areas/icon8.svg';
import icon9 from './../../../Assets/images/areas/icon9.svg';
import icon10 from './../../../Assets/images/areas/icon10.svg';

const Areas = () => {
  return (
    <div className={styles.areas} style={{backgroundImage: `url(${vector})`}} id='scrollAreas'>
      <div className={styles.content}>
        <div className={styles.row}>
          <Area name="Математика" image={icon1} />
          <Area name="Информатика" image={icon2} />
          <Area name="Физика" image={icon3} />
          <Area name="География" image={icon4} />
        </div>
        <div className={styles.row}>
          <Area name="Биология" image={icon5} />
          <div className={styles.title}>Направления подготовки</div>
          <Area name="Химия" image={icon6} />
        </div>
        <div className={styles.row}>
          <Area name="История" image={icon7} />
          <Area name="Обществознание" image={icon8} />
          <Area name="Английский язык" image={icon9} />
          <Area name="Русский язык" image={icon10} />
        </div>
      </div>
    </div>
  )
}

export default React.memo(Areas);