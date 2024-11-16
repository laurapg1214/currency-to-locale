import currencyToLocale from '../index.js';

// valid currency code with no multiple languages
console.assert(
  currencyToLocale('USD') === 'en_US',
  "Expected 'en_US' for USD"
);

// valid currency code with multiple languages
console.assert(
  currencyToLocale('CHF', 'fr') === 'fr_CH',
  "Expected 'fr_CH for CHF, fr"
); 

console.assert(
    currencyToLocale('EUR', 'es') === 'es_ES',
    "Expected 'es_ES' for EUR, es"
); 

// valid currency code, irrelevant language
console.assert(
  currencyToLocale('AUD', 'en') === 'en_AU',
  "Expected 'en_AU' for AUD, en"
); 

// valid currency code, irrelevant & invalid/nonexistent language
console.assert(
  currencyToLocale('USD', 'cat') === 'en_US',
  "Expected 'en_US' for USD, cat"
);

// invalid/nonexistent currency code
console.assert(
  currencyToLocale('ACAT') === 'Currency code not found.',
  "Expected 'Currency code not found.' for ACAT"
);

// invalid currency code type (number)
console.assert(
  currencyToLocale(1) === 'Currency code not found.',
  "Expected 'Currency code not found' for 1"
); 

// invalid currency code type (number), valid language
console.assert(
  currencyToLocale(1, 'fr') === 'Currency code not found.',
  "Expected 'Currency code not found.' for 1, fr"
); 

// valid currency code, invalid language type (number)
console.assert(
  currencyToLocale('EUR', 1) === 'Language not found for EUR.',
  "Expected 'Language not found for EUR' for EUR, 1"
); 

// valid currency code, nonexistent/invalid language
console.assert(
  currencyToLocale('CHF', 'cat') === 'Language not found for CHF.',
  "Expected 'Language not found for CHF.' for CHF, cat"
); 

console.assert(
  currencyToLocale('EUR', 'cat') === 'Language not found for EUR.',
  "Expected 'Language not found for EUR.' for EUR, cat"
); 

// lowercase valid currency code
console.assert(
  currencyToLocale('usd') === 'en_US',
  "Expected 'en_US' for usd"
); 

// uppercase valid language
console.assert(
  currencyToLocale('EUR', 'FR') === 'fr_FR',
  "Expected 'fr_FR' for EUR, FR"
);

// lowercase valid currency code & uppercase valid language
console.assert(
  currencyToLocale('chf', 'IT') === 'it_CH',
  "Expected 'it_CH' for chf, IT"
); 

// no input
console.assert(
  currencyToLocale() === 'Please provide a currency code.',
  "Expected 'Please provide a currency code.' for no input"
);
