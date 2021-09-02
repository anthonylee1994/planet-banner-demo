import { atom } from 'jotai';

export const loginDrawerVisibleAtom = atom<boolean>(false);

export const toggleLoginDrawerAtom = atom(null, (get, set) =>
  set(loginDrawerVisibleAtom, !get(loginDrawerVisibleAtom)),
);

export const closeLoginDrawerAtom = atom(null, (get, set) =>
  set(loginDrawerVisibleAtom, false),
);
