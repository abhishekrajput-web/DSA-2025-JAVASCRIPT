














function countVowelAndConsonent(string){
    let n = string.length;
    if(n<=0){
        return -1;
    }

    let vowelCount = 0;
    let consonentCount = 0;

    const vowel = "aeiouAEIOU";


    for(let i = 0; i < n; i++){
        let char = string[i];
        
        if((char>="a" && char<="z") || char>="A" && char<="Z"){
            if(vowel.includes(char)){
                vowelCount++;
            }
            else{
                consonentCount++;
            }
        }
    }

    return {vowelCount, consonentCount};
}




const string = "hello world";
console.log(countVowelAndConsonent(string));
