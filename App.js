// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  View,
  SafeAreaView,
  Image,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions
} from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText';


export default function App() {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >

      <AppText>I Love React Native!</AppText>
    </View >
  )
}



/////////////////////////UNUSED CODE AND EXAMPLES/////////////////////////////

// import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
// const { landscape } = useDeviceOrientation();

///////////STYLES EXAMPLES//////////

// const containerStyle = { backgroundColor: 'orange' }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
//     // justifyContent: 'center',
//     // alignItems: 'center'
//   },

// ALERT.ALERT WITH PARAMATERS

// Alert.alert("My Title", 'My Message', [
//   { text: "Yes", onPress: () => console.log('Yes') },
//   { text: 'No', onPress: () => console.log('No') }
// ])

//IMAGE TAG

// <Text>Hello React Native</Text>
//     <TouchableHighlight onPress={() => console.log('image highlight')}>
//       <Image source={{
//         width: 200,
//         height: 300,
//         uri: 'https://picsum.photos/200/300'
//       }} />
//     </TouchableHighlight>
//     <StatusBar style="auto" />

//BUTTON

// <Button
//   title='click me' onPress={() => console.log('text')}
// />

//DIMENSIONS

// <View style={{
//       backgroundColor: 'dodgerblue',
//       width: '50%',
//       height: 70

//     }}></View>

//DIMENSIONS DON'T RESPOND TO HORIZONTAL PHONE

// console.log(Dimensions.get('screen'))

//ACCONTING FOR LANDSCAPE MODE (I.E. VIDEO PLAYER)

//change this to default in app.json -> "orientation": "default",
//can also be portrait or landscape only

// import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

// export default function App() {
//   const { landscape } = useDeviceOrientation();

// style prop can take an array - greater index's values replace same in lesser index's
//   <SafeAreaView style={styles.container}>
//   <View style={{
//     backgroundColor: 'dodgerblue',
//     width: '100%',
//     height: landscape ? '100%' : '30%'

//   }}></View>
// </SafeAreaView >


///////THIS IS ALL ABOUT ALIGNING ITEMS AND BEGINNING FLEX////////

// export default function App() {
// const { landscape } = useDeviceOrientation();

// return (
//   <View style={{
//     backgroundColor: 'white',
//     flex: 1,
//     //because default is vertical floated left
//     flexDirection: 'row', // makes main axis horizontal
//     //  row-reverse - floated right
//     //  column-reverses - floates botom left
//     justifyContent: 'center', //aligns items along main or horizontal axis because flex direction is set to row.
//     alignItems: 'center', //alignts itemes along secondary axis within each line -> wrap example that pushes them all to top because !alignContent
//     alignContent: 'center', //aligns all content along secondary axis -> in this case vertical
//     //  alignContent only works if yo have wraping
//     flexWrap: 'wrap'
//   }}>

//     <View style={{
//       backgroundColor: 'dodgerblue',
//       // flex: 2 twice the size of others -> its two of the four sections 
//       //not used height and width

//       //lays views out vertically
//       //css flex alighns items horzizontaly -> difference
//       width: 100,
//       height: 300,
//       //move one item
//       alignSelf: 'flex-start'
//     }} />
//     <View style={{
//       backgroundColor: 'gold',
//       // flex: 1
//       width: 100,
//       height: 200
//     }} />
//     <View style={{
//       backgroundColor: 'tomato',
//       // flex 1,
//       width: 100,
//       height: 100
//     }} />
//   </View>
// );
// }

//FLEX BASIS, FLEX GROW, FLEX SHRINK

// <View style={{
//   backgroundColor: 'white',
//   flex: 1,
//   flexDirection: 'row', // makes main axis horizontal
//   justifyContent: 'center', //aligns items along main or horizontal axis because flex direction is set to row.
//   alignItems: 'center', //alignts itemes along secondary axis within each line -> wrap example that pushes them all to top because !alignContent
//   alignContent: 'center', //aligns all content along secondary axis -> in this case vertical
//   // flexWrap: 'wrap'
// }}>

//   <View style={{
//     backgroundColor: 'dodgerblue',
//     // flexBasis: 100, //sets value for main or primary axis, works for height and width
//     // flexGrow: .5, //works the samy as flex, fills the empty space
//     flexShrink: 1, //reduces this view if other items are being push off the screen, flex = -1 does the same thing.
//     width: 400,
//     // width: 100,
//     height: 100,

