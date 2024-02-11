import {Component, HostListener, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Board} from "../../core/models/board.model";

@Component({
    selector: 'app-board',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './board.component.html',
    styleUrl: './board.component.scss'
})
export class BoardComponent implements OnInit {
    public board = new Board();
    public selectedCell: { row?: number, column?: number } = {row: undefined, column: undefined};

    ngOnInit(): void {
        console.log(this.board)
    }

    public onCellClick(rowIndex: number, colIndex: number) {
        this.selectedCell = {
            row: rowIndex,
            column: colIndex
        };
    }

    private moveSelectedCell(rowMovement: number, columnMovement: number): void {
        // If the board was clicked at least one time
        if (this.selectedCell.row !== undefined && this.selectedCell.column  !== undefined) {
            const newRowValue = this.selectedCell.row + rowMovement;
            const newColumnValue = this.selectedCell.column + columnMovement;
            this.selectedCell.row = newRowValue >= 0 ? newRowValue % 9 : 8;
            this.selectedCell.column = newColumnValue >= 0 ? newColumnValue % 9 : 8;
        }
    }

    private handleArrowPress(keyCode: string) {
        switch (keyCode) {
            case 'ArrowUp':
                this.moveSelectedCell(-1, 0);
                break;
            case 'ArrowDown':
                this.moveSelectedCell(1, 0);
                break;
            case 'ArrowRight':
                this.moveSelectedCell(0, 1);
                break;
            case 'ArrowLeft':
                this.moveSelectedCell(0, -1);
                break;
        }
    }

    private handleNumberPress(key: string) {
        if (this.selectedCell.row !== undefined && this.selectedCell.column !== undefined) {
            const numberPress = Number(key);
            if (!isNaN(numberPress)) {
                const row = this.board.row(this.selectedCell.row);
                row[this.selectedCell.column].userValue = numberPress;
            }
        }
    }

    @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {
        this.handleArrowPress(event.code);
        this.handleNumberPress(event.key);
    }
}
