
import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import {
  Subtitle,
  Screen,
  Divider,
  View, 
  Row,
  ListView,
} from '@shoutem/ui';

import {Actions} from 'react-native-router-flux';

export default class Home extends Component<{}> {

  home(){
    Actions.home();
  }

  viewNews(newspost){
    Actions.viewnews({newspost: newspost});
  }

  componentWillMount() {
    this.fetchMusicNews();
  }

  fetchMusicNews = async () => {
    const response = await fetch("http://localhost/wordpress/wp-json/wp/v2/posts/");
    const json = await response.json();
    this.setState({ musicNews: json, isLoadingMusicNews: false });
  };

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.state = {
      isLoadingMusicNews: true,
      musicNews: [],
    }
  }  

  renderRow(post) {
    const regex = /(<([^>]+)>)/ig;
    let newspost = {
        postId: post.id,
        postDate: post.date,
        postLink: post.guid.rendered,
        postTitle: post.title.rendered,
        postExcerpt: post.excerpt.rendered,
        postContent: post.content.rendered,
        postCategory: post.categories,
    }
    return (
      <Row style={{height: 80}}>
        <View styleName="vertical stretch space-between">
          <Subtitle 
            numberOfLines={2} 
            newspost={newspost} 
            onPress={() => this.viewNews(newspost)}>
            {post.title.rendered.replace(regex, '').toUpperCase()}
          </Subtitle>
        </View>
      </Row>
    );
  }

  render() {
    const regex = "/(<([^>]+)>)/ig"
    const musicNews = this.state.musicNews;
    return (
      <SafeAreaView style={styles.safeArea}>
        <Screen>
          <View>
              <ListView
                data={musicNews}
                renderRow={this.renderRow}
              />
          </View>
        </Screen>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  },
});