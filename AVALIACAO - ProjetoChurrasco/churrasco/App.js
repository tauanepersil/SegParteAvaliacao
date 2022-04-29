import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity,  } from 'react-native';
import { Alert } from 'react-native-web';



export default function App() {

  const [Homem, setHomem] = useState(0);
  const [Mulher, setMulher] = useState(0);
  const [crianca, setcrianca] = useState(0);
  const [ValorTotalCarne, setTotalCarne] = useState(0);
  const [TotaldeCarvao, setTotaldeCarvao] = useState(0);





  function handleHomemChange(pHomem) {

    setHomem(pHomem);
    
    
  }

  function handleMulherChange(pMulher) {

    setMulher(pMulher);
    
    
  }

  function handlecriancaChange(pcrianca) {

    setcrianca(pcrianca);
    
    
  }




  function handleButtonPress() {
    let ValorCarne = ((Homem * 400) + (Mulher * 300) + (crianca * 200)) / 1000 ;
    setTotalCarne(ValorCarne);

    let valorCarvao = ValorCarne / 6

    setTotaldeCarvao(valorCarvao)

  }

  return (

    <View style={styles.container}>

      <Text style={styles.title}>Calculadora de Carvão</Text>

      <View style={styles.inputContainer}>


      <Text style={styles.Texto}>Quantos Homens:</Text>
                <TextInput

          style={styles.input}

          placeholder="Homens"

          onChangeText={handleHomemChange}

        />

      <Text style={styles.Texto}>Quantos mulheres:</Text>
                <TextInput

          style={styles.input}

          placeholder="Mulheres"

          onChangeText={handleMulherChange}

        />

<Text style={styles.Texto}>Quantos crianças:</Text>
                <TextInput

          style={styles.input}

          placeholder="Crianças"

          onChangeText={handlecriancaChange}

        />
   

        <TouchableOpacity

          style={styles.button}

          onPress={handleButtonPress}

        >

          <Text style={styles.buttonText}>Enviar</Text>

        </TouchableOpacity>

        <Text style={styles.input}>{ValorTotalCarne} KG de carne</Text>
        <Text style={styles.input}>{TotaldeCarvao} KG de carvão</Text>
      </View>

      <StatusBar style="auto" />

    </View>

  );

}



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

    alignItems: 'center',

    justifyContent: 'center',

  },

  Texto: {

    color: 'Black',

    fontSize: 15,

    fontWeight: 'bold',


  },

  title:  {

    color: 'red',

    fontSize: 40,

    fontWeight: 'bold',

    marginTop: 50,

  },
  inputContainer: {

    flex: 1,

    marginTop: 30,

    width: '90%',

    padding: 20,

    borderTopLeftRadius: 10,

    borderTopRightRadius: 10,

    alignItems: 'stretch',

    backgroundColor: '#fff'

  },

  input: {

    marginTop: 10,

    height: 60,

    backgroundColor: '#fff',

    borderRadius: 10,

    paddingHorizontal: 24,

    fontSize: 16,

    alignItems: 'stretch'

  },

  button: {

    marginTop: 10,

    height: 60,

    backgroundColor: 'red',

    borderRadius: 10,

    paddingHorizontal: 24,

    fontSize: 16,

    alignItems: 'center',

    justifyContent: 'center',

    elevation: 20,

    shadowOpacity: 20,

    shadowColor: '#ccc',

  },

  buttonText: {

    color: '#fff',

    fontWeight: 'bold',

  }
 });