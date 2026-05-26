import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#eef2f3',
        padding: 20,
    },

    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },

    nome: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },

    especialidade: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,
    }

});

export default styles;