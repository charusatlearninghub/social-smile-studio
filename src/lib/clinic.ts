export const CLINIC_WHATSAPP_NUMBER = "916353317847";
export const CLINIC_PHONE_DISPLAY = "+91 63533 17847";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/dentistAAK/",
  instagram: "https://www.instagram.com/drarvinddds",
} as const;

export const SOCIAL_HANDLES = {
  instagram: "@drarvinddds",
} as const;

export const TREATMENTS = [
  "Teeth Cleaning",
  "Dental Implants",
  "Root Canal",
  "Braces & Aligners",
  "Teeth Whitening",
  "Smile Design",
  "Pediatric Dentistry",
  "Emergency Care",
  "Other",
] as const;

export type Treatment = (typeof TREATMENTS)[number];
