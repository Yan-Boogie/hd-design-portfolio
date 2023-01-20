// theme/index.js
import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import styles from './styles'

// Foundational style overrides
import colors from './foundations/colors'

// Component style overrides
import IconButton from './components/iconButton';

const overrides = {
  styles,
  colors,
  // Other foundational style overrides go here
  components: {
    IconButton,
  },
}

export default extendTheme(overrides)