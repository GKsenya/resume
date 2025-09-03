const enOrdinalRules = new Intl.PluralRules('ru-RU');

type PluralRule = 'zero' | 'one' | 'two' | 'few' | 'many' | 'other';

type Rules = { [K in PluralRule]?: string };

export const pluralFormatter = (n: number, rules: Rules) => {
  const rule = enOrdinalRules.select(n);
  const pluralString = rules[rule];
  return `${n} ${pluralString}`;
};

