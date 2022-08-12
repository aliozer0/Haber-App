import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import NewCard from './components/NewsCard';
import news_data from './new_data.json';
import New_banner_data from './new_banner_data.json';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
const App = () => {
  const rendernews = ({item}) => <NewCard news={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>NEWS</Text>
      <FlatList
        ListHeaderComponent={
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {New_banner_data.map(bannerNews => (
              <Image
                style={styles.banner_image}
                source={{uri: bannerNews.imageUrl}}
              />
            ))}
          </ScrollView>
        }
        keyExtractor={(item, index) => item.u_id.toString()}
        data={news_data}
        renderItem={rendernews}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  headerText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});
export default App;
