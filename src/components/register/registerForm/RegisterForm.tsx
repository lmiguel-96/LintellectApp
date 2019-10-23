import React, {Fragment} from 'react';
import {Input, Button} from 'react-native-elements';
import {FormikProps} from 'formik';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IRegisterForm {
  username: string;
  fullname: string;
  email: string;
  password: string;
  confirmpassword: string;
}

const RegisterForm: React.FC<FormikProps<IRegisterForm>> = ({
  values,
  handleChange,
  handleSubmit,
  isSubmitting,
  setFieldTouched,
  setFieldValue,
}) => {
  return (
    <Fragment>
      <Input
        onBlur={() => setFieldTouched('username')}
        value={values.username}
        onChangeText={value => setFieldValue('username', value)}
        keyboardType="default"
        placeholder="Nombre de usuario"
        inputStyle={{color: 'white'}}
        placeholderTextColor="white"
        editable={!isSubmitting}
        textContentType="name"
        rightIcon={<Icon name="info" size={24} color="white" />}
      />
      <Input
        onBlur={() => setFieldTouched('fullname')}
        value={values.fullname}
        onChangeText={value => setFieldValue('fullname', value)}
        keyboardType="default"
        placeholder="Nombre completo"
        inputStyle={{color: 'white'}}
        placeholderTextColor="white"
        editable={!isSubmitting}
        textContentType="name"
      />
      <Input
        onBlur={() => setFieldTouched('email')}
        value={values.email}
        onChangeText={value => setFieldValue('email', value)}
        keyboardType="email-address"
        placeholder="Correo electrónico"
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
      <Input
        value={values.confirmpassword}
        onChangeText={value => setFieldValue('confirmpassword', value)}
        placeholder="Confirmar contraseña"
        inputStyle={{color: 'white'}}
        placeholderTextColor="white"
        editable={!isSubmitting}
        textContentType="password"
				rightIcon={<Icon name="visibility-off" size={24} color="white" />}
				secureTextEntry
      />
      <Button
        onPress={handleSubmit.bind(this)}
        title="Continuar"
        type="solid"
        disabled={isSubmitting}
				loading={isSubmitting}
				disabledStyle={{
					backgroundColor: '#4ad183',		
				}}
				loadingStyle={{
					backgroundColor: '#4ad183',		
				}}
        buttonStyle={{
          borderRadius: 13,
          backgroundColor: '#4ad183',
          marginTop: 30,
        }}
      />
    </Fragment>
  );
};

export default RegisterForm;
