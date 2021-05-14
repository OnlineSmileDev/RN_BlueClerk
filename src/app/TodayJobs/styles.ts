import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    marginLeft: 25,
    flex: 8,
  },
  title: {
    fontSize: 14,
    fontFamily: 'SlateForOnePlus-Regular',
  },
  name: {
    marginVertical: 5,
    fontSize: 14,
    fontFamily: 'SlateForOnePlus-Regular',
  },
  date: {
    marginTop: 3,
    fontSize: 12,
    color: 'gray',
    fontFamily: 'SlateForOnePlus-Regular',
  },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    elevation: 3,
  },
  jobIcon: {
    color: 'black',
    fontSize: 30,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusText: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'SlateForOnePlus-Regular',
    textTransform: 'uppercase',
  },
  pending: {
    color: 'red',
  },
  finished: {
    color: 'green',
  },
  started: {
    color: '#00bfff',
  },
  cancelled: {
    color: '#d1ad1b',
  },
  listHeader: {
    marginVertical: 20,
    marginStart: 20,
  },
  listTitle: {
    color: 'black',
    fontFamily: 'SlateForOnePlus-Regular',
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllWrapper: {
    borderRadius: 5,
    borderColor: '#149CE6',
    borderWidth: 1,
    backgroundColor: '#EAF7FF',
    paddingVertical: 5,
    width: width / 3,
    marginVertical: 25,
    alignSelf: 'center',
  },
  seeAllText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#149CE6',
  },
  alertView: {
    backgroundColor: 'white',
    width: '85%',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  alertTxt: {
    color: 'black',
    fontSize: 16,
    
  },
  detailBtn: {
    textAlign: 'center',
    color: '#149CE6',
    fontSize: 16,
    marginTop: 10,
  },
  mapContainerView: {
    backgroundColor: 'white',
    position: 'absolute',
    top: Platform.OS == 'ios'? height * 0.1 + 100 : height * 0.1 + 50,
    left: '10%',
    width: '80%',
    height: height / 3 + 10,
    padding: 15,
  },
  mapView: {
    width: '100%',
    height: height / 3 - 20,
  },
  actionModalContainerView: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    width: '100%',
    padding: 0,
    margin: 0,
  },
  actionView: {
    backgroundColor: 'white',
    width: '100%',
    paddingVertical: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  chooseTitle: {
    color: '#989898',
    paddingVertical: 8,
    fontSize: 14,
  },
  actionItemView: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderColor: '#e4e4e4',
  },
  actionItemLbl: {
    color: '#41A1EF',
    fontSize: 17,
  },
});

export default styles;
