export const pluralize = (count, singular, plural) => {
  const pluralRules = new Intl.PluralRules("es-ES");
  const numbering = pluralRules.select(count);
  return `${count} ${numbering === "one" ? singular : plural}`;
};
