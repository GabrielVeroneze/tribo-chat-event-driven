import fs from 'node:fs'

export function writeFile<T>(newDb: T, callback: () => void) {
    fs.writeFile('../db.json', JSON.stringify(newDb, null, 2), () =>
        callback?.(),
    )
}
