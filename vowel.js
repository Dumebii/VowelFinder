function vowelFinder() {
    var input = document.querySelector("#vowel-collector").value;
    console.log(input);

    var vowelCount=0;
    var spreadInput= [...input];
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
    alert("The total number of vowels is " + vowelCount);
}
