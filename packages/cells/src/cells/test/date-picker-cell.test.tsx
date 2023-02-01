import { DateType, formatValueForHTMLInput } from "../date-picker-cell"

describe(("formatValueForHTMLInput"), () => {
    it.each([
        ["date", new Date("1970-01-01T00:00:00.100Z"), "1970-01-01"],
        ["datetime-local", new Date("1970-01-01T00:00:00.100Z"), "1970-01-01T00:00:00.100"],
        ["date", new Date("1970-01-01T00:00:00.100Z"), "00:00:00.100"],
    ])("check %p format and %p date leads correct format: {%p}", (format: string, date: Date, valueForHTML: string) => {
        expect(formatValueForHTMLInput(format as DateType, date)).toStrictEqual(valueForHTML)
    })
    it('throws an error when a weird value is passed', () => {
        expect(formatValueForHTMLInput("weird" as DateType, new Date())).toThrowError()
    })
})