import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExamineDocsService } from '../../../../services/examine-docs.service';
import { ToastrService } from 'ngx-toastr';
import {
    MSG_CAMPO_REQUERIDO,
    MSG_NO_FOUND_DNI,
    MSG_RUC_INVALID,
    TITLE_ERROR,
    lengthDni,
    lengthOtrosDocumentos,
} from '../../../../constants';
import { TransformValueService } from '../../../../helpers/transform-value.service';
import { MatSelectChange } from '@angular/material/select';

@Component({
    selector: 'app-natural-person-form',
    templateUrl: './natural-person-form.component.html',
    styleUrl: './natural-person-form.component.scss',
})
export class NaturalPersonFormComponent {
    public myProfileForm!: FormGroup;
    public selectedDocument!: boolean;
    public lengthValueDoc: number = 0;
    public spinnerDni: boolean = false;
    public spinnerRuc: boolean = false;
    public haveRuc: boolean = false;

    constructor(
        private fb: FormBuilder,
        private readonly examineDocsService: ExamineDocsService,
        private toastrService: ToastrService,
        public readonly transformValueHelper: TransformValueService
    ) {
        this.iniciarFormulario();
    }

    public iniciarFormulario(): void {
        this.myProfileForm = this.fb.group({
            typeDocument: ['', [Validators.required]],
            nroDocument: [
                '',
                [Validators.required, Validators.minLength(lengthDni)],
            ],
            names: ['', [Validators.required, Validators.minLength(2)]],
            apellidoPaterno: [
                '',
                [Validators.required, Validators.minLength(2)],
            ],
            apellidoMaterno: [
                '',
                [Validators.required, Validators.minLength(2)],
            ],
            nroRuc: ['', [Validators.required]],
            razonSocial: ['', [Validators.required]],
        });
    }

    public consultarDni() {
        const dniValue: string =
            this.myProfileForm.controls['nroDocument'].value;

        if (!dniValue) {
            this.toastrService.error(MSG_CAMPO_REQUERIDO, TITLE_ERROR);
            return;
        }

        this.spinnerDni = true;

        this.examineDocsService.consultarDNI(dniValue).subscribe(
            (infoDni: any) => {
                this.myProfileForm.controls['names'].setValue(infoDni.nombres);
                this.myProfileForm.controls['apellidoPaterno'].setValue(
                    infoDni.apellidoPaterno
                );
                this.myProfileForm.controls['apellidoMaterno'].setValue(
                    infoDni.apellidoMaterno
                );
                this.spinnerDni = false;
            },
            error => {
                this.spinnerDni = false;
                this.toastrService.error(MSG_NO_FOUND_DNI, TITLE_ERROR);
            }
        );
    }

    public selectTypeDocument(event: MatSelectChange) {
        if (event.value != 1) {
            this.lengthValueDoc = lengthOtrosDocumentos;
            this.selectedDocument = false;
            this.resetForm();
            return;
        }

        this.resetForm();
        this.lengthValueDoc = lengthDni;
        this.selectedDocument = true;
    }

    private resetForm(): void {
        this.myProfileForm.controls['nroDocument'].reset();
        this.myProfileForm.controls['names'].reset();
        this.myProfileForm.controls['apellidoPaterno'].reset();
        this.myProfileForm.controls['apellidoMaterno'].reset();
    }

    public bloquearTeclado(): boolean {
        if (this.selectedDocument || this.selectedDocument === undefined) {
            return false;
        }

        return true;
    }

    get colorOptionIDontHaveRuc(): string {
        return this.haveRuc ? '' : 'primary';
    }

    get colorOptionIHaveRuc(): string {
        return this.haveRuc ? 'primary' : '';
    }

    public iDontHaveARuc(): void {
        if (this.myProfileForm.controls['nroRuc']) {
            this.myProfileForm.controls['nroRuc'].disable();
            this.myProfileForm.controls['razonSocial'].disable();
            this.myProfileForm.controls['nroRuc'].reset();
            this.myProfileForm.controls['razonSocial'].reset();
        }

        this.haveRuc = false;
    }

    public iHaveARuc(): void {
        if (this.myProfileForm.controls['nroRuc']) {
            this.myProfileForm.controls['nroRuc'].enable();
            this.myProfileForm.controls['razonSocial'].enable();
        }

        this.haveRuc = true;
    }

    public consultarRuc(): void {
        this.spinnerRuc = true;
        const valueRuc = this.myProfileForm.controls['nroRuc'].value;
        this.examineDocsService.consultarRUC(valueRuc).subscribe(
            (response: any) => {
                if (response.estado != 'ACTIVO') {
                    this.toastrService.error(MSG_RUC_INVALID, TITLE_ERROR);
                    this.spinnerRuc = false;
                    return;
                }

                this.myProfileForm.controls['razonSocial'].setValue(
                    response.razonSocial
                );
                this.spinnerRuc = false;
            },
            error => {
                throw error;
            }
        );
    }
}
