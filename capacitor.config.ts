
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.6cff0f227abd496c907d938a12a20682',
  appName: 'yanolja-clone-masterpiece',
  webDir: 'dist',
  server: {
    url: 'https://6cff0f22-7abd-496c-907d-938a12a20682.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#FF385C',
      showSpinner: false
    },
    StatusBar: {
      style: 'light',
      backgroundColor: '#FF385C'
    }
  }
};

export default config;
