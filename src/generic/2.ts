/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};
// Pick<T, K>

// створюємо новий тип методом Pick, який звязує логіку між собою, базується на існуючих ключах
// поля обєктів top, bottom належать-(інструкція перевірки приналежності типів keyof) типу AllType

function compare<
  T extends Pick<AllType, "name" | "color">,
  U extends Pick<AllType, "position" | "weight">
>(top: T, bottom: U): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

// function compare<T extends AllType, B extends AllType>(
//   top: Pick<T, keyof AllType>,
//   bottom: Pick<B, keyof AllType>
// ): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   };
// }

export {};
