import {ErrorHandler, Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class ErrorHandlerService implements ErrorHandler {

  constructor() { }


  handleError(error: any): void {
    switch (error.constructor) {
      case HttpErrorResponse: {
        console.error('There was an HTTP error.', error.message,
                      'Status code: ', (<HttpErrorResponse>error).status);
        break;
      }
      case TypeError: {
        console.error('There was a Type error.', error.message);
        break;
      }
      case Error: {
        console.error('There was a general error.', error.message);
        break;
      }
      default: {
        console.error('Nobody threw an Error but something happened!', error);
        break;
      }
    }
    throw error;
  }
}
