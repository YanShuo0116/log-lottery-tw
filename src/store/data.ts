import type { IPersonConfig, IPrizeConfig } from '@/types/storeType'
import { id } from 'zod/v4/locales'
import firstPrizeImage from '@/assets/images/first-prize.svg'
import grandPrizeImage from '@/assets/images/grand-prize.svg'

const originUrl = 'https://to2026.xyz'
type IPersonConfigWithoutUuid = Omit<IPersonConfig, 'uuid'>
export const defaultPersonList = <IPersonConfigWithoutUuid[]>
    [
        { uid: 'NBA001', name: '巴恩斯', department: 'USA Stars', identity: 'USA Stars', avatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/1630567.png', x: 1, y: 1, id: 0, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'NBA002', name: '布克', department: 'USA Stars', identity: 'USA Stars', avatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/1626164.png', x: 2, y: 1, id: 1, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'NBA003', name: '坎寧安', department: 'USA Stars', identity: 'USA Stars', avatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/1630595.png', x: 3, y: 1, id: 2, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'NBA004', name: '杜蘭', department: 'USA Stars', identity: 'USA Stars', avatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/1631105.png', x: 4, y: 1, id: 3, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'NBA005', name: '愛德華茲', department: 'USA Stars', identity: 'USA Stars', avatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/1630162.png', x: 5, y: 1, id: 4, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'NBA006', name: '霍倫格姆', department: 'USA Stars', identity: 'USA Stars', avatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/1631096.png', x: 6, y: 1, id: 5, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'NBA007', name: '強森', department: 'USA Stars', identity: 'USA Stars', avatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/1630552.png', x: 7, y: 1, id: 6, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'NBA008', name: '馬克西', department: 'USA Stars', identity: 'USA Stars', avatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/1630178.png', x: 8, y: 1, id: 7, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'NBA009', name: '布朗', department: 'USA Stripes', identity: 'USA Stripes', avatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/1627759.png', x: 9, y: 1, id: 8, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'NBA010', name: '布朗森', department: 'USA Stripes', identity: 'USA Stripes', avatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/1628973.png', x: 10, y: 1, id: 9, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'NBA011', name: '杜蘭特', department: 'USA Stripes', identity: 'USA Stripes', avatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/201142.png', x: 11, y: 1, id: 10, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'NBA012', name: '福克斯', department: 'USA Stripes', identity: 'USA Stripes', avatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/1628368.png', x: 12, y: 1, id: 11, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'NBA013', name: '英格倫', department: 'USA Stripes', identity: 'USA Stripes', avatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/1627742.png', x: 13, y: 1, id: 12, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'NBA014', name: '詹姆斯', department: 'USA Stripes', identity: 'USA Stripes', avatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/2544.png', x: 14, y: 1, id: 13, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'NBA015', name: '雷納德', department: 'USA Stripes', identity: 'USA Stripes', avatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/202695.png', x: 15, y: 1, id: 14, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'NBA016', name: '米契爾', department: 'USA Stripes', identity: 'USA Stripes', avatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/1628378.png', x: 16, y: 1, id: 15, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'NBA017', name: '柯瑞', department: 'USA Stripes', identity: 'USA Stripes', avatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/201939.png', x: 17, y: 1, id: 16, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'NBA018', name: '阿夫迪亞', department: 'World', identity: 'World', avatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/1630166.png', x: 1, y: 2, id: 17, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'NBA019', name: '唐西奇', department: 'World', identity: 'World', avatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/1629029.png', x: 2, y: 2, id: 18, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'NBA020', name: '亞歷山大', department: 'World', identity: 'World', avatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/1628983.png', x: 3, y: 2, id: 19, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'NBA021', name: '約基奇', department: 'World', identity: 'World', avatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/203999.png', x: 4, y: 2, id: 20, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'NBA022', name: '穆雷', department: 'World', identity: 'World', avatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/1627750.png', x: 5, y: 2, id: 21, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'NBA023', name: '鮑威爾', department: 'World', identity: 'World', avatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/1626181.png', x: 6, y: 2, id: 22, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'NBA024', name: '申京', department: 'World', identity: 'World', avatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/1630578.png', x: 7, y: 2, id: 23, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'NBA025', name: '西亞卡姆', department: 'World', identity: 'World', avatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/1627783.png', x: 8, y: 2, id: 24, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'NBA026', name: '唐斯', department: 'World', identity: 'World', avatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/1626157.png', x: 9, y: 2, id: 25, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'NBA027', name: '文班亞瑪', department: 'World', identity: 'World', avatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/1641705.png', x: 10, y: 2, id: 26, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'NBA028', name: '字母哥', department: 'World', identity: 'World', avatar: 'https://cdn.nba.com/headshots/nba/latest/260x190/203507.png', x: 11, y: 2, id: 27, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] }
    ]

export const defaultMusicList = [
    {
        id: `Geoff Knorr - China (The Industrial Era).ogg${new Date().getTime().toString()}`,
        name: 'Geoff Knorr - China (The Industrial Era).ogg',
        url: `${originUrl}/resource/audio/Geoff Knorr - China (The Industrial Era).ogg`,
    },
    {
        id: `Geoff Knorr&Phill Boucher - China (The Atomic Era).ogg${new Date().getTime().toString()}`,
        name: 'Geoff Knorr&Phill Boucher - China (The Atomic Era).ogg',
        url: `${originUrl}/resource/audio/Geoff Knorr&Phill Boucher - China (The Atomic Era).ogg`,
    },
    {
        id: `Radetzky March.mp3${new Date().getTime().toString()}`,
        name: 'Radetzky March.mp3',
        url: `${originUrl}/resource/audio/Radetzky March.mp3`,
    },
    {
        id: `Shanghai.mp3${new Date().getTime().toString()}`,
        name: 'Shanghai.mp3',
        url: `${originUrl}/resource/audio/Shanghai.mp3`,
    },
    {
        id: `Waltz No.2.mp3${new Date().getTime().toString()}`,
        name: 'Waltz No.2.mp3',
        url: `${originUrl}/resource/audio/Waltz No.2.mp3`,
    },
    {
        id: `WildChinaTheme.mp3${new Date().getTime().toString()}`,
        name: 'WildChinaTheme.mp3',
        url: `${originUrl}/resource/audio/WildChinaTheme.mp3`,
    },
    {
        id: `邊程&房東的貓 - 美好事物-再遇少年.ogg${new Date().getTime().toString()}`,
        name: '邊程&房東的貓 - 美好事物-再遇少年.ogg',
        url: `${originUrl}/resource/audio/邊程&房東的貓 - 美好事物-再遇少年.ogg`,
    },
    {
        id: `大喬小喬 - 相見難別亦難.ogg${new Date().getTime().toString()}`,
        name: '大喬小喬 - 相見難別亦難.ogg',
        url: `${originUrl}/resource/audio/大喬小喬 - 相見難別亦難.ogg`,
    },
    {
        id: `你要跳舞嗎-新褲子.mp3${new Date().getTime().toString()}`,
        name: '你要跳舞嗎-新褲子.mp3',
        url: `${originUrl}/resource/audio/你要跳舞嗎-新褲子.mp3`,
    },
    {
        id: `生命-聲音玩具.mp3${new Date().getTime().toString()}`,
        name: '生命-聲音玩具.mp3',
        url: `${originUrl}/resource/audio/生命-聲音玩具.mp3`,
    },
    {
        id: `與非門 - Happy New Year.ogg${new Date().getTime().toString()}`,
        name: '與非門 - Happy New Year.ogg',
        url: `${originUrl}/resource/audio/與非門 - Happy New Year.ogg`,
    },

]

export const defaultPrizeList = <IPrizeConfig[]>[
    {
        id: '001',
        name: '三等獎',
        sort: 1,
        isAll: false,
        count: 3,
        isUsedCount: 0,
        picture: {
            id: '2',
            name: '三等獎',
            url: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Bronze_medal_icon.svg',
        },
        separateCount: {
            enable: true,
            countList: [],
        },
        desc: '三等獎',
        isShow: true,
        isUsed: false,
        frequency: 1,
    },
    {
        id: '002',
        name: '二等獎',
        sort: 2,
        isAll: false,
        count: 2,
        isUsedCount: 0,
        picture: {
            id: '1',
            name: '二等獎',
            url: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Silver_medal_icon.svg',
        },
        separateCount: {
            enable: false,
            countList: [],
        },
        desc: '二等獎',
        isShow: true,
        isUsed: false,
        frequency: 1,
    },
    {
        id: '003',
        name: '一等獎',
        sort: 3,
        isAll: false,
        count: 1,
        isUsedCount: 0,
        picture: {
            id: '0',
            name: '一等獎',
            url: firstPrizeImage,
        },
        separateCount: {
            enable: false,
            countList: [],
        },
        desc: '一等獎',
        isShow: true,
        isUsed: false,
        frequency: 1,
    },
    {
        id: '004',
        name: '超級大獎',
        sort: 4,
        isAll: false,
        count: 1,
        isUsedCount: 0,
        picture: {
            id: '3',
            name: '超級獎',
            url: grandPrizeImage,
        },
        separateCount: {
            enable: false,
            countList: [],
        },
        desc: '超級大獎',
        isShow: true,
        isUsed: false,
        frequency: 1,
    },
    {
        id: '005',
        name: '特別獎',
        sort: 5,
        isAll: false,
        count: 1,
        isUsedCount: 0,
        picture: {
            id: '4',
            name: '特別獎',
            url: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Star_icon_stylized.svg',
        },
        separateCount: {
            enable: false,
            countList: [],
        },
        desc: '特別獎',
        isShow: true,
        isUsed: false,
        frequency: 1,
    },
]
export const defaultCurrentPrize = <IPrizeConfig>{
    id: '001',
    name: '三等獎',
    sort: 1,
    isAll: false,
    count: 12,
    isUsedCount: 0,
    picture: {
        id: '2',
        name: '三等獎',
        url: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Bronze_medal_icon.svg',
    },
    separateCount: {
        enable: true,
        countList: [],
    },
    desc: '三等獎',
    isShow: true,
    isUsed: false,
    frequency: 1,
}
export const defaultTemporaryPrize = <IPrizeConfig>{
    id: '',
    name: '',
    sort: 0,
    isAll: false,
    count: 1,
    isUsedCount: 0,
    picture: {
        id: '-1',
        name: '',
        url: '',
    },
    separateCount: {
        enable: true,
        countList: [],
    },
    desc: '',
    isShow: false,
    isUsed: false,
    frequency: 1,
}

export const defaultImageList = [
    {
        id: '0',
        name: '一等獎',
        url: firstPrizeImage,
    },
    {
        id: '1',
        name: '二等獎',
        url: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Silver_medal_icon.svg',
    },
    {
        id: '2',
        name: '三等獎',
        url: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Bronze_medal_icon.svg',
    },
    {
        id: '3',
        name: '超級獎',
        url: grandPrizeImage,
    },
    {
        id: '4',
        name: '特別獎',
        url: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Star_icon_stylized.svg',
    },
]
export const defaultPatternList = [21, 38, 55, 54, 53, 70, 87, 88, 89, 23, 40, 57, 74, 91, 92, 76, 59, 42, 25, 24, 27, 28, 29, 46, 63, 62, 61, 78, 95, 96, 97, 20, 19, 31, 48, 66, 67, 84, 101, 100, 32, 33, 93, 65, 82, 99]

export const defaultServerHostList = [
    {
        id: 'default',
        name: '默認服務器',
        value: 'default',
        host: 'https://to2026.xyz:8080',
    },
    {
        id: 'local',
        name: '本地服務器',
        value: 'local',
        host: 'http://127.0.0.1:8080',
    },
    {
        id: 'custom',
        name: '自定義服務器',
        value: 'custom',
        host: '',
    },
]
