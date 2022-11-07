import * as React from 'react';
import styled from 'styled-components'
import { View, Text, TouchableOpacity, Image } from 'react-native'

export function Home() {
    return (
        <Content>
            <Header resizeMode="contain" resizeMethod="auto" source={require('../assets/header.png')} />
            <Center>
                <Mid resizeMode="contain" resizeMethod="auto" source={require('../assets/busy-working-woman.jpg')} />
            </Center>
            <Footer resizeMode="contain" resizeMethod="auto" source={require('../assets/next1.png')} />
        </Content>
    )
}

const Content = styled(View)`
    flex: 1;
    justify-content: space-between;
    width: 100%;
    height: auto;
    align-items: center;
    background-color: white;
`
const Header = styled(Image)`
    margin-top: -57.5%;
    width: 100%;
`

const Center = styled(View)`
    margin-top: -60%;
    flex: 1;
    width: 100%;
`

const Mid = styled(Image)`
    width: 100%;
`

const Footer = styled(Image)`
    margin-top: 75%;
    width: 100%;
`