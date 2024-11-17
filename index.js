// function to map currency codes to locale identifiers
const currencyToLocale = (currencyCode, languageCode) => {

  // input error handling (language type error handled below)
  if (!currencyCode) {
    return "Please provide a currency code.";
  };

  if (typeof currencyCode !== 'string' || currencyCode.length !== 3) {
    return "Please provide a valid currency code.";
  }

  // ensure correct formatting
  currencyCode = currencyCode.toUpperCase();
  
  const currencyLocales = {
    "AUD": "en_AU",
    "BGN": "bg_BG",
    "BRL": "pt_BR",
    "CAD": "en_CA", 
    "CHF": ["de_CH", "fr_CH", "it_CH"], // multiple locales array
    "CNY": "zh_CN",
    "CZK": "cs_CZ",
    "DKK": "da_DK",
    "EUR": ["de_DE", "fr_FR", "es_ES", "it_IT"], // multiple locales array
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

  // multiple locale IDs
  // check for values that are multi-value arrays
  if (
    Array.isArray(currencyLocales[currencyCode]) && 
    currencyLocales[currencyCode].length > 1
  ) {
    if (languageCode) {
      // language code input type error handling
      if (typeof languageCode !== 'string' || languageCode.length !== 2) {
        return "Please provide a valid language code."
      }
      // ensure correct formatting
      languageCode = languageCode.toLowerCase();
      // loop through currencyLocales object
      for (const key in currencyLocales) {
         {
          // match currency code
          if (currencyCode === key) {
            // extract language from locale ID 
            for (const [k, localeID] of Object.entries(currencyLocales[key])) {
              let localeLang = localeID.split('_')[0];
              // match beginning of locale ID
              if (languageCode === localeLang) {
                // return matching locale ID
                return localeID;
              }
            }
            return (`Language code not found for ${currencyCode}.`);
          }
        }
      }
    }
    // if no lang provided, return default locale
    return currencyLocales[currencyCode][0];
  }
  
  return currencyLocales[currencyCode] || "Currency code not found.";
}

// ES module export
export default currencyToLocale;