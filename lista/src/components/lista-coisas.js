import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { setTimeout } from 'core-js/library/web/timers';

class ListaCoisas extends Component {

    state = { lista: [] ,flag:0};

    componentWillMount() {
        console.log('ListaCoisas.componentWillMount()');
        this.carregaLista();
    }

    render() {
        console.log('ListaCoisas.render()');
        console.log('ListaCoisas.state',this.state);
        return (
            <View>
                <Text>Lista de Coisas</Text>
            </View>
        );
    }

    carregaLista() {
        setTimeout(() => {
            console.log('ListaCoisas.carregaLista()');
            this.setState({
                lista: [
                    { produto: 'Arroz' },
                    { produto: 'Feijão' },
                    { produto: 'Pão' },
                    { produto: 'Macarrão' }
                ]
            });
        }, 1000);

    }
}

export default ListaCoisas;