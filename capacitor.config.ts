import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.tabsapp',
  appName: 'tabsapp',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
