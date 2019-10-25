import React, {Fragment, useState} from 'react';
import {Input, Button} from 'react-native-elements';
import {FormikProps} from 'formik';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IRegisterForm {
  username: string;
  fullName: string;
  email: string;
  password: string;
  confirmpassword: string;
}

const RegisterForm: React.FC<FormikProps<IRegisterForm>> = ({
  touched,
  errors,
  values,
  handleSubmit,
  isSubmitting,
  setFieldTouched,
  setFieldValue,
}) => {
  const [visibility, setVisibibility] = useState(false);

  const handleToggleVisibility = (): void => {
    setVisibibility(visibility ? false : true);
  };

  return (
    <Fragment>
      <Input
        errorStyle={{color: 'tomato'}}
        errorMessage={
          errors.username && touched.username ? errors.username : null
        }
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
        errorStyle={{color: 'tomato'}}
        errorMessage={
          errors.fullName && touched.fullName ? errors.fullName : null
        }
        onBlur={() => setFieldTouched('fullname')}
        value={values.fullName}
        onChangeText={value => setFieldValue('fullName', value)}
        keyboardType="default"
        placeholder="Nombre completo"
        inputStyle={{color: 'white'}}
        placeholderTextColor="white"
        editable={!isSubmitting}
        textContentType="name"
      />
      <Input
        errorStyle={{color: 'tomato'}}
        errorMessage={errors.email && touched.email ? errors.email : null}
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
        errorStyle={{color: 'tomato'}}
        errorMessage={
          errors.password && touched.password ? errors.password : null
        }
        onBlur={() => setFieldTouched('password')}
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
      <Input
        errorStyle={{color: 'tomato'}}
        errorMessage={
          errors.confirmpassword && touched.confirmpassword ? errors.confirmpassword : null
        }
        onBlur={() => setFieldTouched('confirmpassword')}
        value={values.confirmpassword}
        onChangeText={value => setFieldValue('confirmpassword', value)}
        placeholder="Confirmar contraseña"
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
        onPress={() => handleSubmit()}
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
