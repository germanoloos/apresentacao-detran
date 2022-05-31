import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IFormBuilder, IFormGroup } from '@rxweb/types';
import { DialogService } from 'src/app/core/services/dialog.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: IFormGroup<LoginInterface>;
  loading = false;

  constructor(
    fb: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private dialogService: DialogService,
    private storageService: StorageService
  ) {
    this.loginForm = (fb as IFormBuilder).group<LoginInterface>({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.loginService.login(this.loginForm.value).subscribe({
      next: (resp: any) => {
        console.log(resp);
        this.storageService.setItem('token', resp.token);
        this.router.navigate(['']);
        this.loading = false;
      },
      error: (error: any) => {
        console.error(error);
        this.dialogService.alert(error.error.message)
        this.loading = false;
      }
    })
  }
}


export interface LoginInterface {
  email: string;
  password: string;
}