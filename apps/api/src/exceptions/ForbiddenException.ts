import { HttpStatus } from "../util/httpStatusCodes";
import { CustomException } from "./CustomException";

export class ForbiddenException extends CustomException {
  constructor(msg: string) {
    super(msg, HttpStatus.FORBIDDEN);
  }
}
