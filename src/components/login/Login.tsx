import React, {Fragment} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Dimensions,
} from 'react-native';

import {Formik} from 'formik';
import styled from 'styled-components/native';
import LoginForm from './loginform/LoginForm';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const LoginBackground = styled(ImageBackground)`
  width: ${Dimensions.get('window').width};
  height: ${Dimensions.get('window').height};
  position: relative;
`;

const Section = styled(View)`
  margin-top: 200px;
  padding-horizontal: 40px;
`;

const SectionInput = styled(View)`
  width: ${Dimensions.get('window').width};
  display: flex;
  flex-direction: column;
  margin-top: 60px;
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

const Login: React.FC = () => {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      <KeyboardAwareScrollView enableAutomaticScroll>
        <SafeAreaView style={{flex: 1}}>
          <LoginBackground
            resizeMode="cover"
            source={require('../../assets/img/login-background.jpg')}>
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
                onSubmit={values => console.log(values)}
                initialValues={{email: '', password: ''}}
                validateOnChange
                component={LoginForm}
              />
            </SectionInput>
          </LoginBackground>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Fragment>
  );
};

export default Login;
