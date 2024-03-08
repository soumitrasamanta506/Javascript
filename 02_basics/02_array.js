const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros);    // dc_heros treat as a single entity

// console.log(marvel_heros);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_nHeros = [...marvel_heros, ...dc_heros]   // spread operator
// console.log(all_nHeros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("soumitra"));
console.log(Array.from("soumitra"));  // convert into an array