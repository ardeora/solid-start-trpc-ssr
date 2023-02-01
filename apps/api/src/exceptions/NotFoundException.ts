import { HttpStatus } from "../util/httpStatusCodes";
import { CustomException } from "./CustomException";

export class NotFoundException extends CustomException {
  constructor(msg: string) {
    super(msg, HttpStatus.NOT_FOUND);
  }
}
