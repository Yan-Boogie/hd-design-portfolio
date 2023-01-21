// theme/index.js
import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import styles from './styles'

// Foundational style overrides
import colors from './foundations/colors'

// Component style overrides
import IconButton from './components/iconButton';
import Icon from './components/icon';
import ShowreelWallPaperButton from './components/showreelWallPaperButton';

const overrides = {
  styles,
  colors,
  // Other foundational style overrides go here
  components: {
    IconButton,
    Icon,
    ShowreelWallPaperButton,
  },
}

export default extendTheme(overrides)