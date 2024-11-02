import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../core/services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss', '../../../shared/styles/form.scss']
})
export class LoginComponent {
    loginForm: FormGroup;
    errorMessage: string | null = null;
    hidePassword: boolean = true;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private authService: AuthService,
        private snackBar: MatSnackBar
    ) {
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    onSubmit() {
        if (this.loginForm.invalid) {
            return;
        }

        const email = this.loginForm.get('email')?.value;
        const password = this.loginForm.get('password')?.value;
        this.authService.login(email, password).subscribe({
            next: (user) => {
                if (user) {
                    this.snackBar.open('Sesión iniciada con éxito', 'Cerrar', {
                        duration: 3000,
                    });
                    this.router.navigate(['/students']).then();
                } else {
                    this.snackBar.open('Credenciales incorrectas', 'Cerrar', {
                        duration: 3000,
                    });
                }
            },
            error: (error) => {
                this.snackBar.open('Error al iniciar sesión', 'Cerrar', {
                    duration: 3000,
                });
            }
        });
    }
}
