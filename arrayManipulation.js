function processArray(arr){
    const newArr =[]
for (const num of arr){
    if (num % 2 === 0){
        newArr.push(num*num);
    } else{
newArr.push(num**3)
        }
    }
    return newArr;
}
function formatArrayStrings(stringArr, numberArr){
    if(stringArr.length !== numberArr.length){
throw new Error("Input arrays must be of the same length");
    }
const formattedStrings =[];
 for( let i =0; i < stringArr.length; i++){
  const str = stringArr[i];
  const num =numberArr[i];
  if (num %2 === 0){
    formattedStrings.push(str.toUpperCase());
  } else{
    formattedStrings.push(str.toLowerCase);
 }
 }
  return formattedStrings;
}