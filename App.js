import React, { Component } from 'react';
import { Button, View, ScrollView, Linking, ImageBackground, TouchableOpacity, Text, StyleSheet, Image, ListView, TextInput, ActivityIndicator, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob'






class HomeScreen extends React.Component {
  render() {
    return (
     
      <View style={styles.mainStyle}>

        <ImageBackground source={require('./bkbg.jpg')} style={styles.backgroundImage} > 


          <Image
            style={styles.stretch}
            source={require('./bkeoki.png')}
          /> 
         

         <TouchableOpacity
         style={styles.button}
         onPress={() => this.props.navigation.navigate('Search')}
          >
         <Text style= {styles.midText}>Search our music</Text>
         </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Schedule')}
        >
         <Text style= {styles.midText}>Check Out Our Schedule</Text>
         </TouchableOpacity>

         <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('WebSearch')}
        >
         <Text style= {styles.midText}>Can't find a song?</Text>
         </TouchableOpacity>

         <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Contact')}
        >
         <Text style= {styles.midText}>Contact us</Text>
         </TouchableOpacity>


        </ImageBackground> 
      </View>
    
    );
  }
}

class ScheduleScreen extends React.Component {
  render() {
    return (
     
       <View style={styles.mainStyle}>

        <ImageBackground source={require('./bkbg.jpg')} style={styles.backgroundImage} > 
          
         
          <Text style={styles.bigText}> Our Schedule </Text>{/*Schedule screen*/}
          <Text style={styles.midText}> All show times are from 9pm-1am </Text>
          <Text> </Text>
          <Text> </Text>
          <Text style={styles.midTextWhite}> Tuesday: Granfalloons </Text>
          <Text style={styles.midTextWhite}> Wednesday: Waterway</Text>
          <Text style={styles.midTextWhite}> Friday: Primanti Bros York</Text>
          <Text style={styles.midTextWhite}> Saturday: Primanti Bros Lancaster</Text>
          <Text style={styles.midTextWhite}> Sunday: Granfalloons </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text style={styles.midTextWhite}> Want the Karaoke Kid to do your next event or wedding?</Text>
          <Text style={styles.midTextWhite}> Just contact us</Text>
          <Text style={styles.midTextWhite}> We'd be happy to talk about it!!</Text>
          

        </ImageBackground>
      </View>
    
    );
  }
}

class WebSearchScreen extends React.Component {
  render() {
    return (
     
      <View style={styles.mainStyle}>
        <ImageBackground source={require('./bkbg.jpg')} style={styles.backgroundImage} > 


          
           <Image
            style={styles.stretch}
            source={require('./orkeokikid.jpg')}
          />  

          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
         
          <Text style={styles.midTextWhite}> Can't find what you're looking for? </Text>
          <Text> </Text>
          <Text style={styles.midTextWhite}> Go to this website, find a song,</Text>
          <Text style={styles.midTextWhite}> and we'll buy it for you</Text>
          <Text> </Text>
          <Text style={styles.midTextWhite}
            onPress={() => Linking.openURL('http://www.karaoke-version.com/karaoke/')}>
            --CLICK HERE--
           </Text>

           
        
       </ImageBackground>
      </View>
    
    );
  }
}

class ContactScreen extends React.Component {
  render() {
    return (
       
      
        <View style={styles.mainStyle}>
          <ImageBackground source={require('./bkbg.jpg')} style={styles.backgroundImage} > 

          <Text> </Text>
          <Text> </Text>
          <Text> </Text>

          <Image
            style={styles.stretch}
            source={require('./keokikid.jpeg')}
          /> 

          <Text> </Text>

          <Text style={styles.midTextWhite}> Wanna get in touch with the Karaoke Kid </Text>
          <Text> </Text>
          <Text style={styles.midTextWhite}> Find us on Facebook </Text>
          <Text style={styles.midTextWhite}
            onPress={() => Linking.openURL('https://www.facebook.com/The-Karaoke-Kid-York-Pa-278396102214309/')}>
            Facebook/Karaoke-Kid-York-Pa
           </Text>
           <Text> </Text>
          <Text style={styles.midTextWhite}>Email us</Text>
          <Text style={styles.midTextWhite}>thekaraokekid@yahoo.com</Text>
          <Text>  </Text>
          <Text style={styles.midTextWhite}> Or check out our schedule and come find us!!!!</Text>
          
          </ImageBackground>                                                                                                                                           
        </View>
       
      
    );
  }
}

