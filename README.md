# currency-to-locale<br><br>
****************<br>
DESCRIPTION<br>
****************<br><br>
Converts currency codes to locale identifiers following format specified in IETF BCP 47 standard, comprised of two-letter ISO 639-1 language code and ISO 3166-1 alpha-2 country code.<br>
Currency codes initially compiled using Frankfurter's https://api.frankfurter.app/currencies. Additional currency code and locale id additions welcome.<br>
For currency codes with multiple locales/languages, defaults have been selected.<br><br>
<hr>
currencyToLocale function takes two arguments: currency code (required) and language code (optional)<br>
invalid input types converted to strings<br>
currency codes converted to uppercase; language codes converted to lowercase<br>
support for currency codes with multiple locales, e.g. EUR, using language codes to differentiate<br>
<hr>
*****************<br>
INSTALLATION<br>
*****************<br><br>
npm install currency-to-locale<br><br>
<hr>
*******************<br>
USAGE EXAMPLES<br>
*******************<br><br>
To see examples of how to use the currencyToLocale function, run the following command:<br>
```bash
node examples/examples.js

