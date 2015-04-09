var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Navigator,
  Component
} = React;


var SearchScene = require('./SearchScene');
var SearchResultScene = require('./SearchResultScene');

class Application extends Component {

  render() {
    return (
      <Navigator
         initialRoute={{name: 'SearchScene', component: SearchScene}}
         configureScene={() => {
             return Navigator.SceneConfigs.FloatFromRight;
         }}
         renderScene={(route, navigator) => {
             if (route.component) {
                 return React.createElement(route.component, { navigator });
             }
         }}
      />
    );
  }

}

module.exports = Application;
