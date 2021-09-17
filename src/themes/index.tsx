import tokens from '@shopify/polaris-tokens';
import { createTheme } from '@shopify/restyle';
import { pxToNum } from 'utils/dimension';

// https://github.com/Shopify/polaris-react/blob/main/documentation/Color%20system.md
// https://shopify.github.io/polaris-tokens/

export const spacingSize = {
  none: tokens.spacingNone,
  xxs: pxToNum(tokens.spacingExtraTight),
  xs: pxToNum(tokens.spacingTight),
  s: pxToNum(tokens.spacingBaseTight),
  m: pxToNum(tokens.spacingBase),
  l: pxToNum(tokens.spacingLoose),
  xl: pxToNum(tokens.spacingExtraLoose),
  xxl: 2 * pxToNum(tokens.spacingExtraLoose),
};

const lightTheme = createTheme({
  spacing: spacingSize,
  colors: {
    body: tokens.colorBlack,
    bgRegular: tokens.colorWhite,
    bgSubdued: tokens.colorSkyLighter,
    // --- fg is foreground color -------
    fgRegular: tokens.colorBlack,
    fgOff: tokens.colorInkLight,
    fgSubdued: tokens.colorInkLightest,
    fgContrasting: tokens.colorWhite,
    fgSuccess: tokens.colorGreenDark,

    // --- hl is hight light color -------
    hlPrimary: tokens.colorIndigo,
    hlPrimaryDisabled: tokens.colorIndigoLight,

    buttonBgPlain: tokens.colorSky,
    errorPrimary: tokens.colorRed,
    iconBgDark: tokens.colorBlueDarker,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  borderRadii: {
    s: pxToNum(tokens.spacingBaseTight),
    m: pxToNum(tokens.spacingBase),
    l: pxToNum(tokens.spacingLoose),
    xl: pxToNum(tokens.spacingExtraLoose),
  },
  cardVariants: {
    regular: {
      padding: {
        phone: 's',
        tablet: 'm',
      },
    },
    elevated: {
      padding: {
        phone: 's',
        tablet: 'm',
      },
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 15,
      elevation: 5,
    },
  },
  textVariants: {
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: 'fgSubdued',
    },
    header: {
      fontWeight: 'bold',
      fontSize: 34,
      lineHeight: 42.5,
      color: 'fgSubdued',
    },
    subheader: {
      fontWeight: '600',
      fontSize: 28,
      lineHeight: 36,
      color: 'fgSubdued',
    },
  },
});

export type AppTheme = typeof lightTheme;

const darkTheme: AppTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    //add dark mode color here
  },
};

export { darkTheme, lightTheme };
