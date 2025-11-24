import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
    palette: {
        primary: {
          main: '#007acc', // Custom primary color
        },
        secondary: {
          main: '#ff6f61', // Custom secondary color
        },
        customSliderTrack: {
          main: '#1fc916', // Custom track color for the Slider
        },
        customSliderThumb: {
          main: '#ffcc00', // Custom thumb color for the Slider
        },
      },
});

export default Theme;
