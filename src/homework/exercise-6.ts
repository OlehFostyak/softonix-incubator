/* Реалізуйте дженерік версію методу масивів Array.push.
Для перевірки наведіть курсор на pushCheck */

type TPush<T, U> = any // Code here

const pushCheck: TPush<[1, 2], '3'> = [] // [1, 2, '3']
