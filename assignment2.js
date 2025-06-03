//Question 1
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let c = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      c++;
    }
  }
  return c;
}
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript"));  
 