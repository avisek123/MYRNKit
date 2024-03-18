// External Library Import
import {useForm, Controller} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
// Internal Library Import
import {AnimatedButton, AppText} from 'components/core';
import {useBasicFunctions} from 'hooks';
import {DimensionHeight} from 'utils';
import {GlobalStyles} from 'styles';

interface ILoginFormData {
  Email: string;
  Password: string;
}
const Login = () => {
  const {t} = useTranslation();
  const [btnClicked, setBtnClicked] = useState(false);
  const {handleLogin} = useBasicFunctions();

  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({
    mode: 'onTouched',
    shouldFocusError: true,
    defaultValues: {
      Email: '',
      Password: '',
    },
  });
  const onSubmit = (data: ILoginFormData) => {
    const infoData = {
      email: data?.Email,
      password: data?.Password,
    };
    setBtnClicked(!btnClicked);
    setTimeout(() => {
      handleLogin();
    }, 3000);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <ScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}>
        <Image
          source={{
            uri: 'https://img.freepik.com/premium-vector/secure-login-concept-illustration-web-password-account-password_203633-3756.jpg?w=1480',
          }}
          style={{height: DimensionHeight * 0.3, marginTop: '10%'}}
          resizeMode="contain"
        />
        <View
          style={{
            marginTop: '10%',
          }}>
          <AppText
            text="LOG_IN_TO_YOUR_ACCOUNT"
            style={{
              marginLeft: 10,
              fontSize: 22,
              color: '#000',
              fontWeight: '600',
            }}
          />

          <AppText
            text="WELCOME_BACK_PLEASE_ENTER_YOUR_DETAILS"
            style={{
              marginLeft: 10,
              fontSize: 14,
              marginTop: 2,
            }}
          />
        </View>

        <View
          style={{
            marginHorizontal: 15,
          }}>
          <AppText text="EMAIL" style={styles.text} />

          <Controller
            control={control}
            render={({
              field: {onChange, onBlur, value},
              fieldState: {error},
            }) => (
              <TextInput
                onChangeText={value => onChange(value)}
                value={value}
                placeholder={t('ENTER_YOUR_EMAIL')}
                style={{
                  ...styles.inputContainer,
                  borderColor: error ? 'red' : '#ccc',
                }}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onBlur={onBlur}
              />
            )}
            name="Email"
            rules={{
              required: {
                value: true,
                message: t('EMAIL_REQ'),
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address!',
              },
            }}
          />
          {errors.Email && (
            <Text style={GlobalStyles.errorMsg}>{errors.Email.message}</Text>
          )}
          <AppText text="PASSWORD" style={styles.text} />
          <Controller
            control={control}
            render={({
              field: {onChange, onBlur, value},
              fieldState: {error},
            }) => (
              <TextInput
                onChangeText={value => onChange(value)}
                value={value}
                style={{
                  ...styles.inputContainer,
                  borderColor: error ? 'red' : '#ccc',
                }}
                placeholder={t('ENTER_YOUR_PASSWORD')}
                autoCapitalize="none"
                autoCorrect={false}
                onBlur={onBlur}
              />
            )}
            name="Password"
            rules={{
              required: {
                value: true,
                message: t('PASS_REQ'),
              },
            }}
          />
          {errors.Password && (
            <Text style={GlobalStyles.errorMsg}>{errors.Password.message}</Text>
          )}
        </View>

        <AnimatedButton
          btnClicked={btnClicked}
          setBtnClicked={setBtnClicked}
          handlePress={handleSubmit(onSubmit)}
          buttonText="LOG_IN"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    maxWidth: 300,
    maxHeight: 200,
    alignSelf: 'center',
    marginTop: 15,
  },
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: DimensionHeight / 22,
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
    marginTop: '5%',
    fontWeight: '500',
  },
});
