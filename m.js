// Skapa en funktion writeName
function writeName(name) {
    console.log(name);
  }
  
  // Skapa en funktion area
  function area(width, height) {
    return width * height;
  }
  
  // Beräkna Summan av Två Tal
  const add = (num1, num2) => num1 + num2;
  
  // Konvertera Celsius till Fahrenheit
  const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
  
  // Beräkna Area av en Cirkel
  const calculateCircleArea = (radius) => Math.PI * radius ** 2;
  
  // Beräkna Kvadraten av Ett Tal
  const square = (num) => num ** 2;
  
  // Räkna Antalet Tecken i En Sträng
  const countCharacters = (str) => str.length;
  
  // Kontrollera Om Ett Tal är Jämnt eller Udda
  const isEven = (num) => num % 2 === 0 ? true : false;
  
  // Konvertera Text till Stora Bokstäver
  const convertToUpperCase = (str) => str.toUpperCase();
  
  // Skriv om funktionen till en arrow function.
  const double = (x) => x * 2;
  
  // Skapa en funktion summeraArray
  const sumArray = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
  
  // Skapa en funktion filtreraPositiva
  const filterPositive = (arr) => arr.filter(num => num > 0);
  
  // Skapa en funktion dubblaElement
  const doubleElements = (arr) => arr.map(num => num * 2);
  
  // Skapa en funktion hittaMax
  const findMax = (arr) => Math.max(...arr);
  
  // Skapa en funktion räknaElement
  const countElements = (arr, element) => arr.filter(el => el === element).length;
  
  // Skapa en funktion konkateneraListor
  const concatenateLists = (list1, list2) => [...list1, ...list2];
  
  // Skapa en funktion vändLista
  const reverseList = (list) => list.reverse();
  
  // Skapa en funktion hittaElement
  const findElement = (list, element) => list.includes(element);
  
  // Skapa en funktion sorteraTal
  const sortNumbers = (arr) => arr.sort((a, b) => a - b);