function vowelFinder() {
    var toChange = document.querySelector("h3");
    
    var input = document.querySelector("#vowel-collector").value;
    console.log(input);

    var numberOfWords = []
    numberOfWords.push(input)
    
    var vowelCount=0;
    var spreadInput= [...input];
    var spreadWords= [...numberOfWords]
    for (let val of spreadInput) {
    switch(val) {
        case "a":
        vowelCount++
        break;
        case "e":
        vowelCount++
        break;
        case "i":
        vowelCount++
        break;
        case "o":
        vowelCount++
        break;
        case "u":
        vowelCount++
        break;
    }}
    
    toChange.innerHTML = "The total number of vowels is " + vowelCount "and the number of words is " + spreadWords.length
}
