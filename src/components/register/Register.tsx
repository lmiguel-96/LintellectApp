import React, {Fragment, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Dimensions,
  Alert,
} from 'react-native';
import styled from 'styled-components/native';
import {Formik} from 'formik';
import RegisterForm from './registerForm/RegisterForm';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Button} from 'react-native-elements';
import {withNavigation} from 'react-navigation';
import {NavigationStackProp} from 'react-navigation-stack/lib/typescript/types';
import ky from 'ky';
import * as Yup from 'yup';

const RegisterBackground = styled(ImageBackground)`
  width: ${Dimensions.get('window').width};
  height: ${Dimensions.get('window').height};
  position: relative;
`;

const Section = styled(View)`
  margin-top: 60px;
  padding-horizontal: 40px;
`;

const SectionInput = styled(View)`
  width: ${Dimensions.get('window').width};
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding-horizontal: 36px;
`;

const SectionTitle = styled(Text)`
  font-size: 34px;
  font-weight: bold;
  font-style: normal;
  text-align: left;
  color: #ffffff;
`;

const SectionDescription = styled(Text)`
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  text-align: left;
  color: #ffffff;
  font-weight: bold;
`;

const SectionDescriptionAlt = styled(Text)`
  width: 268px;
  height: 20px;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  text-align: center;
  color: #ffffff;
`;

const GreenText = styled(Text)`
  color: #4ad183;
`;

const SectionGoBack = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
  color: white;
  font-size: 16px;
  padding-horizontal: 2px;
  margin-top: 50px;
`;

interface props {
  navigation: NavigationStackProp<{userId: string}>;
}

interface IRegisterForm {
  username: string;
  fullName: string;
  email: string;
  password: string;
  confirmpassword: string;
}

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .label('Nombre de usuario')
    .required('Campo requerido')
    .min(2, 'Como mínimo dos caracteres'),
  fullname: Yup.string()
    .label('Nombre completo')
    .required('Campo requerido')
    .min(6, 'Como mínimo seis caracteres'),
  email: Yup.string()
    .label('Correo electrónico')
    .email('Ingre un email válido')
    .required('Campo requerido'),
  password: Yup.string()
    .label('Contraseña')
    .required('Campo requerido')
    .min(6, 'Como mínimo seis caracteres'),
  confirmpassword: Yup.string()
    .label('Confirmar contraseña')
    .required('Campo requerido')
    .min(6, 'Como mínimo seis caracteres')
    .test('passwords-match', 'Las contraseñas deben ser iguales', function(
      value,
    ) {
      return this.parent.password === value;
    }),
});

const API_URL = 'http://ec2-3-81-93-61.compute-1.amazonaws.com:8000/';
const USUARIOS = 'api/usuario/';

const Register: React.FC<props> | any = ({navigation}) => {
  const handleLoginScreen = () => {
    navigation.goBack();
  };

  const handleSignUpRequest = (formValues: IRegisterForm): void => {
    ky.post(API_URL + USUARIOS, {json: {...formValues}})
      .json()
      .then(response => {
        Alert.alert(
          'Registro completado exitosamente',
          `¡Bienvenido ${formValues.username}!`,
          [{text: 'OK', onPress: () => handleLoginScreen()}],
        );
      })
      .catch(error => {
        Alert.alert(
          'Error',
          `Ha ocurrido un error, por favor verifica e intenta nuevamente`,
        );
      });
  };

  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      <KeyboardAwareScrollView enableAutomaticScroll>
        <SafeAreaView style={{flex: 1}}>
          <RegisterBackground
            resizeMode="cover"
            source={require('../../assets/img/login-background.jpg')}>
            <SectionGoBack>
              <Button
                onPress={handleLoginScreen.bind(this)}
                title="Atrás"
                titleStyle={{color: 'white', fontSize: 20}}
                type="clear"
                icon={<Icon name="chevron-left" size={38} color="white" />}
              />
            </SectionGoBack>
            <Section>
              <SectionTitle>
                Bienvenido de{'\n'}
                <GreenText>vuelta</GreenText>
              </SectionTitle>
              <SectionDescription>
                Te damos la bienvenida a nuetra app{'\n'}
                <SectionDescriptionAlt>
                  Conectate con tus amigos, compañeros y universidad.
                </SectionDescriptionAlt>
              </SectionDescription>
            </Section>
            <SectionInput>
              <Formik
                onSubmit={formValues => handleSignUpRequest(formValues)}
                initialValues={{
                  username: '',
                  fullName: '',
                  email: '',
                  password: '',
                  confirmpassword: '',
                }}
                validateOnChange
                component={RegisterForm}
              />
            </SectionInput>
          </RegisterBackground>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Fragment>
  );
};

export default withNavigation(Register);
