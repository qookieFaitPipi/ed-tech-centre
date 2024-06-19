import React from 'react';
import styles from './Step.module.scss';

// types
import { StepType } from '../../../../@types/types';

const Step: React.FC<StepType> = ({title, text}) => {
  return (
    <div className={styles.step}>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>

        <div className={styles.text}>{text}</div>
      </div>
    </div>
  )
}

export default React.memo(Step);