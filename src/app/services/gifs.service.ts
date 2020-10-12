import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { GiphyResult, GifData, SearchReqeust } from '../components/gif/gif.interface';

import { Subject} from 'rxjs';
import { filter, distinct , tap, distinctUntilChanged } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GifsService {
  static readonly giphyUrl = 'https://api.giphy.com/v1/gifs/search';
  static readonly giphyApiKey = 'qe4t4mtQV7Hgqno9d22n8zaZQAdhtcac'; // putting this key here hurts my soul

  private readonly rating = 'G';
  private readonly lang = 'en';

  currentOffset = 0;
  currentSearchTerm = '';
  pageSize = 20;

  imageResult = [];

  searchResultsSubject = new Subject<Array<GifData>>();
  searchResults$ = new Observable<Array<GifData>>();

  searchRequest = new Subject<SearchReqeust>();
  resetSearch = new Subject<any>();

  constructor(private http: HttpClient) {
    this.searchResults$ = this.searchResultsSubject.asObservable();

    // The requests are being fed in as stream, right now i'm just filtering out any potential duplicate requests
    // but it could be used for other things such as throttling
    this.searchRequest.pipe(
      distinct(request => request.offset, this.resetSearch),
    ).subscribe((request) => {
      this.getSearchResults(request.searchTerm, request.offset, request.pageSize);
    });
  }

  private getSearchResults(searchTerm: string, offset: number, pageSize: number) {
    const params = {
      api_key: GifsService.giphyApiKey,
      q: searchTerm,
      limit: pageSize.toString(),
      offset: offset.toString(),
      rating: this.rating,
      lang: this.lang
    };

    this.http.get<GiphyResult>(GifsService.giphyUrl, { params }).subscribe((giphyResult) => {
      this.imageResult = this.imageResult.concat(giphyResult.data);
      this.currentOffset = giphyResult.pagination.offset + giphyResult.pagination.count;

      this.searchResultsSubject.next(this.imageResult);
    });
  }

  search(searchTerm: string) {
    this.currentSearchTerm = searchTerm;
    this.currentOffset = 0;

    this.imageResult = [];
    this.searchResultsSubject.next(this.imageResult);

    // this is just a flush observable for the distinct operator
    this.resetSearch.next(null);

    this.searchRequest.next({ searchTerm: this.currentSearchTerm, offset: this.currentOffset, pageSize: this.pageSize });
  }

  next() {
    this.searchRequest.next({ searchTerm: this.currentSearchTerm, offset: this.currentOffset, pageSize: this.pageSize });
  }

  setPageSize(size: number) {
    this.pageSize = size;
  }
}
