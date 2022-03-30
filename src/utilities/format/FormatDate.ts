export namespace FormatDate {
    export type AllowedDelim = "/" | ":" | ''
}

export class FormatDate {
    private static toDoubleDigit = (date: number | string): string=> {
        let strDate = date.toString();

        if(strDate.length !== 2) {
            strDate = "0" + strDate;
        }
    
        return strDate;
    }

    /**
     * フォーマットされた時間を出力(デフォルトで現在時間を出力)
     * @param timeDelim 出力する時間の区切り文字
     * @param date 出力する時間を指定したい場合指定
     * @returns 
     */
    public static getTime = (date: Date, timeDelim: FormatDate.AllowedDelim = ":"): string => {
        let result: string = "";

        if(date.toString() === "Invalid Date") {
            throw new Error("[ERROR]passed 'Invalid Date'.");
        }
        
        // 時間(HH) + timeDelim + 分(MM) + timeDelim + 秒(SS)
        result = result + (FormatDate.toDoubleDigit(date.getHours())) + timeDelim
        result = result + (FormatDate.toDoubleDigit(date.getMinutes())) + timeDelim
        result = result + (FormatDate.toDoubleDigit(date.getSeconds()));

        return result
    }

    /**
     * フォーマットされた日付を出力(デフォルトで現在日付を出力)
     * @param dateDelim 出力する日付の区切り文字
     * @param date 出力する日付を指定したい場合指定
     * @returns 
     */
    public static getDate = (date: Date, dateDelim: FormatDate.AllowedDelim = "/"): string => {
        let result: string = "";

        if(date.toString() === "Invalid Date") {
            throw new Error("[ERROR]passed 'Invalid Date'.");
        }

        // 年(YYYY) + dateDelim + 月(mm) + dateDelim + 日付(dd)
        result = result + (date.getFullYear()) + dateDelim
        result = result + (FormatDate.toDoubleDigit(date.getMonth() + 1)) + dateDelim
        result = result + (FormatDate.toDoubleDigit(date.getDate()))
        
        return result

    }

    /**
     * フォーマットされた日時を出力(デフォルトで現在日時を出力)
     * @param dateDelim 出力する日付の区切り文字
     * @param timeDelim 出力する時間の区切り文字
     * @param date 出力する日時を指定したい場合指定
     * @returns 
     */
    public static getDateTime = (date: Date, dateDelim?: FormatDate.AllowedDelim, timeDelim?: FormatDate.AllowedDelim): string => {
        let result: string = "";

        result = result + FormatDate.getDate(date, dateDelim);
        // 日付と時間との間に空白を挿入
        result = result + " ";
        result = result + FormatDate.getTime(date, timeDelim);
        
        return result
    }
}