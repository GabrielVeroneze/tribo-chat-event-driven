import fs from 'node:fs'
import path from 'node:path'

export function writeFile<T>(newDb: T, callback: () => void) {
    fs.writeFile(path.resolve('db.json'), JSON.stringify(newDb, null, 2), () =>
        callback?.(),
    )
}
