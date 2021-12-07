import layout1Settings from './Layout/Layout1Settings'
import { themes } from '../Theme/initThemes'

export const LayoutSettings = {
    activeLayout: 'layout1', // layout1, layout2
    activeTheme: 'blue', // View all valid theme colors inside MUI themeColors.js
    perfectScrollbar: false,

    themes: themes,
    layout1Settings, // open Layout1/Layout1Settings.js

    secondarySidebar: {
        show: true,
        open: false,
        theme: 'slateDark1', // View all valid theme colors inside MUI themeColors.js
    },
    // Footer options
    footer: {
        show: true,
        fixed: false,
        theme: 'slateDark1', // View all valid theme colors inside MUI themeColors.js
    },
}
