import { ZodIssue } from "zod";
import { HttpStatus } from "../util/httpStatusCodes";
import { CustomException } from "./CustomException";

export class BadRequestException extends CustomException {
  constructor(message: string, public readonly validationIssues?: ZodIssue[]) {
    super(message, HttpStatus.BAD_REQUEST);
  }
}
