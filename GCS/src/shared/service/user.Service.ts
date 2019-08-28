import { Injectable } from '@angular/core';
import {googlesearchservice } from './google.serarch.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  // tslint:disable-next-line: max-line-length
  private apiurl = 'https://www.googleapis.com/customsearch/v1?';
  // tslint:disable-next-line: max-line-length
  // private ApiUrl = 'https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json';
  constructor(private GoogleAPI: googlesearchservice) {}

  SearchResults(Queryparam: string) {
    return this.GoogleAPI.getResults(this.apiurl + Queryparam);
  }
}
