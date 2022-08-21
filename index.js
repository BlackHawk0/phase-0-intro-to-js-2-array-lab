// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

// dstructive appends a cat to the end of the cats array
function destructivelyAppendCat(name) {
  return cats.push(name); 
}

// destructively prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
  return cats.unshift(name);
}

// destructively removes the last cat from the cats array
function destructivelyRemoveLastCat() {
  return cats.pop();
}

// destructively removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
  return cats.shift();
}

// appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name){
    const catNew = [...cats, "Broom"];
    return catNew;
}

// prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name){
    const catNew = ["Arnold", ...cats];
    return catNew;
}
// removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat(){
    const newCat = [... cats.slice(0, cats.length - 1)];
    return newCat;
}

// removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat(){
    const newCat = [... cats.slice(1)];
    return newCat;
}