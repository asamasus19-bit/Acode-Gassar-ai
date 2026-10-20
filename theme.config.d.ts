export const themeColors: {
  primary: { light: string; dark: string };
  secondary: { light: string; dark: string };
  accent: { light: string; dark: string };
  background: { light: string; dark: string };
  surface: { light: string; dark: string };
  surfaceVariant: { light: string; dark: string };
  foreground: { light: string; dark: string };
  muted: { light: string; dark: string };
  border: { light: string; dark: string };
  success: { light: string; dark: string };
  warning: { light: string; dark: string };
  error: { light: string; dark: string };
  tint: { light: string; dark: string };
  gradient1: { light: string; dark: string };
  gradient2: { light: string; dark: string };
  userBubble: { light: string; dark: string };
  aiBubble: { light: string; dark: string };
  inputBg: { light: string; dark: string };
  sidebarBg: { light: string; dark: string };
  cardBg: { light: string; dark: string };
};

declare const themeConfig: {
  themeColors: typeof themeColors;
};

export default themeConfig;
