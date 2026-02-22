import React from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const GRID_IMAGES = [
  require('../../assets/images/grid1.png'),
  require('../../assets/images/grid2.png'),
  require('../../assets/images/grid3.png'),
  require('../../assets/images/grid4.png'),
  require('../../assets/images/grid5.png'),
  require('../../assets/images/grid6.png'),
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerBar} />

      <ScrollView contentContainerStyle={styles.scrollContent}>

        <View style={styles.profileSection}>
          <Image
            source={require('../../assets/images/profile.png')}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Makoto Niijima</Text>
        </View>

        <View style={styles.tabSection}>
          <TouchableOpacity
            style={[styles.tabButton, styles.tabButtonLeft]}
            onPress={() => Alert.alert('Tab', 'Button 1 pressed')}
            activeOpacity={0.8}
          >
            <Text style={styles.tabButtonText}>Button 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, styles.tabButtonRight]}
            onPress={() => Alert.alert('Tab', 'Button 2 pressed')}
            activeOpacity={0.8}
          >
            <Text style={styles.tabButtonText}>Button 2</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        <View style={styles.gridContainer}>
          {GRID_IMAGES.map((src, index) => (
            <View key={index} style={styles.gridCell}>
              <Image source={src} style={styles.gridImage} resizeMode="cover" />
            </View>
          ))}
        </View>

      </ScrollView>

      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => Alert.alert('Bottom', 'Bottom button pressed')}
          activeOpacity={0.8}
        >
          <Text style={styles.bottomButtonText}>Bottom Button</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  headerBar: {
    height: 8,
    backgroundColor: '#3ECFBF',
  },

  scrollContent: {
    paddingBottom: 16,
  },

  profileSection: {
    alignItems: 'center',
    paddingVertical: 28,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 8,
    backgroundColor: '#FFA500',
  },
  profileName: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    letterSpacing: 0.4,
  },

  tabSection: {
    flexDirection: 'row',
    marginHorizontal: 16,
    height: 48,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabButtonLeft: {
    backgroundColor: '#7B3FE4',
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  tabButtonRight: {
    backgroundColor: '#4A90D9',
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
  tabButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  divider: {
    height: 6,
    backgroundColor: '#3ECFBF',
    marginTop: 8,
    marginBottom: 16,
  },

  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  gridCell: {
    width: '31%',
    aspectRatio: 1,
    marginBottom: 12,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#FFA500',
  },
  gridImage: {
    width: '100%',
    height: '100%',
  },

  bottomSection: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  bottomButton: {
    backgroundColor: '#4A90D9',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButtonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
});