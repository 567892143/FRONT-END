
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';  // ✅ New way to use HttpClient
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()]  // ✅ Use this instead of HttpClientModule
}).catch(err => console.error(err));
