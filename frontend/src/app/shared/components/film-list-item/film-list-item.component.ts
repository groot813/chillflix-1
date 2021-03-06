import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Film} from '../../../models/film';

@Component({
	selector: 'app-film-list-item',
	templateUrl: './film-list-item.component.html',
	styleUrls: ['./film-list-item.component.scss']
})
export class FilmListItemComponent implements OnInit {
	@Input() public film?: Film = undefined;
	@Output() public onAddToBucket = new EventEmitter<Film>();

	constructor() {
	}

	ngOnInit() {
	}

	public handleAddToBucketClick() {
		this.onAddToBucket.emit(this.film);
	}

}
