import React, { useState } from 'react';
import styles from './Area.module.scss';

import { AreaType } from '../../../../@types/types';

const Area: React.FC<AreaType> = ({name, image}) => {
  const [areaState, setAreaState] = useState<boolean>(false);

  return (
    <div className={styles.area}>
      <div className={styles.content}>
        <object className={styles.image} id="svgObject" type="image/svg+xml" data={image}></object>
        {/*<img className={styles.image} src={image} alt="area" />*/}
        <div className={styles.name}>{name}</div>
      </div>
    </div>
  )
}

export default React.memo(Area);