import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import { white } from '../../../styles/colors';
import ActionButton from '../../../common/action-button.component';
import AddLocationtStoreContext from '../contexts/add-location-store-context';

function CreatedLocation({ navigation }: any) {
  const { store } = useContext(AddLocationtStoreContext);
  const nfcTag = store.nfcTag;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Success!</Text>
      <LottieView
        source={require('../../../../assets/animations/check_mark_dark.json')}
        autoPlay
        style={styles.animation}
        loop={false}
      />
      <Text style={styles.text}>Your tag has been programmed!</Text>
      <ActionButton
        secondary
        style={styles.btn}
        onPress={() => navigation.replace('jobs')}
      >
        Exit
      </ActionButton>
      <ActionButton
        secondary
        style={styles.btn}
        onPress={() => {
          navigation.replace('LocationDetail', {
            nfcTag
          });
        }}
      >
        View tag info
      </ActionButton>
      <ActionButton
        style={styles.btn}
        onPress={() => navigation.replace('ScanTagScreen')}
      >
        Scan another tag
      </ActionButton>
    </View>
  );
}

export default CreatedLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  animation: {
    height: 200,
    marginTop: 8,
  },
  heading: {
    fontSize: 18,
    marginTop: 32,
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    fontSize: 16,
    color: 'black',
    marginTop: 35,
  },
  btn: {
    alignSelf: 'stretch',
    marginTop: 10,
  },
});
