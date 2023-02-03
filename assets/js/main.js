let retArray = [];

// Deklariert 1 als Zählvariable
// Solange 1 kleiner oder gleich 100 ist, werden 'image_' + 'i' '.jpg' in das Array gepusht
// 'i' entspricht dabei immer der Iteration, in der sich der Loop befindet

for(let i = 1; i <= 100; i++) {
    retArray.push('image_' + i + '.jpg')
    console.log(retArray);
}