import React from 'react';
import styles from './Format.module.scss';

// types
import { FormatType } from '../../../../@types/types';

const Format: React.FC<FormatType> = ({title, text, image, price}) => {
  return (
    <div className={styles.format}>
      <div className={styles.content}>
        <img className={styles.icon} src={image} alt="icon" />
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
        <div className={styles.price}>{price}</div>
      </div>
    </div>
  )
}

export default React.memo(Format);