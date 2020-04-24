import metrics from './metrics';
import colors from './colors';
import fonts from './fonts';

const general = {
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: metrics.statusBarHeight + 20,
  },
  section: {
    margin: metrics.doubleBaseMargin,
  },
  sectionTitle: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: fonts.regular,
    alignSelf: 'center',
    marginBottom: metrics.doubleBaseMargin,
  },
};

export default general;