import styles from './Panel.module.css';
import { useRecoilState } from 'recoil';
import { gridState, sunState, panelState } from '../../store/atoms';
import cn from 'classnames';

export function Panel() {
    const [grid, setGrid] = useRecoilState(gridState);
    const [sun, setSun] = useRecoilState(sunState);
    const [panel, setPanel] = useRecoilState(panelState);

    document.onmousemove = (e) => {
        const t = e.target;
        if (
            t.getAttribute('id') !== 'panel' &&
            t.parentElement.getAttribute('id') !== 'panel' &&
            t.parentElement.parentElement.getAttribute('id') !== 'panel'
        ) {
            if (e.clientX > window.innerWidth - 10) {
                if (panel === false) {
                    setPanel(true);
                }
            } else {
                if (panel === true) {
                    setPanel(false);
                }
            }
        }
    };

    return (
        <div
            id='panel'
            className={cn(styles.panel, {
                [styles.open]: panel === true,
            })}
        >
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
