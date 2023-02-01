import logger, { Logger } from "pino";

export enum LogLevel {
  SILENT = "silent",
  FATAL = "fatal",
  ERROR = "error",
  WARN = "warn",
  INFO = "info",
  DEBUG = "debug",
  TRACE = "trace",
}

export const createLogger = (dev: boolean, level: LogLevel): Logger => {
  if (dev) {
    return logger({
      transport: {
        target: "pino-pretty",
        options: {
          colorize: true,
          singleLine: true,
          ignore: "hostname,pid",
        },
      },
      timestamp: logger.stdTimeFunctions.isoTime,
      level,
    });
  }

  return logger({ level });
};
