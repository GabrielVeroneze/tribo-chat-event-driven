import { writeFile } from '../utils/file.ts'
import db from '../db.json' with { type: 'json' }
import type { Socket } from 'socket.io'

type WriteFileCallback = (error?: Error) => void

export default function UserController() {
    function logonUser(
        id: number | string,
        socket: Socket,
        callback: WriteFileCallback,
    ) {
        if (!id) return
        const newDb = { ...db }
        const userIndex = newDb.users.findIndex(
            (userDb) => userDb.id === Number(id),
        )
        newDb.users[userIndex].isLogged = true
        newDb.users[userIndex].chats.map((chat) => {
            socket.join(`chat${chat.id}`)
        })

        writeFile(newDb, callback)
    }

    function logoffUser(id: number | string, callback: WriteFileCallback) {
        if (!id) return
        const newDb = { ...db }
        const userIndex = newDb.users.findIndex(
            (userDb) => userDb.id === Number(id),
        )
        newDb.users[userIndex].isLogged = false

        writeFile(newDb, callback)
    }

    return { logonUser, logoffUser }
}
