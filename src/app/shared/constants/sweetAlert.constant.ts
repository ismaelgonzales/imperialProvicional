import { SweetAlertOptions } from 'sweetalert2';
import {
    ICON_ALERTA,
    MSG_PERDER_DATOS_CANCELAR,
    TITLE_CONFIRMACION,
    TXT_ACEPTAR,
    TXT_CANCELAR,
    WARNING_COLOR,
} from './mensajes.constant';

export const CANCELAR_REGISTRO: SweetAlertOptions = {
    title: TITLE_CONFIRMACION,
    icon: ICON_ALERTA,
    text: MSG_PERDER_DATOS_CANCELAR,
    showCancelButton: true,
    cancelButtonColor: WARNING_COLOR,
    cancelButtonText: TXT_CANCELAR,
    confirmButtonText: TXT_ACEPTAR,
};
