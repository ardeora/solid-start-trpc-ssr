import { HttpStatus } from "../util/httpStatusCodes";
import { CustomException } from "./CustomException";

export class UnauthorizedException extends CustomException {
  constructor(msg: string) {
    super(msg, HttpStatus.UNAUTHORIZED);
  }
}
