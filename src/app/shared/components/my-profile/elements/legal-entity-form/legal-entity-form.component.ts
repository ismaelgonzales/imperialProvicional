import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransformValueService } from '../../../../helpers/transform-value.service';
import * as sharedConstants from '../../../../../shared/constants';
import { ExamineDocsService } from '../../../../services/examine-docs.service';
import { ToastrService } from 'ngx-toastr';
import {
    MSG_NO_APLICA,
    MSG_RUC_INVALID,
    TITLE_ERROR,
} from '../../../../../shared/constants';

@Component({
    selector: 'app-legal-entity-form',
    templateUrl: './legal-entity-form.component.html',
    styleUrl: './legal-entity-form.component.scss',
})
export class LegalEntityFormComponent {
    public myProfileForm!: FormGroup;
    public sharedConstants: typeof sharedConstants = sharedConstants;
    public spinnerRuc: boolean = false;

    constructor(
        private fb: FormBuilder,
        public transformValueHelper: TransformValueService,
        private examineDocsService: ExamineDocsService,
        private toastrService: ToastrService
    ) {
        this.inicializarFormulario();
    }

    private inicializarFormulario(): void {
        this.myProfileForm = this.fb.group({
            nroRuc: ['', [Validators.required]],
            razonSocial: ['', [Validators.required]],
            nombreComercial: ['', [Validators.required]],
            direccionFiscal: ['', [Validators.required]],
            ubicacion: ['', [Validators.required]],
        });
    }

    public consultarRuc(): void {
        this.spinnerRuc = true;
        const valueRuc = this.myProfileForm.controls['nroRuc'].value;
        this.examineDocsService.consultarRUC(valueRuc).subscribe(
            (response: any) => {
                console.log(response);
                this.handleRucResponse(response);
                this.spinnerRuc = false;
            },
            error => {
                this.spinnerRuc = false;
                throw error;
            }
        );
    }

    private handleRucResponse(response: any): void {
        if (response.estado !== 'ACTIVO') {
            this.toastrService.error(MSG_RUC_INVALID, TITLE_ERROR);
            return;
        }

        this.myProfileForm.controls['razonSocial'].setValue(
            response.razonSocial
        );

        this.myProfileForm.controls['nombreComercial'].setValue(
            response.nombreComercial ? response.nombreComercial : MSG_NO_APLICA
        );

        this.myProfileForm.controls['direccionFiscal'].setValue(
            response.direccion ? response.direccion : MSG_NO_APLICA
        );

        this.myProfileForm.controls['ubicacion'].setValue(
            response.departamento
                ? `${response.departamento} / ${response.provincia} / ${response.distrito}`
                : MSG_NO_APLICA
        );
    }
}
