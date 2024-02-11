import {ISquare} from "../interfaces/isquare";
import {INumber} from "../interfaces/inumber";

export class Board {
    public get matrix(): Array<Array<ISquare>> { return this._matrix };

    constructor() {
        this._matrix = new Array<ISquare[]>(9);
        for (let i = 0; i < 9; i++) {
            this._matrix[i] = [... new Array<ISquare>(9)].map((x, index) => {
                const squareValue = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
                return <ISquare>{
                    userValue: undefined,
                    value: squareValue,
                    hasError: false,
                    systemNotes: [... new Array<INumber>(9)].map((x, i) => {
                        return {
                            value: i + 1,
                            visible: squareValue !== i + 1
                        }
                    }),
                    userNotes: new Array<INumber>(),
                    row: i,
                    column: index,
                    visible: Math.random() > 0.5,
                }
            });
        }
    }

    public row(rowIndex: number): Array<ISquare> { return this._matrix[rowIndex]; }
    public column(columnIndex: number): Array<ISquare> { return this._matrix.map(row => row[columnIndex]); }

    private _matrix: Array<Array<ISquare>>;
}
