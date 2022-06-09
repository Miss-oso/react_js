import styles from './profile.module.css'

export const ProfilePage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.col - 12}>
              <h2>Контакты для связи</h2>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.col - 12}>
              <p>Phone: +7 (343) 132-65-03</p>
              <p>
                Email: <a href="mailto: #">react@test.com</a>
              </p>
              <p>Skype: nickname</p>
              <p>Telegram: @telegram</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}