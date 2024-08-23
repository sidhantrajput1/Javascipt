// for loop 

// for(let i = 1; i < 10 ; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log('5 is best number');
//     }
//     console.log(i)
// }

// for(let i = 1; i < 10 ; i++) {
//     console.log(`Outer loop value : ${i}`);
//     for(let j = 1 ; j < 3; j++) {
//         console.log(`Inner loop value ${i} and Inner loop ${i}`)
//     }
// }

// Break and Continue

for(let i = 1; i <= 10; i++) {
    // if (i == 5) {
    //     console.log(`Break at ${i}`)
    //     break;
    // } 

    if (i == 5) {
        console.log(`Break at ${i}`)
        continue;
    } 
    console.log(i)
}