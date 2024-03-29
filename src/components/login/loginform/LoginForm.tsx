import React, {Fragment, useState} from 'react';
import {Input, Button} from 'react-native-elements';
import {FormikProps} from 'formik';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {withNavigation} from 'react-navigation';
import {NavigationStackProp} from 'react-navigation-stack/lib/typescript/types';

interface ILoginForm {
  email: string;
  password: string;
}

interface props extends FormikProps<ILoginForm> {
  navigation: NavigationStackProp<{userId: string}>;
}

const LoginForm: React.FC<props> | any = ({
  errors,
  touched,
  values,
  handleChange,
  handleSubmit,
  isSubmitting,
  setFieldTouched,
  setFieldValue,
  navigation,
}) => {
  const [visibility, setVisibibility] = useState(false);

  const handleToggleVisibility = (): void => {
    setVisibibility(visibility ? false : true);
  };

  const handleSignUpScreen = (): void => {
    navigation.push('Register');
  };

  return (
    <Fragment>
      <Input
        errorStyle={{color: 'tomato'}}
        errorMessage={
          errors.email && touched.email ? errors.email : null
        }
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
        errorStyle={{color: 'tomato'}}
        errorMessage={
          errors.password && touched.password ? errors.password : null
        }
        onBlur={() => setFieldTouched('email')}
        value={values.password}
        onChangeText={value => setFieldValue('password', value)}
        placeholder="Contraseña"
        inputStyle={{color: 'white'}}
        placeholderTextColor="white"
        editable={!isSubmitting}
        textContentType="password"
        rightIcon={
          <Icon
            name={visibility ? 'visibility' : 'visibility-off'}
            size={24}
            color="white"
            onPress={handleToggleVisibility.bind(this)}
          />
        }
        secureTextEntry={!visibility}
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
        onPress={handleSignUpScreen.bind(this)}
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
