const moment = require('moment-timezone');

export class DataUtil {
    private static readonly timeZone = "America/Sao_Paulo";

    static formatDateByFormat(date: number, format: string) {
        if(date){
          const newDate = new Date(date * 1000)
          return moment(newDate).tz(DataUtil.timeZone).format(format);
        }
      }
}