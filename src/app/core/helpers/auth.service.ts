import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string;
  public token: string;
  public username:string;
  public usernameExists:boolean;
  public emailExists:boolean;
  private tokenTimer: any;

  // Assure l'envoie d'un paramètre aux autres components
  //Un Subject est à la fois un observable ET un observateur. 
  //On peut donc subscribe dessus, mais également lui envoyer des valeurs :
  private authStatusListener = new Subject<boolean>();
  private isUserAuthenticated = false;

  constructor(private http: HttpClient,private router: Router) {
    this.url=environment.NodeJSUrl;

  }

  signin(user:User){
    return this.http.post<{usernameExists:boolean,emailExists:boolean}>(this.url+'/api/auth/signup',user);
  }
  getToken() {
    return this.token;
  }

  getUsername(){
    return localStorage.getItem('username')
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  isUserAuth() {
    return this.isUserAuthenticated;
  }

  login(user:User) {
    this.http.post<{ accessToken: string , username:string,expiresIn: number  }>(this.url+'/api/auth/login', user).subscribe(
      res => {
        
        const token = res.accessToken;
        const username=res.username;
        this.username=username;
        this.token = token;
        if (token) {
          const expireInDuration = res.expiresIn;

          console.log(token);
          this.isUserAuthenticated = true;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expireInDuration * 1000);
          this.saveAuthData(token ,username,expirationDate);
          this.router.navigate(['/backoffice']);
        }
      }
    )
  }
  

  autoAuthUser() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');

    if (!token || !expirationDate ) {
      return;
    }
    const now = new Date();
    const expiresIn = new Date(expirationDate).getTime() - now.getTime();

    console.log("expiresIn", expiresIn);
    if (expiresIn) {
      this.token = token;
      this.isUserAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);

      this.authStatusListener.next(true);
    }
      
  }
 
  logout() {
    this.clearAuthData();
    this.isUserAuthenticated = false;
    this.authStatusListener.next(false);
    this.router.navigate(['/login']);    
  }
  private setAuthTimer(duration: number) {
    console.log('Set Timer', duration);

    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('expiration');
    localStorage.clear()


  }

  private saveAuthData(token: string, username:string,expirationDate: Date) {
    localStorage.setItem('token',  token);
    localStorage.setItem('username',  username);
    localStorage.setItem('expiration', expirationDate.toISOString());
  }

}
