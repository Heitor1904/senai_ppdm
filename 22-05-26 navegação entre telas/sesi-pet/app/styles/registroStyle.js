import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        padding: 20,
        justifyContent: 'center',
    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 25,
        color: '#222',
    },

    input: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ddd',
    },

    botao: {
        backgroundColor: '#FF9800',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },

    textoBotao: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }

});

export default styles;