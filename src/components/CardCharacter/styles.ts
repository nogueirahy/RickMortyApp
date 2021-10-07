import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#7cbc6c',
    backgroundColor: '#c1f762',
  },
  containerImage: {
    height: 84,
    width: 84,
    overflow: 'hidden',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#7cbc6c',
  },
  image: {
    height: 84,
    width: 84,
  },
  containerTitle: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontFamily: 'Overpass-Regular',
    fontSize: 16,
    color: '#595959',
  },
  titleDivider: {
    height: 1,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: '#7cbc6c',
  },
  description: {
    fontFamily: 'Overpass-Bold',
    fontSize: 16,
    color: '#314e1c',
  },
});
