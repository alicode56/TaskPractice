import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React from 'react';
import { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()

    .min(4, 'should be min of 4 characters  ')
    .max(16, 'should be max of 16 characters  ')
    .required('length is required'),
});

export default function YupSchema() {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);

  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let charactersList = '';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    if (upperCase) {
      charactersList += upperCaseChars;
    }
    if (lowerCase) {
      charactersList += lowerCaseChars;
    }
    if (number) {
      charactersList += numberChars;
    }
    if (symbol) {
      charactersList += symbolChars;
    }

    // Check if at least one character type is selected
    if (charactersList.length === 0) {
      Alert.alert('Error', 'Please select at least one character type (uppercase, lowercase, numeric, or symbols)');
      return;
    }

    const passwordResult = createPassword(charactersList, passwordLength);

    setPassword(passwordResult);
    setIsPassGenerated(true);
  };
  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPasswordState = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowerCase(false);
    setUpperCase(false);
    setNumber(false);
    setSymbol(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}> Password Generator</Text>

          {/* new formik paste here  */}
          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={PasswordSchema}
            onSubmit={values => {
              console.log(values);
              generatePasswordString(Number(values.passwordLength));
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleReset,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                  </View>
                  <TextInput
                    style={styles.inputStyle}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder="Ex. 8"
                    keyboardType="number-pad"
                    returnKeyType="done"
                    autoComplete="off"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="oneTimeCode"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include uppercase</Text>
                  <BouncyCheckbox
                    useBuiltInState={false}
                    isChecked={upperCase}
                    onPress={() => setUpperCase(!upperCase)}
                    fillColor="green"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include lowercase</Text>
                  <BouncyCheckbox
                    useBuiltInState={false}
                    isChecked={lowerCase}
                    onPress={() => setLowerCase(!lowerCase)}
                    fillColor="red"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include numeric</Text>
                  <BouncyCheckbox
                    useBuiltInState={false}
                    isChecked={number}
                    onPress={() => setNumber(!number)}
                    fillColor="yellow"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include symbols</Text>
                  <BouncyCheckbox
                    useBuiltInState={false}
                    isChecked={symbol}
                    onPress={() => setSymbol(!symbol)}
                    fillColor="purple"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <View style={styles.formsActions}>
                    <TouchableOpacity
                      disabled={!isValid}
                      style={styles.primaryButton}
                      onPress={handleSubmit}
                    >
                      <Text style={styles.promaryButtonText}>
                        Generate Password
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.secondaryBtn}
                      onPress={() => {
                        handleReset();
                        resetPasswordState();
                      }}
                    >
                      <Text style={styles.secondaryBtnText}>Reset</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {isPassGenerated && (
                  <View style={styles.outputContainer}>
                    <Text style={styles.outputLabel}>Generated Password</Text>
                    <Text style={styles.generatedPassword}>{password}</Text>
                  </View>
                )}
               
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f5f6fb',
    padding: 20,
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#222',
    marginBottom: 20,
    letterSpacing: 0.5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  formsActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  inputColumn: {
    width: '60%',
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '35%',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    textAlign: 'center',
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
    color: '#343a40',
  },
  errorText: {
    color: 'red',
    marginTop: 4,
    fontSize: 12,
  },
  primaryButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  promaryButtonText: {
    color: '#fff',
    fontWeight: '700',
  },
  secondaryBtn: {
    backgroundColor: '#d63031',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryBtnText: {
    color: '#fff',
    fontWeight: '700',
  },
  outputContainer: {
    marginTop: 18,
    borderWidth: 1,
    borderColor: '#80808033',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fafafa',
  },
  outputLabel: {
    color: '#444',
    fontSize: 14,
    marginBottom: 6,
    fontWeight: '600',
  },
  generatedPassword: {
    color: '#222',
    fontSize: 17,
    fontWeight: '700',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.05,
  },
  elevatedCard: {
    shadowRadius: 10,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#222',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 14,
  },

});
