import * as React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function ShopIndex({ navigation }) {
  const goodsList = [
    {
      id: '1',
      name: 'ios1',
      price: 120,
      img: require("./assets/ios1.jpg")
    },
    {
      id: '2',
      name: 'ios2',
      price: 320,
      img: require("./assets/ios2.jpg")
    },
    {
      id: '3',
      name: 'ios3',
      price: 240,
      img: require("./assets/ios3.jpg")
    },
    {
      id: '4',
      name: 'ios4',
      price: 80,
      img: require("./assets/ios4.jpg")
    },
    {
      id: '5',
      name: 'huawei1',
      price: 520,
      img: require("./assets/huawei1.jpg")
    },
    {
      id: '6',
      name: 'huawei2',
      price: 620,
      img: require("./assets/huawei2.jpg")
    },

  ];


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        data={goodsList}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => {
              navigation.navigate('GoodsDetail', item)
            }} style={{
              backgroundColor: '#FFF',
              padding: 5,
              marginVertical: 8,
              marginHorizontal: 16,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10
            }}>
              <Image source={item.img} resizeMode="contain" style={{
                width: 100,
                height: 100,
              }}></Image>
              <View style={{
                width: 120,
              }}>
                <Text style={{
                  fontSize: 14,
                  marginBottom: 10
                }}>{item.name}</Text>

                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <Text style={{
                    color: 'red'
                  }}>${item.price}</Text>
                  <View style={{
                    paddingTop: 3,
                    paddingBottom: 3,
                    paddingLeft: 10,
                    paddingRight: 10,
                    backgroundColor: 'red',
                    borderRadius: 5,
                    color: '#FFF',
                    fontSize: 12,

                  }}>
                    hot
                  </View>
                </View>

              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id}
      />

    </View>
  );
}

function GoodsDetail({ route, navigation }) {
  const { name, img, price } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
      <Image source={img} resizeMode="stretch" style={{
        width: '100%',
        height: 300,
      }}></Image>

      <Text style={{
        fontSize: 30,
        fontWeight: 'bold'
      }}>
        {name}
      </Text>

      <View style={{
        width: '100%',
      }}>
        <Button title={price + '$ ' + 'BUY'}></Button>
      </View>

    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ShopIndex" component={ShopIndex} />
        <Stack.Screen name="GoodsDetail" component={GoodsDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;