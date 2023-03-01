import styles from './Panel.module.css';

export function Panel() {
    return (
        <div className={styles.panel}>
            <span>
                <input type='checkbox' />
                Сетка
            </span>
        </div>
    );
}
