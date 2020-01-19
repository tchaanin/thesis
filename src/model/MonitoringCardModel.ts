
export default class MonitoringCardModel {
    firstLineFirstText: String;
    firstLineSecondText: String;
    value: String;
    lastLineText: any;

    constructor(firstLineFirstText: String, firstLineSecondText: String, value: String, lastLineText: String) {
        this.firstLineFirstText = firstLineFirstText;
        this.firstLineSecondText = firstLineSecondText;
        this.value = value;
        this.lastLineText = lastLineText;
    }

}
