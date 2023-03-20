// function showMessage() {
// alert("Я учу Java Script");
// }
// showMessage();
// Первое задание

const images =[
"assets/img/cat1.jpg",
"assets/img/cat2.jpg",
"assets/img/cat3.jpg",
"assets/img/cat4.jpg"
];

currentImageIndex = 0;

function showNewImag(next){

    currentImageIndex += next;  


    if(currentImageIndex===images.length)
    {
        currentImageIndex = 0;
    }
    if (currentImageIndex === -1) {
        currentImageIndex = images.length - 1;
    }

    document.getElementById('image').src=images[currentImageIndex];

}

//второе задание
//третье задание
function calculatesLeapYear(year){
if(((year % 4==0) && (year % 100 != 0) ) || ( year % 400 == 0)){
    return console.log('Год высокосный');
}
else{
    console.log('Год не высокосный');
}
}
 console.log(calculatesLeapYear(2024));

 