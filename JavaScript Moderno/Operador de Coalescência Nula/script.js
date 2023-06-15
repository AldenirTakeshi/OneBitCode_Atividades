let a = 0;

let b = a || 42; // Ou o Js entende que o '0' é false por isso retorna 42

console.log({ a, b });

b = a ?? 42; // ?? ignora quando o valor é null/undefined

console.log({ a, b });

let c = false ?? 42;

console.log({ c });
