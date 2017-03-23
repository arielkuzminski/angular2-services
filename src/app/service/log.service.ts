export class LogService {
  writeToLog(logMessage: string) {
    if (logMessage) {
      console.log(logMessage);
    }
  }

}
