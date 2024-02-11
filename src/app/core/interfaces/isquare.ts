import {INumber} from "./inumber";

export interface ISquare extends INumber {
    userValue?: number;
    hasError: boolean;
    systemNotes: Array<INumber>;
    userNotes: Array<INumber>;
    row: number;
    column: number;
}
