import React from 'react';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';
import styles from './styles';

export default () => (
  <Placeholder
    style={styles.skeletonContainer}
    Animation={Fade}
    Left={() => (
      <PlaceholderMedia isRound size={80} style={styles.skeletonMedia} />
    )}
  >
    <PlaceholderLine width={80} style={styles.skeletonTitleContainer} />
    <PlaceholderLine width={30} />
    <PlaceholderLine width={90} />
  </Placeholder>
);
