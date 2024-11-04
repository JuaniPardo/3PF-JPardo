import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../core/services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {User} from "../../../core/models/user";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss', '../../../shared/styles/form.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    hidePassword: boolean = true;
    returnUrl: string = '/';

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private authService: AuthService,
        private snackBar: MatSnackBar
    ) {
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    ngOnInit(): void {
        this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/dashboard';
    }

    onSubmit() {
        if (this.loginForm.invalid) {
            return;
        }

        const email: User['email'] = this.loginForm.get('email')?.value;
        const password: User['password'] = this.loginForm.get('password')?.value;

        this.authService.login(email, password).subscribe({
            next: (user) => {
                if (user) {
                    this.snackBar.open('Sesión iniciada con éxito', 'Cerrar', {
                        duration: 3000,
                    });
                    this.router.navigateByUrl(this.returnUrl).then();
                } else {
                    this.snackBar.open('Credenciales incorrectas', 'Cerrar', {
                        duration: 3000,
                    });
                }
            },
            error: (error) => {
                this.snackBar.open(`Error al iniciar sesión: ${error.message}`, 'Cerrar', {
                    duration: 3000,
                });
            }
        });
    }
}
