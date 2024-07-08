let magician: string[] = ['Alice', 'Robert', 'Chris'];
function copyArray(arr:string[]){
    return [...arr]
}
function make_great ( magicianArry:string[] ){
    for (let i=0; i<magicianArry.length; i++){
        magicianArry[i]= 'the Great ' + magicianArry[i]
    }
}
function show_magicians(magicians: string[]){
magicians.forEach(element => {
    console.log(element);
});
}
const copyMagicianArray = copyArray(magician)
make_great(copyMagicianArray);
console.log('This is my original array:')
show_magicians(copyMagicianArray);
console.log('This is my modified copy of the array:')
show_magicians(copyMagicianArray);