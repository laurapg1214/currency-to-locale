// function to map currency codes to location identifiers
const currencyToLocale = (currencyCode, language) => {
  if (!currencyCode) {
    return "Please provide a currency code.";
  };

  currencyCode = currencyCode.toUpperCase();

  if (language) {
    language = language.toLowerCase();
  };
  
  const currencyLocaleMap = {
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

  // check for Swiss Franc
  if (currencyCode === "CHF") {
    if (!language || language === "de") {
      // return default German Swiss Franc
      return currencyLocaleMap[currencyCode][0];
    };
    if (language === "fr") {
      // return French Swiss Franc
      return currencyLocaleMap[currencyCode][1];
    };
    if (language === "it") {
      // return Italian Swiss Franc
      return currencyLocaleMap[currencyCode][2];
    };
    return "Language not found for Swiss Franc."
  };

  // check for Euro
  if (currencyCode === "EUR") {
    if (!language || language === "de") {
      // return default German Euro
      return currencyLocaleMap[currencyCode][0];
    };
    if (language === "fr") {
      // return French Euro
      return currencyLocaleMap[currencyCode][1];
    };
    if (language === "es") {
      // return Spanish Euro
      return currencyLocaleMap[currencyCode][2];
    };
    if (language === "it") {
      // return Italian Euro
      return currencyLocaleMap[currencyCode][3];
    };
    return "Language not found for Euro."
  };

  return currencyLocaleMap[currencyCode] || "Currency code not found.";
};

// CommonJS export
module.exports = currencyToLocale;

// ES module export
// export default currencyToLocale;