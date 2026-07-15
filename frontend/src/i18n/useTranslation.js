import { useStore } from "../store/useStore";
import { translations } from "./translations";

export function useTranslation() {
  const selectedLanguage = useStore((state) => state.selectedLanguage);

  const t = (key) => {
    const lang = translations[selectedLanguage] ? selectedLanguage : "en";
    const localizedString = translations[lang][key];
    if (localizedString !== undefined) {
      return localizedString;
    }
    // Fallback to English if key doesn't exist in localized dictionary
    return translations["en"][key] !== undefined ? translations["en"][key] : key;
  };

  return { t, selectedLanguage };
}
