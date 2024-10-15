import styles from '@styles/components/Log/Log.module.scss'

const Log = ({ logs }) => {
    return (
        <ol id="log" className={styles.logContainer}>
            {logs.map((log) => {
                return (
                    <li className={styles.logItem} key={`${log.row}${log.col}`}>
                        {`${log.turn} Selected  {${log.row}, ${log.col}}`}
                    </li>
                )
            })}
        </ol>
    )
}

export { Log }
