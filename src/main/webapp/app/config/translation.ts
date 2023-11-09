import { TranslatorContext, Storage } from 'react-jhipster';

import { setLocale } from 'app/shared/reducers/locale';

TranslatorContext.setDefaultLocale('pt-br');
TranslatorContext.setRenderInnerTextForMissingKeys(false);

export const languages: any = {
  'pt-br': { name: 'Português (Brasil)' },
  en: { name: 'English' },
  fr: { name: 'Français' },
  'zh-cn': { name: '中文（简体）' },
  'zh-tw': { name: '繁體中文' },
  de: { name: 'Deutsch' },
  id: { name: 'Bahasa Indonesia' },
  it: { name: 'Italiano' },
  ja: { name: '日本語' },
  ko: { name: '한국어' },
  ru: { name: 'Русский' },
  es: { name: 'Español' },
  tr: { name: 'Türkçe' },
  ua: { name: 'Українська' },
  // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
};

export const locales = Object.keys(languages).sort();

export const registerLocale = store => {
  store.dispatch(setLocale(Storage.session.get('locale', 'pt-br')));
};
