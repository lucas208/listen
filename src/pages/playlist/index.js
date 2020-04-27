import React from 'react'

import { Container, Header, SongList } from './styles'

import ClockIcon from '../../assets/images/clock.svg'
import PlusIcon from '../../assets/images/plus.svg'

const Playlist = () => (
    <Container>
        <Header>
            <img 
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440"
                alt="Playlist"
            />

            <div>
                <span> PLAYLIST </span>
                <h1>Rock sarado</h1>
                <p>15 músicas</p>

                <button>PLAY</button>
            </div>
        </Header>

        <SongList cellPadding={0} cellSpacing={0}>
            <thead>
                <th/>
                <th>Título</th>
                <th>Artista</th>
                <th>Álbum</th>
                <th><img src={ClockIcon} alt="Duração"/></th>
            </thead>

            <tbody>
                <tr>
                    <td><img src={PlusIcon} alt="Adicionar"/></td>
                    <td>With arms wide open</td>
                    <td>Creed</td>
                    <td>Greatest hits</td>
                    <td>3:47</td>
                </tr>
                <tr>
                    <td><img src={PlusIcon} alt="Adicionar"/></td>
                    <td>With arms wide open</td>
                    <td>Creed</td>
                    <td>Greatest hits</td>
                    <td>3:47</td>
                </tr>
                <tr>
                    <td><img src={PlusIcon} alt="Adicionar"/></td>
                    <td>With arms wide open</td>
                    <td>Creed</td>
                    <td>Greatest hits</td>
                    <td>3:47</td>
                </tr>
                <tr>
                    <td><img src={PlusIcon} alt="Adicionar"/></td>
                    <td>With arms wide open</td>
                    <td>Creed</td>
                    <td>Greatest hits</td>
                    <td>3:47</td>
                </tr>
                <tr>
                    <td><img src={PlusIcon} alt="Adicionar"/></td>
                    <td>With arms wide open</td>
                    <td>Creed</td>
                    <td>Greatest hits</td>
                    <td>3:47</td>
                </tr>
                <tr>
                    <td><img src={PlusIcon} alt="Adicionar"/></td>
                    <td>With arms wide open</td>
                    <td>Creed</td>
                    <td>Greatest hits</td>
                    <td>3:47</td>
                </tr>
            </tbody>
        </SongList>
    </Container>
)

export default Playlist