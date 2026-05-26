import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f2f2f2',
    },

    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: '#333',
    },

    subtitulo: {
        textAlign: 'center',
        marginBottom: 30,
        fontSize: 16,
        color: '#666',
    },

    input: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 12,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ccc',
    },

    botao: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 10,
    },

    botaoCadastro: {
        backgroundColor: '#2196F3',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 15,
    },

    textoBotao: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }

});

export default styles;