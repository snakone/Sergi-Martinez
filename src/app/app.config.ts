// APP_CONFIG: Injection token to hold application-wide configuration properties that can be injected into other
// application elements such as components or services.

import { InjectionToken } from '@angular/core';

enum AppRoles {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export interface ModuleConfig {
  NAVIGATION?: any;
}

export interface AppConfig extends ModuleConfig {
  TITLE: string;
  DEFAULT_LANGUAGE: string;
  ROLES: any;
}

export const APP_CONSTANTS: AppConfig = {
  TITLE: 'Sergi Martínez',
  DEFAULT_LANGUAGE: 'es',
  NAVIGATION: {
    EMPTY: '',
    ROOT: '',
    LOGIN: '/login',
    HOME: '/home',
    INTRO: '/intro',
    UNAUTHORIZED_REDIRECT: '/intro',
    UNAUTHORIZED_GUEST_REDIRECT: '/intro',
    AUTH_ERROR_REDIRECTION: '/login'
  },
  ROLES: AppRoles
};

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');
