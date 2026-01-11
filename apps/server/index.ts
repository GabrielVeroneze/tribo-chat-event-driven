import jsonServer from 'json-server'
import usersRouter from './routes/users.ts'
import chatsRouter from './routes/chats.ts'
import { server, app } from './config/instances.ts'
import './socket/index.ts'

const port = 8080

app.use('/db', jsonServer.router('db.json'))

app.use('/api/users', usersRouter)
app.use('/api/chats', chatsRouter)

server.listen(port, () => {
    console.log(`server listening to port ${port}`)
})
