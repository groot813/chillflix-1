import {TestBed} from '@angular/core/testing';

import {FilmService} from './film.service';
import {UsersService} from './users.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {FilmServiceSpecHelper} from './film.service.spec.helper';

describe('FilmService', () => {
	let filmService: FilmService;
	let httpTestingController: HttpTestingController;

	beforeEach(() => {
			TestBed.configureTestingModule({
				imports: [HttpClientTestingModule]
			});

			// Inject the http service and test controller for each test
			filmService = TestBed.get(FilmService);
			httpTestingController = TestBed.get(HttpTestingController);
		}
	);

	describe('filmDetailsById$',  () => {

		it('should do a get request to recieve film-details', () => {
			const imdbId = 'imdbId';
			// Make an HTTP GET request
			filmService.filmDetailsById$(imdbId).subscribe(response => expect(response).toEqual(FilmServiceSpecHelper.filmMock));

			const req = httpTestingController.expectOne(`api/movies/details/${imdbId}`);
			// Assert that the request is a POST.
			expect(req.request.method).toEqual('GET');
			// Respond with mock data, causing Observable to resolve.
			// Subscribe callback asserts that correct data was returned.
			req.flush(FilmServiceSpecHelper.filmMock);
			// Finally, assert that there are no outstanding requests.
			httpTestingController.verify();
		});

	})
});
