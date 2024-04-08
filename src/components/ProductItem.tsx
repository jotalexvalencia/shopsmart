import { Image, StyleSheet, Text, View } from 'react-native';
import React, { PropsWithChildren, memo } from 'react';
import Animated, { SharedTransition, withSpring } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

type ProductItemProps = PropsWithChildren<{
  product: Product;  
}>

const ProductItem = ({product}: ProductItemProps) => {    
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
    <View>
      <View style={styles.container}>
          <View style={styles.content}>
            <View>
              <Text style={styles.name}>{product.name}</Text>
                <Animated.Image 
                sharedTransitionTag={product.name}   
                sharedTransitionStyle={customTransition}             
                source={{ uri: product.imageUrl  }}
                style={styles.image}
                />   
                <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>{product.rating} ⭐</Text>
                </View>
              <Text style={styles.ratingCount}>{product.ratingCount.toLocaleString()} </Text>
              <Text style={styles.originalPrice}>
                  ₹{product.originalPrice.toLocaleString()}
              </Text>
              <Text style={styles.discountPrice}>
                  ₹{product.discountPrice.toLocaleString()}
              </Text>
              <View style={styles.offerContainer}>
                <Text style={styles.offerPercentage}>
                    %{product.offerPercentage} off
                </Text>
             </View>
            </View>             
          </View>   
                     
      </View>   
    </View>   
  )
}


const styles = StyleSheet.create({
  container:{
    paddingVertical: 2,
    paddingHorizontal: 2,
    margin: 8,
    marginBottom: 4,    
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems:'flex-end',
    justifyContent:'center',
    marginBottom: 3,
    backgroundColor: '#DAE0E2',
    padding: 10,
    borderRadius: 5,
    borderColor: '#AE1438',
    borderStyle:'solid',
  }, 
  image: {
    width: 100,
    height: 160,    
    alignSelf: 'stretch',   
    resizeMode:'stretch',
    padding: 5,
    borderRadius:2,   
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#192A56',   
  },
  ratingContainer: {
    width:50,
    height:50,
    backgroundColor: '#25CCF7',
    borderRadius:50/2,
    alignItems:'baseline',
    justifyContent:'center'
  },
  priceContainer: {
    marginBottom: 12,
  }, 
  ratingText: {
    color: '#333945',
    fontSize: 15,
    fontWeight: '600',
    },
    ratingCount: {
      color: '#192A56',
      fontWeight:'600'
    },
    originalPrice: {
      fontSize: 18,
      marginRight: 4,
      fontWeight: '600',  
      color: 'rgba(0, 0, 0, 0.5)',
      textDecorationLine: 'line-through',
    },
    discountPrice: {
      fontSize: 18,
      marginRight: 4,
      fontWeight: '600',  
      color: '#000000',
    },
    offerContainer:{
    width:'auto',
    height:'auto',
    backgroundColor: '#25CCF7',
    borderRadius:5,
    alignItems:'baseline',
    justifyContent:'center'
    },
    offerPercentage: {
      fontSize: 17,
      fontWeight: '600',
      color: '#192A56',
    },
  })
  
  export default memo(ProductItem);