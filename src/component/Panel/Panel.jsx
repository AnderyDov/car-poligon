import styles from './Panel.module.css';
import { useRecoilState } from 'recoil';
import { gridState, sunState } from '../../store/atoms';

export function Panel() {
    const [grid, setGrid] = useRecoilState(gridState);
    const [sun, setSun] = useRecoilState(sunState);

    return (
        <div className={styles.panel}>
            <span>
                <input
                    type='checkbox'
                    checked={grid}
                    onChange={() => setGrid(!grid)}
                />
                Сетка
            </span>
            <span>
                <input
                    type='checkbox'
                    checked={sun}
                    onChange={() => setSun(!sun)}
                />
                Время суток
            </span>
        </div>
    );
}
