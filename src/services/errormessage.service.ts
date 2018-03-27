import { Injectable } from "@angular/core";

@Injectable()
export class ErrorMessageService {
    onErrorMessageHandler(error?: Error): Error|void {
        console.error(`Erro para recuperar informações: ${error}`);
    }
}