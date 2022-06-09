import { List } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { Chat } from './chat'

export const ChatList = () => {
  const [chats] = useState([
    { name: 'room1', author: 'Мария', lastmessage: 'Привет' },
    { name: 'room2', author: 'Даниил', lastmessage: 'Сегодня увидимся?' },
    { name: 'room3', author: 'Игорь', lastmessage: 'Чем занимаешься?' },
    { name: 'room4', author: 'Люба', lastmessage: 'Пришла поссылка' },
  ])

  const { roomId } = useParams()

  return (
    <List component="nav">
      {chats.map((chat) => (
        <Link key={chat.name} to={`/chat/${chat.name}`}>
          <Chat
            title={chat.name}
            selected={roomId === chat.name}
            author={chat.author}
            lastmessage={chat.lastmessage}
          />
        </Link>
      ))}
    </List>
  )
}