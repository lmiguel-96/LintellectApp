import React, {Fragment} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Dimensions,
} from 'react-native';
import styled from 'styled-components/native';
import {Formik} from 'formik';
import RegisterForm from './registerForm/RegisterForm';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Button} from 'react-native-elements';
import {withNavigation} from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack/lib/typescript/types';

const RegisterBackground = styled(ImageBackground)`
  width: ${Dimensions.get('window').width};
  height: ${Dimensions.get('window').height};
  position: relative;
`;

const Section = styled(View)`
  margin-top: 150px;
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
  navigation: NavigationStackProp<{ userId: string }>;
}

const Register: React.FC<props> | any = ({navigation}) => {
  const handleLogin = () => {
    navigation.goBack();
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
                onPress={handleLogin.bind(this)}
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
                onSubmit={values => console.log(values)}
                initialValues={{
                  username: '',
                  fullname: '',
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
