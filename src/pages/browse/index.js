import React from 'react'


import { Container, Title, List, Playlist } from './styles'

const Browse = () => (
    <Container>
        <Title>
            Navegar
        </Title>
        <List>
            <Playlist to="/playlists/1">
                <img 
                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440"
                    alt="Playlist"
                />
                <strong>Rock sarado</strong>
                <p>Só o rock sarado irá nos salvar das drogas</p>
            </Playlist>
            <Playlist to="/playlists/1">
                <img 
                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440"
                    alt="Playlist"
                />
                <strong>Rock sarado</strong>
                <p>Só o rock sarado irá nos salvar das drogas</p>
            </Playlist>
            <Playlist to="/playlists/1">
                <img 
                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440"
                    alt="Playlist"
                />
                <strong>Rock sarado</strong>
                <p>Só o rock sarado irá nos salvar das drogas</p>
            </Playlist>
            <Playlist to="/playlists/1">
                <img 
                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440"
                    alt="Playlist"
                />
                <strong>Rock sarado</strong>
                <p>Só o rock sarado irá nos salvar das drogas</p>
            </Playlist>
        </List>
    </Container>
)

export default Browse