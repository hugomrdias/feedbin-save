(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __exportStar = (target, module, desc) => {
    __markAsModule(target);
    if (typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    if (module && module.__esModule)
      return module;
    return __exportStar(__defProp(__create(__getProtoOf(module)), "default", {value: module, enumerable: true}), module);
  };

  // empty:/Users/hd/code/feedbin-share/node_modules/re2/re2.js
  var require_re2 = __commonJS(() => {
  });

  // node_modules/ip-regex/index.js
  var require_ip_regex = __commonJS((exports, module) => {
    "use strict";
    const word = "[a-fA-F\\d:]";
    const b2 = (options) => options && options.includeBoundaries ? `(?:(?<=\\s|^)(?=${word})|(?<=${word})(?=\\s|$))` : "";
    const v4 = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}";
    const v6seg = "[a-fA-F\\d]{1,4}";
    const v6 = `
(
(?:${v6seg}:){7}(?:${v6seg}|:)|                                // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${v6seg}:){6}(?:${v4}|:${v6seg}|:)|                         // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${v6seg}:){5}(?::${v4}|(:${v6seg}){1,2}|:)|                 // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${v6seg}:){4}(?:(:${v6seg}){0,1}:${v4}|(:${v6seg}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${v6seg}:){3}(?:(:${v6seg}){0,2}:${v4}|(:${v6seg}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${v6seg}:){2}(?:(:${v6seg}){0,3}:${v4}|(:${v6seg}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${v6seg}:){1}(?:(:${v6seg}){0,4}:${v4}|(:${v6seg}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::((?::${v6seg}){0,5}:${v4}|(?::${v6seg}){1,7}|:))           // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(%[0-9a-zA-Z]{1,})?                                           // %eth0            %1
`.replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim();
    const v46Exact = new RegExp(`(?:^${v4}$)|(?:^${v6}$)`);
    const v4exact = new RegExp(`^${v4}$`);
    const v6exact = new RegExp(`^${v6}$`);
    const ip = (options) => options && options.exact ? v46Exact : new RegExp(`(?:${b2(options)}${v4}${b2(options)})|(?:${b2(options)}${v6}${b2(options)})`, "g");
    ip.v4 = (options) => options && options.exact ? v4exact : new RegExp(`${b2(options)}${v4}${b2(options)}`, "g");
    ip.v6 = (options) => options && options.exact ? v6exact : new RegExp(`${b2(options)}${v6}${b2(options)}`, "g");
    module.exports = ip;
  });

  // node_modules/tlds/index.json
  var require_tlds = __commonJS((exports, module) => {
    module.exports = ["aaa", "aarp", "abarth", "abb", "abbott", "abbvie", "abc", "able", "abogado", "abudhabi", "ac", "academy", "accenture", "accountant", "accountants", "aco", "actor", "ad", "adac", "ads", "adult", "ae", "aeg", "aero", "aetna", "af", "afamilycompany", "afl", "africa", "ag", "agakhan", "agency", "ai", "aig", "airbus", "airforce", "airtel", "akdn", "al", "alfaromeo", "alibaba", "alipay", "allfinanz", "allstate", "ally", "alsace", "alstom", "am", "amazon", "americanexpress", "americanfamily", "amex", "amfam", "amica", "amsterdam", "analytics", "android", "anquan", "anz", "ao", "aol", "apartments", "app", "apple", "aq", "aquarelle", "ar", "arab", "aramco", "archi", "army", "arpa", "art", "arte", "as", "asda", "asia", "associates", "at", "athleta", "attorney", "au", "auction", "audi", "audible", "audio", "auspost", "author", "auto", "autos", "avianca", "aw", "aws", "ax", "axa", "az", "azure", "ba", "baby", "baidu", "banamex", "bananarepublic", "band", "bank", "bar", "barcelona", "barclaycard", "barclays", "barefoot", "bargains", "baseball", "basketball", "bauhaus", "bayern", "bb", "bbc", "bbt", "bbva", "bcg", "bcn", "bd", "be", "beats", "beauty", "beer", "bentley", "berlin", "best", "bestbuy", "bet", "bf", "bg", "bh", "bharti", "bi", "bible", "bid", "bike", "bing", "bingo", "bio", "biz", "bj", "black", "blackfriday", "blockbuster", "blog", "bloomberg", "blue", "bm", "bms", "bmw", "bn", "bnpparibas", "bo", "boats", "boehringer", "bofa", "bom", "bond", "boo", "book", "booking", "bosch", "bostik", "boston", "bot", "boutique", "box", "br", "bradesco", "bridgestone", "broadway", "broker", "brother", "brussels", "bs", "bt", "budapest", "bugatti", "build", "builders", "business", "buy", "buzz", "bv", "bw", "by", "bz", "bzh", "ca", "cab", "cafe", "cal", "call", "calvinklein", "cam", "camera", "camp", "cancerresearch", "canon", "capetown", "capital", "capitalone", "car", "caravan", "cards", "care", "career", "careers", "cars", "casa", "case", "caseih", "cash", "casino", "cat", "catering", "catholic", "cba", "cbn", "cbre", "cbs", "cc", "cd", "ceb", "center", "ceo", "cern", "cf", "cfa", "cfd", "cg", "ch", "chanel", "channel", "charity", "chase", "chat", "cheap", "chintai", "christmas", "chrome", "church", "ci", "cipriani", "circle", "cisco", "citadel", "citi", "citic", "city", "cityeats", "ck", "cl", "claims", "cleaning", "click", "clinic", "clinique", "clothing", "cloud", "club", "clubmed", "cm", "cn", "co", "coach", "codes", "coffee", "college", "cologne", "com", "comcast", "commbank", "community", "company", "compare", "computer", "comsec", "condos", "construction", "consulting", "contact", "contractors", "cooking", "cookingchannel", "cool", "coop", "corsica", "country", "coupon", "coupons", "courses", "cpa", "cr", "credit", "creditcard", "creditunion", "cricket", "crown", "crs", "cruise", "cruises", "csc", "cu", "cuisinella", "cv", "cw", "cx", "cy", "cymru", "cyou", "cz", "dabur", "dad", "dance", "data", "date", "dating", "datsun", "day", "dclk", "dds", "de", "deal", "dealer", "deals", "degree", "delivery", "dell", "deloitte", "delta", "democrat", "dental", "dentist", "desi", "design", "dev", "dhl", "diamonds", "diet", "digital", "direct", "directory", "discount", "discover", "dish", "diy", "dj", "dk", "dm", "dnp", "do", "docs", "doctor", "dog", "domains", "dot", "download", "drive", "dtv", "dubai", "duck", "dunlop", "dupont", "durban", "dvag", "dvr", "dz", "earth", "eat", "ec", "eco", "edeka", "edu", "education", "ee", "eg", "email", "emerck", "energy", "engineer", "engineering", "enterprises", "epson", "equipment", "er", "ericsson", "erni", "es", "esq", "estate", "et", "etisalat", "eu", "eurovision", "eus", "events", "exchange", "expert", "exposed", "express", "extraspace", "fage", "fail", "fairwinds", "faith", "family", "fan", "fans", "farm", "farmers", "fashion", "fast", "fedex", "feedback", "ferrari", "ferrero", "fi", "fiat", "fidelity", "fido", "film", "final", "finance", "financial", "fire", "firestone", "firmdale", "fish", "fishing", "fit", "fitness", "fj", "fk", "flickr", "flights", "flir", "florist", "flowers", "fly", "fm", "fo", "foo", "food", "foodnetwork", "football", "ford", "forex", "forsale", "forum", "foundation", "fox", "fr", "free", "fresenius", "frl", "frogans", "frontdoor", "frontier", "ftr", "fujitsu", "fujixerox", "fun", "fund", "furniture", "futbol", "fyi", "ga", "gal", "gallery", "gallo", "gallup", "game", "games", "gap", "garden", "gay", "gb", "gbiz", "gd", "gdn", "ge", "gea", "gent", "genting", "george", "gf", "gg", "ggee", "gh", "gi", "gift", "gifts", "gives", "giving", "gl", "glade", "glass", "gle", "global", "globo", "gm", "gmail", "gmbh", "gmo", "gmx", "gn", "godaddy", "gold", "goldpoint", "golf", "goo", "goodyear", "goog", "google", "gop", "got", "gov", "gp", "gq", "gr", "grainger", "graphics", "gratis", "green", "gripe", "grocery", "group", "gs", "gt", "gu", "guardian", "gucci", "guge", "guide", "guitars", "guru", "gw", "gy", "hair", "hamburg", "hangout", "haus", "hbo", "hdfc", "hdfcbank", "health", "healthcare", "help", "helsinki", "here", "hermes", "hgtv", "hiphop", "hisamitsu", "hitachi", "hiv", "hk", "hkt", "hm", "hn", "hockey", "holdings", "holiday", "homedepot", "homegoods", "homes", "homesense", "honda", "horse", "hospital", "host", "hosting", "hot", "hoteles", "hotels", "hotmail", "house", "how", "hr", "hsbc", "ht", "hu", "hughes", "hyatt", "hyundai", "ibm", "icbc", "ice", "icu", "id", "ie", "ieee", "ifm", "ikano", "il", "im", "imamat", "imdb", "immo", "immobilien", "in", "inc", "industries", "infiniti", "info", "ing", "ink", "institute", "insurance", "insure", "int", "international", "intuit", "investments", "io", "ipiranga", "iq", "ir", "irish", "is", "ismaili", "ist", "istanbul", "it", "itau", "itv", "iveco", "jaguar", "java", "jcb", "jcp", "je", "jeep", "jetzt", "jewelry", "jio", "jll", "jm", "jmp", "jnj", "jo", "jobs", "joburg", "jot", "joy", "jp", "jpmorgan", "jprs", "juegos", "juniper", "kaufen", "kddi", "ke", "kerryhotels", "kerrylogistics", "kerryproperties", "kfh", "kg", "kh", "ki", "kia", "kim", "kinder", "kindle", "kitchen", "kiwi", "km", "kn", "koeln", "komatsu", "kosher", "kp", "kpmg", "kpn", "kr", "krd", "kred", "kuokgroup", "kw", "ky", "kyoto", "kz", "la", "lacaixa", "lamborghini", "lamer", "lancaster", "lancia", "land", "landrover", "lanxess", "lasalle", "lat", "latino", "latrobe", "law", "lawyer", "lb", "lc", "lds", "lease", "leclerc", "lefrak", "legal", "lego", "lexus", "lgbt", "li", "lidl", "life", "lifeinsurance", "lifestyle", "lighting", "like", "lilly", "limited", "limo", "lincoln", "linde", "link", "lipsy", "live", "living", "lixil", "lk", "llc", "llp", "loan", "loans", "locker", "locus", "loft", "lol", "london", "lotte", "lotto", "love", "lpl", "lplfinancial", "lr", "ls", "lt", "ltd", "ltda", "lu", "lundbeck", "lupin", "luxe", "luxury", "lv", "ly", "ma", "macys", "madrid", "maif", "maison", "makeup", "man", "management", "mango", "map", "market", "marketing", "markets", "marriott", "marshalls", "maserati", "mattel", "mba", "mc", "mckinsey", "md", "me", "med", "media", "meet", "melbourne", "meme", "memorial", "men", "menu", "merckmsd", "mg", "mh", "miami", "microsoft", "mil", "mini", "mint", "mit", "mitsubishi", "mk", "ml", "mlb", "mls", "mm", "mma", "mn", "mo", "mobi", "mobile", "moda", "moe", "moi", "mom", "monash", "money", "monster", "mormon", "mortgage", "moscow", "moto", "motorcycles", "mov", "movie", "mp", "mq", "mr", "ms", "msd", "mt", "mtn", "mtr", "mu", "museum", "mutual", "mv", "mw", "mx", "my", "mz", "na", "nab", "nagoya", "name", "nationwide", "natura", "navy", "nba", "nc", "ne", "nec", "net", "netbank", "netflix", "network", "neustar", "new", "newholland", "news", "next", "nextdirect", "nexus", "nf", "nfl", "ng", "ngo", "nhk", "ni", "nico", "nike", "nikon", "ninja", "nissan", "nissay", "nl", "no", "nokia", "northwesternmutual", "norton", "now", "nowruz", "nowtv", "np", "nr", "nra", "nrw", "ntt", "nu", "nyc", "nz", "obi", "observer", "off", "office", "okinawa", "olayan", "olayangroup", "oldnavy", "ollo", "om", "omega", "one", "ong", "onl", "online", "onyourside", "ooo", "open", "oracle", "orange", "org", "organic", "origins", "osaka", "otsuka", "ott", "ovh", "pa", "page", "panasonic", "paris", "pars", "partners", "parts", "party", "passagens", "pay", "pccw", "pe", "pet", "pf", "pfizer", "pg", "ph", "pharmacy", "phd", "philips", "phone", "photo", "photography", "photos", "physio", "pics", "pictet", "pictures", "pid", "pin", "ping", "pink", "pioneer", "pizza", "pk", "pl", "place", "play", "playstation", "plumbing", "plus", "pm", "pn", "pnc", "pohl", "poker", "politie", "porn", "post", "pr", "pramerica", "praxi", "press", "prime", "pro", "prod", "productions", "prof", "progressive", "promo", "properties", "property", "protection", "pru", "prudential", "ps", "pt", "pub", "pw", "pwc", "py", "qa", "qpon", "quebec", "quest", "qvc", "racing", "radio", "raid", "re", "read", "realestate", "realtor", "realty", "recipes", "red", "redstone", "redumbrella", "rehab", "reise", "reisen", "reit", "reliance", "ren", "rent", "rentals", "repair", "report", "republican", "rest", "restaurant", "review", "reviews", "rexroth", "rich", "richardli", "ricoh", "ril", "rio", "rip", "rmit", "ro", "rocher", "rocks", "rodeo", "rogers", "room", "rs", "rsvp", "ru", "rugby", "ruhr", "run", "rw", "rwe", "ryukyu", "sa", "saarland", "safe", "safety", "sakura", "sale", "salon", "samsclub", "samsung", "sandvik", "sandvikcoromant", "sanofi", "sap", "sarl", "sas", "save", "saxo", "sb", "sbi", "sbs", "sc", "sca", "scb", "schaeffler", "schmidt", "scholarships", "school", "schule", "schwarz", "science", "scjohnson", "scot", "sd", "se", "search", "seat", "secure", "security", "seek", "select", "sener", "services", "ses", "seven", "sew", "sex", "sexy", "sfr", "sg", "sh", "shangrila", "sharp", "shaw", "shell", "shia", "shiksha", "shoes", "shop", "shopping", "shouji", "show", "showtime", "shriram", "si", "silk", "sina", "singles", "site", "sj", "sk", "ski", "skin", "sky", "skype", "sl", "sling", "sm", "smart", "smile", "sn", "sncf", "so", "soccer", "social", "softbank", "software", "sohu", "solar", "solutions", "song", "sony", "soy", "spa", "space", "sport", "spot", "spreadbetting", "sr", "srl", "ss", "st", "stada", "staples", "star", "statebank", "statefarm", "stc", "stcgroup", "stockholm", "storage", "store", "stream", "studio", "study", "style", "su", "sucks", "supplies", "supply", "support", "surf", "surgery", "suzuki", "sv", "swatch", "swiftcover", "swiss", "sx", "sy", "sydney", "systems", "sz", "tab", "taipei", "talk", "taobao", "target", "tatamotors", "tatar", "tattoo", "tax", "taxi", "tc", "tci", "td", "tdk", "team", "tech", "technology", "tel", "temasek", "tennis", "teva", "tf", "tg", "th", "thd", "theater", "theatre", "tiaa", "tickets", "tienda", "tiffany", "tips", "tires", "tirol", "tj", "tjmaxx", "tjx", "tk", "tkmaxx", "tl", "tm", "tmall", "tn", "to", "today", "tokyo", "tools", "top", "toray", "toshiba", "total", "tours", "town", "toyota", "toys", "tr", "trade", "trading", "training", "travel", "travelchannel", "travelers", "travelersinsurance", "trust", "trv", "tt", "tube", "tui", "tunes", "tushu", "tv", "tvs", "tw", "tz", "ua", "ubank", "ubs", "ug", "uk", "unicom", "university", "uno", "uol", "ups", "us", "uy", "uz", "va", "vacations", "vana", "vanguard", "vc", "ve", "vegas", "ventures", "verisign", "versicherung", "vet", "vg", "vi", "viajes", "video", "vig", "viking", "villas", "vin", "vip", "virgin", "visa", "vision", "viva", "vivo", "vlaanderen", "vn", "vodka", "volkswagen", "volvo", "vote", "voting", "voto", "voyage", "vu", "vuelos", "wales", "walmart", "walter", "wang", "wanggou", "watch", "watches", "weather", "weatherchannel", "webcam", "weber", "website", "wed", "wedding", "weibo", "weir", "wf", "whoswho", "wien", "wiki", "williamhill", "win", "windows", "wine", "winners", "wme", "wolterskluwer", "woodside", "work", "works", "world", "wow", "ws", "wtc", "wtf", "xbox", "xerox", "xfinity", "xihuan", "xin", "\u0915\u0949\u092E", "\u30BB\u30FC\u30EB", "\u4F5B\u5C71", "\u0CAD\u0CBE\u0CB0\u0CA4", "\u6148\u5584", "\u96C6\u56E2", "\u5728\u7EBF", "\uD55C\uAD6D", "\u0B2D\u0B3E\u0B30\u0B24", "\u5927\u4F17\u6C7D\u8F66", "\u70B9\u770B", "\u0E04\u0E2D\u0E21", "\u09AD\u09BE\u09F0\u09A4", "\u09AD\u09BE\u09B0\u09A4", "\u516B\u5366", "\u0645\u0648\u0642\u0639", "\u09AC\u09BE\u0982\u09B2\u09BE", "\u516C\u76CA", "\u516C\u53F8", "\u9999\u683C\u91CC\u62C9", "\u7F51\u7AD9", "\u79FB\u52A8", "\u6211\u7231\u4F60", "\u043C\u043E\u0441\u043A\u0432\u0430", "\u049B\u0430\u0437", "\u043A\u0430\u0442\u043E\u043B\u0438\u043A", "\u043E\u043D\u043B\u0430\u0439\u043D", "\u0441\u0430\u0439\u0442", "\u8054\u901A", "\u0441\u0440\u0431", "\u0431\u0433", "\u0431\u0435\u043B", "\u05E7\u05D5\u05DD", "\u65F6\u5C1A", "\u5FAE\u535A", "\u6DE1\u9A6C\u9521", "\u30D5\u30A1\u30C3\u30B7\u30E7\u30F3", "\u043E\u0440\u0433", "\u0928\u0947\u091F", "\u30B9\u30C8\u30A2", "\u30A2\u30DE\u30BE\u30F3", "\uC0BC\uC131", "\u0B9A\u0BBF\u0B99\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0BC2\u0BB0\u0BCD", "\u5546\u6807", "\u5546\u5E97", "\u5546\u57CE", "\u0434\u0435\u0442\u0438", "\u043C\u043A\u0434", "\u0435\u044E", "\u30DD\u30A4\u30F3\u30C8", "\u65B0\u95FB", "\u5BB6\u96FB", "\u0643\u0648\u0645", "\u4E2D\u6587\u7F51", "\u4E2D\u4FE1", "\u4E2D\u56FD", "\u4E2D\u570B", "\u5A31\u4E50", "\u8C37\u6B4C", "\u0C2D\u0C3E\u0C30\u0C24\u0C4D", "\u0DBD\u0D82\u0D9A\u0DCF", "\u96FB\u8A0A\u76C8\u79D1", "\u8D2D\u7269", "\u30AF\u30E9\u30A6\u30C9", "\u0AAD\u0ABE\u0AB0\u0AA4", "\u901A\u8CA9", "\u092D\u093E\u0930\u0924\u092E\u094D", "\u092D\u093E\u0930\u0924", "\u092D\u093E\u0930\u094B\u0924", "\u7F51\u5E97", "\u0938\u0902\u0917\u0920\u0928", "\u9910\u5385", "\u7F51\u7EDC", "\u043A\u043E\u043C", "\u0443\u043A\u0440", "\u9999\u6E2F", "\u4E9A\u9A6C\u900A", "\u8BFA\u57FA\u4E9A", "\u98DF\u54C1", "\u98DE\u5229\u6D66", "\u53F0\u6E7E", "\u53F0\u7063", "\u624B\u673A", "\u043C\u043E\u043D", "\u0627\u0644\u062C\u0632\u0627\u0626\u0631", "\u0639\u0645\u0627\u0646", "\u0627\u0631\u0627\u0645\u0643\u0648", "\u0627\u06CC\u0631\u0627\u0646", "\u0627\u0644\u0639\u0644\u064A\u0627\u0646", "\u0627\u062A\u0635\u0627\u0644\u0627\u062A", "\u0627\u0645\u0627\u0631\u0627\u062A", "\u0628\u0627\u0632\u0627\u0631", "\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627", "\u067E\u0627\u06A9\u0633\u062A\u0627\u0646", "\u0627\u0644\u0627\u0631\u062F\u0646", "\u0628\u0627\u0631\u062A", "\u0628\u06BE\u0627\u0631\u062A", "\u0627\u0644\u0645\u063A\u0631\u0628", "\u0627\u0628\u0648\u0638\u0628\u064A", "\u0627\u0644\u0628\u062D\u0631\u064A\u0646", "\u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629", "\u0680\u0627\u0631\u062A", "\u0643\u0627\u062B\u0648\u0644\u064A\u0643", "\u0633\u0648\u062F\u0627\u0646", "\u0647\u0645\u0631\u0627\u0647", "\u0639\u0631\u0627\u0642", "\u0645\u0644\u064A\u0633\u064A\u0627", "\u6FB3\u9580", "\uB2F7\uCEF4", "\u653F\u5E9C", "\u0634\u0628\u0643\u0629", "\u0628\u064A\u062A\u0643", "\u0639\u0631\u0628", "\u10D2\u10D4", "\u673A\u6784", "\u7EC4\u7EC7\u673A\u6784", "\u5065\u5EB7", "\u0E44\u0E17\u0E22", "\u0633\u0648\u0631\u064A\u0629", "\u62DB\u8058", "\u0440\u0443\u0441", "\u0440\u0444", "\u062A\u0648\u0646\u0633", "\u5927\u62FF", "\u0EA5\u0EB2\u0EA7", "\u307F\u3093\u306A", "\u30B0\u30FC\u30B0\u30EB", "\u03B5\u03C5", "\u03B5\u03BB", "\u4E16\u754C", "\u66F8\u7C4D", "\u0D2D\u0D3E\u0D30\u0D24\u0D02", "\u0A2D\u0A3E\u0A30\u0A24", "\u7F51\u5740", "\uB2F7\uB137", "\u30B3\u30E0", "\u5929\u4E3B\u6559", "\u6E38\u620F", "verm\xF6gensberater", "verm\xF6gensberatung", "\u4F01\u4E1A", "\u4FE1\u606F", "\u5609\u91CC\u5927\u9152\u5E97", "\u5609\u91CC", "\u0645\u0635\u0631", "\u0642\u0637\u0631", "\u5E7F\u4E1C", "\u0B87\u0BB2\u0B99\u0BCD\u0B95\u0BC8", "\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE", "\u0570\u0561\u0575", "\u65B0\u52A0\u5761", "\u0641\u0644\u0633\u0637\u064A\u0646", "\u653F\u52A1", "xxx", "xyz", "yachts", "yahoo", "yamaxun", "yandex", "ye", "yodobashi", "yoga", "yokohama", "you", "youtube", "yt", "yun", "za", "zappos", "zara", "zero", "zip", "zm", "zone", "zuerich", "zw"];
  });

  // node_modules/url-regex-safe/lib/index.js
  var require_lib = __commonJS((exports, module) => {
    "use strict";
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = arguments[i2] != null ? arguments[i2] : {};
        if (i2 % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var RE2 = require_re2();
    var ipRegex = require_ip_regex();
    var tlds = require_tlds();
    var SafeRegExp = typeof RE2 === "function" ? RE2 : RegExp;
    var ipv4 = ipRegex.v4().source;
    var ipv6 = ipRegex.v6().source;
    module.exports = function(options) {
      options = _objectSpread({
        exact: false,
        strict: false,
        auth: false,
        localhost: true,
        parens: false,
        apostrophes: false,
        trailingPeriod: false,
        ipv4: true,
        ipv6: true,
        tlds,
        returnString: false
      }, options);
      var protocol = "(?:(?:[a-z]+:)?//)".concat(options.strict ? "" : "?");
      var auth = options.auth ? "(?:\\S+(?::\\S*)?@)?" : "";
      var host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
      var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
      var tld = "(?:\\.".concat(options.strict ? "(?:[a-z\\u00a1-\\uffff]{2,})" : "(?:".concat(options.tlds.sort(function(a2, b2) {
        return b2.length - a2.length;
      }).join("|"), ")"), ")").concat(options.trailingPeriod ? "\\.?" : "");
      var port = "(?::\\d{2,5})?";
      var path = options.parens ? options.apostrophes ? '(?:[/?#][^\\s"]*)?' : `(?:[/?#][^\\s"']*)?` : options.apostrophes ? '(?:[/?#][^\\s"\\)]*)?' : `(?:[/?#][^\\s"\\)']*)?`;
      var regex = "(?:".concat(protocol, "|www\\.)").concat(auth, "(?:");
      if (options.localhost)
        regex += "localhost|";
      if (options.ipv4)
        regex += "".concat(ipv4, "|");
      if (options.ipv6)
        regex += "".concat(ipv6, "|");
      regex += "".concat(host).concat(domain).concat(tld, ")").concat(port).concat(path);
      if (options.returnString)
        return regex;
      return options.exact ? new SafeRegExp("(?:^".concat(regex, "$)"), "i") : new SafeRegExp(regex, "ig");
    };
  });

  // node_modules/normalize-url/index.js
  var require_normalize_url = __commonJS((exports, module) => {
    "use strict";
    const DATA_URL_DEFAULT_MIME_TYPE = "text/plain";
    const DATA_URL_DEFAULT_CHARSET = "us-ascii";
    const testParameter = (name, filters) => {
      return filters.some((filter) => filter instanceof RegExp ? filter.test(name) : filter === name);
    };
    const normalizeDataURL = (urlString, {stripHash}) => {
      const match = /^data:(?<type>.*?),(?<data>.*?)(?:#(?<hash>.*))?$/.exec(urlString);
      if (!match) {
        throw new Error(`Invalid URL: ${urlString}`);
      }
      let {type, data, hash} = match.groups;
      const mediaType = type.split(";");
      hash = stripHash ? "" : hash;
      let isBase64 = false;
      if (mediaType[mediaType.length - 1] === "base64") {
        mediaType.pop();
        isBase64 = true;
      }
      const mimeType = (mediaType.shift() || "").toLowerCase();
      const attributes = mediaType.map((attribute) => {
        let [key, value = ""] = attribute.split("=").map((string) => string.trim());
        if (key === "charset") {
          value = value.toLowerCase();
          if (value === DATA_URL_DEFAULT_CHARSET) {
            return "";
          }
        }
        return `${key}${value ? `=${value}` : ""}`;
      }).filter(Boolean);
      const normalizedMediaType = [
        ...attributes
      ];
      if (isBase64) {
        normalizedMediaType.push("base64");
      }
      if (normalizedMediaType.length !== 0 || mimeType && mimeType !== DATA_URL_DEFAULT_MIME_TYPE) {
        normalizedMediaType.unshift(mimeType);
      }
      return `data:${normalizedMediaType.join(";")},${isBase64 ? data.trim() : data}${hash ? `#${hash}` : ""}`;
    };
    const normalizeUrl = (urlString, options) => {
      options = {
        defaultProtocol: "http:",
        normalizeProtocol: true,
        forceHttp: false,
        forceHttps: false,
        stripAuthentication: true,
        stripHash: false,
        stripWWW: true,
        removeQueryParameters: [/^utm_\w+/i],
        removeTrailingSlash: true,
        removeSingleSlash: true,
        removeDirectoryIndex: false,
        sortQueryParameters: true,
        ...options
      };
      urlString = urlString.trim();
      if (/^data:/i.test(urlString)) {
        return normalizeDataURL(urlString, options);
      }
      if (/^view-source:/i.test(urlString)) {
        throw new Error("`view-source:` is not supported as it is a non-standard protocol");
      }
      const hasRelativeProtocol = urlString.startsWith("//");
      const isRelativeUrl = !hasRelativeProtocol && /^\.*\//.test(urlString);
      if (!isRelativeUrl) {
        urlString = urlString.replace(/^(?!(?:\w+:)?\/\/)|^\/\//, options.defaultProtocol);
      }
      const urlObj = new URL(urlString);
      if (options.forceHttp && options.forceHttps) {
        throw new Error("The `forceHttp` and `forceHttps` options cannot be used together");
      }
      if (options.forceHttp && urlObj.protocol === "https:") {
        urlObj.protocol = "http:";
      }
      if (options.forceHttps && urlObj.protocol === "http:") {
        urlObj.protocol = "https:";
      }
      if (options.stripAuthentication) {
        urlObj.username = "";
        urlObj.password = "";
      }
      if (options.stripHash) {
        urlObj.hash = "";
      }
      if (urlObj.pathname) {
        urlObj.pathname = urlObj.pathname.replace(/(?<!\b(?:[a-z][a-z\d+\-.]{1,50}:))\/{2,}/g, "/");
      }
      if (urlObj.pathname) {
        try {
          urlObj.pathname = decodeURI(urlObj.pathname);
        } catch (_2) {
        }
      }
      if (options.removeDirectoryIndex === true) {
        options.removeDirectoryIndex = [/^index\.[a-z]+$/];
      }
      if (Array.isArray(options.removeDirectoryIndex) && options.removeDirectoryIndex.length > 0) {
        let pathComponents = urlObj.pathname.split("/");
        const lastComponent = pathComponents[pathComponents.length - 1];
        if (testParameter(lastComponent, options.removeDirectoryIndex)) {
          pathComponents = pathComponents.slice(0, pathComponents.length - 1);
          urlObj.pathname = pathComponents.slice(1).join("/") + "/";
        }
      }
      if (urlObj.hostname) {
        urlObj.hostname = urlObj.hostname.replace(/\.$/, "");
        if (options.stripWWW && /^www\.(?!www\.)(?:[a-z\-\d]{1,63})\.(?:[a-z.\-\d]{2,63})$/.test(urlObj.hostname)) {
          urlObj.hostname = urlObj.hostname.replace(/^www\./, "");
        }
      }
      if (Array.isArray(options.removeQueryParameters)) {
        for (const key of [...urlObj.searchParams.keys()]) {
          if (testParameter(key, options.removeQueryParameters)) {
            urlObj.searchParams.delete(key);
          }
        }
      }
      if (options.sortQueryParameters) {
        urlObj.searchParams.sort();
      }
      if (options.removeTrailingSlash) {
        urlObj.pathname = urlObj.pathname.replace(/\/$/, "");
      }
      const oldUrlString = urlString;
      urlString = urlObj.toString();
      if (!options.removeSingleSlash && urlObj.pathname === "/" && !oldUrlString.endsWith("/") && urlObj.hash === "") {
        urlString = urlString.replace(/\/$/, "");
      }
      if ((options.removeTrailingSlash || urlObj.pathname === "/") && urlObj.hash === "" && options.removeSingleSlash) {
        urlString = urlString.replace(/\/$/, "");
      }
      if (hasRelativeProtocol && !options.normalizeProtocol) {
        urlString = urlString.replace(/^http:\/\//, "//");
      }
      if (options.stripProtocol) {
        urlString = urlString.replace(/^(?:https?:)?\/\//, "");
      }
      return urlString;
    };
    module.exports = normalizeUrl;
  });

  // node_modules/get-urls/index.js
  var require_get_urls = __commonJS((exports, module) => {
    "use strict";
    const urlRegex = require_lib();
    const normalizeUrl = require_normalize_url();
    const getUrlsFromQueryParameters = (url2) => {
      const returnValue = new Set();
      const {searchParams} = new URL(url2.replace(/^(?:\/\/|(?:www\.))/i, "http://$2"));
      for (const [, value] of searchParams) {
        if (urlRegex({exact: true}).test(value)) {
          returnValue.add(value);
        }
      }
      return returnValue;
    };
    module.exports = (text, options = {}) => {
      if (typeof text !== "string") {
        throw new TypeError(`The \`text\` argument should be a string, got ${typeof text}`);
      }
      if (typeof options.exclude !== "undefined" && !Array.isArray(options.exclude)) {
        throw new TypeError("The `exclude` option must be an array");
      }
      const returnValue = new Set();
      const add = (url2) => {
        try {
          returnValue.add(normalizeUrl(url2.trim().replace(/\.+$/, ""), options));
        } catch {
        }
      };
      const urls = text.match(urlRegex(options.requireSchemeOrWww === void 0 ? void 0 : {
        strict: options.requireSchemeOrWww
      })) || [];
      for (const url2 of urls) {
        add(url2);
        if (options.extractFromQueryString) {
          const qsUrls = getUrlsFromQueryParameters(url2);
          for (const qsUrl of qsUrls) {
            add(qsUrl);
          }
        }
      }
      for (const excludedItem of options.exclude || []) {
        for (const item of returnValue) {
          const regex = new RegExp(excludedItem);
          if (regex.test(item)) {
            returnValue.delete(item);
          }
        }
      }
      return returnValue;
    };
  });

  // node_modules/@pwabuilder/pwaupdate/dist/pwa-update.js
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  const t = new WeakMap();
  const e = (e2) => typeof e2 == "function" && t.has(e2);
  const s = window.customElements !== void 0 && window.customElements.polyfillWrapFlushCallback !== void 0;
  const i = (t2, e2, s2 = null) => {
    for (; e2 !== s2; ) {
      const s3 = e2.nextSibling;
      t2.removeChild(e2), e2 = s3;
    }
  };
  const n = {};
  const o = {};
  const r = `{{lit-${String(Math.random()).slice(2)}}}`;
  const a = `<!--${r}-->`;
  const l = new RegExp(`${r}|${a}`);
  class d {
    constructor(t2, e2) {
      this.parts = [], this.element = e2;
      const s2 = [], i2 = [], n2 = document.createTreeWalker(e2.content, 133, null, false);
      let o2 = 0, a2 = -1, d2 = 0;
      const {strings: c2, values: {length: f2}} = t2;
      for (; d2 < f2; ) {
        const t3 = n2.nextNode();
        if (t3 !== null) {
          if (a2++, t3.nodeType === 1) {
            if (t3.hasAttributes()) {
              const e3 = t3.attributes, {length: s3} = e3;
              let i3 = 0;
              for (let t4 = 0; t4 < s3; t4++)
                h(e3[t4].name, "$lit$") && i3++;
              for (; i3-- > 0; ) {
                const e4 = c2[d2], s4 = u.exec(e4)[2], i4 = s4.toLowerCase() + "$lit$", n3 = t3.getAttribute(i4);
                t3.removeAttribute(i4);
                const o3 = n3.split(l);
                this.parts.push({type: "attribute", index: a2, name: s4, strings: o3}), d2 += o3.length - 1;
              }
            }
            t3.tagName === "TEMPLATE" && (i2.push(t3), n2.currentNode = t3.content);
          } else if (t3.nodeType === 3) {
            const e3 = t3.data;
            if (e3.indexOf(r) >= 0) {
              const i3 = t3.parentNode, n3 = e3.split(l), o3 = n3.length - 1;
              for (let e4 = 0; e4 < o3; e4++) {
                let s3, o4 = n3[e4];
                if (o4 === "")
                  s3 = p();
                else {
                  const t4 = u.exec(o4);
                  t4 !== null && h(t4[2], "$lit$") && (o4 = o4.slice(0, t4.index) + t4[1] + t4[2].slice(0, -"$lit$".length) + t4[3]), s3 = document.createTextNode(o4);
                }
                i3.insertBefore(s3, t3), this.parts.push({type: "node", index: ++a2});
              }
              n3[o3] === "" ? (i3.insertBefore(p(), t3), s2.push(t3)) : t3.data = n3[o3], d2 += o3;
            }
          } else if (t3.nodeType === 8)
            if (t3.data === r) {
              const e3 = t3.parentNode;
              t3.previousSibling !== null && a2 !== o2 || (a2++, e3.insertBefore(p(), t3)), o2 = a2, this.parts.push({type: "node", index: a2}), t3.nextSibling === null ? t3.data = "" : (s2.push(t3), a2--), d2++;
            } else {
              let e3 = -1;
              for (; (e3 = t3.data.indexOf(r, e3 + 1)) !== -1; )
                this.parts.push({type: "node", index: -1}), d2++;
            }
        } else
          n2.currentNode = i2.pop();
      }
      for (const t3 of s2)
        t3.parentNode.removeChild(t3);
    }
  }
  const h = (t2, e2) => {
    const s2 = t2.length - e2.length;
    return s2 >= 0 && t2.slice(s2) === e2;
  };
  const c = (t2) => t2.index !== -1;
  const p = () => document.createComment("");
  const u = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  class f {
    constructor(t2, e2, s2) {
      this.__parts = [], this.template = t2, this.processor = e2, this.options = s2;
    }
    update(t2) {
      let e2 = 0;
      for (const s2 of this.__parts)
        s2 !== void 0 && s2.setValue(t2[e2]), e2++;
      for (const t3 of this.__parts)
        t3 !== void 0 && t3.commit();
    }
    _clone() {
      const t2 = s ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true), e2 = [], i2 = this.template.parts, n2 = document.createTreeWalker(t2, 133, null, false);
      let o2, r2 = 0, a2 = 0, l2 = n2.nextNode();
      for (; r2 < i2.length; )
        if (o2 = i2[r2], c(o2)) {
          for (; a2 < o2.index; )
            a2++, l2.nodeName === "TEMPLATE" && (e2.push(l2), n2.currentNode = l2.content), (l2 = n2.nextNode()) === null && (n2.currentNode = e2.pop(), l2 = n2.nextNode());
          if (o2.type === "node") {
            const t3 = this.processor.handleTextExpression(this.options);
            t3.insertAfterNode(l2.previousSibling), this.__parts.push(t3);
          } else
            this.__parts.push(...this.processor.handleAttributeExpressions(l2, o2.name, o2.strings, this.options));
          r2++;
        } else
          this.__parts.push(void 0), r2++;
      return s && (document.adoptNode(t2), customElements.upgrade(t2)), t2;
    }
  }
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  const m = ` ${r} `;
  class g {
    constructor(t2, e2, s2, i2) {
      this.strings = t2, this.values = e2, this.type = s2, this.processor = i2;
    }
    getHTML() {
      const t2 = this.strings.length - 1;
      let e2 = "", s2 = false;
      for (let i2 = 0; i2 < t2; i2++) {
        const t3 = this.strings[i2], n2 = t3.lastIndexOf("<!--");
        s2 = (n2 > -1 || s2) && t3.indexOf("-->", n2 + 1) === -1;
        const o2 = u.exec(t3);
        e2 += o2 === null ? t3 + (s2 ? m : a) : t3.substr(0, o2.index) + o2[1] + o2[2] + "$lit$" + o2[3] + r;
      }
      return e2 += this.strings[t2], e2;
    }
    getTemplateElement() {
      const t2 = document.createElement("template");
      return t2.innerHTML = this.getHTML(), t2;
    }
  }
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  const _ = (t2) => t2 === null || !(typeof t2 == "object" || typeof t2 == "function");
  const y = (t2) => Array.isArray(t2) || !(!t2 || !t2[Symbol.iterator]);
  class v {
    constructor(t2, e2, s2) {
      this.dirty = true, this.element = t2, this.name = e2, this.strings = s2, this.parts = [];
      for (let t3 = 0; t3 < s2.length - 1; t3++)
        this.parts[t3] = this._createPart();
    }
    _createPart() {
      return new w(this);
    }
    _getValue() {
      const t2 = this.strings, e2 = t2.length - 1;
      let s2 = "";
      for (let i2 = 0; i2 < e2; i2++) {
        s2 += t2[i2];
        const e3 = this.parts[i2];
        if (e3 !== void 0) {
          const t3 = e3.value;
          if (_(t3) || !y(t3))
            s2 += typeof t3 == "string" ? t3 : String(t3);
          else
            for (const e4 of t3)
              s2 += typeof e4 == "string" ? e4 : String(e4);
        }
      }
      return s2 += t2[e2], s2;
    }
    commit() {
      this.dirty && (this.dirty = false, this.element.setAttribute(this.name, this._getValue()));
    }
  }
  class w {
    constructor(t2) {
      this.value = void 0, this.committer = t2;
    }
    setValue(t2) {
      t2 === n || _(t2) && t2 === this.value || (this.value = t2, e(t2) || (this.committer.dirty = true));
    }
    commit() {
      for (; e(this.value); ) {
        const t2 = this.value;
        this.value = n, t2(this);
      }
      this.value !== n && this.committer.commit();
    }
  }
  class S {
    constructor(t2) {
      this.value = void 0, this.__pendingValue = void 0, this.options = t2;
    }
    appendInto(t2) {
      this.startNode = t2.appendChild(p()), this.endNode = t2.appendChild(p());
    }
    insertAfterNode(t2) {
      this.startNode = t2, this.endNode = t2.nextSibling;
    }
    appendIntoPart(t2) {
      t2.__insert(this.startNode = p()), t2.__insert(this.endNode = p());
    }
    insertAfterPart(t2) {
      t2.__insert(this.startNode = p()), this.endNode = t2.endNode, t2.endNode = this.startNode;
    }
    setValue(t2) {
      this.__pendingValue = t2;
    }
    commit() {
      for (; e(this.__pendingValue); ) {
        const t3 = this.__pendingValue;
        this.__pendingValue = n, t3(this);
      }
      const t2 = this.__pendingValue;
      t2 !== n && (_(t2) ? t2 !== this.value && this.__commitText(t2) : t2 instanceof g ? this.__commitTemplateResult(t2) : t2 instanceof Node ? this.__commitNode(t2) : y(t2) ? this.__commitIterable(t2) : t2 === o ? (this.value = o, this.clear()) : this.__commitText(t2));
    }
    __insert(t2) {
      this.endNode.parentNode.insertBefore(t2, this.endNode);
    }
    __commitNode(t2) {
      this.value !== t2 && (this.clear(), this.__insert(t2), this.value = t2);
    }
    __commitText(t2) {
      const e2 = this.startNode.nextSibling, s2 = typeof (t2 = t2 == null ? "" : t2) == "string" ? t2 : String(t2);
      e2 === this.endNode.previousSibling && e2.nodeType === 3 ? e2.data = s2 : this.__commitNode(document.createTextNode(s2)), this.value = t2;
    }
    __commitTemplateResult(t2) {
      const e2 = this.options.templateFactory(t2);
      if (this.value instanceof f && this.value.template === e2)
        this.value.update(t2.values);
      else {
        const s2 = new f(e2, t2.processor, this.options), i2 = s2._clone();
        s2.update(t2.values), this.__commitNode(i2), this.value = s2;
      }
    }
    __commitIterable(t2) {
      Array.isArray(this.value) || (this.value = [], this.clear());
      const e2 = this.value;
      let s2, i2 = 0;
      for (const n2 of t2)
        s2 = e2[i2], s2 === void 0 && (s2 = new S(this.options), e2.push(s2), i2 === 0 ? s2.appendIntoPart(this) : s2.insertAfterPart(e2[i2 - 1])), s2.setValue(n2), s2.commit(), i2++;
      i2 < e2.length && (e2.length = i2, this.clear(s2 && s2.endNode));
    }
    clear(t2 = this.startNode) {
      i(this.startNode.parentNode, t2.nextSibling, this.endNode);
    }
  }
  class b {
    constructor(t2, e2, s2) {
      if (this.value = void 0, this.__pendingValue = void 0, s2.length !== 2 || s2[0] !== "" || s2[1] !== "")
        throw new Error("Boolean attributes can only contain a single expression");
      this.element = t2, this.name = e2, this.strings = s2;
    }
    setValue(t2) {
      this.__pendingValue = t2;
    }
    commit() {
      for (; e(this.__pendingValue); ) {
        const t3 = this.__pendingValue;
        this.__pendingValue = n, t3(this);
      }
      if (this.__pendingValue === n)
        return;
      const t2 = !!this.__pendingValue;
      this.value !== t2 && (t2 ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = t2), this.__pendingValue = n;
    }
  }
  class x extends v {
    constructor(t2, e2, s2) {
      super(t2, e2, s2), this.single = s2.length === 2 && s2[0] === "" && s2[1] === "";
    }
    _createPart() {
      return new P(this);
    }
    _getValue() {
      return this.single ? this.parts[0].value : super._getValue();
    }
    commit() {
      this.dirty && (this.dirty = false, this.element[this.name] = this._getValue());
    }
  }
  class P extends w {
  }
  let C = false;
  try {
    const t2 = {get capture() {
      return C = true, false;
    }};
    window.addEventListener("test", t2, t2), window.removeEventListener("test", t2, t2);
  } catch (t2) {
  }
  class T {
    constructor(t2, e2, s2) {
      this.value = void 0, this.__pendingValue = void 0, this.element = t2, this.eventName = e2, this.eventContext = s2, this.__boundHandleEvent = (t3) => this.handleEvent(t3);
    }
    setValue(t2) {
      this.__pendingValue = t2;
    }
    commit() {
      for (; e(this.__pendingValue); ) {
        const t3 = this.__pendingValue;
        this.__pendingValue = n, t3(this);
      }
      if (this.__pendingValue === n)
        return;
      const t2 = this.__pendingValue, s2 = this.value, i2 = t2 == null || s2 != null && (t2.capture !== s2.capture || t2.once !== s2.once || t2.passive !== s2.passive), o2 = t2 != null && (s2 == null || i2);
      i2 && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), o2 && (this.__options = N(t2), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = t2, this.__pendingValue = n;
    }
    handleEvent(t2) {
      typeof this.value == "function" ? this.value.call(this.eventContext || this.element, t2) : this.value.handleEvent(t2);
    }
  }
  const N = (t2) => t2 && (C ? {capture: t2.capture, passive: t2.passive, once: t2.once} : t2.capture);
  const E = new class {
    handleAttributeExpressions(t2, e2, s2, i2) {
      const n2 = e2[0];
      if (n2 === ".") {
        return new x(t2, e2.slice(1), s2).parts;
      }
      return n2 === "@" ? [new T(t2, e2.slice(1), i2.eventContext)] : n2 === "?" ? [new b(t2, e2.slice(1), s2)] : new v(t2, e2, s2).parts;
    }
    handleTextExpression(t2) {
      return new S(t2);
    }
  }();
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  function A(t2) {
    let e2 = k.get(t2.type);
    e2 === void 0 && (e2 = {stringsArray: new WeakMap(), keyString: new Map()}, k.set(t2.type, e2));
    let s2 = e2.stringsArray.get(t2.strings);
    if (s2 !== void 0)
      return s2;
    const i2 = t2.strings.join(r);
    return s2 = e2.keyString.get(i2), s2 === void 0 && (s2 = new d(t2, t2.getTemplateElement()), e2.keyString.set(i2, s2)), e2.stringsArray.set(t2.strings, s2), s2;
  }
  const k = new Map();
  const V = new WeakMap();
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.1.2");
  const O = (t2, ...e2) => new g(t2, e2, "html", E);
  function U(t2, e2) {
    const {element: {content: s2}, parts: i2} = t2, n2 = document.createTreeWalker(s2, 133, null, false);
    let o2 = M(i2), r2 = i2[o2], a2 = -1, l2 = 0;
    const d2 = [];
    let h2 = null;
    for (; n2.nextNode(); ) {
      a2++;
      const t3 = n2.currentNode;
      for (t3.previousSibling === h2 && (h2 = null), e2.has(t3) && (d2.push(t3), h2 === null && (h2 = t3)), h2 !== null && l2++; r2 !== void 0 && r2.index === a2; )
        r2.index = h2 !== null ? -1 : r2.index - l2, o2 = M(i2, o2), r2 = i2[o2];
    }
    d2.forEach((t3) => t3.parentNode.removeChild(t3));
  }
  const R = (t2) => {
    let e2 = t2.nodeType === 11 ? 0 : 1;
    const s2 = document.createTreeWalker(t2, 133, null, false);
    for (; s2.nextNode(); )
      e2++;
    return e2;
  };
  const M = (t2, e2 = -1) => {
    for (let s2 = e2 + 1; s2 < t2.length; s2++) {
      const e3 = t2[s2];
      if (c(e3))
        return s2;
    }
    return -1;
  };
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  const B = (t2, e2) => `${t2}--${e2}`;
  let $ = true;
  window.ShadyCSS === void 0 ? $ = false : window.ShadyCSS.prepareTemplateDom === void 0 && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), $ = false);
  const j = (t2) => (e2) => {
    const s2 = B(e2.type, t2);
    let i2 = k.get(s2);
    i2 === void 0 && (i2 = {stringsArray: new WeakMap(), keyString: new Map()}, k.set(s2, i2));
    let n2 = i2.stringsArray.get(e2.strings);
    if (n2 !== void 0)
      return n2;
    const o2 = e2.strings.join(r);
    if (n2 = i2.keyString.get(o2), n2 === void 0) {
      const s3 = e2.getTemplateElement();
      $ && window.ShadyCSS.prepareTemplateDom(s3, t2), n2 = new d(e2, s3), i2.keyString.set(o2, n2);
    }
    return i2.stringsArray.set(e2.strings, n2), n2;
  };
  const z = ["html", "svg"];
  const q = new Set();
  const F = (t2, e2, s2) => {
    q.add(t2);
    const i2 = s2 ? s2.element : document.createElement("template"), n2 = e2.querySelectorAll("style"), {length: o2} = n2;
    if (o2 === 0)
      return void window.ShadyCSS.prepareTemplateStyles(i2, t2);
    const r2 = document.createElement("style");
    for (let t3 = 0; t3 < o2; t3++) {
      const e3 = n2[t3];
      e3.parentNode.removeChild(e3), r2.textContent += e3.textContent;
    }
    ((t3) => {
      z.forEach((e3) => {
        const s3 = k.get(B(e3, t3));
        s3 !== void 0 && s3.keyString.forEach((t4) => {
          const {element: {content: e4}} = t4, s4 = new Set();
          Array.from(e4.querySelectorAll("style")).forEach((t5) => {
            s4.add(t5);
          }), U(t4, s4);
        });
      });
    })(t2);
    const a2 = i2.content;
    s2 ? function(t3, e3, s3 = null) {
      const {element: {content: i3}, parts: n3} = t3;
      if (s3 == null)
        return void i3.appendChild(e3);
      const o3 = document.createTreeWalker(i3, 133, null, false);
      let r3 = M(n3), a3 = 0, l3 = -1;
      for (; o3.nextNode(); ) {
        for (l3++, o3.currentNode === s3 && (a3 = R(e3), s3.parentNode.insertBefore(e3, s3)); r3 !== -1 && n3[r3].index === l3; ) {
          if (a3 > 0) {
            for (; r3 !== -1; )
              n3[r3].index += a3, r3 = M(n3, r3);
            return;
          }
          r3 = M(n3, r3);
        }
      }
    }(s2, r2, a2.firstChild) : a2.insertBefore(r2, a2.firstChild), window.ShadyCSS.prepareTemplateStyles(i2, t2);
    const l2 = a2.querySelector("style");
    if (window.ShadyCSS.nativeShadow && l2 !== null)
      e2.insertBefore(l2.cloneNode(true), e2.firstChild);
    else if (s2) {
      a2.insertBefore(r2, a2.firstChild);
      const t3 = new Set();
      t3.add(r2), U(s2, t3);
    }
  };
  window.JSCompiler_renameProperty = (t2, e2) => t2;
  const I = {toAttribute(t2, e2) {
    switch (e2) {
      case Boolean:
        return t2 ? "" : null;
      case Object:
      case Array:
        return t2 == null ? t2 : JSON.stringify(t2);
    }
    return t2;
  }, fromAttribute(t2, e2) {
    switch (e2) {
      case Boolean:
        return t2 !== null;
      case Number:
        return t2 === null ? null : Number(t2);
      case Object:
      case Array:
        return JSON.parse(t2);
    }
    return t2;
  }};
  const W = (t2, e2) => e2 !== t2 && (e2 == e2 || t2 == t2);
  const L = {attribute: true, type: String, converter: I, reflect: false, hasChanged: W};
  const H = Promise.resolve(true);
  class D extends HTMLElement {
    constructor() {
      super(), this._updateState = 0, this._instanceProperties = void 0, this._updatePromise = H, this._hasConnectedResolver = void 0, this._changedProperties = new Map(), this._reflectingProperties = void 0, this.initialize();
    }
    static get observedAttributes() {
      this.finalize();
      const t2 = [];
      return this._classProperties.forEach((e2, s2) => {
        const i2 = this._attributeNameForProperty(s2, e2);
        i2 !== void 0 && (this._attributeToPropertyMap.set(i2, s2), t2.push(i2));
      }), t2;
    }
    static _ensureClassProperties() {
      if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
        this._classProperties = new Map();
        const t2 = Object.getPrototypeOf(this)._classProperties;
        t2 !== void 0 && t2.forEach((t3, e2) => this._classProperties.set(e2, t3));
      }
    }
    static createProperty(t2, e2 = L) {
      if (this._ensureClassProperties(), this._classProperties.set(t2, e2), e2.noAccessor || this.prototype.hasOwnProperty(t2))
        return;
      const s2 = typeof t2 == "symbol" ? Symbol() : `__${t2}`;
      Object.defineProperty(this.prototype, t2, {get() {
        return this[s2];
      }, set(e3) {
        const i2 = this[t2];
        this[s2] = e3, this._requestUpdate(t2, i2);
      }, configurable: true, enumerable: true});
    }
    static finalize() {
      const t2 = Object.getPrototypeOf(this);
      if (t2.hasOwnProperty("finalized") || t2.finalize(), this.finalized = true, this._ensureClassProperties(), this._attributeToPropertyMap = new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
        const t3 = this.properties, e2 = [...Object.getOwnPropertyNames(t3), ...typeof Object.getOwnPropertySymbols == "function" ? Object.getOwnPropertySymbols(t3) : []];
        for (const s2 of e2)
          this.createProperty(s2, t3[s2]);
      }
    }
    static _attributeNameForProperty(t2, e2) {
      const s2 = e2.attribute;
      return s2 === false ? void 0 : typeof s2 == "string" ? s2 : typeof t2 == "string" ? t2.toLowerCase() : void 0;
    }
    static _valueHasChanged(t2, e2, s2 = W) {
      return s2(t2, e2);
    }
    static _propertyValueFromAttribute(t2, e2) {
      const s2 = e2.type, i2 = e2.converter || I, n2 = typeof i2 == "function" ? i2 : i2.fromAttribute;
      return n2 ? n2(t2, s2) : t2;
    }
    static _propertyValueToAttribute(t2, e2) {
      if (e2.reflect === void 0)
        return;
      const s2 = e2.type, i2 = e2.converter;
      return (i2 && i2.toAttribute || I.toAttribute)(t2, s2);
    }
    initialize() {
      this._saveInstanceProperties(), this._requestUpdate();
    }
    _saveInstanceProperties() {
      this.constructor._classProperties.forEach((t2, e2) => {
        if (this.hasOwnProperty(e2)) {
          const t3 = this[e2];
          delete this[e2], this._instanceProperties || (this._instanceProperties = new Map()), this._instanceProperties.set(e2, t3);
        }
      });
    }
    _applyInstanceProperties() {
      this._instanceProperties.forEach((t2, e2) => this[e2] = t2), this._instanceProperties = void 0;
    }
    connectedCallback() {
      this._updateState = 32 | this._updateState, this._hasConnectedResolver && (this._hasConnectedResolver(), this._hasConnectedResolver = void 0);
    }
    disconnectedCallback() {
    }
    attributeChangedCallback(t2, e2, s2) {
      e2 !== s2 && this._attributeToProperty(t2, s2);
    }
    _propertyToAttribute(t2, e2, s2 = L) {
      const i2 = this.constructor, n2 = i2._attributeNameForProperty(t2, s2);
      if (n2 !== void 0) {
        const t3 = i2._propertyValueToAttribute(e2, s2);
        if (t3 === void 0)
          return;
        this._updateState = 8 | this._updateState, t3 == null ? this.removeAttribute(n2) : this.setAttribute(n2, t3), this._updateState = -9 & this._updateState;
      }
    }
    _attributeToProperty(t2, e2) {
      if (8 & this._updateState)
        return;
      const s2 = this.constructor, i2 = s2._attributeToPropertyMap.get(t2);
      if (i2 !== void 0) {
        const t3 = s2._classProperties.get(i2) || L;
        this._updateState = 16 | this._updateState, this[i2] = s2._propertyValueFromAttribute(e2, t3), this._updateState = -17 & this._updateState;
      }
    }
    _requestUpdate(t2, e2) {
      let s2 = true;
      if (t2 !== void 0) {
        const i2 = this.constructor, n2 = i2._classProperties.get(t2) || L;
        i2._valueHasChanged(this[t2], e2, n2.hasChanged) ? (this._changedProperties.has(t2) || this._changedProperties.set(t2, e2), n2.reflect !== true || 16 & this._updateState || (this._reflectingProperties === void 0 && (this._reflectingProperties = new Map()), this._reflectingProperties.set(t2, n2))) : s2 = false;
      }
      !this._hasRequestedUpdate && s2 && this._enqueueUpdate();
    }
    requestUpdate(t2, e2) {
      return this._requestUpdate(t2, e2), this.updateComplete;
    }
    async _enqueueUpdate() {
      let t2, e2;
      this._updateState = 4 | this._updateState;
      const s2 = this._updatePromise;
      this._updatePromise = new Promise((s3, i2) => {
        t2 = s3, e2 = i2;
      });
      try {
        await s2;
      } catch (t3) {
      }
      this._hasConnected || await new Promise((t3) => this._hasConnectedResolver = t3);
      try {
        const t3 = this.performUpdate();
        t3 != null && await t3;
      } catch (t3) {
        e2(t3);
      }
      t2(!this._hasRequestedUpdate);
    }
    get _hasConnected() {
      return 32 & this._updateState;
    }
    get _hasRequestedUpdate() {
      return 4 & this._updateState;
    }
    get hasUpdated() {
      return 1 & this._updateState;
    }
    performUpdate() {
      this._instanceProperties && this._applyInstanceProperties();
      let t2 = false;
      const e2 = this._changedProperties;
      try {
        t2 = this.shouldUpdate(e2), t2 && this.update(e2);
      } catch (e3) {
        throw t2 = false, e3;
      } finally {
        this._markUpdated();
      }
      t2 && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(e2)), this.updated(e2));
    }
    _markUpdated() {
      this._changedProperties = new Map(), this._updateState = -5 & this._updateState;
    }
    get updateComplete() {
      return this._getUpdateComplete();
    }
    _getUpdateComplete() {
      return this._updatePromise;
    }
    shouldUpdate(t2) {
      return true;
    }
    update(t2) {
      this._reflectingProperties !== void 0 && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach((t3, e2) => this._propertyToAttribute(e2, this[e2], t3)), this._reflectingProperties = void 0);
    }
    updated(t2) {
    }
    firstUpdated(t2) {
    }
  }
  D.finalized = true;
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  const J = (t2, e2) => e2.kind === "method" && e2.descriptor && !("value" in e2.descriptor) ? Object.assign({}, e2, {finisher(s2) {
    s2.createProperty(e2.key, t2);
  }}) : {kind: "field", key: Symbol(), placement: "own", descriptor: {}, initializer() {
    typeof e2.initializer == "function" && (this[e2.key] = e2.initializer.call(this));
  }, finisher(s2) {
    s2.createProperty(e2.key, t2);
  }};
  function G(t2) {
    return (e2, s2) => s2 !== void 0 ? ((t3, e3, s3) => {
      e3.constructor.createProperty(s3, t3);
    })(t2, e2, s2) : J(t2, e2);
  }
  /**
  @license
  Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */
  const K = "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  const Y = Symbol();
  class Z {
    constructor(t2, e2) {
      if (e2 !== Y)
        throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t2;
    }
    get styleSheet() {
      return this._styleSheet === void 0 && (K ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
    }
    toString() {
      return this.cssText;
    }
  }
  const Q = (t2, ...e2) => {
    const s2 = e2.reduce((e3, s3, i2) => e3 + ((t3) => {
      if (t3 instanceof Z)
        return t3.cssText;
      if (typeof t3 == "number")
        return t3;
      throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t3}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
    })(s3) + t2[i2 + 1], t2[0]);
    return new Z(s2, Y);
  };
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  (window.litElementVersions || (window.litElementVersions = [])).push("2.2.1");
  const X = (t2) => t2.flat ? t2.flat(1 / 0) : function t3(e2, s2 = []) {
    for (let i2 = 0, n2 = e2.length; i2 < n2; i2++) {
      const n3 = e2[i2];
      Array.isArray(n3) ? t3(n3, s2) : s2.push(n3);
    }
    return s2;
  }(t2);
  class tt extends D {
    static finalize() {
      super.finalize.call(this), this._styles = this.hasOwnProperty(JSCompiler_renameProperty("styles", this)) ? this._getUniqueStyles() : this._styles || [];
    }
    static _getUniqueStyles() {
      const t2 = this.styles, e2 = [];
      if (Array.isArray(t2)) {
        X(t2).reduceRight((t3, e3) => (t3.add(e3), t3), new Set()).forEach((t3) => e2.unshift(t3));
      } else
        t2 && e2.push(t2);
      return e2;
    }
    initialize() {
      super.initialize(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles();
    }
    createRenderRoot() {
      return this.attachShadow({mode: "open"});
    }
    adoptStyles() {
      const t2 = this.constructor._styles;
      t2.length !== 0 && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow ? K ? this.renderRoot.adoptedStyleSheets = t2.map((t3) => t3.styleSheet) : this._needsShimAdoptedStyleSheets = true : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t2.map((t3) => t3.cssText), this.localName));
    }
    connectedCallback() {
      super.connectedCallback(), this.hasUpdated && window.ShadyCSS !== void 0 && window.ShadyCSS.styleElement(this);
    }
    update(t2) {
      super.update(t2);
      const e2 = this.render();
      e2 instanceof g && this.constructor.render(e2, this.renderRoot, {scopeName: this.localName, eventContext: this}), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = false, this.constructor._styles.forEach((t3) => {
        const e3 = document.createElement("style");
        e3.textContent = t3.cssText, this.renderRoot.appendChild(e3);
      }));
    }
    render() {
    }
  }
  tt.finalized = true, tt.render = (t2, e2, s2) => {
    if (!s2 || typeof s2 != "object" || !s2.scopeName)
      throw new Error("The `scopeName` option is required.");
    const n2 = s2.scopeName, o2 = V.has(e2), r2 = $ && e2.nodeType === 11 && !!e2.host, a2 = r2 && !q.has(n2), l2 = a2 ? document.createDocumentFragment() : e2;
    if (((t3, e3, s3) => {
      let n3 = V.get(e3);
      n3 === void 0 && (i(e3, e3.firstChild), V.set(e3, n3 = new S(Object.assign({templateFactory: A}, s3))), n3.appendInto(e3)), n3.setValue(t3), n3.commit();
    })(t2, l2, Object.assign({templateFactory: j(n2)}, s2)), a2) {
      const t3 = V.get(l2);
      V.delete(l2);
      const s3 = t3.value instanceof f ? t3.value.template : void 0;
      F(n2, l2, s3), i(e2, e2.firstChild), e2.appendChild(l2), V.set(e2, t3);
    }
    !o2 && r2 && window.ShadyCSS.styleElement(e2.host);
  };
  var et = function(t2, e2, s2, i2) {
    var n2, o2 = arguments.length, r2 = o2 < 3 ? e2 : i2 === null ? i2 = Object.getOwnPropertyDescriptor(e2, s2) : i2;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      r2 = Reflect.decorate(t2, e2, s2, i2);
    else
      for (var a2 = t2.length - 1; a2 >= 0; a2--)
        (n2 = t2[a2]) && (r2 = (o2 < 3 ? n2(r2) : o2 > 3 ? n2(e2, s2, r2) : n2(e2, s2)) || r2);
    return o2 > 3 && r2 && Object.defineProperty(e2, s2, r2), r2;
  };
  let st = class extends tt {
    constructor() {
      super(...arguments), this.swpath = "pwabuilder-sw.js", this.updateevent = "SKIP_WAITING", this.updatemessage = "An update for this app is available", this.readyToAsk = false, this.showStorageEstimate = false, this.showOfflineToast = false, this.offlineToastDuration = 2400, this.storageUsed = null;
    }
    static get styles() {
      return Q`:host{font-family:sans-serif;--toast-background:#3c3c3c;--button-background:#0b0b0b}#updateToast{position:fixed;bottom:16px;right:16px;background:var(--toast-background);color:#fff;padding:1em;border-radius:4px;display:flex;align-items:center;justify-content:space-between;min-width:22em;font-weight:600;animation-name:fadein;animation-duration:.3s}#storageToast{position:fixed;bottom:16px;right:16px;background:var(--toast-background);color:#fff;padding:1em;border-radius:4px;display:flex;flex-direction:column;align-items:flex-end;font-weight:600}#storageEstimate{font-size:10px;margin-top:8px}#updateToast button{color:#fff;border:none;background:var(--button-background);padding:8px;border-radius:24px;text-transform:lowercase;padding-left:14px;padding-right:14px;font-weight:700}@keyframes fadein{from{opacity:0}to{opacity:1}}`;
    }
    async firstUpdated() {
      if (this.swpath && "serviceWorker" in navigator) {
        const t2 = await navigator.serviceWorker.register(this.swpath);
        if (t2.installing && navigator.storage) {
          const t3 = await navigator.storage.estimate();
          if (t3) {
            this.storageUsed = this.formatBytes(t3.usage), this.showOfflineToast = true, await this.updateComplete;
            const e2 = this.shadowRoot.querySelector("#storageToast").animate([{opacity: 0}, {opacity: 1}], {fill: "forwards", duration: 280});
            setTimeout(async () => {
              e2.onfinish = () => {
                this.showOfflineToast = false;
              }, await e2.reverse();
            }, this.offlineToastDuration);
          }
        }
        t2.onupdatefound = async () => {
          let e2 = t2.installing;
          e2.onstatechange = () => {
            e2.state === "installed" && this.dispatchEvent(new Event("pwaUpdate"));
          };
        };
      }
      this.setupEvents();
    }
    setupEvents() {
      this.addEventListener("pwaUpdate", async () => {
        navigator.serviceWorker && (this.swreg = await navigator.serviceWorker.getRegistration(), this.swreg && this.swreg.waiting && (this.readyToAsk = true));
      });
    }
    doUpdate() {
      this.swreg.waiting.postMessage({type: this.updateevent}), window.location.reload();
    }
    formatBytes(t2, e2 = 2) {
      if (t2 === 0)
        return "0 Bytes";
      const s2 = e2 < 0 ? 0 : e2, i2 = Math.floor(Math.log(t2) / Math.log(1024));
      return parseFloat((t2 / Math.pow(1024, i2)).toFixed(s2)) + " " + ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][i2];
    }
    render() {
      return O`<div>${this.readyToAsk ? O`<div id=updateToast part=updateToast><span>${this.updatemessage}</span> <button @click=${() => this.doUpdate()}>Update</button></div>` : null} ${this.showOfflineToast ? O`<div id=storageToast part=offlineToast>Ready to use Offline ${this.showStorageEstimate ? O`<span id=storageEstimate>Cached ${this.storageUsed}</span>` : null}</div>` : null}</div>`;
    }
  };
  var it;
  et([G({type: String})], st.prototype, "swpath", void 0), et([G({type: String})], st.prototype, "updateevent", void 0), et([G({type: String})], st.prototype, "updatemessage", void 0), et([G({type: Boolean})], st.prototype, "readyToAsk", void 0), et([G({type: Boolean})], st.prototype, "showStorageEstimate", void 0), et([G({type: Boolean})], st.prototype, "showOfflineToast", void 0), et([G({type: Number})], st.prototype, "offlineToastDuration", void 0), et([G({type: String})], st.prototype, "storageUsed", void 0), st = et([(it = "pwa-update", (t2) => typeof t2 == "function" ? ((t3, e2) => (window.customElements.define(t3, e2), e2))(it, t2) : ((t3, e2) => {
    const {kind: s2, elements: i2} = e2;
    return {kind: s2, elements: i2, finisher(e3) {
      window.customElements.define(t3, e3);
    }};
  })(it, t2))], st);

  // node_modules/lit-html/lib/directive.js
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  const directives = new WeakMap();
  const isDirective = (o2) => {
    return typeof o2 === "function" && directives.has(o2);
  };

  // node_modules/lit-html/lib/dom.js
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  const isCEPolyfill = typeof window !== "undefined" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0;
  const removeNodes = (container, start, end = null) => {
    while (start !== end) {
      const n2 = start.nextSibling;
      container.removeChild(start);
      start = n2;
    }
  };

  // node_modules/lit-html/lib/part.js
  /**
   * @license
   * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  const noChange = {};
  const nothing = {};

  // node_modules/lit-html/lib/template.js
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
  const nodeMarker = `<!--${marker}-->`;
  const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
  const boundAttributeSuffix = "$lit$";
  class Template {
    constructor(result, element) {
      this.parts = [];
      this.element = element;
      const nodesToRemove = [];
      const stack = [];
      const walker = document.createTreeWalker(element.content, 133, null, false);
      let lastPartIndex = 0;
      let index = -1;
      let partIndex = 0;
      const {strings, values: {length}} = result;
      while (partIndex < length) {
        const node = walker.nextNode();
        if (node === null) {
          walker.currentNode = stack.pop();
          continue;
        }
        index++;
        if (node.nodeType === 1) {
          if (node.hasAttributes()) {
            const attributes = node.attributes;
            const {length: length2} = attributes;
            let count = 0;
            for (let i2 = 0; i2 < length2; i2++) {
              if (endsWith(attributes[i2].name, boundAttributeSuffix)) {
                count++;
              }
            }
            while (count-- > 0) {
              const stringForPart = strings[partIndex];
              const name = lastAttributeNameRegex.exec(stringForPart)[2];
              const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
              const attributeValue = node.getAttribute(attributeLookupName);
              node.removeAttribute(attributeLookupName);
              const statics = attributeValue.split(markerRegex);
              this.parts.push({type: "attribute", index, name, strings: statics});
              partIndex += statics.length - 1;
            }
          }
          if (node.tagName === "TEMPLATE") {
            stack.push(node);
            walker.currentNode = node.content;
          }
        } else if (node.nodeType === 3) {
          const data = node.data;
          if (data.indexOf(marker) >= 0) {
            const parent = node.parentNode;
            const strings2 = data.split(markerRegex);
            const lastIndex = strings2.length - 1;
            for (let i2 = 0; i2 < lastIndex; i2++) {
              let insert;
              let s2 = strings2[i2];
              if (s2 === "") {
                insert = createMarker();
              } else {
                const match = lastAttributeNameRegex.exec(s2);
                if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                  s2 = s2.slice(0, match.index) + match[1] + match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                }
                insert = document.createTextNode(s2);
              }
              parent.insertBefore(insert, node);
              this.parts.push({type: "node", index: ++index});
            }
            if (strings2[lastIndex] === "") {
              parent.insertBefore(createMarker(), node);
              nodesToRemove.push(node);
            } else {
              node.data = strings2[lastIndex];
            }
            partIndex += lastIndex;
          }
        } else if (node.nodeType === 8) {
          if (node.data === marker) {
            const parent = node.parentNode;
            if (node.previousSibling === null || index === lastPartIndex) {
              index++;
              parent.insertBefore(createMarker(), node);
            }
            lastPartIndex = index;
            this.parts.push({type: "node", index});
            if (node.nextSibling === null) {
              node.data = "";
            } else {
              nodesToRemove.push(node);
              index--;
            }
            partIndex++;
          } else {
            let i2 = -1;
            while ((i2 = node.data.indexOf(marker, i2 + 1)) !== -1) {
              this.parts.push({type: "node", index: -1});
              partIndex++;
            }
          }
        }
      }
      for (const n2 of nodesToRemove) {
        n2.parentNode.removeChild(n2);
      }
    }
  }
  const endsWith = (str, suffix) => {
    const index = str.length - suffix.length;
    return index >= 0 && str.slice(index) === suffix;
  };
  const isTemplatePartActive = (part3) => part3.index !== -1;
  const createMarker = () => document.createComment("");
  const lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

  // node_modules/lit-html/lib/template-instance.js
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  class TemplateInstance {
    constructor(template6, processor, options) {
      this.__parts = [];
      this.template = template6;
      this.processor = processor;
      this.options = options;
    }
    update(values) {
      let i2 = 0;
      for (const part3 of this.__parts) {
        if (part3 !== void 0) {
          part3.setValue(values[i2]);
        }
        i2++;
      }
      for (const part3 of this.__parts) {
        if (part3 !== void 0) {
          part3.commit();
        }
      }
    }
    _clone() {
      const fragment = isCEPolyfill ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
      const stack = [];
      const parts5 = this.template.parts;
      const walker = document.createTreeWalker(fragment, 133, null, false);
      let partIndex = 0;
      let nodeIndex = 0;
      let part3;
      let node = walker.nextNode();
      while (partIndex < parts5.length) {
        part3 = parts5[partIndex];
        if (!isTemplatePartActive(part3)) {
          this.__parts.push(void 0);
          partIndex++;
          continue;
        }
        while (nodeIndex < part3.index) {
          nodeIndex++;
          if (node.nodeName === "TEMPLATE") {
            stack.push(node);
            walker.currentNode = node.content;
          }
          if ((node = walker.nextNode()) === null) {
            walker.currentNode = stack.pop();
            node = walker.nextNode();
          }
        }
        if (part3.type === "node") {
          const part4 = this.processor.handleTextExpression(this.options);
          part4.insertAfterNode(node.previousSibling);
          this.__parts.push(part4);
        } else {
          this.__parts.push(...this.processor.handleAttributeExpressions(node, part3.name, part3.strings, this.options));
        }
        partIndex++;
      }
      if (isCEPolyfill) {
        document.adoptNode(fragment);
        customElements.upgrade(fragment);
      }
      return fragment;
    }
  }

  // node_modules/lit-html/lib/template-result.js
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  const policy = window.trustedTypes && trustedTypes.createPolicy("lit-html", {createHTML: (s2) => s2});
  const commentMarker = ` ${marker} `;
  class TemplateResult {
    constructor(strings, values, type, processor) {
      this.strings = strings;
      this.values = values;
      this.type = type;
      this.processor = processor;
    }
    getHTML() {
      const l2 = this.strings.length - 1;
      let html2 = "";
      let isCommentBinding = false;
      for (let i2 = 0; i2 < l2; i2++) {
        const s2 = this.strings[i2];
        const commentOpen = s2.lastIndexOf("<!--");
        isCommentBinding = (commentOpen > -1 || isCommentBinding) && s2.indexOf("-->", commentOpen + 1) === -1;
        const attributeMatch = lastAttributeNameRegex.exec(s2);
        if (attributeMatch === null) {
          html2 += s2 + (isCommentBinding ? commentMarker : nodeMarker);
        } else {
          html2 += s2.substr(0, attributeMatch.index) + attributeMatch[1] + attributeMatch[2] + boundAttributeSuffix + attributeMatch[3] + marker;
        }
      }
      html2 += this.strings[l2];
      return html2;
    }
    getTemplateElement() {
      const template6 = document.createElement("template");
      let value = this.getHTML();
      if (policy !== void 0) {
        value = policy.createHTML(value);
      }
      template6.innerHTML = value;
      return template6;
    }
  }

  // node_modules/lit-html/lib/parts.js
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  const isPrimitive = (value) => {
    return value === null || !(typeof value === "object" || typeof value === "function");
  };
  const isIterable = (value) => {
    return Array.isArray(value) || !!(value && value[Symbol.iterator]);
  };
  class AttributeCommitter {
    constructor(element, name, strings) {
      this.dirty = true;
      this.element = element;
      this.name = name;
      this.strings = strings;
      this.parts = [];
      for (let i2 = 0; i2 < strings.length - 1; i2++) {
        this.parts[i2] = this._createPart();
      }
    }
    _createPart() {
      return new AttributePart(this);
    }
    _getValue() {
      const strings = this.strings;
      const l2 = strings.length - 1;
      const parts5 = this.parts;
      if (l2 === 1 && strings[0] === "" && strings[1] === "") {
        const v2 = parts5[0].value;
        if (typeof v2 === "symbol") {
          return String(v2);
        }
        if (typeof v2 === "string" || !isIterable(v2)) {
          return v2;
        }
      }
      let text = "";
      for (let i2 = 0; i2 < l2; i2++) {
        text += strings[i2];
        const part3 = parts5[i2];
        if (part3 !== void 0) {
          const v2 = part3.value;
          if (isPrimitive(v2) || !isIterable(v2)) {
            text += typeof v2 === "string" ? v2 : String(v2);
          } else {
            for (const t2 of v2) {
              text += typeof t2 === "string" ? t2 : String(t2);
            }
          }
        }
      }
      text += strings[l2];
      return text;
    }
    commit() {
      if (this.dirty) {
        this.dirty = false;
        this.element.setAttribute(this.name, this._getValue());
      }
    }
  }
  class AttributePart {
    constructor(committer) {
      this.value = void 0;
      this.committer = committer;
    }
    setValue(value) {
      if (value !== noChange && (!isPrimitive(value) || value !== this.value)) {
        this.value = value;
        if (!isDirective(value)) {
          this.committer.dirty = true;
        }
      }
    }
    commit() {
      while (isDirective(this.value)) {
        const directive4 = this.value;
        this.value = noChange;
        directive4(this);
      }
      if (this.value === noChange) {
        return;
      }
      this.committer.commit();
    }
  }
  class NodePart {
    constructor(options) {
      this.value = void 0;
      this.__pendingValue = void 0;
      this.options = options;
    }
    appendInto(container) {
      this.startNode = container.appendChild(createMarker());
      this.endNode = container.appendChild(createMarker());
    }
    insertAfterNode(ref) {
      this.startNode = ref;
      this.endNode = ref.nextSibling;
    }
    appendIntoPart(part3) {
      part3.__insert(this.startNode = createMarker());
      part3.__insert(this.endNode = createMarker());
    }
    insertAfterPart(ref) {
      ref.__insert(this.startNode = createMarker());
      this.endNode = ref.endNode;
      ref.endNode = this.startNode;
    }
    setValue(value) {
      this.__pendingValue = value;
    }
    commit() {
      if (this.startNode.parentNode === null) {
        return;
      }
      while (isDirective(this.__pendingValue)) {
        const directive4 = this.__pendingValue;
        this.__pendingValue = noChange;
        directive4(this);
      }
      const value = this.__pendingValue;
      if (value === noChange) {
        return;
      }
      if (isPrimitive(value)) {
        if (value !== this.value) {
          this.__commitText(value);
        }
      } else if (value instanceof TemplateResult) {
        this.__commitTemplateResult(value);
      } else if (value instanceof Node) {
        this.__commitNode(value);
      } else if (isIterable(value)) {
        this.__commitIterable(value);
      } else if (value === nothing) {
        this.value = nothing;
        this.clear();
      } else {
        this.__commitText(value);
      }
    }
    __insert(node) {
      this.endNode.parentNode.insertBefore(node, this.endNode);
    }
    __commitNode(value) {
      if (this.value === value) {
        return;
      }
      this.clear();
      this.__insert(value);
      this.value = value;
    }
    __commitText(value) {
      const node = this.startNode.nextSibling;
      value = value == null ? "" : value;
      const valueAsString = typeof value === "string" ? value : String(value);
      if (node === this.endNode.previousSibling && node.nodeType === 3) {
        node.data = valueAsString;
      } else {
        this.__commitNode(document.createTextNode(valueAsString));
      }
      this.value = value;
    }
    __commitTemplateResult(value) {
      const template6 = this.options.templateFactory(value);
      if (this.value instanceof TemplateInstance && this.value.template === template6) {
        this.value.update(value.values);
      } else {
        const instance = new TemplateInstance(template6, value.processor, this.options);
        const fragment = instance._clone();
        instance.update(value.values);
        this.__commitNode(fragment);
        this.value = instance;
      }
    }
    __commitIterable(value) {
      if (!Array.isArray(this.value)) {
        this.value = [];
        this.clear();
      }
      const itemParts = this.value;
      let partIndex = 0;
      let itemPart;
      for (const item of value) {
        itemPart = itemParts[partIndex];
        if (itemPart === void 0) {
          itemPart = new NodePart(this.options);
          itemParts.push(itemPart);
          if (partIndex === 0) {
            itemPart.appendIntoPart(this);
          } else {
            itemPart.insertAfterPart(itemParts[partIndex - 1]);
          }
        }
        itemPart.setValue(item);
        itemPart.commit();
        partIndex++;
      }
      if (partIndex < itemParts.length) {
        itemParts.length = partIndex;
        this.clear(itemPart && itemPart.endNode);
      }
    }
    clear(startNode = this.startNode) {
      removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
  }
  class BooleanAttributePart {
    constructor(element, name, strings) {
      this.value = void 0;
      this.__pendingValue = void 0;
      if (strings.length !== 2 || strings[0] !== "" || strings[1] !== "") {
        throw new Error("Boolean attributes can only contain a single expression");
      }
      this.element = element;
      this.name = name;
      this.strings = strings;
    }
    setValue(value) {
      this.__pendingValue = value;
    }
    commit() {
      while (isDirective(this.__pendingValue)) {
        const directive4 = this.__pendingValue;
        this.__pendingValue = noChange;
        directive4(this);
      }
      if (this.__pendingValue === noChange) {
        return;
      }
      const value = !!this.__pendingValue;
      if (this.value !== value) {
        if (value) {
          this.element.setAttribute(this.name, "");
        } else {
          this.element.removeAttribute(this.name);
        }
        this.value = value;
      }
      this.__pendingValue = noChange;
    }
  }
  class PropertyCommitter extends AttributeCommitter {
    constructor(element, name, strings) {
      super(element, name, strings);
      this.single = strings.length === 2 && strings[0] === "" && strings[1] === "";
    }
    _createPart() {
      return new PropertyPart(this);
    }
    _getValue() {
      if (this.single) {
        return this.parts[0].value;
      }
      return super._getValue();
    }
    commit() {
      if (this.dirty) {
        this.dirty = false;
        this.element[this.name] = this._getValue();
      }
    }
  }
  class PropertyPart extends AttributePart {
  }
  let eventOptionsSupported = false;
  (() => {
    try {
      const options = {
        get capture() {
          eventOptionsSupported = true;
          return false;
        }
      };
      window.addEventListener("test", options, options);
      window.removeEventListener("test", options, options);
    } catch (_e) {
    }
  })();
  class EventPart {
    constructor(element, eventName, eventContext) {
      this.value = void 0;
      this.__pendingValue = void 0;
      this.element = element;
      this.eventName = eventName;
      this.eventContext = eventContext;
      this.__boundHandleEvent = (e2) => this.handleEvent(e2);
    }
    setValue(value) {
      this.__pendingValue = value;
    }
    commit() {
      while (isDirective(this.__pendingValue)) {
        const directive4 = this.__pendingValue;
        this.__pendingValue = noChange;
        directive4(this);
      }
      if (this.__pendingValue === noChange) {
        return;
      }
      const newListener = this.__pendingValue;
      const oldListener = this.value;
      const shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
      const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
      if (shouldRemoveListener) {
        this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
      }
      if (shouldAddListener) {
        this.__options = getOptions(newListener);
        this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
      }
      this.value = newListener;
      this.__pendingValue = noChange;
    }
    handleEvent(event) {
      if (typeof this.value === "function") {
        this.value.call(this.eventContext || this.element, event);
      } else {
        this.value.handleEvent(event);
      }
    }
  }
  const getOptions = (o2) => o2 && (eventOptionsSupported ? {capture: o2.capture, passive: o2.passive, once: o2.once} : o2.capture);

  // node_modules/lit-html/lib/default-template-processor.js
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  class DefaultTemplateProcessor {
    handleAttributeExpressions(element, name, strings, options) {
      const prefix = name[0];
      if (prefix === ".") {
        const committer2 = new PropertyCommitter(element, name.slice(1), strings);
        return committer2.parts;
      }
      if (prefix === "@") {
        return [new EventPart(element, name.slice(1), options.eventContext)];
      }
      if (prefix === "?") {
        return [new BooleanAttributePart(element, name.slice(1), strings)];
      }
      const committer = new AttributeCommitter(element, name, strings);
      return committer.parts;
    }
    handleTextExpression(options) {
      return new NodePart(options);
    }
  }
  const defaultTemplateProcessor = new DefaultTemplateProcessor();

  // node_modules/lit-html/lib/template-factory.js
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  function templateFactory(result) {
    let templateCache = templateCaches.get(result.type);
    if (templateCache === void 0) {
      templateCache = {
        stringsArray: new WeakMap(),
        keyString: new Map()
      };
      templateCaches.set(result.type, templateCache);
    }
    let template6 = templateCache.stringsArray.get(result.strings);
    if (template6 !== void 0) {
      return template6;
    }
    const key = result.strings.join(marker);
    template6 = templateCache.keyString.get(key);
    if (template6 === void 0) {
      template6 = new Template(result, result.getTemplateElement());
      templateCache.keyString.set(key, template6);
    }
    templateCache.stringsArray.set(result.strings, template6);
    return template6;
  }
  const templateCaches = new Map();

  // node_modules/lit-html/lib/render.js
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  const parts3 = new WeakMap();
  const render = (result, container, options) => {
    let part3 = parts3.get(container);
    if (part3 === void 0) {
      removeNodes(container, container.firstChild);
      parts3.set(container, part3 = new NodePart(Object.assign({templateFactory}, options)));
      part3.appendInto(container);
    }
    part3.setValue(result);
    part3.commit();
  };

  // node_modules/lit-html/lit-html.js
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  if (typeof window !== "undefined") {
    (window["litHtmlVersions"] || (window["litHtmlVersions"] = [])).push("1.3.0");
  }
  const html = (strings, ...values) => new TemplateResult(strings, values, "html", defaultTemplateProcessor);

  // _includes/js/script.js
  const get_urls = __toModule(require_get_urls());
  const params = new URLSearchParams(window.location.search);
  const storage = self.localStorage;
  const token = storage.getItem("feedbin-page-token") || "";
  const title = params.get("title");
  let url = "";
  if (params.get("url")) {
    url = params.get("url");
  } else {
    url = [...get_urls.default(params.get("text") || "")][0];
  }
  const saveToken = (e2) => {
    storage.setItem("feedbin-page-token", e2.target.value);
    run(title, url, e2.target.value);
    console.log("saveToken -> e", e2.target.value);
  };
  const myTemplate = (title2 = "", url2 = "", token2, subsURL, pagesURL) => html`
    <label>Title:</label>
    <input type="text" placeholder="Page title" value=${title2 ? title2 : ""} />
    <label>URL:</label>
    <input type="text" placeholder="Page URL" value=${url2 ? url2 : ""} />
    <br />
    <a href="${subsURL}" class="Button" target="_blank" rel="noopener"
        >Subscribe</a
    >
    <br />
    <a href="${pagesURL}" class="Button" target="_blank" rel="noopener"
        >Save</a
    >
    <br />
    <label>Feedbin Pages Token</label>
    <input
        type="text"
        @input=${saveToken}
        placeholder="Feedbin Pages Token"
        value=${token2}
    />
    <small
        >Find your token in the Bookmarklet link under the
        <a href="https://feedbin.com/settings/newsletters_pages">
            Newsletters page</a
        >. The token will be saved in your browser localstorage.</small
    >
`;
  const run = (title2, url2, token2) => {
    const subsURL = new URL("https://feedbin.me");
    const subsSearch = new URLSearchParams({
      subscribe: url2
    });
    subsURL.search = subsSearch.toString();
    const pagesURL = new URL("https://feedbin.me/pages");
    const pagesSearch = new URLSearchParams({
      url: url2,
      title: title2,
      page_token: token2
    });
    pagesURL.search = pagesSearch.toString();
    render(myTemplate(title2, url2, token2, subsURL, pagesURL), document.body.querySelector("main"));
  };
  if (self.chrome.tabs) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      run(tabs[0].title, tabs[0].url, token);
    });
  } else {
    run(title, url, token);
  }
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZW1wdHk6L1VzZXJzL2hkL2NvZGUvZmVlZGJpbi1zaGFyZS9ub2RlX21vZHVsZXMvcmUyL3JlMi5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Vc2Vycy9oZC9jb2RlL2ZlZWRiaW4tc2hhcmUvbm9kZV9tb2R1bGVzL2lwLXJlZ2V4L2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1VzZXJzL2hkL2NvZGUvZmVlZGJpbi1zaGFyZS9ub2RlX21vZHVsZXMvdXJsLXJlZ2V4LXNhZmUvc3JjL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1VzZXJzL2hkL2NvZGUvZmVlZGJpbi1zaGFyZS9ub2RlX21vZHVsZXMvbm9ybWFsaXplLXVybC9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Vc2Vycy9oZC9jb2RlL2ZlZWRiaW4tc2hhcmUvbm9kZV9tb2R1bGVzL2dldC11cmxzL2luZGV4LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1VzZXJzL2hkL2NvZGUvZmVlZGJpbi1zaGFyZS9ub2RlX21vZHVsZXMvQHB3YWJ1aWxkZXIvcHdhdXBkYXRlL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvZGlyZWN0aXZlLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1VzZXJzL2hkL2NvZGUvZmVlZGJpbi1zaGFyZS9ub2RlX21vZHVsZXMvQHB3YWJ1aWxkZXIvcHdhdXBkYXRlL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvZG9tLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1VzZXJzL2hkL2NvZGUvZmVlZGJpbi1zaGFyZS9ub2RlX21vZHVsZXMvQHB3YWJ1aWxkZXIvcHdhdXBkYXRlL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvcGFydC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Vc2Vycy9oZC9jb2RlL2ZlZWRiaW4tc2hhcmUvbm9kZV9tb2R1bGVzL0Bwd2FidWlsZGVyL3B3YXVwZGF0ZS9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3RlbXBsYXRlLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1VzZXJzL2hkL2NvZGUvZmVlZGJpbi1zaGFyZS9ub2RlX21vZHVsZXMvQHB3YWJ1aWxkZXIvcHdhdXBkYXRlL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvdGVtcGxhdGUtaW5zdGFuY2UuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVXNlcnMvaGQvY29kZS9mZWVkYmluLXNoYXJlL25vZGVfbW9kdWxlcy9AcHdhYnVpbGRlci9wd2F1cGRhdGUvbm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpYi90ZW1wbGF0ZS1yZXN1bHQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVXNlcnMvaGQvY29kZS9mZWVkYmluLXNoYXJlL25vZGVfbW9kdWxlcy9AcHdhYnVpbGRlci9wd2F1cGRhdGUvbm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpYi9wYXJ0cy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Vc2Vycy9oZC9jb2RlL2ZlZWRiaW4tc2hhcmUvbm9kZV9tb2R1bGVzL0Bwd2FidWlsZGVyL3B3YXVwZGF0ZS9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL2RlZmF1bHQtdGVtcGxhdGUtcHJvY2Vzc29yLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1VzZXJzL2hkL2NvZGUvZmVlZGJpbi1zaGFyZS9ub2RlX21vZHVsZXMvQHB3YWJ1aWxkZXIvcHdhdXBkYXRlL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saWIvdGVtcGxhdGUtZmFjdG9yeS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Vc2Vycy9oZC9jb2RlL2ZlZWRiaW4tc2hhcmUvbm9kZV9tb2R1bGVzL0Bwd2FidWlsZGVyL3B3YXVwZGF0ZS9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3JlbmRlci5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Vc2Vycy9oZC9jb2RlL2ZlZWRiaW4tc2hhcmUvbm9kZV9tb2R1bGVzL0Bwd2FidWlsZGVyL3B3YXVwZGF0ZS9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGl0LWh0bWwuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVXNlcnMvaGQvY29kZS9mZWVkYmluLXNoYXJlL25vZGVfbW9kdWxlcy9AcHdhYnVpbGRlci9wd2F1cGRhdGUvbm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpYi9tb2RpZnktdGVtcGxhdGUuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVXNlcnMvaGQvY29kZS9mZWVkYmluLXNoYXJlL25vZGVfbW9kdWxlcy9AcHdhYnVpbGRlci9wd2F1cGRhdGUvbm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpYi9zaGFkeS1yZW5kZXIuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVXNlcnMvaGQvY29kZS9mZWVkYmluLXNoYXJlL25vZGVfbW9kdWxlcy9AcHdhYnVpbGRlci9wd2F1cGRhdGUvbm9kZV9tb2R1bGVzL2xpdC1lbGVtZW50L2xpYi91cGRhdGluZy1lbGVtZW50LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1VzZXJzL2hkL2NvZGUvZmVlZGJpbi1zaGFyZS9ub2RlX21vZHVsZXMvQHB3YWJ1aWxkZXIvcHdhdXBkYXRlL25vZGVfbW9kdWxlcy9saXQtZWxlbWVudC9saWIvZGVjb3JhdG9ycy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Vc2Vycy9oZC9jb2RlL2ZlZWRiaW4tc2hhcmUvbm9kZV9tb2R1bGVzL0Bwd2FidWlsZGVyL3B3YXVwZGF0ZS9ub2RlX21vZHVsZXMvbGl0LWVsZW1lbnQvbGliL2Nzcy10YWcuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVXNlcnMvaGQvY29kZS9mZWVkYmluLXNoYXJlL25vZGVfbW9kdWxlcy9AcHdhYnVpbGRlci9wd2F1cGRhdGUvbm9kZV9tb2R1bGVzL2xpdC1lbGVtZW50L2xpdC1lbGVtZW50LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1VzZXJzL2hkL2NvZGUvZmVlZGJpbi1zaGFyZS9ub2RlX21vZHVsZXMvQHB3YWJ1aWxkZXIvcHdhdXBkYXRlL2J1aWxkL3B3YS11cGRhdGUuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVXNlcnMvaGQvY29kZS9mZWVkYmluLXNoYXJlL25vZGVfbW9kdWxlcy9saXQtaHRtbC9zcmMvbGliL2RpcmVjdGl2ZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Vc2Vycy9oZC9jb2RlL2ZlZWRiaW4tc2hhcmUvbm9kZV9tb2R1bGVzL2xpdC1odG1sL3NyYy9saWIvZGlyZWN0aXZlLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1VzZXJzL2hkL2NvZGUvZmVlZGJpbi1zaGFyZS9ub2RlX21vZHVsZXMvbGl0LWh0bWwvc3JjL2xpYi9kb20udHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVXNlcnMvaGQvY29kZS9mZWVkYmluLXNoYXJlL25vZGVfbW9kdWxlcy9saXQtaHRtbC9zcmMvbGliL2RvbS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Vc2Vycy9oZC9jb2RlL2ZlZWRiaW4tc2hhcmUvbm9kZV9tb2R1bGVzL2xpdC1odG1sL3NyYy9saWIvcGFydC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Vc2Vycy9oZC9jb2RlL2ZlZWRiaW4tc2hhcmUvbm9kZV9tb2R1bGVzL2xpdC1odG1sL3NyYy9saWIvdGVtcGxhdGUudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVXNlcnMvaGQvY29kZS9mZWVkYmluLXNoYXJlL25vZGVfbW9kdWxlcy9saXQtaHRtbC9zcmMvbGliL3RlbXBsYXRlLWluc3RhbmNlLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1VzZXJzL2hkL2NvZGUvZmVlZGJpbi1zaGFyZS9ub2RlX21vZHVsZXMvbGl0LWh0bWwvc3JjL2xpYi90ZW1wbGF0ZS1yZXN1bHQudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVXNlcnMvaGQvY29kZS9mZWVkYmluLXNoYXJlL25vZGVfbW9kdWxlcy9saXQtaHRtbC9zcmMvbGliL3BhcnRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1VzZXJzL2hkL2NvZGUvZmVlZGJpbi1zaGFyZS9ub2RlX21vZHVsZXMvbGl0LWh0bWwvc3JjL2xpYi9kZWZhdWx0LXRlbXBsYXRlLXByb2Nlc3Nvci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Vc2Vycy9oZC9jb2RlL2ZlZWRiaW4tc2hhcmUvbm9kZV9tb2R1bGVzL2xpdC1odG1sL3NyYy9saWIvdGVtcGxhdGUtZmFjdG9yeS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Vc2Vycy9oZC9jb2RlL2ZlZWRiaW4tc2hhcmUvbm9kZV9tb2R1bGVzL2xpdC1odG1sL3NyYy9saWIvcmVuZGVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1VzZXJzL2hkL2NvZGUvZmVlZGJpbi1zaGFyZS9ub2RlX21vZHVsZXMvbGl0LWh0bWwvc3JjL2xpdC1odG1sLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1VzZXJzL2hkL2NvZGUvZmVlZGJpbi1zaGFyZS9faW5jbHVkZXMvanMvc2NyaXB0LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIiLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB3b3JkID0gJ1thLWZBLUZcXFxcZDpdJztcbmNvbnN0IGIgPSBvcHRpb25zID0+IG9wdGlvbnMgJiYgb3B0aW9ucy5pbmNsdWRlQm91bmRhcmllcyA/XG5cdGAoPzooPzw9XFxcXHN8XikoPz0ke3dvcmR9KXwoPzw9JHt3b3JkfSkoPz1cXFxcc3wkKSlgIDpcblx0Jyc7XG5cbmNvbnN0IHY0ID0gJyg/OjI1WzAtNV18MlswLTRdXFxcXGR8MVxcXFxkXFxcXGR8WzEtOV1cXFxcZHxcXFxcZCkoPzpcXFxcLig/OjI1WzAtNV18MlswLTRdXFxcXGR8MVxcXFxkXFxcXGR8WzEtOV1cXFxcZHxcXFxcZCkpezN9JztcblxuY29uc3QgdjZzZWcgPSAnW2EtZkEtRlxcXFxkXXsxLDR9JztcbmNvbnN0IHY2ID0gYFxuKFxuKD86JHt2NnNlZ306KXs3fSg/OiR7djZzZWd9fDopfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMToyOjM6NDo1OjY6Nzo6ICAxOjI6Mzo0OjU6Njo3Ojhcbig/OiR7djZzZWd9Oil7Nn0oPzoke3Y0fXw6JHt2NnNlZ318Oil8ICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDE6MjozOjQ6NTo2OjogICAgMToyOjM6NDo1OjY6OjggICAxOjI6Mzo0OjU6Njo6OCAgMToyOjM6NDo1OjY6OjEuMi4zLjRcbig/OiR7djZzZWd9Oil7NX0oPzo6JHt2NH18KDoke3Y2c2VnfSl7MSwyfXw6KXwgICAgICAgICAgICAgICAgIC8vIDE6MjozOjQ6NTo6ICAgICAgMToyOjM6NDo1Ojo3OjggICAxOjI6Mzo0OjU6OjggICAgMToyOjM6NDo1Ojo3OjEuMi4zLjRcbig/OiR7djZzZWd9Oil7NH0oPzooOiR7djZzZWd9KXswLDF9OiR7djR9fCg6JHt2NnNlZ30pezEsM318Oil8IC8vIDE6MjozOjQ6OiAgICAgICAgMToyOjM6NDo6Njo3OjggICAxOjI6Mzo0Ojo4ICAgICAgMToyOjM6NDo6Njo3OjEuMi4zLjRcbig/OiR7djZzZWd9Oil7M30oPzooOiR7djZzZWd9KXswLDJ9OiR7djR9fCg6JHt2NnNlZ30pezEsNH18Oil8IC8vIDE6MjozOjogICAgICAgICAgMToyOjM6OjU6Njo3OjggICAxOjI6Mzo6OCAgICAgICAgMToyOjM6OjU6Njo3OjEuMi4zLjRcbig/OiR7djZzZWd9Oil7Mn0oPzooOiR7djZzZWd9KXswLDN9OiR7djR9fCg6JHt2NnNlZ30pezEsNX18Oil8IC8vIDE6Mjo6ICAgICAgICAgICAgMToyOjo0OjU6Njo3OjggICAxOjI6OjggICAgICAgICAgMToyOjo0OjU6Njo3OjEuMi4zLjRcbig/OiR7djZzZWd9Oil7MX0oPzooOiR7djZzZWd9KXswLDR9OiR7djR9fCg6JHt2NnNlZ30pezEsNn18Oil8IC8vIDE6OiAgICAgICAgICAgICAgMTo6Mzo0OjU6Njo3OjggICAxOjo4ICAgICAgICAgICAgMTo6Mzo0OjU6Njo3OjEuMi4zLjRcbig/OjooKD86OiR7djZzZWd9KXswLDV9OiR7djR9fCg/Ojoke3Y2c2VnfSl7MSw3fXw6KSkgICAgICAgICAgIC8vIDo6MjozOjQ6NTo2Ojc6OCAgOjoyOjM6NDo1OjY6Nzo4ICA6OjggICAgICAgICAgICAgOjoxLjIuMy40XG4pKCVbMC05YS16QS1aXXsxLH0pPyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAlZXRoMCAgICAgICAgICAgICUxXG5gLnJlcGxhY2UoL1xccypcXC9cXC8uKiQvZ20sICcnKS5yZXBsYWNlKC9cXG4vZywgJycpLnRyaW0oKTtcblxuLy8gUHJlLWNvbXBpbGUgb25seSB0aGUgZXhhY3QgcmVnZXhlcyBiZWNhdXNlIGFkZGluZyBhIGdsb2JhbCBmbGFnIG1ha2UgcmVnZXhlcyBzdGF0ZWZ1bFxuY29uc3QgdjQ2RXhhY3QgPSBuZXcgUmVnRXhwKGAoPzpeJHt2NH0kKXwoPzpeJHt2Nn0kKWApO1xuY29uc3QgdjRleGFjdCA9IG5ldyBSZWdFeHAoYF4ke3Y0fSRgKTtcbmNvbnN0IHY2ZXhhY3QgPSBuZXcgUmVnRXhwKGBeJHt2Nn0kYCk7XG5cbmNvbnN0IGlwID0gb3B0aW9ucyA9PiBvcHRpb25zICYmIG9wdGlvbnMuZXhhY3QgP1xuXHR2NDZFeGFjdCA6XG5cdG5ldyBSZWdFeHAoYCg/OiR7YihvcHRpb25zKX0ke3Y0fSR7YihvcHRpb25zKX0pfCg/OiR7YihvcHRpb25zKX0ke3Y2fSR7YihvcHRpb25zKX0pYCwgJ2cnKTtcblxuaXAudjQgPSBvcHRpb25zID0+IG9wdGlvbnMgJiYgb3B0aW9ucy5leGFjdCA/IHY0ZXhhY3QgOiBuZXcgUmVnRXhwKGAke2Iob3B0aW9ucyl9JHt2NH0ke2Iob3B0aW9ucyl9YCwgJ2cnKTtcbmlwLnY2ID0gb3B0aW9ucyA9PiBvcHRpb25zICYmIG9wdGlvbnMuZXhhY3QgPyB2NmV4YWN0IDogbmV3IFJlZ0V4cChgJHtiKG9wdGlvbnMpfSR7djZ9JHtiKG9wdGlvbnMpfWAsICdnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXA7XG4iLCAiY29uc3QgUkUyID0gcmVxdWlyZSgncmUyJyk7XG5jb25zdCBpcFJlZ2V4ID0gcmVxdWlyZSgnaXAtcmVnZXgnKTtcbmNvbnN0IHRsZHMgPSByZXF1aXJlKCd0bGRzJyk7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBTYWZlUmVnRXhwID0gdHlwZW9mIFJFMiA9PT0gJ2Z1bmN0aW9uJyA/IFJFMiA6IFJlZ0V4cDtcbmNvbnN0IGlwdjQgPSBpcFJlZ2V4LnY0KCkuc291cmNlO1xuY29uc3QgaXB2NiA9IGlwUmVnZXgudjYoKS5zb3VyY2U7XG5cbm1vZHVsZS5leHBvcnRzID0gKG9wdGlvbnMpID0+IHtcbiAgb3B0aW9ucyA9IHtcbiAgICBleGFjdDogZmFsc2UsXG4gICAgc3RyaWN0OiBmYWxzZSxcbiAgICBhdXRoOiBmYWxzZSxcbiAgICBsb2NhbGhvc3Q6IHRydWUsXG4gICAgcGFyZW5zOiBmYWxzZSxcbiAgICBhcG9zdHJvcGhlczogZmFsc2UsXG4gICAgdHJhaWxpbmdQZXJpb2Q6IGZhbHNlLFxuICAgIGlwdjQ6IHRydWUsXG4gICAgaXB2NjogdHJ1ZSxcbiAgICB0bGRzLFxuICAgIHJldHVyblN0cmluZzogZmFsc2UsXG4gICAgLi4ub3B0aW9uc1xuICB9O1xuXG4gIGNvbnN0IHByb3RvY29sID0gYCg/Oig/OlthLXpdKzopPy8vKSR7b3B0aW9ucy5zdHJpY3QgPyAnJyA6ICc/J31gO1xuICAvLyBBZGQgb3B0aW9uIHRvIGRpc2FibGUgbWF0Y2hpbmcgdXJscyB3aXRoIEhUVFAgQmFzaWMgQXV0aGVudGljYXRpb25cbiAgLy8gPGh0dHBzOi8vZ2l0aHViLmNvbS9rZXZ2YS91cmwtcmVnZXgvcHVsbC82Mz5cbiAgY29uc3QgYXV0aCA9IG9wdGlvbnMuYXV0aCA/ICcoPzpcXFxcUysoPzo6XFxcXFMqKT9AKT8nIDogJyc7XG4gIGNvbnN0IGhvc3QgPSAnKD86KD86W2EtelxcXFx1MDBhMS1cXFxcdWZmZmYwLTldWy1fXSopKlthLXpcXFxcdTAwYTEtXFxcXHVmZmZmMC05XSspJztcbiAgY29uc3QgZG9tYWluID1cbiAgICAnKD86XFxcXC4oPzpbYS16XFxcXHUwMGExLVxcXFx1ZmZmZjAtOV0tKikqW2EtelxcXFx1MDBhMS1cXFxcdWZmZmYwLTldKykqJztcbiAgLy8gQWRkIGFiaWxpdHkgdG8gcGFzcyBjdXN0b20gbGlzdCBvZiB0bGRzXG4gIC8vIDxodHRwczovL2dpdGh1Yi5jb20va2V2dmEvdXJsLXJlZ2V4L3B1bGwvNjY+XG4gIGNvbnN0IHRsZCA9IGAoPzpcXFxcLiR7XG4gICAgb3B0aW9ucy5zdHJpY3RcbiAgICAgID8gJyg/OlthLXpcXFxcdTAwYTEtXFxcXHVmZmZmXXsyLH0pJ1xuICAgICAgOiBgKD86JHtvcHRpb25zLnRsZHMuc29ydCgoYSwgYikgPT4gYi5sZW5ndGggLSBhLmxlbmd0aCkuam9pbignfCcpfSlgXG4gIH0pJHtvcHRpb25zLnRyYWlsaW5nUGVyaW9kID8gJ1xcXFwuPycgOiAnJ31gO1xuXG4gIGNvbnN0IHBvcnQgPSAnKD86OlxcXFxkezIsNX0pPyc7XG4gIC8vIE5vdCBhY2NlcHQgY2xvc2luZyBwYXJlbnRoZXNpc1xuICAvLyA8aHR0cHM6Ly9naXRodWIuY29tL2tldnZhL3VybC1yZWdleC9wdWxsLzM1PlxuICAvLyBEb24ndCBhbGxvdyBhcG9zdHJvcGhlc1xuICAvLyA8aHR0cHM6Ly9naXRodWIuY29tL2tldnZhL3VybC1yZWdleC9wdWxsLzU1PlxuICBjb25zdCBwYXRoID0gb3B0aW9ucy5wYXJlbnNcbiAgICA/IG9wdGlvbnMuYXBvc3Ryb3BoZXNcbiAgICAgID8gJyg/OlsvPyNdW15cXFxcc1wiXSopPydcbiAgICAgIDogJyg/OlsvPyNdW15cXFxcc1wiXFwnXSopPydcbiAgICA6IG9wdGlvbnMuYXBvc3Ryb3BoZXNcbiAgICA/ICcoPzpbLz8jXVteXFxcXHNcIlxcXFwpXSopPydcbiAgICA6ICcoPzpbLz8jXVteXFxcXHNcIlxcXFwpXFwnXSopPyc7XG5cbiAgLy8gQWRkZWQgSVB2NiBzdXBwb3J0XG4gIC8vIDxodHRwczovL2dpdGh1Yi5jb20va2V2dmEvdXJsLXJlZ2V4L2lzc3Vlcy82MD5cbiAgbGV0IHJlZ2V4ID0gYCg/OiR7cHJvdG9jb2x9fHd3d1xcXFwuKSR7YXV0aH0oPzpgO1xuICBpZiAob3B0aW9ucy5sb2NhbGhvc3QpIHJlZ2V4ICs9ICdsb2NhbGhvc3R8JztcbiAgaWYgKG9wdGlvbnMuaXB2NCkgcmVnZXggKz0gYCR7aXB2NH18YDtcbiAgaWYgKG9wdGlvbnMuaXB2NikgcmVnZXggKz0gYCR7aXB2Nn18YDtcbiAgcmVnZXggKz0gYCR7aG9zdH0ke2RvbWFpbn0ke3RsZH0pJHtwb3J0fSR7cGF0aH1gO1xuXG4gIC8vIEFkZCBvcHRpb24gdG8gcmV0dXJuIHRoZSByZWdleCBzdHJpbmcgaW5zdGVhZCBvZiBhIFJlZ0V4cFxuICBpZiAob3B0aW9ucy5yZXR1cm5TdHJpbmcpIHJldHVybiByZWdleDtcblxuICByZXR1cm4gb3B0aW9ucy5leGFjdFxuICAgID8gbmV3IFNhZmVSZWdFeHAoYCg/Ol4ke3JlZ2V4fSQpYCwgJ2knKVxuICAgIDogbmV3IFNhZmVSZWdFeHAocmVnZXgsICdpZycpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG5jb25zdCBEQVRBX1VSTF9ERUZBVUxUX01JTUVfVFlQRSA9ICd0ZXh0L3BsYWluJztcbmNvbnN0IERBVEFfVVJMX0RFRkFVTFRfQ0hBUlNFVCA9ICd1cy1hc2NpaSc7XG5cbmNvbnN0IHRlc3RQYXJhbWV0ZXIgPSAobmFtZSwgZmlsdGVycykgPT4ge1xuXHRyZXR1cm4gZmlsdGVycy5zb21lKGZpbHRlciA9PiBmaWx0ZXIgaW5zdGFuY2VvZiBSZWdFeHAgPyBmaWx0ZXIudGVzdChuYW1lKSA6IGZpbHRlciA9PT0gbmFtZSk7XG59O1xuXG5jb25zdCBub3JtYWxpemVEYXRhVVJMID0gKHVybFN0cmluZywge3N0cmlwSGFzaH0pID0+IHtcblx0Y29uc3QgbWF0Y2ggPSAvXmRhdGE6KD88dHlwZT4uKj8pLCg/PGRhdGE+Lio/KSg/OiMoPzxoYXNoPi4qKSk/JC8uZXhlYyh1cmxTdHJpbmcpO1xuXG5cdGlmICghbWF0Y2gpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgVVJMOiAke3VybFN0cmluZ31gKTtcblx0fVxuXG5cdGxldCB7dHlwZSwgZGF0YSwgaGFzaH0gPSBtYXRjaC5ncm91cHM7XG5cdGNvbnN0IG1lZGlhVHlwZSA9IHR5cGUuc3BsaXQoJzsnKTtcblx0aGFzaCA9IHN0cmlwSGFzaCA/ICcnIDogaGFzaDtcblxuXHRsZXQgaXNCYXNlNjQgPSBmYWxzZTtcblx0aWYgKG1lZGlhVHlwZVttZWRpYVR5cGUubGVuZ3RoIC0gMV0gPT09ICdiYXNlNjQnKSB7XG5cdFx0bWVkaWFUeXBlLnBvcCgpO1xuXHRcdGlzQmFzZTY0ID0gdHJ1ZTtcblx0fVxuXG5cdC8vIExvd2VyY2FzZSBNSU1FIHR5cGVcblx0Y29uc3QgbWltZVR5cGUgPSAobWVkaWFUeXBlLnNoaWZ0KCkgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG5cdGNvbnN0IGF0dHJpYnV0ZXMgPSBtZWRpYVR5cGVcblx0XHQubWFwKGF0dHJpYnV0ZSA9PiB7XG5cdFx0XHRsZXQgW2tleSwgdmFsdWUgPSAnJ10gPSBhdHRyaWJ1dGUuc3BsaXQoJz0nKS5tYXAoc3RyaW5nID0+IHN0cmluZy50cmltKCkpO1xuXG5cdFx0XHQvLyBMb3dlcmNhc2UgYGNoYXJzZXRgXG5cdFx0XHRpZiAoa2V5ID09PSAnY2hhcnNldCcpIHtcblx0XHRcdFx0dmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gREFUQV9VUkxfREVGQVVMVF9DSEFSU0VUKSB7XG5cdFx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBgJHtrZXl9JHt2YWx1ZSA/IGA9JHt2YWx1ZX1gIDogJyd9YDtcblx0XHR9KVxuXHRcdC5maWx0ZXIoQm9vbGVhbik7XG5cblx0Y29uc3Qgbm9ybWFsaXplZE1lZGlhVHlwZSA9IFtcblx0XHQuLi5hdHRyaWJ1dGVzXG5cdF07XG5cblx0aWYgKGlzQmFzZTY0KSB7XG5cdFx0bm9ybWFsaXplZE1lZGlhVHlwZS5wdXNoKCdiYXNlNjQnKTtcblx0fVxuXG5cdGlmIChub3JtYWxpemVkTWVkaWFUeXBlLmxlbmd0aCAhPT0gMCB8fCAobWltZVR5cGUgJiYgbWltZVR5cGUgIT09IERBVEFfVVJMX0RFRkFVTFRfTUlNRV9UWVBFKSkge1xuXHRcdG5vcm1hbGl6ZWRNZWRpYVR5cGUudW5zaGlmdChtaW1lVHlwZSk7XG5cdH1cblxuXHRyZXR1cm4gYGRhdGE6JHtub3JtYWxpemVkTWVkaWFUeXBlLmpvaW4oJzsnKX0sJHtpc0Jhc2U2NCA/IGRhdGEudHJpbSgpIDogZGF0YX0ke2hhc2ggPyBgIyR7aGFzaH1gIDogJyd9YDtcbn07XG5cbmNvbnN0IG5vcm1hbGl6ZVVybCA9ICh1cmxTdHJpbmcsIG9wdGlvbnMpID0+IHtcblx0b3B0aW9ucyA9IHtcblx0XHRkZWZhdWx0UHJvdG9jb2w6ICdodHRwOicsXG5cdFx0bm9ybWFsaXplUHJvdG9jb2w6IHRydWUsXG5cdFx0Zm9yY2VIdHRwOiBmYWxzZSxcblx0XHRmb3JjZUh0dHBzOiBmYWxzZSxcblx0XHRzdHJpcEF1dGhlbnRpY2F0aW9uOiB0cnVlLFxuXHRcdHN0cmlwSGFzaDogZmFsc2UsXG5cdFx0c3RyaXBXV1c6IHRydWUsXG5cdFx0cmVtb3ZlUXVlcnlQYXJhbWV0ZXJzOiBbL151dG1fXFx3Ky9pXSxcblx0XHRyZW1vdmVUcmFpbGluZ1NsYXNoOiB0cnVlLFxuXHRcdHJlbW92ZVNpbmdsZVNsYXNoOiB0cnVlLFxuXHRcdHJlbW92ZURpcmVjdG9yeUluZGV4OiBmYWxzZSxcblx0XHRzb3J0UXVlcnlQYXJhbWV0ZXJzOiB0cnVlLFxuXHRcdC4uLm9wdGlvbnNcblx0fTtcblxuXHR1cmxTdHJpbmcgPSB1cmxTdHJpbmcudHJpbSgpO1xuXG5cdC8vIERhdGEgVVJMXG5cdGlmICgvXmRhdGE6L2kudGVzdCh1cmxTdHJpbmcpKSB7XG5cdFx0cmV0dXJuIG5vcm1hbGl6ZURhdGFVUkwodXJsU3RyaW5nLCBvcHRpb25zKTtcblx0fVxuXG5cdGlmICgvXnZpZXctc291cmNlOi9pLnRlc3QodXJsU3RyaW5nKSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignYHZpZXctc291cmNlOmAgaXMgbm90IHN1cHBvcnRlZCBhcyBpdCBpcyBhIG5vbi1zdGFuZGFyZCBwcm90b2NvbCcpO1xuXHR9XG5cblx0Y29uc3QgaGFzUmVsYXRpdmVQcm90b2NvbCA9IHVybFN0cmluZy5zdGFydHNXaXRoKCcvLycpO1xuXHRjb25zdCBpc1JlbGF0aXZlVXJsID0gIWhhc1JlbGF0aXZlUHJvdG9jb2wgJiYgL15cXC4qXFwvLy50ZXN0KHVybFN0cmluZyk7XG5cblx0Ly8gUHJlcGVuZCBwcm90b2NvbFxuXHRpZiAoIWlzUmVsYXRpdmVVcmwpIHtcblx0XHR1cmxTdHJpbmcgPSB1cmxTdHJpbmcucmVwbGFjZSgvXig/ISg/Olxcdys6KT9cXC9cXC8pfF5cXC9cXC8vLCBvcHRpb25zLmRlZmF1bHRQcm90b2NvbCk7XG5cdH1cblxuXHRjb25zdCB1cmxPYmogPSBuZXcgVVJMKHVybFN0cmluZyk7XG5cblx0aWYgKG9wdGlvbnMuZm9yY2VIdHRwICYmIG9wdGlvbnMuZm9yY2VIdHRwcykge1xuXHRcdHRocm93IG5ldyBFcnJvcignVGhlIGBmb3JjZUh0dHBgIGFuZCBgZm9yY2VIdHRwc2Agb3B0aW9ucyBjYW5ub3QgYmUgdXNlZCB0b2dldGhlcicpO1xuXHR9XG5cblx0aWYgKG9wdGlvbnMuZm9yY2VIdHRwICYmIHVybE9iai5wcm90b2NvbCA9PT0gJ2h0dHBzOicpIHtcblx0XHR1cmxPYmoucHJvdG9jb2wgPSAnaHR0cDonO1xuXHR9XG5cblx0aWYgKG9wdGlvbnMuZm9yY2VIdHRwcyAmJiB1cmxPYmoucHJvdG9jb2wgPT09ICdodHRwOicpIHtcblx0XHR1cmxPYmoucHJvdG9jb2wgPSAnaHR0cHM6Jztcblx0fVxuXG5cdC8vIFJlbW92ZSBhdXRoXG5cdGlmIChvcHRpb25zLnN0cmlwQXV0aGVudGljYXRpb24pIHtcblx0XHR1cmxPYmoudXNlcm5hbWUgPSAnJztcblx0XHR1cmxPYmoucGFzc3dvcmQgPSAnJztcblx0fVxuXG5cdC8vIFJlbW92ZSBoYXNoXG5cdGlmIChvcHRpb25zLnN0cmlwSGFzaCkge1xuXHRcdHVybE9iai5oYXNoID0gJyc7XG5cdH1cblxuXHQvLyBSZW1vdmUgZHVwbGljYXRlIHNsYXNoZXMgaWYgbm90IHByZWNlZGVkIGJ5IGEgcHJvdG9jb2xcblx0aWYgKHVybE9iai5wYXRobmFtZSkge1xuXHRcdHVybE9iai5wYXRobmFtZSA9IHVybE9iai5wYXRobmFtZS5yZXBsYWNlKC8oPzwhXFxiKD86W2Etel1bYS16XFxkK1xcLS5dezEsNTB9OikpXFwvezIsfS9nLCAnLycpO1xuXHR9XG5cblx0Ly8gRGVjb2RlIFVSSSBvY3RldHNcblx0aWYgKHVybE9iai5wYXRobmFtZSkge1xuXHRcdHRyeSB7XG5cdFx0XHR1cmxPYmoucGF0aG5hbWUgPSBkZWNvZGVVUkkodXJsT2JqLnBhdGhuYW1lKTtcblx0XHR9IGNhdGNoIChfKSB7fVxuXHR9XG5cblx0Ly8gUmVtb3ZlIGRpcmVjdG9yeSBpbmRleFxuXHRpZiAob3B0aW9ucy5yZW1vdmVEaXJlY3RvcnlJbmRleCA9PT0gdHJ1ZSkge1xuXHRcdG9wdGlvbnMucmVtb3ZlRGlyZWN0b3J5SW5kZXggPSBbL15pbmRleFxcLlthLXpdKyQvXTtcblx0fVxuXG5cdGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMucmVtb3ZlRGlyZWN0b3J5SW5kZXgpICYmIG9wdGlvbnMucmVtb3ZlRGlyZWN0b3J5SW5kZXgubGVuZ3RoID4gMCkge1xuXHRcdGxldCBwYXRoQ29tcG9uZW50cyA9IHVybE9iai5wYXRobmFtZS5zcGxpdCgnLycpO1xuXHRcdGNvbnN0IGxhc3RDb21wb25lbnQgPSBwYXRoQ29tcG9uZW50c1twYXRoQ29tcG9uZW50cy5sZW5ndGggLSAxXTtcblxuXHRcdGlmICh0ZXN0UGFyYW1ldGVyKGxhc3RDb21wb25lbnQsIG9wdGlvbnMucmVtb3ZlRGlyZWN0b3J5SW5kZXgpKSB7XG5cdFx0XHRwYXRoQ29tcG9uZW50cyA9IHBhdGhDb21wb25lbnRzLnNsaWNlKDAsIHBhdGhDb21wb25lbnRzLmxlbmd0aCAtIDEpO1xuXHRcdFx0dXJsT2JqLnBhdGhuYW1lID0gcGF0aENvbXBvbmVudHMuc2xpY2UoMSkuam9pbignLycpICsgJy8nO1xuXHRcdH1cblx0fVxuXG5cdGlmICh1cmxPYmouaG9zdG5hbWUpIHtcblx0XHQvLyBSZW1vdmUgdHJhaWxpbmcgZG90XG5cdFx0dXJsT2JqLmhvc3RuYW1lID0gdXJsT2JqLmhvc3RuYW1lLnJlcGxhY2UoL1xcLiQvLCAnJyk7XG5cblx0XHQvLyBSZW1vdmUgYHd3dy5gXG5cdFx0aWYgKG9wdGlvbnMuc3RyaXBXV1cgJiYgL153d3dcXC4oPyF3d3dcXC4pKD86W2EtelxcLVxcZF17MSw2M30pXFwuKD86W2Etei5cXC1cXGRdezIsNjN9KSQvLnRlc3QodXJsT2JqLmhvc3RuYW1lKSkge1xuXHRcdFx0Ly8gRWFjaCBsYWJlbCBzaG91bGQgYmUgbWF4IDYzIGF0IGxlbmd0aCAobWluOiAxKS5cblx0XHRcdC8vIFNvdXJjZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSG9zdG5hbWUjUmVzdHJpY3Rpb25zX29uX3ZhbGlkX2hvc3RfbmFtZXNcblx0XHRcdC8vIEVhY2ggVExEIHNob3VsZCBiZSB1cCB0byA2MyBjaGFyYWN0ZXJzIGxvbmcgKG1pbjogMikuXG5cdFx0XHQvLyBJdCBpcyB0ZWNobmljYWxseSBwb3NzaWJsZSB0byBoYXZlIGEgc2luZ2xlIGNoYXJhY3RlciBUTEQsIGJ1dCBub25lIGN1cnJlbnRseSBleGlzdC5cblx0XHRcdHVybE9iai5ob3N0bmFtZSA9IHVybE9iai5ob3N0bmFtZS5yZXBsYWNlKC9ed3d3XFwuLywgJycpO1xuXHRcdH1cblx0fVxuXG5cdC8vIFJlbW92ZSBxdWVyeSB1bndhbnRlZCBwYXJhbWV0ZXJzXG5cdGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMucmVtb3ZlUXVlcnlQYXJhbWV0ZXJzKSkge1xuXHRcdGZvciAoY29uc3Qga2V5IG9mIFsuLi51cmxPYmouc2VhcmNoUGFyYW1zLmtleXMoKV0pIHtcblx0XHRcdGlmICh0ZXN0UGFyYW1ldGVyKGtleSwgb3B0aW9ucy5yZW1vdmVRdWVyeVBhcmFtZXRlcnMpKSB7XG5cdFx0XHRcdHVybE9iai5zZWFyY2hQYXJhbXMuZGVsZXRlKGtleSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gU29ydCBxdWVyeSBwYXJhbWV0ZXJzXG5cdGlmIChvcHRpb25zLnNvcnRRdWVyeVBhcmFtZXRlcnMpIHtcblx0XHR1cmxPYmouc2VhcmNoUGFyYW1zLnNvcnQoKTtcblx0fVxuXG5cdGlmIChvcHRpb25zLnJlbW92ZVRyYWlsaW5nU2xhc2gpIHtcblx0XHR1cmxPYmoucGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUucmVwbGFjZSgvXFwvJC8sICcnKTtcblx0fVxuXG5cdGNvbnN0IG9sZFVybFN0cmluZyA9IHVybFN0cmluZztcblxuXHQvLyBUYWtlIGFkdmFudGFnZSBvZiBtYW55IG9mIHRoZSBOb2RlIGB1cmxgIG5vcm1hbGl6YXRpb25zXG5cdHVybFN0cmluZyA9IHVybE9iai50b1N0cmluZygpO1xuXG5cdGlmICghb3B0aW9ucy5yZW1vdmVTaW5nbGVTbGFzaCAmJiB1cmxPYmoucGF0aG5hbWUgPT09ICcvJyAmJiAhb2xkVXJsU3RyaW5nLmVuZHNXaXRoKCcvJykgJiYgdXJsT2JqLmhhc2ggPT09ICcnKSB7XG5cdFx0dXJsU3RyaW5nID0gdXJsU3RyaW5nLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG5cdH1cblxuXHQvLyBSZW1vdmUgZW5kaW5nIGAvYCB1bmxlc3MgcmVtb3ZlU2luZ2xlU2xhc2ggaXMgZmFsc2Vcblx0aWYgKChvcHRpb25zLnJlbW92ZVRyYWlsaW5nU2xhc2ggfHwgdXJsT2JqLnBhdGhuYW1lID09PSAnLycpICYmIHVybE9iai5oYXNoID09PSAnJyAmJiBvcHRpb25zLnJlbW92ZVNpbmdsZVNsYXNoKSB7XG5cdFx0dXJsU3RyaW5nID0gdXJsU3RyaW5nLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG5cdH1cblxuXHQvLyBSZXN0b3JlIHJlbGF0aXZlIHByb3RvY29sLCBpZiBhcHBsaWNhYmxlXG5cdGlmIChoYXNSZWxhdGl2ZVByb3RvY29sICYmICFvcHRpb25zLm5vcm1hbGl6ZVByb3RvY29sKSB7XG5cdFx0dXJsU3RyaW5nID0gdXJsU3RyaW5nLnJlcGxhY2UoL15odHRwOlxcL1xcLy8sICcvLycpO1xuXHR9XG5cblx0Ly8gUmVtb3ZlIGh0dHAvaHR0cHNcblx0aWYgKG9wdGlvbnMuc3RyaXBQcm90b2NvbCkge1xuXHRcdHVybFN0cmluZyA9IHVybFN0cmluZy5yZXBsYWNlKC9eKD86aHR0cHM/Oik/XFwvXFwvLywgJycpO1xuXHR9XG5cblx0cmV0dXJuIHVybFN0cmluZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbm9ybWFsaXplVXJsO1xuIiwgIid1c2Ugc3RyaWN0JztcbmNvbnN0IHVybFJlZ2V4ID0gcmVxdWlyZSgndXJsLXJlZ2V4LXNhZmUnKTtcbmNvbnN0IG5vcm1hbGl6ZVVybCA9IHJlcXVpcmUoJ25vcm1hbGl6ZS11cmwnKTtcblxuY29uc3QgZ2V0VXJsc0Zyb21RdWVyeVBhcmFtZXRlcnMgPSB1cmwgPT4ge1xuXHRjb25zdCByZXR1cm5WYWx1ZSA9IG5ldyBTZXQoKTtcblx0Y29uc3Qge3NlYXJjaFBhcmFtc30gPSAobmV3IFVSTCh1cmwucmVwbGFjZSgvXig/OlxcL1xcL3woPzp3d3dcXC4pKS9pLCAnaHR0cDovLyQyJykpKTtcblxuXHRmb3IgKGNvbnN0IFssIHZhbHVlXSBvZiBzZWFyY2hQYXJhbXMpIHtcblx0XHRpZiAodXJsUmVnZXgoe2V4YWN0OiB0cnVlfSkudGVzdCh2YWx1ZSkpIHtcblx0XHRcdHJldHVyblZhbHVlLmFkZCh2YWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJldHVyblZhbHVlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSAodGV4dCwgb3B0aW9ucyA9IHt9KSA9PiB7XG5cdGlmICh0eXBlb2YgdGV4dCAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgXFxgdGV4dFxcYCBhcmd1bWVudCBzaG91bGQgYmUgYSBzdHJpbmcsIGdvdCAke3R5cGVvZiB0ZXh0fWApO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBvcHRpb25zLmV4Y2x1ZGUgIT09ICd1bmRlZmluZWQnICYmICFBcnJheS5pc0FycmF5KG9wdGlvbnMuZXhjbHVkZSkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgYGV4Y2x1ZGVgIG9wdGlvbiBtdXN0IGJlIGFuIGFycmF5Jyk7XG5cdH1cblxuXHRjb25zdCByZXR1cm5WYWx1ZSA9IG5ldyBTZXQoKTtcblxuXHRjb25zdCBhZGQgPSB1cmwgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm5WYWx1ZS5hZGQobm9ybWFsaXplVXJsKHVybC50cmltKCkucmVwbGFjZSgvXFwuKyQvLCAnJyksIG9wdGlvbnMpKTtcblx0XHR9IGNhdGNoIHt9XG5cdH07XG5cblx0Y29uc3QgdXJscyA9IHRleHQubWF0Y2goXG5cdFx0dXJsUmVnZXgob3B0aW9ucy5yZXF1aXJlU2NoZW1lT3JXd3cgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHtcblx0XHRcdHN0cmljdDogb3B0aW9ucy5yZXF1aXJlU2NoZW1lT3JXd3dcblx0XHR9KVxuXHQpIHx8IFtdO1xuXHRmb3IgKGNvbnN0IHVybCBvZiB1cmxzKSB7XG5cdFx0YWRkKHVybCk7XG5cblx0XHRpZiAob3B0aW9ucy5leHRyYWN0RnJvbVF1ZXJ5U3RyaW5nKSB7XG5cdFx0XHRjb25zdCBxc1VybHMgPSBnZXRVcmxzRnJvbVF1ZXJ5UGFyYW1ldGVycyh1cmwpO1xuXHRcdFx0Zm9yIChjb25zdCBxc1VybCBvZiBxc1VybHMpIHtcblx0XHRcdFx0YWRkKHFzVXJsKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmb3IgKGNvbnN0IGV4Y2x1ZGVkSXRlbSBvZiBvcHRpb25zLmV4Y2x1ZGUgfHwgW10pIHtcblx0XHRmb3IgKGNvbnN0IGl0ZW0gb2YgcmV0dXJuVmFsdWUpIHtcblx0XHRcdGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChleGNsdWRlZEl0ZW0pO1xuXHRcdFx0aWYgKHJlZ2V4LnRlc3QoaXRlbSkpIHtcblx0XHRcdFx0cmV0dXJuVmFsdWUuZGVsZXRlKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXR1cm5WYWx1ZTtcbn07XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuY29uc3QgZGlyZWN0aXZlcyA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIEJyYW5kcyBhIGZ1bmN0aW9uIGFzIGEgZGlyZWN0aXZlIGZhY3RvcnkgZnVuY3Rpb24gc28gdGhhdCBsaXQtaHRtbCB3aWxsIGNhbGxcbiAqIHRoZSBmdW5jdGlvbiBkdXJpbmcgdGVtcGxhdGUgcmVuZGVyaW5nLCByYXRoZXIgdGhhbiBwYXNzaW5nIGFzIGEgdmFsdWUuXG4gKlxuICogQSBfZGlyZWN0aXZlXyBpcyBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSBQYXJ0IGFzIGFuIGFyZ3VtZW50LiBJdCBoYXMgdGhlXG4gKiBzaWduYXR1cmU6IGAocGFydDogUGFydCkgPT4gdm9pZGAuXG4gKlxuICogQSBkaXJlY3RpdmUgX2ZhY3RvcnlfIGlzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhcmd1bWVudHMgZm9yIGRhdGEgYW5kXG4gKiBjb25maWd1cmF0aW9uIGFuZCByZXR1cm5zIGEgZGlyZWN0aXZlLiBVc2VycyBvZiBkaXJlY3RpdmUgdXN1YWxseSByZWZlciB0b1xuICogdGhlIGRpcmVjdGl2ZSBmYWN0b3J5IGFzIHRoZSBkaXJlY3RpdmUuIEZvciBleGFtcGxlLCBcIlRoZSByZXBlYXQgZGlyZWN0aXZlXCIuXG4gKlxuICogVXN1YWxseSBhIHRlbXBsYXRlIGF1dGhvciB3aWxsIGludm9rZSBhIGRpcmVjdGl2ZSBmYWN0b3J5IGluIHRoZWlyIHRlbXBsYXRlXG4gKiB3aXRoIHJlbGV2YW50IGFyZ3VtZW50cywgd2hpY2ggd2lsbCB0aGVuIHJldHVybiBhIGRpcmVjdGl2ZSBmdW5jdGlvbi5cbiAqXG4gKiBIZXJlJ3MgYW4gZXhhbXBsZSBvZiB1c2luZyB0aGUgYHJlcGVhdCgpYCBkaXJlY3RpdmUgZmFjdG9yeSB0aGF0IHRha2VzIGFuXG4gKiBhcnJheSBhbmQgYSBmdW5jdGlvbiB0byByZW5kZXIgYW4gaXRlbTpcbiAqXG4gKiBgYGBqc1xuICogaHRtbGA8dWw+PCR7cmVwZWF0KGl0ZW1zLCAoaXRlbSkgPT4gaHRtbGA8bGk+JHtpdGVtfTwvbGk+YCl9PC91bD5gXG4gKiBgYGBcbiAqXG4gKiBXaGVuIGByZXBlYXRgIGlzIGludm9rZWQsIGl0IHJldHVybnMgYSBkaXJlY3RpdmUgZnVuY3Rpb24gdGhhdCBjbG9zZXMgb3ZlclxuICogYGl0ZW1zYCBhbmQgdGhlIHRlbXBsYXRlIGZ1bmN0aW9uLiBXaGVuIHRoZSBvdXRlciB0ZW1wbGF0ZSBpcyByZW5kZXJlZCwgdGhlXG4gKiByZXR1cm4gZGlyZWN0aXZlIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIHRoZSBQYXJ0IGZvciB0aGUgZXhwcmVzc2lvbi5cbiAqIGByZXBlYXRgIHRoZW4gcGVyZm9ybXMgaXQncyBjdXN0b20gbG9naWMgdG8gcmVuZGVyIG11bHRpcGxlIGl0ZW1zLlxuICpcbiAqIEBwYXJhbSBmIFRoZSBkaXJlY3RpdmUgZmFjdG9yeSBmdW5jdGlvbi4gTXVzdCBiZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhXG4gKiBmdW5jdGlvbiBvZiB0aGUgc2lnbmF0dXJlIGAocGFydDogUGFydCkgPT4gdm9pZGAuIFRoZSByZXR1cm5lZCBmdW5jdGlvbiB3aWxsXG4gKiBiZSBjYWxsZWQgd2l0aCB0aGUgcGFydCBvYmplY3QuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBpbXBvcnQge2RpcmVjdGl2ZSwgaHRtbH0gZnJvbSAnbGl0LWh0bWwnO1xuICpcbiAqIGNvbnN0IGltbXV0YWJsZSA9IGRpcmVjdGl2ZSgodikgPT4gKHBhcnQpID0+IHtcbiAqICAgaWYgKHBhcnQudmFsdWUgIT09IHYpIHtcbiAqICAgICBwYXJ0LnNldFZhbHVlKHYpXG4gKiAgIH1cbiAqIH0pO1xuICovXG5leHBvcnQgY29uc3QgZGlyZWN0aXZlID0gKGYpID0+ICgoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IGQgPSBmKC4uLmFyZ3MpO1xuICAgIGRpcmVjdGl2ZXMuc2V0KGQsIHRydWUpO1xuICAgIHJldHVybiBkO1xufSk7XG5leHBvcnQgY29uc3QgaXNEaXJlY3RpdmUgPSAobykgPT4ge1xuICAgIHJldHVybiB0eXBlb2YgbyA9PT0gJ2Z1bmN0aW9uJyAmJiBkaXJlY3RpdmVzLmhhcyhvKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kaXJlY3RpdmUuanMubWFwIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8qKlxuICogVHJ1ZSBpZiB0aGUgY3VzdG9tIGVsZW1lbnRzIHBvbHlmaWxsIGlzIGluIHVzZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzQ0VQb2x5ZmlsbCA9IHdpbmRvdy5jdXN0b21FbGVtZW50cyAhPT0gdW5kZWZpbmVkICYmXG4gICAgd2luZG93LmN1c3RvbUVsZW1lbnRzLnBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2sgIT09XG4gICAgICAgIHVuZGVmaW5lZDtcbi8qKlxuICogUmVwYXJlbnRzIG5vZGVzLCBzdGFydGluZyBmcm9tIGBzdGFydGAgKGluY2x1c2l2ZSkgdG8gYGVuZGAgKGV4Y2x1c2l2ZSksXG4gKiBpbnRvIGFub3RoZXIgY29udGFpbmVyIChjb3VsZCBiZSB0aGUgc2FtZSBjb250YWluZXIpLCBiZWZvcmUgYGJlZm9yZWAuIElmXG4gKiBgYmVmb3JlYCBpcyBudWxsLCBpdCBhcHBlbmRzIHRoZSBub2RlcyB0byB0aGUgY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3QgcmVwYXJlbnROb2RlcyA9IChjb250YWluZXIsIHN0YXJ0LCBlbmQgPSBudWxsLCBiZWZvcmUgPSBudWxsKSA9PiB7XG4gICAgd2hpbGUgKHN0YXJ0ICE9PSBlbmQpIHtcbiAgICAgICAgY29uc3QgbiA9IHN0YXJ0Lm5leHRTaWJsaW5nO1xuICAgICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKHN0YXJ0LCBiZWZvcmUpO1xuICAgICAgICBzdGFydCA9IG47XG4gICAgfVxufTtcbi8qKlxuICogUmVtb3ZlcyBub2Rlcywgc3RhcnRpbmcgZnJvbSBgc3RhcnRgIChpbmNsdXNpdmUpIHRvIGBlbmRgIChleGNsdXNpdmUpLCBmcm9tXG4gKiBgY29udGFpbmVyYC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZU5vZGVzID0gKGNvbnRhaW5lciwgc3RhcnQsIGVuZCA9IG51bGwpID0+IHtcbiAgICB3aGlsZSAoc3RhcnQgIT09IGVuZCkge1xuICAgICAgICBjb25zdCBuID0gc3RhcnQubmV4dFNpYmxpbmc7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChzdGFydCk7XG4gICAgICAgIHN0YXJ0ID0gbjtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZG9tLmpzLm1hcCIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG4vKipcbiAqIEEgc2VudGluZWwgdmFsdWUgdGhhdCBzaWduYWxzIHRoYXQgYSB2YWx1ZSB3YXMgaGFuZGxlZCBieSBhIGRpcmVjdGl2ZSBhbmRcbiAqIHNob3VsZCBub3QgYmUgd3JpdHRlbiB0byB0aGUgRE9NLlxuICovXG5leHBvcnQgY29uc3Qgbm9DaGFuZ2UgPSB7fTtcbi8qKlxuICogQSBzZW50aW5lbCB2YWx1ZSB0aGF0IHNpZ25hbHMgYSBOb2RlUGFydCB0byBmdWxseSBjbGVhciBpdHMgY29udGVudC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vdGhpbmcgPSB7fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnQuanMubWFwIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8qKlxuICogQW4gZXhwcmVzc2lvbiBtYXJrZXIgd2l0aCBlbWJlZGRlZCB1bmlxdWUga2V5IHRvIGF2b2lkIGNvbGxpc2lvbiB3aXRoXG4gKiBwb3NzaWJsZSB0ZXh0IGluIHRlbXBsYXRlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hcmtlciA9IGB7e2xpdC0ke1N0cmluZyhNYXRoLnJhbmRvbSgpKS5zbGljZSgyKX19fWA7XG4vKipcbiAqIEFuIGV4cHJlc3Npb24gbWFya2VyIHVzZWQgdGV4dC1wb3NpdGlvbnMsIG11bHRpLWJpbmRpbmcgYXR0cmlidXRlcywgYW5kXG4gKiBhdHRyaWJ1dGVzIHdpdGggbWFya3VwLWxpa2UgdGV4dCB2YWx1ZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBub2RlTWFya2VyID0gYDwhLS0ke21hcmtlcn0tLT5gO1xuZXhwb3J0IGNvbnN0IG1hcmtlclJlZ2V4ID0gbmV3IFJlZ0V4cChgJHttYXJrZXJ9fCR7bm9kZU1hcmtlcn1gKTtcbi8qKlxuICogU3VmZml4IGFwcGVuZGVkIHRvIGFsbCBib3VuZCBhdHRyaWJ1dGUgbmFtZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBib3VuZEF0dHJpYnV0ZVN1ZmZpeCA9ICckbGl0JCc7XG4vKipcbiAqIEFuIHVwZGF0ZWFibGUgVGVtcGxhdGUgdGhhdCB0cmFja3MgdGhlIGxvY2F0aW9uIG9mIGR5bmFtaWMgcGFydHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IocmVzdWx0LCBlbGVtZW50KSB7XG4gICAgICAgIHRoaXMucGFydHMgPSBbXTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgY29uc3Qgbm9kZXNUb1JlbW92ZSA9IFtdO1xuICAgICAgICBjb25zdCBzdGFjayA9IFtdO1xuICAgICAgICAvLyBFZGdlIG5lZWRzIGFsbCA0IHBhcmFtZXRlcnMgcHJlc2VudDsgSUUxMSBuZWVkcyAzcmQgcGFyYW1ldGVyIHRvIGJlIG51bGxcbiAgICAgICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihlbGVtZW50LmNvbnRlbnQsIDEzMyAvKiBOb2RlRmlsdGVyLlNIT1dfe0VMRU1FTlR8Q09NTUVOVHxURVhUfSAqLywgbnVsbCwgZmFsc2UpO1xuICAgICAgICAvLyBLZWVwcyB0cmFjayBvZiB0aGUgbGFzdCBpbmRleCBhc3NvY2lhdGVkIHdpdGggYSBwYXJ0LiBXZSB0cnkgdG8gZGVsZXRlXG4gICAgICAgIC8vIHVubmVjZXNzYXJ5IG5vZGVzLCBidXQgd2UgbmV2ZXIgd2FudCB0byBhc3NvY2lhdGUgdHdvIGRpZmZlcmVudCBwYXJ0c1xuICAgICAgICAvLyB0byB0aGUgc2FtZSBpbmRleC4gVGhleSBtdXN0IGhhdmUgYSBjb25zdGFudCBub2RlIGJldHdlZW4uXG4gICAgICAgIGxldCBsYXN0UGFydEluZGV4ID0gMDtcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XG4gICAgICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgICAgICBjb25zdCB7IHN0cmluZ3MsIHZhbHVlczogeyBsZW5ndGggfSB9ID0gcmVzdWx0O1xuICAgICAgICB3aGlsZSAocGFydEluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIFdlJ3ZlIGV4aGF1c3RlZCB0aGUgY29udGVudCBpbnNpZGUgYSBuZXN0ZWQgdGVtcGxhdGUgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBCZWNhdXNlIHdlIHN0aWxsIGhhdmUgcGFydHMgKHRoZSBvdXRlciBmb3ItbG9vcCksIHdlIGtub3c6XG4gICAgICAgICAgICAgICAgLy8gLSBUaGVyZSBpcyBhIHRlbXBsYXRlIGluIHRoZSBzdGFja1xuICAgICAgICAgICAgICAgIC8vIC0gVGhlIHdhbGtlciB3aWxsIGZpbmQgYSBuZXh0Tm9kZSBvdXRzaWRlIHRoZSB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxIC8qIE5vZGUuRUxFTUVOVF9OT0RFICovKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuaGFzQXR0cmlidXRlcygpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBub2RlLmF0dHJpYnV0ZXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBhdHRyaWJ1dGVzO1xuICAgICAgICAgICAgICAgICAgICAvLyBQZXJcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL05hbWVkTm9kZU1hcCxcbiAgICAgICAgICAgICAgICAgICAgLy8gYXR0cmlidXRlcyBhcmUgbm90IGd1YXJhbnRlZWQgdG8gYmUgcmV0dXJuZWQgaW4gZG9jdW1lbnQgb3JkZXIuXG4gICAgICAgICAgICAgICAgICAgIC8vIEluIHBhcnRpY3VsYXIsIEVkZ2UvSUUgY2FuIHJldHVybiB0aGVtIG91dCBvZiBvcmRlciwgc28gd2UgY2Fubm90XG4gICAgICAgICAgICAgICAgICAgIC8vIGFzc3VtZSBhIGNvcnJlc3BvbmRlbmNlIGJldHdlZW4gcGFydCBpbmRleCBhbmQgYXR0cmlidXRlIGluZGV4LlxuICAgICAgICAgICAgICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW5kc1dpdGgoYXR0cmlidXRlc1tpXS5uYW1lLCBib3VuZEF0dHJpYnV0ZVN1ZmZpeCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChjb3VudC0tID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSB0ZW1wbGF0ZSBsaXRlcmFsIHNlY3Rpb24gbGVhZGluZyB1cCB0byB0aGUgZmlyc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV4cHJlc3Npb24gaW4gdGhpcyBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0cmluZ0ZvclBhcnQgPSBzdHJpbmdzW3BhcnRJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBhdHRyaWJ1dGUgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXguZXhlYyhzdHJpbmdGb3JQYXJ0KVsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBbGwgYm91bmQgYXR0cmlidXRlcyBoYXZlIGhhZCBhIHN1ZmZpeCBhZGRlZCBpblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGVtcGxhdGVSZXN1bHQjZ2V0SFRNTCB0byBvcHQgb3V0IG9mIHNwZWNpYWwgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGluZy4gVG8gbG9vayB1cCB0aGUgYXR0cmlidXRlIHZhbHVlIHdlIGFsc28gbmVlZCB0byBhZGRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBzdWZmaXguXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVMb29rdXBOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpICsgYm91bmRBdHRyaWJ1dGVTdWZmaXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZUxvb2t1cE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTG9va3VwTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0aWNzID0gYXR0cmlidXRlVmFsdWUuc3BsaXQobWFya2VyUmVnZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKHsgdHlwZTogJ2F0dHJpYnV0ZScsIGluZGV4LCBuYW1lLCBzdHJpbmdzOiBzdGF0aWNzIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydEluZGV4ICs9IHN0YXRpY3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm9kZS50YWdOYW1lID09PSAnVEVNUExBVEUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IG5vZGUuY29udGVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSAzIC8qIE5vZGUuVEVYVF9OT0RFICovKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IG5vZGUuZGF0YTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5pbmRleE9mKG1hcmtlcikgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0cmluZ3MgPSBkYXRhLnNwbGl0KG1hcmtlclJlZ2V4KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyB0ZXh0IG5vZGUgZm9yIGVhY2ggbGl0ZXJhbCBzZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZXNlIG5vZGVzIGFyZSBhbHNvIHVzZWQgYXMgdGhlIG1hcmtlcnMgZm9yIG5vZGUgcGFydHNcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXN0SW5kZXg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluc2VydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzID0gc3RyaW5nc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydCA9IGNyZWF0ZU1hcmtlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBsYXN0QXR0cmlidXRlTmFtZVJlZ2V4LmV4ZWMocyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoICE9PSBudWxsICYmIGVuZHNXaXRoKG1hdGNoWzJdLCBib3VuZEF0dHJpYnV0ZVN1ZmZpeCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcyA9IHMuc2xpY2UoMCwgbWF0Y2guaW5kZXgpICsgbWF0Y2hbMV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hbMl0uc2xpY2UoMCwgLWJvdW5kQXR0cmlidXRlU3VmZml4Lmxlbmd0aCkgKyBtYXRjaFszXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGluc2VydCwgbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnRzLnB1c2goeyB0eXBlOiAnbm9kZScsIGluZGV4OiArK2luZGV4IH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gdGV4dCwgd2UgbXVzdCBpbnNlcnQgYSBjb21tZW50IHRvIG1hcmsgb3VyIHBsYWNlLlxuICAgICAgICAgICAgICAgICAgICAvLyBFbHNlLCB3ZSBjYW4gdHJ1c3QgaXQgd2lsbCBzdGljayBhcm91bmQgYWZ0ZXIgY2xvbmluZy5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cmluZ3NbbGFzdEluZGV4XSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoY3JlYXRlTWFya2VyKCksIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXNUb1JlbW92ZS5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5kYXRhID0gc3RyaW5nc1tsYXN0SW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBwYXJ0IGZvciBlYWNoIG1hdGNoIGZvdW5kXG4gICAgICAgICAgICAgICAgICAgIHBhcnRJbmRleCArPSBsYXN0SW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCAvKiBOb2RlLkNPTU1FTlRfTk9ERSAqLykge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmRhdGEgPT09IG1hcmtlcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBhIG5ldyBtYXJrZXIgbm9kZSB0byBiZSB0aGUgc3RhcnROb2RlIG9mIHRoZSBQYXJ0IGlmIGFueSBvZlxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgZm9sbG93aW5nIGFyZSB0cnVlOlxuICAgICAgICAgICAgICAgICAgICAvLyAgKiBXZSBkb24ndCBoYXZlIGEgcHJldmlvdXNTaWJsaW5nXG4gICAgICAgICAgICAgICAgICAgIC8vICAqIFRoZSBwcmV2aW91c1NpYmxpbmcgaXMgYWxyZWFkeSB0aGUgc3RhcnQgb2YgYSBwcmV2aW91cyBwYXJ0XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnByZXZpb3VzU2libGluZyA9PT0gbnVsbCB8fCBpbmRleCA9PT0gbGFzdFBhcnRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoY3JlYXRlTWFya2VyKCksIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxhc3RQYXJ0SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKHsgdHlwZTogJ25vZGUnLCBpbmRleCB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIG5leHRTaWJsaW5nLCBrZWVwIHRoaXMgbm9kZSBzbyB3ZSBoYXZlIGFuIGVuZC5cbiAgICAgICAgICAgICAgICAgICAgLy8gRWxzZSwgd2UgY2FuIHJlbW92ZSBpdCB0byBzYXZlIGZ1dHVyZSBjb3N0cy5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubmV4dFNpYmxpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZGF0YSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXNUb1JlbW92ZS5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpID0gLTE7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICgoaSA9IG5vZGUuZGF0YS5pbmRleE9mKG1hcmtlciwgaSArIDEpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbW1lbnQgbm9kZSBoYXMgYSBiaW5kaW5nIG1hcmtlciBpbnNpZGUsIG1ha2UgYW4gaW5hY3RpdmUgcGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGJpbmRpbmcgd29uJ3Qgd29yaywgYnV0IHN1YnNlcXVlbnQgYmluZGluZ3Mgd2lsbFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IGNvbnNpZGVyIHdoZXRoZXIgaXQncyBldmVuIHdvcnRoIGl0IHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYWtlIGJpbmRpbmdzIGluIGNvbW1lbnRzIHdvcmtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7IHR5cGU6ICdub2RlJywgaW5kZXg6IC0xIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIHRleHQgYmluZGluZyBub2RlcyBhZnRlciB0aGUgd2FsayB0byBub3QgZGlzdHVyYiB0aGUgVHJlZVdhbGtlclxuICAgICAgICBmb3IgKGNvbnN0IG4gb2Ygbm9kZXNUb1JlbW92ZSkge1xuICAgICAgICAgICAgbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG4pO1xuICAgICAgICB9XG4gICAgfVxufVxuY29uc3QgZW5kc1dpdGggPSAoc3RyLCBzdWZmaXgpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHN0ci5sZW5ndGggLSBzdWZmaXgubGVuZ3RoO1xuICAgIHJldHVybiBpbmRleCA+PSAwICYmIHN0ci5zbGljZShpbmRleCkgPT09IHN1ZmZpeDtcbn07XG5leHBvcnQgY29uc3QgaXNUZW1wbGF0ZVBhcnRBY3RpdmUgPSAocGFydCkgPT4gcGFydC5pbmRleCAhPT0gLTE7XG4vLyBBbGxvd3MgYGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpYCB0byBiZSByZW5hbWVkIGZvciBhXG4vLyBzbWFsbCBtYW51YWwgc2l6ZS1zYXZpbmdzLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZU1hcmtlciA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpO1xuLyoqXG4gKiBUaGlzIHJlZ2V4IGV4dHJhY3RzIHRoZSBhdHRyaWJ1dGUgbmFtZSBwcmVjZWRpbmcgYW4gYXR0cmlidXRlLXBvc2l0aW9uXG4gKiBleHByZXNzaW9uLiBJdCBkb2VzIHRoaXMgYnkgbWF0Y2hpbmcgdGhlIHN5bnRheCBhbGxvd2VkIGZvciBhdHRyaWJ1dGVzXG4gKiBhZ2FpbnN0IHRoZSBzdHJpbmcgbGl0ZXJhbCBkaXJlY3RseSBwcmVjZWRpbmcgdGhlIGV4cHJlc3Npb24sIGFzc3VtaW5nIHRoYXRcbiAqIHRoZSBleHByZXNzaW9uIGlzIGluIGFuIGF0dHJpYnV0ZS12YWx1ZSBwb3NpdGlvbi5cbiAqXG4gKiBTZWUgYXR0cmlidXRlcyBpbiB0aGUgSFRNTCBzcGVjOlxuICogaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1L3N5bnRheC5odG1sI2VsZW1lbnRzLWF0dHJpYnV0ZXNcbiAqXG4gKiBcIiBcXHgwOVxceDBhXFx4MGNcXHgwZFwiIGFyZSBIVE1MIHNwYWNlIGNoYXJhY3RlcnM6XG4gKiBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUvaW5mcmFzdHJ1Y3R1cmUuaHRtbCNzcGFjZS1jaGFyYWN0ZXJzXG4gKlxuICogXCJcXDAtXFx4MUZcXHg3Ri1cXHg5RlwiIGFyZSBVbmljb2RlIGNvbnRyb2wgY2hhcmFjdGVycywgd2hpY2ggaW5jbHVkZXMgZXZlcnlcbiAqIHNwYWNlIGNoYXJhY3RlciBleGNlcHQgXCIgXCIuXG4gKlxuICogU28gYW4gYXR0cmlidXRlIGlzOlxuICogICogVGhlIG5hbWU6IGFueSBjaGFyYWN0ZXIgZXhjZXB0IGEgY29udHJvbCBjaGFyYWN0ZXIsIHNwYWNlIGNoYXJhY3RlciwgKCcpLFxuICogICAgKFwiKSwgXCI+XCIsIFwiPVwiLCBvciBcIi9cIlxuICogICogRm9sbG93ZWQgYnkgemVybyBvciBtb3JlIHNwYWNlIGNoYXJhY3RlcnNcbiAqICAqIEZvbGxvd2VkIGJ5IFwiPVwiXG4gKiAgKiBGb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgc3BhY2UgY2hhcmFjdGVyc1xuICogICogRm9sbG93ZWQgYnk6XG4gKiAgICAqIEFueSBjaGFyYWN0ZXIgZXhjZXB0IHNwYWNlLCAoJyksIChcIiksIFwiPFwiLCBcIj5cIiwgXCI9XCIsIChgKSwgb3JcbiAqICAgICogKFwiKSB0aGVuIGFueSBub24tKFwiKSwgb3JcbiAqICAgICogKCcpIHRoZW4gYW55IG5vbi0oJylcbiAqL1xuZXhwb3J0IGNvbnN0IGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXggPSAvKFsgXFx4MDlcXHgwYVxceDBjXFx4MGRdKShbXlxcMC1cXHgxRlxceDdGLVxceDlGIFwiJz49L10rKShbIFxceDA5XFx4MGFcXHgwY1xceDBkXSo9WyBcXHgwOVxceDBhXFx4MGNcXHgwZF0qKD86W14gXFx4MDlcXHgwYVxceDBjXFx4MGRcIidgPD49XSp8XCJbXlwiXSp8J1teJ10qKSkkLztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRlbXBsYXRlLmpzLm1hcCIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuaW1wb3J0IHsgaXNDRVBvbHlmaWxsIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgaXNUZW1wbGF0ZVBhcnRBY3RpdmUgfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcbi8qKlxuICogQW4gaW5zdGFuY2Ugb2YgYSBgVGVtcGxhdGVgIHRoYXQgY2FuIGJlIGF0dGFjaGVkIHRvIHRoZSBET00gYW5kIHVwZGF0ZWRcbiAqIHdpdGggbmV3IHZhbHVlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlSW5zdGFuY2Uge1xuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlLCBwcm9jZXNzb3IsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5fX3BhcnRzID0gW107XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5wcm9jZXNzb3IgPSBwcm9jZXNzb3I7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuICAgIHVwZGF0ZSh2YWx1ZXMpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHBhcnQgb2YgdGhpcy5fX3BhcnRzKSB7XG4gICAgICAgICAgICBpZiAocGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFydC5zZXRWYWx1ZSh2YWx1ZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgcGFydCBvZiB0aGlzLl9fcGFydHMpIHtcbiAgICAgICAgICAgIGlmIChwYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwYXJ0LmNvbW1pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIF9jbG9uZSgpIHtcbiAgICAgICAgLy8gVGhlcmUgYXJlIGEgbnVtYmVyIG9mIHN0ZXBzIGluIHRoZSBsaWZlY3ljbGUgb2YgYSB0ZW1wbGF0ZSBpbnN0YW5jZSdzXG4gICAgICAgIC8vIERPTSBmcmFnbWVudDpcbiAgICAgICAgLy8gIDEuIENsb25lIC0gY3JlYXRlIHRoZSBpbnN0YW5jZSBmcmFnbWVudFxuICAgICAgICAvLyAgMi4gQWRvcHQgLSBhZG9wdCBpbnRvIHRoZSBtYWluIGRvY3VtZW50XG4gICAgICAgIC8vICAzLiBQcm9jZXNzIC0gZmluZCBwYXJ0IG1hcmtlcnMgYW5kIGNyZWF0ZSBwYXJ0c1xuICAgICAgICAvLyAgNC4gVXBncmFkZSAtIHVwZ3JhZGUgY3VzdG9tIGVsZW1lbnRzXG4gICAgICAgIC8vICA1LiBVcGRhdGUgLSBzZXQgbm9kZSwgYXR0cmlidXRlLCBwcm9wZXJ0eSwgZXRjLiwgdmFsdWVzXG4gICAgICAgIC8vICA2LiBDb25uZWN0IC0gY29ubmVjdCB0byB0aGUgZG9jdW1lbnQuIE9wdGlvbmFsIGFuZCBvdXRzaWRlIG9mIHRoaXNcbiAgICAgICAgLy8gICAgIG1ldGhvZC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gV2UgaGF2ZSBhIGZldyBjb25zdHJhaW50cyBvbiB0aGUgb3JkZXJpbmcgb2YgdGhlc2Ugc3RlcHM6XG4gICAgICAgIC8vICAqIFdlIG5lZWQgdG8gdXBncmFkZSBiZWZvcmUgdXBkYXRpbmcsIHNvIHRoYXQgcHJvcGVydHkgdmFsdWVzIHdpbGwgcGFzc1xuICAgICAgICAvLyAgICB0aHJvdWdoIGFueSBwcm9wZXJ0eSBzZXR0ZXJzLlxuICAgICAgICAvLyAgKiBXZSB3b3VsZCBsaWtlIHRvIHByb2Nlc3MgYmVmb3JlIHVwZ3JhZGluZyBzbyB0aGF0IHdlJ3JlIHN1cmUgdGhhdCB0aGVcbiAgICAgICAgLy8gICAgY2xvbmVkIGZyYWdtZW50IGlzIGluZXJ0IGFuZCBub3QgZGlzdHVyYmVkIGJ5IHNlbGYtbW9kaWZ5aW5nIERPTS5cbiAgICAgICAgLy8gICogV2Ugd2FudCBjdXN0b20gZWxlbWVudHMgdG8gdXBncmFkZSBldmVuIGluIGRpc2Nvbm5lY3RlZCBmcmFnbWVudHMuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIEdpdmVuIHRoZXNlIGNvbnN0cmFpbnRzLCB3aXRoIGZ1bGwgY3VzdG9tIGVsZW1lbnRzIHN1cHBvcnQgd2Ugd291bGRcbiAgICAgICAgLy8gcHJlZmVyIHRoZSBvcmRlcjogQ2xvbmUsIFByb2Nlc3MsIEFkb3B0LCBVcGdyYWRlLCBVcGRhdGUsIENvbm5lY3RcbiAgICAgICAgLy9cbiAgICAgICAgLy8gQnV0IFNhZmFyaSBkb29lcyBub3QgaW1wbGVtZW50IEN1c3RvbUVsZW1lbnRSZWdpc3RyeSN1cGdyYWRlLCBzbyB3ZVxuICAgICAgICAvLyBjYW4gbm90IGltcGxlbWVudCB0aGF0IG9yZGVyIGFuZCBzdGlsbCBoYXZlIHVwZ3JhZGUtYmVmb3JlLXVwZGF0ZSBhbmRcbiAgICAgICAgLy8gdXBncmFkZSBkaXNjb25uZWN0ZWQgZnJhZ21lbnRzLiBTbyB3ZSBpbnN0ZWFkIHNhY3JpZmljZSB0aGVcbiAgICAgICAgLy8gcHJvY2Vzcy1iZWZvcmUtdXBncmFkZSBjb25zdHJhaW50LCBzaW5jZSBpbiBDdXN0b20gRWxlbWVudHMgdjEgZWxlbWVudHNcbiAgICAgICAgLy8gbXVzdCBub3QgbW9kaWZ5IHRoZWlyIGxpZ2h0IERPTSBpbiB0aGUgY29uc3RydWN0b3IuIFdlIHN0aWxsIGhhdmUgaXNzdWVzXG4gICAgICAgIC8vIHdoZW4gY28tZXhpc3Rpbmcgd2l0aCBDRXYwIGVsZW1lbnRzIGxpa2UgUG9seW1lciAxLCBhbmQgd2l0aCBwb2x5ZmlsbHNcbiAgICAgICAgLy8gdGhhdCBkb24ndCBzdHJpY3RseSBhZGhlcmUgdG8gdGhlIG5vLW1vZGlmaWNhdGlvbiBydWxlIGJlY2F1c2Ugc2hhZG93XG4gICAgICAgIC8vIERPTSwgd2hpY2ggbWF5IGJlIGNyZWF0ZWQgaW4gdGhlIGNvbnN0cnVjdG9yLCBpcyBlbXVsYXRlZCBieSBiZWluZyBwbGFjZWRcbiAgICAgICAgLy8gaW4gdGhlIGxpZ2h0IERPTS5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gVGhlIHJlc3VsdGluZyBvcmRlciBpcyBvbiBuYXRpdmUgaXM6IENsb25lLCBBZG9wdCwgVXBncmFkZSwgUHJvY2VzcyxcbiAgICAgICAgLy8gVXBkYXRlLCBDb25uZWN0LiBkb2N1bWVudC5pbXBvcnROb2RlKCkgcGVyZm9ybXMgQ2xvbmUsIEFkb3B0LCBhbmQgVXBncmFkZVxuICAgICAgICAvLyBpbiBvbmUgc3RlcC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gVGhlIEN1c3RvbSBFbGVtZW50cyB2MSBwb2x5ZmlsbCBzdXBwb3J0cyB1cGdyYWRlKCksIHNvIHRoZSBvcmRlciB3aGVuXG4gICAgICAgIC8vIHBvbHlmaWxsZWQgaXMgdGhlIG1vcmUgaWRlYWw6IENsb25lLCBQcm9jZXNzLCBBZG9wdCwgVXBncmFkZSwgVXBkYXRlLFxuICAgICAgICAvLyBDb25uZWN0LlxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IGlzQ0VQb2x5ZmlsbCA/XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlLmVsZW1lbnQuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkgOlxuICAgICAgICAgICAgZG9jdW1lbnQuaW1wb3J0Tm9kZSh0aGlzLnRlbXBsYXRlLmVsZW1lbnQuY29udGVudCwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHN0YWNrID0gW107XG4gICAgICAgIGNvbnN0IHBhcnRzID0gdGhpcy50ZW1wbGF0ZS5wYXJ0cztcbiAgICAgICAgLy8gRWRnZSBuZWVkcyBhbGwgNCBwYXJhbWV0ZXJzIHByZXNlbnQ7IElFMTEgbmVlZHMgM3JkIHBhcmFtZXRlciB0byBiZSBudWxsXG4gICAgICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoZnJhZ21lbnQsIDEzMyAvKiBOb2RlRmlsdGVyLlNIT1dfe0VMRU1FTlR8Q09NTUVOVHxURVhUfSAqLywgbnVsbCwgZmFsc2UpO1xuICAgICAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICAgICAgbGV0IG5vZGVJbmRleCA9IDA7XG4gICAgICAgIGxldCBwYXJ0O1xuICAgICAgICBsZXQgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICAvLyBMb29wIHRocm91Z2ggYWxsIHRoZSBub2RlcyBhbmQgcGFydHMgb2YgYSB0ZW1wbGF0ZVxuICAgICAgICB3aGlsZSAocGFydEluZGV4IDwgcGFydHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBwYXJ0ID0gcGFydHNbcGFydEluZGV4XTtcbiAgICAgICAgICAgIGlmICghaXNUZW1wbGF0ZVBhcnRBY3RpdmUocGFydCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fcGFydHMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHJvZ3Jlc3MgdGhlIHRyZWUgd2Fsa2VyIHVudGlsIHdlIGZpbmQgb3VyIG5leHQgcGFydCdzIG5vZGUuXG4gICAgICAgICAgICAvLyBOb3RlIHRoYXQgbXVsdGlwbGUgcGFydHMgbWF5IHNoYXJlIHRoZSBzYW1lIG5vZGUgKGF0dHJpYnV0ZSBwYXJ0c1xuICAgICAgICAgICAgLy8gb24gYSBzaW5nbGUgZWxlbWVudCksIHNvIHRoaXMgbG9vcCBtYXkgbm90IHJ1biBhdCBhbGwuXG4gICAgICAgICAgICB3aGlsZSAobm9kZUluZGV4IDwgcGFydC5pbmRleCkge1xuICAgICAgICAgICAgICAgIG5vZGVJbmRleCsrO1xuICAgICAgICAgICAgICAgIGlmIChub2RlLm5vZGVOYW1lID09PSAnVEVNUExBVEUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IG5vZGUuY29udGVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChub2RlID0gd2Fsa2VyLm5leHROb2RlKCkpID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlJ3ZlIGV4aGF1c3RlZCB0aGUgY29udGVudCBpbnNpZGUgYSBuZXN0ZWQgdGVtcGxhdGUgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAgICAgLy8gQmVjYXVzZSB3ZSBzdGlsbCBoYXZlIHBhcnRzICh0aGUgb3V0ZXIgZm9yLWxvb3ApLCB3ZSBrbm93OlxuICAgICAgICAgICAgICAgICAgICAvLyAtIFRoZXJlIGlzIGEgdGVtcGxhdGUgaW4gdGhlIHN0YWNrXG4gICAgICAgICAgICAgICAgICAgIC8vIC0gVGhlIHdhbGtlciB3aWxsIGZpbmQgYSBuZXh0Tm9kZSBvdXRzaWRlIHRoZSB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFdlJ3ZlIGFycml2ZWQgYXQgb3VyIHBhcnQncyBub2RlLlxuICAgICAgICAgICAgaWYgKHBhcnQudHlwZSA9PT0gJ25vZGUnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFydCA9IHRoaXMucHJvY2Vzc29yLmhhbmRsZVRleHRFeHByZXNzaW9uKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgcGFydC5pbnNlcnRBZnRlck5vZGUobm9kZS5wcmV2aW91c1NpYmxpbmcpO1xuICAgICAgICAgICAgICAgIHRoaXMuX19wYXJ0cy5wdXNoKHBhcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX3BhcnRzLnB1c2goLi4udGhpcy5wcm9jZXNzb3IuaGFuZGxlQXR0cmlidXRlRXhwcmVzc2lvbnMobm9kZSwgcGFydC5uYW1lLCBwYXJ0LnN0cmluZ3MsIHRoaXMub3B0aW9ucykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQ0VQb2x5ZmlsbCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRvcHROb2RlKGZyYWdtZW50KTtcbiAgICAgICAgICAgIGN1c3RvbUVsZW1lbnRzLnVwZ3JhZGUoZnJhZ21lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD10ZW1wbGF0ZS1pbnN0YW5jZS5qcy5tYXAiLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cbmltcG9ydCB7IHJlcGFyZW50Tm9kZXMgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBib3VuZEF0dHJpYnV0ZVN1ZmZpeCwgbGFzdEF0dHJpYnV0ZU5hbWVSZWdleCwgbWFya2VyLCBub2RlTWFya2VyIH0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5jb25zdCBjb21tZW50TWFya2VyID0gYCAke21hcmtlcn0gYDtcbi8qKlxuICogVGhlIHJldHVybiB0eXBlIG9mIGBodG1sYCwgd2hpY2ggaG9sZHMgYSBUZW1wbGF0ZSBhbmQgdGhlIHZhbHVlcyBmcm9tXG4gKiBpbnRlcnBvbGF0ZWQgZXhwcmVzc2lvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgY29uc3RydWN0b3Ioc3RyaW5ncywgdmFsdWVzLCB0eXBlLCBwcm9jZXNzb3IpIHtcbiAgICAgICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICAgICAgdGhpcy52YWx1ZXMgPSB2YWx1ZXM7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc3RyaW5nIG9mIEhUTUwgdXNlZCB0byBjcmVhdGUgYSBgPHRlbXBsYXRlPmAgZWxlbWVudC5cbiAgICAgKi9cbiAgICBnZXRIVE1MKCkge1xuICAgICAgICBjb25zdCBsID0gdGhpcy5zdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgICAgIGxldCBodG1sID0gJyc7XG4gICAgICAgIGxldCBpc0NvbW1lbnRCaW5kaW5nID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzID0gdGhpcy5zdHJpbmdzW2ldO1xuICAgICAgICAgICAgLy8gRm9yIGVhY2ggYmluZGluZyB3ZSB3YW50IHRvIGRldGVybWluZSB0aGUga2luZCBvZiBtYXJrZXIgdG8gaW5zZXJ0XG4gICAgICAgICAgICAvLyBpbnRvIHRoZSB0ZW1wbGF0ZSBzb3VyY2UgYmVmb3JlIGl0J3MgcGFyc2VkIGJ5IHRoZSBicm93c2VyJ3MgSFRNTFxuICAgICAgICAgICAgLy8gcGFyc2VyLiBUaGUgbWFya2VyIHR5cGUgaXMgYmFzZWQgb24gd2hldGhlciB0aGUgZXhwcmVzc2lvbiBpcyBpbiBhblxuICAgICAgICAgICAgLy8gYXR0cmlidXRlLCB0ZXh0LCBvciBjb21tZW50IHBvaXNpdGlvbi5cbiAgICAgICAgICAgIC8vICAgKiBGb3Igbm9kZS1wb3NpdGlvbiBiaW5kaW5ncyB3ZSBpbnNlcnQgYSBjb21tZW50IHdpdGggdGhlIG1hcmtlclxuICAgICAgICAgICAgLy8gICAgIHNlbnRpbmVsIGFzIGl0cyB0ZXh0IGNvbnRlbnQsIGxpa2UgPCEtLXt7bGl0LWd1aWR9fS0tPi5cbiAgICAgICAgICAgIC8vICAgKiBGb3IgYXR0cmlidXRlIGJpbmRpbmdzIHdlIGluc2VydCBqdXN0IHRoZSBtYXJrZXIgc2VudGluZWwgZm9yIHRoZVxuICAgICAgICAgICAgLy8gICAgIGZpcnN0IGJpbmRpbmcsIHNvIHRoYXQgd2Ugc3VwcG9ydCB1bnF1b3RlZCBhdHRyaWJ1dGUgYmluZGluZ3MuXG4gICAgICAgICAgICAvLyAgICAgU3Vic2VxdWVudCBiaW5kaW5ncyBjYW4gdXNlIGEgY29tbWVudCBtYXJrZXIgYmVjYXVzZSBtdWx0aS1iaW5kaW5nXG4gICAgICAgICAgICAvLyAgICAgYXR0cmlidXRlcyBtdXN0IGJlIHF1b3RlZC5cbiAgICAgICAgICAgIC8vICAgKiBGb3IgY29tbWVudCBiaW5kaW5ncyB3ZSBpbnNlcnQganVzdCB0aGUgbWFya2VyIHNlbnRpbmVsIHNvIHdlIGRvbid0XG4gICAgICAgICAgICAvLyAgICAgY2xvc2UgdGhlIGNvbW1lbnQuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBjb2RlIHNjYW5zIHRoZSB0ZW1wbGF0ZSBzb3VyY2UsIGJ1dCBpcyAqbm90KiBhbiBIVE1MXG4gICAgICAgICAgICAvLyBwYXJzZXIuIFdlIGRvbid0IG5lZWQgdG8gdHJhY2sgdGhlIHRyZWUgc3RydWN0dXJlIG9mIHRoZSBIVE1MLCBvbmx5XG4gICAgICAgICAgICAvLyB3aGV0aGVyIGEgYmluZGluZyBpcyBpbnNpZGUgYSBjb21tZW50LCBhbmQgaWYgbm90LCBpZiBpdCBhcHBlYXJzIHRvIGJlXG4gICAgICAgICAgICAvLyB0aGUgZmlyc3QgYmluZGluZyBpbiBhbiBhdHRyaWJ1dGUuXG4gICAgICAgICAgICBjb25zdCBjb21tZW50T3BlbiA9IHMubGFzdEluZGV4T2YoJzwhLS0nKTtcbiAgICAgICAgICAgIC8vIFdlJ3JlIGluIGNvbW1lbnQgcG9zaXRpb24gaWYgd2UgaGF2ZSBhIGNvbW1lbnQgb3BlbiB3aXRoIG5vIGZvbGxvd2luZ1xuICAgICAgICAgICAgLy8gY29tbWVudCBjbG9zZS4gQmVjYXVzZSA8LS0gY2FuIGFwcGVhciBpbiBhbiBhdHRyaWJ1dGUgdmFsdWUgdGhlcmUgY2FuXG4gICAgICAgICAgICAvLyBiZSBmYWxzZSBwb3NpdGl2ZXMuXG4gICAgICAgICAgICBpc0NvbW1lbnRCaW5kaW5nID0gKGNvbW1lbnRPcGVuID4gLTEgfHwgaXNDb21tZW50QmluZGluZykgJiZcbiAgICAgICAgICAgICAgICBzLmluZGV4T2YoJy0tPicsIGNvbW1lbnRPcGVuICsgMSkgPT09IC0xO1xuICAgICAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHdlIGhhdmUgYW4gYXR0cmlidXRlLWxpa2Ugc2VxdWVuY2UgcHJlY2VlZGluZyB0aGVcbiAgICAgICAgICAgIC8vIGV4cHJlc3Npb24uIFRoaXMgY2FuIG1hdGNoIFwibmFtZT12YWx1ZVwiIGxpa2Ugc3RydWN0dXJlcyBpbiB0ZXh0LFxuICAgICAgICAgICAgLy8gY29tbWVudHMsIGFuZCBhdHRyaWJ1dGUgdmFsdWVzLCBzbyB0aGVyZSBjYW4gYmUgZmFsc2UtcG9zaXRpdmVzLlxuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlTWF0Y2ggPSBsYXN0QXR0cmlidXRlTmFtZVJlZ2V4LmV4ZWMocyk7XG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlTWF0Y2ggPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSdyZSBvbmx5IGluIHRoaXMgYnJhbmNoIGlmIHdlIGRvbid0IGhhdmUgYSBhdHRyaWJ1dGUtbGlrZVxuICAgICAgICAgICAgICAgIC8vIHByZWNlZWRpbmcgc2VxdWVuY2UuIEZvciBjb21tZW50cywgdGhpcyBndWFyZHMgYWdhaW5zdCB1bnVzdWFsXG4gICAgICAgICAgICAgICAgLy8gYXR0cmlidXRlIHZhbHVlcyBsaWtlIDxkaXYgZm9vPVwiPCEtLSR7J2Jhcid9XCI+LiBDYXNlcyBsaWtlXG4gICAgICAgICAgICAgICAgLy8gPCEtLSBmb289JHsnYmFyJ30tLT4gYXJlIGhhbmRsZWQgY29ycmVjdGx5IGluIHRoZSBhdHRyaWJ1dGUgYnJhbmNoXG4gICAgICAgICAgICAgICAgLy8gYmVsb3cuXG4gICAgICAgICAgICAgICAgaHRtbCArPSBzICsgKGlzQ29tbWVudEJpbmRpbmcgPyBjb21tZW50TWFya2VyIDogbm9kZU1hcmtlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBGb3IgYXR0cmlidXRlcyB3ZSB1c2UganVzdCBhIG1hcmtlciBzZW50aW5lbCwgYW5kIGFsc28gYXBwZW5kIGFcbiAgICAgICAgICAgICAgICAvLyAkbGl0JCBzdWZmaXggdG8gdGhlIG5hbWUgdG8gb3B0LW91dCBvZiBhdHRyaWJ1dGUtc3BlY2lmaWMgcGFyc2luZ1xuICAgICAgICAgICAgICAgIC8vIHRoYXQgSUUgYW5kIEVkZ2UgZG8gZm9yIHN0eWxlIGFuZCBjZXJ0YWluIFNWRyBhdHRyaWJ1dGVzLlxuICAgICAgICAgICAgICAgIGh0bWwgKz0gcy5zdWJzdHIoMCwgYXR0cmlidXRlTWF0Y2guaW5kZXgpICsgYXR0cmlidXRlTWF0Y2hbMV0gK1xuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVNYXRjaFsyXSArIGJvdW5kQXR0cmlidXRlU3VmZml4ICsgYXR0cmlidXRlTWF0Y2hbM10gK1xuICAgICAgICAgICAgICAgICAgICBtYXJrZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaHRtbCArPSB0aGlzLnN0cmluZ3NbbF07XG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgICBnZXRUZW1wbGF0ZUVsZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICAgICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gdGhpcy5nZXRIVE1MKCk7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG59XG4vKipcbiAqIEEgVGVtcGxhdGVSZXN1bHQgZm9yIFNWRyBmcmFnbWVudHMuXG4gKlxuICogVGhpcyBjbGFzcyB3cmFwcyBIVE1MIGluIGFuIGA8c3ZnPmAgdGFnIGluIG9yZGVyIHRvIHBhcnNlIGl0cyBjb250ZW50cyBpbiB0aGVcbiAqIFNWRyBuYW1lc3BhY2UsIHRoZW4gbW9kaWZpZXMgdGhlIHRlbXBsYXRlIHRvIHJlbW92ZSB0aGUgYDxzdmc+YCB0YWcgc28gdGhhdFxuICogY2xvbmVzIG9ubHkgY29udGFpbmVyIHRoZSBvcmlnaW5hbCBmcmFnbWVudC5cbiAqL1xuZXhwb3J0IGNsYXNzIFNWR1RlbXBsYXRlUmVzdWx0IGV4dGVuZHMgVGVtcGxhdGVSZXN1bHQge1xuICAgIGdldEhUTUwoKSB7XG4gICAgICAgIHJldHVybiBgPHN2Zz4ke3N1cGVyLmdldEhUTUwoKX08L3N2Zz5gO1xuICAgIH1cbiAgICBnZXRUZW1wbGF0ZUVsZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gc3VwZXIuZ2V0VGVtcGxhdGVFbGVtZW50KCk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZW1wbGF0ZS5jb250ZW50O1xuICAgICAgICBjb25zdCBzdmdFbGVtZW50ID0gY29udGVudC5maXJzdENoaWxkO1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKHN2Z0VsZW1lbnQpO1xuICAgICAgICByZXBhcmVudE5vZGVzKGNvbnRlbnQsIHN2Z0VsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD10ZW1wbGF0ZS1yZXN1bHQuanMubWFwIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5pbXBvcnQgeyBpc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlLmpzJztcbmltcG9ydCB7IHJlbW92ZU5vZGVzIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgbm9DaGFuZ2UsIG5vdGhpbmcgfSBmcm9tICcuL3BhcnQuanMnO1xuaW1wb3J0IHsgVGVtcGxhdGVJbnN0YW5jZSB9IGZyb20gJy4vdGVtcGxhdGUtaW5zdGFuY2UuanMnO1xuaW1wb3J0IHsgVGVtcGxhdGVSZXN1bHQgfSBmcm9tICcuL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5pbXBvcnQgeyBjcmVhdGVNYXJrZXIgfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcbmV4cG9ydCBjb25zdCBpc1ByaW1pdGl2ZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHJldHVybiAodmFsdWUgPT09IG51bGwgfHxcbiAgICAgICAgISh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykpO1xufTtcbmV4cG9ydCBjb25zdCBpc0l0ZXJhYmxlID0gKHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpIHx8XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgISEodmFsdWUgJiYgdmFsdWVbU3ltYm9sLml0ZXJhdG9yXSk7XG59O1xuLyoqXG4gKiBXcml0ZXMgYXR0cmlidXRlIHZhbHVlcyB0byB0aGUgRE9NIGZvciBhIGdyb3VwIG9mIEF0dHJpYnV0ZVBhcnRzIGJvdW5kIHRvIGFcbiAqIHNpbmdsZSBhdHRpYnV0ZS4gVGhlIHZhbHVlIGlzIG9ubHkgc2V0IG9uY2UgZXZlbiBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgcGFydHNcbiAqIGZvciBhbiBhdHRyaWJ1dGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGVDb21taXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MpIHtcbiAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gICAgICAgIHRoaXMucGFydHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpbmdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wYXJ0c1tpXSA9IHRoaXMuX2NyZWF0ZVBhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc2luZ2xlIHBhcnQuIE92ZXJyaWRlIHRoaXMgdG8gY3JlYXRlIGEgZGlmZmVybnQgdHlwZSBvZiBwYXJ0LlxuICAgICAqL1xuICAgIF9jcmVhdGVQYXJ0KCkge1xuICAgICAgICByZXR1cm4gbmV3IEF0dHJpYnV0ZVBhcnQodGhpcyk7XG4gICAgfVxuICAgIF9nZXRWYWx1ZSgpIHtcbiAgICAgICAgY29uc3Qgc3RyaW5ncyA9IHRoaXMuc3RyaW5ncztcbiAgICAgICAgY29uc3QgbCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgbGV0IHRleHQgPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHRleHQgKz0gc3RyaW5nc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHBhcnQgPSB0aGlzLnBhcnRzW2ldO1xuICAgICAgICAgICAgaWYgKHBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBwYXJ0LnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChpc1ByaW1pdGl2ZSh2KSB8fCAhaXNJdGVyYWJsZSh2KSkge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IHR5cGVvZiB2ID09PSAnc3RyaW5nJyA/IHYgOiBTdHJpbmcodik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHQgb2Ygdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSB0eXBlb2YgdCA9PT0gJ3N0cmluZycgPyB0IDogU3RyaW5nKHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRleHQgKz0gc3RyaW5nc1tsXTtcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuICAgIGNvbW1pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5uYW1lLCB0aGlzLl9nZXRWYWx1ZSgpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8qKlxuICogQSBQYXJ0IHRoYXQgY29udHJvbHMgYWxsIG9yIHBhcnQgb2YgYW4gYXR0cmlidXRlIHZhbHVlLlxuICovXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IoY29tbWl0dGVyKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuY29tbWl0dGVyID0gY29tbWl0dGVyO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgIT09IG5vQ2hhbmdlICYmICghaXNQcmltaXRpdmUodmFsdWUpIHx8IHZhbHVlICE9PSB0aGlzLnZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGEgbm90IGEgZGlyZWN0aXZlLCBkaXJ0eSB0aGUgY29tbWl0dGVyIHNvIHRoYXQgaXQnbGxcbiAgICAgICAgICAgIC8vIGNhbGwgc2V0QXR0cmlidXRlLiBJZiB0aGUgdmFsdWUgaXMgYSBkaXJlY3RpdmUsIGl0J2xsIGRpcnR5IHRoZVxuICAgICAgICAgICAgLy8gY29tbWl0dGVyIGlmIGl0IGNhbGxzIHNldFZhbHVlKCkuXG4gICAgICAgICAgICBpZiAoIWlzRGlyZWN0aXZlKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tbWl0dGVyLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21taXQoKSB7XG4gICAgICAgIHdoaWxlIChpc0RpcmVjdGl2ZSh0aGlzLnZhbHVlKSkge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aXZlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBub0NoYW5nZTtcbiAgICAgICAgICAgIGRpcmVjdGl2ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbW1pdHRlci5jb21taXQoKTtcbiAgICB9XG59XG4vKipcbiAqIEEgUGFydCB0aGF0IGNvbnRyb2xzIGEgbG9jYXRpb24gd2l0aGluIGEgTm9kZSB0cmVlLiBMaWtlIGEgUmFuZ2UsIE5vZGVQYXJ0XG4gKiBoYXMgc3RhcnQgYW5kIGVuZCBsb2NhdGlvbnMgYW5kIGNhbiBzZXQgYW5kIHVwZGF0ZSB0aGUgTm9kZXMgYmV0d2VlbiB0aG9zZVxuICogbG9jYXRpb25zLlxuICpcbiAqIE5vZGVQYXJ0cyBzdXBwb3J0IHNldmVyYWwgdmFsdWUgdHlwZXM6IHByaW1pdGl2ZXMsIE5vZGVzLCBUZW1wbGF0ZVJlc3VsdHMsXG4gKiBhcyB3ZWxsIGFzIGFycmF5cyBhbmQgaXRlcmFibGVzIG9mIHRob3NlIHR5cGVzLlxuICovXG5leHBvcnQgY2xhc3MgTm9kZVBhcnQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXBwZW5kcyB0aGlzIHBhcnQgaW50byBhIGNvbnRhaW5lci5cbiAgICAgKlxuICAgICAqIFRoaXMgcGFydCBtdXN0IGJlIGVtcHR5LCBhcyBpdHMgY29udGVudHMgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IG1vdmVkLlxuICAgICAqL1xuICAgIGFwcGVuZEludG8oY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuc3RhcnROb2RlID0gY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1hcmtlcigpKTtcbiAgICAgICAgdGhpcy5lbmROb2RlID0gY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1hcmtlcigpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyB0aGlzIHBhcnQgYWZ0ZXIgdGhlIGByZWZgIG5vZGUgKGJldHdlZW4gYHJlZmAgYW5kIGByZWZgJ3MgbmV4dFxuICAgICAqIHNpYmxpbmcpLiBCb3RoIGByZWZgIGFuZCBpdHMgbmV4dCBzaWJsaW5nIG11c3QgYmUgc3RhdGljLCB1bmNoYW5naW5nIG5vZGVzXG4gICAgICogc3VjaCBhcyB0aG9zZSB0aGF0IGFwcGVhciBpbiBhIGxpdGVyYWwgc2VjdGlvbiBvZiBhIHRlbXBsYXRlLlxuICAgICAqXG4gICAgICogVGhpcyBwYXJ0IG11c3QgYmUgZW1wdHksIGFzIGl0cyBjb250ZW50cyBhcmUgbm90IGF1dG9tYXRpY2FsbHkgbW92ZWQuXG4gICAgICovXG4gICAgaW5zZXJ0QWZ0ZXJOb2RlKHJlZikge1xuICAgICAgICB0aGlzLnN0YXJ0Tm9kZSA9IHJlZjtcbiAgICAgICAgdGhpcy5lbmROb2RlID0gcmVmLm5leHRTaWJsaW5nO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBcHBlbmRzIHRoaXMgcGFydCBpbnRvIGEgcGFyZW50IHBhcnQuXG4gICAgICpcbiAgICAgKiBUaGlzIHBhcnQgbXVzdCBiZSBlbXB0eSwgYXMgaXRzIGNvbnRlbnRzIGFyZSBub3QgYXV0b21hdGljYWxseSBtb3ZlZC5cbiAgICAgKi9cbiAgICBhcHBlbmRJbnRvUGFydChwYXJ0KSB7XG4gICAgICAgIHBhcnQuX19pbnNlcnQodGhpcy5zdGFydE5vZGUgPSBjcmVhdGVNYXJrZXIoKSk7XG4gICAgICAgIHBhcnQuX19pbnNlcnQodGhpcy5lbmROb2RlID0gY3JlYXRlTWFya2VyKCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnNlcnRzIHRoaXMgcGFydCBhZnRlciB0aGUgYHJlZmAgcGFydC5cbiAgICAgKlxuICAgICAqIFRoaXMgcGFydCBtdXN0IGJlIGVtcHR5LCBhcyBpdHMgY29udGVudHMgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IG1vdmVkLlxuICAgICAqL1xuICAgIGluc2VydEFmdGVyUGFydChyZWYpIHtcbiAgICAgICAgcmVmLl9faW5zZXJ0KHRoaXMuc3RhcnROb2RlID0gY3JlYXRlTWFya2VyKCkpO1xuICAgICAgICB0aGlzLmVuZE5vZGUgPSByZWYuZW5kTm9kZTtcbiAgICAgICAgcmVmLmVuZE5vZGUgPSB0aGlzLnN0YXJ0Tm9kZTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBjb21taXQoKSB7XG4gICAgICAgIHdoaWxlIChpc0RpcmVjdGl2ZSh0aGlzLl9fcGVuZGluZ1ZhbHVlKSkge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aXZlID0gdGhpcy5fX3BlbmRpbmdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSBub0NoYW5nZTtcbiAgICAgICAgICAgIGRpcmVjdGl2ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX19wZW5kaW5nVmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNQcmltaXRpdmUodmFsdWUpKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fY29tbWl0VGV4dCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy5fX2NvbW1pdFRlbXBsYXRlUmVzdWx0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX19jb21taXROb2RlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0l0ZXJhYmxlKHZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5fX2NvbW1pdEl0ZXJhYmxlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZSA9PT0gbm90aGluZykge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBGYWxsYmFjaywgd2lsbCByZW5kZXIgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgdGhpcy5fX2NvbW1pdFRleHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9faW5zZXJ0KG5vZGUpIHtcbiAgICAgICAgdGhpcy5lbmROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIHRoaXMuZW5kTm9kZSk7XG4gICAgfVxuICAgIF9fY29tbWl0Tm9kZSh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuX19pbnNlcnQodmFsdWUpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIF9fY29tbWl0VGV4dCh2YWx1ZSkge1xuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5zdGFydE5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgIHZhbHVlID0gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG4gICAgICAgIC8vIElmIGB2YWx1ZWAgaXNuJ3QgYWxyZWFkeSBhIHN0cmluZywgd2UgZXhwbGljaXRseSBjb252ZXJ0IGl0IGhlcmUgaW4gY2FzZVxuICAgICAgICAvLyBpdCBjYW4ndCBiZSBpbXBsaWNpdGx5IGNvbnZlcnRlZCAtIGkuZS4gaXQncyBhIHN5bWJvbC5cbiAgICAgICAgY29uc3QgdmFsdWVBc1N0cmluZyA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIGlmIChub2RlID09PSB0aGlzLmVuZE5vZGUucHJldmlvdXNTaWJsaW5nICYmXG4gICAgICAgICAgICBub2RlLm5vZGVUeXBlID09PSAzIC8qIE5vZGUuVEVYVF9OT0RFICovKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBvbmx5IGhhdmUgYSBzaW5nbGUgdGV4dCBub2RlIGJldHdlZW4gdGhlIG1hcmtlcnMsIHdlIGNhbiBqdXN0XG4gICAgICAgICAgICAvLyBzZXQgaXRzIHZhbHVlLCByYXRoZXIgdGhhbiByZXBsYWNpbmcgaXQuXG4gICAgICAgICAgICAvLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBDYW4gd2UganVzdCBjaGVjayBpZiB0aGlzLnZhbHVlIGlzIHByaW1pdGl2ZT9cbiAgICAgICAgICAgIG5vZGUuZGF0YSA9IHZhbHVlQXNTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9fY29tbWl0Tm9kZShkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZUFzU3RyaW5nKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBfX2NvbW1pdFRlbXBsYXRlUmVzdWx0KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5vcHRpb25zLnRlbXBsYXRlRmFjdG9yeSh2YWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVJbnN0YW5jZSAmJlxuICAgICAgICAgICAgdGhpcy52YWx1ZS50ZW1wbGF0ZSA9PT0gdGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUudXBkYXRlKHZhbHVlLnZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgcHJvcGFnYXRlIHRoZSB0ZW1wbGF0ZSBwcm9jZXNzb3IgZnJvbSB0aGUgVGVtcGxhdGVSZXN1bHRcbiAgICAgICAgICAgIC8vIHNvIHRoYXQgd2UgdXNlIGl0cyBzeW50YXggZXh0ZW5zaW9uLCBldGMuIFRoZSB0ZW1wbGF0ZSBmYWN0b3J5IGNvbWVzXG4gICAgICAgICAgICAvLyBmcm9tIHRoZSByZW5kZXIgZnVuY3Rpb24gb3B0aW9ucyBzbyB0aGF0IGl0IGNhbiBjb250cm9sIHRlbXBsYXRlXG4gICAgICAgICAgICAvLyBjYWNoaW5nIGFuZCBwcmVwcm9jZXNzaW5nLlxuICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVGVtcGxhdGVJbnN0YW5jZSh0ZW1wbGF0ZSwgdmFsdWUucHJvY2Vzc29yLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBpbnN0YW5jZS5fY2xvbmUoKTtcbiAgICAgICAgICAgIGluc3RhbmNlLnVwZGF0ZSh2YWx1ZS52YWx1ZXMpO1xuICAgICAgICAgICAgdGhpcy5fX2NvbW1pdE5vZGUoZnJhZ21lbnQpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGluc3RhbmNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9fY29tbWl0SXRlcmFibGUodmFsdWUpIHtcbiAgICAgICAgLy8gRm9yIGFuIEl0ZXJhYmxlLCB3ZSBjcmVhdGUgYSBuZXcgSW5zdGFuY2VQYXJ0IHBlciBpdGVtLCB0aGVuIHNldCBpdHNcbiAgICAgICAgLy8gdmFsdWUgdG8gdGhlIGl0ZW0uIFRoaXMgaXMgYSBsaXR0bGUgYml0IG9mIG92ZXJoZWFkIGZvciBldmVyeSBpdGVtIGluXG4gICAgICAgIC8vIGFuIEl0ZXJhYmxlLCBidXQgaXQgbGV0cyB1cyByZWN1cnNlIGVhc2lseSBhbmQgZWZmaWNpZW50bHkgdXBkYXRlIEFycmF5c1xuICAgICAgICAvLyBvZiBUZW1wbGF0ZVJlc3VsdHMgdGhhdCB3aWxsIGJlIGNvbW1vbmx5IHJldHVybmVkIGZyb20gZXhwcmVzc2lvbnMgbGlrZTpcbiAgICAgICAgLy8gYXJyYXkubWFwKChpKSA9PiBodG1sYCR7aX1gKSwgYnkgcmV1c2luZyBleGlzdGluZyBUZW1wbGF0ZUluc3RhbmNlcy5cbiAgICAgICAgLy8gSWYgX3ZhbHVlIGlzIGFuIGFycmF5LCB0aGVuIHRoZSBwcmV2aW91cyByZW5kZXIgd2FzIG9mIGFuXG4gICAgICAgIC8vIGl0ZXJhYmxlIGFuZCBfdmFsdWUgd2lsbCBjb250YWluIHRoZSBOb2RlUGFydHMgZnJvbSB0aGUgcHJldmlvdXNcbiAgICAgICAgLy8gcmVuZGVyLiBJZiBfdmFsdWUgaXMgbm90IGFuIGFycmF5LCBjbGVhciB0aGlzIHBhcnQgYW5kIG1ha2UgYSBuZXdcbiAgICAgICAgLy8gYXJyYXkgZm9yIE5vZGVQYXJ0cy5cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gW107XG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTGV0cyB1cyBrZWVwIHRyYWNrIG9mIGhvdyBtYW55IGl0ZW1zIHdlIHN0YW1wZWQgc28gd2UgY2FuIGNsZWFyIGxlZnRvdmVyXG4gICAgICAgIC8vIGl0ZW1zIGZyb20gYSBwcmV2aW91cyByZW5kZXJcbiAgICAgICAgY29uc3QgaXRlbVBhcnRzID0gdGhpcy52YWx1ZTtcbiAgICAgICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgICAgIGxldCBpdGVtUGFydDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHZhbHVlKSB7XG4gICAgICAgICAgICAvLyBUcnkgdG8gcmV1c2UgYW4gZXhpc3RpbmcgcGFydFxuICAgICAgICAgICAgaXRlbVBhcnQgPSBpdGVtUGFydHNbcGFydEluZGV4XTtcbiAgICAgICAgICAgIC8vIElmIG5vIGV4aXN0aW5nIHBhcnQsIGNyZWF0ZSBhIG5ldyBvbmVcbiAgICAgICAgICAgIGlmIChpdGVtUGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaXRlbVBhcnQgPSBuZXcgTm9kZVBhcnQodGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpdGVtUGFydHMucHVzaChpdGVtUGFydCk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnRJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtUGFydC5hcHBlbmRJbnRvUGFydCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1QYXJ0Lmluc2VydEFmdGVyUGFydChpdGVtUGFydHNbcGFydEluZGV4IC0gMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl0ZW1QYXJ0LnNldFZhbHVlKGl0ZW0pO1xuICAgICAgICAgICAgaXRlbVBhcnQuY29tbWl0KCk7XG4gICAgICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFydEluZGV4IDwgaXRlbVBhcnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gVHJ1bmNhdGUgdGhlIHBhcnRzIGFycmF5IHNvIF92YWx1ZSByZWZsZWN0cyB0aGUgY3VycmVudCBzdGF0ZVxuICAgICAgICAgICAgaXRlbVBhcnRzLmxlbmd0aCA9IHBhcnRJbmRleDtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoaXRlbVBhcnQgJiYgaXRlbVBhcnQuZW5kTm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xlYXIoc3RhcnROb2RlID0gdGhpcy5zdGFydE5vZGUpIHtcbiAgICAgICAgcmVtb3ZlTm9kZXModGhpcy5zdGFydE5vZGUucGFyZW50Tm9kZSwgc3RhcnROb2RlLm5leHRTaWJsaW5nLCB0aGlzLmVuZE5vZGUpO1xuICAgIH1cbn1cbi8qKlxuICogSW1wbGVtZW50cyBhIGJvb2xlYW4gYXR0cmlidXRlLCByb3VnaGx5IGFzIGRlZmluZWQgaW4gdGhlIEhUTUxcbiAqIHNwZWNpZmljYXRpb24uXG4gKlxuICogSWYgdGhlIHZhbHVlIGlzIHRydXRoeSwgdGhlbiB0aGUgYXR0cmlidXRlIGlzIHByZXNlbnQgd2l0aCBhIHZhbHVlIG9mXG4gKiAnJy4gSWYgdGhlIHZhbHVlIGlzIGZhbHNleSwgdGhlIGF0dHJpYnV0ZSBpcyByZW1vdmVkLlxuICovXG5leHBvcnQgY2xhc3MgQm9vbGVhbkF0dHJpYnV0ZVBhcnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHN0cmluZ3MubGVuZ3RoICE9PSAyIHx8IHN0cmluZ3NbMF0gIT09ICcnIHx8IHN0cmluZ3NbMV0gIT09ICcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Jvb2xlYW4gYXR0cmlidXRlcyBjYW4gb25seSBjb250YWluIGEgc2luZ2xlIGV4cHJlc3Npb24nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnN0cmluZ3MgPSBzdHJpbmdzO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGNvbW1pdCgpIHtcbiAgICAgICAgd2hpbGUgKGlzRGlyZWN0aXZlKHRoaXMuX19wZW5kaW5nVmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmUgPSB0aGlzLl9fcGVuZGluZ1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlO1xuICAgICAgICAgICAgZGlyZWN0aXZlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9fcGVuZGluZ1ZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlID0gISF0aGlzLl9fcGVuZGluZ1ZhbHVlO1xuICAgICAgICBpZiAodGhpcy52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5uYW1lLCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHRoaXMubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlO1xuICAgIH1cbn1cbi8qKlxuICogU2V0cyBhdHRyaWJ1dGUgdmFsdWVzIGZvciBQcm9wZXJ0eVBhcnRzLCBzbyB0aGF0IHRoZSB2YWx1ZSBpcyBvbmx5IHNldCBvbmNlXG4gKiBldmVuIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBwYXJ0cyBmb3IgYSBwcm9wZXJ0eS5cbiAqXG4gKiBJZiBhbiBleHByZXNzaW9uIGNvbnRyb2xzIHRoZSB3aG9sZSBwcm9wZXJ0eSB2YWx1ZSwgdGhlbiB0aGUgdmFsdWUgaXMgc2ltcGx5XG4gKiBhc3NpZ25lZCB0byB0aGUgcHJvcGVydHkgdW5kZXIgY29udHJvbC4gSWYgdGhlcmUgYXJlIHN0cmluZyBsaXRlcmFscyBvclxuICogbXVsdGlwbGUgZXhwcmVzc2lvbnMsIHRoZW4gdGhlIHN0cmluZ3MgYXJlIGV4cHJlc3Npb25zIGFyZSBpbnRlcnBvbGF0ZWQgaW50b1xuICogYSBzdHJpbmcgZmlyc3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eUNvbW1pdHRlciBleHRlbmRzIEF0dHJpYnV0ZUNvbW1pdHRlciB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgbmFtZSwgc3RyaW5ncykge1xuICAgICAgICBzdXBlcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzKTtcbiAgICAgICAgdGhpcy5zaW5nbGUgPVxuICAgICAgICAgICAgKHN0cmluZ3MubGVuZ3RoID09PSAyICYmIHN0cmluZ3NbMF0gPT09ICcnICYmIHN0cmluZ3NbMV0gPT09ICcnKTtcbiAgICB9XG4gICAgX2NyZWF0ZVBhcnQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcGVydHlQYXJ0KHRoaXMpO1xuICAgIH1cbiAgICBfZ2V0VmFsdWUoKSB7XG4gICAgICAgIGlmICh0aGlzLnNpbmdsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFydHNbMF0udmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1cGVyLl9nZXRWYWx1ZSgpO1xuICAgIH1cbiAgICBjb21taXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRbdGhpcy5uYW1lXSA9IHRoaXMuX2dldFZhbHVlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUHJvcGVydHlQYXJ0IGV4dGVuZHMgQXR0cmlidXRlUGFydCB7XG59XG4vLyBEZXRlY3QgZXZlbnQgbGlzdGVuZXIgb3B0aW9ucyBzdXBwb3J0LiBJZiB0aGUgYGNhcHR1cmVgIHByb3BlcnR5IGlzIHJlYWRcbi8vIGZyb20gdGhlIG9wdGlvbnMgb2JqZWN0LCB0aGVuIG9wdGlvbnMgYXJlIHN1cHBvcnRlZC4gSWYgbm90LCB0aGVuIHRoZSB0aHJpZFxuLy8gYXJndW1lbnQgdG8gYWRkL3JlbW92ZUV2ZW50TGlzdGVuZXIgaXMgaW50ZXJwcmV0ZWQgYXMgdGhlIGJvb2xlYW4gY2FwdHVyZVxuLy8gdmFsdWUgc28gd2Ugc2hvdWxkIG9ubHkgcGFzcyB0aGUgYGNhcHR1cmVgIHByb3BlcnR5LlxubGV0IGV2ZW50T3B0aW9uc1N1cHBvcnRlZCA9IGZhbHNlO1xudHJ5IHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBnZXQgY2FwdHVyZSgpIHtcbiAgICAgICAgICAgIGV2ZW50T3B0aW9uc1N1cHBvcnRlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpO1xufVxuY2F0Y2ggKF9lKSB7XG59XG5leHBvcnQgY2xhc3MgRXZlbnRQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBldmVudE5hbWUsIGV2ZW50Q29udGV4dCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmV2ZW50TmFtZSA9IGV2ZW50TmFtZTtcbiAgICAgICAgdGhpcy5ldmVudENvbnRleHQgPSBldmVudENvbnRleHQ7XG4gICAgICAgIHRoaXMuX19ib3VuZEhhbmRsZUV2ZW50ID0gKGUpID0+IHRoaXMuaGFuZGxlRXZlbnQoZSk7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgY29tbWl0KCkge1xuICAgICAgICB3aGlsZSAoaXNEaXJlY3RpdmUodGhpcy5fX3BlbmRpbmdWYWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHRoaXMuX19wZW5kaW5nVmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gICAgICAgICAgICBkaXJlY3RpdmUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX19wZW5kaW5nVmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3TGlzdGVuZXIgPSB0aGlzLl9fcGVuZGluZ1ZhbHVlO1xuICAgICAgICBjb25zdCBvbGRMaXN0ZW5lciA9IHRoaXMudmFsdWU7XG4gICAgICAgIGNvbnN0IHNob3VsZFJlbW92ZUxpc3RlbmVyID0gbmV3TGlzdGVuZXIgPT0gbnVsbCB8fFxuICAgICAgICAgICAgb2xkTGlzdGVuZXIgIT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgIChuZXdMaXN0ZW5lci5jYXB0dXJlICE9PSBvbGRMaXN0ZW5lci5jYXB0dXJlIHx8XG4gICAgICAgICAgICAgICAgICAgIG5ld0xpc3RlbmVyLm9uY2UgIT09IG9sZExpc3RlbmVyLm9uY2UgfHxcbiAgICAgICAgICAgICAgICAgICAgbmV3TGlzdGVuZXIucGFzc2l2ZSAhPT0gb2xkTGlzdGVuZXIucGFzc2l2ZSk7XG4gICAgICAgIGNvbnN0IHNob3VsZEFkZExpc3RlbmVyID0gbmV3TGlzdGVuZXIgIT0gbnVsbCAmJiAob2xkTGlzdGVuZXIgPT0gbnVsbCB8fCBzaG91bGRSZW1vdmVMaXN0ZW5lcik7XG4gICAgICAgIGlmIChzaG91bGRSZW1vdmVMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE5hbWUsIHRoaXMuX19ib3VuZEhhbmRsZUV2ZW50LCB0aGlzLl9fb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3VsZEFkZExpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLl9fb3B0aW9ucyA9IGdldE9wdGlvbnMobmV3TGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE5hbWUsIHRoaXMuX19ib3VuZEhhbmRsZUV2ZW50LCB0aGlzLl9fb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YWx1ZSA9IG5ld0xpc3RlbmVyO1xuICAgICAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gICAgfVxuICAgIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy52YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy52YWx1ZS5jYWxsKHRoaXMuZXZlbnRDb250ZXh0IHx8IHRoaXMuZWxlbWVudCwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52YWx1ZS5oYW5kbGVFdmVudChldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyBXZSBjb3B5IG9wdGlvbnMgYmVjYXVzZSBvZiB0aGUgaW5jb25zaXN0ZW50IGJlaGF2aW9yIG9mIGJyb3dzZXJzIHdoZW4gcmVhZGluZ1xuLy8gdGhlIHRoaXJkIGFyZ3VtZW50IG9mIGFkZC9yZW1vdmVFdmVudExpc3RlbmVyLiBJRTExIGRvZXNuJ3Qgc3VwcG9ydCBvcHRpb25zXG4vLyBhdCBhbGwuIENocm9tZSA0MSBvbmx5IHJlYWRzIGBjYXB0dXJlYCBpZiB0aGUgYXJndW1lbnQgaXMgYW4gb2JqZWN0LlxuY29uc3QgZ2V0T3B0aW9ucyA9IChvKSA9PiBvICYmXG4gICAgKGV2ZW50T3B0aW9uc1N1cHBvcnRlZCA/XG4gICAgICAgIHsgY2FwdHVyZTogby5jYXB0dXJlLCBwYXNzaXZlOiBvLnBhc3NpdmUsIG9uY2U6IG8ub25jZSB9IDpcbiAgICAgICAgby5jYXB0dXJlKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnRzLmpzLm1hcCIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5pbXBvcnQgeyBBdHRyaWJ1dGVDb21taXR0ZXIsIEJvb2xlYW5BdHRyaWJ1dGVQYXJ0LCBFdmVudFBhcnQsIE5vZGVQYXJ0LCBQcm9wZXJ0eUNvbW1pdHRlciB9IGZyb20gJy4vcGFydHMuanMnO1xuLyoqXG4gKiBDcmVhdGVzIFBhcnRzIHdoZW4gYSB0ZW1wbGF0ZSBpcyBpbnN0YW50aWF0ZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3Ige1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBwYXJ0cyBmb3IgYW4gYXR0cmlidXRlLXBvc2l0aW9uIGJpbmRpbmcsIGdpdmVuIHRoZSBldmVudCwgYXR0cmlidXRlXG4gICAgICogbmFtZSwgYW5kIHN0cmluZyBsaXRlcmFscy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbGVtZW50IFRoZSBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIGJpbmRpbmdcbiAgICAgKiBAcGFyYW0gbmFtZSAgVGhlIGF0dHJpYnV0ZSBuYW1lXG4gICAgICogQHBhcmFtIHN0cmluZ3MgVGhlIHN0cmluZyBsaXRlcmFscy4gVGhlcmUgYXJlIGFsd2F5cyBhdCBsZWFzdCB0d28gc3RyaW5ncyxcbiAgICAgKiAgIGV2ZW50IGZvciBmdWxseS1jb250cm9sbGVkIGJpbmRpbmdzIHdpdGggYSBzaW5nbGUgZXhwcmVzc2lvbi5cbiAgICAgKi9cbiAgICBoYW5kbGVBdHRyaWJ1dGVFeHByZXNzaW9ucyhlbGVtZW50LCBuYW1lLCBzdHJpbmdzLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHByZWZpeCA9IG5hbWVbMF07XG4gICAgICAgIGlmIChwcmVmaXggPT09ICcuJykge1xuICAgICAgICAgICAgY29uc3QgY29tbWl0dGVyID0gbmV3IFByb3BlcnR5Q29tbWl0dGVyKGVsZW1lbnQsIG5hbWUuc2xpY2UoMSksIHN0cmluZ3MpO1xuICAgICAgICAgICAgcmV0dXJuIGNvbW1pdHRlci5wYXJ0cztcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJlZml4ID09PSAnQCcpIHtcbiAgICAgICAgICAgIHJldHVybiBbbmV3IEV2ZW50UGFydChlbGVtZW50LCBuYW1lLnNsaWNlKDEpLCBvcHRpb25zLmV2ZW50Q29udGV4dCldO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmVmaXggPT09ICc/Jykge1xuICAgICAgICAgICAgcmV0dXJuIFtuZXcgQm9vbGVhbkF0dHJpYnV0ZVBhcnQoZWxlbWVudCwgbmFtZS5zbGljZSgxKSwgc3RyaW5ncyldO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbW1pdHRlciA9IG5ldyBBdHRyaWJ1dGVDb21taXR0ZXIoZWxlbWVudCwgbmFtZSwgc3RyaW5ncyk7XG4gICAgICAgIHJldHVybiBjb21taXR0ZXIucGFydHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBwYXJ0cyBmb3IgYSB0ZXh0LXBvc2l0aW9uIGJpbmRpbmcuXG4gICAgICogQHBhcmFtIHRlbXBsYXRlRmFjdG9yeVxuICAgICAqL1xuICAgIGhhbmRsZVRleHRFeHByZXNzaW9uKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBOb2RlUGFydChvcHRpb25zKTtcbiAgICB9XG59XG5leHBvcnQgY29uc3QgZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yID0gbmV3IERlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvcigpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVmYXVsdC10ZW1wbGF0ZS1wcm9jZXNzb3IuanMubWFwIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmltcG9ydCB7IG1hcmtlciwgVGVtcGxhdGUgfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcbi8qKlxuICogVGhlIGRlZmF1bHQgVGVtcGxhdGVGYWN0b3J5IHdoaWNoIGNhY2hlcyBUZW1wbGF0ZXMga2V5ZWQgb25cbiAqIHJlc3VsdC50eXBlIGFuZCByZXN1bHQuc3RyaW5ncy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlRmFjdG9yeShyZXN1bHQpIHtcbiAgICBsZXQgdGVtcGxhdGVDYWNoZSA9IHRlbXBsYXRlQ2FjaGVzLmdldChyZXN1bHQudHlwZSk7XG4gICAgaWYgKHRlbXBsYXRlQ2FjaGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0ZW1wbGF0ZUNhY2hlID0ge1xuICAgICAgICAgICAgc3RyaW5nc0FycmF5OiBuZXcgV2Vha01hcCgpLFxuICAgICAgICAgICAga2V5U3RyaW5nOiBuZXcgTWFwKClcbiAgICAgICAgfTtcbiAgICAgICAgdGVtcGxhdGVDYWNoZXMuc2V0KHJlc3VsdC50eXBlLCB0ZW1wbGF0ZUNhY2hlKTtcbiAgICB9XG4gICAgbGV0IHRlbXBsYXRlID0gdGVtcGxhdGVDYWNoZS5zdHJpbmdzQXJyYXkuZ2V0KHJlc3VsdC5zdHJpbmdzKTtcbiAgICBpZiAodGVtcGxhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuICAgIC8vIElmIHRoZSBUZW1wbGF0ZVN0cmluZ3NBcnJheSBpcyBuZXcsIGdlbmVyYXRlIGEga2V5IGZyb20gdGhlIHN0cmluZ3NcbiAgICAvLyBUaGlzIGtleSBpcyBzaGFyZWQgYmV0d2VlbiBhbGwgdGVtcGxhdGVzIHdpdGggaWRlbnRpY2FsIGNvbnRlbnRcbiAgICBjb25zdCBrZXkgPSByZXN1bHQuc3RyaW5ncy5qb2luKG1hcmtlcik7XG4gICAgLy8gQ2hlY2sgaWYgd2UgYWxyZWFkeSBoYXZlIGEgVGVtcGxhdGUgZm9yIHRoaXMga2V5XG4gICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZUNhY2hlLmtleVN0cmluZy5nZXQoa2V5KTtcbiAgICBpZiAodGVtcGxhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIG5vdCBzZWVuIHRoaXMga2V5IGJlZm9yZSwgY3JlYXRlIGEgbmV3IFRlbXBsYXRlXG4gICAgICAgIHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKHJlc3VsdCwgcmVzdWx0LmdldFRlbXBsYXRlRWxlbWVudCgpKTtcbiAgICAgICAgLy8gQ2FjaGUgdGhlIFRlbXBsYXRlIGZvciB0aGlzIGtleVxuICAgICAgICB0ZW1wbGF0ZUNhY2hlLmtleVN0cmluZy5zZXQoa2V5LCB0ZW1wbGF0ZSk7XG4gICAgfVxuICAgIC8vIENhY2hlIGFsbCBmdXR1cmUgcXVlcmllcyBmb3IgdGhpcyBUZW1wbGF0ZVN0cmluZ3NBcnJheVxuICAgIHRlbXBsYXRlQ2FjaGUuc3RyaW5nc0FycmF5LnNldChyZXN1bHQuc3RyaW5ncywgdGVtcGxhdGUpO1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbn1cbmV4cG9ydCBjb25zdCB0ZW1wbGF0ZUNhY2hlcyA9IG5ldyBNYXAoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRlbXBsYXRlLWZhY3RvcnkuanMubWFwIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5pbXBvcnQgeyByZW1vdmVOb2RlcyB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IE5vZGVQYXJ0IH0gZnJvbSAnLi9wYXJ0cy5qcyc7XG5pbXBvcnQgeyB0ZW1wbGF0ZUZhY3RvcnkgfSBmcm9tICcuL3RlbXBsYXRlLWZhY3RvcnkuanMnO1xuZXhwb3J0IGNvbnN0IHBhcnRzID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogUmVuZGVycyBhIHRlbXBsYXRlIHJlc3VsdCBvciBvdGhlciB2YWx1ZSB0byBhIGNvbnRhaW5lci5cbiAqXG4gKiBUbyB1cGRhdGUgYSBjb250YWluZXIgd2l0aCBuZXcgdmFsdWVzLCByZWV2YWx1YXRlIHRoZSB0ZW1wbGF0ZSBsaXRlcmFsIGFuZFxuICogY2FsbCBgcmVuZGVyYCB3aXRoIHRoZSBuZXcgcmVzdWx0LlxuICpcbiAqIEBwYXJhbSByZXN1bHQgQW55IHZhbHVlIHJlbmRlcmFibGUgYnkgTm9kZVBhcnQgLSB0eXBpY2FsbHkgYSBUZW1wbGF0ZVJlc3VsdFxuICogICAgIGNyZWF0ZWQgYnkgZXZhbHVhdGluZyBhIHRlbXBsYXRlIHRhZyBsaWtlIGBodG1sYCBvciBgc3ZnYC5cbiAqIEBwYXJhbSBjb250YWluZXIgQSBET00gcGFyZW50IHRvIHJlbmRlciB0by4gVGhlIGVudGlyZSBjb250ZW50cyBhcmUgZWl0aGVyXG4gKiAgICAgcmVwbGFjZWQsIG9yIGVmZmljaWVudGx5IHVwZGF0ZWQgaWYgdGhlIHNhbWUgcmVzdWx0IHR5cGUgd2FzIHByZXZpb3VzXG4gKiAgICAgcmVuZGVyZWQgdGhlcmUuXG4gKiBAcGFyYW0gb3B0aW9ucyBSZW5kZXJPcHRpb25zIGZvciB0aGUgZW50aXJlIHJlbmRlciB0cmVlIHJlbmRlcmVkIHRvIHRoaXNcbiAqICAgICBjb250YWluZXIuIFJlbmRlciBvcHRpb25zIG11c3QgKm5vdCogY2hhbmdlIGJldHdlZW4gcmVuZGVycyB0byB0aGUgc2FtZVxuICogICAgIGNvbnRhaW5lciwgYXMgdGhvc2UgY2hhbmdlcyB3aWxsIG5vdCBlZmZlY3QgcHJldmlvdXNseSByZW5kZXJlZCBET00uXG4gKi9cbmV4cG9ydCBjb25zdCByZW5kZXIgPSAocmVzdWx0LCBjb250YWluZXIsIG9wdGlvbnMpID0+IHtcbiAgICBsZXQgcGFydCA9IHBhcnRzLmdldChjb250YWluZXIpO1xuICAgIGlmIChwYXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVtb3ZlTm9kZXMoY29udGFpbmVyLCBjb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgIHBhcnRzLnNldChjb250YWluZXIsIHBhcnQgPSBuZXcgTm9kZVBhcnQoT2JqZWN0LmFzc2lnbih7IHRlbXBsYXRlRmFjdG9yeSB9LCBvcHRpb25zKSkpO1xuICAgICAgICBwYXJ0LmFwcGVuZEludG8oY29udGFpbmVyKTtcbiAgICB9XG4gICAgcGFydC5zZXRWYWx1ZShyZXN1bHQpO1xuICAgIHBhcnQuY29tbWl0KCk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVuZGVyLmpzLm1hcCIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG4vKipcbiAqXG4gKiBNYWluIGxpdC1odG1sIG1vZHVsZS5cbiAqXG4gKiBNYWluIGV4cG9ydHM6XG4gKlxuICogLSAgW1todG1sXV1cbiAqIC0gIFtbc3ZnXV1cbiAqIC0gIFtbcmVuZGVyXV1cbiAqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKiBAcHJlZmVycmVkXG4gKi9cbi8qKlxuICogRG8gbm90IHJlbW92ZSB0aGlzIGNvbW1lbnQ7IGl0IGtlZXBzIHR5cGVkb2MgZnJvbSBtaXNwbGFjaW5nIHRoZSBtb2R1bGVcbiAqIGRvY3MuXG4gKi9cbmltcG9ydCB7IGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciB9IGZyb20gJy4vbGliL2RlZmF1bHQtdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcbmltcG9ydCB7IFNWR1RlbXBsYXRlUmVzdWx0LCBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gJy4vbGliL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5leHBvcnQgeyBEZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IsIGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciB9IGZyb20gJy4vbGliL2RlZmF1bHQtdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcbmV4cG9ydCB7IGRpcmVjdGl2ZSwgaXNEaXJlY3RpdmUgfSBmcm9tICcuL2xpYi9kaXJlY3RpdmUuanMnO1xuLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogcmVtb3ZlIGxpbmUgd2hlbiB3ZSBnZXQgTm9kZVBhcnQgbW92aW5nIG1ldGhvZHNcbmV4cG9ydCB7IHJlbW92ZU5vZGVzLCByZXBhcmVudE5vZGVzIH0gZnJvbSAnLi9saWIvZG9tLmpzJztcbmV4cG9ydCB7IG5vQ2hhbmdlLCBub3RoaW5nIH0gZnJvbSAnLi9saWIvcGFydC5qcyc7XG5leHBvcnQgeyBBdHRyaWJ1dGVDb21taXR0ZXIsIEF0dHJpYnV0ZVBhcnQsIEJvb2xlYW5BdHRyaWJ1dGVQYXJ0LCBFdmVudFBhcnQsIGlzSXRlcmFibGUsIGlzUHJpbWl0aXZlLCBOb2RlUGFydCwgUHJvcGVydHlDb21taXR0ZXIsIFByb3BlcnR5UGFydCB9IGZyb20gJy4vbGliL3BhcnRzLmpzJztcbmV4cG9ydCB7IHBhcnRzLCByZW5kZXIgfSBmcm9tICcuL2xpYi9yZW5kZXIuanMnO1xuZXhwb3J0IHsgdGVtcGxhdGVDYWNoZXMsIHRlbXBsYXRlRmFjdG9yeSB9IGZyb20gJy4vbGliL3RlbXBsYXRlLWZhY3RvcnkuanMnO1xuZXhwb3J0IHsgVGVtcGxhdGVJbnN0YW5jZSB9IGZyb20gJy4vbGliL3RlbXBsYXRlLWluc3RhbmNlLmpzJztcbmV4cG9ydCB7IFNWR1RlbXBsYXRlUmVzdWx0LCBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gJy4vbGliL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5leHBvcnQgeyBjcmVhdGVNYXJrZXIsIGlzVGVtcGxhdGVQYXJ0QWN0aXZlLCBUZW1wbGF0ZSB9IGZyb20gJy4vbGliL3RlbXBsYXRlLmpzJztcbi8vIElNUE9SVEFOVDogZG8gbm90IGNoYW5nZSB0aGUgcHJvcGVydHkgbmFtZSBvciB0aGUgYXNzaWdubWVudCBleHByZXNzaW9uLlxuLy8gVGhpcyBsaW5lIHdpbGwgYmUgdXNlZCBpbiByZWdleGVzIHRvIHNlYXJjaCBmb3IgbGl0LWh0bWwgdXNhZ2UuXG4vLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBpbmplY3QgdmVyc2lvbiBudW1iZXIgYXQgYnVpbGQgdGltZVxuKHdpbmRvd1snbGl0SHRtbFZlcnNpb25zJ10gfHwgKHdpbmRvd1snbGl0SHRtbFZlcnNpb25zJ10gPSBbXSkpLnB1c2goJzEuMS4yJyk7XG4vKipcbiAqIEludGVycHJldHMgYSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIGFuIEhUTUwgdGVtcGxhdGUgdGhhdCBjYW4gZWZmaWNpZW50bHlcbiAqIHJlbmRlciB0byBhbmQgdXBkYXRlIGEgY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3QgaHRtbCA9IChzdHJpbmdzLCAuLi52YWx1ZXMpID0+IG5ldyBUZW1wbGF0ZVJlc3VsdChzdHJpbmdzLCB2YWx1ZXMsICdodG1sJywgZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yKTtcbi8qKlxuICogSW50ZXJwcmV0cyBhIHRlbXBsYXRlIGxpdGVyYWwgYXMgYW4gU1ZHIHRlbXBsYXRlIHRoYXQgY2FuIGVmZmljaWVudGx5XG4gKiByZW5kZXIgdG8gYW5kIHVwZGF0ZSBhIGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGNvbnN0IHN2ZyA9IChzdHJpbmdzLCAuLi52YWx1ZXMpID0+IG5ldyBTVkdUZW1wbGF0ZVJlc3VsdChzdHJpbmdzLCB2YWx1ZXMsICdzdmcnLCBkZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGl0LWh0bWwuanMubWFwIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8qKlxuICogQG1vZHVsZSBzaGFkeS1yZW5kZXJcbiAqL1xuaW1wb3J0IHsgaXNUZW1wbGF0ZVBhcnRBY3RpdmUgfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcbmNvbnN0IHdhbGtlck5vZGVGaWx0ZXIgPSAxMzMgLyogTm9kZUZpbHRlci5TSE9XX3tFTEVNRU5UfENPTU1FTlR8VEVYVH0gKi87XG4vKipcbiAqIFJlbW92ZXMgdGhlIGxpc3Qgb2Ygbm9kZXMgZnJvbSBhIFRlbXBsYXRlIHNhZmVseS4gSW4gYWRkaXRpb24gdG8gcmVtb3ZpbmdcbiAqIG5vZGVzIGZyb20gdGhlIFRlbXBsYXRlLCB0aGUgVGVtcGxhdGUgcGFydCBpbmRpY2VzIGFyZSB1cGRhdGVkIHRvIG1hdGNoXG4gKiB0aGUgbXV0YXRlZCBUZW1wbGF0ZSBET00uXG4gKlxuICogQXMgdGhlIHRlbXBsYXRlIGlzIHdhbGtlZCB0aGUgcmVtb3ZhbCBzdGF0ZSBpcyB0cmFja2VkIGFuZFxuICogcGFydCBpbmRpY2VzIGFyZSBhZGp1c3RlZCBhcyBuZWVkZWQuXG4gKlxuICogZGl2XG4gKiAgIGRpdiMxIChyZW1vdmUpIDwtLSBzdGFydCByZW1vdmluZyAocmVtb3Zpbmcgbm9kZSBpcyBkaXYjMSlcbiAqICAgICBkaXZcbiAqICAgICAgIGRpdiMyIChyZW1vdmUpICA8LS0gY29udGludWUgcmVtb3ZpbmcgKHJlbW92aW5nIG5vZGUgaXMgc3RpbGwgZGl2IzEpXG4gKiAgICAgICAgIGRpdlxuICogZGl2IDwtLSBzdG9wIHJlbW92aW5nIHNpbmNlIHByZXZpb3VzIHNpYmxpbmcgaXMgdGhlIHJlbW92aW5nIG5vZGUgKGRpdiMxLFxuICogcmVtb3ZlZCA0IG5vZGVzKVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTm9kZXNGcm9tVGVtcGxhdGUodGVtcGxhdGUsIG5vZGVzVG9SZW1vdmUpIHtcbiAgICBjb25zdCB7IGVsZW1lbnQ6IHsgY29udGVudCB9LCBwYXJ0cyB9ID0gdGVtcGxhdGU7XG4gICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihjb250ZW50LCB3YWxrZXJOb2RlRmlsdGVyLCBudWxsLCBmYWxzZSk7XG4gICAgbGV0IHBhcnRJbmRleCA9IG5leHRBY3RpdmVJbmRleEluVGVtcGxhdGVQYXJ0cyhwYXJ0cyk7XG4gICAgbGV0IHBhcnQgPSBwYXJ0c1twYXJ0SW5kZXhdO1xuICAgIGxldCBub2RlSW5kZXggPSAtMTtcbiAgICBsZXQgcmVtb3ZlQ291bnQgPSAwO1xuICAgIGNvbnN0IG5vZGVzVG9SZW1vdmVJblRlbXBsYXRlID0gW107XG4gICAgbGV0IGN1cnJlbnRSZW1vdmluZ05vZGUgPSBudWxsO1xuICAgIHdoaWxlICh3YWxrZXIubmV4dE5vZGUoKSkge1xuICAgICAgICBub2RlSW5kZXgrKztcbiAgICAgICAgY29uc3Qgbm9kZSA9IHdhbGtlci5jdXJyZW50Tm9kZTtcbiAgICAgICAgLy8gRW5kIHJlbW92YWwgaWYgc3RlcHBlZCBwYXN0IHRoZSByZW1vdmluZyBub2RlXG4gICAgICAgIGlmIChub2RlLnByZXZpb3VzU2libGluZyA9PT0gY3VycmVudFJlbW92aW5nTm9kZSkge1xuICAgICAgICAgICAgY3VycmVudFJlbW92aW5nTm9kZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQSBub2RlIHRvIHJlbW92ZSB3YXMgZm91bmQgaW4gdGhlIHRlbXBsYXRlXG4gICAgICAgIGlmIChub2Rlc1RvUmVtb3ZlLmhhcyhub2RlKSkge1xuICAgICAgICAgICAgbm9kZXNUb1JlbW92ZUluVGVtcGxhdGUucHVzaChub2RlKTtcbiAgICAgICAgICAgIC8vIFRyYWNrIG5vZGUgd2UncmUgcmVtb3ZpbmdcbiAgICAgICAgICAgIGlmIChjdXJyZW50UmVtb3ZpbmdOb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFJlbW92aW5nTm9kZSA9IG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2hlbiByZW1vdmluZywgaW5jcmVtZW50IGNvdW50IGJ5IHdoaWNoIHRvIGFkanVzdCBzdWJzZXF1ZW50IHBhcnQgaW5kaWNlc1xuICAgICAgICBpZiAoY3VycmVudFJlbW92aW5nTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmVtb3ZlQ291bnQrKztcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAocGFydCAhPT0gdW5kZWZpbmVkICYmIHBhcnQuaW5kZXggPT09IG5vZGVJbmRleCkge1xuICAgICAgICAgICAgLy8gSWYgcGFydCBpcyBpbiBhIHJlbW92ZWQgbm9kZSBkZWFjdGl2YXRlIGl0IGJ5IHNldHRpbmcgaW5kZXggdG8gLTEgb3JcbiAgICAgICAgICAgIC8vIGFkanVzdCB0aGUgaW5kZXggYXMgbmVlZGVkLlxuICAgICAgICAgICAgcGFydC5pbmRleCA9IGN1cnJlbnRSZW1vdmluZ05vZGUgIT09IG51bGwgPyAtMSA6IHBhcnQuaW5kZXggLSByZW1vdmVDb3VudDtcbiAgICAgICAgICAgIC8vIGdvIHRvIHRoZSBuZXh0IGFjdGl2ZSBwYXJ0LlxuICAgICAgICAgICAgcGFydEluZGV4ID0gbmV4dEFjdGl2ZUluZGV4SW5UZW1wbGF0ZVBhcnRzKHBhcnRzLCBwYXJ0SW5kZXgpO1xuICAgICAgICAgICAgcGFydCA9IHBhcnRzW3BhcnRJbmRleF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm9kZXNUb1JlbW92ZUluVGVtcGxhdGUuZm9yRWFjaCgobikgPT4gbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG4pKTtcbn1cbmNvbnN0IGNvdW50Tm9kZXMgPSAobm9kZSkgPT4ge1xuICAgIGxldCBjb3VudCA9IChub2RlLm5vZGVUeXBlID09PSAxMSAvKiBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUgKi8pID8gMCA6IDE7XG4gICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihub2RlLCB3YWxrZXJOb2RlRmlsdGVyLCBudWxsLCBmYWxzZSk7XG4gICAgd2hpbGUgKHdhbGtlci5uZXh0Tm9kZSgpKSB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgfVxuICAgIHJldHVybiBjb3VudDtcbn07XG5jb25zdCBuZXh0QWN0aXZlSW5kZXhJblRlbXBsYXRlUGFydHMgPSAocGFydHMsIHN0YXJ0SW5kZXggPSAtMSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4ICsgMTsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpXTtcbiAgICAgICAgaWYgKGlzVGVtcGxhdGVQYXJ0QWN0aXZlKHBhcnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG59O1xuLyoqXG4gKiBJbnNlcnRzIHRoZSBnaXZlbiBub2RlIGludG8gdGhlIFRlbXBsYXRlLCBvcHRpb25hbGx5IGJlZm9yZSB0aGUgZ2l2ZW5cbiAqIHJlZk5vZGUuIEluIGFkZGl0aW9uIHRvIGluc2VydGluZyB0aGUgbm9kZSBpbnRvIHRoZSBUZW1wbGF0ZSwgdGhlIFRlbXBsYXRlXG4gKiBwYXJ0IGluZGljZXMgYXJlIHVwZGF0ZWQgdG8gbWF0Y2ggdGhlIG11dGF0ZWQgVGVtcGxhdGUgRE9NLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0Tm9kZUludG9UZW1wbGF0ZSh0ZW1wbGF0ZSwgbm9kZSwgcmVmTm9kZSA9IG51bGwpIHtcbiAgICBjb25zdCB7IGVsZW1lbnQ6IHsgY29udGVudCB9LCBwYXJ0cyB9ID0gdGVtcGxhdGU7XG4gICAgLy8gSWYgdGhlcmUncyBubyByZWZOb2RlLCB0aGVuIHB1dCBub2RlIGF0IGVuZCBvZiB0ZW1wbGF0ZS5cbiAgICAvLyBObyBwYXJ0IGluZGljZXMgbmVlZCB0byBiZSBzaGlmdGVkIGluIHRoaXMgY2FzZS5cbiAgICBpZiAocmVmTm9kZSA9PT0gbnVsbCB8fCByZWZOb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGNvbnRlbnQsIHdhbGtlck5vZGVGaWx0ZXIsIG51bGwsIGZhbHNlKTtcbiAgICBsZXQgcGFydEluZGV4ID0gbmV4dEFjdGl2ZUluZGV4SW5UZW1wbGF0ZVBhcnRzKHBhcnRzKTtcbiAgICBsZXQgaW5zZXJ0Q291bnQgPSAwO1xuICAgIGxldCB3YWxrZXJJbmRleCA9IC0xO1xuICAgIHdoaWxlICh3YWxrZXIubmV4dE5vZGUoKSkge1xuICAgICAgICB3YWxrZXJJbmRleCsrO1xuICAgICAgICBjb25zdCB3YWxrZXJOb2RlID0gd2Fsa2VyLmN1cnJlbnROb2RlO1xuICAgICAgICBpZiAod2Fsa2VyTm9kZSA9PT0gcmVmTm9kZSkge1xuICAgICAgICAgICAgaW5zZXJ0Q291bnQgPSBjb3VudE5vZGVzKG5vZGUpO1xuICAgICAgICAgICAgcmVmTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCByZWZOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAocGFydEluZGV4ICE9PSAtMSAmJiBwYXJ0c1twYXJ0SW5kZXhdLmluZGV4ID09PSB3YWxrZXJJbmRleCkge1xuICAgICAgICAgICAgLy8gSWYgd2UndmUgaW5zZXJ0ZWQgdGhlIG5vZGUsIHNpbXBseSBhZGp1c3QgYWxsIHN1YnNlcXVlbnQgcGFydHNcbiAgICAgICAgICAgIGlmIChpbnNlcnRDb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAocGFydEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0c1twYXJ0SW5kZXhdLmluZGV4ICs9IGluc2VydENvdW50O1xuICAgICAgICAgICAgICAgICAgICBwYXJ0SW5kZXggPSBuZXh0QWN0aXZlSW5kZXhJblRlbXBsYXRlUGFydHMocGFydHMsIHBhcnRJbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcnRJbmRleCA9IG5leHRBY3RpdmVJbmRleEluVGVtcGxhdGVQYXJ0cyhwYXJ0cywgcGFydEluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vZGlmeS10ZW1wbGF0ZS5qcy5tYXAiLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuLyoqXG4gKiBNb2R1bGUgdG8gYWRkIHNoYWR5IERPTS9zaGFkeSBDU1MgcG9seWZpbGwgc3VwcG9ydCB0byBsaXQtaHRtbCB0ZW1wbGF0ZVxuICogcmVuZGVyaW5nLiBTZWUgdGhlIFtbcmVuZGVyXV0gbWV0aG9kIGZvciBkZXRhaWxzLlxuICpcbiAqIEBtb2R1bGUgc2hhZHktcmVuZGVyXG4gKiBAcHJlZmVycmVkXG4gKi9cbi8qKlxuICogRG8gbm90IHJlbW92ZSB0aGlzIGNvbW1lbnQ7IGl0IGtlZXBzIHR5cGVkb2MgZnJvbSBtaXNwbGFjaW5nIHRoZSBtb2R1bGVcbiAqIGRvY3MuXG4gKi9cbmltcG9ydCB7IHJlbW92ZU5vZGVzIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgaW5zZXJ0Tm9kZUludG9UZW1wbGF0ZSwgcmVtb3ZlTm9kZXNGcm9tVGVtcGxhdGUgfSBmcm9tICcuL21vZGlmeS10ZW1wbGF0ZS5qcyc7XG5pbXBvcnQgeyBwYXJ0cywgcmVuZGVyIGFzIGxpdFJlbmRlciB9IGZyb20gJy4vcmVuZGVyLmpzJztcbmltcG9ydCB7IHRlbXBsYXRlQ2FjaGVzIH0gZnJvbSAnLi90ZW1wbGF0ZS1mYWN0b3J5LmpzJztcbmltcG9ydCB7IFRlbXBsYXRlSW5zdGFuY2UgfSBmcm9tICcuL3RlbXBsYXRlLWluc3RhbmNlLmpzJztcbmltcG9ydCB7IG1hcmtlciwgVGVtcGxhdGUgfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcbmV4cG9ydCB7IGh0bWwsIHN2ZywgVGVtcGxhdGVSZXN1bHQgfSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG4vLyBHZXQgYSBrZXkgdG8gbG9va3VwIGluIGB0ZW1wbGF0ZUNhY2hlc2AuXG5jb25zdCBnZXRUZW1wbGF0ZUNhY2hlS2V5ID0gKHR5cGUsIHNjb3BlTmFtZSkgPT4gYCR7dHlwZX0tLSR7c2NvcGVOYW1lfWA7XG5sZXQgY29tcGF0aWJsZVNoYWR5Q1NTVmVyc2lvbiA9IHRydWU7XG5pZiAodHlwZW9mIHdpbmRvdy5TaGFkeUNTUyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb21wYXRpYmxlU2hhZHlDU1NWZXJzaW9uID0gZmFsc2U7XG59XG5lbHNlIGlmICh0eXBlb2Ygd2luZG93LlNoYWR5Q1NTLnByZXBhcmVUZW1wbGF0ZURvbSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zb2xlLndhcm4oYEluY29tcGF0aWJsZSBTaGFkeUNTUyB2ZXJzaW9uIGRldGVjdGVkLiBgICtcbiAgICAgICAgYFBsZWFzZSB1cGRhdGUgdG8gYXQgbGVhc3QgQHdlYmNvbXBvbmVudHMvd2ViY29tcG9uZW50c2pzQDIuMC4yIGFuZCBgICtcbiAgICAgICAgYEB3ZWJjb21wb25lbnRzL3NoYWR5Y3NzQDEuMy4xLmApO1xuICAgIGNvbXBhdGlibGVTaGFkeUNTU1ZlcnNpb24gPSBmYWxzZTtcbn1cbi8qKlxuICogVGVtcGxhdGUgZmFjdG9yeSB3aGljaCBzY29wZXMgdGVtcGxhdGUgRE9NIHVzaW5nIFNoYWR5Q1NTLlxuICogQHBhcmFtIHNjb3BlTmFtZSB7c3RyaW5nfVxuICovXG5jb25zdCBzaGFkeVRlbXBsYXRlRmFjdG9yeSA9IChzY29wZU5hbWUpID0+IChyZXN1bHQpID0+IHtcbiAgICBjb25zdCBjYWNoZUtleSA9IGdldFRlbXBsYXRlQ2FjaGVLZXkocmVzdWx0LnR5cGUsIHNjb3BlTmFtZSk7XG4gICAgbGV0IHRlbXBsYXRlQ2FjaGUgPSB0ZW1wbGF0ZUNhY2hlcy5nZXQoY2FjaGVLZXkpO1xuICAgIGlmICh0ZW1wbGF0ZUNhY2hlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGVtcGxhdGVDYWNoZSA9IHtcbiAgICAgICAgICAgIHN0cmluZ3NBcnJheTogbmV3IFdlYWtNYXAoKSxcbiAgICAgICAgICAgIGtleVN0cmluZzogbmV3IE1hcCgpXG4gICAgICAgIH07XG4gICAgICAgIHRlbXBsYXRlQ2FjaGVzLnNldChjYWNoZUtleSwgdGVtcGxhdGVDYWNoZSk7XG4gICAgfVxuICAgIGxldCB0ZW1wbGF0ZSA9IHRlbXBsYXRlQ2FjaGUuc3RyaW5nc0FycmF5LmdldChyZXN1bHQuc3RyaW5ncyk7XG4gICAgaWYgKHRlbXBsYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cbiAgICBjb25zdCBrZXkgPSByZXN1bHQuc3RyaW5ncy5qb2luKG1hcmtlcik7XG4gICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZUNhY2hlLmtleVN0cmluZy5nZXQoa2V5KTtcbiAgICBpZiAodGVtcGxhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gcmVzdWx0LmdldFRlbXBsYXRlRWxlbWVudCgpO1xuICAgICAgICBpZiAoY29tcGF0aWJsZVNoYWR5Q1NTVmVyc2lvbikge1xuICAgICAgICAgICAgd2luZG93LlNoYWR5Q1NTLnByZXBhcmVUZW1wbGF0ZURvbShlbGVtZW50LCBzY29wZU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKHJlc3VsdCwgZWxlbWVudCk7XG4gICAgICAgIHRlbXBsYXRlQ2FjaGUua2V5U3RyaW5nLnNldChrZXksIHRlbXBsYXRlKTtcbiAgICB9XG4gICAgdGVtcGxhdGVDYWNoZS5zdHJpbmdzQXJyYXkuc2V0KHJlc3VsdC5zdHJpbmdzLCB0ZW1wbGF0ZSk7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xufTtcbmNvbnN0IFRFTVBMQVRFX1RZUEVTID0gWydodG1sJywgJ3N2ZyddO1xuLyoqXG4gKiBSZW1vdmVzIGFsbCBzdHlsZSBlbGVtZW50cyBmcm9tIFRlbXBsYXRlcyBmb3IgdGhlIGdpdmVuIHNjb3BlTmFtZS5cbiAqL1xuY29uc3QgcmVtb3ZlU3R5bGVzRnJvbUxpdFRlbXBsYXRlcyA9IChzY29wZU5hbWUpID0+IHtcbiAgICBURU1QTEFURV9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlcyA9IHRlbXBsYXRlQ2FjaGVzLmdldChnZXRUZW1wbGF0ZUNhY2hlS2V5KHR5cGUsIHNjb3BlTmFtZSkpO1xuICAgICAgICBpZiAodGVtcGxhdGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRlbXBsYXRlcy5rZXlTdHJpbmcuZm9yRWFjaCgodGVtcGxhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVsZW1lbnQ6IHsgY29udGVudCB9IH0gPSB0ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAvLyBJRSAxMSBkb2Vzbid0IHN1cHBvcnQgdGhlIGl0ZXJhYmxlIHBhcmFtIFNldCBjb25zdHJ1Y3RvclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnc3R5bGUnKSkuZm9yRWFjaCgocykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZXMuYWRkKHMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJlbW92ZU5vZGVzRnJvbVRlbXBsYXRlKHRlbXBsYXRlLCBzdHlsZXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5jb25zdCBzaGFkeVJlbmRlclNldCA9IG5ldyBTZXQoKTtcbi8qKlxuICogRm9yIHRoZSBnaXZlbiBzY29wZSBuYW1lLCBlbnN1cmVzIHRoYXQgU2hhZHlDU1Mgc3R5bGUgc2NvcGluZyBpcyBwZXJmb3JtZWQuXG4gKiBUaGlzIGlzIGRvbmUganVzdCBvbmNlIHBlciBzY29wZSBuYW1lIHNvIHRoZSBmcmFnbWVudCBhbmQgdGVtcGxhdGUgY2Fubm90XG4gKiBiZSBtb2RpZmllZC5cbiAqICgxKSBleHRyYWN0cyBzdHlsZXMgZnJvbSB0aGUgcmVuZGVyZWQgZnJhZ21lbnQgYW5kIGhhbmRzIHRoZW0gdG8gU2hhZHlDU1NcbiAqIHRvIGJlIHNjb3BlZCBhbmQgYXBwZW5kZWQgdG8gdGhlIGRvY3VtZW50XG4gKiAoMikgcmVtb3ZlcyBzdHlsZSBlbGVtZW50cyBmcm9tIGFsbCBsaXQtaHRtbCBUZW1wbGF0ZXMgZm9yIHRoaXMgc2NvcGUgbmFtZS5cbiAqXG4gKiBOb3RlLCA8c3R5bGU+IGVsZW1lbnRzIGNhbiBvbmx5IGJlIHBsYWNlZCBpbnRvIHRlbXBsYXRlcyBmb3IgdGhlXG4gKiBpbml0aWFsIHJlbmRlcmluZyBvZiB0aGUgc2NvcGUuIElmIDxzdHlsZT4gZWxlbWVudHMgYXJlIGluY2x1ZGVkIGluIHRlbXBsYXRlc1xuICogZHluYW1pY2FsbHkgcmVuZGVyZWQgdG8gdGhlIHNjb3BlIChhZnRlciB0aGUgZmlyc3Qgc2NvcGUgcmVuZGVyKSwgdGhleSB3aWxsXG4gKiBub3QgYmUgc2NvcGVkIGFuZCB0aGUgPHN0eWxlPiB3aWxsIGJlIGxlZnQgaW4gdGhlIHRlbXBsYXRlIGFuZCByZW5kZXJlZFxuICogb3V0cHV0LlxuICovXG5jb25zdCBwcmVwYXJlVGVtcGxhdGVTdHlsZXMgPSAoc2NvcGVOYW1lLCByZW5kZXJlZERPTSwgdGVtcGxhdGUpID0+IHtcbiAgICBzaGFkeVJlbmRlclNldC5hZGQoc2NvcGVOYW1lKTtcbiAgICAvLyBJZiBgcmVuZGVyZWRET01gIGlzIHN0YW1wZWQgZnJvbSBhIFRlbXBsYXRlLCB0aGVuIHdlIG5lZWQgdG8gZWRpdCB0aGF0XG4gICAgLy8gVGVtcGxhdGUncyB1bmRlcmx5aW5nIHRlbXBsYXRlIGVsZW1lbnQuIE90aGVyd2lzZSwgd2UgY3JlYXRlIG9uZSBoZXJlXG4gICAgLy8gdG8gZ2l2ZSB0byBTaGFkeUNTUywgd2hpY2ggc3RpbGwgcmVxdWlyZXMgb25lIHdoaWxlIHNjb3BpbmcuXG4gICAgY29uc3QgdGVtcGxhdGVFbGVtZW50ID0gISF0ZW1wbGF0ZSA/IHRlbXBsYXRlLmVsZW1lbnQgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIC8vIE1vdmUgc3R5bGVzIG91dCBvZiByZW5kZXJlZCBET00gYW5kIHN0b3JlLlxuICAgIGNvbnN0IHN0eWxlcyA9IHJlbmRlcmVkRE9NLnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlJyk7XG4gICAgY29uc3QgeyBsZW5ndGggfSA9IHN0eWxlcztcbiAgICAvLyBJZiB0aGVyZSBhcmUgbm8gc3R5bGVzLCBza2lwIHVubmVjZXNzYXJ5IHdvcmtcbiAgICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIEVuc3VyZSBwcmVwYXJlVGVtcGxhdGVTdHlsZXMgaXMgY2FsbGVkIHRvIHN1cHBvcnQgYWRkaW5nXG4gICAgICAgIC8vIHN0eWxlcyB2aWEgYHByZXBhcmVBZG9wdGVkQ3NzVGV4dGAgc2luY2UgdGhhdCByZXF1aXJlcyB0aGF0XG4gICAgICAgIC8vIGBwcmVwYXJlVGVtcGxhdGVTdHlsZXNgIGlzIGNhbGxlZC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gU2hhZHlDU1Mgd2lsbCBvbmx5IHVwZGF0ZSBzdHlsZXMgY29udGFpbmluZyBAYXBwbHkgaW4gdGhlIHRlbXBsYXRlXG4gICAgICAgIC8vIGdpdmVuIHRvIGBwcmVwYXJlVGVtcGxhdGVTdHlsZXNgLiBJZiBubyBsaXQgVGVtcGxhdGUgd2FzIGdpdmVuLFxuICAgICAgICAvLyBTaGFkeUNTUyB3aWxsIG5vdCBiZSBhYmxlIHRvIHVwZGF0ZSB1c2VzIG9mIEBhcHBseSBpbiBhbnkgcmVsZXZhbnRcbiAgICAgICAgLy8gdGVtcGxhdGUuIEhvd2V2ZXIsIHRoaXMgaXMgbm90IGEgcHJvYmxlbSBiZWNhdXNlIHdlIG9ubHkgY3JlYXRlIHRoZVxuICAgICAgICAvLyB0ZW1wbGF0ZSBmb3IgdGhlIHB1cnBvc2Ugb2Ygc3VwcG9ydGluZyBgcHJlcGFyZUFkb3B0ZWRDc3NUZXh0YCxcbiAgICAgICAgLy8gd2hpY2ggZG9lc24ndCBzdXBwb3J0IEBhcHBseSBhdCBhbGwuXG4gICAgICAgIHdpbmRvdy5TaGFkeUNTUy5wcmVwYXJlVGVtcGxhdGVTdHlsZXModGVtcGxhdGVFbGVtZW50LCBzY29wZU5hbWUpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbmRlbnNlZFN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAvLyBDb2xsZWN0IHN0eWxlcyBpbnRvIGEgc2luZ2xlIHN0eWxlLiBUaGlzIGhlbHBzIHVzIG1ha2Ugc3VyZSBTaGFkeUNTU1xuICAgIC8vIG1hbmlwdWxhdGlvbnMgd2lsbCBub3QgcHJldmVudCB1cyBmcm9tIGJlaW5nIGFibGUgdG8gZml4IHVwIHRlbXBsYXRlXG4gICAgLy8gcGFydCBpbmRpY2VzLlxuICAgIC8vIE5PVEU6IGNvbGxlY3Rpbmcgc3R5bGVzIGlzIGluZWZmaWNpZW50IGZvciBicm93c2VycyBidXQgU2hhZHlDU1NcbiAgICAvLyBjdXJyZW50bHkgZG9lcyB0aGlzIGFueXdheS4gV2hlbiBpdCBkb2VzIG5vdCwgdGhpcyBzaG91bGQgYmUgY2hhbmdlZC5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gc3R5bGVzW2ldO1xuICAgICAgICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbiAgICAgICAgY29uZGVuc2VkU3R5bGUudGV4dENvbnRlbnQgKz0gc3R5bGUudGV4dENvbnRlbnQ7XG4gICAgfVxuICAgIC8vIFJlbW92ZSBzdHlsZXMgZnJvbSBuZXN0ZWQgdGVtcGxhdGVzIGluIHRoaXMgc2NvcGUuXG4gICAgcmVtb3ZlU3R5bGVzRnJvbUxpdFRlbXBsYXRlcyhzY29wZU5hbWUpO1xuICAgIC8vIEFuZCB0aGVuIHB1dCB0aGUgY29uZGVuc2VkIHN0eWxlIGludG8gdGhlIFwicm9vdFwiIHRlbXBsYXRlIHBhc3NlZCBpbiBhc1xuICAgIC8vIGB0ZW1wbGF0ZWAuXG4gICAgY29uc3QgY29udGVudCA9IHRlbXBsYXRlRWxlbWVudC5jb250ZW50O1xuICAgIGlmICghIXRlbXBsYXRlKSB7XG4gICAgICAgIGluc2VydE5vZGVJbnRvVGVtcGxhdGUodGVtcGxhdGUsIGNvbmRlbnNlZFN0eWxlLCBjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUoY29uZGVuc2VkU3R5bGUsIGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIC8vIE5vdGUsIGl0J3MgaW1wb3J0YW50IHRoYXQgU2hhZHlDU1MgZ2V0cyB0aGUgdGVtcGxhdGUgdGhhdCBgbGl0LWh0bWxgXG4gICAgLy8gd2lsbCBhY3R1YWxseSByZW5kZXIgc28gdGhhdCBpdCBjYW4gdXBkYXRlIHRoZSBzdHlsZSBpbnNpZGUgd2hlblxuICAgIC8vIG5lZWRlZCAoZS5nLiBAYXBwbHkgbmF0aXZlIFNoYWRvdyBET00gY2FzZSkuXG4gICAgd2luZG93LlNoYWR5Q1NTLnByZXBhcmVUZW1wbGF0ZVN0eWxlcyh0ZW1wbGF0ZUVsZW1lbnQsIHNjb3BlTmFtZSk7XG4gICAgY29uc3Qgc3R5bGUgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlJyk7XG4gICAgaWYgKHdpbmRvdy5TaGFkeUNTUy5uYXRpdmVTaGFkb3cgJiYgc3R5bGUgIT09IG51bGwpIHtcbiAgICAgICAgLy8gV2hlbiBpbiBuYXRpdmUgU2hhZG93IERPTSwgZW5zdXJlIHRoZSBzdHlsZSBjcmVhdGVkIGJ5IFNoYWR5Q1NTIGlzXG4gICAgICAgIC8vIGluY2x1ZGVkIGluIGluaXRpYWxseSByZW5kZXJlZCBvdXRwdXQgKGByZW5kZXJlZERPTWApLlxuICAgICAgICByZW5kZXJlZERPTS5pbnNlcnRCZWZvcmUoc3R5bGUuY2xvbmVOb2RlKHRydWUpLCByZW5kZXJlZERPTS5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoISF0ZW1wbGF0ZSkge1xuICAgICAgICAvLyBXaGVuIG5vIHN0eWxlIGlzIGxlZnQgaW4gdGhlIHRlbXBsYXRlLCBwYXJ0cyB3aWxsIGJlIGJyb2tlbiBhcyBhXG4gICAgICAgIC8vIHJlc3VsdC4gVG8gZml4IHRoaXMsIHdlIHB1dCBiYWNrIHRoZSBzdHlsZSBub2RlIFNoYWR5Q1NTIHJlbW92ZWRcbiAgICAgICAgLy8gYW5kIHRoZW4gdGVsbCBsaXQgdG8gcmVtb3ZlIHRoYXQgbm9kZSBmcm9tIHRoZSB0ZW1wbGF0ZS5cbiAgICAgICAgLy8gVGhlcmUgY2FuIGJlIG5vIHN0eWxlIGluIHRoZSB0ZW1wbGF0ZSBpbiAyIGNhc2VzICgxKSB3aGVuIFNoYWR5IERPTVxuICAgICAgICAvLyBpcyBpbiB1c2UsIFNoYWR5Q1NTIHJlbW92ZXMgYWxsIHN0eWxlcywgKDIpIHdoZW4gbmF0aXZlIFNoYWRvdyBET01cbiAgICAgICAgLy8gaXMgaW4gdXNlIFNoYWR5Q1NTIHJlbW92ZXMgdGhlIHN0eWxlIGlmIGl0IGNvbnRhaW5zIG5vIGNvbnRlbnQuXG4gICAgICAgIC8vIE5PVEUsIFNoYWR5Q1NTIGNyZWF0ZXMgaXRzIG93biBzdHlsZSBzbyB3ZSBjYW4gc2FmZWx5IGFkZC9yZW1vdmVcbiAgICAgICAgLy8gYGNvbmRlbnNlZFN0eWxlYCBoZXJlLlxuICAgICAgICBjb250ZW50Lmluc2VydEJlZm9yZShjb25kZW5zZWRTdHlsZSwgY29udGVudC5maXJzdENoaWxkKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgcmVtb3Zlcy5hZGQoY29uZGVuc2VkU3R5bGUpO1xuICAgICAgICByZW1vdmVOb2Rlc0Zyb21UZW1wbGF0ZSh0ZW1wbGF0ZSwgcmVtb3Zlcyk7XG4gICAgfVxufTtcbi8qKlxuICogRXh0ZW5zaW9uIHRvIHRoZSBzdGFuZGFyZCBgcmVuZGVyYCBtZXRob2Qgd2hpY2ggc3VwcG9ydHMgcmVuZGVyaW5nXG4gKiB0byBTaGFkb3dSb290cyB3aGVuIHRoZSBTaGFkeURPTSAoaHR0cHM6Ly9naXRodWIuY29tL3dlYmNvbXBvbmVudHMvc2hhZHlkb20pXG4gKiBhbmQgU2hhZHlDU1MgKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJjb21wb25lbnRzL3NoYWR5Y3NzKSBwb2x5ZmlsbHMgYXJlIHVzZWRcbiAqIG9yIHdoZW4gdGhlIHdlYmNvbXBvbmVudHNqc1xuICogKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJjb21wb25lbnRzL3dlYmNvbXBvbmVudHNqcykgcG9seWZpbGwgaXMgdXNlZC5cbiAqXG4gKiBBZGRzIGEgYHNjb3BlTmFtZWAgb3B0aW9uIHdoaWNoIGlzIHVzZWQgdG8gc2NvcGUgZWxlbWVudCBET00gYW5kIHN0eWxlc2hlZXRzXG4gKiB3aGVuIG5hdGl2ZSBTaGFkb3dET00gaXMgdW5hdmFpbGFibGUuIFRoZSBgc2NvcGVOYW1lYCB3aWxsIGJlIGFkZGVkIHRvXG4gKiB0aGUgY2xhc3MgYXR0cmlidXRlIG9mIGFsbCByZW5kZXJlZCBET00uIEluIGFkZGl0aW9uLCBhbnkgc3R5bGUgZWxlbWVudHMgd2lsbFxuICogYmUgYXV0b21hdGljYWxseSByZS13cml0dGVuIHdpdGggdGhpcyBgc2NvcGVOYW1lYCBzZWxlY3RvciBhbmQgbW92ZWQgb3V0XG4gKiBvZiB0aGUgcmVuZGVyZWQgRE9NIGFuZCBpbnRvIHRoZSBkb2N1bWVudCBgPGhlYWQ+YC5cbiAqXG4gKiBJdCBpcyBjb21tb24gdG8gdXNlIHRoaXMgcmVuZGVyIG1ldGhvZCBpbiBjb25qdW5jdGlvbiB3aXRoIGEgY3VzdG9tIGVsZW1lbnRcbiAqIHdoaWNoIHJlbmRlcnMgYSBzaGFkb3dSb290LiBXaGVuIHRoaXMgaXMgZG9uZSwgdHlwaWNhbGx5IHRoZSBlbGVtZW50J3NcbiAqIGBsb2NhbE5hbWVgIHNob3VsZCBiZSB1c2VkIGFzIHRoZSBgc2NvcGVOYW1lYC5cbiAqXG4gKiBJbiBhZGRpdGlvbiB0byBET00gc2NvcGluZywgU2hhZHlDU1MgYWxzbyBzdXBwb3J0cyBhIGJhc2ljIHNoaW0gZm9yIGNzc1xuICogY3VzdG9tIHByb3BlcnRpZXMgKG5lZWRlZCBvbmx5IG9uIG9sZGVyIGJyb3dzZXJzIGxpa2UgSUUxMSkgYW5kIGEgc2hpbSBmb3JcbiAqIGEgZGVwcmVjYXRlZCBmZWF0dXJlIGNhbGxlZCBgQGFwcGx5YCB0aGF0IHN1cHBvcnRzIGFwcGx5aW5nIGEgc2V0IG9mIGNzc1xuICogY3VzdG9tIHByb3BlcnRpZXMgdG8gYSBnaXZlbiBsb2NhdGlvbi5cbiAqXG4gKiBVc2FnZSBjb25zaWRlcmF0aW9uczpcbiAqXG4gKiAqIFBhcnQgdmFsdWVzIGluIGA8c3R5bGU+YCBlbGVtZW50cyBhcmUgb25seSBhcHBsaWVkIHRoZSBmaXJzdCB0aW1lIGEgZ2l2ZW5cbiAqIGBzY29wZU5hbWVgIHJlbmRlcnMuIFN1YnNlcXVlbnQgY2hhbmdlcyB0byBwYXJ0cyBpbiBzdHlsZSBlbGVtZW50cyB3aWxsIGhhdmVcbiAqIG5vIGVmZmVjdC4gQmVjYXVzZSBvZiB0aGlzLCBwYXJ0cyBpbiBzdHlsZSBlbGVtZW50cyBzaG91bGQgb25seSBiZSB1c2VkIGZvclxuICogdmFsdWVzIHRoYXQgd2lsbCBuZXZlciBjaGFuZ2UsIGZvciBleGFtcGxlIHBhcnRzIHRoYXQgc2V0IHNjb3BlLXdpZGUgdGhlbWVcbiAqIHZhbHVlcyBvciBwYXJ0cyB3aGljaCByZW5kZXIgc2hhcmVkIHN0eWxlIGVsZW1lbnRzLlxuICpcbiAqICogTm90ZSwgZHVlIHRvIGEgbGltaXRhdGlvbiBvZiB0aGUgU2hhZHlET00gcG9seWZpbGwsIHJlbmRlcmluZyBpbiBhXG4gKiBjdXN0b20gZWxlbWVudCdzIGBjb25zdHJ1Y3RvcmAgaXMgbm90IHN1cHBvcnRlZC4gSW5zdGVhZCByZW5kZXJpbmcgc2hvdWxkXG4gKiBlaXRoZXIgZG9uZSBhc3luY2hyb25vdXNseSwgZm9yIGV4YW1wbGUgYXQgbWljcm90YXNrIHRpbWluZyAoZm9yIGV4YW1wbGVcbiAqIGBQcm9taXNlLnJlc29sdmUoKWApLCBvciBiZSBkZWZlcnJlZCB1bnRpbCB0aGUgZmlyc3QgdGltZSB0aGUgZWxlbWVudCdzXG4gKiBgY29ubmVjdGVkQ2FsbGJhY2tgIHJ1bnMuXG4gKlxuICogVXNhZ2UgY29uc2lkZXJhdGlvbnMgd2hlbiB1c2luZyBzaGltbWVkIGN1c3RvbSBwcm9wZXJ0aWVzIG9yIGBAYXBwbHlgOlxuICpcbiAqICogV2hlbmV2ZXIgYW55IGR5bmFtaWMgY2hhbmdlcyBhcmUgbWFkZSB3aGljaCBhZmZlY3RcbiAqIGNzcyBjdXN0b20gcHJvcGVydGllcywgYFNoYWR5Q1NTLnN0eWxlRWxlbWVudChlbGVtZW50KWAgbXVzdCBiZSBjYWxsZWRcbiAqIHRvIHVwZGF0ZSB0aGUgZWxlbWVudC4gVGhlcmUgYXJlIHR3byBjYXNlcyB3aGVuIHRoaXMgaXMgbmVlZGVkOlxuICogKDEpIHRoZSBlbGVtZW50IGlzIGNvbm5lY3RlZCB0byBhIG5ldyBwYXJlbnQsICgyKSBhIGNsYXNzIGlzIGFkZGVkIHRvIHRoZVxuICogZWxlbWVudCB0aGF0IGNhdXNlcyBpdCB0byBtYXRjaCBkaWZmZXJlbnQgY3VzdG9tIHByb3BlcnRpZXMuXG4gKiBUbyBhZGRyZXNzIHRoZSBmaXJzdCBjYXNlIHdoZW4gcmVuZGVyaW5nIGEgY3VzdG9tIGVsZW1lbnQsIGBzdHlsZUVsZW1lbnRgXG4gKiBzaG91bGQgYmUgY2FsbGVkIGluIHRoZSBlbGVtZW50J3MgYGNvbm5lY3RlZENhbGxiYWNrYC5cbiAqXG4gKiAqIFNoaW1tZWQgY3VzdG9tIHByb3BlcnRpZXMgbWF5IG9ubHkgYmUgZGVmaW5lZCBlaXRoZXIgZm9yIGFuIGVudGlyZVxuICogc2hhZG93Um9vdCAoZm9yIGV4YW1wbGUsIGluIGEgYDpob3N0YCBydWxlKSBvciB2aWEgYSBydWxlIHRoYXQgZGlyZWN0bHlcbiAqIG1hdGNoZXMgYW4gZWxlbWVudCB3aXRoIGEgc2hhZG93Um9vdC4gSW4gb3RoZXIgd29yZHMsIGluc3RlYWQgb2YgZmxvd2luZyBmcm9tXG4gKiBwYXJlbnQgdG8gY2hpbGQgYXMgZG8gbmF0aXZlIGNzcyBjdXN0b20gcHJvcGVydGllcywgc2hpbW1lZCBjdXN0b20gcHJvcGVydGllc1xuICogZmxvdyBvbmx5IGZyb20gc2hhZG93Um9vdHMgdG8gbmVzdGVkIHNoYWRvd1Jvb3RzLlxuICpcbiAqICogV2hlbiB1c2luZyBgQGFwcGx5YCBtaXhpbmcgY3NzIHNob3J0aGFuZCBwcm9wZXJ0eSBuYW1lcyB3aXRoXG4gKiBub24tc2hvcnRoYW5kIG5hbWVzIChmb3IgZXhhbXBsZSBgYm9yZGVyYCBhbmQgYGJvcmRlci13aWR0aGApIGlzIG5vdFxuICogc3VwcG9ydGVkLlxuICovXG5leHBvcnQgY29uc3QgcmVuZGVyID0gKHJlc3VsdCwgY29udGFpbmVyLCBvcHRpb25zKSA9PiB7XG4gICAgaWYgKCFvcHRpb25zIHx8IHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0JyB8fCAhb3B0aW9ucy5zY29wZU5hbWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgYHNjb3BlTmFtZWAgb3B0aW9uIGlzIHJlcXVpcmVkLicpO1xuICAgIH1cbiAgICBjb25zdCBzY29wZU5hbWUgPSBvcHRpb25zLnNjb3BlTmFtZTtcbiAgICBjb25zdCBoYXNSZW5kZXJlZCA9IHBhcnRzLmhhcyhjb250YWluZXIpO1xuICAgIGNvbnN0IG5lZWRzU2NvcGluZyA9IGNvbXBhdGlibGVTaGFkeUNTU1ZlcnNpb24gJiZcbiAgICAgICAgY29udGFpbmVyLm5vZGVUeXBlID09PSAxMSAvKiBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUgKi8gJiZcbiAgICAgICAgISFjb250YWluZXIuaG9zdDtcbiAgICAvLyBIYW5kbGUgZmlyc3QgcmVuZGVyIHRvIGEgc2NvcGUgc3BlY2lhbGx5Li4uXG4gICAgY29uc3QgZmlyc3RTY29wZVJlbmRlciA9IG5lZWRzU2NvcGluZyAmJiAhc2hhZHlSZW5kZXJTZXQuaGFzKHNjb3BlTmFtZSk7XG4gICAgLy8gT24gZmlyc3Qgc2NvcGUgcmVuZGVyLCByZW5kZXIgaW50byBhIGZyYWdtZW50OyB0aGlzIGNhbm5vdCBiZSBhIHNpbmdsZVxuICAgIC8vIGZyYWdtZW50IHRoYXQgaXMgcmV1c2VkIHNpbmNlIG5lc3RlZCByZW5kZXJzIGNhbiBvY2N1ciBzeW5jaHJvbm91c2x5LlxuICAgIGNvbnN0IHJlbmRlckNvbnRhaW5lciA9IGZpcnN0U2NvcGVSZW5kZXIgPyBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkgOiBjb250YWluZXI7XG4gICAgbGl0UmVuZGVyKHJlc3VsdCwgcmVuZGVyQ29udGFpbmVyLCBPYmplY3QuYXNzaWduKHsgdGVtcGxhdGVGYWN0b3J5OiBzaGFkeVRlbXBsYXRlRmFjdG9yeShzY29wZU5hbWUpIH0sIG9wdGlvbnMpKTtcbiAgICAvLyBXaGVuIHBlcmZvcm1pbmcgZmlyc3Qgc2NvcGUgcmVuZGVyLFxuICAgIC8vICgxKSBXZSd2ZSByZW5kZXJlZCBpbnRvIGEgZnJhZ21lbnQgc28gdGhhdCB0aGVyZSdzIGEgY2hhbmNlIHRvXG4gICAgLy8gYHByZXBhcmVUZW1wbGF0ZVN0eWxlc2AgYmVmb3JlIHN1Yi1lbGVtZW50cyBoaXQgdGhlIERPTVxuICAgIC8vICh3aGljaCBtaWdodCBjYXVzZSB0aGVtIHRvIHJlbmRlciBiYXNlZCBvbiBhIGNvbW1vbiBwYXR0ZXJuIG9mXG4gICAgLy8gcmVuZGVyaW5nIGluIGEgY3VzdG9tIGVsZW1lbnQncyBgY29ubmVjdGVkQ2FsbGJhY2tgKTtcbiAgICAvLyAoMikgU2NvcGUgdGhlIHRlbXBsYXRlIHdpdGggU2hhZHlDU1Mgb25lIHRpbWUgb25seSBmb3IgdGhpcyBzY29wZS5cbiAgICAvLyAoMykgUmVuZGVyIHRoZSBmcmFnbWVudCBpbnRvIHRoZSBjb250YWluZXIgYW5kIG1ha2Ugc3VyZSB0aGVcbiAgICAvLyBjb250YWluZXIga25vd3MgaXRzIGBwYXJ0YCBpcyB0aGUgb25lIHdlIGp1c3QgcmVuZGVyZWQuIFRoaXMgZW5zdXJlc1xuICAgIC8vIERPTSB3aWxsIGJlIHJlLXVzZWQgb24gc3Vic2VxdWVudCByZW5kZXJzLlxuICAgIGlmIChmaXJzdFNjb3BlUmVuZGVyKSB7XG4gICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0cy5nZXQocmVuZGVyQ29udGFpbmVyKTtcbiAgICAgICAgcGFydHMuZGVsZXRlKHJlbmRlckNvbnRhaW5lcik7XG4gICAgICAgIC8vIFNoYWR5Q1NTIG1pZ2h0IGhhdmUgc3R5bGUgc2hlZXRzIChlLmcuIGZyb20gYHByZXBhcmVBZG9wdGVkQ3NzVGV4dGApXG4gICAgICAgIC8vIHRoYXQgc2hvdWxkIGFwcGx5IHRvIGByZW5kZXJDb250YWluZXJgIGV2ZW4gaWYgdGhlIHJlbmRlcmVkIHZhbHVlIGlzXG4gICAgICAgIC8vIG5vdCBhIFRlbXBsYXRlSW5zdGFuY2UuIEhvd2V2ZXIsIGl0IHdpbGwgb25seSBpbnNlcnQgc2NvcGVkIHN0eWxlc1xuICAgICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudCBpZiBgcHJlcGFyZVRlbXBsYXRlU3R5bGVzYCBoYXMgYWxyZWFkeSBiZWVuIGNhbGxlZFxuICAgICAgICAvLyBmb3IgdGhlIGdpdmVuIHNjb3BlIG5hbWUuXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gcGFydC52YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlSW5zdGFuY2UgP1xuICAgICAgICAgICAgcGFydC52YWx1ZS50ZW1wbGF0ZSA6XG4gICAgICAgICAgICB1bmRlZmluZWQ7XG4gICAgICAgIHByZXBhcmVUZW1wbGF0ZVN0eWxlcyhzY29wZU5hbWUsIHJlbmRlckNvbnRhaW5lciwgdGVtcGxhdGUpO1xuICAgICAgICByZW1vdmVOb2Rlcyhjb250YWluZXIsIGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlckNvbnRhaW5lcik7XG4gICAgICAgIHBhcnRzLnNldChjb250YWluZXIsIHBhcnQpO1xuICAgIH1cbiAgICAvLyBBZnRlciBlbGVtZW50cyBoYXZlIGhpdCB0aGUgRE9NLCB1cGRhdGUgc3R5bGluZyBpZiB0aGlzIGlzIHRoZVxuICAgIC8vIGluaXRpYWwgcmVuZGVyIHRvIHRoaXMgY29udGFpbmVyLlxuICAgIC8vIFRoaXMgaXMgbmVlZGVkIHdoZW5ldmVyIGR5bmFtaWMgY2hhbmdlcyBhcmUgbWFkZSBzbyBpdCB3b3VsZCBiZVxuICAgIC8vIHNhZmVzdCB0byBkbyBldmVyeSByZW5kZXI7IGhvd2V2ZXIsIHRoaXMgd291bGQgcmVncmVzcyBwZXJmb3JtYW5jZVxuICAgIC8vIHNvIHdlIGxlYXZlIGl0IHVwIHRvIHRoZSB1c2VyIHRvIGNhbGwgYFNoYWR5Q1NTLnN0eWxlRWxlbWVudGBcbiAgICAvLyBmb3IgZHluYW1pYyBjaGFuZ2VzLlxuICAgIGlmICghaGFzUmVuZGVyZWQgJiYgbmVlZHNTY29waW5nKSB7XG4gICAgICAgIHdpbmRvdy5TaGFkeUNTUy5zdHlsZUVsZW1lbnQoY29udGFpbmVyLmhvc3QpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaGFkeS1yZW5kZXIuanMubWFwIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbnZhciBfYTtcbi8qKlxuICogV2hlbiB1c2luZyBDbG9zdXJlIENvbXBpbGVyLCBKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KHByb3BlcnR5LCBvYmplY3QpIGlzXG4gKiByZXBsYWNlZCBhdCBjb21waWxlIHRpbWUgYnkgdGhlIG11bmdlZCBuYW1lIGZvciBvYmplY3RbcHJvcGVydHldLiBXZSBjYW5ub3RcbiAqIGFsaWFzIHRoaXMgZnVuY3Rpb24sIHNvIHdlIGhhdmUgdG8gdXNlIGEgc21hbGwgc2hpbSB0aGF0IGhhcyB0aGUgc2FtZVxuICogYmVoYXZpb3Igd2hlbiBub3QgY29tcGlsaW5nLlxuICovXG53aW5kb3cuSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSA9XG4gICAgKHByb3AsIF9vYmopID0+IHByb3A7XG5leHBvcnQgY29uc3QgZGVmYXVsdENvbnZlcnRlciA9IHtcbiAgICB0b0F0dHJpYnV0ZSh2YWx1ZSwgdHlwZSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQm9vbGVhbjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPyAnJyA6IG51bGw7XG4gICAgICAgICAgICBjYXNlIE9iamVjdDpcbiAgICAgICAgICAgIGNhc2UgQXJyYXk6XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHZhbHVlIGlzIGBudWxsYCBvciBgdW5kZWZpbmVkYCBwYXNzIHRoaXMgdGhyb3VnaFxuICAgICAgICAgICAgICAgIC8vIHRvIGFsbG93IHJlbW92aW5nL25vIGNoYW5nZSBiZWhhdmlvci5cbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IHZhbHVlIDogSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIGZyb21BdHRyaWJ1dGUodmFsdWUsIHR5cGUpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEJvb2xlYW46XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBudWxsO1xuICAgICAgICAgICAgY2FzZSBOdW1iZXI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsID8gbnVsbCA6IE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlIE9iamVjdDpcbiAgICAgICAgICAgIGNhc2UgQXJyYXk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG59O1xuLyoqXG4gKiBDaGFuZ2UgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyBkaWZmZXJlbnQgZnJvbSBgb2xkVmFsdWVgLlxuICogVGhpcyBtZXRob2QgaXMgdXNlZCBhcyB0aGUgZGVmYXVsdCBmb3IgYSBwcm9wZXJ0eSdzIGBoYXNDaGFuZ2VkYCBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vdEVxdWFsID0gKHZhbHVlLCBvbGQpID0+IHtcbiAgICAvLyBUaGlzIGVuc3VyZXMgKG9sZD09TmFOLCB2YWx1ZT09TmFOKSBhbHdheXMgcmV0dXJucyBmYWxzZVxuICAgIHJldHVybiBvbGQgIT09IHZhbHVlICYmIChvbGQgPT09IG9sZCB8fCB2YWx1ZSA9PT0gdmFsdWUpO1xufTtcbmNvbnN0IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uID0ge1xuICAgIGF0dHJpYnV0ZTogdHJ1ZSxcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgY29udmVydGVyOiBkZWZhdWx0Q29udmVydGVyLFxuICAgIHJlZmxlY3Q6IGZhbHNlLFxuICAgIGhhc0NoYW5nZWQ6IG5vdEVxdWFsXG59O1xuY29uc3QgbWljcm90YXNrUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh0cnVlKTtcbmNvbnN0IFNUQVRFX0hBU19VUERBVEVEID0gMTtcbmNvbnN0IFNUQVRFX1VQREFURV9SRVFVRVNURUQgPSAxIDw8IDI7XG5jb25zdCBTVEFURV9JU19SRUZMRUNUSU5HX1RPX0FUVFJJQlVURSA9IDEgPDwgMztcbmNvbnN0IFNUQVRFX0lTX1JFRkxFQ1RJTkdfVE9fUFJPUEVSVFkgPSAxIDw8IDQ7XG5jb25zdCBTVEFURV9IQVNfQ09OTkVDVEVEID0gMSA8PCA1O1xuLyoqXG4gKiBUaGUgQ2xvc3VyZSBKUyBDb21waWxlciBkb2Vzbid0IGN1cnJlbnRseSBoYXZlIGdvb2Qgc3VwcG9ydCBmb3Igc3RhdGljXG4gKiBwcm9wZXJ0eSBzZW1hbnRpY3Mgd2hlcmUgXCJ0aGlzXCIgaXMgZHluYW1pYyAoZS5nLlxuICogaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZS9jbG9zdXJlLWNvbXBpbGVyL2lzc3Vlcy8zMTc3IGFuZCBvdGhlcnMpIHNvIHdlIHVzZVxuICogdGhpcyBoYWNrIHRvIGJ5cGFzcyBhbnkgcmV3cml0aW5nIGJ5IHRoZSBjb21waWxlci5cbiAqL1xuY29uc3QgZmluYWxpemVkID0gJ2ZpbmFsaXplZCc7XG4vKipcbiAqIEJhc2UgZWxlbWVudCBjbGFzcyB3aGljaCBtYW5hZ2VzIGVsZW1lbnQgcHJvcGVydGllcyBhbmQgYXR0cmlidXRlcy4gV2hlblxuICogcHJvcGVydGllcyBjaGFuZ2UsIHRoZSBgdXBkYXRlYCBtZXRob2QgaXMgYXN5bmNocm9ub3VzbHkgY2FsbGVkLiBUaGlzIG1ldGhvZFxuICogc2hvdWxkIGJlIHN1cHBsaWVkIGJ5IHN1YmNsYXNzZXJzIHRvIHJlbmRlciB1cGRhdGVzIGFzIGRlc2lyZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBVcGRhdGluZ0VsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVN0YXRlID0gMDtcbiAgICAgICAgdGhpcy5faW5zdGFuY2VQcm9wZXJ0aWVzID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl91cGRhdGVQcm9taXNlID0gbWljcm90YXNrUHJvbWlzZTtcbiAgICAgICAgdGhpcy5faGFzQ29ubmVjdGVkUmVzb2x2ZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYXAgd2l0aCBrZXlzIGZvciBhbnkgcHJvcGVydGllcyB0aGF0IGhhdmUgY2hhbmdlZCBzaW5jZSB0aGUgbGFzdFxuICAgICAgICAgKiB1cGRhdGUgY3ljbGUgd2l0aCBwcmV2aW91cyB2YWx1ZXMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9jaGFuZ2VkUHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1hcCB3aXRoIGtleXMgb2YgcHJvcGVydGllcyB0aGF0IHNob3VsZCBiZSByZWZsZWN0ZWQgd2hlbiB1cGRhdGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fcmVmbGVjdGluZ1Byb3BlcnRpZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBhdHRyaWJ1dGVzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHJlZ2lzdGVyZWQgcHJvcGVydGllcy5cbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgICAvLyBub3RlOiBwaWdneSBiYWNraW5nIG9uIHRoaXMgdG8gZW5zdXJlIHdlJ3JlIGZpbmFsaXplZC5cbiAgICAgICAgdGhpcy5maW5hbGl6ZSgpO1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gW107XG4gICAgICAgIC8vIFVzZSBmb3JFYWNoIHNvIHRoaXMgd29ya3MgZXZlbiBpZiBmb3Ivb2YgbG9vcHMgYXJlIGNvbXBpbGVkIHRvIGZvciBsb29wc1xuICAgICAgICAvLyBleHBlY3RpbmcgYXJyYXlzXG4gICAgICAgIHRoaXMuX2NsYXNzUHJvcGVydGllcy5mb3JFYWNoKCh2LCBwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdHRyID0gdGhpcy5fYXR0cmlidXRlTmFtZUZvclByb3BlcnR5KHAsIHYpO1xuICAgICAgICAgICAgaWYgKGF0dHIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2F0dHJpYnV0ZVRvUHJvcGVydHlNYXAuc2V0KGF0dHIsIHApO1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMucHVzaChhdHRyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGVzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbnN1cmVzIHRoZSBwcml2YXRlIGBfY2xhc3NQcm9wZXJ0aWVzYCBwcm9wZXJ0eSBtZXRhZGF0YSBpcyBjcmVhdGVkLlxuICAgICAqIEluIGFkZGl0aW9uIHRvIGBmaW5hbGl6ZWAgdGhpcyBpcyBhbHNvIGNhbGxlZCBpbiBgY3JlYXRlUHJvcGVydHlgIHRvXG4gICAgICogZW5zdXJlIHRoZSBgQHByb3BlcnR5YCBkZWNvcmF0b3IgY2FuIGFkZCBwcm9wZXJ0eSBtZXRhZGF0YS5cbiAgICAgKi9cbiAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICBzdGF0aWMgX2Vuc3VyZUNsYXNzUHJvcGVydGllcygpIHtcbiAgICAgICAgLy8gZW5zdXJlIHByaXZhdGUgc3RvcmFnZSBmb3IgcHJvcGVydHkgZGVjbGFyYXRpb25zLlxuICAgICAgICBpZiAoIXRoaXMuaGFzT3duUHJvcGVydHkoSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSgnX2NsYXNzUHJvcGVydGllcycsIHRoaXMpKSkge1xuICAgICAgICAgICAgdGhpcy5fY2xhc3NQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgLy8gTk9URTogV29ya2Fyb3VuZCBJRTExIG5vdCBzdXBwb3J0aW5nIE1hcCBjb25zdHJ1Y3RvciBhcmd1bWVudC5cbiAgICAgICAgICAgIGNvbnN0IHN1cGVyUHJvcGVydGllcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fY2xhc3NQcm9wZXJ0aWVzO1xuICAgICAgICAgICAgaWYgKHN1cGVyUHJvcGVydGllcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc3VwZXJQcm9wZXJ0aWVzLmZvckVhY2goKHYsIGspID0+IHRoaXMuX2NsYXNzUHJvcGVydGllcy5zZXQoaywgdikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBwcm9wZXJ0eSBhY2Nlc3NvciBvbiB0aGUgZWxlbWVudCBwcm90b3R5cGUgaWYgb25lIGRvZXMgbm90IGV4aXN0LlxuICAgICAqIFRoZSBwcm9wZXJ0eSBzZXR0ZXIgY2FsbHMgdGhlIHByb3BlcnR5J3MgYGhhc0NoYW5nZWRgIHByb3BlcnR5IG9wdGlvblxuICAgICAqIG9yIHVzZXMgYSBzdHJpY3QgaWRlbnRpdHkgY2hlY2sgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHRvIHJlcXVlc3RcbiAgICAgKiBhbiB1cGRhdGUuXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlUHJvcGVydHkobmFtZSwgb3B0aW9ucyA9IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uKSB7XG4gICAgICAgIC8vIE5vdGUsIHNpbmNlIHRoaXMgY2FuIGJlIGNhbGxlZCBieSB0aGUgYEBwcm9wZXJ0eWAgZGVjb3JhdG9yIHdoaWNoXG4gICAgICAgIC8vIGlzIGNhbGxlZCBiZWZvcmUgYGZpbmFsaXplYCwgd2UgZW5zdXJlIHN0b3JhZ2UgZXhpc3RzIGZvciBwcm9wZXJ0eVxuICAgICAgICAvLyBtZXRhZGF0YS5cbiAgICAgICAgdGhpcy5fZW5zdXJlQ2xhc3NQcm9wZXJ0aWVzKCk7XG4gICAgICAgIHRoaXMuX2NsYXNzUHJvcGVydGllcy5zZXQobmFtZSwgb3B0aW9ucyk7XG4gICAgICAgIC8vIERvIG5vdCBnZW5lcmF0ZSBhbiBhY2Nlc3NvciBpZiB0aGUgcHJvdG90eXBlIGFscmVhZHkgaGFzIG9uZSwgc2luY2VcbiAgICAgICAgLy8gaXQgd291bGQgYmUgbG9zdCBvdGhlcndpc2UgYW5kIHRoYXQgd291bGQgbmV2ZXIgYmUgdGhlIHVzZXIncyBpbnRlbnRpb247XG4gICAgICAgIC8vIEluc3RlYWQsIHdlIGV4cGVjdCB1c2VycyB0byBjYWxsIGByZXF1ZXN0VXBkYXRlYCB0aGVtc2VsdmVzIGZyb21cbiAgICAgICAgLy8gdXNlci1kZWZpbmVkIGFjY2Vzc29ycy4gTm90ZSB0aGF0IGlmIHRoZSBzdXBlciBoYXMgYW4gYWNjZXNzb3Igd2Ugd2lsbFxuICAgICAgICAvLyBzdGlsbCBvdmVyd3JpdGUgaXRcbiAgICAgICAgaWYgKG9wdGlvbnMubm9BY2Nlc3NvciB8fCB0aGlzLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGtleSA9IHR5cGVvZiBuYW1lID09PSAnc3ltYm9sJyA/IFN5bWJvbCgpIDogYF9fJHtuYW1lfWA7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLnByb3RvdHlwZSwgbmFtZSwge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSBubyBzeW1ib2wgaW4gaW5kZXhcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1trZXldO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpc1tuYW1lXTtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXF1ZXN0VXBkYXRlKG5hbWUsIG9sZFZhbHVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHByb3BlcnR5IGFjY2Vzc29ycyBmb3IgcmVnaXN0ZXJlZCBwcm9wZXJ0aWVzIGFuZCBlbnN1cmVzXG4gICAgICogYW55IHN1cGVyY2xhc3NlcyBhcmUgYWxzbyBmaW5hbGl6ZWQuXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKi9cbiAgICBzdGF0aWMgZmluYWxpemUoKSB7XG4gICAgICAgIC8vIGZpbmFsaXplIGFueSBzdXBlcmNsYXNzZXNcbiAgICAgICAgY29uc3Qgc3VwZXJDdG9yID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpO1xuICAgICAgICBpZiAoIXN1cGVyQ3Rvci5oYXNPd25Qcm9wZXJ0eShmaW5hbGl6ZWQpKSB7XG4gICAgICAgICAgICBzdXBlckN0b3IuZmluYWxpemUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzW2ZpbmFsaXplZF0gPSB0cnVlO1xuICAgICAgICB0aGlzLl9lbnN1cmVDbGFzc1Byb3BlcnRpZXMoKTtcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBNYXAgcG9wdWxhdGVkIGluIG9ic2VydmVkQXR0cmlidXRlc1xuICAgICAgICB0aGlzLl9hdHRyaWJ1dGVUb1Byb3BlcnR5TWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAvLyBtYWtlIGFueSBwcm9wZXJ0aWVzXG4gICAgICAgIC8vIE5vdGUsIG9ubHkgcHJvY2VzcyBcIm93blwiIHByb3BlcnRpZXMgc2luY2UgdGhpcyBlbGVtZW50IHdpbGwgaW5oZXJpdFxuICAgICAgICAvLyBhbnkgcHJvcGVydGllcyBkZWZpbmVkIG9uIHRoZSBzdXBlckNsYXNzLCBhbmQgZmluYWxpemF0aW9uIGVuc3VyZXNcbiAgICAgICAgLy8gdGhlIGVudGlyZSBwcm90b3R5cGUgY2hhaW4gaXMgZmluYWxpemVkLlxuICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KCdwcm9wZXJ0aWVzJywgdGhpcykpKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcGVydGllcztcbiAgICAgICAgICAgIC8vIHN1cHBvcnQgc3ltYm9scyBpbiBwcm9wZXJ0aWVzIChJRTExIGRvZXMgbm90IHN1cHBvcnQgdGhpcylcbiAgICAgICAgICAgIGNvbnN0IHByb3BLZXlzID0gW1xuICAgICAgICAgICAgICAgIC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHByb3BzKSxcbiAgICAgICAgICAgICAgICAuLi4odHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpID9cbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhwcm9wcykgOlxuICAgICAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIC8vIFRoaXMgZm9yL29mIGlzIG9rIGJlY2F1c2UgcHJvcEtleXMgaXMgYW4gYXJyYXlcbiAgICAgICAgICAgIGZvciAoY29uc3QgcCBvZiBwcm9wS2V5cykge1xuICAgICAgICAgICAgICAgIC8vIG5vdGUsIHVzZSBvZiBgYW55YCBpcyBkdWUgdG8gVHlwZVNyaXB0IGxhY2sgb2Ygc3VwcG9ydCBmb3Igc3ltYm9sIGluXG4gICAgICAgICAgICAgICAgLy8gaW5kZXggdHlwZXNcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55IG5vIHN5bWJvbCBpbiBpbmRleFxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUHJvcGVydHkocCwgcHJvcHNbcF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHByb3BlcnR5IG5hbWUgZm9yIHRoZSBnaXZlbiBhdHRyaWJ1dGUgYG5hbWVgLlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICovXG4gICAgc3RhdGljIF9hdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHkobmFtZSwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBvcHRpb25zLmF0dHJpYnV0ZTtcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZSA9PT0gZmFsc2UgP1xuICAgICAgICAgICAgdW5kZWZpbmVkIDpcbiAgICAgICAgICAgICh0eXBlb2YgYXR0cmlidXRlID09PSAnc3RyaW5nJyA/XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlIDpcbiAgICAgICAgICAgICAgICAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnID8gbmFtZS50b0xvd2VyQ2FzZSgpIDogdW5kZWZpbmVkKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiBhIHByb3BlcnR5IHNob3VsZCByZXF1ZXN0IGFuIHVwZGF0ZS5cbiAgICAgKiBDYWxsZWQgd2hlbiBhIHByb3BlcnR5IHZhbHVlIGlzIHNldCBhbmQgdXNlcyB0aGUgYGhhc0NoYW5nZWRgXG4gICAgICogb3B0aW9uIGZvciB0aGUgcHJvcGVydHkgaWYgcHJlc2VudCBvciBhIHN0cmljdCBpZGVudGl0eSBjaGVjay5cbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqL1xuICAgIHN0YXRpYyBfdmFsdWVIYXNDaGFuZ2VkKHZhbHVlLCBvbGQsIGhhc0NoYW5nZWQgPSBub3RFcXVhbCkge1xuICAgICAgICByZXR1cm4gaGFzQ2hhbmdlZCh2YWx1ZSwgb2xkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUgZm9yIHRoZSBnaXZlbiBhdHRyaWJ1dGUgdmFsdWUuXG4gICAgICogQ2FsbGVkIHZpYSB0aGUgYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AgYW5kIHVzZXMgdGhlIHByb3BlcnR5J3NcbiAgICAgKiBgY29udmVydGVyYCBvciBgY29udmVydGVyLmZyb21BdHRyaWJ1dGVgIHByb3BlcnR5IG9wdGlvbi5cbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqL1xuICAgIHN0YXRpYyBfcHJvcGVydHlWYWx1ZUZyb21BdHRyaWJ1dGUodmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IG9wdGlvbnMudHlwZTtcbiAgICAgICAgY29uc3QgY29udmVydGVyID0gb3B0aW9ucy5jb252ZXJ0ZXIgfHwgZGVmYXVsdENvbnZlcnRlcjtcbiAgICAgICAgY29uc3QgZnJvbUF0dHJpYnV0ZSA9ICh0eXBlb2YgY29udmVydGVyID09PSAnZnVuY3Rpb24nID8gY29udmVydGVyIDogY29udmVydGVyLmZyb21BdHRyaWJ1dGUpO1xuICAgICAgICByZXR1cm4gZnJvbUF0dHJpYnV0ZSA/IGZyb21BdHRyaWJ1dGUodmFsdWUsIHR5cGUpIDogdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGF0dHJpYnV0ZSB2YWx1ZSBmb3IgdGhlIGdpdmVuIHByb3BlcnR5IHZhbHVlLiBJZiB0aGlzXG4gICAgICogcmV0dXJucyB1bmRlZmluZWQsIHRoZSBwcm9wZXJ0eSB3aWxsICpub3QqIGJlIHJlZmxlY3RlZCB0byBhbiBhdHRyaWJ1dGUuXG4gICAgICogSWYgdGhpcyByZXR1cm5zIG51bGwsIHRoZSBhdHRyaWJ1dGUgd2lsbCBiZSByZW1vdmVkLCBvdGhlcndpc2UgdGhlXG4gICAgICogYXR0cmlidXRlIHdpbGwgYmUgc2V0IHRvIHRoZSB2YWx1ZS5cbiAgICAgKiBUaGlzIHVzZXMgdGhlIHByb3BlcnR5J3MgYHJlZmxlY3RgIGFuZCBgdHlwZS50b0F0dHJpYnV0ZWAgcHJvcGVydHkgb3B0aW9ucy5cbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqL1xuICAgIHN0YXRpYyBfcHJvcGVydHlWYWx1ZVRvQXR0cmlidXRlKHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zLnJlZmxlY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHR5cGUgPSBvcHRpb25zLnR5cGU7XG4gICAgICAgIGNvbnN0IGNvbnZlcnRlciA9IG9wdGlvbnMuY29udmVydGVyO1xuICAgICAgICBjb25zdCB0b0F0dHJpYnV0ZSA9IGNvbnZlcnRlciAmJiBjb252ZXJ0ZXIudG9BdHRyaWJ1dGUgfHxcbiAgICAgICAgICAgIGRlZmF1bHRDb252ZXJ0ZXIudG9BdHRyaWJ1dGU7XG4gICAgICAgIHJldHVybiB0b0F0dHJpYnV0ZSh2YWx1ZSwgdHlwZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGVsZW1lbnQgaW5pdGlhbGl6YXRpb24uIEJ5IGRlZmF1bHQgY2FwdHVyZXMgYW55IHByZS1zZXQgdmFsdWVzIGZvclxuICAgICAqIHJlZ2lzdGVyZWQgcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLl9zYXZlSW5zdGFuY2VQcm9wZXJ0aWVzKCk7XG4gICAgICAgIC8vIGVuc3VyZXMgZmlyc3QgdXBkYXRlIHdpbGwgYmUgY2F1Z2h0IGJ5IGFuIGVhcmx5IGFjY2VzcyBvZlxuICAgICAgICAvLyBgdXBkYXRlQ29tcGxldGVgXG4gICAgICAgIHRoaXMuX3JlcXVlc3RVcGRhdGUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRml4ZXMgYW55IHByb3BlcnRpZXMgc2V0IG9uIHRoZSBpbnN0YW5jZSBiZWZvcmUgdXBncmFkZSB0aW1lLlxuICAgICAqIE90aGVyd2lzZSB0aGVzZSB3b3VsZCBzaGFkb3cgdGhlIGFjY2Vzc29yIGFuZCBicmVhayB0aGVzZSBwcm9wZXJ0aWVzLlxuICAgICAqIFRoZSBwcm9wZXJ0aWVzIGFyZSBzdG9yZWQgaW4gYSBNYXAgd2hpY2ggaXMgcGxheWVkIGJhY2sgYWZ0ZXIgdGhlXG4gICAgICogY29uc3RydWN0b3IgcnVucy4gTm90ZSwgb24gdmVyeSBvbGQgdmVyc2lvbnMgb2YgU2FmYXJpICg8PTkpIG9yIENocm9tZVxuICAgICAqICg8PTQxKSwgcHJvcGVydGllcyBjcmVhdGVkIGZvciBuYXRpdmUgcGxhdGZvcm0gcHJvcGVydGllcyBsaWtlIChgaWRgIG9yXG4gICAgICogYG5hbWVgKSBtYXkgbm90IGhhdmUgZGVmYXVsdCB2YWx1ZXMgc2V0IGluIHRoZSBlbGVtZW50IGNvbnN0cnVjdG9yLiBPblxuICAgICAqIHRoZXNlIGJyb3dzZXJzIG5hdGl2ZSBwcm9wZXJ0aWVzIGFwcGVhciBvbiBpbnN0YW5jZXMgYW5kIHRoZXJlZm9yZSB0aGVpclxuICAgICAqIGRlZmF1bHQgdmFsdWUgd2lsbCBvdmVyd3JpdGUgYW55IGVsZW1lbnQgZGVmYXVsdCAoZS5nLiBpZiB0aGUgZWxlbWVudCBzZXRzXG4gICAgICogdGhpcy5pZCA9ICdpZCcgaW4gdGhlIGNvbnN0cnVjdG9yLCB0aGUgJ2lkJyB3aWxsIGJlY29tZSAnJyBzaW5jZSB0aGlzIGlzXG4gICAgICogdGhlIG5hdGl2ZSBwbGF0Zm9ybSBkZWZhdWx0KS5cbiAgICAgKi9cbiAgICBfc2F2ZUluc3RhbmNlUHJvcGVydGllcygpIHtcbiAgICAgICAgLy8gVXNlIGZvckVhY2ggc28gdGhpcyB3b3JrcyBldmVuIGlmIGZvci9vZiBsb29wcyBhcmUgY29tcGlsZWQgdG8gZm9yIGxvb3BzXG4gICAgICAgIC8vIGV4cGVjdGluZyBhcnJheXNcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3RvclxuICAgICAgICAgICAgLl9jbGFzc1Byb3BlcnRpZXMuZm9yRWFjaCgoX3YsIHApID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzW3BdO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzW3BdO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5faW5zdGFuY2VQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlUHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5faW5zdGFuY2VQcm9wZXJ0aWVzLnNldChwLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIHByZXZpb3VzbHkgc2F2ZWQgaW5zdGFuY2UgcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICBfYXBwbHlJbnN0YW5jZVByb3BlcnRpZXMoKSB7XG4gICAgICAgIC8vIFVzZSBmb3JFYWNoIHNvIHRoaXMgd29ya3MgZXZlbiBpZiBmb3Ivb2YgbG9vcHMgYXJlIGNvbXBpbGVkIHRvIGZvciBsb29wc1xuICAgICAgICAvLyBleHBlY3RpbmcgYXJyYXlzXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgdGhpcy5faW5zdGFuY2VQcm9wZXJ0aWVzLmZvckVhY2goKHYsIHApID0+IHRoaXNbcF0gPSB2KTtcbiAgICAgICAgdGhpcy5faW5zdGFuY2VQcm9wZXJ0aWVzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlU3RhdGUgPSB0aGlzLl91cGRhdGVTdGF0ZSB8IFNUQVRFX0hBU19DT05ORUNURUQ7XG4gICAgICAgIC8vIEVuc3VyZSBmaXJzdCBjb25uZWN0aW9uIGNvbXBsZXRlcyBhbiB1cGRhdGUuIFVwZGF0ZXMgY2Fubm90IGNvbXBsZXRlXG4gICAgICAgIC8vIGJlZm9yZSBjb25uZWN0aW9uIGFuZCBpZiBvbmUgaXMgcGVuZGluZyBjb25uZWN0aW9uIHRoZVxuICAgICAgICAvLyBgX2hhc0Nvbm5lY3Rpb25SZXNvbHZlcmAgd2lsbCBleGlzdC4gSWYgc28sIHJlc29sdmUgaXQgdG8gY29tcGxldGUgdGhlXG4gICAgICAgIC8vIHVwZGF0ZSwgb3RoZXJ3aXNlIHJlcXVlc3RVcGRhdGUuXG4gICAgICAgIGlmICh0aGlzLl9oYXNDb25uZWN0ZWRSZXNvbHZlcikge1xuICAgICAgICAgICAgdGhpcy5faGFzQ29ubmVjdGVkUmVzb2x2ZXIoKTtcbiAgICAgICAgICAgIHRoaXMuX2hhc0Nvbm5lY3RlZFJlc29sdmVyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFsbG93cyBmb3IgYHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKClgIGluIGV4dGVuc2lvbnMgd2hpbGVcbiAgICAgKiByZXNlcnZpbmcgdGhlIHBvc3NpYmlsaXR5IG9mIG1ha2luZyBub24tYnJlYWtpbmcgZmVhdHVyZSBhZGRpdGlvbnNcbiAgICAgKiB3aGVuIGRpc2Nvbm5lY3RpbmcgYXQgc29tZSBwb2ludCBpbiB0aGUgZnV0dXJlLlxuICAgICAqL1xuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTeW5jaHJvbml6ZXMgcHJvcGVydHkgdmFsdWVzIHdoZW4gYXR0cmlidXRlcyBjaGFuZ2UuXG4gICAgICovXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZCwgdmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2F0dHJpYnV0ZVRvUHJvcGVydHkobmFtZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9wcm9wZXJ0eVRvQXR0cmlidXRlKG5hbWUsIHZhbHVlLCBvcHRpb25zID0gZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb24pIHtcbiAgICAgICAgY29uc3QgY3RvciA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIGNvbnN0IGF0dHIgPSBjdG9yLl9hdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHkobmFtZSwgb3B0aW9ucyk7XG4gICAgICAgIGlmIChhdHRyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IGN0b3IuX3Byb3BlcnR5VmFsdWVUb0F0dHJpYnV0ZSh2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAvLyBhbiB1bmRlZmluZWQgdmFsdWUgZG9lcyBub3QgY2hhbmdlIHRoZSBhdHRyaWJ1dGUuXG4gICAgICAgICAgICBpZiAoYXR0clZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUcmFjayBpZiB0aGUgcHJvcGVydHkgaXMgYmVpbmcgcmVmbGVjdGVkIHRvIGF2b2lkXG4gICAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBwcm9wZXJ0eSBhZ2FpbiB2aWEgYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AuIE5vdGU6XG4gICAgICAgICAgICAvLyAxLiB0aGlzIHRha2VzIGFkdmFudGFnZSBvZiB0aGUgZmFjdCB0aGF0IHRoZSBjYWxsYmFjayBpcyBzeW5jaHJvbm91cy5cbiAgICAgICAgICAgIC8vIDIuIHdpbGwgYmVoYXZlIGluY29ycmVjdGx5IGlmIG11bHRpcGxlIGF0dHJpYnV0ZXMgYXJlIGluIHRoZSByZWFjdGlvblxuICAgICAgICAgICAgLy8gc3RhY2sgYXQgdGltZSBvZiBjYWxsaW5nLiBIb3dldmVyLCBzaW5jZSB3ZSBwcm9jZXNzIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgIC8vIGluIGB1cGRhdGVgIHRoaXMgc2hvdWxkIG5vdCBiZSBwb3NzaWJsZSAob3IgYW4gZXh0cmVtZSBjb3JuZXIgY2FzZVxuICAgICAgICAgICAgLy8gdGhhdCB3ZSdkIGxpa2UgdG8gZGlzY292ZXIpLlxuICAgICAgICAgICAgLy8gbWFyayBzdGF0ZSByZWZsZWN0aW5nXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVTdGF0ZSA9IHRoaXMuX3VwZGF0ZVN0YXRlIHwgU1RBVEVfSVNfUkVGTEVDVElOR19UT19BVFRSSUJVVEU7XG4gICAgICAgICAgICBpZiAoYXR0clZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYXJrIHN0YXRlIG5vdCByZWZsZWN0aW5nXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVTdGF0ZSA9IHRoaXMuX3VwZGF0ZVN0YXRlICYgflNUQVRFX0lTX1JFRkxFQ1RJTkdfVE9fQVRUUklCVVRFO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9hdHRyaWJ1dGVUb1Byb3BlcnR5KG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIC8vIFVzZSB0cmFja2luZyBpbmZvIHRvIGF2b2lkIGRlc2VyaWFsaXppbmcgYXR0cmlidXRlIHZhbHVlIGlmIGl0IHdhc1xuICAgICAgICAvLyBqdXN0IHNldCBmcm9tIGEgcHJvcGVydHkgc2V0dGVyLlxuICAgICAgICBpZiAodGhpcy5fdXBkYXRlU3RhdGUgJiBTVEFURV9JU19SRUZMRUNUSU5HX1RPX0FUVFJJQlVURSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICBjb25zdCBwcm9wTmFtZSA9IGN0b3IuX2F0dHJpYnV0ZVRvUHJvcGVydHlNYXAuZ2V0KG5hbWUpO1xuICAgICAgICBpZiAocHJvcE5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGN0b3IuX2NsYXNzUHJvcGVydGllcy5nZXQocHJvcE5hbWUpIHx8IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uO1xuICAgICAgICAgICAgLy8gbWFyayBzdGF0ZSByZWZsZWN0aW5nXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVTdGF0ZSA9IHRoaXMuX3VwZGF0ZVN0YXRlIHwgU1RBVEVfSVNfUkVGTEVDVElOR19UT19QUk9QRVJUWTtcbiAgICAgICAgICAgIHRoaXNbcHJvcE5hbWVdID1cbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgICAgICAgICAgY3Rvci5fcHJvcGVydHlWYWx1ZUZyb21BdHRyaWJ1dGUodmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgLy8gbWFyayBzdGF0ZSBub3QgcmVmbGVjdGluZ1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlU3RhdGUgPSB0aGlzLl91cGRhdGVTdGF0ZSAmIH5TVEFURV9JU19SRUZMRUNUSU5HX1RPX1BST1BFUlRZO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgcHJpdmF0ZSB2ZXJzaW9uIG9mIGByZXF1ZXN0VXBkYXRlYCBkb2VzIG5vdCBhY2Nlc3Mgb3IgcmV0dXJuIHRoZVxuICAgICAqIGB1cGRhdGVDb21wbGV0ZWAgcHJvbWlzZS4gVGhpcyBwcm9taXNlIGNhbiBiZSBvdmVycmlkZGVuIGFuZCBpcyB0aGVyZWZvcmVcbiAgICAgKiBub3QgZnJlZSB0byBhY2Nlc3MuXG4gICAgICovXG4gICAgX3JlcXVlc3RVcGRhdGUobmFtZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHNob3VsZFJlcXVlc3RVcGRhdGUgPSB0cnVlO1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgcHJvcGVydHkga2V5LCBwZXJmb3JtIHByb3BlcnR5IHVwZGF0ZSBzdGVwcy5cbiAgICAgICAgaWYgKG5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgY3RvciA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gY3Rvci5fY2xhc3NQcm9wZXJ0aWVzLmdldChuYW1lKSB8fCBkZWZhdWx0UHJvcGVydHlEZWNsYXJhdGlvbjtcbiAgICAgICAgICAgIGlmIChjdG9yLl92YWx1ZUhhc0NoYW5nZWQodGhpc1tuYW1lXSwgb2xkVmFsdWUsIG9wdGlvbnMuaGFzQ2hhbmdlZCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2NoYW5nZWRQcm9wZXJ0aWVzLmhhcyhuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGFuZ2VkUHJvcGVydGllcy5zZXQobmFtZSwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBZGQgdG8gcmVmbGVjdGluZyBwcm9wZXJ0aWVzIHNldC5cbiAgICAgICAgICAgICAgICAvLyBOb3RlLCBpdCdzIGltcG9ydGFudCB0aGF0IGV2ZXJ5IGNoYW5nZSBoYXMgYSBjaGFuY2UgdG8gYWRkIHRoZVxuICAgICAgICAgICAgICAgIC8vIHByb3BlcnR5IHRvIGBfcmVmbGVjdGluZ1Byb3BlcnRpZXNgLiBUaGlzIGVuc3VyZXMgc2V0dGluZ1xuICAgICAgICAgICAgICAgIC8vIGF0dHJpYnV0ZSArIHByb3BlcnR5IHJlZmxlY3RzIGNvcnJlY3RseS5cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5yZWZsZWN0ID09PSB0cnVlICYmXG4gICAgICAgICAgICAgICAgICAgICEodGhpcy5fdXBkYXRlU3RhdGUgJiBTVEFURV9JU19SRUZMRUNUSU5HX1RPX1BST1BFUlRZKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fcmVmbGVjdGluZ1Byb3BlcnRpZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVmbGVjdGluZ1Byb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVmbGVjdGluZ1Byb3BlcnRpZXMuc2V0KG5hbWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEFib3J0IHRoZSByZXF1ZXN0IGlmIHRoZSBwcm9wZXJ0eSBzaG91bGQgbm90IGJlIGNvbnNpZGVyZWQgY2hhbmdlZC5cbiAgICAgICAgICAgICAgICBzaG91bGRSZXF1ZXN0VXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9oYXNSZXF1ZXN0ZWRVcGRhdGUgJiYgc2hvdWxkUmVxdWVzdFVwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fZW5xdWV1ZVVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlcXVlc3RzIGFuIHVwZGF0ZSB3aGljaCBpcyBwcm9jZXNzZWQgYXN5bmNocm9ub3VzbHkuIFRoaXMgc2hvdWxkXG4gICAgICogYmUgY2FsbGVkIHdoZW4gYW4gZWxlbWVudCBzaG91bGQgdXBkYXRlIGJhc2VkIG9uIHNvbWUgc3RhdGUgbm90IHRyaWdnZXJlZFxuICAgICAqIGJ5IHNldHRpbmcgYSBwcm9wZXJ0eS4gSW4gdGhpcyBjYXNlLCBwYXNzIG5vIGFyZ3VtZW50cy4gSXQgc2hvdWxkIGFsc28gYmVcbiAgICAgKiBjYWxsZWQgd2hlbiBtYW51YWxseSBpbXBsZW1lbnRpbmcgYSBwcm9wZXJ0eSBzZXR0ZXIuIEluIHRoaXMgY2FzZSwgcGFzcyB0aGVcbiAgICAgKiBwcm9wZXJ0eSBgbmFtZWAgYW5kIGBvbGRWYWx1ZWAgdG8gZW5zdXJlIHRoYXQgYW55IGNvbmZpZ3VyZWQgcHJvcGVydHlcbiAgICAgKiBvcHRpb25zIGFyZSBob25vcmVkLiBSZXR1cm5zIHRoZSBgdXBkYXRlQ29tcGxldGVgIFByb21pc2Ugd2hpY2ggaXMgcmVzb2x2ZWRcbiAgICAgKiB3aGVuIHRoZSB1cGRhdGUgY29tcGxldGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWUge1Byb3BlcnR5S2V5fSAob3B0aW9uYWwpIG5hbWUgb2YgcmVxdWVzdGluZyBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSBvbGRWYWx1ZSB7YW55fSAob3B0aW9uYWwpIG9sZCB2YWx1ZSBvZiByZXF1ZXN0aW5nIHByb3BlcnR5XG4gICAgICogQHJldHVybnMge1Byb21pc2V9IEEgUHJvbWlzZSB0aGF0IGlzIHJlc29sdmVkIHdoZW4gdGhlIHVwZGF0ZSBjb21wbGV0ZXMuXG4gICAgICovXG4gICAgcmVxdWVzdFVwZGF0ZShuYW1lLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLl9yZXF1ZXN0VXBkYXRlKG5hbWUsIG9sZFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgdGhlIGVsZW1lbnQgdG8gYXN5bmNocm9ub3VzbHkgdXBkYXRlLlxuICAgICAqL1xuICAgIGFzeW5jIF9lbnF1ZXVlVXBkYXRlKCkge1xuICAgICAgICAvLyBNYXJrIHN0YXRlIHVwZGF0aW5nLi4uXG4gICAgICAgIHRoaXMuX3VwZGF0ZVN0YXRlID0gdGhpcy5fdXBkYXRlU3RhdGUgfCBTVEFURV9VUERBVEVfUkVRVUVTVEVEO1xuICAgICAgICBsZXQgcmVzb2x2ZTtcbiAgICAgICAgbGV0IHJlamVjdDtcbiAgICAgICAgY29uc3QgcHJldmlvdXNVcGRhdGVQcm9taXNlID0gdGhpcy5fdXBkYXRlUHJvbWlzZTtcbiAgICAgICAgdGhpcy5fdXBkYXRlUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSA9IHJlcztcbiAgICAgICAgICAgIHJlamVjdCA9IHJlajtcbiAgICAgICAgfSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBFbnN1cmUgYW55IHByZXZpb3VzIHVwZGF0ZSBoYXMgcmVzb2x2ZWQgYmVmb3JlIHVwZGF0aW5nLlxuICAgICAgICAgICAgLy8gVGhpcyBgYXdhaXRgIGFsc28gZW5zdXJlcyB0aGF0IHByb3BlcnR5IGNoYW5nZXMgYXJlIGJhdGNoZWQuXG4gICAgICAgICAgICBhd2FpdCBwcmV2aW91c1VwZGF0ZVByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIElnbm9yZSBhbnkgcHJldmlvdXMgZXJyb3JzLiBXZSBvbmx5IGNhcmUgdGhhdCB0aGUgcHJldmlvdXMgY3ljbGUgaXNcbiAgICAgICAgICAgIC8vIGRvbmUuIEFueSBlcnJvciBzaG91bGQgaGF2ZSBiZWVuIGhhbmRsZWQgaW4gdGhlIHByZXZpb3VzIHVwZGF0ZS5cbiAgICAgICAgfVxuICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIGVsZW1lbnQgaGFzIGNvbm5lY3RlZCBiZWZvcmUgdXBkYXRpbmcuXG4gICAgICAgIGlmICghdGhpcy5faGFzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzKSA9PiB0aGlzLl9oYXNDb25uZWN0ZWRSZXNvbHZlciA9IHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucGVyZm9ybVVwZGF0ZSgpO1xuICAgICAgICAgICAgLy8gSWYgYHBlcmZvcm1VcGRhdGVgIHJldHVybnMgYSBQcm9taXNlLCB3ZSBhd2FpdCBpdC4gVGhpcyBpcyBkb25lIHRvXG4gICAgICAgICAgICAvLyBlbmFibGUgY29vcmRpbmF0aW5nIHVwZGF0ZXMgd2l0aCBhIHNjaGVkdWxlci4gTm90ZSwgdGhlIHJlc3VsdCBpc1xuICAgICAgICAgICAgLy8gY2hlY2tlZCB0byBhdm9pZCBkZWxheWluZyBhbiBhZGRpdGlvbmFsIG1pY3JvdGFzayB1bmxlc3Mgd2UgbmVlZCB0by5cbiAgICAgICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUoIXRoaXMuX2hhc1JlcXVlc3RlZFVwZGF0ZSk7XG4gICAgfVxuICAgIGdldCBfaGFzQ29ubmVjdGVkKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuX3VwZGF0ZVN0YXRlICYgU1RBVEVfSEFTX0NPTk5FQ1RFRCk7XG4gICAgfVxuICAgIGdldCBfaGFzUmVxdWVzdGVkVXBkYXRlKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuX3VwZGF0ZVN0YXRlICYgU1RBVEVfVVBEQVRFX1JFUVVFU1RFRCk7XG4gICAgfVxuICAgIGdldCBoYXNVcGRhdGVkKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuX3VwZGF0ZVN0YXRlICYgU1RBVEVfSEFTX1VQREFURUQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhbiBlbGVtZW50IHVwZGF0ZS4gTm90ZSwgaWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBkdXJpbmcgdGhlXG4gICAgICogdXBkYXRlLCBgZmlyc3RVcGRhdGVkYCBhbmQgYHVwZGF0ZWRgIHdpbGwgbm90IGJlIGNhbGxlZC5cbiAgICAgKlxuICAgICAqIFlvdSBjYW4gb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gY2hhbmdlIHRoZSB0aW1pbmcgb2YgdXBkYXRlcy4gSWYgdGhpc1xuICAgICAqIG1ldGhvZCBpcyBvdmVycmlkZGVuLCBgc3VwZXIucGVyZm9ybVVwZGF0ZSgpYCBtdXN0IGJlIGNhbGxlZC5cbiAgICAgKlxuICAgICAqIEZvciBpbnN0YW5jZSwgdG8gc2NoZWR1bGUgdXBkYXRlcyB0byBvY2N1ciBqdXN0IGJlZm9yZSB0aGUgbmV4dCBmcmFtZTpcbiAgICAgKlxuICAgICAqIGBgYFxuICAgICAqIHByb3RlY3RlZCBhc3luYyBwZXJmb3JtVXBkYXRlKCk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgICAqICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiByZXNvbHZlKCkpKTtcbiAgICAgKiAgIHN1cGVyLnBlcmZvcm1VcGRhdGUoKTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcGVyZm9ybVVwZGF0ZSgpIHtcbiAgICAgICAgLy8gTWl4aW4gaW5zdGFuY2UgcHJvcGVydGllcyBvbmNlLCBpZiB0aGV5IGV4aXN0LlxuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2VQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICB0aGlzLl9hcHBseUluc3RhbmNlUHJvcGVydGllcygpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzaG91bGRVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2hhbmdlZFByb3BlcnRpZXMgPSB0aGlzLl9jaGFuZ2VkUHJvcGVydGllcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNob3VsZFVwZGF0ZSA9IHRoaXMuc2hvdWxkVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgIGlmIChzaG91bGRVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIFByZXZlbnQgYGZpcnN0VXBkYXRlZGAgYW5kIGB1cGRhdGVkYCBmcm9tIHJ1bm5pbmcgd2hlbiB0aGVyZSdzIGFuXG4gICAgICAgICAgICAvLyB1cGRhdGUgZXhjZXB0aW9uLlxuICAgICAgICAgICAgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgLy8gRW5zdXJlIGVsZW1lbnQgY2FuIGFjY2VwdCBhZGRpdGlvbmFsIHVwZGF0ZXMgYWZ0ZXIgYW4gZXhjZXB0aW9uLlxuICAgICAgICAgICAgdGhpcy5fbWFya1VwZGF0ZWQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvdWxkVXBkYXRlKSB7XG4gICAgICAgICAgICBpZiAoISh0aGlzLl91cGRhdGVTdGF0ZSAmIFNUQVRFX0hBU19VUERBVEVEKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVN0YXRlID0gdGhpcy5fdXBkYXRlU3RhdGUgfCBTVEFURV9IQVNfVVBEQVRFRDtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9tYXJrVXBkYXRlZCgpIHtcbiAgICAgICAgdGhpcy5fY2hhbmdlZFByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVN0YXRlID0gdGhpcy5fdXBkYXRlU3RhdGUgJiB+U1RBVEVfVVBEQVRFX1JFUVVFU1RFRDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBlbGVtZW50IGhhcyBjb21wbGV0ZWQgdXBkYXRpbmcuXG4gICAgICogVGhlIFByb21pc2UgdmFsdWUgaXMgYSBib29sZWFuIHRoYXQgaXMgYHRydWVgIGlmIHRoZSBlbGVtZW50IGNvbXBsZXRlZCB0aGVcbiAgICAgKiB1cGRhdGUgd2l0aG91dCB0cmlnZ2VyaW5nIGFub3RoZXIgdXBkYXRlLiBUaGUgUHJvbWlzZSByZXN1bHQgaXMgYGZhbHNlYCBpZlxuICAgICAqIGEgcHJvcGVydHkgd2FzIHNldCBpbnNpZGUgYHVwZGF0ZWQoKWAuIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBhblxuICAgICAqIGV4Y2VwdGlvbiB3YXMgdGhyb3duIGR1cmluZyB0aGUgdXBkYXRlLlxuICAgICAqXG4gICAgICogVG8gYXdhaXQgYWRkaXRpb25hbCBhc3luY2hyb25vdXMgd29yaywgb3ZlcnJpZGUgdGhlIGBfZ2V0VXBkYXRlQ29tcGxldGVgXG4gICAgICogbWV0aG9kLiBGb3IgZXhhbXBsZSwgaXQgaXMgc29tZXRpbWVzIHVzZWZ1bCB0byBhd2FpdCBhIHJlbmRlcmVkIGVsZW1lbnRcbiAgICAgKiBiZWZvcmUgZnVsZmlsbGluZyB0aGlzIFByb21pc2UuIFRvIGRvIHRoaXMsIGZpcnN0IGF3YWl0XG4gICAgICogYHN1cGVyLl9nZXRVcGRhdGVDb21wbGV0ZSgpYCwgdGhlbiBhbnkgc3Vic2VxdWVudCBzdGF0ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSByZXR1cm5zIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyBpZiB0aGVcbiAgICAgKiB1cGRhdGUgcmVzb2x2ZWQgd2l0aG91dCB0cmlnZ2VyaW5nIGFub3RoZXIgdXBkYXRlLlxuICAgICAqL1xuICAgIGdldCB1cGRhdGVDb21wbGV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldFVwZGF0ZUNvbXBsZXRlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHBvaW50IGZvciB0aGUgYHVwZGF0ZUNvbXBsZXRlYCBwcm9taXNlLlxuICAgICAqXG4gICAgICogSXQgaXMgbm90IHNhZmUgdG8gb3ZlcnJpZGUgdGhlIGB1cGRhdGVDb21wbGV0ZWAgZ2V0dGVyIGRpcmVjdGx5IGR1ZSB0byBhXG4gICAgICogbGltaXRhdGlvbiBpbiBUeXBlU2NyaXB0IHdoaWNoIG1lYW5zIGl0IGlzIG5vdCBwb3NzaWJsZSB0byBjYWxsIGFcbiAgICAgKiBzdXBlcmNsYXNzIGdldHRlciAoZS5nLiBgc3VwZXIudXBkYXRlQ29tcGxldGUudGhlbiguLi4pYCkgd2hlbiB0aGUgdGFyZ2V0XG4gICAgICogbGFuZ3VhZ2UgaXMgRVM1IChodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzMzOCkuXG4gICAgICogVGhpcyBtZXRob2Qgc2hvdWxkIGJlIG92ZXJyaWRkZW4gaW5zdGVhZC4gRm9yIGV4YW1wbGU6XG4gICAgICpcbiAgICAgKiAgIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgICAqICAgICBhc3luYyBfZ2V0VXBkYXRlQ29tcGxldGUoKSB7XG4gICAgICogICAgICAgYXdhaXQgc3VwZXIuX2dldFVwZGF0ZUNvbXBsZXRlKCk7XG4gICAgICogICAgICAgYXdhaXQgdGhpcy5fbXlDaGlsZC51cGRhdGVDb21wbGV0ZTtcbiAgICAgKiAgICAgfVxuICAgICAqICAgfVxuICAgICAqL1xuICAgIF9nZXRVcGRhdGVDb21wbGV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VwZGF0ZVByb21pc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnRyb2xzIHdoZXRoZXIgb3Igbm90IGB1cGRhdGVgIHNob3VsZCBiZSBjYWxsZWQgd2hlbiB0aGUgZWxlbWVudCByZXF1ZXN0c1xuICAgICAqIGFuIHVwZGF0ZS4gQnkgZGVmYXVsdCwgdGhpcyBtZXRob2QgYWx3YXlzIHJldHVybnMgYHRydWVgLCBidXQgdGhpcyBjYW4gYmVcbiAgICAgKiBjdXN0b21pemVkIHRvIGNvbnRyb2wgd2hlbiB0byB1cGRhdGUuXG4gICAgICpcbiAgICAgKiAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICAgKi9cbiAgICBzaG91bGRVcGRhdGUoX2NoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBlbGVtZW50LiBUaGlzIG1ldGhvZCByZWZsZWN0cyBwcm9wZXJ0eSB2YWx1ZXMgdG8gYXR0cmlidXRlcy5cbiAgICAgKiBJdCBjYW4gYmUgb3ZlcnJpZGRlbiB0byByZW5kZXIgYW5kIGtlZXAgdXBkYXRlZCBlbGVtZW50IERPTS5cbiAgICAgKiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlIHRoaXMgbWV0aG9kIHdpbGwgKm5vdCogdHJpZ2dlclxuICAgICAqIGFub3RoZXIgdXBkYXRlLlxuICAgICAqXG4gICAgICogKiBAcGFyYW0gX2NoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAgICovXG4gICAgdXBkYXRlKF9jaGFuZ2VkUHJvcGVydGllcykge1xuICAgICAgICBpZiAodGhpcy5fcmVmbGVjdGluZ1Byb3BlcnRpZXMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgdGhpcy5fcmVmbGVjdGluZ1Byb3BlcnRpZXMuc2l6ZSA+IDApIHtcbiAgICAgICAgICAgIC8vIFVzZSBmb3JFYWNoIHNvIHRoaXMgd29ya3MgZXZlbiBpZiBmb3Ivb2YgbG9vcHMgYXJlIGNvbXBpbGVkIHRvIGZvclxuICAgICAgICAgICAgLy8gbG9vcHMgZXhwZWN0aW5nIGFycmF5c1xuICAgICAgICAgICAgdGhpcy5fcmVmbGVjdGluZ1Byb3BlcnRpZXMuZm9yRWFjaCgodiwgaykgPT4gdGhpcy5fcHJvcGVydHlUb0F0dHJpYnV0ZShrLCB0aGlzW2tdLCB2KSk7XG4gICAgICAgICAgICB0aGlzLl9yZWZsZWN0aW5nUHJvcGVydGllcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW5ldmVyIHRoZSBlbGVtZW50IGlzIHVwZGF0ZWQuIEltcGxlbWVudCB0byBwZXJmb3JtXG4gICAgICogcG9zdC11cGRhdGluZyB0YXNrcyB2aWEgRE9NIEFQSXMsIGZvciBleGFtcGxlLCBmb2N1c2luZyBhbiBlbGVtZW50LlxuICAgICAqXG4gICAgICogU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsIHRyaWdnZXIgdGhlIGVsZW1lbnQgdG8gdXBkYXRlXG4gICAgICogYWdhaW4gYWZ0ZXIgdGhpcyB1cGRhdGUgY3ljbGUgY29tcGxldGVzLlxuICAgICAqXG4gICAgICogKiBAcGFyYW0gX2NoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAgICovXG4gICAgdXBkYXRlZChfY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSBlbGVtZW50IGlzIGZpcnN0IHVwZGF0ZWQuIEltcGxlbWVudCB0byBwZXJmb3JtIG9uZSB0aW1lXG4gICAgICogd29yayBvbiB0aGUgZWxlbWVudCBhZnRlciB1cGRhdGUuXG4gICAgICpcbiAgICAgKiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlIHRoaXMgbWV0aG9kIHdpbGwgdHJpZ2dlciB0aGUgZWxlbWVudCB0byB1cGRhdGVcbiAgICAgKiBhZ2FpbiBhZnRlciB0aGlzIHVwZGF0ZSBjeWNsZSBjb21wbGV0ZXMuXG4gICAgICpcbiAgICAgKiAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICAgKi9cbiAgICBmaXJzdFVwZGF0ZWQoX2NoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgfVxufVxuX2EgPSBmaW5hbGl6ZWQ7XG4vKipcbiAqIE1hcmtzIGNsYXNzIGFzIGhhdmluZyBmaW5pc2hlZCBjcmVhdGluZyBwcm9wZXJ0aWVzLlxuICovXG5VcGRhdGluZ0VsZW1lbnRbX2FdID0gdHJ1ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVwZGF0aW5nLWVsZW1lbnQuanMubWFwIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmNvbnN0IGxlZ2FjeUN1c3RvbUVsZW1lbnQgPSAodGFnTmFtZSwgY2xhenopID0+IHtcbiAgICB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIGNsYXp6KTtcbiAgICAvLyBDYXN0IGFzIGFueSBiZWNhdXNlIFRTIGRvZXNuJ3QgcmVjb2duaXplIHRoZSByZXR1cm4gdHlwZSBhcyBiZWluZyBhXG4gICAgLy8gc3VidHlwZSBvZiB0aGUgZGVjb3JhdGVkIGNsYXNzIHdoZW4gY2xhenogaXMgdHlwZWQgYXNcbiAgICAvLyBgQ29uc3RydWN0b3I8SFRNTEVsZW1lbnQ+YCBmb3Igc29tZSByZWFzb24uXG4gICAgLy8gYENvbnN0cnVjdG9yPEhUTUxFbGVtZW50PmAgaXMgaGVscGZ1bCB0byBtYWtlIHN1cmUgdGhlIGRlY29yYXRvciBpc1xuICAgIC8vIGFwcGxpZWQgdG8gZWxlbWVudHMgaG93ZXZlci5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgcmV0dXJuIGNsYXp6O1xufTtcbmNvbnN0IHN0YW5kYXJkQ3VzdG9tRWxlbWVudCA9ICh0YWdOYW1lLCBkZXNjcmlwdG9yKSA9PiB7XG4gICAgY29uc3QgeyBraW5kLCBlbGVtZW50cyB9ID0gZGVzY3JpcHRvcjtcbiAgICByZXR1cm4ge1xuICAgICAgICBraW5kLFxuICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgLy8gVGhpcyBjYWxsYmFjayBpcyBjYWxsZWQgb25jZSB0aGUgY2xhc3MgaXMgb3RoZXJ3aXNlIGZ1bGx5IGRlZmluZWRcbiAgICAgICAgZmluaXNoZXIoY2xhenopIHtcbiAgICAgICAgICAgIHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgY2xhenopO1xuICAgICAgICB9XG4gICAgfTtcbn07XG4vKipcbiAqIENsYXNzIGRlY29yYXRvciBmYWN0b3J5IHRoYXQgZGVmaW5lcyB0aGUgZGVjb3JhdGVkIGNsYXNzIGFzIGEgY3VzdG9tIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHRhZ05hbWUgdGhlIG5hbWUgb2YgdGhlIGN1c3RvbSBlbGVtZW50IHRvIGRlZmluZVxuICovXG5leHBvcnQgY29uc3QgY3VzdG9tRWxlbWVudCA9ICh0YWdOYW1lKSA9PiAoY2xhc3NPckRlc2NyaXB0b3IpID0+ICh0eXBlb2YgY2xhc3NPckRlc2NyaXB0b3IgPT09ICdmdW5jdGlvbicpID9cbiAgICBsZWdhY3lDdXN0b21FbGVtZW50KHRhZ05hbWUsIGNsYXNzT3JEZXNjcmlwdG9yKSA6XG4gICAgc3RhbmRhcmRDdXN0b21FbGVtZW50KHRhZ05hbWUsIGNsYXNzT3JEZXNjcmlwdG9yKTtcbmNvbnN0IHN0YW5kYXJkUHJvcGVydHkgPSAob3B0aW9ucywgZWxlbWVudCkgPT4ge1xuICAgIC8vIFdoZW4gZGVjb3JhdGluZyBhbiBhY2Nlc3NvciwgcGFzcyBpdCB0aHJvdWdoIGFuZCBhZGQgcHJvcGVydHkgbWV0YWRhdGEuXG4gICAgLy8gTm90ZSwgdGhlIGBoYXNPd25Qcm9wZXJ0eWAgY2hlY2sgaW4gYGNyZWF0ZVByb3BlcnR5YCBlbnN1cmVzIHdlIGRvbid0XG4gICAgLy8gc3RvbXAgb3ZlciB0aGUgdXNlcidzIGFjY2Vzc29yLlxuICAgIGlmIChlbGVtZW50LmtpbmQgPT09ICdtZXRob2QnICYmIGVsZW1lbnQuZGVzY3JpcHRvciAmJlxuICAgICAgICAhKCd2YWx1ZScgaW4gZWxlbWVudC5kZXNjcmlwdG9yKSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZWxlbWVudCwgeyBmaW5pc2hlcihjbGF6eikge1xuICAgICAgICAgICAgICAgIGNsYXp6LmNyZWF0ZVByb3BlcnR5KGVsZW1lbnQua2V5LCBvcHRpb25zKTtcbiAgICAgICAgICAgIH0gfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGVQcm9wZXJ0eSgpIHRha2VzIGNhcmUgb2YgZGVmaW5pbmcgdGhlIHByb3BlcnR5LCBidXQgd2Ugc3RpbGxcbiAgICAgICAgLy8gbXVzdCByZXR1cm4gc29tZSBraW5kIG9mIGRlc2NyaXB0b3IsIHNvIHJldHVybiBhIGRlc2NyaXB0b3IgZm9yIGFuXG4gICAgICAgIC8vIHVudXNlZCBwcm90b3R5cGUgZmllbGQuIFRoZSBmaW5pc2hlciBjYWxscyBjcmVhdGVQcm9wZXJ0eSgpLlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2luZDogJ2ZpZWxkJyxcbiAgICAgICAgICAgIGtleTogU3ltYm9sKCksXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICdvd24nLFxuICAgICAgICAgICAgZGVzY3JpcHRvcjoge30sXG4gICAgICAgICAgICAvLyBXaGVuIEBiYWJlbC9wbHVnaW4tcHJvcG9zYWwtZGVjb3JhdG9ycyBpbXBsZW1lbnRzIGluaXRpYWxpemVycyxcbiAgICAgICAgICAgIC8vIGRvIHRoaXMgaW5zdGVhZCBvZiB0aGUgaW5pdGlhbGl6ZXIgYmVsb3cuIFNlZTpcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvOTI2MCBleHRyYXM6IFtcbiAgICAgICAgICAgIC8vICAge1xuICAgICAgICAgICAgLy8gICAgIGtpbmQ6ICdpbml0aWFsaXplcicsXG4gICAgICAgICAgICAvLyAgICAgcGxhY2VtZW50OiAnb3duJyxcbiAgICAgICAgICAgIC8vICAgICBpbml0aWFsaXplcjogZGVzY3JpcHRvci5pbml0aWFsaXplcixcbiAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgLy8gXSxcbiAgICAgICAgICAgIGluaXRpYWxpemVyKCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5pbml0aWFsaXplciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2VsZW1lbnQua2V5XSA9IGVsZW1lbnQuaW5pdGlhbGl6ZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmluaXNoZXIoY2xhenopIHtcbiAgICAgICAgICAgICAgICBjbGF6ei5jcmVhdGVQcm9wZXJ0eShlbGVtZW50LmtleSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufTtcbmNvbnN0IGxlZ2FjeVByb3BlcnR5ID0gKG9wdGlvbnMsIHByb3RvLCBuYW1lKSA9PiB7XG4gICAgcHJvdG8uY29uc3RydWN0b3JcbiAgICAgICAgLmNyZWF0ZVByb3BlcnR5KG5hbWUsIG9wdGlvbnMpO1xufTtcbi8qKlxuICogQSBwcm9wZXJ0eSBkZWNvcmF0b3Igd2hpY2ggY3JlYXRlcyBhIExpdEVsZW1lbnQgcHJvcGVydHkgd2hpY2ggcmVmbGVjdHMgYVxuICogY29ycmVzcG9uZGluZyBhdHRyaWJ1dGUgdmFsdWUuIEEgYFByb3BlcnR5RGVjbGFyYXRpb25gIG1heSBvcHRpb25hbGx5IGJlXG4gKiBzdXBwbGllZCB0byBjb25maWd1cmUgcHJvcGVydHkgZmVhdHVyZXMuXG4gKlxuICogQEV4cG9ydERlY29yYXRlZEl0ZW1zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eShvcHRpb25zKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSBkZWNvcmF0b3JcbiAgICByZXR1cm4gKHByb3RvT3JEZXNjcmlwdG9yLCBuYW1lKSA9PiAobmFtZSAhPT0gdW5kZWZpbmVkKSA/XG4gICAgICAgIGxlZ2FjeVByb3BlcnR5KG9wdGlvbnMsIHByb3RvT3JEZXNjcmlwdG9yLCBuYW1lKSA6XG4gICAgICAgIHN0YW5kYXJkUHJvcGVydHkob3B0aW9ucywgcHJvdG9PckRlc2NyaXB0b3IpO1xufVxuLyoqXG4gKiBBIHByb3BlcnR5IGRlY29yYXRvciB0aGF0IGNvbnZlcnRzIGEgY2xhc3MgcHJvcGVydHkgaW50byBhIGdldHRlciB0aGF0XG4gKiBleGVjdXRlcyBhIHF1ZXJ5U2VsZWN0b3Igb24gdGhlIGVsZW1lbnQncyByZW5kZXJSb290LlxuICpcbiAqIEBFeHBvcnREZWNvcmF0ZWRJdGVtc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnkoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gKHByb3RvT3JEZXNjcmlwdG9yLCBcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55IGRlY29yYXRvclxuICAgIG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJSb290LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAobmFtZSAhPT0gdW5kZWZpbmVkKSA/XG4gICAgICAgICAgICBsZWdhY3lRdWVyeShkZXNjcmlwdG9yLCBwcm90b09yRGVzY3JpcHRvciwgbmFtZSkgOlxuICAgICAgICAgICAgc3RhbmRhcmRRdWVyeShkZXNjcmlwdG9yLCBwcm90b09yRGVzY3JpcHRvcik7XG4gICAgfTtcbn1cbi8qKlxuICogQSBwcm9wZXJ0eSBkZWNvcmF0b3IgdGhhdCBjb252ZXJ0cyBhIGNsYXNzIHByb3BlcnR5IGludG8gYSBnZXR0ZXJcbiAqIHRoYXQgZXhlY3V0ZXMgYSBxdWVyeVNlbGVjdG9yQWxsIG9uIHRoZSBlbGVtZW50J3MgcmVuZGVyUm9vdC5cbiAqXG4gKiBARXhwb3J0RGVjb3JhdGVkSXRlbXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5QWxsKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIChwcm90b09yRGVzY3JpcHRvciwgXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSBkZWNvcmF0b3JcbiAgICBuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyUm9vdC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKG5hbWUgIT09IHVuZGVmaW5lZCkgP1xuICAgICAgICAgICAgbGVnYWN5UXVlcnkoZGVzY3JpcHRvciwgcHJvdG9PckRlc2NyaXB0b3IsIG5hbWUpIDpcbiAgICAgICAgICAgIHN0YW5kYXJkUXVlcnkoZGVzY3JpcHRvciwgcHJvdG9PckRlc2NyaXB0b3IpO1xuICAgIH07XG59XG5jb25zdCBsZWdhY3lRdWVyeSA9IChkZXNjcmlwdG9yLCBwcm90bywgbmFtZSkgPT4ge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgbmFtZSwgZGVzY3JpcHRvcik7XG59O1xuY29uc3Qgc3RhbmRhcmRRdWVyeSA9IChkZXNjcmlwdG9yLCBlbGVtZW50KSA9PiAoe1xuICAgIGtpbmQ6ICdtZXRob2QnLFxuICAgIHBsYWNlbWVudDogJ3Byb3RvdHlwZScsXG4gICAga2V5OiBlbGVtZW50LmtleSxcbiAgICBkZXNjcmlwdG9yLFxufSk7XG5jb25zdCBzdGFuZGFyZEV2ZW50T3B0aW9ucyA9IChvcHRpb25zLCBlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGVsZW1lbnQsIHsgZmluaXNoZXIoY2xhenopIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY2xhenoucHJvdG90eXBlW2VsZW1lbnQua2V5XSwgb3B0aW9ucyk7XG4gICAgICAgIH0gfSk7XG59O1xuY29uc3QgbGVnYWN5RXZlbnRPcHRpb25zID0gXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55IGxlZ2FjeSBkZWNvcmF0b3JcbihvcHRpb25zLCBwcm90bywgbmFtZSkgPT4ge1xuICAgIE9iamVjdC5hc3NpZ24ocHJvdG9bbmFtZV0sIG9wdGlvbnMpO1xufTtcbi8qKlxuICogQWRkcyBldmVudCBsaXN0ZW5lciBvcHRpb25zIHRvIGEgbWV0aG9kIHVzZWQgYXMgYW4gZXZlbnQgbGlzdGVuZXIgaW4gYVxuICogbGl0LWh0bWwgdGVtcGxhdGUuXG4gKlxuICogQHBhcmFtIG9wdGlvbnMgQW4gb2JqZWN0IHRoYXQgc3BlY2lmaXMgZXZlbnQgbGlzdGVuZXIgb3B0aW9ucyBhcyBhY2NlcHRlZCBieVxuICogYEV2ZW50VGFyZ2V0I2FkZEV2ZW50TGlzdGVuZXJgIGFuZCBgRXZlbnRUYXJnZXQjcmVtb3ZlRXZlbnRMaXN0ZW5lcmAuXG4gKlxuICogQ3VycmVudCBicm93c2VycyBzdXBwb3J0IHRoZSBgY2FwdHVyZWAsIGBwYXNzaXZlYCwgYW5kIGBvbmNlYCBvcHRpb25zLiBTZWU6XG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRXZlbnRUYXJnZXQvYWRkRXZlbnRMaXN0ZW5lciNQYXJhbWV0ZXJzXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgY2xhc3MgTXlFbGVtZW50IHtcbiAqXG4gKiAgICAgICBjbGlja2VkID0gZmFsc2U7XG4gKlxuICogICAgICAgcmVuZGVyKCkge1xuICogICAgICAgICByZXR1cm4gaHRtbGA8ZGl2IEBjbGljaz0ke3RoaXMuX29uQ2xpY2t9YD48YnV0dG9uPjwvYnV0dG9uPjwvZGl2PmA7XG4gKiAgICAgICB9XG4gKlxuICogICAgICAgQGV2ZW50T3B0aW9ucyh7Y2FwdHVyZTogdHJ1ZX0pXG4gKiAgICAgICBfb25DbGljayhlKSB7XG4gKiAgICAgICAgIHRoaXMuY2xpY2tlZCA9IHRydWU7XG4gKiAgICAgICB9XG4gKiAgICAgfVxuICovXG5leHBvcnQgY29uc3QgZXZlbnRPcHRpb25zID0gKG9wdGlvbnMpID0+IFxuLy8gUmV0dXJuIHZhbHVlIHR5cGVkIGFzIGFueSB0byBwcmV2ZW50IFR5cGVTY3JpcHQgZnJvbSBjb21wbGFpbmluZyB0aGF0XG4vLyBzdGFuZGFyZCBkZWNvcmF0b3IgZnVuY3Rpb24gc2lnbmF0dXJlIGRvZXMgbm90IG1hdGNoIFR5cGVTY3JpcHQgZGVjb3JhdG9yXG4vLyBzaWduYXR1cmVcbi8vIFRPRE8oa3NjaGFhZik6IHVuY2xlYXIgd2h5IGl0IHdhcyBvbmx5IGZhaWxpbmcgb24gdGhpcyBkZWNvcmF0b3IgYW5kIG5vdFxuLy8gdGhlIG90aGVyc1xuKChwcm90b09yRGVzY3JpcHRvciwgbmFtZSkgPT4gKG5hbWUgIT09IHVuZGVmaW5lZCkgP1xuICAgIGxlZ2FjeUV2ZW50T3B0aW9ucyhvcHRpb25zLCBwcm90b09yRGVzY3JpcHRvciwgbmFtZSkgOlxuICAgIHN0YW5kYXJkRXZlbnRPcHRpb25zKG9wdGlvbnMsIHByb3RvT3JEZXNjcmlwdG9yKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWNvcmF0b3JzLmpzLm1hcCIsICIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTkgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmV4cG9ydCBjb25zdCBzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMgPSAoJ2Fkb3B0ZWRTdHlsZVNoZWV0cycgaW4gRG9jdW1lbnQucHJvdG90eXBlKSAmJlxuICAgICgncmVwbGFjZScgaW4gQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUpO1xuY29uc3QgY29uc3RydWN0aW9uVG9rZW4gPSBTeW1ib2woKTtcbmV4cG9ydCBjbGFzcyBDU1NSZXN1bHQge1xuICAgIGNvbnN0cnVjdG9yKGNzc1RleHQsIHNhZmVUb2tlbikge1xuICAgICAgICBpZiAoc2FmZVRva2VuICE9PSBjb25zdHJ1Y3Rpb25Ub2tlbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDU1NSZXN1bHQgaXMgbm90IGNvbnN0cnVjdGFibGUuIFVzZSBgdW5zYWZlQ1NTYCBvciBgY3NzYCBpbnN0ZWFkLicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3NzVGV4dCA9IGNzc1RleHQ7XG4gICAgfVxuICAgIC8vIE5vdGUsIHRoaXMgaXMgYSBnZXR0ZXIgc28gdGhhdCBpdCdzIGxhenkuIEluIHByYWN0aWNlLCB0aGlzIG1lYW5zXG4gICAgLy8gc3R5bGVzaGVldHMgYXJlIG5vdCBjcmVhdGVkIHVudGlsIHRoZSBmaXJzdCBlbGVtZW50IGluc3RhbmNlIGlzIG1hZGUuXG4gICAgZ2V0IHN0eWxlU2hlZXQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zdHlsZVNoZWV0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIE5vdGUsIGlmIGBhZG9wdGVkU3R5bGVTaGVldHNgIGlzIHN1cHBvcnRlZCB0aGVuIHdlIGFzc3VtZSBDU1NTdHlsZVNoZWV0XG4gICAgICAgICAgICAvLyBpcyBjb25zdHJ1Y3RhYmxlLlxuICAgICAgICAgICAgaWYgKHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0eWxlU2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0eWxlU2hlZXQucmVwbGFjZVN5bmModGhpcy5jc3NUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0eWxlU2hlZXQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9zdHlsZVNoZWV0O1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3NzVGV4dDtcbiAgICB9XG59XG4vKipcbiAqIFdyYXAgYSB2YWx1ZSBmb3IgaW50ZXJwb2xhdGlvbiBpbiBhIGNzcyB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbC5cbiAqXG4gKiBUaGlzIGlzIHVuc2FmZSBiZWNhdXNlIHVudHJ1c3RlZCBDU1MgdGV4dCBjYW4gYmUgdXNlZCB0byBwaG9uZSBob21lXG4gKiBvciBleGZpbHRyYXRlIGRhdGEgdG8gYW4gYXR0YWNrZXIgY29udHJvbGxlZCBzaXRlLiBUYWtlIGNhcmUgdG8gb25seSB1c2VcbiAqIHRoaXMgd2l0aCB0cnVzdGVkIGlucHV0LlxuICovXG5leHBvcnQgY29uc3QgdW5zYWZlQ1NTID0gKHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBDU1NSZXN1bHQoU3RyaW5nKHZhbHVlKSwgY29uc3RydWN0aW9uVG9rZW4pO1xufTtcbmNvbnN0IHRleHRGcm9tQ1NTUmVzdWx0ID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQ1NTUmVzdWx0KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5jc3NUZXh0O1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVmFsdWUgcGFzc2VkIHRvICdjc3MnIGZ1bmN0aW9uIG11c3QgYmUgYSAnY3NzJyBmdW5jdGlvbiByZXN1bHQ6ICR7dmFsdWV9LiBVc2UgJ3Vuc2FmZUNTUycgdG8gcGFzcyBub24tbGl0ZXJhbCB2YWx1ZXMsIGJ1dFxuICAgICAgICAgICAgdGFrZSBjYXJlIHRvIGVuc3VyZSBwYWdlIHNlY3VyaXR5LmApO1xuICAgIH1cbn07XG4vKipcbiAqIFRlbXBsYXRlIHRhZyB3aGljaCB3aGljaCBjYW4gYmUgdXNlZCB3aXRoIExpdEVsZW1lbnQncyBgc3R5bGVgIHByb3BlcnR5IHRvXG4gKiBzZXQgZWxlbWVudCBzdHlsZXMuIEZvciBzZWN1cml0eSByZWFzb25zLCBvbmx5IGxpdGVyYWwgc3RyaW5nIHZhbHVlcyBtYXkgYmVcbiAqIHVzZWQuIFRvIGluY29ycG9yYXRlIG5vbi1saXRlcmFsIHZhbHVlcyBgdW5zYWZlQ1NTYCBtYXkgYmUgdXNlZCBpbnNpZGUgYVxuICogdGVtcGxhdGUgc3RyaW5nIHBhcnQuXG4gKi9cbmV4cG9ydCBjb25zdCBjc3MgPSAoc3RyaW5ncywgLi4udmFsdWVzKSA9PiB7XG4gICAgY29uc3QgY3NzVGV4dCA9IHZhbHVlcy5yZWR1Y2UoKGFjYywgdiwgaWR4KSA9PiBhY2MgKyB0ZXh0RnJvbUNTU1Jlc3VsdCh2KSArIHN0cmluZ3NbaWR4ICsgMV0sIHN0cmluZ3NbMF0pO1xuICAgIHJldHVybiBuZXcgQ1NTUmVzdWx0KGNzc1RleHQsIGNvbnN0cnVjdGlvblRva2VuKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jc3MtdGFnLmpzLm1hcCIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5pbXBvcnQgeyBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gJ2xpdC1odG1sJztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ2xpdC1odG1sL2xpYi9zaGFkeS1yZW5kZXIuanMnO1xuaW1wb3J0IHsgVXBkYXRpbmdFbGVtZW50IH0gZnJvbSAnLi9saWIvdXBkYXRpbmctZWxlbWVudC5qcyc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi91cGRhdGluZy1lbGVtZW50LmpzJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2RlY29yYXRvcnMuanMnO1xuZXhwb3J0IHsgaHRtbCwgc3ZnLCBUZW1wbGF0ZVJlc3VsdCwgU1ZHVGVtcGxhdGVSZXN1bHQgfSBmcm9tICdsaXQtaHRtbC9saXQtaHRtbC5qcyc7XG5pbXBvcnQgeyBzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMgfSBmcm9tICcuL2xpYi9jc3MtdGFnLmpzJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2Nzcy10YWcuanMnO1xuLy8gSU1QT1JUQU5UOiBkbyBub3QgY2hhbmdlIHRoZSBwcm9wZXJ0eSBuYW1lIG9yIHRoZSBhc3NpZ25tZW50IGV4cHJlc3Npb24uXG4vLyBUaGlzIGxpbmUgd2lsbCBiZSB1c2VkIGluIHJlZ2V4ZXMgdG8gc2VhcmNoIGZvciBMaXRFbGVtZW50IHVzYWdlLlxuLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogaW5qZWN0IHZlcnNpb24gbnVtYmVyIGF0IGJ1aWxkIHRpbWVcbih3aW5kb3dbJ2xpdEVsZW1lbnRWZXJzaW9ucyddIHx8ICh3aW5kb3dbJ2xpdEVsZW1lbnRWZXJzaW9ucyddID0gW10pKVxuICAgIC5wdXNoKCcyLjIuMScpO1xuLyoqXG4gKiBNaW5pbWFsIGltcGxlbWVudGF0aW9uIG9mIEFycmF5LnByb3RvdHlwZS5mbGF0XG4gKiBAcGFyYW0gYXJyIHRoZSBhcnJheSB0byBmbGF0dGVuXG4gKiBAcGFyYW0gcmVzdWx0IHRoZSBhY2N1bWxhdGVkIHJlc3VsdFxuICovXG5mdW5jdGlvbiBhcnJheUZsYXQoc3R5bGVzLCByZXN1bHQgPSBbXSkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBzdHlsZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBzdHlsZXNbaV07XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgYXJyYXlGbGF0KHZhbHVlLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG4vKiogRGVlcGx5IGZsYXR0ZW5zIHN0eWxlcyBhcnJheS4gVXNlcyBuYXRpdmUgZmxhdCBpZiBhdmFpbGFibGUuICovXG5jb25zdCBmbGF0dGVuU3R5bGVzID0gKHN0eWxlcykgPT4gc3R5bGVzLmZsYXQgPyBzdHlsZXMuZmxhdChJbmZpbml0eSkgOiBhcnJheUZsYXQoc3R5bGVzKTtcbmV4cG9ydCBjbGFzcyBMaXRFbGVtZW50IGV4dGVuZHMgVXBkYXRpbmdFbGVtZW50IHtcbiAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICBzdGF0aWMgZmluYWxpemUoKSB7XG4gICAgICAgIC8vIFRoZSBDbG9zdXJlIEpTIENvbXBpbGVyIGRvZXMgbm90IGFsd2F5cyBwcmVzZXJ2ZSB0aGUgY29ycmVjdCBcInRoaXNcIlxuICAgICAgICAvLyB3aGVuIGNhbGxpbmcgc3RhdGljIHN1cGVyIG1ldGhvZHMgKGIvMTM3NDYwMjQzKSwgc28gZXhwbGljaXRseSBiaW5kLlxuICAgICAgICBzdXBlci5maW5hbGl6ZS5jYWxsKHRoaXMpO1xuICAgICAgICAvLyBQcmVwYXJlIHN0eWxpbmcgdGhhdCBpcyBzdGFtcGVkIGF0IGZpcnN0IHJlbmRlciB0aW1lLiBTdHlsaW5nXG4gICAgICAgIC8vIGlzIGJ1aWx0IGZyb20gdXNlciBwcm92aWRlZCBgc3R5bGVzYCBvciBpcyBpbmhlcml0ZWQgZnJvbSB0aGUgc3VwZXJjbGFzcy5cbiAgICAgICAgdGhpcy5fc3R5bGVzID1cbiAgICAgICAgICAgIHRoaXMuaGFzT3duUHJvcGVydHkoSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSgnc3R5bGVzJywgdGhpcykpID9cbiAgICAgICAgICAgICAgICB0aGlzLl9nZXRVbmlxdWVTdHlsZXMoKSA6XG4gICAgICAgICAgICAgICAgdGhpcy5fc3R5bGVzIHx8IFtdO1xuICAgIH1cbiAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICBzdGF0aWMgX2dldFVuaXF1ZVN0eWxlcygpIHtcbiAgICAgICAgLy8gVGFrZSBjYXJlIG5vdCB0byBjYWxsIGB0aGlzLnN0eWxlc2AgbXVsdGlwbGUgdGltZXMgc2luY2UgdGhpcyBnZW5lcmF0ZXNcbiAgICAgICAgLy8gbmV3IENTU1Jlc3VsdHMgZWFjaCB0aW1lLlxuICAgICAgICAvLyBUT0RPKHNvcnZlbGwpOiBTaW5jZSB3ZSBkbyBub3QgY2FjaGUgQ1NTUmVzdWx0cyBieSBpbnB1dCwgYW55XG4gICAgICAgIC8vIHNoYXJlZCBzdHlsZXMgd2lsbCBnZW5lcmF0ZSBuZXcgc3R5bGVzaGVldCBvYmplY3RzLCB3aGljaCBpcyB3YXN0ZWZ1bC5cbiAgICAgICAgLy8gVGhpcyBzaG91bGQgYmUgYWRkcmVzc2VkIHdoZW4gYSBicm93c2VyIHNoaXBzIGNvbnN0cnVjdGFibGVcbiAgICAgICAgLy8gc3R5bGVzaGVldHMuXG4gICAgICAgIGNvbnN0IHVzZXJTdHlsZXMgPSB0aGlzLnN0eWxlcztcbiAgICAgICAgY29uc3Qgc3R5bGVzID0gW107XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHVzZXJTdHlsZXMpKSB7XG4gICAgICAgICAgICBjb25zdCBmbGF0U3R5bGVzID0gZmxhdHRlblN0eWxlcyh1c2VyU3R5bGVzKTtcbiAgICAgICAgICAgIC8vIEFzIGEgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uIHRvIGF2b2lkIGR1cGxpY2F0ZWQgc3R5bGluZyB0aGF0IGNhblxuICAgICAgICAgICAgLy8gb2NjdXIgZXNwZWNpYWxseSB3aGVuIGNvbXBvc2luZyB2aWEgc3ViY2xhc3NpbmcsIGRlLWR1cGxpY2F0ZSBzdHlsZXNcbiAgICAgICAgICAgIC8vIHByZXNlcnZpbmcgdGhlIGxhc3QgaXRlbSBpbiB0aGUgbGlzdC4gVGhlIGxhc3QgaXRlbSBpcyBrZXB0IHRvXG4gICAgICAgICAgICAvLyB0cnkgdG8gcHJlc2VydmUgY2FzY2FkZSBvcmRlciB3aXRoIHRoZSBhc3N1bXB0aW9uIHRoYXQgaXQncyBtb3N0XG4gICAgICAgICAgICAvLyBpbXBvcnRhbnQgdGhhdCBsYXN0IGFkZGVkIHN0eWxlcyBvdmVycmlkZSBwcmV2aW91cyBzdHlsZXMuXG4gICAgICAgICAgICBjb25zdCBzdHlsZVNldCA9IGZsYXRTdHlsZXMucmVkdWNlUmlnaHQoKHNldCwgcykgPT4ge1xuICAgICAgICAgICAgICAgIHNldC5hZGQocyk7XG4gICAgICAgICAgICAgICAgLy8gb24gSUUgc2V0LmFkZCBkb2VzIG5vdCByZXR1cm4gdGhlIHNldC5cbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0O1xuICAgICAgICAgICAgfSwgbmV3IFNldCgpKTtcbiAgICAgICAgICAgIC8vIEFycmF5LmZyb20gZG9lcyBub3Qgd29yayBvbiBTZXQgaW4gSUVcbiAgICAgICAgICAgIHN0eWxlU2V0LmZvckVhY2goKHYpID0+IHN0eWxlcy51bnNoaWZ0KHYpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh1c2VyU3R5bGVzKSB7XG4gICAgICAgICAgICBzdHlsZXMucHVzaCh1c2VyU3R5bGVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGVzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBlbGVtZW50IGluaXRpYWxpemF0aW9uLiBCeSBkZWZhdWx0IHRoaXMgY2FsbHMgYGNyZWF0ZVJlbmRlclJvb3RgXG4gICAgICogdG8gY3JlYXRlIHRoZSBlbGVtZW50IGByZW5kZXJSb290YCBub2RlIGFuZCBjYXB0dXJlcyBhbnkgcHJlLXNldCB2YWx1ZXMgZm9yXG4gICAgICogcmVnaXN0ZXJlZCBwcm9wZXJ0aWVzLlxuICAgICAqL1xuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHN1cGVyLmluaXRpYWxpemUoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJSb290ID1cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUmVuZGVyUm9vdCgpO1xuICAgICAgICAvLyBOb3RlLCBpZiByZW5kZXJSb290IGlzIG5vdCBhIHNoYWRvd1Jvb3QsIHN0eWxlcyB3b3VsZC9jb3VsZCBhcHBseSB0byB0aGVcbiAgICAgICAgLy8gZWxlbWVudCdzIGdldFJvb3ROb2RlKCkuIFdoaWxlIHRoaXMgY291bGQgYmUgZG9uZSwgd2UncmUgY2hvb3Npbmcgbm90IHRvXG4gICAgICAgIC8vIHN1cHBvcnQgdGhpcyBub3cgc2luY2UgaXQgd291bGQgcmVxdWlyZSBkaWZmZXJlbnQgbG9naWMgYXJvdW5kIGRlLWR1cGluZy5cbiAgICAgICAgaWYgKHdpbmRvdy5TaGFkb3dSb290ICYmIHRoaXMucmVuZGVyUm9vdCBpbnN0YW5jZW9mIHdpbmRvdy5TaGFkb3dSb290KSB7XG4gICAgICAgICAgICB0aGlzLmFkb3B0U3R5bGVzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbm9kZSBpbnRvIHdoaWNoIHRoZSBlbGVtZW50IHNob3VsZCByZW5kZXIgYW5kIGJ5IGRlZmF1bHRcbiAgICAgKiBjcmVhdGVzIGFuZCByZXR1cm5zIGFuIG9wZW4gc2hhZG93Um9vdC4gSW1wbGVtZW50IHRvIGN1c3RvbWl6ZSB3aGVyZSB0aGVcbiAgICAgKiBlbGVtZW50J3MgRE9NIGlzIHJlbmRlcmVkLiBGb3IgZXhhbXBsZSwgdG8gcmVuZGVyIGludG8gdGhlIGVsZW1lbnQnc1xuICAgICAqIGNoaWxkTm9kZXMsIHJldHVybiBgdGhpc2AuXG4gICAgICogQHJldHVybnMge0VsZW1lbnR8RG9jdW1lbnRGcmFnbWVudH0gUmV0dXJucyBhIG5vZGUgaW50byB3aGljaCB0byByZW5kZXIuXG4gICAgICovXG4gICAgY3JlYXRlUmVuZGVyUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIHN0eWxpbmcgdG8gdGhlIGVsZW1lbnQgc2hhZG93Um9vdCB1c2luZyB0aGUgYHN0YXRpYyBnZXQgc3R5bGVzYFxuICAgICAqIHByb3BlcnR5LiBTdHlsaW5nIHdpbGwgYXBwbHkgdXNpbmcgYHNoYWRvd1Jvb3QuYWRvcHRlZFN0eWxlU2hlZXRzYCB3aGVyZVxuICAgICAqIGF2YWlsYWJsZSBhbmQgd2lsbCBmYWxsYmFjayBvdGhlcndpc2UuIFdoZW4gU2hhZG93IERPTSBpcyBwb2x5ZmlsbGVkLFxuICAgICAqIFNoYWR5Q1NTIHNjb3BlcyBzdHlsZXMgYW5kIGFkZHMgdGhlbSB0byB0aGUgZG9jdW1lbnQuIFdoZW4gU2hhZG93IERPTVxuICAgICAqIGlzIGF2YWlsYWJsZSBidXQgYGFkb3B0ZWRTdHlsZVNoZWV0c2AgaXMgbm90LCBzdHlsZXMgYXJlIGFwcGVuZGVkIHRvIHRoZVxuICAgICAqIGVuZCBvZiB0aGUgYHNoYWRvd1Jvb3RgIHRvIFttaW1pYyBzcGVjXG4gICAgICogYmVoYXZpb3JdKGh0dHBzOi8vd2ljZy5naXRodWIuaW8vY29uc3RydWN0LXN0eWxlc2hlZXRzLyN1c2luZy1jb25zdHJ1Y3RlZC1zdHlsZXNoZWV0cykuXG4gICAgICovXG4gICAgYWRvcHRTdHlsZXMoKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IHRoaXMuY29uc3RydWN0b3IuX3N0eWxlcztcbiAgICAgICAgaWYgKHN0eWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaGVyZSBhcmUgdGhyZWUgc2VwYXJhdGUgY2FzZXMgaGVyZSBiYXNlZCBvbiBTaGFkb3cgRE9NIHN1cHBvcnQuXG4gICAgICAgIC8vICgxKSBzaGFkb3dSb290IHBvbHlmaWxsZWQ6IHVzZSBTaGFkeUNTU1xuICAgICAgICAvLyAoMikgc2hhZG93Um9vdC5hZG9wdGVkU3R5bGVTaGVldHMgYXZhaWxhYmxlOiB1c2UgaXQuXG4gICAgICAgIC8vICgzKSBzaGFkb3dSb290LmFkb3B0ZWRTdHlsZVNoZWV0cyBwb2x5ZmlsbGVkOiBhcHBlbmQgc3R5bGVzIGFmdGVyXG4gICAgICAgIC8vIHJlbmRlcmluZ1xuICAgICAgICBpZiAod2luZG93LlNoYWR5Q1NTICE9PSB1bmRlZmluZWQgJiYgIXdpbmRvdy5TaGFkeUNTUy5uYXRpdmVTaGFkb3cpIHtcbiAgICAgICAgICAgIHdpbmRvdy5TaGFkeUNTUy5TY29waW5nU2hpbS5wcmVwYXJlQWRvcHRlZENzc1RleHQoc3R5bGVzLm1hcCgocykgPT4gcy5jc3NUZXh0KSwgdGhpcy5sb2NhbE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cykge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJSb290LmFkb3B0ZWRTdHlsZVNoZWV0cyA9XG4gICAgICAgICAgICAgICAgc3R5bGVzLm1hcCgocykgPT4gcy5zdHlsZVNoZWV0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRoaXMgbXVzdCBiZSBkb25lIGFmdGVyIHJlbmRlcmluZyBzbyB0aGUgYWN0dWFsIHN0eWxlIGluc2VydGlvbiBpcyBkb25lXG4gICAgICAgICAgICAvLyBpbiBgdXBkYXRlYC5cbiAgICAgICAgICAgIHRoaXMuX25lZWRzU2hpbUFkb3B0ZWRTdHlsZVNoZWV0cyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICAgIC8vIE5vdGUsIGZpcnN0IHVwZGF0ZS9yZW5kZXIgaGFuZGxlcyBzdHlsZUVsZW1lbnQgc28gd2Ugb25seSBjYWxsIHRoaXMgaWZcbiAgICAgICAgLy8gY29ubmVjdGVkIGFmdGVyIGZpcnN0IHVwZGF0ZS5cbiAgICAgICAgaWYgKHRoaXMuaGFzVXBkYXRlZCAmJiB3aW5kb3cuU2hhZHlDU1MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgd2luZG93LlNoYWR5Q1NTLnN0eWxlRWxlbWVudCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBlbGVtZW50LiBUaGlzIG1ldGhvZCByZWZsZWN0cyBwcm9wZXJ0eSB2YWx1ZXMgdG8gYXR0cmlidXRlc1xuICAgICAqIGFuZCBjYWxscyBgcmVuZGVyYCB0byByZW5kZXIgRE9NIHZpYSBsaXQtaHRtbC4gU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZVxuICAgICAqIHRoaXMgbWV0aG9kIHdpbGwgKm5vdCogdHJpZ2dlciBhbm90aGVyIHVwZGF0ZS5cbiAgICAgKiAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICAgKi9cbiAgICB1cGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgY29uc3QgdGVtcGxhdGVSZXN1bHQgPSB0aGlzLnJlbmRlcigpO1xuICAgICAgICBpZiAodGVtcGxhdGVSZXN1bHQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3RvclxuICAgICAgICAgICAgICAgIC5yZW5kZXIodGVtcGxhdGVSZXN1bHQsIHRoaXMucmVuZGVyUm9vdCwgeyBzY29wZU5hbWU6IHRoaXMubG9jYWxOYW1lLCBldmVudENvbnRleHQ6IHRoaXMgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2hlbiBuYXRpdmUgU2hhZG93IERPTSBpcyB1c2VkIGJ1dCBhZG9wdGVkU3R5bGVzIGFyZSBub3Qgc3VwcG9ydGVkLFxuICAgICAgICAvLyBpbnNlcnQgc3R5bGluZyBhZnRlciByZW5kZXJpbmcgdG8gZW5zdXJlIGFkb3B0ZWRTdHlsZXMgaGF2ZSBoaWdoZXN0XG4gICAgICAgIC8vIHByaW9yaXR5LlxuICAgICAgICBpZiAodGhpcy5fbmVlZHNTaGltQWRvcHRlZFN0eWxlU2hlZXRzKSB7XG4gICAgICAgICAgICB0aGlzLl9uZWVkc1NoaW1BZG9wdGVkU3R5bGVTaGVldHMgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuX3N0eWxlcy5mb3JFYWNoKChzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gcy5jc3NUZXh0O1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUm9vdC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIGVhY2ggdXBkYXRlIHRvIHBlcmZvcm0gcmVuZGVyaW5nIHRhc2tzLiBUaGlzIG1ldGhvZCBtdXN0IHJldHVyblxuICAgICAqIGEgbGl0LWh0bWwgVGVtcGxhdGVSZXN1bHQuIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGUgdGhpcyBtZXRob2Qgd2lsbCAqbm90KlxuICAgICAqIHRyaWdnZXIgdGhlIGVsZW1lbnQgdG8gdXBkYXRlLlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGlzIGNsYXNzIGlzIG1hcmtlZCBhcyBgZmluYWxpemVkYCBhcyBhbiBvcHRpbWl6YXRpb24gZW5zdXJpbmdcbiAqIGl0IHdpbGwgbm90IG5lZWRsZXNzbHkgdHJ5IHRvIGBmaW5hbGl6ZWAuXG4gKlxuICogTm90ZSB0aGlzIHByb3BlcnR5IG5hbWUgaXMgYSBzdHJpbmcgdG8gcHJldmVudCBicmVha2luZyBDbG9zdXJlIEpTIENvbXBpbGVyXG4gKiBvcHRpbWl6YXRpb25zLiBTZWUgdXBkYXRpbmctZWxlbWVudC50cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqL1xuTGl0RWxlbWVudFsnZmluYWxpemVkJ10gPSB0cnVlO1xuLyoqXG4gKiBSZW5kZXIgbWV0aG9kIHVzZWQgdG8gcmVuZGVyIHRoZSBsaXQtaHRtbCBUZW1wbGF0ZVJlc3VsdCB0byB0aGUgZWxlbWVudCdzXG4gKiBET00uXG4gKiBAcGFyYW0ge1RlbXBsYXRlUmVzdWx0fSBUZW1wbGF0ZSB0byByZW5kZXIuXG4gKiBAcGFyYW0ge0VsZW1lbnR8RG9jdW1lbnRGcmFnbWVudH0gTm9kZSBpbnRvIHdoaWNoIHRvIHJlbmRlci5cbiAqIEBwYXJhbSB7U3RyaW5nfSBFbGVtZW50IG5hbWUuXG4gKiBAbm9jb2xsYXBzZVxuICovXG5MaXRFbGVtZW50LnJlbmRlciA9IHJlbmRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpdC1lbGVtZW50LmpzLm1hcCIsICJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sLCBjdXN0b21FbGVtZW50LCBjc3MsIHByb3BlcnR5IH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xubGV0IHB3YXVwZGF0ZSA9IGNsYXNzIHB3YXVwZGF0ZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnN3cGF0aCA9IFwicHdhYnVpbGRlci1zdy5qc1wiO1xuICAgICAgICB0aGlzLnVwZGF0ZWV2ZW50ID0gXCJTS0lQX1dBSVRJTkdcIjtcbiAgICAgICAgdGhpcy51cGRhdGVtZXNzYWdlID0gXCJBbiB1cGRhdGUgZm9yIHRoaXMgYXBwIGlzIGF2YWlsYWJsZVwiO1xuICAgICAgICB0aGlzLnJlYWR5VG9Bc2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaG93U3RvcmFnZUVzdGltYXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2hvd09mZmxpbmVUb2FzdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9mZmxpbmVUb2FzdER1cmF0aW9uID0gMjQwMDtcbiAgICAgICAgdGhpcy5zdG9yYWdlVXNlZCA9IG51bGw7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xuICAgICAgICByZXR1cm4gY3NzIGBcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG5cbiAgICAgICAgLS10b2FzdC1iYWNrZ3JvdW5kOiAjM2MzYzNjO1xuICAgICAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kOiAjMGIwYjBiO1xuICAgICAgfVxuXG4gICAgICAjdXBkYXRlVG9hc3Qge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogMTZweDtcbiAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRvYXN0LWJhY2tncm91bmQpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIG1pbi13aWR0aDogMjJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgICAgICBhbmltYXRpb24tbmFtZTogZmFkZWluO1xuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDMwMG1zO1xuICAgICAgfVxuXG4gICAgICAjc3RvcmFnZVRvYXN0IHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IDE2cHg7XG4gICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10b2FzdC1iYWNrZ3JvdW5kKTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG5cbiAgICAgICNzdG9yYWdlRXN0aW1hdGUge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgIH1cblxuICAgICAgI3VwZGF0ZVRvYXN0IGJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZCk7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBmYWRlaW4ge1xuICAgICAgICBmcm9tIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdG8ge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgO1xuICAgIH1cbiAgICBhc3luYyBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLnN3cGF0aCkge1xuICAgICAgICAgICAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWcgPSBhd2FpdCBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcih0aGlzLnN3cGF0aCk7XG4gICAgICAgICAgICAgICAgbGV0IHdvcmtlciA9IHJlZy5pbnN0YWxsaW5nO1xuICAgICAgICAgICAgICAgIGlmICh3b3JrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5zdG9yYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdG9yYWdlRGF0YSA9IGF3YWl0IG5hdmlnYXRvci5zdG9yYWdlLmVzdGltYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RvcmFnZURhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2VVc2VkID0gdGhpcy5mb3JtYXRCeXRlcyhzdG9yYWdlRGF0YS51c2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93T2ZmbGluZVRvYXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbXBsZXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaSA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcjc3RvcmFnZVRvYXN0JykuYW5pbWF0ZShbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAnZm9yd2FyZHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjgwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaS5vbmZpbmlzaCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd09mZmxpbmVUb2FzdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBhbmkucmV2ZXJzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMub2ZmbGluZVRvYXN0RHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlZy5vbnVwZGF0ZWZvdW5kID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3V29ya2VyID0gcmVnLmluc3RhbGxpbmc7XG4gICAgICAgICAgICAgICAgICAgIG5ld1dvcmtlci5vbnN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1dvcmtlci5zdGF0ZSA9PT0gJ2luc3RhbGxlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdwd2FVcGRhdGUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldHVwRXZlbnRzKCk7XG4gICAgfVxuICAgIHNldHVwRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3B3YVVwZGF0ZScsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGlmIChuYXZpZ2F0b3Iuc2VydmljZVdvcmtlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuc3dyZWcgPSBhd2FpdCBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5nZXRSZWdpc3RyYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zd3JlZyAmJiB0aGlzLnN3cmVnLndhaXRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkeVRvQXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkb1VwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5zd3JlZy53YWl0aW5nLnBvc3RNZXNzYWdlKHsgdHlwZTogdGhpcy51cGRhdGVldmVudCB9KTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICBmb3JtYXRCeXRlcyhieXRlcywgZGVjaW1hbHMgPSAyKSB7XG4gICAgICAgIGlmIChieXRlcyA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiAnMCBCeXRlcyc7XG4gICAgICAgIGNvbnN0IGsgPSAxMDI0O1xuICAgICAgICBjb25zdCBkbSA9IGRlY2ltYWxzIDwgMCA/IDAgOiBkZWNpbWFscztcbiAgICAgICAgY29uc3Qgc2l6ZXMgPSBbJ0J5dGVzJywgJ0tCJywgJ01CJywgJ0dCJywgJ1RCJywgJ1BCJywgJ0VCJywgJ1pCJywgJ1lCJ107XG4gICAgICAgIGNvbnN0IGkgPSBNYXRoLmZsb29yKE1hdGgubG9nKGJ5dGVzKSAvIE1hdGgubG9nKGspKTtcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoKGJ5dGVzIC8gTWF0aC5wb3coaywgaSkpLnRvRml4ZWQoZG0pKSArICcgJyArIHNpemVzW2ldO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sIGBcbiAgICAgIDxkaXY+XG4gICAgICAgJHt0aGlzLnJlYWR5VG9Bc2sgPyBodG1sIGBcbiAgICAgICAgICAgPGRpdiBpZD1cInVwZGF0ZVRvYXN0XCIgcGFydD1cInVwZGF0ZVRvYXN0XCI+XG4gICAgICAgICAgICAgPHNwYW4+JHt0aGlzLnVwZGF0ZW1lc3NhZ2V9PC9zcGFuPlxuXG4gICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCIkeygpID0+IHRoaXMuZG9VcGRhdGUoKX1cIj5VcGRhdGU8L2J1dHRvbj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICBgIDogbnVsbH1cblxuICAgICAgJHt0aGlzLnNob3dPZmZsaW5lVG9hc3QgPyBodG1sIGBcbiAgICAgICAgICA8ZGl2IGlkPVwic3RvcmFnZVRvYXN0XCIgcGFydD1cIm9mZmxpbmVUb2FzdFwiPlxuICAgICAgICAgICAgUmVhZHkgdG8gdXNlIE9mZmxpbmVcblxuICAgICAgICAgICAgJHt0aGlzLnNob3dTdG9yYWdlRXN0aW1hdGUgPyBodG1sIGA8c3BhbiBpZD1cInN0b3JhZ2VFc3RpbWF0ZVwiPkNhY2hlZCAke3RoaXMuc3RvcmFnZVVzZWR9PC9zcGFuPmAgOiBudWxsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgfVxufTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG5dLCBwd2F1cGRhdGUucHJvdG90eXBlLCBcInN3cGF0aFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbl0sIHB3YXVwZGF0ZS5wcm90b3R5cGUsIFwidXBkYXRlZXZlbnRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG5dLCBwd2F1cGRhdGUucHJvdG90eXBlLCBcInVwZGF0ZW1lc3NhZ2VcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuXSwgcHdhdXBkYXRlLnByb3RvdHlwZSwgXCJyZWFkeVRvQXNrXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbl0sIHB3YXVwZGF0ZS5wcm90b3R5cGUsIFwic2hvd1N0b3JhZ2VFc3RpbWF0ZVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG5dLCBwd2F1cGRhdGUucHJvdG90eXBlLCBcInNob3dPZmZsaW5lVG9hc3RcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KHsgdHlwZTogTnVtYmVyIH0pXG5dLCBwd2F1cGRhdGUucHJvdG90eXBlLCBcIm9mZmxpbmVUb2FzdER1cmF0aW9uXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuXSwgcHdhdXBkYXRlLnByb3RvdHlwZSwgXCJzdG9yYWdlVXNlZFwiLCB2b2lkIDApO1xucHdhdXBkYXRlID0gX19kZWNvcmF0ZShbXG4gICAgY3VzdG9tRWxlbWVudCgncHdhLXVwZGF0ZScpXG5dLCBwd2F1cGRhdGUpO1xuZXhwb3J0IHsgcHdhdXBkYXRlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wd2EtdXBkYXRlLmpzLm1hcCIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbmltcG9ydCB7UGFydH0gZnJvbSAnLi9wYXJ0LmpzJztcblxuY29uc3QgZGlyZWN0aXZlcyA9IG5ldyBXZWFrTWFwPG9iamVjdCwgdHJ1ZT4oKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbmV4cG9ydCB0eXBlIERpcmVjdGl2ZUZhY3RvcnkgPSAoLi4uYXJnczogYW55W10pID0+IG9iamVjdDtcblxuZXhwb3J0IHR5cGUgRGlyZWN0aXZlRm4gPSAocGFydDogUGFydCkgPT4gdm9pZDtcblxuLyoqXG4gKiBCcmFuZHMgYSBmdW5jdGlvbiBhcyBhIGRpcmVjdGl2ZSBmYWN0b3J5IGZ1bmN0aW9uIHNvIHRoYXQgbGl0LWh0bWwgd2lsbCBjYWxsXG4gKiB0aGUgZnVuY3Rpb24gZHVyaW5nIHRlbXBsYXRlIHJlbmRlcmluZywgcmF0aGVyIHRoYW4gcGFzc2luZyBhcyBhIHZhbHVlLlxuICpcbiAqIEEgX2RpcmVjdGl2ZV8gaXMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgUGFydCBhcyBhbiBhcmd1bWVudC4gSXQgaGFzIHRoZVxuICogc2lnbmF0dXJlOiBgKHBhcnQ6IFBhcnQpID0+IHZvaWRgLlxuICpcbiAqIEEgZGlyZWN0aXZlIF9mYWN0b3J5XyBpcyBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYXJndW1lbnRzIGZvciBkYXRhIGFuZFxuICogY29uZmlndXJhdGlvbiBhbmQgcmV0dXJucyBhIGRpcmVjdGl2ZS4gVXNlcnMgb2YgZGlyZWN0aXZlIHVzdWFsbHkgcmVmZXIgdG9cbiAqIHRoZSBkaXJlY3RpdmUgZmFjdG9yeSBhcyB0aGUgZGlyZWN0aXZlLiBGb3IgZXhhbXBsZSwgXCJUaGUgcmVwZWF0IGRpcmVjdGl2ZVwiLlxuICpcbiAqIFVzdWFsbHkgYSB0ZW1wbGF0ZSBhdXRob3Igd2lsbCBpbnZva2UgYSBkaXJlY3RpdmUgZmFjdG9yeSBpbiB0aGVpciB0ZW1wbGF0ZVxuICogd2l0aCByZWxldmFudCBhcmd1bWVudHMsIHdoaWNoIHdpbGwgdGhlbiByZXR1cm4gYSBkaXJlY3RpdmUgZnVuY3Rpb24uXG4gKlxuICogSGVyZSdzIGFuIGV4YW1wbGUgb2YgdXNpbmcgdGhlIGByZXBlYXQoKWAgZGlyZWN0aXZlIGZhY3RvcnkgdGhhdCB0YWtlcyBhblxuICogYXJyYXkgYW5kIGEgZnVuY3Rpb24gdG8gcmVuZGVyIGFuIGl0ZW06XG4gKlxuICogYGBganNcbiAqIGh0bWxgPHVsPjwke3JlcGVhdChpdGVtcywgKGl0ZW0pID0+IGh0bWxgPGxpPiR7aXRlbX08L2xpPmApfTwvdWw+YFxuICogYGBgXG4gKlxuICogV2hlbiBgcmVwZWF0YCBpcyBpbnZva2VkLCBpdCByZXR1cm5zIGEgZGlyZWN0aXZlIGZ1bmN0aW9uIHRoYXQgY2xvc2VzIG92ZXJcbiAqIGBpdGVtc2AgYW5kIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvbi4gV2hlbiB0aGUgb3V0ZXIgdGVtcGxhdGUgaXMgcmVuZGVyZWQsIHRoZVxuICogcmV0dXJuIGRpcmVjdGl2ZSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCB0aGUgUGFydCBmb3IgdGhlIGV4cHJlc3Npb24uXG4gKiBgcmVwZWF0YCB0aGVuIHBlcmZvcm1zIGl0J3MgY3VzdG9tIGxvZ2ljIHRvIHJlbmRlciBtdWx0aXBsZSBpdGVtcy5cbiAqXG4gKiBAcGFyYW0gZiBUaGUgZGlyZWN0aXZlIGZhY3RvcnkgZnVuY3Rpb24uIE11c3QgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYVxuICogZnVuY3Rpb24gb2YgdGhlIHNpZ25hdHVyZSBgKHBhcnQ6IFBhcnQpID0+IHZvaWRgLiBUaGUgcmV0dXJuZWQgZnVuY3Rpb24gd2lsbFxuICogYmUgY2FsbGVkIHdpdGggdGhlIHBhcnQgb2JqZWN0LlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogaW1wb3J0IHtkaXJlY3RpdmUsIGh0bWx9IGZyb20gJ2xpdC1odG1sJztcbiAqXG4gKiBjb25zdCBpbW11dGFibGUgPSBkaXJlY3RpdmUoKHYpID0+IChwYXJ0KSA9PiB7XG4gKiAgIGlmIChwYXJ0LnZhbHVlICE9PSB2KSB7XG4gKiAgICAgcGFydC5zZXRWYWx1ZSh2KVxuICogICB9XG4gKiB9KTtcbiAqL1xuZXhwb3J0IGNvbnN0IGRpcmVjdGl2ZSA9IDxGIGV4dGVuZHMgRGlyZWN0aXZlRmFjdG9yeT4oZjogRik6IEYgPT5cbiAgICAoKC4uLmFyZ3M6IHVua25vd25bXSkgPT4ge1xuICAgICAgY29uc3QgZCA9IGYoLi4uYXJncyk7XG4gICAgICBkaXJlY3RpdmVzLnNldChkLCB0cnVlKTtcbiAgICAgIHJldHVybiBkO1xuICAgIH0pIGFzIEY7XG5cbmV4cG9ydCBjb25zdCBpc0RpcmVjdGl2ZSA9IChvOiB1bmtub3duKTogbyBpcyBEaXJlY3RpdmVGbiA9PiB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ2Z1bmN0aW9uJyAmJiBkaXJlY3RpdmVzLmhhcyhvKTtcbn07XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbXBvcnQge1BhcnR9IGZyb20gJy4vcGFydC5qcyc7XG5cbmNvbnN0IGRpcmVjdGl2ZXMgPSBuZXcgV2Vha01hcDxvYmplY3QsIHRydWU+KCk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5leHBvcnQgdHlwZSBEaXJlY3RpdmVGYWN0b3J5ID0gKC4uLmFyZ3M6IGFueVtdKSA9PiBvYmplY3Q7XG5cbmV4cG9ydCB0eXBlIERpcmVjdGl2ZUZuID0gKHBhcnQ6IFBhcnQpID0+IHZvaWQ7XG5cbi8qKlxuICogQnJhbmRzIGEgZnVuY3Rpb24gYXMgYSBkaXJlY3RpdmUgZmFjdG9yeSBmdW5jdGlvbiBzbyB0aGF0IGxpdC1odG1sIHdpbGwgY2FsbFxuICogdGhlIGZ1bmN0aW9uIGR1cmluZyB0ZW1wbGF0ZSByZW5kZXJpbmcsIHJhdGhlciB0aGFuIHBhc3NpbmcgYXMgYSB2YWx1ZS5cbiAqXG4gKiBBIF9kaXJlY3RpdmVfIGlzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIFBhcnQgYXMgYW4gYXJndW1lbnQuIEl0IGhhcyB0aGVcbiAqIHNpZ25hdHVyZTogYChwYXJ0OiBQYXJ0KSA9PiB2b2lkYC5cbiAqXG4gKiBBIGRpcmVjdGl2ZSBfZmFjdG9yeV8gaXMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGFyZ3VtZW50cyBmb3IgZGF0YSBhbmRcbiAqIGNvbmZpZ3VyYXRpb24gYW5kIHJldHVybnMgYSBkaXJlY3RpdmUuIFVzZXJzIG9mIGRpcmVjdGl2ZSB1c3VhbGx5IHJlZmVyIHRvXG4gKiB0aGUgZGlyZWN0aXZlIGZhY3RvcnkgYXMgdGhlIGRpcmVjdGl2ZS4gRm9yIGV4YW1wbGUsIFwiVGhlIHJlcGVhdCBkaXJlY3RpdmVcIi5cbiAqXG4gKiBVc3VhbGx5IGEgdGVtcGxhdGUgYXV0aG9yIHdpbGwgaW52b2tlIGEgZGlyZWN0aXZlIGZhY3RvcnkgaW4gdGhlaXIgdGVtcGxhdGVcbiAqIHdpdGggcmVsZXZhbnQgYXJndW1lbnRzLCB3aGljaCB3aWxsIHRoZW4gcmV0dXJuIGEgZGlyZWN0aXZlIGZ1bmN0aW9uLlxuICpcbiAqIEhlcmUncyBhbiBleGFtcGxlIG9mIHVzaW5nIHRoZSBgcmVwZWF0KClgIGRpcmVjdGl2ZSBmYWN0b3J5IHRoYXQgdGFrZXMgYW5cbiAqIGFycmF5IGFuZCBhIGZ1bmN0aW9uIHRvIHJlbmRlciBhbiBpdGVtOlxuICpcbiAqIGBgYGpzXG4gKiBodG1sYDx1bD48JHtyZXBlYXQoaXRlbXMsIChpdGVtKSA9PiBodG1sYDxsaT4ke2l0ZW19PC9saT5gKX08L3VsPmBcbiAqIGBgYFxuICpcbiAqIFdoZW4gYHJlcGVhdGAgaXMgaW52b2tlZCwgaXQgcmV0dXJucyBhIGRpcmVjdGl2ZSBmdW5jdGlvbiB0aGF0IGNsb3NlcyBvdmVyXG4gKiBgaXRlbXNgIGFuZCB0aGUgdGVtcGxhdGUgZnVuY3Rpb24uIFdoZW4gdGhlIG91dGVyIHRlbXBsYXRlIGlzIHJlbmRlcmVkLCB0aGVcbiAqIHJldHVybiBkaXJlY3RpdmUgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggdGhlIFBhcnQgZm9yIHRoZSBleHByZXNzaW9uLlxuICogYHJlcGVhdGAgdGhlbiBwZXJmb3JtcyBpdCdzIGN1c3RvbSBsb2dpYyB0byByZW5kZXIgbXVsdGlwbGUgaXRlbXMuXG4gKlxuICogQHBhcmFtIGYgVGhlIGRpcmVjdGl2ZSBmYWN0b3J5IGZ1bmN0aW9uLiBNdXN0IGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFcbiAqIGZ1bmN0aW9uIG9mIHRoZSBzaWduYXR1cmUgYChwYXJ0OiBQYXJ0KSA9PiB2b2lkYC4gVGhlIHJldHVybmVkIGZ1bmN0aW9uIHdpbGxcbiAqIGJlIGNhbGxlZCB3aXRoIHRoZSBwYXJ0IG9iamVjdC5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGltcG9ydCB7ZGlyZWN0aXZlLCBodG1sfSBmcm9tICdsaXQtaHRtbCc7XG4gKlxuICogY29uc3QgaW1tdXRhYmxlID0gZGlyZWN0aXZlKCh2KSA9PiAocGFydCkgPT4ge1xuICogICBpZiAocGFydC52YWx1ZSAhPT0gdikge1xuICogICAgIHBhcnQuc2V0VmFsdWUodilcbiAqICAgfVxuICogfSk7XG4gKi9cbmV4cG9ydCBjb25zdCBkaXJlY3RpdmUgPSA8RiBleHRlbmRzIERpcmVjdGl2ZUZhY3Rvcnk+KGY6IEYpOiBGID0+XG4gICAgKCguLi5hcmdzOiB1bmtub3duW10pID0+IHtcbiAgICAgIGNvbnN0IGQgPSBmKC4uLmFyZ3MpO1xuICAgICAgZGlyZWN0aXZlcy5zZXQoZCwgdHJ1ZSk7XG4gICAgICByZXR1cm4gZDtcbiAgICB9KSBhcyBGO1xuXG5leHBvcnQgY29uc3QgaXNEaXJlY3RpdmUgPSAobzogdW5rbm93bik6IG8gaXMgRGlyZWN0aXZlRm4gPT4ge1xuICByZXR1cm4gdHlwZW9mIG8gPT09ICdmdW5jdGlvbicgJiYgZGlyZWN0aXZlcy5oYXMobyk7XG59O1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuaW50ZXJmYWNlIE1heWJlUG9seWZpbGxlZENlIGV4dGVuZHMgQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5IHtcbiAgcmVhZG9ubHkgcG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjaz86IG9iamVjdDtcbn1cblxuLyoqXG4gKiBUcnVlIGlmIHRoZSBjdXN0b20gZWxlbWVudHMgcG9seWZpbGwgaXMgaW4gdXNlLlxuICovXG5leHBvcnQgY29uc3QgaXNDRVBvbHlmaWxsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB3aW5kb3cuY3VzdG9tRWxlbWVudHMgIT0gbnVsbCAmJlxuICAgICh3aW5kb3cuY3VzdG9tRWxlbWVudHMgYXMgTWF5YmVQb2x5ZmlsbGVkQ2UpLnBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2sgIT09XG4gICAgICAgIHVuZGVmaW5lZDtcblxuLyoqXG4gKiBSZXBhcmVudHMgbm9kZXMsIHN0YXJ0aW5nIGZyb20gYHN0YXJ0YCAoaW5jbHVzaXZlKSB0byBgZW5kYCAoZXhjbHVzaXZlKSxcbiAqIGludG8gYW5vdGhlciBjb250YWluZXIgKGNvdWxkIGJlIHRoZSBzYW1lIGNvbnRhaW5lciksIGJlZm9yZSBgYmVmb3JlYC4gSWZcbiAqIGBiZWZvcmVgIGlzIG51bGwsIGl0IGFwcGVuZHMgdGhlIG5vZGVzIHRvIHRoZSBjb250YWluZXIuXG4gKi9cbmV4cG9ydCBjb25zdCByZXBhcmVudE5vZGVzID1cbiAgICAoY29udGFpbmVyOiBOb2RlLFxuICAgICBzdGFydDogTm9kZXxudWxsLFxuICAgICBlbmQ6IE5vZGV8bnVsbCA9IG51bGwsXG4gICAgIGJlZm9yZTogTm9kZXxudWxsID0gbnVsbCk6IHZvaWQgPT4ge1xuICAgICAgd2hpbGUgKHN0YXJ0ICE9PSBlbmQpIHtcbiAgICAgICAgY29uc3QgbiA9IHN0YXJ0IS5uZXh0U2libGluZztcbiAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShzdGFydCEsIGJlZm9yZSk7XG4gICAgICAgIHN0YXJ0ID0gbjtcbiAgICAgIH1cbiAgICB9O1xuXG4vKipcbiAqIFJlbW92ZXMgbm9kZXMsIHN0YXJ0aW5nIGZyb20gYHN0YXJ0YCAoaW5jbHVzaXZlKSB0byBgZW5kYCAoZXhjbHVzaXZlKSwgZnJvbVxuICogYGNvbnRhaW5lcmAuXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVOb2RlcyA9XG4gICAgKGNvbnRhaW5lcjogTm9kZSwgc3RhcnQ6IE5vZGV8bnVsbCwgZW5kOiBOb2RlfG51bGwgPSBudWxsKTogdm9pZCA9PiB7XG4gICAgICB3aGlsZSAoc3RhcnQgIT09IGVuZCkge1xuICAgICAgICBjb25zdCBuID0gc3RhcnQhLm5leHRTaWJsaW5nO1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoc3RhcnQhKTtcbiAgICAgICAgc3RhcnQgPSBuO1xuICAgICAgfVxuICAgIH07XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbnRlcmZhY2UgTWF5YmVQb2x5ZmlsbGVkQ2UgZXh0ZW5kcyBDdXN0b21FbGVtZW50UmVnaXN0cnkge1xuICByZWFkb25seSBwb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrPzogb2JqZWN0O1xufVxuXG4vKipcbiAqIFRydWUgaWYgdGhlIGN1c3RvbSBlbGVtZW50cyBwb2x5ZmlsbCBpcyBpbiB1c2UuXG4gKi9cbmV4cG9ydCBjb25zdCBpc0NFUG9seWZpbGwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHdpbmRvdy5jdXN0b21FbGVtZW50cyAhPSBudWxsICYmXG4gICAgKHdpbmRvdy5jdXN0b21FbGVtZW50cyBhcyBNYXliZVBvbHlmaWxsZWRDZSkucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjayAhPT1cbiAgICAgICAgdW5kZWZpbmVkO1xuXG4vKipcbiAqIFJlcGFyZW50cyBub2Rlcywgc3RhcnRpbmcgZnJvbSBgc3RhcnRgIChpbmNsdXNpdmUpIHRvIGBlbmRgIChleGNsdXNpdmUpLFxuICogaW50byBhbm90aGVyIGNvbnRhaW5lciAoY291bGQgYmUgdGhlIHNhbWUgY29udGFpbmVyKSwgYmVmb3JlIGBiZWZvcmVgLiBJZlxuICogYGJlZm9yZWAgaXMgbnVsbCwgaXQgYXBwZW5kcyB0aGUgbm9kZXMgdG8gdGhlIGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlcGFyZW50Tm9kZXMgPVxuICAgIChjb250YWluZXI6IE5vZGUsXG4gICAgIHN0YXJ0OiBOb2RlfG51bGwsXG4gICAgIGVuZDogTm9kZXxudWxsID0gbnVsbCxcbiAgICAgYmVmb3JlOiBOb2RlfG51bGwgPSBudWxsKTogdm9pZCA9PiB7XG4gICAgICB3aGlsZSAoc3RhcnQgIT09IGVuZCkge1xuICAgICAgICBjb25zdCBuID0gc3RhcnQhLm5leHRTaWJsaW5nO1xuICAgICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKHN0YXJ0ISwgYmVmb3JlKTtcbiAgICAgICAgc3RhcnQgPSBuO1xuICAgICAgfVxuICAgIH07XG5cbi8qKlxuICogUmVtb3ZlcyBub2Rlcywgc3RhcnRpbmcgZnJvbSBgc3RhcnRgIChpbmNsdXNpdmUpIHRvIGBlbmRgIChleGNsdXNpdmUpLCBmcm9tXG4gKiBgY29udGFpbmVyYC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZU5vZGVzID1cbiAgICAoY29udGFpbmVyOiBOb2RlLCBzdGFydDogTm9kZXxudWxsLCBlbmQ6IE5vZGV8bnVsbCA9IG51bGwpOiB2b2lkID0+IHtcbiAgICAgIHdoaWxlIChzdGFydCAhPT0gZW5kKSB7XG4gICAgICAgIGNvbnN0IG4gPSBzdGFydCEubmV4dFNpYmxpbmc7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChzdGFydCEpO1xuICAgICAgICBzdGFydCA9IG47XG4gICAgICB9XG4gICAgfTtcbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICogVGhlIFBhcnQgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBkeW5hbWljIHBhcnQgb2YgYSB0ZW1wbGF0ZSBpbnN0YW5jZSByZW5kZXJlZFxuICogYnkgbGl0LWh0bWwuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGFydCB7XG4gIHJlYWRvbmx5IHZhbHVlOiB1bmtub3duO1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjdXJyZW50IHBhcnQgdmFsdWUsIGJ1dCBkb2VzIG5vdCB3cml0ZSBpdCB0byB0aGUgRE9NLlxuICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRoYXQgd2lsbCBiZSBjb21taXR0ZWQuXG4gICAqL1xuICBzZXRWYWx1ZSh2YWx1ZTogdW5rbm93bik6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIENvbW1pdHMgdGhlIGN1cnJlbnQgcGFydCB2YWx1ZSwgY2F1c2luZyBpdCB0byBhY3R1YWxseSBiZSB3cml0dGVuIHRvIHRoZVxuICAgKiBET00uXG4gICAqXG4gICAqIERpcmVjdGl2ZXMgYXJlIHJ1biBhdCB0aGUgc3RhcnQgb2YgYGNvbW1pdGAsIHNvIHRoYXQgaWYgdGhleSBjYWxsXG4gICAqIGBwYXJ0LnNldFZhbHVlKC4uLilgIHN5bmNocm9ub3VzbHkgdGhhdCB2YWx1ZSB3aWxsIGJlIHVzZWQgaW4gdGhlIGN1cnJlbnRcbiAgICogY29tbWl0LCBhbmQgdGhlcmUncyBubyBuZWVkIHRvIGNhbGwgYHBhcnQuY29tbWl0KClgIHdpdGhpbiB0aGUgZGlyZWN0aXZlLlxuICAgKiBJZiBkaXJlY3RpdmVzIHNldCBhIHBhcnQgdmFsdWUgYXN5bmNocm9ub3VzbHksIHRoZW4gdGhleSBtdXN0IGNhbGxcbiAgICogYHBhcnQuY29tbWl0KClgIG1hbnVhbGx5LlxuICAgKi9cbiAgY29tbWl0KCk6IHZvaWQ7XG59XG5cbi8qKlxuICogQSBzZW50aW5lbCB2YWx1ZSB0aGF0IHNpZ25hbHMgdGhhdCBhIHZhbHVlIHdhcyBoYW5kbGVkIGJ5IGEgZGlyZWN0aXZlIGFuZFxuICogc2hvdWxkIG5vdCBiZSB3cml0dGVuIHRvIHRoZSBET00uXG4gKi9cbmV4cG9ydCBjb25zdCBub0NoYW5nZSA9IHt9O1xuXG4vKipcbiAqIEEgc2VudGluZWwgdmFsdWUgdGhhdCBzaWduYWxzIGEgTm9kZVBhcnQgdG8gZnVsbHkgY2xlYXIgaXRzIGNvbnRlbnQuXG4gKi9cbmV4cG9ydCBjb25zdCBub3RoaW5nID0ge307XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbXBvcnQge1RlbXBsYXRlUmVzdWx0fSBmcm9tICcuL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5cbi8qKlxuICogQW4gZXhwcmVzc2lvbiBtYXJrZXIgd2l0aCBlbWJlZGRlZCB1bmlxdWUga2V5IHRvIGF2b2lkIGNvbGxpc2lvbiB3aXRoXG4gKiBwb3NzaWJsZSB0ZXh0IGluIHRlbXBsYXRlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hcmtlciA9IGB7e2xpdC0ke1N0cmluZyhNYXRoLnJhbmRvbSgpKS5zbGljZSgyKX19fWA7XG5cbi8qKlxuICogQW4gZXhwcmVzc2lvbiBtYXJrZXIgdXNlZCB0ZXh0LXBvc2l0aW9ucywgbXVsdGktYmluZGluZyBhdHRyaWJ1dGVzLCBhbmRcbiAqIGF0dHJpYnV0ZXMgd2l0aCBtYXJrdXAtbGlrZSB0ZXh0IHZhbHVlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vZGVNYXJrZXIgPSBgPCEtLSR7bWFya2VyfS0tPmA7XG5cbmV4cG9ydCBjb25zdCBtYXJrZXJSZWdleCA9IG5ldyBSZWdFeHAoYCR7bWFya2VyfXwke25vZGVNYXJrZXJ9YCk7XG5cbi8qKlxuICogU3VmZml4IGFwcGVuZGVkIHRvIGFsbCBib3VuZCBhdHRyaWJ1dGUgbmFtZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBib3VuZEF0dHJpYnV0ZVN1ZmZpeCA9ICckbGl0JCc7XG5cbi8qKlxuICogQW4gdXBkYXRhYmxlIFRlbXBsYXRlIHRoYXQgdHJhY2tzIHRoZSBsb2NhdGlvbiBvZiBkeW5hbWljIHBhcnRzLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGUge1xuICByZWFkb25seSBwYXJ0czogVGVtcGxhdGVQYXJ0W10gPSBbXTtcbiAgcmVhZG9ubHkgZWxlbWVudDogSFRNTFRlbXBsYXRlRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihyZXN1bHQ6IFRlbXBsYXRlUmVzdWx0LCBlbGVtZW50OiBIVE1MVGVtcGxhdGVFbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgIGNvbnN0IG5vZGVzVG9SZW1vdmU6IE5vZGVbXSA9IFtdO1xuICAgIGNvbnN0IHN0YWNrOiBOb2RlW10gPSBbXTtcbiAgICAvLyBFZGdlIG5lZWRzIGFsbCA0IHBhcmFtZXRlcnMgcHJlc2VudDsgSUUxMSBuZWVkcyAzcmQgcGFyYW1ldGVyIHRvIGJlIG51bGxcbiAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKFxuICAgICAgICBlbGVtZW50LmNvbnRlbnQsXG4gICAgICAgIDEzMyAvKiBOb2RlRmlsdGVyLlNIT1dfe0VMRU1FTlR8Q09NTUVOVHxURVhUfSAqLyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UpO1xuICAgIC8vIEtlZXBzIHRyYWNrIG9mIHRoZSBsYXN0IGluZGV4IGFzc29jaWF0ZWQgd2l0aCBhIHBhcnQuIFdlIHRyeSB0byBkZWxldGVcbiAgICAvLyB1bm5lY2Vzc2FyeSBub2RlcywgYnV0IHdlIG5ldmVyIHdhbnQgdG8gYXNzb2NpYXRlIHR3byBkaWZmZXJlbnQgcGFydHNcbiAgICAvLyB0byB0aGUgc2FtZSBpbmRleC4gVGhleSBtdXN0IGhhdmUgYSBjb25zdGFudCBub2RlIGJldHdlZW4uXG4gICAgbGV0IGxhc3RQYXJ0SW5kZXggPSAwO1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgIGNvbnN0IHtzdHJpbmdzLCB2YWx1ZXM6IHtsZW5ndGh9fSA9IHJlc3VsdDtcbiAgICB3aGlsZSAocGFydEluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjb25zdCBub2RlID0gd2Fsa2VyLm5leHROb2RlKCkgYXMgRWxlbWVudCB8IENvbW1lbnQgfCBUZXh0IHwgbnVsbDtcbiAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgIC8vIFdlJ3ZlIGV4aGF1c3RlZCB0aGUgY29udGVudCBpbnNpZGUgYSBuZXN0ZWQgdGVtcGxhdGUgZWxlbWVudC5cbiAgICAgICAgLy8gQmVjYXVzZSB3ZSBzdGlsbCBoYXZlIHBhcnRzICh0aGUgb3V0ZXIgZm9yLWxvb3ApLCB3ZSBrbm93OlxuICAgICAgICAvLyAtIFRoZXJlIGlzIGEgdGVtcGxhdGUgaW4gdGhlIHN0YWNrXG4gICAgICAgIC8vIC0gVGhlIHdhbGtlciB3aWxsIGZpbmQgYSBuZXh0Tm9kZSBvdXRzaWRlIHRoZSB0ZW1wbGF0ZVxuICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSBzdGFjay5wb3AoKSE7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaW5kZXgrKztcblxuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgLyogTm9kZS5FTEVNRU5UX05PREUgKi8pIHtcbiAgICAgICAgaWYgKChub2RlIGFzIEVsZW1lbnQpLmhhc0F0dHJpYnV0ZXMoKSkge1xuICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSAobm9kZSBhcyBFbGVtZW50KS5hdHRyaWJ1dGVzO1xuICAgICAgICAgIGNvbnN0IHtsZW5ndGh9ID0gYXR0cmlidXRlcztcbiAgICAgICAgICAvLyBQZXJcbiAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTmFtZWROb2RlTWFwLFxuICAgICAgICAgIC8vIGF0dHJpYnV0ZXMgYXJlIG5vdCBndWFyYW50ZWVkIHRvIGJlIHJldHVybmVkIGluIGRvY3VtZW50IG9yZGVyLlxuICAgICAgICAgIC8vIEluIHBhcnRpY3VsYXIsIEVkZ2UvSUUgY2FuIHJldHVybiB0aGVtIG91dCBvZiBvcmRlciwgc28gd2UgY2Fubm90XG4gICAgICAgICAgLy8gYXNzdW1lIGEgY29ycmVzcG9uZGVuY2UgYmV0d2VlbiBwYXJ0IGluZGV4IGFuZCBhdHRyaWJ1dGUgaW5kZXguXG4gICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZW5kc1dpdGgoYXR0cmlidXRlc1tpXS5uYW1lLCBib3VuZEF0dHJpYnV0ZVN1ZmZpeCkpIHtcbiAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgd2hpbGUgKGNvdW50LS0gPiAwKSB7XG4gICAgICAgICAgICAvLyBHZXQgdGhlIHRlbXBsYXRlIGxpdGVyYWwgc2VjdGlvbiBsZWFkaW5nIHVwIHRvIHRoZSBmaXJzdFxuICAgICAgICAgICAgLy8gZXhwcmVzc2lvbiBpbiB0aGlzIGF0dHJpYnV0ZVxuICAgICAgICAgICAgY29uc3Qgc3RyaW5nRm9yUGFydCA9IHN0cmluZ3NbcGFydEluZGV4XTtcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIGF0dHJpYnV0ZSBuYW1lXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gbGFzdEF0dHJpYnV0ZU5hbWVSZWdleC5leGVjKHN0cmluZ0ZvclBhcnQpIVsyXTtcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgYXR0cmlidXRlXG4gICAgICAgICAgICAvLyBBbGwgYm91bmQgYXR0cmlidXRlcyBoYXZlIGhhZCBhIHN1ZmZpeCBhZGRlZCBpblxuICAgICAgICAgICAgLy8gVGVtcGxhdGVSZXN1bHQjZ2V0SFRNTCB0byBvcHQgb3V0IG9mIHNwZWNpYWwgYXR0cmlidXRlXG4gICAgICAgICAgICAvLyBoYW5kbGluZy4gVG8gbG9vayB1cCB0aGUgYXR0cmlidXRlIHZhbHVlIHdlIGFsc28gbmVlZCB0byBhZGRcbiAgICAgICAgICAgIC8vIHRoZSBzdWZmaXguXG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVMb29rdXBOYW1lID1cbiAgICAgICAgICAgICAgICBuYW1lLnRvTG93ZXJDYXNlKCkgKyBib3VuZEF0dHJpYnV0ZVN1ZmZpeDtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID1cbiAgICAgICAgICAgICAgICAobm9kZSBhcyBFbGVtZW50KS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTG9va3VwTmFtZSkhO1xuICAgICAgICAgICAgKG5vZGUgYXMgRWxlbWVudCkucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZUxvb2t1cE5hbWUpO1xuICAgICAgICAgICAgY29uc3Qgc3RhdGljcyA9IGF0dHJpYnV0ZVZhbHVlLnNwbGl0KG1hcmtlclJlZ2V4KTtcbiAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7dHlwZTogJ2F0dHJpYnV0ZScsIGluZGV4LCBuYW1lLCBzdHJpbmdzOiBzdGF0aWNzfSk7XG4gICAgICAgICAgICBwYXJ0SW5kZXggKz0gc3RhdGljcy5sZW5ndGggLSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoKG5vZGUgYXMgRWxlbWVudCkudGFnTmFtZSA9PT0gJ1RFTVBMQVRFJykge1xuICAgICAgICAgIHN0YWNrLnB1c2gobm9kZSk7XG4gICAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gKG5vZGUgYXMgSFRNTFRlbXBsYXRlRWxlbWVudCkuY29udGVudDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSAzIC8qIE5vZGUuVEVYVF9OT0RFICovKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSAobm9kZSBhcyBUZXh0KS5kYXRhO1xuICAgICAgICBpZiAoZGF0YS5pbmRleE9mKG1hcmtlcikgPj0gMCkge1xuICAgICAgICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZSE7XG4gICAgICAgICAgY29uc3Qgc3RyaW5ncyA9IGRhdGEuc3BsaXQobWFya2VyUmVnZXgpO1xuICAgICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyB0ZXh0IG5vZGUgZm9yIGVhY2ggbGl0ZXJhbCBzZWN0aW9uXG4gICAgICAgICAgLy8gVGhlc2Ugbm9kZXMgYXJlIGFsc28gdXNlZCBhcyB0aGUgbWFya2VycyBmb3Igbm9kZSBwYXJ0c1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGFzdEluZGV4OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpbnNlcnQ6IE5vZGU7XG4gICAgICAgICAgICBsZXQgcyA9IHN0cmluZ3NbaV07XG4gICAgICAgICAgICBpZiAocyA9PT0gJycpIHtcbiAgICAgICAgICAgICAgaW5zZXJ0ID0gY3JlYXRlTWFya2VyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXguZXhlYyhzKTtcbiAgICAgICAgICAgICAgaWYgKG1hdGNoICE9PSBudWxsICYmIGVuZHNXaXRoKG1hdGNoWzJdLCBib3VuZEF0dHJpYnV0ZVN1ZmZpeCkpIHtcbiAgICAgICAgICAgICAgICBzID0gcy5zbGljZSgwLCBtYXRjaC5pbmRleCkgKyBtYXRjaFsxXSArXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoWzJdLnNsaWNlKDAsIC1ib3VuZEF0dHJpYnV0ZVN1ZmZpeC5sZW5ndGgpICsgbWF0Y2hbM107XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaW5zZXJ0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGluc2VydCwgbm9kZSk7XG4gICAgICAgICAgICB0aGlzLnBhcnRzLnB1c2goe3R5cGU6ICdub2RlJywgaW5kZXg6ICsraW5kZXh9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gSWYgdGhlcmUncyBubyB0ZXh0LCB3ZSBtdXN0IGluc2VydCBhIGNvbW1lbnQgdG8gbWFyayBvdXIgcGxhY2UuXG4gICAgICAgICAgLy8gRWxzZSwgd2UgY2FuIHRydXN0IGl0IHdpbGwgc3RpY2sgYXJvdW5kIGFmdGVyIGNsb25pbmcuXG4gICAgICAgICAgaWYgKHN0cmluZ3NbbGFzdEluZGV4XSA9PT0gJycpIHtcbiAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoY3JlYXRlTWFya2VyKCksIG5vZGUpO1xuICAgICAgICAgICAgbm9kZXNUb1JlbW92ZS5wdXNoKG5vZGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAobm9kZSBhcyBUZXh0KS5kYXRhID0gc3RyaW5nc1tsYXN0SW5kZXhdO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBXZSBoYXZlIGEgcGFydCBmb3IgZWFjaCBtYXRjaCBmb3VuZFxuICAgICAgICAgIHBhcnRJbmRleCArPSBsYXN0SW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCAvKiBOb2RlLkNPTU1FTlRfTk9ERSAqLykge1xuICAgICAgICBpZiAoKG5vZGUgYXMgQ29tbWVudCkuZGF0YSA9PT0gbWFya2VyKSB7XG4gICAgICAgICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlITtcbiAgICAgICAgICAvLyBBZGQgYSBuZXcgbWFya2VyIG5vZGUgdG8gYmUgdGhlIHN0YXJ0Tm9kZSBvZiB0aGUgUGFydCBpZiBhbnkgb2ZcbiAgICAgICAgICAvLyB0aGUgZm9sbG93aW5nIGFyZSB0cnVlOlxuICAgICAgICAgIC8vICAqIFdlIGRvbid0IGhhdmUgYSBwcmV2aW91c1NpYmxpbmdcbiAgICAgICAgICAvLyAgKiBUaGUgcHJldmlvdXNTaWJsaW5nIGlzIGFscmVhZHkgdGhlIHN0YXJ0IG9mIGEgcHJldmlvdXMgcGFydFxuICAgICAgICAgIGlmIChub2RlLnByZXZpb3VzU2libGluZyA9PT0gbnVsbCB8fCBpbmRleCA9PT0gbGFzdFBhcnRJbmRleCkge1xuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoY3JlYXRlTWFya2VyKCksIG5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsYXN0UGFydEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKHt0eXBlOiAnbm9kZScsIGluZGV4fSk7XG4gICAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIG5leHRTaWJsaW5nLCBrZWVwIHRoaXMgbm9kZSBzbyB3ZSBoYXZlIGFuIGVuZC5cbiAgICAgICAgICAvLyBFbHNlLCB3ZSBjYW4gcmVtb3ZlIGl0IHRvIHNhdmUgZnV0dXJlIGNvc3RzLlxuICAgICAgICAgIGlmIChub2RlLm5leHRTaWJsaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAobm9kZSBhcyBDb21tZW50KS5kYXRhID0gJyc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGVzVG9SZW1vdmUucHVzaChub2RlKTtcbiAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBpID0gLTE7XG4gICAgICAgICAgd2hpbGUgKChpID0gKG5vZGUgYXMgQ29tbWVudCkuZGF0YS5pbmRleE9mKG1hcmtlciwgaSArIDEpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIC8vIENvbW1lbnQgbm9kZSBoYXMgYSBiaW5kaW5nIG1hcmtlciBpbnNpZGUsIG1ha2UgYW4gaW5hY3RpdmUgcGFydFxuICAgICAgICAgICAgLy8gVGhlIGJpbmRpbmcgd29uJ3Qgd29yaywgYnV0IHN1YnNlcXVlbnQgYmluZGluZ3Mgd2lsbFxuICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IGNvbnNpZGVyIHdoZXRoZXIgaXQncyBldmVuIHdvcnRoIGl0IHRvXG4gICAgICAgICAgICAvLyBtYWtlIGJpbmRpbmdzIGluIGNvbW1lbnRzIHdvcmtcbiAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7dHlwZTogJ25vZGUnLCBpbmRleDogLTF9KTtcbiAgICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSB0ZXh0IGJpbmRpbmcgbm9kZXMgYWZ0ZXIgdGhlIHdhbGsgdG8gbm90IGRpc3R1cmIgdGhlIFRyZWVXYWxrZXJcbiAgICBmb3IgKGNvbnN0IG4gb2Ygbm9kZXNUb1JlbW92ZSkge1xuICAgICAgbi5wYXJlbnROb2RlIS5yZW1vdmVDaGlsZChuKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZW5kc1dpdGggPSAoc3RyOiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IGluZGV4ID0gc3RyLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGg7XG4gIHJldHVybiBpbmRleCA+PSAwICYmIHN0ci5zbGljZShpbmRleCkgPT09IHN1ZmZpeDtcbn07XG5cbi8qKlxuICogQSBwbGFjZWhvbGRlciBmb3IgYSBkeW5hbWljIGV4cHJlc3Npb24gaW4gYW4gSFRNTCB0ZW1wbGF0ZS5cbiAqXG4gKiBUaGVyZSBhcmUgdHdvIGJ1aWx0LWluIHBhcnQgdHlwZXM6IEF0dHJpYnV0ZVBhcnQgYW5kIE5vZGVQYXJ0LiBOb2RlUGFydHNcbiAqIGFsd2F5cyByZXByZXNlbnQgYSBzaW5nbGUgZHluYW1pYyBleHByZXNzaW9uLCB3aGlsZSBBdHRyaWJ1dGVQYXJ0cyBtYXlcbiAqIHJlcHJlc2VudCBhcyBtYW55IGV4cHJlc3Npb25zIGFyZSBjb250YWluZWQgaW4gdGhlIGF0dHJpYnV0ZS5cbiAqXG4gKiBBIFRlbXBsYXRlJ3MgcGFydHMgYXJlIG11dGFibGUsIHNvIHBhcnRzIGNhbiBiZSByZXBsYWNlZCBvciBtb2RpZmllZFxuICogKHBvc3NpYmx5IHRvIGltcGxlbWVudCBkaWZmZXJlbnQgdGVtcGxhdGUgc2VtYW50aWNzKS4gVGhlIGNvbnRyYWN0IGlzIHRoYXRcbiAqIHBhcnRzIGNhbiBvbmx5IGJlIHJlcGxhY2VkLCBub3QgcmVtb3ZlZCwgYWRkZWQgb3IgcmVvcmRlcmVkLCBhbmQgcGFydHMgbXVzdFxuICogYWx3YXlzIGNvbnN1bWUgdGhlIGNvcnJlY3QgbnVtYmVyIG9mIHZhbHVlcyBpbiB0aGVpciBgdXBkYXRlKClgIG1ldGhvZC5cbiAqXG4gKiBUT0RPKGp1c3RpbmZhZ25hbmkpOiBUaGF0IHJlcXVpcmVtZW50IGlzIGEgbGl0dGxlIGZyYWdpbGUuIEFcbiAqIFRlbXBsYXRlSW5zdGFuY2UgY291bGQgaW5zdGVhZCBiZSBtb3JlIGNhcmVmdWwgYWJvdXQgd2hpY2ggdmFsdWVzIGl0IGdpdmVzXG4gKiB0byBQYXJ0LnVwZGF0ZSgpLlxuICovXG5leHBvcnQgdHlwZSBUZW1wbGF0ZVBhcnQgPSB7XG4gIHJlYWRvbmx5IHR5cGU6ICdub2RlJzsgaW5kZXg6IG51bWJlcjtcbn18e1xuICByZWFkb25seSB0eXBlOiAnYXR0cmlidXRlJztcbiAgaW5kZXg6IG51bWJlcjtcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICByZWFkb25seSBzdHJpbmdzOiBSZWFkb25seUFycmF5PHN0cmluZz47XG59O1xuXG5leHBvcnQgY29uc3QgaXNUZW1wbGF0ZVBhcnRBY3RpdmUgPSAocGFydDogVGVtcGxhdGVQYXJ0KSA9PiBwYXJ0LmluZGV4ICE9PSAtMTtcblxuLy8gQWxsb3dzIGBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKWAgdG8gYmUgcmVuYW1lZCBmb3IgYVxuLy8gc21hbGwgbWFudWFsIHNpemUtc2F2aW5ncy5cbmV4cG9ydCBjb25zdCBjcmVhdGVNYXJrZXIgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcblxuLyoqXG4gKiBUaGlzIHJlZ2V4IGV4dHJhY3RzIHRoZSBhdHRyaWJ1dGUgbmFtZSBwcmVjZWRpbmcgYW4gYXR0cmlidXRlLXBvc2l0aW9uXG4gKiBleHByZXNzaW9uLiBJdCBkb2VzIHRoaXMgYnkgbWF0Y2hpbmcgdGhlIHN5bnRheCBhbGxvd2VkIGZvciBhdHRyaWJ1dGVzXG4gKiBhZ2FpbnN0IHRoZSBzdHJpbmcgbGl0ZXJhbCBkaXJlY3RseSBwcmVjZWRpbmcgdGhlIGV4cHJlc3Npb24sIGFzc3VtaW5nIHRoYXRcbiAqIHRoZSBleHByZXNzaW9uIGlzIGluIGFuIGF0dHJpYnV0ZS12YWx1ZSBwb3NpdGlvbi5cbiAqXG4gKiBTZWUgYXR0cmlidXRlcyBpbiB0aGUgSFRNTCBzcGVjOlxuICogaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1L3N5bnRheC5odG1sI2VsZW1lbnRzLWF0dHJpYnV0ZXNcbiAqXG4gKiBcIiBcXHgwOVxceDBhXFx4MGNcXHgwZFwiIGFyZSBIVE1MIHNwYWNlIGNoYXJhY3RlcnM6XG4gKiBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUvaW5mcmFzdHJ1Y3R1cmUuaHRtbCNzcGFjZS1jaGFyYWN0ZXJzXG4gKlxuICogXCJcXDAtXFx4MUZcXHg3Ri1cXHg5RlwiIGFyZSBVbmljb2RlIGNvbnRyb2wgY2hhcmFjdGVycywgd2hpY2ggaW5jbHVkZXMgZXZlcnlcbiAqIHNwYWNlIGNoYXJhY3RlciBleGNlcHQgXCIgXCIuXG4gKlxuICogU28gYW4gYXR0cmlidXRlIGlzOlxuICogICogVGhlIG5hbWU6IGFueSBjaGFyYWN0ZXIgZXhjZXB0IGEgY29udHJvbCBjaGFyYWN0ZXIsIHNwYWNlIGNoYXJhY3RlciwgKCcpLFxuICogICAgKFwiKSwgXCI+XCIsIFwiPVwiLCBvciBcIi9cIlxuICogICogRm9sbG93ZWQgYnkgemVybyBvciBtb3JlIHNwYWNlIGNoYXJhY3RlcnNcbiAqICAqIEZvbGxvd2VkIGJ5IFwiPVwiXG4gKiAgKiBGb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgc3BhY2UgY2hhcmFjdGVyc1xuICogICogRm9sbG93ZWQgYnk6XG4gKiAgICAqIEFueSBjaGFyYWN0ZXIgZXhjZXB0IHNwYWNlLCAoJyksIChcIiksIFwiPFwiLCBcIj5cIiwgXCI9XCIsIChgKSwgb3JcbiAqICAgICogKFwiKSB0aGVuIGFueSBub24tKFwiKSwgb3JcbiAqICAgICogKCcpIHRoZW4gYW55IG5vbi0oJylcbiAqL1xuZXhwb3J0IGNvbnN0IGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXggPVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250cm9sLXJlZ2V4XG4gICAgLyhbIFxceDA5XFx4MGFcXHgwY1xceDBkXSkoW15cXDAtXFx4MUZcXHg3Ri1cXHg5RiBcIic+PS9dKykoWyBcXHgwOVxceDBhXFx4MGNcXHgwZF0qPVsgXFx4MDlcXHgwYVxceDBjXFx4MGRdKig/OlteIFxceDA5XFx4MGFcXHgwY1xceDBkXCInYDw+PV0qfFwiW15cIl0qfCdbXiddKikpJC87XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbXBvcnQge2lzQ0VQb2x5ZmlsbH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHtQYXJ0fSBmcm9tICcuL3BhcnQuanMnO1xuaW1wb3J0IHtSZW5kZXJPcHRpb25zfSBmcm9tICcuL3JlbmRlci1vcHRpb25zLmpzJztcbmltcG9ydCB7VGVtcGxhdGVQcm9jZXNzb3J9IGZyb20gJy4vdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcbmltcG9ydCB7aXNUZW1wbGF0ZVBhcnRBY3RpdmUsIFRlbXBsYXRlLCBUZW1wbGF0ZVBhcnR9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuXG4vKipcbiAqIEFuIGluc3RhbmNlIG9mIGEgYFRlbXBsYXRlYCB0aGF0IGNhbiBiZSBhdHRhY2hlZCB0byB0aGUgRE9NIGFuZCB1cGRhdGVkXG4gKiB3aXRoIG5ldyB2YWx1ZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZUluc3RhbmNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfX3BhcnRzOiBBcnJheTxQYXJ0fHVuZGVmaW5lZD4gPSBbXTtcbiAgcmVhZG9ubHkgcHJvY2Vzc29yOiBUZW1wbGF0ZVByb2Nlc3NvcjtcbiAgcmVhZG9ubHkgb3B0aW9uczogUmVuZGVyT3B0aW9ucztcbiAgcmVhZG9ubHkgdGVtcGxhdGU6IFRlbXBsYXRlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgdGVtcGxhdGU6IFRlbXBsYXRlLCBwcm9jZXNzb3I6IFRlbXBsYXRlUHJvY2Vzc29yLFxuICAgICAgb3B0aW9uczogUmVuZGVyT3B0aW9ucykge1xuICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICB0aGlzLnByb2Nlc3NvciA9IHByb2Nlc3NvcjtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgdXBkYXRlKHZhbHVlczogcmVhZG9ubHkgdW5rbm93bltdKSB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGZvciAoY29uc3QgcGFydCBvZiB0aGlzLl9fcGFydHMpIHtcbiAgICAgIGlmIChwYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFydC5zZXRWYWx1ZSh2YWx1ZXNbaV0pO1xuICAgICAgfVxuICAgICAgaSsrO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHBhcnQgb2YgdGhpcy5fX3BhcnRzKSB7XG4gICAgICBpZiAocGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcnQuY29tbWl0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2Nsb25lKCk6IERvY3VtZW50RnJhZ21lbnQge1xuICAgIC8vIFRoZXJlIGFyZSBhIG51bWJlciBvZiBzdGVwcyBpbiB0aGUgbGlmZWN5Y2xlIG9mIGEgdGVtcGxhdGUgaW5zdGFuY2Unc1xuICAgIC8vIERPTSBmcmFnbWVudDpcbiAgICAvLyAgMS4gQ2xvbmUgLSBjcmVhdGUgdGhlIGluc3RhbmNlIGZyYWdtZW50XG4gICAgLy8gIDIuIEFkb3B0IC0gYWRvcHQgaW50byB0aGUgbWFpbiBkb2N1bWVudFxuICAgIC8vICAzLiBQcm9jZXNzIC0gZmluZCBwYXJ0IG1hcmtlcnMgYW5kIGNyZWF0ZSBwYXJ0c1xuICAgIC8vICA0LiBVcGdyYWRlIC0gdXBncmFkZSBjdXN0b20gZWxlbWVudHNcbiAgICAvLyAgNS4gVXBkYXRlIC0gc2V0IG5vZGUsIGF0dHJpYnV0ZSwgcHJvcGVydHksIGV0Yy4sIHZhbHVlc1xuICAgIC8vICA2LiBDb25uZWN0IC0gY29ubmVjdCB0byB0aGUgZG9jdW1lbnQuIE9wdGlvbmFsIGFuZCBvdXRzaWRlIG9mIHRoaXNcbiAgICAvLyAgICAgbWV0aG9kLlxuICAgIC8vXG4gICAgLy8gV2UgaGF2ZSBhIGZldyBjb25zdHJhaW50cyBvbiB0aGUgb3JkZXJpbmcgb2YgdGhlc2Ugc3RlcHM6XG4gICAgLy8gICogV2UgbmVlZCB0byB1cGdyYWRlIGJlZm9yZSB1cGRhdGluZywgc28gdGhhdCBwcm9wZXJ0eSB2YWx1ZXMgd2lsbCBwYXNzXG4gICAgLy8gICAgdGhyb3VnaCBhbnkgcHJvcGVydHkgc2V0dGVycy5cbiAgICAvLyAgKiBXZSB3b3VsZCBsaWtlIHRvIHByb2Nlc3MgYmVmb3JlIHVwZ3JhZGluZyBzbyB0aGF0IHdlJ3JlIHN1cmUgdGhhdCB0aGVcbiAgICAvLyAgICBjbG9uZWQgZnJhZ21lbnQgaXMgaW5lcnQgYW5kIG5vdCBkaXN0dXJiZWQgYnkgc2VsZi1tb2RpZnlpbmcgRE9NLlxuICAgIC8vICAqIFdlIHdhbnQgY3VzdG9tIGVsZW1lbnRzIHRvIHVwZ3JhZGUgZXZlbiBpbiBkaXNjb25uZWN0ZWQgZnJhZ21lbnRzLlxuICAgIC8vXG4gICAgLy8gR2l2ZW4gdGhlc2UgY29uc3RyYWludHMsIHdpdGggZnVsbCBjdXN0b20gZWxlbWVudHMgc3VwcG9ydCB3ZSB3b3VsZFxuICAgIC8vIHByZWZlciB0aGUgb3JkZXI6IENsb25lLCBQcm9jZXNzLCBBZG9wdCwgVXBncmFkZSwgVXBkYXRlLCBDb25uZWN0XG4gICAgLy9cbiAgICAvLyBCdXQgU2FmYXJpIGRvZXMgbm90IGltcGxlbWVudCBDdXN0b21FbGVtZW50UmVnaXN0cnkjdXBncmFkZSwgc28gd2VcbiAgICAvLyBjYW4gbm90IGltcGxlbWVudCB0aGF0IG9yZGVyIGFuZCBzdGlsbCBoYXZlIHVwZ3JhZGUtYmVmb3JlLXVwZGF0ZSBhbmRcbiAgICAvLyB1cGdyYWRlIGRpc2Nvbm5lY3RlZCBmcmFnbWVudHMuIFNvIHdlIGluc3RlYWQgc2FjcmlmaWNlIHRoZVxuICAgIC8vIHByb2Nlc3MtYmVmb3JlLXVwZ3JhZGUgY29uc3RyYWludCwgc2luY2UgaW4gQ3VzdG9tIEVsZW1lbnRzIHYxIGVsZW1lbnRzXG4gICAgLy8gbXVzdCBub3QgbW9kaWZ5IHRoZWlyIGxpZ2h0IERPTSBpbiB0aGUgY29uc3RydWN0b3IuIFdlIHN0aWxsIGhhdmUgaXNzdWVzXG4gICAgLy8gd2hlbiBjby1leGlzdGluZyB3aXRoIENFdjAgZWxlbWVudHMgbGlrZSBQb2x5bWVyIDEsIGFuZCB3aXRoIHBvbHlmaWxsc1xuICAgIC8vIHRoYXQgZG9uJ3Qgc3RyaWN0bHkgYWRoZXJlIHRvIHRoZSBuby1tb2RpZmljYXRpb24gcnVsZSBiZWNhdXNlIHNoYWRvd1xuICAgIC8vIERPTSwgd2hpY2ggbWF5IGJlIGNyZWF0ZWQgaW4gdGhlIGNvbnN0cnVjdG9yLCBpcyBlbXVsYXRlZCBieSBiZWluZyBwbGFjZWRcbiAgICAvLyBpbiB0aGUgbGlnaHQgRE9NLlxuICAgIC8vXG4gICAgLy8gVGhlIHJlc3VsdGluZyBvcmRlciBpcyBvbiBuYXRpdmUgaXM6IENsb25lLCBBZG9wdCwgVXBncmFkZSwgUHJvY2VzcyxcbiAgICAvLyBVcGRhdGUsIENvbm5lY3QuIGRvY3VtZW50LmltcG9ydE5vZGUoKSBwZXJmb3JtcyBDbG9uZSwgQWRvcHQsIGFuZCBVcGdyYWRlXG4gICAgLy8gaW4gb25lIHN0ZXAuXG4gICAgLy9cbiAgICAvLyBUaGUgQ3VzdG9tIEVsZW1lbnRzIHYxIHBvbHlmaWxsIHN1cHBvcnRzIHVwZ3JhZGUoKSwgc28gdGhlIG9yZGVyIHdoZW5cbiAgICAvLyBwb2x5ZmlsbGVkIGlzIHRoZSBtb3JlIGlkZWFsOiBDbG9uZSwgUHJvY2VzcywgQWRvcHQsIFVwZ3JhZGUsIFVwZGF0ZSxcbiAgICAvLyBDb25uZWN0LlxuXG4gICAgY29uc3QgZnJhZ21lbnQgPSBpc0NFUG9seWZpbGwgP1xuICAgICAgICB0aGlzLnRlbXBsYXRlLmVsZW1lbnQuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgRG9jdW1lbnRGcmFnbWVudCA6XG4gICAgICAgIGRvY3VtZW50LmltcG9ydE5vZGUodGhpcy50ZW1wbGF0ZS5lbGVtZW50LmNvbnRlbnQsIHRydWUpO1xuXG4gICAgY29uc3Qgc3RhY2s6IE5vZGVbXSA9IFtdO1xuICAgIGNvbnN0IHBhcnRzID0gdGhpcy50ZW1wbGF0ZS5wYXJ0cztcbiAgICAvLyBFZGdlIG5lZWRzIGFsbCA0IHBhcmFtZXRlcnMgcHJlc2VudDsgSUUxMSBuZWVkcyAzcmQgcGFyYW1ldGVyIHRvIGJlIG51bGxcbiAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKFxuICAgICAgICBmcmFnbWVudCxcbiAgICAgICAgMTMzIC8qIE5vZGVGaWx0ZXIuU0hPV197RUxFTUVOVHxDT01NRU5UfFRFWFR9ICovLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSk7XG4gICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgbGV0IG5vZGVJbmRleCA9IDA7XG4gICAgbGV0IHBhcnQ6IFRlbXBsYXRlUGFydDtcbiAgICBsZXQgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgdGhlIG5vZGVzIGFuZCBwYXJ0cyBvZiBhIHRlbXBsYXRlXG4gICAgd2hpbGUgKHBhcnRJbmRleCA8IHBhcnRzLmxlbmd0aCkge1xuICAgICAgcGFydCA9IHBhcnRzW3BhcnRJbmRleF07XG4gICAgICBpZiAoIWlzVGVtcGxhdGVQYXJ0QWN0aXZlKHBhcnQpKSB7XG4gICAgICAgIHRoaXMuX19wYXJ0cy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gUHJvZ3Jlc3MgdGhlIHRyZWUgd2Fsa2VyIHVudGlsIHdlIGZpbmQgb3VyIG5leHQgcGFydCdzIG5vZGUuXG4gICAgICAvLyBOb3RlIHRoYXQgbXVsdGlwbGUgcGFydHMgbWF5IHNoYXJlIHRoZSBzYW1lIG5vZGUgKGF0dHJpYnV0ZSBwYXJ0c1xuICAgICAgLy8gb24gYSBzaW5nbGUgZWxlbWVudCksIHNvIHRoaXMgbG9vcCBtYXkgbm90IHJ1biBhdCBhbGwuXG4gICAgICB3aGlsZSAobm9kZUluZGV4IDwgcGFydC5pbmRleCkge1xuICAgICAgICBub2RlSW5kZXgrKztcbiAgICAgICAgaWYgKG5vZGUhLm5vZGVOYW1lID09PSAnVEVNUExBVEUnKSB7XG4gICAgICAgICAgc3RhY2sucHVzaChub2RlISk7XG4gICAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gKG5vZGUgYXMgSFRNTFRlbXBsYXRlRWxlbWVudCkuY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKSkgPT09IG51bGwpIHtcbiAgICAgICAgICAvLyBXZSd2ZSBleGhhdXN0ZWQgdGhlIGNvbnRlbnQgaW5zaWRlIGEgbmVzdGVkIHRlbXBsYXRlIGVsZW1lbnQuXG4gICAgICAgICAgLy8gQmVjYXVzZSB3ZSBzdGlsbCBoYXZlIHBhcnRzICh0aGUgb3V0ZXIgZm9yLWxvb3ApLCB3ZSBrbm93OlxuICAgICAgICAgIC8vIC0gVGhlcmUgaXMgYSB0ZW1wbGF0ZSBpbiB0aGUgc3RhY2tcbiAgICAgICAgICAvLyAtIFRoZSB3YWxrZXIgd2lsbCBmaW5kIGEgbmV4dE5vZGUgb3V0c2lkZSB0aGUgdGVtcGxhdGVcbiAgICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSBzdGFjay5wb3AoKSE7XG4gICAgICAgICAgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFdlJ3ZlIGFycml2ZWQgYXQgb3VyIHBhcnQncyBub2RlLlxuICAgICAgaWYgKHBhcnQudHlwZSA9PT0gJ25vZGUnKSB7XG4gICAgICAgIGNvbnN0IHBhcnQgPSB0aGlzLnByb2Nlc3Nvci5oYW5kbGVUZXh0RXhwcmVzc2lvbih0aGlzLm9wdGlvbnMpO1xuICAgICAgICBwYXJ0Lmluc2VydEFmdGVyTm9kZShub2RlIS5wcmV2aW91c1NpYmxpbmchKTtcbiAgICAgICAgdGhpcy5fX3BhcnRzLnB1c2gocGFydCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9fcGFydHMucHVzaCguLi50aGlzLnByb2Nlc3Nvci5oYW5kbGVBdHRyaWJ1dGVFeHByZXNzaW9ucyhcbiAgICAgICAgICAgIG5vZGUgYXMgRWxlbWVudCwgcGFydC5uYW1lLCBwYXJ0LnN0cmluZ3MsIHRoaXMub3B0aW9ucykpO1xuICAgICAgfVxuICAgICAgcGFydEluZGV4Kys7XG4gICAgfVxuXG4gICAgaWYgKGlzQ0VQb2x5ZmlsbCkge1xuICAgICAgZG9jdW1lbnQuYWRvcHROb2RlKGZyYWdtZW50KTtcbiAgICAgIGN1c3RvbUVsZW1lbnRzLnVwZ3JhZGUoZnJhZ21lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gZnJhZ21lbnQ7XG4gIH1cbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5cbmltcG9ydCB7cmVwYXJlbnROb2Rlc30gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHtUZW1wbGF0ZVByb2Nlc3Nvcn0gZnJvbSAnLi90ZW1wbGF0ZS1wcm9jZXNzb3IuanMnO1xuaW1wb3J0IHtib3VuZEF0dHJpYnV0ZVN1ZmZpeCwgbGFzdEF0dHJpYnV0ZU5hbWVSZWdleCwgbWFya2VyLCBub2RlTWFya2VyfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcblxuZGVjbGFyZSBjb25zdCB0cnVzdGVkVHlwZXM6IHR5cGVvZiB3aW5kb3cudHJ1c3RlZFR5cGVzO1xuLyoqXG4gKiBPdXIgVHJ1c3RlZFR5cGVQb2xpY3kgZm9yIEhUTUwgd2hpY2ggaXMgZGVjbGFyZWQgdXNpbmcgdGhlIGh0bWwgdGVtcGxhdGVcbiAqIHRhZyBmdW5jdGlvbi5cbiAqXG4gKiBUaGF0IEhUTUwgaXMgYSBkZXZlbG9wZXItYXV0aG9yZWQgY29uc3RhbnQsIGFuZCBpcyBwYXJzZWQgd2l0aCBpbm5lckhUTUxcbiAqIGJlZm9yZSBhbnkgdW50cnVzdGVkIGV4cHJlc3Npb25zIGhhdmUgYmVlbiBtaXhlZCBpbi4gVGhlcmVmb3IgaXQgaXNcbiAqIGNvbnNpZGVyZWQgc2FmZSBieSBjb25zdHJ1Y3Rpb24uXG4gKi9cbmNvbnN0IHBvbGljeSA9IHdpbmRvdy50cnVzdGVkVHlwZXMgJiZcbiAgICB0cnVzdGVkVHlwZXMhLmNyZWF0ZVBvbGljeSgnbGl0LWh0bWwnLCB7Y3JlYXRlSFRNTDogKHMpID0+IHN9KTtcblxuY29uc3QgY29tbWVudE1hcmtlciA9IGAgJHttYXJrZXJ9IGA7XG5cbi8qKlxuICogVGhlIHJldHVybiB0eXBlIG9mIGBodG1sYCwgd2hpY2ggaG9sZHMgYSBUZW1wbGF0ZSBhbmQgdGhlIHZhbHVlcyBmcm9tXG4gKiBpbnRlcnBvbGF0ZWQgZXhwcmVzc2lvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVJlc3VsdCB7XG4gIHJlYWRvbmx5IHN0cmluZ3M6IFRlbXBsYXRlU3RyaW5nc0FycmF5O1xuICByZWFkb25seSB2YWx1ZXM6IHJlYWRvbmx5IHVua25vd25bXTtcbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xuICByZWFkb25seSBwcm9jZXNzb3I6IFRlbXBsYXRlUHJvY2Vzc29yO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgc3RyaW5nczogVGVtcGxhdGVTdHJpbmdzQXJyYXksIHZhbHVlczogcmVhZG9ubHkgdW5rbm93bltdLCB0eXBlOiBzdHJpbmcsXG4gICAgICBwcm9jZXNzb3I6IFRlbXBsYXRlUHJvY2Vzc29yKSB7XG4gICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgb2YgSFRNTCB1c2VkIHRvIGNyZWF0ZSBhIGA8dGVtcGxhdGU+YCBlbGVtZW50LlxuICAgKi9cbiAgZ2V0SFRNTCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGwgPSB0aGlzLnN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGxldCBpc0NvbW1lbnRCaW5kaW5nID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3QgcyA9IHRoaXMuc3RyaW5nc1tpXTtcbiAgICAgIC8vIEZvciBlYWNoIGJpbmRpbmcgd2Ugd2FudCB0byBkZXRlcm1pbmUgdGhlIGtpbmQgb2YgbWFya2VyIHRvIGluc2VydFxuICAgICAgLy8gaW50byB0aGUgdGVtcGxhdGUgc291cmNlIGJlZm9yZSBpdCdzIHBhcnNlZCBieSB0aGUgYnJvd3NlcidzIEhUTUxcbiAgICAgIC8vIHBhcnNlci4gVGhlIG1hcmtlciB0eXBlIGlzIGJhc2VkIG9uIHdoZXRoZXIgdGhlIGV4cHJlc3Npb24gaXMgaW4gYW5cbiAgICAgIC8vIGF0dHJpYnV0ZSwgdGV4dCwgb3IgY29tbWVudCBwb3NpdGlvbi5cbiAgICAgIC8vICAgKiBGb3Igbm9kZS1wb3NpdGlvbiBiaW5kaW5ncyB3ZSBpbnNlcnQgYSBjb21tZW50IHdpdGggdGhlIG1hcmtlclxuICAgICAgLy8gICAgIHNlbnRpbmVsIGFzIGl0cyB0ZXh0IGNvbnRlbnQsIGxpa2UgPCEtLXt7bGl0LWd1aWR9fS0tPi5cbiAgICAgIC8vICAgKiBGb3IgYXR0cmlidXRlIGJpbmRpbmdzIHdlIGluc2VydCBqdXN0IHRoZSBtYXJrZXIgc2VudGluZWwgZm9yIHRoZVxuICAgICAgLy8gICAgIGZpcnN0IGJpbmRpbmcsIHNvIHRoYXQgd2Ugc3VwcG9ydCB1bnF1b3RlZCBhdHRyaWJ1dGUgYmluZGluZ3MuXG4gICAgICAvLyAgICAgU3Vic2VxdWVudCBiaW5kaW5ncyBjYW4gdXNlIGEgY29tbWVudCBtYXJrZXIgYmVjYXVzZSBtdWx0aS1iaW5kaW5nXG4gICAgICAvLyAgICAgYXR0cmlidXRlcyBtdXN0IGJlIHF1b3RlZC5cbiAgICAgIC8vICAgKiBGb3IgY29tbWVudCBiaW5kaW5ncyB3ZSBpbnNlcnQganVzdCB0aGUgbWFya2VyIHNlbnRpbmVsIHNvIHdlIGRvbid0XG4gICAgICAvLyAgICAgY2xvc2UgdGhlIGNvbW1lbnQuXG4gICAgICAvL1xuICAgICAgLy8gVGhlIGZvbGxvd2luZyBjb2RlIHNjYW5zIHRoZSB0ZW1wbGF0ZSBzb3VyY2UsIGJ1dCBpcyAqbm90KiBhbiBIVE1MXG4gICAgICAvLyBwYXJzZXIuIFdlIGRvbid0IG5lZWQgdG8gdHJhY2sgdGhlIHRyZWUgc3RydWN0dXJlIG9mIHRoZSBIVE1MLCBvbmx5XG4gICAgICAvLyB3aGV0aGVyIGEgYmluZGluZyBpcyBpbnNpZGUgYSBjb21tZW50LCBhbmQgaWYgbm90LCBpZiBpdCBhcHBlYXJzIHRvIGJlXG4gICAgICAvLyB0aGUgZmlyc3QgYmluZGluZyBpbiBhbiBhdHRyaWJ1dGUuXG4gICAgICBjb25zdCBjb21tZW50T3BlbiA9IHMubGFzdEluZGV4T2YoJzwhLS0nKTtcbiAgICAgIC8vIFdlJ3JlIGluIGNvbW1lbnQgcG9zaXRpb24gaWYgd2UgaGF2ZSBhIGNvbW1lbnQgb3BlbiB3aXRoIG5vIGZvbGxvd2luZ1xuICAgICAgLy8gY29tbWVudCBjbG9zZS4gQmVjYXVzZSA8LS0gY2FuIGFwcGVhciBpbiBhbiBhdHRyaWJ1dGUgdmFsdWUgdGhlcmUgY2FuXG4gICAgICAvLyBiZSBmYWxzZSBwb3NpdGl2ZXMuXG4gICAgICBpc0NvbW1lbnRCaW5kaW5nID0gKGNvbW1lbnRPcGVuID4gLTEgfHwgaXNDb21tZW50QmluZGluZykgJiZcbiAgICAgICAgICBzLmluZGV4T2YoJy0tPicsIGNvbW1lbnRPcGVuICsgMSkgPT09IC0xO1xuICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHdlIGhhdmUgYW4gYXR0cmlidXRlLWxpa2Ugc2VxdWVuY2UgcHJlY2VkaW5nIHRoZVxuICAgICAgLy8gZXhwcmVzc2lvbi4gVGhpcyBjYW4gbWF0Y2ggXCJuYW1lPXZhbHVlXCIgbGlrZSBzdHJ1Y3R1cmVzIGluIHRleHQsXG4gICAgICAvLyBjb21tZW50cywgYW5kIGF0dHJpYnV0ZSB2YWx1ZXMsIHNvIHRoZXJlIGNhbiBiZSBmYWxzZS1wb3NpdGl2ZXMuXG4gICAgICBjb25zdCBhdHRyaWJ1dGVNYXRjaCA9IGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXguZXhlYyhzKTtcbiAgICAgIGlmIChhdHRyaWJ1dGVNYXRjaCA9PT0gbnVsbCkge1xuICAgICAgICAvLyBXZSdyZSBvbmx5IGluIHRoaXMgYnJhbmNoIGlmIHdlIGRvbid0IGhhdmUgYSBhdHRyaWJ1dGUtbGlrZVxuICAgICAgICAvLyBwcmVjZWRpbmcgc2VxdWVuY2UuIEZvciBjb21tZW50cywgdGhpcyBndWFyZHMgYWdhaW5zdCB1bnVzdWFsXG4gICAgICAgIC8vIGF0dHJpYnV0ZSB2YWx1ZXMgbGlrZSA8ZGl2IGZvbz1cIjwhLS0keydiYXInfVwiPi4gQ2FzZXMgbGlrZVxuICAgICAgICAvLyA8IS0tIGZvbz0keydiYXInfS0tPiBhcmUgaGFuZGxlZCBjb3JyZWN0bHkgaW4gdGhlIGF0dHJpYnV0ZSBicmFuY2hcbiAgICAgICAgLy8gYmVsb3cuXG4gICAgICAgIGh0bWwgKz0gcyArIChpc0NvbW1lbnRCaW5kaW5nID8gY29tbWVudE1hcmtlciA6IG5vZGVNYXJrZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIGF0dHJpYnV0ZXMgd2UgdXNlIGp1c3QgYSBtYXJrZXIgc2VudGluZWwsIGFuZCBhbHNvIGFwcGVuZCBhXG4gICAgICAgIC8vICRsaXQkIHN1ZmZpeCB0byB0aGUgbmFtZSB0byBvcHQtb3V0IG9mIGF0dHJpYnV0ZS1zcGVjaWZpYyBwYXJzaW5nXG4gICAgICAgIC8vIHRoYXQgSUUgYW5kIEVkZ2UgZG8gZm9yIHN0eWxlIGFuZCBjZXJ0YWluIFNWRyBhdHRyaWJ1dGVzLlxuICAgICAgICBodG1sICs9IHMuc3Vic3RyKDAsIGF0dHJpYnV0ZU1hdGNoLmluZGV4KSArIGF0dHJpYnV0ZU1hdGNoWzFdICtcbiAgICAgICAgICAgIGF0dHJpYnV0ZU1hdGNoWzJdICsgYm91bmRBdHRyaWJ1dGVTdWZmaXggKyBhdHRyaWJ1dGVNYXRjaFszXSArXG4gICAgICAgICAgICBtYXJrZXI7XG4gICAgICB9XG4gICAgfVxuICAgIGh0bWwgKz0gdGhpcy5zdHJpbmdzW2xdO1xuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0VGVtcGxhdGVFbGVtZW50KCk6IEhUTUxUZW1wbGF0ZUVsZW1lbnQge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLmdldEhUTUwoKTtcbiAgICBpZiAocG9saWN5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIHRoaXMgaXMgc2VjdXJlIGJlY2F1c2UgYHRoaXMuc3RyaW5nc2AgaXMgYSBUZW1wbGF0ZVN0cmluZ3NBcnJheS5cbiAgICAgIC8vIFRPRE86IHZhbGlkYXRlIHRoaXMgd2hlblxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtYXJyYXktaXMtdGVtcGxhdGUtb2JqZWN0IGlzXG4gICAgICAvLyBpbXBsZW1lbnRlZC5cbiAgICAgIHZhbHVlID0gcG9saWN5LmNyZWF0ZUhUTUwodmFsdWUpIGFzIHVua25vd24gYXMgc3RyaW5nO1xuICAgIH1cbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cbn1cblxuLyoqXG4gKiBBIFRlbXBsYXRlUmVzdWx0IGZvciBTVkcgZnJhZ21lbnRzLlxuICpcbiAqIFRoaXMgY2xhc3Mgd3JhcHMgSFRNTCBpbiBhbiBgPHN2Zz5gIHRhZyBpbiBvcmRlciB0byBwYXJzZSBpdHMgY29udGVudHMgaW4gdGhlXG4gKiBTVkcgbmFtZXNwYWNlLCB0aGVuIG1vZGlmaWVzIHRoZSB0ZW1wbGF0ZSB0byByZW1vdmUgdGhlIGA8c3ZnPmAgdGFnIHNvIHRoYXRcbiAqIGNsb25lcyBvbmx5IGNvbnRhaW5lciB0aGUgb3JpZ2luYWwgZnJhZ21lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBTVkdUZW1wbGF0ZVJlc3VsdCBleHRlbmRzIFRlbXBsYXRlUmVzdWx0IHtcbiAgZ2V0SFRNTCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgPHN2Zz4ke3N1cGVyLmdldEhUTUwoKX08L3N2Zz5gO1xuICB9XG5cbiAgZ2V0VGVtcGxhdGVFbGVtZW50KCk6IEhUTUxUZW1wbGF0ZUVsZW1lbnQge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gc3VwZXIuZ2V0VGVtcGxhdGVFbGVtZW50KCk7XG4gICAgY29uc3QgY29udGVudCA9IHRlbXBsYXRlLmNvbnRlbnQ7XG4gICAgY29uc3Qgc3ZnRWxlbWVudCA9IGNvbnRlbnQuZmlyc3RDaGlsZCE7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChzdmdFbGVtZW50KTtcbiAgICByZXBhcmVudE5vZGVzKGNvbnRlbnQsIHN2Z0VsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbXBvcnQge2lzRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZS5qcyc7XG5pbXBvcnQge3JlbW92ZU5vZGVzfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQge25vQ2hhbmdlLCBub3RoaW5nLCBQYXJ0fSBmcm9tICcuL3BhcnQuanMnO1xuaW1wb3J0IHtSZW5kZXJPcHRpb25zfSBmcm9tICcuL3JlbmRlci1vcHRpb25zLmpzJztcbmltcG9ydCB7VGVtcGxhdGVJbnN0YW5jZX0gZnJvbSAnLi90ZW1wbGF0ZS1pbnN0YW5jZS5qcyc7XG5pbXBvcnQge1RlbXBsYXRlUmVzdWx0fSBmcm9tICcuL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5pbXBvcnQge2NyZWF0ZU1hcmtlcn0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXR5cGVvZi1vcGVyYXRvclxuZXhwb3J0IHR5cGUgUHJpbWl0aXZlID0gbnVsbHx1bmRlZmluZWR8Ym9vbGVhbnxudW1iZXJ8c3RyaW5nfHN5bWJvbHxiaWdpbnQ7XG5leHBvcnQgY29uc3QgaXNQcmltaXRpdmUgPSAodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBQcmltaXRpdmUgPT4ge1xuICByZXR1cm4gKFxuICAgICAgdmFsdWUgPT09IG51bGwgfHxcbiAgICAgICEodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpKTtcbn07XG5leHBvcnQgY29uc3QgaXNJdGVyYWJsZSA9ICh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIEl0ZXJhYmxlPHVua25vd24+ID0+IHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpIHx8XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgISEodmFsdWUgJiYgKHZhbHVlIGFzIGFueSlbU3ltYm9sLml0ZXJhdG9yXSk7XG59O1xuXG4vKipcbiAqIFdyaXRlcyBhdHRyaWJ1dGUgdmFsdWVzIHRvIHRoZSBET00gZm9yIGEgZ3JvdXAgb2YgQXR0cmlidXRlUGFydHMgYm91bmQgdG8gYVxuICogc2luZ2xlIGF0dHJpYnV0ZS4gVGhlIHZhbHVlIGlzIG9ubHkgc2V0IG9uY2UgZXZlbiBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgcGFydHNcbiAqIGZvciBhbiBhdHRyaWJ1dGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGVDb21taXR0ZXIge1xuICByZWFkb25seSBlbGVtZW50OiBFbGVtZW50O1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gIHJlYWRvbmx5IHN0cmluZ3M6IFJlYWRvbmx5QXJyYXk8c3RyaW5nPjtcbiAgcmVhZG9ubHkgcGFydHM6IFJlYWRvbmx5QXJyYXk8QXR0cmlidXRlUGFydD47XG4gIGRpcnR5ID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50LCBuYW1lOiBzdHJpbmcsIHN0cmluZ3M6IFJlYWRvbmx5QXJyYXk8c3RyaW5nPikge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnN0cmluZ3MgPSBzdHJpbmdzO1xuICAgIHRoaXMucGFydHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cmluZ3MubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAodGhpcy5wYXJ0cyBhcyBBdHRyaWJ1dGVQYXJ0W10pW2ldID0gdGhpcy5fY3JlYXRlUGFydCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgc2luZ2xlIHBhcnQuIE92ZXJyaWRlIHRoaXMgdG8gY3JlYXRlIGEgZGlmZmVybnQgdHlwZSBvZiBwYXJ0LlxuICAgKi9cbiAgcHJvdGVjdGVkIF9jcmVhdGVQYXJ0KCk6IEF0dHJpYnV0ZVBhcnQge1xuICAgIHJldHVybiBuZXcgQXR0cmlidXRlUGFydCh0aGlzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfZ2V0VmFsdWUoKTogdW5rbm93biB7XG4gICAgY29uc3Qgc3RyaW5ncyA9IHRoaXMuc3RyaW5ncztcbiAgICBjb25zdCBsID0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IHBhcnRzID0gdGhpcy5wYXJ0cztcblxuICAgIC8vIElmIHdlJ3JlIGFzc2lnbmluZyBhbiBhdHRyaWJ1dGUgdmlhIHN5bnRheCBsaWtlOlxuICAgIC8vICAgIGF0dHI9XCIke2Zvb31cIiAgb3IgIGF0dHI9JHtmb299XG4gICAgLy8gYnV0IG5vdFxuICAgIC8vICAgIGF0dHI9XCIke2Zvb30gJHtiYXJ9XCIgb3IgYXR0cj1cIiR7Zm9vfSBiYXpcIlxuICAgIC8vIHRoZW4gd2UgZG9uJ3Qgd2FudCB0byBjb2VyY2UgdGhlIGF0dHJpYnV0ZSB2YWx1ZSBpbnRvIG9uZSBsb25nXG4gICAgLy8gc3RyaW5nLiBJbnN0ZWFkIHdlIHdhbnQgdG8ganVzdCByZXR1cm4gdGhlIHZhbHVlIGl0c2VsZiBkaXJlY3RseSxcbiAgICAvLyBzbyB0aGF0IHNhbml0aXplRE9NVmFsdWUgY2FuIGdldCB0aGUgYWN0dWFsIHZhbHVlIHJhdGhlciB0aGFuXG4gICAgLy8gU3RyaW5nKHZhbHVlKVxuICAgIC8vIFRoZSBleGNlcHRpb24gaXMgaWYgdiBpcyBhbiBhcnJheSwgaW4gd2hpY2ggY2FzZSB3ZSBkbyB3YW50IHRvIHNtYXNoXG4gICAgLy8gaXQgdG9nZXRoZXIgaW50byBhIHN0cmluZyB3aXRob3V0IGNhbGxpbmcgU3RyaW5nKCkgb24gdGhlIGFycmF5LlxuICAgIC8vXG4gICAgLy8gVGhpcyBhbHNvIGFsbG93cyB0cnVzdGVkIHZhbHVlcyAod2hlbiB1c2luZyBUcnVzdGVkVHlwZXMpIGJlaW5nXG4gICAgLy8gYXNzaWduZWQgdG8gRE9NIHNpbmtzIHdpdGhvdXQgYmVpbmcgc3RyaW5naWZpZWQgaW4gdGhlIHByb2Nlc3MuXG4gICAgaWYgKGwgPT09IDEgJiYgc3RyaW5nc1swXSA9PT0gJycgJiYgc3RyaW5nc1sxXSA9PT0gJycpIHtcbiAgICAgIGNvbnN0IHYgPSBwYXJ0c1swXS52YWx1ZTtcbiAgICAgIGlmICh0eXBlb2YgdiA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyh2KTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdiA9PT0gJ3N0cmluZycgfHwgIWlzSXRlcmFibGUodikpIHtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCB0ZXh0ID0gJyc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgdGV4dCArPSBzdHJpbmdzW2ldO1xuICAgICAgY29uc3QgcGFydCA9IHBhcnRzW2ldO1xuICAgICAgaWYgKHBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCB2ID0gcGFydC52YWx1ZTtcbiAgICAgICAgaWYgKGlzUHJpbWl0aXZlKHYpIHx8ICFpc0l0ZXJhYmxlKHYpKSB7XG4gICAgICAgICAgdGV4dCArPSB0eXBlb2YgdiA9PT0gJ3N0cmluZycgPyB2IDogU3RyaW5nKHYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAoY29uc3QgdCBvZiB2KSB7XG4gICAgICAgICAgICB0ZXh0ICs9IHR5cGVvZiB0ID09PSAnc3RyaW5nJyA/IHQgOiBTdHJpbmcodCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGV4dCArPSBzdHJpbmdzW2xdO1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgY29tbWl0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpcnR5KSB7XG4gICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgdGhpcy5fZ2V0VmFsdWUoKSBhcyBzdHJpbmcpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEEgUGFydCB0aGF0IGNvbnRyb2xzIGFsbCBvciBwYXJ0IG9mIGFuIGF0dHJpYnV0ZSB2YWx1ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZVBhcnQgaW1wbGVtZW50cyBQYXJ0IHtcbiAgcmVhZG9ubHkgY29tbWl0dGVyOiBBdHRyaWJ1dGVDb21taXR0ZXI7XG4gIHZhbHVlOiB1bmtub3duID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKGNvbW1pdHRlcjogQXR0cmlidXRlQ29tbWl0dGVyKSB7XG4gICAgdGhpcy5jb21taXR0ZXIgPSBjb21taXR0ZXI7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogdW5rbm93bik6IHZvaWQge1xuICAgIGlmICh2YWx1ZSAhPT0gbm9DaGFuZ2UgJiYgKCFpc1ByaW1pdGl2ZSh2YWx1ZSkgfHwgdmFsdWUgIT09IHRoaXMudmFsdWUpKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAvLyBJZiB0aGUgdmFsdWUgaXMgYSBub3QgYSBkaXJlY3RpdmUsIGRpcnR5IHRoZSBjb21taXR0ZXIgc28gdGhhdCBpdCdsbFxuICAgICAgLy8gY2FsbCBzZXRBdHRyaWJ1dGUuIElmIHRoZSB2YWx1ZSBpcyBhIGRpcmVjdGl2ZSwgaXQnbGwgZGlydHkgdGhlXG4gICAgICAvLyBjb21taXR0ZXIgaWYgaXQgY2FsbHMgc2V0VmFsdWUoKS5cbiAgICAgIGlmICghaXNEaXJlY3RpdmUodmFsdWUpKSB7XG4gICAgICAgIHRoaXMuY29tbWl0dGVyLmRpcnR5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21taXQoKSB7XG4gICAgd2hpbGUgKGlzRGlyZWN0aXZlKHRoaXMudmFsdWUpKSB7XG4gICAgICBjb25zdCBkaXJlY3RpdmUgPSB0aGlzLnZhbHVlO1xuICAgICAgdGhpcy52YWx1ZSA9IG5vQ2hhbmdlO1xuICAgICAgZGlyZWN0aXZlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jb21taXR0ZXIuY29tbWl0KCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIFBhcnQgdGhhdCBjb250cm9scyBhIGxvY2F0aW9uIHdpdGhpbiBhIE5vZGUgdHJlZS4gTGlrZSBhIFJhbmdlLCBOb2RlUGFydFxuICogaGFzIHN0YXJ0IGFuZCBlbmQgbG9jYXRpb25zIGFuZCBjYW4gc2V0IGFuZCB1cGRhdGUgdGhlIE5vZGVzIGJldHdlZW4gdGhvc2VcbiAqIGxvY2F0aW9ucy5cbiAqXG4gKiBOb2RlUGFydHMgc3VwcG9ydCBzZXZlcmFsIHZhbHVlIHR5cGVzOiBwcmltaXRpdmVzLCBOb2RlcywgVGVtcGxhdGVSZXN1bHRzLFxuICogYXMgd2VsbCBhcyBhcnJheXMgYW5kIGl0ZXJhYmxlcyBvZiB0aG9zZSB0eXBlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIE5vZGVQYXJ0IGltcGxlbWVudHMgUGFydCB7XG4gIHJlYWRvbmx5IG9wdGlvbnM6IFJlbmRlck9wdGlvbnM7XG4gIHN0YXJ0Tm9kZSE6IE5vZGU7XG4gIGVuZE5vZGUhOiBOb2RlO1xuICB2YWx1ZTogdW5rbm93biA9IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfX3BlbmRpbmdWYWx1ZTogdW5rbm93biA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBSZW5kZXJPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIHRoaXMgcGFydCBpbnRvIGEgY29udGFpbmVyLlxuICAgKlxuICAgKiBUaGlzIHBhcnQgbXVzdCBiZSBlbXB0eSwgYXMgaXRzIGNvbnRlbnRzIGFyZSBub3QgYXV0b21hdGljYWxseSBtb3ZlZC5cbiAgICovXG4gIGFwcGVuZEludG8oY29udGFpbmVyOiBOb2RlKSB7XG4gICAgdGhpcy5zdGFydE5vZGUgPSBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWFya2VyKCkpO1xuICAgIHRoaXMuZW5kTm9kZSA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNYXJrZXIoKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5zZXJ0cyB0aGlzIHBhcnQgYWZ0ZXIgdGhlIGByZWZgIG5vZGUgKGJldHdlZW4gYHJlZmAgYW5kIGByZWZgJ3MgbmV4dFxuICAgKiBzaWJsaW5nKS4gQm90aCBgcmVmYCBhbmQgaXRzIG5leHQgc2libGluZyBtdXN0IGJlIHN0YXRpYywgdW5jaGFuZ2luZyBub2Rlc1xuICAgKiBzdWNoIGFzIHRob3NlIHRoYXQgYXBwZWFyIGluIGEgbGl0ZXJhbCBzZWN0aW9uIG9mIGEgdGVtcGxhdGUuXG4gICAqXG4gICAqIFRoaXMgcGFydCBtdXN0IGJlIGVtcHR5LCBhcyBpdHMgY29udGVudHMgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IG1vdmVkLlxuICAgKi9cbiAgaW5zZXJ0QWZ0ZXJOb2RlKHJlZjogTm9kZSkge1xuICAgIHRoaXMuc3RhcnROb2RlID0gcmVmO1xuICAgIHRoaXMuZW5kTm9kZSA9IHJlZi5uZXh0U2libGluZyE7XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyB0aGlzIHBhcnQgaW50byBhIHBhcmVudCBwYXJ0LlxuICAgKlxuICAgKiBUaGlzIHBhcnQgbXVzdCBiZSBlbXB0eSwgYXMgaXRzIGNvbnRlbnRzIGFyZSBub3QgYXV0b21hdGljYWxseSBtb3ZlZC5cbiAgICovXG4gIGFwcGVuZEludG9QYXJ0KHBhcnQ6IE5vZGVQYXJ0KSB7XG4gICAgcGFydC5fX2luc2VydCh0aGlzLnN0YXJ0Tm9kZSA9IGNyZWF0ZU1hcmtlcigpKTtcbiAgICBwYXJ0Ll9faW5zZXJ0KHRoaXMuZW5kTm9kZSA9IGNyZWF0ZU1hcmtlcigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnRzIHRoaXMgcGFydCBhZnRlciB0aGUgYHJlZmAgcGFydC5cbiAgICpcbiAgICogVGhpcyBwYXJ0IG11c3QgYmUgZW1wdHksIGFzIGl0cyBjb250ZW50cyBhcmUgbm90IGF1dG9tYXRpY2FsbHkgbW92ZWQuXG4gICAqL1xuICBpbnNlcnRBZnRlclBhcnQocmVmOiBOb2RlUGFydCkge1xuICAgIHJlZi5fX2luc2VydCh0aGlzLnN0YXJ0Tm9kZSA9IGNyZWF0ZU1hcmtlcigpKTtcbiAgICB0aGlzLmVuZE5vZGUgPSByZWYuZW5kTm9kZTtcbiAgICByZWYuZW5kTm9kZSA9IHRoaXMuc3RhcnROb2RlO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IHVua25vd24pOiB2b2lkIHtcbiAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBjb21taXQoKSB7XG4gICAgaWYgKHRoaXMuc3RhcnROb2RlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd2hpbGUgKGlzRGlyZWN0aXZlKHRoaXMuX19wZW5kaW5nVmFsdWUpKSB7XG4gICAgICBjb25zdCBkaXJlY3RpdmUgPSB0aGlzLl9fcGVuZGluZ1ZhbHVlO1xuICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlO1xuICAgICAgZGlyZWN0aXZlKHRoaXMpO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX19wZW5kaW5nVmFsdWU7XG4gICAgaWYgKHZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNQcmltaXRpdmUodmFsdWUpKSB7XG4gICAgICBpZiAodmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgICAgdGhpcy5fX2NvbW1pdFRleHQodmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlc3VsdCkge1xuICAgICAgdGhpcy5fX2NvbW1pdFRlbXBsYXRlUmVzdWx0KHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgdGhpcy5fX2NvbW1pdE5vZGUodmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoaXNJdGVyYWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX19jb21taXRJdGVyYWJsZSh2YWx1ZSk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gbm90aGluZykge1xuICAgICAgdGhpcy52YWx1ZSA9IG5vdGhpbmc7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZhbGxiYWNrLCB3aWxsIHJlbmRlciB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uXG4gICAgICB0aGlzLl9fY29tbWl0VGV4dCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfX2luc2VydChub2RlOiBOb2RlKSB7XG4gICAgdGhpcy5lbmROb2RlLnBhcmVudE5vZGUhLmluc2VydEJlZm9yZShub2RlLCB0aGlzLmVuZE5vZGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfX2NvbW1pdE5vZGUodmFsdWU6IE5vZGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jbGVhcigpO1xuICAgIHRoaXMuX19pbnNlcnQodmFsdWUpO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX19jb21taXRUZXh0KHZhbHVlOiB1bmtub3duKTogdm9pZCB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc3RhcnROb2RlLm5leHRTaWJsaW5nITtcbiAgICB2YWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xuICAgIC8vIElmIGB2YWx1ZWAgaXNuJ3QgYWxyZWFkeSBhIHN0cmluZywgd2UgZXhwbGljaXRseSBjb252ZXJ0IGl0IGhlcmUgaW4gY2FzZVxuICAgIC8vIGl0IGNhbid0IGJlIGltcGxpY2l0bHkgY29udmVydGVkIC0gaS5lLiBpdCdzIGEgc3ltYm9sLlxuICAgIGNvbnN0IHZhbHVlQXNTdHJpbmc6IHN0cmluZyA9XG4gICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IFN0cmluZyh2YWx1ZSk7XG4gICAgaWYgKG5vZGUgPT09IHRoaXMuZW5kTm9kZS5wcmV2aW91c1NpYmxpbmcgJiZcbiAgICAgICAgbm9kZS5ub2RlVHlwZSA9PT0gMyAvKiBOb2RlLlRFWFRfTk9ERSAqLykge1xuICAgICAgLy8gSWYgd2Ugb25seSBoYXZlIGEgc2luZ2xlIHRleHQgbm9kZSBiZXR3ZWVuIHRoZSBtYXJrZXJzLCB3ZSBjYW4ganVzdFxuICAgICAgLy8gc2V0IGl0cyB2YWx1ZSwgcmF0aGVyIHRoYW4gcmVwbGFjaW5nIGl0LlxuICAgICAgLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogQ2FuIHdlIGp1c3QgY2hlY2sgaWYgdGhpcy52YWx1ZSBpcyBwcmltaXRpdmU/XG4gICAgICAobm9kZSBhcyBUZXh0KS5kYXRhID0gdmFsdWVBc1N0cmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fX2NvbW1pdE5vZGUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWVBc1N0cmluZykpO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9fY29tbWl0VGVtcGxhdGVSZXN1bHQodmFsdWU6IFRlbXBsYXRlUmVzdWx0KTogdm9pZCB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLm9wdGlvbnMudGVtcGxhdGVGYWN0b3J5KHZhbHVlKTtcbiAgICBpZiAodGhpcy52YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlSW5zdGFuY2UgJiZcbiAgICAgICAgdGhpcy52YWx1ZS50ZW1wbGF0ZSA9PT0gdGVtcGxhdGUpIHtcbiAgICAgIHRoaXMudmFsdWUudXBkYXRlKHZhbHVlLnZhbHVlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBwcm9wYWdhdGUgdGhlIHRlbXBsYXRlIHByb2Nlc3NvciBmcm9tIHRoZSBUZW1wbGF0ZVJlc3VsdFxuICAgICAgLy8gc28gdGhhdCB3ZSB1c2UgaXRzIHN5bnRheCBleHRlbnNpb24sIGV0Yy4gVGhlIHRlbXBsYXRlIGZhY3RvcnkgY29tZXNcbiAgICAgIC8vIGZyb20gdGhlIHJlbmRlciBmdW5jdGlvbiBvcHRpb25zIHNvIHRoYXQgaXQgY2FuIGNvbnRyb2wgdGVtcGxhdGVcbiAgICAgIC8vIGNhY2hpbmcgYW5kIHByZXByb2Nlc3NpbmcuXG4gICAgICBjb25zdCBpbnN0YW5jZSA9XG4gICAgICAgICAgbmV3IFRlbXBsYXRlSW5zdGFuY2UodGVtcGxhdGUsIHZhbHVlLnByb2Nlc3NvciwgdGhpcy5vcHRpb25zKTtcbiAgICAgIGNvbnN0IGZyYWdtZW50ID0gaW5zdGFuY2UuX2Nsb25lKCk7XG4gICAgICBpbnN0YW5jZS51cGRhdGUodmFsdWUudmFsdWVzKTtcbiAgICAgIHRoaXMuX19jb21taXROb2RlKGZyYWdtZW50KTtcbiAgICAgIHRoaXMudmFsdWUgPSBpbnN0YW5jZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9fY29tbWl0SXRlcmFibGUodmFsdWU6IEl0ZXJhYmxlPHVua25vd24+KTogdm9pZCB7XG4gICAgLy8gRm9yIGFuIEl0ZXJhYmxlLCB3ZSBjcmVhdGUgYSBuZXcgSW5zdGFuY2VQYXJ0IHBlciBpdGVtLCB0aGVuIHNldCBpdHNcbiAgICAvLyB2YWx1ZSB0byB0aGUgaXRlbS4gVGhpcyBpcyBhIGxpdHRsZSBiaXQgb2Ygb3ZlcmhlYWQgZm9yIGV2ZXJ5IGl0ZW0gaW5cbiAgICAvLyBhbiBJdGVyYWJsZSwgYnV0IGl0IGxldHMgdXMgcmVjdXJzZSBlYXNpbHkgYW5kIGVmZmljaWVudGx5IHVwZGF0ZSBBcnJheXNcbiAgICAvLyBvZiBUZW1wbGF0ZVJlc3VsdHMgdGhhdCB3aWxsIGJlIGNvbW1vbmx5IHJldHVybmVkIGZyb20gZXhwcmVzc2lvbnMgbGlrZTpcbiAgICAvLyBhcnJheS5tYXAoKGkpID0+IGh0bWxgJHtpfWApLCBieSByZXVzaW5nIGV4aXN0aW5nIFRlbXBsYXRlSW5zdGFuY2VzLlxuXG4gICAgLy8gSWYgX3ZhbHVlIGlzIGFuIGFycmF5LCB0aGVuIHRoZSBwcmV2aW91cyByZW5kZXIgd2FzIG9mIGFuXG4gICAgLy8gaXRlcmFibGUgYW5kIF92YWx1ZSB3aWxsIGNvbnRhaW4gdGhlIE5vZGVQYXJ0cyBmcm9tIHRoZSBwcmV2aW91c1xuICAgIC8vIHJlbmRlci4gSWYgX3ZhbHVlIGlzIG5vdCBhbiBhcnJheSwgY2xlYXIgdGhpcyBwYXJ0IGFuZCBtYWtlIGEgbmV3XG4gICAgLy8gYXJyYXkgZm9yIE5vZGVQYXJ0cy5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBbXTtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvLyBMZXRzIHVzIGtlZXAgdHJhY2sgb2YgaG93IG1hbnkgaXRlbXMgd2Ugc3RhbXBlZCBzbyB3ZSBjYW4gY2xlYXIgbGVmdG92ZXJcbiAgICAvLyBpdGVtcyBmcm9tIGEgcHJldmlvdXMgcmVuZGVyXG4gICAgY29uc3QgaXRlbVBhcnRzID0gdGhpcy52YWx1ZSBhcyBOb2RlUGFydFtdO1xuICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgIGxldCBpdGVtUGFydDogTm9kZVBhcnR8dW5kZWZpbmVkO1xuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHZhbHVlKSB7XG4gICAgICAvLyBUcnkgdG8gcmV1c2UgYW4gZXhpc3RpbmcgcGFydFxuICAgICAgaXRlbVBhcnQgPSBpdGVtUGFydHNbcGFydEluZGV4XTtcblxuICAgICAgLy8gSWYgbm8gZXhpc3RpbmcgcGFydCwgY3JlYXRlIGEgbmV3IG9uZVxuICAgICAgaWYgKGl0ZW1QYXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaXRlbVBhcnQgPSBuZXcgTm9kZVBhcnQodGhpcy5vcHRpb25zKTtcbiAgICAgICAgaXRlbVBhcnRzLnB1c2goaXRlbVBhcnQpO1xuICAgICAgICBpZiAocGFydEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgaXRlbVBhcnQuYXBwZW5kSW50b1BhcnQodGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVBhcnQuaW5zZXJ0QWZ0ZXJQYXJ0KGl0ZW1QYXJ0c1twYXJ0SW5kZXggLSAxXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGl0ZW1QYXJ0LnNldFZhbHVlKGl0ZW0pO1xuICAgICAgaXRlbVBhcnQuY29tbWl0KCk7XG4gICAgICBwYXJ0SW5kZXgrKztcbiAgICB9XG5cbiAgICBpZiAocGFydEluZGV4IDwgaXRlbVBhcnRzLmxlbmd0aCkge1xuICAgICAgLy8gVHJ1bmNhdGUgdGhlIHBhcnRzIGFycmF5IHNvIF92YWx1ZSByZWZsZWN0cyB0aGUgY3VycmVudCBzdGF0ZVxuICAgICAgaXRlbVBhcnRzLmxlbmd0aCA9IHBhcnRJbmRleDtcbiAgICAgIHRoaXMuY2xlYXIoaXRlbVBhcnQgJiYgaXRlbVBhcnQuZW5kTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoc3RhcnROb2RlOiBOb2RlID0gdGhpcy5zdGFydE5vZGUpIHtcbiAgICByZW1vdmVOb2RlcyhcbiAgICAgICAgdGhpcy5zdGFydE5vZGUucGFyZW50Tm9kZSEsIHN0YXJ0Tm9kZS5uZXh0U2libGluZyEsIHRoaXMuZW5kTm9kZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBJbXBsZW1lbnRzIGEgYm9vbGVhbiBhdHRyaWJ1dGUsIHJvdWdobHkgYXMgZGVmaW5lZCBpbiB0aGUgSFRNTFxuICogc3BlY2lmaWNhdGlvbi5cbiAqXG4gKiBJZiB0aGUgdmFsdWUgaXMgdHJ1dGh5LCB0aGVuIHRoZSBhdHRyaWJ1dGUgaXMgcHJlc2VudCB3aXRoIGEgdmFsdWUgb2ZcbiAqICcnLiBJZiB0aGUgdmFsdWUgaXMgZmFsc2V5LCB0aGUgYXR0cmlidXRlIGlzIHJlbW92ZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBCb29sZWFuQXR0cmlidXRlUGFydCBpbXBsZW1lbnRzIFBhcnQge1xuICByZWFkb25seSBlbGVtZW50OiBFbGVtZW50O1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gIHJlYWRvbmx5IHN0cmluZ3M6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICB2YWx1ZTogdW5rbm93biA9IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfX3BlbmRpbmdWYWx1ZTogdW5rbm93biA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50LCBuYW1lOiBzdHJpbmcsIHN0cmluZ3M6IHJlYWRvbmx5IHN0cmluZ1tdKSB7XG4gICAgaWYgKHN0cmluZ3MubGVuZ3RoICE9PSAyIHx8IHN0cmluZ3NbMF0gIT09ICcnIHx8IHN0cmluZ3NbMV0gIT09ICcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ0Jvb2xlYW4gYXR0cmlidXRlcyBjYW4gb25seSBjb250YWluIGEgc2luZ2xlIGV4cHJlc3Npb24nKTtcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogdW5rbm93bik6IHZvaWQge1xuICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGNvbW1pdCgpIHtcbiAgICB3aGlsZSAoaXNEaXJlY3RpdmUodGhpcy5fX3BlbmRpbmdWYWx1ZSkpIHtcbiAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHRoaXMuX19wZW5kaW5nVmFsdWU7XG4gICAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gICAgICBkaXJlY3RpdmUodGhpcyk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9fcGVuZGluZ1ZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9ICEhdGhpcy5fX3BlbmRpbmdWYWx1ZTtcbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hbWUpO1xuICAgICAgfVxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gIH1cbn1cblxuLyoqXG4gKiBTZXRzIGF0dHJpYnV0ZSB2YWx1ZXMgZm9yIFByb3BlcnR5UGFydHMsIHNvIHRoYXQgdGhlIHZhbHVlIGlzIG9ubHkgc2V0IG9uY2VcbiAqIGV2ZW4gaWYgdGhlcmUgYXJlIG11bHRpcGxlIHBhcnRzIGZvciBhIHByb3BlcnR5LlxuICpcbiAqIElmIGFuIGV4cHJlc3Npb24gY29udHJvbHMgdGhlIHdob2xlIHByb3BlcnR5IHZhbHVlLCB0aGVuIHRoZSB2YWx1ZSBpcyBzaW1wbHlcbiAqIGFzc2lnbmVkIHRvIHRoZSBwcm9wZXJ0eSB1bmRlciBjb250cm9sLiBJZiB0aGVyZSBhcmUgc3RyaW5nIGxpdGVyYWxzIG9yXG4gKiBtdWx0aXBsZSBleHByZXNzaW9ucywgdGhlbiB0aGUgc3RyaW5ncyBhcmUgZXhwcmVzc2lvbnMgYXJlIGludGVycG9sYXRlZCBpbnRvXG4gKiBhIHN0cmluZyBmaXJzdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFByb3BlcnR5Q29tbWl0dGVyIGV4dGVuZHMgQXR0cmlidXRlQ29tbWl0dGVyIHtcbiAgcmVhZG9ubHkgc2luZ2xlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQsIG5hbWU6IHN0cmluZywgc3RyaW5nczogUmVhZG9ubHlBcnJheTxzdHJpbmc+KSB7XG4gICAgc3VwZXIoZWxlbWVudCwgbmFtZSwgc3RyaW5ncyk7XG4gICAgdGhpcy5zaW5nbGUgPVxuICAgICAgICAoc3RyaW5ncy5sZW5ndGggPT09IDIgJiYgc3RyaW5nc1swXSA9PT0gJycgJiYgc3RyaW5nc1sxXSA9PT0gJycpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9jcmVhdGVQYXJ0KCk6IFByb3BlcnR5UGFydCB7XG4gICAgcmV0dXJuIG5ldyBQcm9wZXJ0eVBhcnQodGhpcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2dldFZhbHVlKCkge1xuICAgIGlmICh0aGlzLnNpbmdsZSkge1xuICAgICAgcmV0dXJuIHRoaXMucGFydHNbMF0udmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBzdXBlci5fZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIGNvbW1pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXJ0eSkge1xuICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICh0aGlzLmVsZW1lbnQgYXMgYW55KVt0aGlzLm5hbWVdID0gdGhpcy5fZ2V0VmFsdWUoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFByb3BlcnR5UGFydCBleHRlbmRzIEF0dHJpYnV0ZVBhcnQge31cblxuLy8gRGV0ZWN0IGV2ZW50IGxpc3RlbmVyIG9wdGlvbnMgc3VwcG9ydC4gSWYgdGhlIGBjYXB0dXJlYCBwcm9wZXJ0eSBpcyByZWFkXG4vLyBmcm9tIHRoZSBvcHRpb25zIG9iamVjdCwgdGhlbiBvcHRpb25zIGFyZSBzdXBwb3J0ZWQuIElmIG5vdCwgdGhlbiB0aGUgdGhpcmRcbi8vIGFyZ3VtZW50IHRvIGFkZC9yZW1vdmVFdmVudExpc3RlbmVyIGlzIGludGVycHJldGVkIGFzIHRoZSBib29sZWFuIGNhcHR1cmVcbi8vIHZhbHVlIHNvIHdlIHNob3VsZCBvbmx5IHBhc3MgdGhlIGBjYXB0dXJlYCBwcm9wZXJ0eS5cbmxldCBldmVudE9wdGlvbnNTdXBwb3J0ZWQgPSBmYWxzZTtcblxuLy8gV3JhcCBpbnRvIGFuIElJRkUgYmVjYXVzZSBNUyBFZGdlIDw9IHY0MSBkb2VzIG5vdCBzdXBwb3J0IGhhdmluZyB0cnkvY2F0Y2hcbi8vIGJsb2NrcyByaWdodCBpbnRvIHRoZSBib2R5IG9mIGEgbW9kdWxlXG4oKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBnZXQgY2FwdHVyZSgpIHtcbiAgICAgICAgZXZlbnRPcHRpb25zU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH07XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMgYXMgYW55LCBvcHRpb25zKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucyBhcyBhbnksIG9wdGlvbnMpO1xuICB9IGNhdGNoIChfZSkge1xuICAgIC8vIGV2ZW50IG9wdGlvbnMgbm90IHN1cHBvcnRlZFxuICB9XG59KSgpO1xuXG50eXBlIEV2ZW50SGFuZGxlcldpdGhPcHRpb25zID1cbiAgICBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0JlBhcnRpYWw8QWRkRXZlbnRMaXN0ZW5lck9wdGlvbnM+O1xuZXhwb3J0IGNsYXNzIEV2ZW50UGFydCBpbXBsZW1lbnRzIFBhcnQge1xuICByZWFkb25seSBlbGVtZW50OiBFbGVtZW50O1xuICByZWFkb25seSBldmVudE5hbWU6IHN0cmluZztcbiAgcmVhZG9ubHkgZXZlbnRDb250ZXh0PzogRXZlbnRUYXJnZXQ7XG4gIHZhbHVlOiB1bmRlZmluZWR8RXZlbnRIYW5kbGVyV2l0aE9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX19vcHRpb25zPzogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnM7XG4gIHByaXZhdGUgX19wZW5kaW5nVmFsdWU6IHVuZGVmaW5lZHxFdmVudEhhbmRsZXJXaXRoT3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSByZWFkb25seSBfX2JvdW5kSGFuZGxlRXZlbnQ6IChldmVudDogRXZlbnQpID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudCwgZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50Q29udGV4dD86IEV2ZW50VGFyZ2V0KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmV2ZW50TmFtZSA9IGV2ZW50TmFtZTtcbiAgICB0aGlzLmV2ZW50Q29udGV4dCA9IGV2ZW50Q29udGV4dDtcbiAgICB0aGlzLl9fYm91bmRIYW5kbGVFdmVudCA9IChlKSA9PiB0aGlzLmhhbmRsZUV2ZW50KGUpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IHVuZGVmaW5lZHxFdmVudEhhbmRsZXJXaXRoT3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGNvbW1pdCgpIHtcbiAgICB3aGlsZSAoaXNEaXJlY3RpdmUodGhpcy5fX3BlbmRpbmdWYWx1ZSkpIHtcbiAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHRoaXMuX19wZW5kaW5nVmFsdWU7XG4gICAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2UgYXMgRXZlbnRIYW5kbGVyV2l0aE9wdGlvbnM7XG4gICAgICBkaXJlY3RpdmUodGhpcyk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9fcGVuZGluZ1ZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0xpc3RlbmVyID0gdGhpcy5fX3BlbmRpbmdWYWx1ZTtcbiAgICBjb25zdCBvbGRMaXN0ZW5lciA9IHRoaXMudmFsdWU7XG4gICAgY29uc3Qgc2hvdWxkUmVtb3ZlTGlzdGVuZXIgPSBuZXdMaXN0ZW5lciA9PSBudWxsIHx8XG4gICAgICAgIG9sZExpc3RlbmVyICE9IG51bGwgJiZcbiAgICAgICAgICAgIChuZXdMaXN0ZW5lci5jYXB0dXJlICE9PSBvbGRMaXN0ZW5lci5jYXB0dXJlIHx8XG4gICAgICAgICAgICAgbmV3TGlzdGVuZXIub25jZSAhPT0gb2xkTGlzdGVuZXIub25jZSB8fFxuICAgICAgICAgICAgIG5ld0xpc3RlbmVyLnBhc3NpdmUgIT09IG9sZExpc3RlbmVyLnBhc3NpdmUpO1xuICAgIGNvbnN0IHNob3VsZEFkZExpc3RlbmVyID1cbiAgICAgICAgbmV3TGlzdGVuZXIgIT0gbnVsbCAmJiAob2xkTGlzdGVuZXIgPT0gbnVsbCB8fCBzaG91bGRSZW1vdmVMaXN0ZW5lcik7XG5cbiAgICBpZiAoc2hvdWxkUmVtb3ZlTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgIHRoaXMuZXZlbnROYW1lLCB0aGlzLl9fYm91bmRIYW5kbGVFdmVudCwgdGhpcy5fX29wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoc2hvdWxkQWRkTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuX19vcHRpb25zID0gZ2V0T3B0aW9ucyhuZXdMaXN0ZW5lcik7XG4gICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICB0aGlzLmV2ZW50TmFtZSwgdGhpcy5fX2JvdW5kSGFuZGxlRXZlbnQsIHRoaXMuX19vcHRpb25zKTtcbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IG5ld0xpc3RlbmVyO1xuICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSBub0NoYW5nZSBhcyBFdmVudEhhbmRsZXJXaXRoT3B0aW9ucztcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50OiBFdmVudCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy52YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy52YWx1ZS5jYWxsKHRoaXMuZXZlbnRDb250ZXh0IHx8IHRoaXMuZWxlbWVudCwgZXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAodGhpcy52YWx1ZSBhcyBFdmVudExpc3RlbmVyT2JqZWN0KS5oYW5kbGVFdmVudChldmVudCk7XG4gICAgfVxuICB9XG59XG5cbi8vIFdlIGNvcHkgb3B0aW9ucyBiZWNhdXNlIG9mIHRoZSBpbmNvbnNpc3RlbnQgYmVoYXZpb3Igb2YgYnJvd3NlcnMgd2hlbiByZWFkaW5nXG4vLyB0aGUgdGhpcmQgYXJndW1lbnQgb2YgYWRkL3JlbW92ZUV2ZW50TGlzdGVuZXIuIElFMTEgZG9lc24ndCBzdXBwb3J0IG9wdGlvbnNcbi8vIGF0IGFsbC4gQ2hyb21lIDQxIG9ubHkgcmVhZHMgYGNhcHR1cmVgIGlmIHRoZSBhcmd1bWVudCBpcyBhbiBvYmplY3QuXG5jb25zdCBnZXRPcHRpb25zID0gKG86IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zfHVuZGVmaW5lZCkgPT4gbyAmJlxuICAgIChldmVudE9wdGlvbnNTdXBwb3J0ZWQgP1xuICAgICAgICAge2NhcHR1cmU6IG8uY2FwdHVyZSwgcGFzc2l2ZTogby5wYXNzaXZlLCBvbmNlOiBvLm9uY2V9IDpcbiAgICAgICAgIG8uY2FwdHVyZSBhcyBBZGRFdmVudExpc3RlbmVyT3B0aW9ucyk7XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbXBvcnQge1BhcnR9IGZyb20gJy4vcGFydC5qcyc7XG5pbXBvcnQge0F0dHJpYnV0ZUNvbW1pdHRlciwgQm9vbGVhbkF0dHJpYnV0ZVBhcnQsIEV2ZW50UGFydCwgTm9kZVBhcnQsIFByb3BlcnR5Q29tbWl0dGVyfSBmcm9tICcuL3BhcnRzLmpzJztcbmltcG9ydCB7UmVuZGVyT3B0aW9uc30gZnJvbSAnLi9yZW5kZXItb3B0aW9ucy5qcyc7XG5pbXBvcnQge1RlbXBsYXRlUHJvY2Vzc29yfSBmcm9tICcuL3RlbXBsYXRlLXByb2Nlc3Nvci5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBQYXJ0cyB3aGVuIGEgdGVtcGxhdGUgaXMgaW5zdGFudGlhdGVkLlxuICovXG5leHBvcnQgY2xhc3MgRGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yIGltcGxlbWVudHMgVGVtcGxhdGVQcm9jZXNzb3Ige1xuICAvKipcbiAgICogQ3JlYXRlIHBhcnRzIGZvciBhbiBhdHRyaWJ1dGUtcG9zaXRpb24gYmluZGluZywgZ2l2ZW4gdGhlIGV2ZW50LCBhdHRyaWJ1dGVcbiAgICogbmFtZSwgYW5kIHN0cmluZyBsaXRlcmFscy5cbiAgICpcbiAgICogQHBhcmFtIGVsZW1lbnQgVGhlIGVsZW1lbnQgY29udGFpbmluZyB0aGUgYmluZGluZ1xuICAgKiBAcGFyYW0gbmFtZSAgVGhlIGF0dHJpYnV0ZSBuYW1lXG4gICAqIEBwYXJhbSBzdHJpbmdzIFRoZSBzdHJpbmcgbGl0ZXJhbHMuIFRoZXJlIGFyZSBhbHdheXMgYXQgbGVhc3QgdHdvIHN0cmluZ3MsXG4gICAqICAgZXZlbnQgZm9yIGZ1bGx5LWNvbnRyb2xsZWQgYmluZGluZ3Mgd2l0aCBhIHNpbmdsZSBleHByZXNzaW9uLlxuICAgKi9cbiAgaGFuZGxlQXR0cmlidXRlRXhwcmVzc2lvbnMoXG4gICAgICBlbGVtZW50OiBFbGVtZW50LCBuYW1lOiBzdHJpbmcsIHN0cmluZ3M6IHN0cmluZ1tdLFxuICAgICAgb3B0aW9uczogUmVuZGVyT3B0aW9ucyk6IFJlYWRvbmx5QXJyYXk8UGFydD4ge1xuICAgIGNvbnN0IHByZWZpeCA9IG5hbWVbMF07XG4gICAgaWYgKHByZWZpeCA9PT0gJy4nKSB7XG4gICAgICBjb25zdCBjb21taXR0ZXIgPSBuZXcgUHJvcGVydHlDb21taXR0ZXIoZWxlbWVudCwgbmFtZS5zbGljZSgxKSwgc3RyaW5ncyk7XG4gICAgICByZXR1cm4gY29tbWl0dGVyLnBhcnRzO1xuICAgIH1cbiAgICBpZiAocHJlZml4ID09PSAnQCcpIHtcbiAgICAgIHJldHVybiBbbmV3IEV2ZW50UGFydChlbGVtZW50LCBuYW1lLnNsaWNlKDEpLCBvcHRpb25zLmV2ZW50Q29udGV4dCldO1xuICAgIH1cbiAgICBpZiAocHJlZml4ID09PSAnPycpIHtcbiAgICAgIHJldHVybiBbbmV3IEJvb2xlYW5BdHRyaWJ1dGVQYXJ0KGVsZW1lbnQsIG5hbWUuc2xpY2UoMSksIHN0cmluZ3MpXTtcbiAgICB9XG4gICAgY29uc3QgY29tbWl0dGVyID0gbmV3IEF0dHJpYnV0ZUNvbW1pdHRlcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzKTtcbiAgICByZXR1cm4gY29tbWl0dGVyLnBhcnRzO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgcGFydHMgZm9yIGEgdGV4dC1wb3NpdGlvbiBiaW5kaW5nLlxuICAgKiBAcGFyYW0gdGVtcGxhdGVGYWN0b3J5XG4gICAqL1xuICBoYW5kbGVUZXh0RXhwcmVzc2lvbihvcHRpb25zOiBSZW5kZXJPcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBOb2RlUGFydChvcHRpb25zKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yID0gbmV3IERlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvcigpO1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuaW1wb3J0IHtUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnLi90ZW1wbGF0ZS1yZXN1bHQuanMnO1xuaW1wb3J0IHttYXJrZXIsIFRlbXBsYXRlfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHR5cGUgdGhhdCBjcmVhdGVzIGEgVGVtcGxhdGUgZnJvbSBhIFRlbXBsYXRlUmVzdWx0LlxuICpcbiAqIFRoaXMgaXMgYSBob29rIGludG8gdGhlIHRlbXBsYXRlLWNyZWF0aW9uIHByb2Nlc3MgZm9yIHJlbmRlcmluZyB0aGF0XG4gKiByZXF1aXJlcyBzb21lIG1vZGlmaWNhdGlvbiBvZiB0ZW1wbGF0ZXMgYmVmb3JlIHRoZXkncmUgdXNlZCwgbGlrZSBTaGFkeUNTUyxcbiAqIHdoaWNoIG11c3QgYWRkIGNsYXNzZXMgdG8gZWxlbWVudHMgYW5kIHJlbW92ZSBzdHlsZXMuXG4gKlxuICogVGVtcGxhdGVzIHNob3VsZCBiZSBjYWNoZWQgYXMgYWdncmVzc2l2ZWx5IGFzIHBvc3NpYmxlLCBzbyB0aGF0IG1hbnlcbiAqIFRlbXBsYXRlUmVzdWx0cyBwcm9kdWNlZCBmcm9tIHRoZSBzYW1lIGV4cHJlc3Npb24gb25seSBkbyB0aGUgd29yayBvZlxuICogY3JlYXRpbmcgdGhlIFRlbXBsYXRlIHRoZSBmaXJzdCB0aW1lLlxuICpcbiAqIFRlbXBsYXRlcyBhcmUgdXN1YWxseSBjYWNoZWQgYnkgVGVtcGxhdGVSZXN1bHQuc3RyaW5ncyBhbmRcbiAqIFRlbXBsYXRlUmVzdWx0LnR5cGUsIGJ1dCBtYXkgYmUgY2FjaGVkIGJ5IG90aGVyIGtleXMgaWYgdGhpcyBmdW5jdGlvblxuICogbW9kaWZpZXMgdGhlIHRlbXBsYXRlLlxuICpcbiAqIE5vdGUgdGhhdCBjdXJyZW50bHkgVGVtcGxhdGVGYWN0b3JpZXMgbXVzdCBub3QgYWRkLCByZW1vdmUsIG9yIHJlb3JkZXJcbiAqIGV4cHJlc3Npb25zLCBiZWNhdXNlIHRoZXJlIGlzIG5vIHdheSB0byBkZXNjcmliZSBzdWNoIGEgbW9kaWZpY2F0aW9uXG4gKiB0byByZW5kZXIoKSBzbyB0aGF0IHZhbHVlcyBhcmUgaW50ZXJwb2xhdGVkIHRvIHRoZSBjb3JyZWN0IHBsYWNlIGluIHRoZVxuICogdGVtcGxhdGUgaW5zdGFuY2VzLlxuICovXG5leHBvcnQgdHlwZSBUZW1wbGF0ZUZhY3RvcnkgPSAocmVzdWx0OiBUZW1wbGF0ZVJlc3VsdCkgPT4gVGVtcGxhdGU7XG5cbi8qKlxuICogVGhlIGRlZmF1bHQgVGVtcGxhdGVGYWN0b3J5IHdoaWNoIGNhY2hlcyBUZW1wbGF0ZXMga2V5ZWQgb25cbiAqIHJlc3VsdC50eXBlIGFuZCByZXN1bHQuc3RyaW5ncy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlRmFjdG9yeShyZXN1bHQ6IFRlbXBsYXRlUmVzdWx0KSB7XG4gIGxldCB0ZW1wbGF0ZUNhY2hlID0gdGVtcGxhdGVDYWNoZXMuZ2V0KHJlc3VsdC50eXBlKTtcbiAgaWYgKHRlbXBsYXRlQ2FjaGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHRlbXBsYXRlQ2FjaGUgPSB7XG4gICAgICBzdHJpbmdzQXJyYXk6IG5ldyBXZWFrTWFwPFRlbXBsYXRlU3RyaW5nc0FycmF5LCBUZW1wbGF0ZT4oKSxcbiAgICAgIGtleVN0cmluZzogbmV3IE1hcDxzdHJpbmcsIFRlbXBsYXRlPigpXG4gICAgfTtcbiAgICB0ZW1wbGF0ZUNhY2hlcy5zZXQocmVzdWx0LnR5cGUsIHRlbXBsYXRlQ2FjaGUpO1xuICB9XG5cbiAgbGV0IHRlbXBsYXRlID0gdGVtcGxhdGVDYWNoZS5zdHJpbmdzQXJyYXkuZ2V0KHJlc3VsdC5zdHJpbmdzKTtcbiAgaWYgKHRlbXBsYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxuICAvLyBJZiB0aGUgVGVtcGxhdGVTdHJpbmdzQXJyYXkgaXMgbmV3LCBnZW5lcmF0ZSBhIGtleSBmcm9tIHRoZSBzdHJpbmdzXG4gIC8vIFRoaXMga2V5IGlzIHNoYXJlZCBiZXR3ZWVuIGFsbCB0ZW1wbGF0ZXMgd2l0aCBpZGVudGljYWwgY29udGVudFxuICBjb25zdCBrZXkgPSByZXN1bHQuc3RyaW5ncy5qb2luKG1hcmtlcik7XG5cbiAgLy8gQ2hlY2sgaWYgd2UgYWxyZWFkeSBoYXZlIGEgVGVtcGxhdGUgZm9yIHRoaXMga2V5XG4gIHRlbXBsYXRlID0gdGVtcGxhdGVDYWNoZS5rZXlTdHJpbmcuZ2V0KGtleSk7XG4gIGlmICh0ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBub3Qgc2VlbiB0aGlzIGtleSBiZWZvcmUsIGNyZWF0ZSBhIG5ldyBUZW1wbGF0ZVxuICAgIHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKHJlc3VsdCwgcmVzdWx0LmdldFRlbXBsYXRlRWxlbWVudCgpKTtcbiAgICAvLyBDYWNoZSB0aGUgVGVtcGxhdGUgZm9yIHRoaXMga2V5XG4gICAgdGVtcGxhdGVDYWNoZS5rZXlTdHJpbmcuc2V0KGtleSwgdGVtcGxhdGUpO1xuICB9XG5cbiAgLy8gQ2FjaGUgYWxsIGZ1dHVyZSBxdWVyaWVzIGZvciB0aGlzIFRlbXBsYXRlU3RyaW5nc0FycmF5XG4gIHRlbXBsYXRlQ2FjaGUuc3RyaW5nc0FycmF5LnNldChyZXN1bHQuc3RyaW5ncywgdGVtcGxhdGUpO1xuICByZXR1cm4gdGVtcGxhdGU7XG59XG5cbi8qKlxuICogVGhlIGZpcnN0IGFyZ3VtZW50IHRvIEpTIHRlbXBsYXRlIHRhZ3MgcmV0YWluIGlkZW50aXR5IGFjcm9zcyBtdWx0aXBsZVxuICogY2FsbHMgdG8gYSB0YWcgZm9yIHRoZSBzYW1lIGxpdGVyYWwsIHNvIHdlIGNhbiBjYWNoZSB3b3JrIGRvbmUgcGVyIGxpdGVyYWxcbiAqIGluIGEgTWFwLlxuICpcbiAqIFNhZmFyaSBjdXJyZW50bHkgaGFzIGEgYnVnIHdoaWNoIG9jY2FzaW9uYWxseSBicmVha3MgdGhpcyBiZWhhdmlvciwgc28gd2VcbiAqIG5lZWQgdG8gY2FjaGUgdGhlIFRlbXBsYXRlIGF0IHR3byBsZXZlbHMuIFdlIGZpcnN0IGNhY2hlIHRoZVxuICogVGVtcGxhdGVTdHJpbmdzQXJyYXksIGFuZCBpZiB0aGF0IGZhaWxzLCB3ZSBjYWNoZSBhIGtleSBjb25zdHJ1Y3RlZCBieVxuICogam9pbmluZyB0aGUgc3RyaW5ncyBhcnJheS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUZW1wbGF0ZUNhY2hlIHtcbiAgcmVhZG9ubHkgc3RyaW5nc0FycmF5OiBXZWFrTWFwPFRlbXBsYXRlU3RyaW5nc0FycmF5LCBUZW1wbGF0ZT47XG4gIHJlYWRvbmx5IGtleVN0cmluZzogTWFwPHN0cmluZywgVGVtcGxhdGU+O1xufVxuXG5leHBvcnQgY29uc3QgdGVtcGxhdGVDYWNoZXMgPSBuZXcgTWFwPHN0cmluZywgVGVtcGxhdGVDYWNoZT4oKTtcbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbmltcG9ydCB7cmVtb3ZlTm9kZXN9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7Tm9kZVBhcnR9IGZyb20gJy4vcGFydHMuanMnO1xuaW1wb3J0IHtSZW5kZXJPcHRpb25zfSBmcm9tICcuL3JlbmRlci1vcHRpb25zLmpzJztcbmltcG9ydCB7dGVtcGxhdGVGYWN0b3J5fSBmcm9tICcuL3RlbXBsYXRlLWZhY3RvcnkuanMnO1xuXG5leHBvcnQgY29uc3QgcGFydHMgPSBuZXcgV2Vha01hcDxOb2RlLCBOb2RlUGFydD4oKTtcblxuLyoqXG4gKiBSZW5kZXJzIGEgdGVtcGxhdGUgcmVzdWx0IG9yIG90aGVyIHZhbHVlIHRvIGEgY29udGFpbmVyLlxuICpcbiAqIFRvIHVwZGF0ZSBhIGNvbnRhaW5lciB3aXRoIG5ldyB2YWx1ZXMsIHJlZXZhbHVhdGUgdGhlIHRlbXBsYXRlIGxpdGVyYWwgYW5kXG4gKiBjYWxsIGByZW5kZXJgIHdpdGggdGhlIG5ldyByZXN1bHQuXG4gKlxuICogQHBhcmFtIHJlc3VsdCBBbnkgdmFsdWUgcmVuZGVyYWJsZSBieSBOb2RlUGFydCAtIHR5cGljYWxseSBhIFRlbXBsYXRlUmVzdWx0XG4gKiAgICAgY3JlYXRlZCBieSBldmFsdWF0aW5nIGEgdGVtcGxhdGUgdGFnIGxpa2UgYGh0bWxgIG9yIGBzdmdgLlxuICogQHBhcmFtIGNvbnRhaW5lciBBIERPTSBwYXJlbnQgdG8gcmVuZGVyIHRvLiBUaGUgZW50aXJlIGNvbnRlbnRzIGFyZSBlaXRoZXJcbiAqICAgICByZXBsYWNlZCwgb3IgZWZmaWNpZW50bHkgdXBkYXRlZCBpZiB0aGUgc2FtZSByZXN1bHQgdHlwZSB3YXMgcHJldmlvdXNcbiAqICAgICByZW5kZXJlZCB0aGVyZS5cbiAqIEBwYXJhbSBvcHRpb25zIFJlbmRlck9wdGlvbnMgZm9yIHRoZSBlbnRpcmUgcmVuZGVyIHRyZWUgcmVuZGVyZWQgdG8gdGhpc1xuICogICAgIGNvbnRhaW5lci4gUmVuZGVyIG9wdGlvbnMgbXVzdCAqbm90KiBjaGFuZ2UgYmV0d2VlbiByZW5kZXJzIHRvIHRoZSBzYW1lXG4gKiAgICAgY29udGFpbmVyLCBhcyB0aG9zZSBjaGFuZ2VzIHdpbGwgbm90IGVmZmVjdCBwcmV2aW91c2x5IHJlbmRlcmVkIERPTS5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbmRlciA9XG4gICAgKHJlc3VsdDogdW5rbm93bixcbiAgICAgY29udGFpbmVyOiBFbGVtZW50fERvY3VtZW50RnJhZ21lbnQsXG4gICAgIG9wdGlvbnM/OiBQYXJ0aWFsPFJlbmRlck9wdGlvbnM+KSA9PiB7XG4gICAgICBsZXQgcGFydCA9IHBhcnRzLmdldChjb250YWluZXIpO1xuICAgICAgaWYgKHBhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZW1vdmVOb2Rlcyhjb250YWluZXIsIGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgcGFydHMuc2V0KGNvbnRhaW5lciwgcGFydCA9IG5ldyBOb2RlUGFydCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVGYWN0b3J5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgcGFydC5hcHBlbmRJbnRvKGNvbnRhaW5lcik7XG4gICAgICB9XG4gICAgICBwYXJ0LnNldFZhbHVlKHJlc3VsdCk7XG4gICAgICBwYXJ0LmNvbW1pdCgpO1xuICAgIH07XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqXG4gKiBNYWluIGxpdC1odG1sIG1vZHVsZS5cbiAqXG4gKiBNYWluIGV4cG9ydHM6XG4gKlxuICogLSAgW1todG1sXV1cbiAqIC0gIFtbc3ZnXV1cbiAqIC0gIFtbcmVuZGVyXV1cbiAqXG4gKiBAcGFja2FnZURvY3VtZW50YXRpb25cbiAqL1xuXG4vKipcbiAqIERvIG5vdCByZW1vdmUgdGhpcyBjb21tZW50OyBpdCBrZWVwcyB0eXBlZG9jIGZyb20gbWlzcGxhY2luZyB0aGUgbW9kdWxlXG4gKiBkb2NzLlxuICovXG5pbXBvcnQge2RlZmF1bHRUZW1wbGF0ZVByb2Nlc3Nvcn0gZnJvbSAnLi9saWIvZGVmYXVsdC10ZW1wbGF0ZS1wcm9jZXNzb3IuanMnO1xuaW1wb3J0IHtTVkdUZW1wbGF0ZVJlc3VsdCwgVGVtcGxhdGVSZXN1bHR9IGZyb20gJy4vbGliL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5cbmV4cG9ydCB7RGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yLCBkZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3J9IGZyb20gJy4vbGliL2RlZmF1bHQtdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcbmV4cG9ydCB7ZGlyZWN0aXZlLCBEaXJlY3RpdmVGbiwgaXNEaXJlY3RpdmV9IGZyb20gJy4vbGliL2RpcmVjdGl2ZS5qcyc7XG4vLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiByZW1vdmUgbGluZSB3aGVuIHdlIGdldCBOb2RlUGFydCBtb3ZpbmcgbWV0aG9kc1xuZXhwb3J0IHtyZW1vdmVOb2RlcywgcmVwYXJlbnROb2Rlc30gZnJvbSAnLi9saWIvZG9tLmpzJztcbmV4cG9ydCB7bm9DaGFuZ2UsIG5vdGhpbmcsIFBhcnR9IGZyb20gJy4vbGliL3BhcnQuanMnO1xuZXhwb3J0IHtBdHRyaWJ1dGVDb21taXR0ZXIsIEF0dHJpYnV0ZVBhcnQsIEJvb2xlYW5BdHRyaWJ1dGVQYXJ0LCBFdmVudFBhcnQsIGlzSXRlcmFibGUsIGlzUHJpbWl0aXZlLCBOb2RlUGFydCwgUHJvcGVydHlDb21taXR0ZXIsIFByb3BlcnR5UGFydH0gZnJvbSAnLi9saWIvcGFydHMuanMnO1xuZXhwb3J0IHtSZW5kZXJPcHRpb25zfSBmcm9tICcuL2xpYi9yZW5kZXItb3B0aW9ucy5qcyc7XG5leHBvcnQge3BhcnRzLCByZW5kZXJ9IGZyb20gJy4vbGliL3JlbmRlci5qcyc7XG5leHBvcnQge3RlbXBsYXRlQ2FjaGVzLCB0ZW1wbGF0ZUZhY3Rvcnl9IGZyb20gJy4vbGliL3RlbXBsYXRlLWZhY3RvcnkuanMnO1xuZXhwb3J0IHtUZW1wbGF0ZUluc3RhbmNlfSBmcm9tICcuL2xpYi90ZW1wbGF0ZS1pbnN0YW5jZS5qcyc7XG5leHBvcnQge1RlbXBsYXRlUHJvY2Vzc29yfSBmcm9tICcuL2xpYi90ZW1wbGF0ZS1wcm9jZXNzb3IuanMnO1xuZXhwb3J0IHtTVkdUZW1wbGF0ZVJlc3VsdCwgVGVtcGxhdGVSZXN1bHR9IGZyb20gJy4vbGliL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5leHBvcnQge2NyZWF0ZU1hcmtlciwgaXNUZW1wbGF0ZVBhcnRBY3RpdmUsIFRlbXBsYXRlfSBmcm9tICcuL2xpYi90ZW1wbGF0ZS5qcyc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgbGl0SHRtbFZlcnNpb25zOiBzdHJpbmdbXTtcbiAgfVxufVxuXG4vLyBJTVBPUlRBTlQ6IGRvIG5vdCBjaGFuZ2UgdGhlIHByb3BlcnR5IG5hbWUgb3IgdGhlIGFzc2lnbm1lbnQgZXhwcmVzc2lvbi5cbi8vIFRoaXMgbGluZSB3aWxsIGJlIHVzZWQgaW4gcmVnZXhlcyB0byBzZWFyY2ggZm9yIGxpdC1odG1sIHVzYWdlLlxuLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogaW5qZWN0IHZlcnNpb24gbnVtYmVyIGF0IGJ1aWxkIHRpbWVcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAod2luZG93WydsaXRIdG1sVmVyc2lvbnMnXSB8fCAod2luZG93WydsaXRIdG1sVmVyc2lvbnMnXSA9IFtdKSkucHVzaCgnMS4zLjAnKTtcbn1cblxuLyoqXG4gKiBJbnRlcnByZXRzIGEgdGVtcGxhdGUgbGl0ZXJhbCBhcyBhbiBIVE1MIHRlbXBsYXRlIHRoYXQgY2FuIGVmZmljaWVudGx5XG4gKiByZW5kZXIgdG8gYW5kIHVwZGF0ZSBhIGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGNvbnN0IGh0bWwgPSAoc3RyaW5nczogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLnZhbHVlczogdW5rbm93bltdKSA9PlxuICAgIG5ldyBUZW1wbGF0ZVJlc3VsdChzdHJpbmdzLCB2YWx1ZXMsICdodG1sJywgZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yKTtcblxuLyoqXG4gKiBJbnRlcnByZXRzIGEgdGVtcGxhdGUgbGl0ZXJhbCBhcyBhbiBTVkcgdGVtcGxhdGUgdGhhdCBjYW4gZWZmaWNpZW50bHlcbiAqIHJlbmRlciB0byBhbmQgdXBkYXRlIGEgY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3Qgc3ZnID0gKHN0cmluZ3M6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi52YWx1ZXM6IHVua25vd25bXSkgPT5cbiAgICBuZXcgU1ZHVGVtcGxhdGVSZXN1bHQoc3RyaW5ncywgdmFsdWVzLCAnc3ZnJywgZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yKTtcbiIsICJpbXBvcnQgJ0Bwd2FidWlsZGVyL3B3YXVwZGF0ZSc7XG5pbXBvcnQgeyBodG1sLCByZW5kZXIgfSBmcm9tICdsaXQtaHRtbCc7XG5pbXBvcnQgZ2V0VXJscyBmcm9tICdnZXQtdXJscyc7XG5cbmNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG5jb25zdCBzdG9yYWdlID0gc2VsZi5sb2NhbFN0b3JhZ2U7XG5jb25zdCB0b2tlbiA9IHN0b3JhZ2UuZ2V0SXRlbSgnZmVlZGJpbi1wYWdlLXRva2VuJykgfHwgJyc7XG5jb25zdCB0aXRsZSA9IHBhcmFtcy5nZXQoJ3RpdGxlJyk7XG5sZXQgdXJsID0gJyc7XG5cbmlmIChwYXJhbXMuZ2V0KCd1cmwnKSkge1xuICAgIHVybCA9IHBhcmFtcy5nZXQoJ3VybCcpO1xufSBlbHNlIHtcbiAgICB1cmwgPSBbLi4uZ2V0VXJscyhwYXJhbXMuZ2V0KCd0ZXh0JykgfHwgJycpXVswXTtcbn1cblxuY29uc3Qgc2F2ZVRva2VuID0gKGUpID0+IHtcbiAgICBzdG9yYWdlLnNldEl0ZW0oJ2ZlZWRiaW4tcGFnZS10b2tlbicsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICBydW4odGl0bGUsIHVybCwgZS50YXJnZXQudmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKCdzYXZlVG9rZW4gLT4gZScsIGUudGFyZ2V0LnZhbHVlKTtcbn07XG4vLyBEZWZpbmUgYSB0ZW1wbGF0ZVxuY29uc3QgbXlUZW1wbGF0ZSA9ICh0aXRsZSA9ICcnLCB1cmwgPSAnJywgdG9rZW4sIHN1YnNVUkwsIHBhZ2VzVVJMKSA9PiBodG1sYFxuICAgIDxsYWJlbD5UaXRsZTo8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiUGFnZSB0aXRsZVwiIHZhbHVlPSR7dGl0bGUgPyB0aXRsZSA6ICcnfSAvPlxuICAgIDxsYWJlbD5VUkw6PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlBhZ2UgVVJMXCIgdmFsdWU9JHt1cmwgPyB1cmwgOiAnJ30gLz5cbiAgICA8YnIgLz5cbiAgICA8YSBocmVmPVwiJHtzdWJzVVJMfVwiIGNsYXNzPVwiQnV0dG9uXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIlxuICAgICAgICA+U3Vic2NyaWJlPC9hXG4gICAgPlxuICAgIDxiciAvPlxuICAgIDxhIGhyZWY9XCIke3BhZ2VzVVJMfVwiIGNsYXNzPVwiQnV0dG9uXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIlxuICAgICAgICA+U2F2ZTwvYVxuICAgID5cbiAgICA8YnIgLz5cbiAgICA8bGFiZWw+RmVlZGJpbiBQYWdlcyBUb2tlbjwvbGFiZWw+XG4gICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgQGlucHV0PSR7c2F2ZVRva2VufVxuICAgICAgICBwbGFjZWhvbGRlcj1cIkZlZWRiaW4gUGFnZXMgVG9rZW5cIlxuICAgICAgICB2YWx1ZT0ke3Rva2VufVxuICAgIC8+XG4gICAgPHNtYWxsXG4gICAgICAgID5GaW5kIHlvdXIgdG9rZW4gaW4gdGhlIEJvb2ttYXJrbGV0IGxpbmsgdW5kZXIgdGhlXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2ZlZWRiaW4uY29tL3NldHRpbmdzL25ld3NsZXR0ZXJzX3BhZ2VzXCI+XG4gICAgICAgICAgICBOZXdzbGV0dGVycyBwYWdlPC9hXG4gICAgICAgID4uIFRoZSB0b2tlbiB3aWxsIGJlIHNhdmVkIGluIHlvdXIgYnJvd3NlciBsb2NhbHN0b3JhZ2UuPC9zbWFsbFxuICAgID5cbmA7XG5cbmNvbnN0IHJ1biA9ICh0aXRsZSwgdXJsLCB0b2tlbikgPT4ge1xuICAgIGNvbnN0IHN1YnNVUkwgPSBuZXcgVVJMKCdodHRwczovL2ZlZWRiaW4ubWUnKTtcbiAgICBjb25zdCBzdWJzU2VhcmNoID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgIHN1YnNjcmliZTogdXJsXG4gICAgfSk7XG4gICAgc3Vic1VSTC5zZWFyY2ggPSBzdWJzU2VhcmNoLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgcGFnZXNVUkwgPSBuZXcgVVJMKCdodHRwczovL2ZlZWRiaW4ubWUvcGFnZXMnKTtcbiAgICBjb25zdCBwYWdlc1NlYXJjaCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICB1cmwsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBwYWdlX3Rva2VuOiB0b2tlblxuICAgIH0pO1xuICAgIHBhZ2VzVVJMLnNlYXJjaCA9IHBhZ2VzU2VhcmNoLnRvU3RyaW5nKCk7XG4gICAgcmVuZGVyKFxuICAgICAgICBteVRlbXBsYXRlKHRpdGxlLCB1cmwsIHRva2VuLCBzdWJzVVJMLCBwYWdlc1VSTCksXG4gICAgICAgIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgKTtcbn07XG5cbmlmIChzZWxmLmNocm9tZS50YWJzKSB7XG4gICAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgZnVuY3Rpb24gKHRhYnMpIHtcbiAgICAgICAgcnVuKHRhYnNbMF0udGl0bGUsIHRhYnNbMF0udXJsLCB0b2tlbik7XG4gICAgfSk7XG59IGVsc2Uge1xuICAgIHJ1bih0aXRsZSwgdXJsLCB0b2tlbik7XG59XG4iXSwKICAibWFwcGluZ3Mi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
