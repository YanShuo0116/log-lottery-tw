// i18n配置
import { createI18n } from 'vue-i18n'
import en from './en'
import zhTw from './zhTw'

export type Language = 'en' | 'zhTw'

export const languageList = [
    {
        key: 'zhTw',
        name: '繁體中文',
        flag: 'zh-tw',
    },
    {
        key: 'en',
        name: 'English',
        flag: 'en-us',
    },
]
export const browserLanguage = navigator.language.toLowerCase().includes('zh') ? 'zhTw' : 'en'
const globalConfig = JSON.parse(localStorage.getItem('globalConfig') || '{}').globalConfig || {}
// 創建i18n
const i18n = createI18n({
    locale: globalConfig.language || browserLanguage,
    legacy: false,
    messages: {
        zhTw,
        en,
    },
})

export default i18n
