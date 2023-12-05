import i18n from 'i18next'
import {initReactI18next} from "react-i18next"
import en from './en.json'
import pt from './pt.json'
import RNLanguageDetector from "@os-team/i18next-react-native-language-detector";


i18n.use(initReactI18next).use(RNLanguageDetector).init({
    compatibilityJSON: 'v3',
    lng: 'pt',
    resources:{
        en: en,
        pt: pt
    },
    react:{
        useSuspense:false,
    },
    interpolation:{
        escapeValue:false,
    }
})

export default i18n