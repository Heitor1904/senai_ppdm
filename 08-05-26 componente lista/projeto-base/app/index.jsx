import { Text, View, FlatList, StyleSheet, Image, SafeAreaView } from "react-native";
import Header from './componentes/Header';
import tarefas from './dados/tarefas';

function ItemTarefa({item}){

  return (
    <View style={estilos.card}>
      
      <Image 
        source={{uri: item.photo}} 
        style={estilos.foto} 
      />

      <View style={estilos.conteudo}>

        <View style={estilos.linha}>
          
          <Text style={estilos.titulo}>
            {item.title}
          </Text>

          <Text style={estilos.status}>
            {item.status}
          </Text>

        </View>

        <Text style={estilos.desc}>
          {item.description}
        </Text>

      </View>
    </View>
  );
}

export default function Index(){
  return(
    <SafeAreaView style={estilos.container}>
      
      <Header titulo='Senai Tasks'/>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => <ItemTarefa item={item}/>}
      />

    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f2f2f2'
  },

  card:{
    backgroundColor:'#fff',
    margin:10,
    borderRadius:15,
    overflow:'hidden',
    elevation:5
  },

  foto:{
    width:'100%',
    height:180
  },

  conteudo:{
    padding:15
  },

  linha:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },

  titulo:{
    fontSize:20,
    fontWeight:'bold',
    color:'#222'
  },

  status:{
    backgroundColor:'#4CAF50',
    color:'#fff',
    paddingHorizontal:10,
    paddingVertical:4,
    borderRadius:20,
    fontWeight:'bold'
  },

  desc:{
    marginTop:10,
    fontSize:15,
    color:'#666',
    lineHeight:22
  }
})