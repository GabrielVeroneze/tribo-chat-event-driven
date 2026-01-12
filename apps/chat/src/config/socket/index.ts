import { io, type Socket } from 'socket.io-client'
import type { ClientToServerEvents, ServerToClientEvents } from '@/types/Socket'

const URL = 'http://localhost:8080'

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> =
    io(URL)
