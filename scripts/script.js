/*
    SITE ELEMENTS
*/
//Copy right year Element
const copyrightYear = document.getElementById("copyright-year");

//Create new date object
const year = new Date().getFullYear();

console.log(year);

copyrightYear.textContent = year;
