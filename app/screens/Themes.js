import React, { Component } from 'react';
import { StatusBar, ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ListItem, Seperator } from '../components/List';


const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $orange: '$primaryOrange',
  $green: '$primaryGreen',
  $purple: '$primaryPurple',
});

class Themes extends Component {
    handleThemePress = (color) => {
      console.log(color);
    }

    render() {
      return (
        <ScrollView>
          <StatusBar translucent={false} barStyle="default" />
            <ListItem
              text="Blue"
              onPress={() => this.handleThemePress(styles.$blue)}
              selected
              checkmark={false}
              iconBackground={styles.$blue}
            />
            <Seperator />

            <ListItem
              text="Orange"
              onPress={() => this.handleThemePress(styles.$orange)}
              selected
              checkmark={false}
              iconBackground={styles.$orange}
            />
            <Seperator />

            <ListItem
              text="Green"
              onPress={() => this.handleThemePress(styles.$green)}
              selected
              checkmark={false}
              iconBackground={styles.$green}
            />
            <Seperator />

            <ListItem
              text="Purple"
              onPress={() => this.handleThemePress(styles.$purple)}
              selected
              checkmark={false}
              iconBackground={styles.$purple}
            />
            <Seperator />
        </ScrollView>
      );
    }
}

export default Themes;
