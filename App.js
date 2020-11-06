import React from 'react';
import {Text, StyleSheet, View, KeyboardAvoidingView, Image, TextInput,TouchableOpacity} from 'react-native';


const App = () => {
  return (
    <KeyboardAvoidingView style={styles.background}>

      <View style={styles.containerLogin}>

        <View style={styles.containerLogo}>
          <Image source={require('./src/assets/logo.png')} />
        </View>
        
          <TextInput
              style={styles.inputs} 
              placeholder=" Email" 
              autoCorrect={false}>
          </TextInput>

          <TextInput
              style={styles.inputs} 
              placeholder=" Senha" 
              autoCorrect={false}>
          </TextInput>
        
          <TouchableOpacity style={styles.btnSubmit}>
            <Text style={styles.text}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnRegister}>
            <Text style={styles.registerText}>Criar uma conta</Text>
          </TouchableOpacity>
        
        
      </View>

    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  background:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#264653"
  },

  containerLogin:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    paddingTop: 15,
    backgroundColor: "#f8f9fa",
    borderRadius: 7
  },

  containerLogo:{
    flex: 1,
    width: "80%",
    height: 40,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15
  },

  inputs:{
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#adb5bd",
    width: "80%",
    marginBottom: 15,
    color: "#222",
    fontSize: 14,
    borderRadius: 7
  },

  btnSubmit:{
    backgroundColor: "#118ab2",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 40,
    fontSize: 15,
    color: "#fff",
    borderRadius: 7
  },

  text:{
    color: "#fff"
  },

  btnRegister:{
    marginTop: 15,
    marginBottom: 15,

  }

})

export default App;