class DonateScreen extends React.Component {
  render() {
    return (
      
    
      <View style={styles.mainStyle}> 
        <ImageBackground source={require('./bkbg.jpg')} style={styles.backgroundImage} > 
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text style={styles.bigTextWhite}> Donate to us </Text>
           <Text> </Text>
          <Text> </Text>
          <Text style={styles.midTextWhite}> If you'd like to contribute since we bought you a song or you'd just like to donate </Text>
          <Text> </Text>
          <Text> </Text>
          <Text style={styles.midTextWhite}
            onPress={() => Linking.openURL('https://www.patreon.com/thekaraokekid')}>
            --Click here--
           </Text>
          <Text> </Text>
          <Text> </Text>
          <Text style={styles.midTextWhite}> We thank you!!!!!!! </Text>
          <Text style={styles.midTextWhite}> Hadoken </Text>
          
        </ImageBackground>
       
      </View>
      
    );
  }
}
 


class SearchScreen extends React.Component {
  bannerError(){
  console.log("an error");
  return;
}

constructor(props) {

  super(props);

  this.state = {

    isLoading: true,
    text: '',
  
  }

  this.arrayholder = [] ;
}

componentDidMount() {

  return fetch('https://raw.githubusercontent.com/asfopoo/Kareoke-Kid-/master/list.txt') 
    .then((response) => response.json()) 
    .then((responseJson) => {
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        isLoading: false,
        dataSource: ds.cloneWithRows(responseJson),
      },  function() {

      
        this.arrayholder = responseJson ;

      });
    })
    .catch((error) => {
      console.error(error);
    });
    
}

GetListViewItem (song) {
 Alert.alert(song);
  

}

 SearchFilterFunction(text){
   
   const newData = this.arrayholder.filter(function(item){ 
       const itemData = item.song.toUpperCase()
       const textData = text.toUpperCase()
       return itemData.indexOf(textData) > -1
   })
   this.setState({
       dataSource: this.state.dataSource.cloneWithRows(newData),
       text: text
   })
}

ListViewItemSeparator = () => { 
  return (
    <View
      style={{
        height: 0,
        width: "100%",
        backgroundColor: "#000",
      }}
    />
  );
}


render() { 
  if (this.state.isLoading) {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ActivityIndicator />
      </View> 
    );
  }

  return (

    <View style={styles.MainContainer}>
       
    <TextInput 
     style={styles.TextInputStyleClass}
     onChangeText={(text) => this.SearchFilterFunction(text)}
     value={this.state.text}
     underlineColorAndroid='transparent'
     placeholder="Search by Artist or song title"
      />
        
      <ListView 

        dataSource={this.state.dataSource}

        renderSeparator= {this.ListViewItemSeparator}

        renderRow={(rowData) => <Text style={styles.rowViewContainer} 

        onPress={this.GetListViewItem.bind(this, rowData.song)} >{rowData.song}</Text>}

        enableEmptySections={true}

        style={{marginTop: 10}}

      />

      <View>
        <AdMobBanner
        adSize="fullBanner"
        adUnitID="ca-app-pub-1989279272547468/8508965782"
        testDevices={[AdMobBanner.simulatorId]}
        onAdFailedToLoad={error => console.error(error)}
        />
      </View>  
  
    </View>
  );
}
}




const RootStack = StackNavigator( 
  {
    Home: { 
      screen: HomeScreen,
    },
    Search: {
      screen: SearchScreen,
    },
    Schedule: {
      screen: ScheduleScreen,
    },
    WebSearch: {
      screen: WebSearchScreen,
    },
    Contact: {
      screen: ContactScreen,
    },
//    Donate: {
//      screen: DonateScreen,
//    },
  },
  {
    initialRouteName: 'Home',
  }
);
 {/*tells react which page to start at*/}

export default class App extends React.Component {

  render() {
    return (
    <RootStack />

     );
  }
}

const styles = StyleSheet.create({ 
 
 MainContainer :{
 
  justifyContent: 'center',
  flex:1,
  margin: 7,
  },
 
 rowViewContainer: {
   fontSize: 17,
   padding: 10
  },
 
  TextInputStyleClass:{
        
   textAlign: 'center',
   height: 40,
   borderWidth: 1,
   borderColor: '#ff0000',
   borderRadius: 7 ,
   backgroundColor : "#FFFFFF"
        
   },

  mainStyle: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  
   },

  backgroundImage: {
      flex: 1,
      alignSelf:'stretch',
      alignItems: 'center',
      width: null,
      justifyContent: 'center',

     
  },

   button: {
    borderRadius: 10,  //changes the rounded edges
    padding: 10, //changes height/width around text of button
    marginBottom: 5, //marin under button
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 }, // shadow stylings unessary since opacity is set to 0
    shadowRadius: 10,
    shadowOpacity: 0, // makes shadow invisible.. mainly affects iphone not androic
  },

  text: {
        textAlign: 'center',
        color: 'white',

        
    },

   bigText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 32
        
    },   

    midText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 22
        
    },  

    blackText: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20
    },  

    bigTextWhite: {
        textAlign: 'center',
        color: 'white',
        fontSize: 32
        
    },   

    midTextWhite: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20
        
    },

    bottomBanner: {
    position: "absolute",
    bottom: 0
    }, 

   container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    }, 

 
});
