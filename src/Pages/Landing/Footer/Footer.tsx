import React from 'react';
import styles from './Footer.module.scss';

// images
import vkIcon from './../../../Assets/images/icons/vk_icon.svg';
import whatsappIcon from './../../../Assets/images/icons/whatsapp_icon.svg';
import telegramIcon from './../../../Assets/images/icons/telegram_icon.svg';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>

        <div className={styles.contacts}>
          <div className={styles.icons}>
            <img className={styles.icon} src={vkIcon} alt="" />
            <img className={styles.icon} src={whatsappIcon} alt="" />
            <img className={styles.icon} src={telegramIcon} alt="" />
          </div>
          <div className={styles.phones}>
            <div className={styles.phoneItem}>+7 (900) 00 00</div>
            <div className={styles.phoneItem}>+7 (900) 11 88</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Footer);