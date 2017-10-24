import React, { Component, PropTypes } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import { CurrencyList } from './CurrencyList';


const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 79.74;
const TEMP_CONVERSION_DATE = new Date();
const TEMP_CONVERSION_BASE_CURRENCY = 'USD';
const TEMP_CONVERSION_QUOTE_CURRENCY = 'GBP';


class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  handlePressBaseCurrency = () => {
    // text in function needs to align with what's in the StackNavigator
    this.props.navigation.navigate('CurrencyList');
  }

  handlePressQuoteCurrency = () => {
    console.log('hi');
  }

  handleTextChange = (text) => {
    console.log("change text", text);
  }

  handleSwapCurrency = (text) => {
    console.log("swap currency", text);
  }

  handleOptionsPress = (text) => {
    console.log("options pressed");
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="position">
          <Logo />
          <InputWithButton
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handlePressBaseCurrency}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
          />
          <InputWithButton
            buttonText={TEMP_QUOTE_CURRENCY}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
            defaultValue={TEMP_QUOTE_PRICE}
          />
          <LastConverted
            date={TEMP_CONVERSION_DATE}
            base={TEMP_CONVERSION_BASE_CURRENCY}
            quote={TEMP_CONVERSION_QUOTE_CURRENCY}
            conversionRate={TEMP_CONVERSION_RATE}
          />
          <ClearButton
            text="Reverse Currencies"
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;
