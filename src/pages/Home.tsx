import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { api } from '../services/client'

import { Header } from '../components/Header'

export function Home() {

    const [searchedValue, setSearchedValue] = useState('');

    const history = useHistory()

    async function getUserData(event: FormEvent) {

        event.preventDefault()

        try {
            const response = await api.get(searchedValue);

            localStorage.setItem('@avatar_url', JSON.stringify(response.data?.avatar_url))
            localStorage.setItem('@name', JSON.stringify(response.data?.name))
            localStorage.setItem('@profile', JSON.stringify(response.data?.login))

            history.push(response.data.login)

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div id="container" >
            <Header>
                <form onSubmit={getUserData}>
                    <input
                        type="text"
                        id="escrever__perfil"
                        placeholder="Digite o endereço de GitHub desejado"
                        value={searchedValue}
                        onChange={event => setSearchedValue(event.target.value)}

                    />

                    <br />

                    <button
                        type="submit"
                        id="pesquisar__perfil"


                    >
                        Pesquisar
                    </button>
                </form>

            </Header>

        </div>
    );
}
