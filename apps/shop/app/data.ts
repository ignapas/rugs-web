import { PayloadSDK } from '@payloadcms/sdk'
import type { Config } from '@rugs-web/cms/types'

const payloadSDK = new PayloadSDK<Config>({
  baseURL: 'http://localhost:3000/api'
})

export const getSections = (locale: Parameters<typeof payloadSDK.find>[0]['locale']) =>
  payloadSDK.find({
    collection: 'sections',
    locale,
    select: {
      label: true
    }
  }).then(resp => resp.docs.map(doc => doc.label))
