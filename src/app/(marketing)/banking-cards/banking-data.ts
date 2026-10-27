export const cardConcepts = [
  { name: "Essential", key: "essential", label: "THE EVERYDAY, ELEVATED", material: "Matte-black soft touch", description: "Quiet confidence. A minimal matte-black concept with precise orange details, designed around the rhythm of everyday life.", features: ["Minimal engraved identity", "Physical & virtual concept", "A considered everyday design"] },
  { name: "Premium", key: "premium", label: "A STATEMENT IN EVERY DETAIL", material: "Brushed burgundy metal", description: "Rich burgundy. A tactile brushed-metal concept that catches the light with a distinctive, understated presence.", features: ["Reflective brushed finish", "Signature burgundy material", "Refined contactless detailing"] },
  { name: "Elite", key: "elite", label: "CRAFTED BEYOND THE ORDINARY", material: "Black titanium & silver", description: "Sculpted light. A flagship concept pairing deep-black titanium with fine metallic reflections and an unmistakable lava accent.", features: ["Titanium-inspired surface", "Precision metallic detailing", "A distinctive flagship design"] },
];
export const currencies = [
  { code: "USD", symbol: "$", name: "US Dollar", balance: 12840.50, change: 2.8, values: [28, 36, 32, 49, 43, 56, 51, 64, 58, 79, 70, 85] },
  { code: "EUR", symbol: "€", name: "Euro", balance: 8450.20, change: 1.6, values: [45, 40, 53, 48, 63, 59, 67, 57, 75, 73, 86, 80] },
  { code: "GBP", symbol: "£", name: "British Pound", balance: 5320.75, change: 1.2, values: [31, 36, 48, 42, 51, 48, 60, 66, 62, 74, 71, 82] },
];
export function formatMoney(amount: number, currency = "USD") { return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount); }
export const revealStages = [
  { label: "The first impression", title: "A line of light.", text: "A precision-cut edge emerges from the dark. A quieter kind of statement.", detail: "01 / PRECISION EDGE" },
  { label: "Material comes to life", title: "Feel the difference.", text: "Studio light moves across a finely textured surface, revealing depth in every detail.", detail: "02 / TACTILE SURFACE" },
  { label: "A closer perspective", title: "Made to move with you.", text: "The front comes into focus. Minimal branding. A familiar chip. An unmistakable presence.", detail: "03 / CONSIDERED DESIGN" },
  { label: "Every side considered", title: "Nothing overlooked.", text: "Turn the card. Explore the magnetic stripe, signature panel, and finely engraved reverse.", detail: "04 / FRONT TO BACK" },
  { label: "The finishing touch", title: "Extraordinary, by design.", text: "One final perspective on a card concept that brings material, movement, and purpose together.", detail: "05 / SYNXEX SIGNATURE" },
];
