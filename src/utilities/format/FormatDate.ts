export namespace FormatDate {
    export type AllowedDelim = "/" | ":" | ''
}

/**
 * 日付の整形を行うUtilクラス
 */
export class FormatDate {

    /**
     * yyyy/MM/dd形式の日付文字列を返却する(デフォルトで現在日時を出力)
     * @param date 出力する日付を指定したい場合指定
     * @param dateDelim 出力する日付の区切り文字
     * @returns yyyy/MM/dd形式の日付文字列
     */
    public static getDate = (date: Date, dateDelim: FormatDate.AllowedDelim = "/"): string => {
        FormatDate.inspectionDateFormat(date);
        return (date.getFullYear()) + dateDelim + (FormatDate.toDoubleDigit(date.getMonth() + 1)) + dateDelim + (FormatDate.toDoubleDigit(date.getDate()))
    }

    /**
     * hh:mm:ss形式の時刻文字列を返却する(デフォルトで現在日時を出力)
     * @param time 出力する時間を指定したい場合指定
     * @param timeDelim 出力する時間の区切り文字
     * @returns 
     */
    public static getTime = (time: Date, timeDelim: FormatDate.AllowedDelim = ":"): string => {
        FormatDate.inspectionDateFormat(time);
        return FormatDate.toDoubleDigit(time.getHours()) + timeDelim +
            FormatDate.toDoubleDigit(time.getMinutes()) + timeDelim + FormatDate.toDoubleDigit(time.getSeconds()
    }


    /**
     * yyyy/MM/dd HH:mm:ss形式の日時文字列を返却する(デフォルトで現在日時を出力)
     * @param dateTime 出力する日時を指定したい場合指定
     * @param dateDelim 出力する日付の区切り文字
     * @param timeDelim 出力する時間の区切り文字
     * @returns  yyyy/MM/dd HH:mm:ss形式の日時文字列
     */
    public static getDateTime = (dateTime: Date, dateDelim?: FormatDate.AllowedDelim, timeDelim?: FormatDate.AllowedDelim): string => {
        FormatDate.inspectionDateFormat(dateTime);
        return FormatDate.getDate(dateTime, dateDelim) + " " + FormatDate.getTime(dateTime, timeDelim);
    }

    /**
     * 日時情報に設定する文字列の0埋めを実施する
     * @param src 変換元の日付の値
     * @returns 0埋めした日付の各要素
     */
    private static toDoubleDigit = (src: number | string): string => {
        const strDate = src.toString();
        return (strDate.length !== 2 ? ("0" + strDate) : strDate);
    }

    /**
     * Date型引数に不正な値が設定されていないか検証する
     * @param src 日付情報
     * @throws Error 不正な日付情報の際にThrow
     */
    private static inspectionDateFormat = (src: Date): void => {
        if (src.toString() === "Invalid Date") throw new Error("[ERROR] passed 'Invalid Date'.");
    }
}