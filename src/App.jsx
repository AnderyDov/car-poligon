import { Panel, Poligon } from './component';
import { RecoilRoot } from 'recoil';

export default function App() {
    return (
        <RecoilRoot>
            <Poligon />
            <Panel />
        </RecoilRoot>
    );
}
