import { createLittera } from '@assembless/react-littera';

const LOCALES = [`en_US`, `de_DE`, `pl_PL`] as const;

const PRESET = {
  en_US: {
    language: `Language`,
    yes: `Yes`,
    no: `No`,
  },
  pl_PL: {
    language: `Język`,
    yes: `Tak`,
    no: `Nie`,
  },
  de_DE: {
    language: `Sprache`,
    yes: `Ja`,
    no: `Nein`,
  },
};
const { LitteraService, makeTranslations, useLitteraMethods } = createLittera(
  LOCALES,
  PRESET,
);

export { LitteraService, makeTranslations, useLitteraMethods };
