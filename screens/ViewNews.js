
import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';

import {
  Tile,
  Title,
  Screen,
  Divider,
  View, 
  Overlay
} from '@shoutem/ui';

import {Actions} from 'react-native-router-flux';
import HTML from 'react-native-render-html';

export default class ViewNews extends Component<{}> {

  home(){
    Actions.reset('home');
    Actions.home();
  }

  constructor(props) {
    super(props);
    this.state = {
      newspost: [],  
    }
  }
  render() {
    const news = this.state.newspost;
    const regex = /[!@#$%^&*<>0-9;]/g;
    console.log("newspost: "+this.props.newspost);
    return (
      <SafeAreaView style={styles.safeArea}>
        <Screen style={{ flex: 1 }}>
          <ScrollView>
          { 
            <View>
              <Tile>
                  <Overlay styleName="image-overlay">
                    <Title style={{color: '#fff', fontWeight: '800'}} styleName="md-gutter-bottom">{this.props.newspost.postTitle.replace(regex, "").toUpperCase()}</Title>
                    </Overlay>
                </Tile>
              <Screen style={{paddingLeft: 15, paddingRight: 15, paddingTop: 15, paddingBottom: 15, width:375}} styleName="paper">
                <HTML 
                  tagsStyles={{ 
                    body: {fontSize: 20}, 
                    p: {fontSize: 20, fontWeight: "normal"}, 
                    strong: {fontSize: 20,}, 
                    blockquote: {fontSize: 20}, 
                    a: {fontSize: 20, color: "#000"}, 
                    em: {fontSize: 20,}, 
                    img: {height: 250, width: 350}, 
                  }}
                  styleName="paper md-gutter multiline" 
                  html={this.props.newspost.postContent} 
                  imagesMaxWidth={Dimensions.get('window').width} 
                  ignoredStyles={['width', 'height', 'video']}
                  onLinkPress={(evt, href) => this.onLinkPress(href)}
                />
                <Divider styleName="line" />
              </Screen>
            </View>
          }  
          </ScrollView>
        </Screen>

      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // 1:1
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  },
});