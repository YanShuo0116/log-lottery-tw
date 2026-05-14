import { describe, expect, it } from 'vitest'
import { defaultImageList, defaultPrizeList } from '@/store/data'

describe('default prize images', () => {
    it('uses local assets for first prize and grand prize images', () => {
        const targetIds = ['0', '3']
        const prizePictures = defaultPrizeList
            .filter(item => targetIds.includes(item.picture.id))
            .map(item => item.picture.url)
        const imageListUrls = defaultImageList
            .filter(item => targetIds.includes(item.id))
            .map(item => item.url)

        expect(prizePictures).toHaveLength(2)
        expect(imageListUrls).toHaveLength(2)

        for (const url of [...prizePictures, ...imageListUrls]) {
            expect(typeof url).toBe('string')
            expect(String(url).startsWith('http')).toBe(false)
        }
    })
})
