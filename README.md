# React Native and WordPress by example

As mobile developers, integrating data source is a very important aspect of building mobile apps. Having an organized data source ready for integration would make development easy and also reduce the time taken to build and develop mobile apps.
WordPress as a back-end can be very effective if you're building mobile applications that have a lot of consumable content such as a mobile application for a blog, e-commerce website, e.t.c. 
It can provide standard endpoints to return the data you need and also provides a standard documentation for all the endpoints you'll require.

[View tutorial](#)

## Getting Started


Clone the project repository by running the command below if you use SSH

```
git clone git@github.com:samuelayo/wordpress_react_by_example.git
```

If you use https, use this instead

```
git clone https://github.com/samuelayo/wordpress_react_by_example.git
```

Change directory into the newly cloned project and install dependencies

```
cd wordpress_react_by_example
npm install
```

### Prerequisites

#### Setup Wordpress

- Please ensure you have a Wordpress Instance up and running 
- Go to Plugins > Add New 
- Search, install and activate the WordPress REST API 

#### Install React native cli
If you do not already have the React Native CLI installed, Please install it by running:

```
npm install -g react-native-cli
```

Or better still, install the Expo CLI

```
npm install -g expo-cli
```

Link the recently install libraries

```
react-native link
```

Run your app:

```
react-native run-android
```


## Built With

* [React Native](https://facebook.github.io/react-native/) - Build native mobile apps using JavaScript and React.
* [WordPress](https://wordpress.org/) - WordPress is open source software you can use to create a beautiful website, blog, or app.

