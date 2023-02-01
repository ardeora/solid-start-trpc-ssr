import { HttpStatus } from "../util/httpStatusCodes";
import { CustomException } from "./CustomException";

export class InternalServerError extends CustomException {
  constructor(msg: string) {
    super(msg, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
