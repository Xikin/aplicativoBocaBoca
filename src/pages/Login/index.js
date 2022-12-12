import React, { useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import { AuthContext } from "../../contexts/auth";

import { Container, Input, Button, ButtonText, SignUpButton, SignUpButtonText, Logo } from "./style";

export default function Login() {
  const { signUp } = useContext(AuthContext);
  const [login, setLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function toggleLogin() {
    setLogin(!login);
    setName('');
    setEmail('');
    setPassword('');
  }

  function handleLogin() {
    if (email === '' || password === '') {
      alert('Preencha os campos de email e senha para continuar!');
      return;
    }
    alert('Login');
  }

  function handleSignUp() {
    if (name === '' || email === '' || password === '') {
      alert('Preencha os campos para continuar!');
      return;
    }
    //cadastrando usuario
    signUp(email, password, name)
  }

  if (login) {
    return (
      <Container>
        <Logo source={require('../../assets/logo.jpg')} />
        <Input placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} />
        <Input placeholder="Senha" secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)} />
        <Button onPress={handleLogin}>
          <ButtonText>Entrar</ButtonText>
        </Button>
        <SignUpButton onPress={() => { toggleLogin() }}>
          <SignUpButtonText>Criar uma conta</SignUpButtonText>
        </SignUpButton>
      </Container>
    );
  }
  return (
    <Container>
      <Logo source={require('../../assets/logo.jpg')} />
      <Input placeholder="Nome" value={name} onChangeText={(text) => setName(text)} />
      <Input placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} />
      <Input placeholder="Senha" secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)} />
      <Button onPress={handleSignUp}>
        <ButtonText>Cadastrar</ButtonText>
      </Button>
      <SignUpButton onPress={() => { toggleLogin() }}>
        <SignUpButtonText>Já tenho uma conta</SignUpButtonText>
      </SignUpButton>
    </Container>
  );
}