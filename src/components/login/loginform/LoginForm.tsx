import React, {Fragment} from 'react';
import {Input, Button} from 'react-native-elements';
import {FormikProps} from 'formik';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigation } from 'react-navigation'

interface ILoginForm {
  email: string;
  password: string;
}

interface props extends FormikProps<ILoginForm> {
  navigation: any;
};

const LoginForm: React.FC<props> = ({
  values,
  handleChange,
  handleSubmit,
  isSubmitting,
  setFieldTouched,
  setFieldValue,
  navigation
}) => {
  const handleSignUp = () => {
    navigation.push('Register');
  }

  return (
    <Fragment>
      <Input
        onBlur={() => setFieldTouched('email')}
        value={values.email}
        onChangeText={value => setFieldValue('email', value)}
        keyboardType="email-address"
        placeholder="Email"
        inputStyle={{color: 'white'}}
        placeholderTextColor="white"
        editable={!isSubmitting}
        textContentType="emailAddress"
      />
      <Input
        value={values.password}
        onChangeText={value => setFieldValue('password', value)}
        placeholder="Contraseña"
        inputStyle={{color: 'white'}}
        placeholderTextColor="white"
        editable={!isSubmitting}
        textContentType="password"
        rightIcon={<Icon name="visibility-off" size={24} color="white" />}
        secureTextEntry
      />
      <Button
        onPress={handleSubmit.bind(this)}
        title="Iniciar sesión"
        type="outline"
        buttonStyle={{
          borderRadius: 13,
          borderColor: 'white',
          marginTop: 60,
        }}
        disabled={isSubmitting}
        loading={isSubmitting}
        titleStyle={{color: 'white'}}
      />
      <Button
        onPress={handleSignUp.bind(this)}
        title="Registrarse"
        type="solid"
        disabled={isSubmitting}
        disabledStyle={{
          backgroundColor: '#4ad183',
        }}
        loadingStyle={{
          backgroundColor: '#4ad183',
        }}
        buttonStyle={{
          borderRadius: 13,
          backgroundColor: '#4ad183',
          marginTop: 8,
        }}
      />
    </Fragment>
  );
};

export default withNavigation(LoginForm);
