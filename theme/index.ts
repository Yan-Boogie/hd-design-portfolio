// theme/index.js
import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import styles from './styles'

// Foundational style overrides
import colors from './foundations/colors'

// Component style overrides
import IconButtonStyle from './components/iconButton';
import IconStyle from './components/icon';
import ShowreelWallPaperButtonStyle from './components/showreelWallPaperButton';
import TextStyle from './components/text';
import VideoContainerStyle from './components/videoPlayer';
import CardImageButtonStyle from './components/cardImageButton';
import MenuIconButtonStyle from './components/menuItemButton';

const overrides = {
  styles,
  colors,
  components: {
    IconButton: IconButtonStyle,
    IconUI: IconStyle,
    ShowreelWallPaperButton: ShowreelWallPaperButtonStyle,
    Text: TextStyle,
    VideoContainer: VideoContainerStyle,
    CardImageButton: CardImageButtonStyle,
    MenuIconButton: MenuIconButtonStyle,
  },
}

export default extendTheme(overrides)