//   }} />
//   <View style={{
//     backgroundColor: 'gold',
//     width: 100,
//     height: 100
//   }} />
//   <View style={{
//     backgroundColor: 'tomato',
//     width: 100,
//     height: 100
//   }} />
// </View>

////////////RELATIVE AND ABSOLUTE POSITIONING/////

// return (
//   <View style={{
//     backgroundColor: 'white',
//     flex: 1,
//     flexDirection: 'row', // makes main axis horizontal
//     justifyContent: 'center', //aligns items along main or horizontal axis because flex direction is set to row.
//     alignItems: 'center', //alignts itemes along secondary axis within each line -> wrap example that pushes them all to top because !alignContent
//     alignContent: 'center', //aligns all content along secondary axis -> in this case vertical
//     // flexWrap: 'wrap'
//   }}>

//     <View style={{
//       backgroundColor: 'dodgerblue',
//       width: 100,
//       height: 100,

//     }} />
//     <View style={{
//       backgroundColor: 'gold',
//       width: 100,
//       height: 100,
//       left: 20,
//       top: 20,  //like setting margin -> can do negative # and bottom, right, left.  Changes postition without affecting the layout or other items
//       //component default positioning is 'relative' -> allows for moving components without affecting layout
//       position: 'absolute', //positoins component relative to its parent and other items move to fill space (i.e. it affects the layout)
//     }} />
//     <View style={{
//       backgroundColor: 'tomato',
//       width: 100,
//       height: 100
//     }} />
//   </View>
// );

/////////BORDERS///////

    // ( <View style={{
    //     backgroundColor: 'dodgerblue',
    //     width: 100,
    //     height: 100,
    //     borderWidth: 10,
    //     borderColor: 'royalblue',
    //     borderRadius: 50, //makint it at least half the size of box to make circle
    //     // borderTopWidth: 20,
    //     // borderTopLeftRadius: 50,
    //   }}></View>)

//////////////SHADOW/////////////

    // (<View style={{
    //         backgroundColor: 'dodgerblue',
    //         width: 100,
    //         height: 100,
    //         //iOS properties
    //         shadowColor: 'grey',
    //         shadowOffset: { width: 10, height: 10 }, //width = right, height = bottom -> can do neg to put shadow on other side
    //         shadowOpacity: 1, //range 0 to 1
    //         //Android properties
    //         elevation: 20,
    //       }}
    //       ></View>)

///////////////PADDING AND MARGIN//////////

      // (<View
      // style={{
      //   flex: 1,
      //   justifyContent: 'center',
      //   alignItems: 'center',
      // }}
      // >
      // <View style={{
      //   backgroundColor: 'dodgerblue',
      //   width: 100,
      //   height: 100,
      //   padding: 20,
      //   paddingHorizontal: 10, //left and right padding -> overides padding in previous line
      //   paddingLeft: 30, //overides padding horizongtal
      // }}
      // >
      //   <View style={{
      //     backgroundColor: 'gold',
      //     width: 50,
      //     height: 50,
      //   }}></View>
      // </View>
      // <View style={{
      //   backgroundColor: 'tomato',
      //   width: 100,
      //   height: 100,
      //   margin: 20,
      // }}></View>
      // </View >)

///////////TEXT AND FONT STYLING//////

    // List of system fonts on iOS and Android:
    // https://github.com/react-native-training/react-native-fonts

    // (
    //   <View
    //     style={{
    //       flex: 1,
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //     }}
    //   >

    //     <Text
    //       //React-Native styling does not have styling inheritrance
    //       style={{
    //         // fontFamily: 'Courier', //doesnt work on android and roboto doesn't work on iOS
    //         fontSize: 30,
    //         fontStyle: 'italic',
    //         fontWeight: '600', //has to be string
    //         color: 'tomato',
    //         textTransform: 'capitalize', //controls case
    //         textDecorationLine: 'underline', //line through and option too
    //         textAlign: 'center',
    //         lineHeight: 40,
    //       }}>I Love React Native!  This is my first React NAtive app.  Here is osme more text</Text>
    //   </View >
    // )

    ////////IMPLIMENTING STYLING INHERITANCE///
        ///CREATE CUSTOM COMPONENT AND IMPORT
        //   function AppText({ children }) {
        //     return (
        //         <Text style={styles.text}>{children}</Text>
        //     );
        // }

        // const styles = StyleSheet.create({
        //     text: {
        //         fontSize: 18,
        //         fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        //     }
        // })

        // export default AppText;

/////////////ICONS//////////////
    //https://icons.expo.fyi/