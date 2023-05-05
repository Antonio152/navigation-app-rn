import {StyleSheet} from 'react-native';

/* MenuLateral Basic */
export const stylesMC = StyleSheet.create({
  noShadowM: {
    borderTopWidth: 0,
    elevation: 0,
  },
  globalBackgroundC: {
    backgroundColor: '#0A4D68',
  },
  backColorM: {
    backgroundColor: '#0A4D68',
    elevation: 0,
    shadowColor: 'transparent', //This propiety is for ios and remove the line header
  },
  menuLMV: {
    marginVertical: 15,
  },
  buttonBLM: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textBLM: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 7,
  },
});

export const stylesTabs = StyleSheet.create({
  iosSceneContainer: {
    backgroundColor: '#fff',
    elevation: 0,
    borderTopWidth: 0,
    borderTopColor: '#fff',
  },
  iosTabBar: {
    borderTopColor: '#fff',
    borderTopWidth: 0,
    elevation: 0,
  },
});

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  mButtons: {
    marginVertical: 5,
  },
  buttonBurguer: {
    borderRadius: 100,
    marginHorizontal: 15,
  },
  btnUserInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  titlePage: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 15,
    textAlign: 'center',
  },
  contentPage: {
    fontSize: 20,
    color: '#fff',
  },
  bigButton: {
    flexDirection: 'row',
    right: 0,
    height: 50,
    backgroundColor: '#088395',
    marginVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
  },
  textButtons: {
    flex: 1,
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
  },
  textContainerNuser: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    marginHorizontal: 10,
  },
  avatarContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  avatarNavigation: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuContainer: {
    flex: 1,
    marginHorizontal: 30,
    marginVertical: 5,
  },
  textMenu: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuBtn: {
    marginVertical: 15,
  },
  textSettings: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginVertical: 15,
  },
});
