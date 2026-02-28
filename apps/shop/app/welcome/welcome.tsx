import { useEffect, useState } from 'react'
import { PayloadSDK } from '@payloadcms/sdk'
import type { Config } from '@rugs-web/cms/types'

const payloadSDK = new PayloadSDK<Config>({
  baseURL: 'http://localhost:3000/api'
})

const getPosts = (locale: Parameters<typeof payloadSDK.find>[0]['locale']) =>
  payloadSDK.find({
    collection: 'sections',
    locale,
    select: {
      label: true
    }
  }).then(resp => resp.docs.map(doc => doc.label))

export function Welcome() {
  const [sections, setSections] = useState<string[]>([])
  useEffect(() => {
    getPosts('fr').then(docs => setSections(docs))
  }, [])
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            { sections.map(label => (
              <div>{label}</div>
            ))}
          </div>
        </header>
      </div>
    </main>
  );
}
