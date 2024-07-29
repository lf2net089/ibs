import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes'; // 正確引入路由配置

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(), // 提供動畫支援
    provideRouter(routes), // 提供路由
    provideHttpClient() // 提供 HTTP 客戶端
  ]
}).catch(err => console.error(err));
