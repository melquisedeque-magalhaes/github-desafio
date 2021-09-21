import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


import { User } from '../components/User'
import { api } from '../services/client'

export function Detail() {

    const [name, setName] = useState('')
    const [avatarUrl, setAvatarUrl] = useState('')

    const { user } = useParams<{ user?: string }>()

    async function getUserData(profile: string) {

        try {
            const response = await api.get(profile);

            localStorage.setItem('@avatar_url', JSON.stringify(response.data?.avatar_url))
            localStorage.setItem('@name', JSON.stringify(response.data?.name))
            localStorage.setItem('@profile', JSON.stringify(profile))

            setAvatarUrl(response.data.avatar_url)
            setName(response.data.name)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {

        if (user)
            getUserData(user)

    }, [])

    return (
        <User name={name} avatar_url={avatarUrl} />
    )
}