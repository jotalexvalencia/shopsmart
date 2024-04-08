import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React , {memo} from 'react';


// React Navigation
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParametersList} from "../App";

import ProductItem from '../components/ProductItem';
import Separator from '../components/Separator';

// data
import { PRODUCTS_LIST } from '../data/constants';


type HomeProps = NativeStackScreenProps<RootStackParametersList, "Home">


const Home = ({navigation}: HomeProps) => {
  
  return (    
      <View style={styles.container}>
        <FlatList
          data={PRODUCTS_LIST}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={Separator}
          renderItem={({item}) => (
            <Pressable
              onPress={() =>{              
                navigation.navigate('Details', {
                  product: item
                })
              }}
            >
              <ProductItem product={item}/>
            </Pressable>
          )}
        />
      </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /* backgroundColor: '#FFFFFF',    
    padding: 12, */
    
    
  },
});

export default memo(Home);
