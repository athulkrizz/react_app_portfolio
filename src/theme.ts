import Aura from '@primeuix/themes/aura';

export const customTheme = {
    preset: Aura,
    options: {
        darkModeSelector: '[data-theme="dark"]',
        cssLayer: {
            name: 'primereact',
            order: 'tailwind-base, primereact, tailwind-utilities'
        }
    },
    semantic: {
        primary: {
            50: '#fefef5',
            100: '#fdfde8',
            200: '#fbfbcf',
            300: '#f7f7a8',
            400: '#f1f175',
            500: '#EBEB7B',  // Main accent yellow
            600: '#d4d45f',
            700: '#b8b84a',
            800: '#96963d',
            900: '#7a7a33',
            950: '#46461b'
        },
        colorScheme: {
            light: {
                primary: {
                    color: '#0B0B45',  // Navy blue for primary text
                    contrastColor: '#FDFDDF',  // Cream for contrast
                    hoverColor: '#08083a',
                    activeColor: '#060630'
                },
                surface: {
                    0: '#ffffff',
                    50: '#FDFDDF',  // Cream background
                    100: '#fafaeb',
                    200: '#f5f5d7',
                    300: '#f0f0c3',
                    400: '#ebebaf',
                    500: '#e6e69b',
                    600: '#d1d188',
                    700: '#bcbc75',
                    800: '#a7a762',
                    900: '#92924f',
                    950: '#7d7d3c'
                },
                text: {
                    color: '#0B0B45',  // Navy blue text
                    hoverColor: '#08083a',
                    mutedColor: '#4B4B0B',  // Olive green for secondary text
                    hoverMutedColor: '#3a3a08'
                }
            }
        }
    }
};
