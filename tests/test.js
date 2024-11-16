const currencyToLocale = require('../index.js');  

// standard currency code no multiple languages
console.log(currencyToLocale('USD')); // returns 'en_US'

// testing multiple languages CHF & EUR
console.log(currencyToLocale('CHF', 'fr')); // returns 'fr_CH' (for French Swiss Franc)
console.log(currencyToLocale('EUR', 'es')); // returns 'es_ES' (for Spanish Euro)

// currency code with lang provided but irrelevant
console.log(currencyToLocale('AUD', 'en')); // returns 'en_AU'

// currency code with irrelevant and invalid language
console.log(currencyToLocale('USD', 'cat')); // returns 'en_US'

// currency code not in mapping
console.log(currencyToLocale('ACAT')); // returns 'Currency code not found.'

// number entered for currency code
//console.log(currencyToLocale(1)); // returns 'Currency code not found.'

// number entered for language
//console.log(currencyToLocale('EUR', 1)); // returns 'Language not found for EUR.'

// language for CHF/EUR not in mapping
console.log(currencyToLocale('CHF', 'cat')); // returns 'Language not found for CHF.'
console.log(currencyToLocale('EUR', 'cat')); // returns 'Language not found for EUR.'

// lowercase currency code
console.log(currencyToLocale('usd')); // returns 'en_US'

// uppercase language
console.log(currencyToLocale('EUR', 'fr')); // returns 'fr_FR' (for Spanish Euro)

// lowercase currency code & uppercase language
console.log(currencyToLocale('chf', 'IT')); // returns 'it_CH' (for Italian Swiss Franc)

// no currency code
console.log(currencyToLocale()); // returns 'Please provide a currency code.'
