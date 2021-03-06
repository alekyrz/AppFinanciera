import React from 'react';

import styles from './index.module.css';

function TitleGames(props) {
  const {
    title,
    subtitle,
  } = props;
  return (
    <div className={styles.card}>
      <div className={styles.body}>
         <h1 className={styles.title}>
          { title }
        </h1>
        <h2 className={styles.subtitle}>
          { subtitle }
        </h2>      
      </div>
    </div>
  )
}

export default TitleGames;