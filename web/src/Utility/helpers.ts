export function getSinhalaLetter(input: string) {
    const sinhalaAlphabet: { [key: string]: string } = {
      "a": "අ",
      "aa": "ආ",
      "ae": "ඇ",
      "aae": "ඈ",
      "i": "ඉ",
      "ii": "ඊ",
      "u": "උ",
      "uu": "ඌ",
      "ru": "ඍ",
      "ruu": "ඎ",
      "e": "එ",
      "ee": "ඒ",
      "ai": "ඓ",
      "o": "ඔ",
      "oo": "ඕ",
      "au": "ඖ",
      "ka": "ක",
      "kha": "ඛ",
      "ga": "ග",
      "gha": "ඝ",
      "nga": "ඞ",
      "ca": "ච",
      "cha": "ඡ",
      "ja": "ජ",
      "jha": "ඣ",
      "nya": "ඤ",
      "ta": "ට",
      "tha": "ඨ",
      "da": "ඩ",
      "dha": "ඪ",
      "na": "ණ",
      "t": "ත",
      "th": "ථ",
      "d": "ද",
      "dh": "ධ",
      "n": "න",
      "pa": "ප",
      "pha": "ඵ",
      "ba": "බ",
      "bha": "භ",
      "ma": "ම",
      "ya": "ය",
      "ra": "ර",
      "la": "ල",
      "va": "ව",
      "sha": "ශ",
      "ssa": "ෂ",
      "sa": "ස",
      "ha": "හ",
      "lla": "ළ",
      "fa": "ෆ"
    };
  
    return sinhalaAlphabet[input as keyof typeof sinhalaAlphabet] || "Invalid input"; 
  }

  