import React from 'react'

import 
{ 
    Container, 
    Title,

} from './styles'

import Login from '../../components/login'

export default () => {
    return(
        <Container>
            <Title>Login</Title>
            <Login />
        </Container>
    )
}