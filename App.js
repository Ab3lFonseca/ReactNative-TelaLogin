import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  Alert,
  Pressable
} from 'react-native';

export default function App() {
  const [email, setEmail] = useState('a@gmail.com ');
  const [senha, setSenha] = useState('1234  ');

  const handleLogin = () => {
    Alert.alert("Login realizado com sucesso!");
  };

  const handleRegister = () => {
    Alert.alert("Tela de Registro em breve!");
  };

  const handleResetPassword = () => {
    Alert.alert("Tela de redefinição de senha em breve!");
  };

  const isFormValid = email !== '' && senha !== '';

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.logo}
      />

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <View style={styles.button}>
        <Button
          title="ENTRAR"
          onPress={handleLogin}
          disabled={!isFormValid}
        />
      </View>

      <Pressable onPress={handleRegister}>
        <Text style={styles.link}>Registrar-se</Text>
      </Pressable>

      <Pressable onPress={handleResetPassword}>
        <Text style={styles.link}>Redefinir a Senha</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10
  },
  input: {
    width: '90%',
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff'
  },
  button: {
    width: '90%',
    marginVertical: 15
  },
  link: {
    color: '#1e90ff',
    marginTop: 10,
    fontSize: 16
  }
});
