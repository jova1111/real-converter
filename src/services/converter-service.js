const eur = 117.5;
const rolVirsla = 110;
const brojRokova = 8;
const kutijaCigara = 430;

const timeUnits = [
  {
    id: 1,
    name: "сат",
    shortName: "ч"
  },
  {
    id: 2,
    name: "дан",
    shortName: "д"
  },
  {
    id: 3,
    name: "недеља",
    shortName: "нед."
  },
  {
    id: 4,
    name: "Боцин рок",
    shortName: "БР"
  }
]

const moneyUnits = [
  {
    id: 5,
    name: "Српски динар",
    shortName: "РСД"
  },
  {
    id: 6,
    name: "Евро",
    shortName: "ЕУР"
  },
  {
    id: 7,
    name: "Рол виршла",
    shortName: "РВШ"
  },
  {
    id: 8,
    name: "Кутија цигара",
    shortName: "КЦГ"
  }
]

const convertTables = [
  // hour - hour
  {
    value1Id: 1,
    value2Id: 1,
    ratio: 1
  },
  // hour - day
  {
    value1Id: 1,
    value2Id: 2,
    ratio: 1 / 24
  },
  // hour - week
  {
    value1Id: 1,
    value2Id: 3,
    ratio: 1 / 24 / 7
  },
  // hour - BR
  {
    value1Id: 1,
    value2Id: 4,
    ratio: 1 / 24 / (365 / brojRokova)
  },
  // day - day
  {
    value1Id: 2,
    value2Id: 2,
    ratio: 1
  },
  // day - week
  {
    value1Id: 2,
    value2Id: 3,
    ratio: 1 / 7
  },
  // day - BR
  {
    value1Id: 2,
    value2Id: 4,
    ratio: 1 / (365 / brojRokova)
  },
  // week - week
  {
    value1Id: 3,
    value2Id: 3,
    ratio: 1
  },
  // week - BR
  {
    value1Id: 3,
    value2Id: 4,
    ratio: 1 / (52 / brojRokova)
  },
  // BR - BR
  {
    value1Id: 4,
    value2Id: 4,
    ratio: 1
  },
  // rsd - rsd
  {
    value1Id: 5,
    value2Id: 5,
    ratio: 1
  },
  // rsd - eur
  {
    value1Id: 5,
    value2Id: 6,
    ratio: 1 / eur
  },
  // rsd - rvs
  {
    value1Id: 5,
    value2Id: 7,
    ratio: 1 / rolVirsla
  },
  // rsd - kcg
  {
    value1Id: 5,
    value2Id: 8,
    ratio: 1 / kutijaCigara
  },
  // eur - eur
  {
    value1Id: 6,
    value2Id: 6,
    ratio: 1
  },
  // eur - rvs
  {
    value1Id: 6,
    value2Id: 7,
    ratio: eur / rolVirsla
  },
  // eur - kcg
  {
    value1Id: 6,
    value2Id: 8,
    ratio: eur / kutijaCigara
  },
  // rvs - rvs
  {
    value1Id: 7,
    value2Id: 7,
    ratio: 1
  },
  // rvs - kcg
  {
    value1Id: 7,
    value2Id: 8,
    ratio: rolVirsla / kutijaCigara
  },
  // kcg - kcg
  {
    value1Id: 8,
    value2Id: 8,
    ratio: 1
  }
]


function convertValue(value1Id, value2Id, amount) {
  let table = convertTables.filter(convertTable => convertTable.value1Id == value1Id && convertTable.value2Id == value2Id);
  if (table.length > 0) {
    return amount * table[0].ratio;
  }

  table = convertTables.filter(convertTable => convertTable.value2Id == value1Id && convertTable.value1Id == value2Id);
  if (table.length > 0) {
    return amount * 1 / table[0].ratio;
  }
  return 0;
}


export { timeUnits, moneyUnits, convertValue }