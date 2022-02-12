import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import Swiper from "react-native-swiper";
let { width } = Dimensions.get("window");

export default function Banner() {
  const [bannerData, setBannerData] = useState([]);
  useEffect(() => {
    setBannerData([
      "https://cdn.pixabay.com/photo/2014/09/07/22/34/car-race-438467_960_720.jpg",
      "https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_960_720.jpg",
      "https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg",
    ]);
    return () => {
      setBannerData([]);
    };
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper
            style={{ height: width / 2 }}
            showsButtons={false}
            autoplay={true}
            autoplayTimeout={2}
          >
            {bannerData.map((item, index) => {
              return (
                <Image
                  key={index}
                  style={styles.imageBanner}
                  resizeMode="contain"
                  source={{ uri: item }}
                />
              );
            })}
          </Swiper>
          <View style={{ height: 20 }}></View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
  },
  swiper: {
    width: width,
    alignItems: "center",
    marginTop: 10,
  },
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});
