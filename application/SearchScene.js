var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} = React;

var SearchResultScene = require('./SearchResultScene');

var SearchScene = React.createClass({

  getInitialState() {
    return {isSearching: false};
  },

  onSearch() {
    this.setState({isSearching: true});

    this.props.navigator.push({
         name: 'SearchResultScene',
         component: SearchResultScene
     });
  },

  renderSearchButton() {
    if (this.state.isSearching) {
      return (
        <View style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Searching...</Text>
        </View>
      );
    } else {
      return (
        <TouchableHighlight onPress={this.onSearch}>
          <View style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search</Text>
          </View>
        </TouchableHighlight>
      );
    }
  },

  render() {
    return (
      <View style={styles.container}>
        <Text>Search the holy Quran</Text>
        <TextInput
          ref='searchbox'
          style={styles.searchbox}
          onChangeText={(text) => this.setState({input: text})}
        />
        {this.renderSearchButton()}
      </View>
    );
  },

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  searchLabel: {
    fontSize: 20,
    textAlign: 'center',
  },
  searchbox: {
    height: 30,
    margin: 10,
    borderColor: 'gray',
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  searchButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#d3d3d3'
  },
  searchButtonText: {
    color: '#ffffff'
  }

});

module.exports = SearchScene;
