import * as React from 'react';
import styled from 'styled-components/native'
import { View, Text, TouchableOpacity, Image } from 'react-native'

export function Termos({ navigation }) {
    return (
        <Content>
            <Header source={require('../assets/header.png')} />
            <TouchableOpacity onPress={() => navigation.navigate('Termos')}>
                <Text>Termos</Text>
            </TouchableOpacity>
        </Content>
    )
}

const Content = styled(View)`
    width: 100vw;
    height: 100vh;
`

const Header = styled(Image)`
    width: 100%;
    height: 100%;
`