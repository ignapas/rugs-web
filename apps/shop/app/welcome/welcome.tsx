import { useContext } from 'react'
import { SettingsContext } from '~/provider/SettingsProvider';

export function Welcome() {
  const { sections } = useContext(SettingsContext)
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
