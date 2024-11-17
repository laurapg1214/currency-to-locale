```markdown
# currency-to-locale

### **Description**

Converts currency codes to locale identifiers following format specified in IETF BCP 47 standard, comprised of a two-letter ISO 639-1 language code and ISO 3166-1 alpha-2 country code.

Currency codes initially compiled using Frankfurter's [https://api.frankfurter.app/currencies](https://api.frankfurter.app/currencies).

Additional currency code and locale ID additions are welcome; please see "Contributing" section below.

For currency codes with multiple locales/language codes, defaults have been selected.

---

### **Installation**

Install via npm:

```bash
npm install currency-to-locale
```

This will add the package to your project's dependencies.

---

### **Usage**
To use the `currencyToLocale` function in your project, import it as follows:

```javascript
import currencyToLocale from currency-to-locale;

// Example 1: Simple usage
const locale = currencyToLocale('USD'); // 'en_US'

// Example 2: Currency code with multiple locales
const locale = currencyToLocale('EUR', 'fr'); // 'fr_FR'

// Example 3: Currency code with multiple locales, no language code provided - default locale returned
console.log("EUR with no language code:", currencyToLocale('EUR')); // 'de_DE'

// Example 4: Lowercase currency code
const locale = currencyToLocale('jpy'); // 'ja_JP'

// Example 5: Invalid currency code
const locale = currencyToLocale('XYZ'); // 'Currency code not found.'

// Example 6: No input
const locale = currencyToLocale(); // 'Please provide a currency code.'
```

The `currencyToLocale` function accepts two arguments:
- **currencyCode** (required): The 3-letter currency code (e.g. "USD", "EUR").
- **languageCode** (optional): The 2-letter language code (e.g. "en", "de").

It returns the corresponding locale identifier (e.g. "en-US", "de-DE").

**Run example**
To see examples in action, you can run the following command:

```bash
node examples/examples.js
```

This will execute the example script provided in the `examples` folder and show the output.

---

### **Contributing**
I welcome contributions! If you'd like to improve or add to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (e.g., `feature-xyz` or `bugfix-123`).
3. Make your changes, ensuring they align with the project’s goals and style.
4. Test your changes to ensure they work correctly.
5. Submit a pull request with a description of your changes.

**Code of Conduct**
Please be respectful and follow the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/).

I appreciate your contributions and look forward to collaborating with you!

---

### **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```


