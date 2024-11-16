// function to map currency codes to location identifiers
const currencyToLocale = (currencyCode, language) => {
  if (!currencyCode) {
    return "Please provide a currency code.";
  };

  // ensure correct formatting
  currencyCode = currencyCode.toString().toUpperCase();
  
  const currencyLocales = {
    "AUD": "en_AU",
    "BGN": "bg_BG",
    "BRL": "pt_BR",
    "CAD": "en_CA", 
    "CHF": ["de_CH", "fr_CH", "it_CH"], 
    "CNY": "zh_CN",
    "CZK": "cs_CZ",
    "DKK": "da_DK",
    "EUR": ["de_DE", "fr_FR", "es_ES", "it_IT"],
    "GBP": "en_GB",
    "HKD": "zh_HK",
    "HUF": "hu_HU",
    "IDR": "id_ID",
    "ILS": "he_IL",
    "INR": "en_IN",
    "ISK": "is_IS",
    "JPY": "ja_JP",
    "KRW": "ko_KR",
    "MXN": "es_MX",
    "MYR": "ms_MY",
    "NOK": "no_NO",
    "NZD": "en_NZ",
    "PHP": "en_PH",
    "PLN": "pl_PL",
    "RON": "ro_RO",
    "SEK": "sv_SE",
    "SGD": "en_SG",
    "THB": "th_TH",
    "TRY": "tr_TR",
    "USD": "en_US",
    "ZAR": "en_ZA"
  };

  if (language) {
    // ensure correct formatting
    language = language.toString().toLowerCase();
    // loop through currencyLocales object
    for (const key in currencyLocales) {
      // check for values that are multi-value arrays
      if (
        Array.isArray(currencyLocales[key]) && 
        currencyLocales[key].length > 1
      ) {
        // match currency code
        if (currencyCode === key) {
          // extract language from locale ID 
          for (const [k, localeID] of Object.entries(currencyLocales[key])) {
            localeLang = localeID.split('_')[0];
            // match beginning of locale ID
            if (language === localeLang) {
              // return matching locale ID
              return localeID;
            }
          }
          return (`Language not found for ${currencyCode}.`);
        }
      }
    }
  }

  return currencyLocales[currencyCode] || "Currency code not found.";
}

// CommonJS export
module.exports = currencyToLocale;

// ES module export
// export default currencyToLocale;