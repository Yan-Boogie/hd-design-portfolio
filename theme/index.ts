// theme/index.js
import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import styles from './styles'

// Foundational style overrides
import colors from './foundations/colors'

// Component style overrides


const overrides = {
  styles,
  colors,
  // Other foundational style overrides go here
  components: {},
}

export default extendTheme(overrides)