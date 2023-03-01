import styles from './Panel.module.css';
import { useRecoilState } from 'recoil';
import { gridState } from '../../store/atoms';

export function Panel() {
    const [grid, setGrid] = useRecoilState(gridState);

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
        </div>
    );
}
