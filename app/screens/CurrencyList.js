import React, { Component } from 'react';
import { FlatList, View, StatusBar } from 'react-native';

import { ListItem, Seperator } from '../components/List';
import currencies from '../data/currencies';

const TEMP_CURRENCY = 'CAD';
class CurrencyList extends Component {
  handlePress = () => {
    console.log('selected');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === TEMP_CURRENCY}
              onPress={this.handlePress}
              checkmark={true}
              visible={true}
            />
          )}
          keyExtractor={item => item}
          ItemSeperatorComponent={Seperator}
        />
      </View>
    );
  }
}
export default CurrencyList;
