import { atom, selector } from 'recoil';

/**
 * Atom that stores empty string.
 */
export const exampleAtom = atom<string>({
  key: `exampleAtom`,
  default: ``,
});

/**
 * Returns an empty array.
 */
export const exampleSelector = selector({
  key: `exampleSelector`,
  get: ({ get }) => [],
});
