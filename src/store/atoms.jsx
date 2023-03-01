import { atom } from 'recoil';

export const gridState = atom({
    key: 'gridState',
    default: true,
});

export const sunState = atom({
    key: 'sunState',
    default: false,
});

export const panelState = atom({
    key: 'panelState',
    default: true,
});
