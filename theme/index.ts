// theme/index.js
import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import styles from './styles'

// Foundational style overrides
import colors from './foundations/colors'

// Component style overrides
import IconButtonStyle from './components/iconButton';
import IconStyle from './components/icon';
import ShowreelWallPaperButton from './components/showreelWallPaperButton';
import TextStyle from './components/Text';

const overrides = {
  styles,
  colors,
  // Other foundational style overrides go here
  components: {
    IconButton: IconButtonStyle,
    IconUI: IconStyle,
    ShowreelWallPaperButton,
    Text: TextStyle,
  },
}

export default extendTheme(overrides)