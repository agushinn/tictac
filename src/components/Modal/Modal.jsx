import ReactDOM from 'react-dom'

import styles from '@styles/components/Modal/Modal.module.scss'

const Backdrop = ({ onAccept }) => {
    return <div className={styles.backdrop} onClick={onAccept}></div>
}

const ModalOverlay = ({ onAccept, result }) => {
    return (
        <div className={styles.modalOverlay}>
            <h3 className={styles.modalTitle}>Game Over!</h3>
            <p className={styles.modalResult}>{result}</p>
            <button className={styles.modalRematchButton} onClick={onAccept}>
                Rematch!
            </button>
        </div>
    )
}

const Modal = ({ onAccept, result }) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onAccept={onAccept} />,
                document.getElementById('backdrop-root')
            )}

            {ReactDOM.createPortal(
                <ModalOverlay onAccept={onAccept} result={result} />,
                document.getElementById('overlay-root')
            )}
        </>
    )
}

export { Modal }
