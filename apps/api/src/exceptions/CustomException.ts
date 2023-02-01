import { HttpStatus } from "../util/httpStatusCodes";

export class CustomException extends Error {
  constructor(msg: string, public readonly HTTP_STATUS_CODE: HttpStatus) {
    super(msg);
  }
}
