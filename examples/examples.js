import currencyToLocale from '../index.js';

// Example 1: Simple usage
console.log("USD locale:", currencyToLocale('USD')); // Output: 'en_US'

// Example 2: Currency code with multiple locales
console.log("EUR with 'fr' locale:", currencyToLocale('EUR', 'fr')); // Output: 'fr_FR'

// Example 3: Lowercase currency code
console.log("Lowercase 'jpy' locale:", currencyToLocale('jpy')); // Output: 'ja_JP'

// Example 4: Invalid currency code
console.log("Invalid currency code 'XYZ':", currencyToLocale('XYZ')); // Output: 'Currency code not found.'

// Example 5: No input
console.log("No input:", currencyToLocale()); // Output: 'Please provide a currency code.'
