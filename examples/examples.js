import currencyToLocale from '../index.js';

// Example 1: Simple usage
console.log(
    "Example 1: Simple usage"
);
console.log("USD:", currencyToLocale('USD')); // 'en_US'

// Example 2: Currency code with multiple locale IDs
console.log(
    "\nExample 2: Currency code with multiple locale IDs"
);
console.log("EUR with fr:", currencyToLocale('EUR', 'fr')); // 'fr_FR'
console.log("EUR with es:", currencyToLocale('EUR', 'es')); // 'es_ES'

// Example 3: Currency code with multiple locale IDs, no language code provided 
// (default locale ID returned)
console.log(
    "\nExample 3: Currency code with multiple locale IDs, " +
    "no language code provided (default locale ID returned)"
);
console.log("EUR with no language code:", currencyToLocale('EUR')); // 'de_DE'

// Example 4: Currency code with only one locale ID 
// (language code ignored if provided)
console.log(
    "\nExample 4: Currency code with only one locale ID " +
    "(language code ignored if provided)"
);
console.log(
    "HKD with de (incorrect language code for HKD, but ignored):", 
    currencyToLocale('HKD', 'de')
); // 'zh_HK'
console.log(
    "HKD with xyz (invalid language code, but ignored):", 
    currencyToLocale('HKD', 'xyz')
); // 'zh_HK'
console.log(
    "HKD with 1 (invalid language code type, but ignored):", 
    currencyToLocale('HKD', 1)
); // 'zh_HK'

// Example 5: Improperly formatted currency or language code (accepted)
console.log(
    "\nExample 5: Improperly formatted currency or language code (accepted)"
);
console.log(
    "Lowercase 'jpy' currency code:", 
    currencyToLocale('jpy')
); // 'ja_JP'
console.log(
    "Uppercase 'IT' language code:", 
    currencyToLocale('CHF', 'IT')
); // 'it_CH'

// Example 6: Invalid or not-found currency code
console.log(
    "\nExample 6: Invalid currency code"
);
console.log(
    "Currency code 1 (number):", 
    currencyToLocale(1)
); // 'Please provide a valid currency code.'
console.log(
    "Currency code 'ABCD' (not 3-character):", 
    currencyToLocale('ABCD')
); // 'Please provide a valide currency code.'
console.log(
    "Currency code 'XYZ':", 
    currencyToLocale('XYZ'), 
    "(currency code might be valid, just missing from function's mapping)"
); // 'Currency code not found.'

// Example 7: Invalid or not-found language code with valid currency code
console.log(
    "\nExample 7: Invalid or not-found language code with valid currency code"
);
console.log(
    "Language code 1 (number) with currency code 'EUR':", 
    currencyToLocale('EUR', 1)
); // 'Please provide a valid language code.'
console.log(
    "Language code 'xyz' (not 2-character) with currency code 'EUR':", 
    currencyToLocale('EUR', 'xyz')
); // 'Please provide a valid language code.'
console.log(
    "Language code 'zh' with currency code 'EUR':", 
    currencyToLocale('EUR', 'zh'), 
    "(language code might be valid, just missing from function's mapping)"
); // 'Language code not found for EUR.'

// Example 8: No input
console.log(
    "\nExample 8: No input"
);
console.log(currencyToLocale()); // 'Please provide a currency code.'
