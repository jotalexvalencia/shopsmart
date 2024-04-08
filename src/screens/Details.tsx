import { Image, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React from 'react';

// React Navigation
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParametersList} from "../App";
import Animated, { SharedTransition, withSpring } from 'react-native-reanimated';
import withTiming from 'react-native-reanimated';

type DetailsProps = NativeStackScreenProps<RootStackParametersList, "Details">

const Details = ({route}: DetailsProps) => {
  const {product} = route.params;
  
   const customTransition = SharedTransition.custom((values) => {
  'worklet';
  return {
    height: withSpring(values.targetHeight),
    width: withSpring(values.targetWidth),
    originX: withSpring(values.targetOriginX),
    originY: withSpring(values.targetOriginY),
  };
}); 
 
  return (
    <ScrollView style={styles.container}>
      <View>
        <Animated.Image 
        sharedTransitionTag={product.name}    
         sharedTransitionStyle={customTransition}    
        style={styles.image}
        source={{uri: product.imageUrl }}  />
        <View>
            <Text style={styles.name}>{product.name}</Text>

            <View style={[styles.rowContainer, styles.ratingContainer]}>
                <View style={styles.rating}>
                    <Text style={styles.ratingText}>{product.rating} ⭐</Text>
                </View>
            <Text style={styles.ratingCount}>{product.ratingCount.toLocaleString()} </Text>
            </View>

            <View style={[styles.rowContainer, styles.priceContainer]}>
                 <Text style={styles.originalPrice}>
                    ₹{product.originalPrice.toLocaleString()}
                </Text>
                <Text style={styles.discountPrice}>
                    ₹{product.discountPrice.toLocaleString()}
                </Text>
                <Text style={styles.offerPercentage}>
                    %{product.offerPercentage} off
                </Text>
            </View>
            {product.tags.map((tag, index) => (
              <View key={index} style={styles.badge}>
                <Text style={styles.tagBadge}>{tag}</Text>
              </View>
            ))}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    backgroundColor: '#FFFFFF',
   
  },
  image: {
    width: 300,
    height: 450,
    resizeMode: 'stretch',
    alignItems:'center',
    justifyContent:'center'
  },
  rowContainer: {
    flexDirection: 'row',
  },
  name: {
    marginBottom: 4,

    fontSize: 20,
    fontWeight: '500',
  },
  ratingContainer: {
    marginVertical: 12,
  },
  priceContainer: {
    paddingVertical: 12,
    paddingHorizontal: 12,

    marginBottom: 12,

    borderRadius: 6,
    backgroundColor: '#deffeb',
  },
  rating: {
    marginRight: 4,

    borderRadius: 4,
    paddingHorizontal: 8,
    justifyContent: 'center',
    backgroundColor: '#25CCF7',
  },
  ratingText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  ratingCount: {
    fontSize: 14,
    color: '#878787',
  },
  originalPrice: {
    fontSize: 18,
    fontWeight: '600',
    marginRight: 8,

    color: 'rgba(0, 0, 0, 0.5)',
    textDecorationLine: 'line-through',
  },
  discountPrice: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '600',
  },
  offerPercentage: {
    fontSize: 17,
    fontWeight: '600',
    color: '#4bb550',

    marginRight: 8,
  },
  badge: {
    margin: 2,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor:'#25CCF7',
    borderRadius: 4
  },
  tagBadge: {
    paddingVertical: 2,
    paddingHorizontal: 4,

    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.5)',

    color: 'rgba(0, 0, 0, 0.8)',
  },
});

export default Details
