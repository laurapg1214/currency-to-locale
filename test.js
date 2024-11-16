const currencyToLocale = require('./index.js');  

// standard currency code no multiple languages
console.log(currencyToLocale('USD')); // Should return 'en_US'

// testing multiple languages CHF & EUR
console.log(currencyToLocale('CHF', 'fr')); // Should return 'fr_CH' (for French Swiss Franc)
console.log(currencyToLocale('EUR', 'es')); // Should return 'es_ES' (for Spanish Euro)

// currency code with lang provided but irrelevant
console.log(currencyToLocale('AUD', 'en')); // Should return 'en_AU' (language not relevant)

// currency code not in mapping
console.log(currencyToLocale('ACAT')); // Should return 'Currency code not found.'

// language for CHF/EUR not in mapping
console.log(currencyToLocale('CHF', 'cat')); // Should return 'Language not found for Swiss Franc.'
console.log(currencyToLocale('EUR', 'cat')); // Should Return 'Language not found for Euro.'

// lowercase currency code
console.log(currencyToLocale('usd')); // should return 'en_US'

// uppercase language
console.log(currencyToLocale('EUR', 'fr')); // should return 'fr_FR' (for Spanish Euro)

// lowercase currency code & uppercase language
console.log(currencyToLocale('chf', 'IT')); // should return 'it_CH' (for Italian Swiss Franc)

// no currency code
console.log(currencyToLocale()); // should return 'Please provide a currency code.'
