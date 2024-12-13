import styles from '@styles/components/Header/Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.appTitle}>Tic Tac Toe</h1>
        </header>
    )
}

export { Header }
