let name = String("my name is  mim");
 let Len = name.length;


let reverse = "";
for(let i = name.length-1 ; i>=0 ; i--){
    reverse  += name[i];
    

}
let vowels = "aeiouAEIOU";
let vowelCount = 0;

for (let i = 0; i < name.length; i++) {
    if (vowels.includes(name[i])) {
        vowelCount++;
    }
}

console.log(reverse); 
console.log(Len);
console.log( vowelCount);