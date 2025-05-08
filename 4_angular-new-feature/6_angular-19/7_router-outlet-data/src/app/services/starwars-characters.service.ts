import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, forkJoin, map, of } from 'rxjs';
import { FighterList } from '../interfaces/fighter-list.interface';
import { RawStarWarsCharacter, StarWarsCharacterNature } from '../interfaces/start-war.interface';

@Injectable({
  providedIn: 'root'
})
export class StarWarsCharactersService {
  #httpClient = inject(HttpClient);

  retrieveCharacter(id: number, isSith: boolean) {
    return this.#httpClient.get<RawStarWarsCharacter>(`https://swapi.py4e.com/api/people/${id}`)
      .pipe(
        map((fromCharacter) => this.toStarWarsCharacterMapper(id, isSith, fromCharacter)),
        catchError((e) => {
          console.error(e);
          return of(undefined)
        })
      )
  }

  retrieveCharacters({ ids, isSith }: FighterList) {
    const starWarsCharacters$ = ids.map((id) => 
      this.retrieveCharacter(id, isSith)
    ) 
      
    return forkJoin(starWarsCharacters$)
      .pipe(
        map((characters) => {
            return characters.filter((c) => typeof c !== 'undefined')
        })  
      );
  }

  private toStarWarsCharacterMapper(id: number, isSith: boolean, fromData: RawStarWarsCharacter) {
    return {
      id,
      isSith,
      gender: fromData.gender,
      eyeColor: fromData.eye_color,
      hairColor: fromData.hair_color,
      skinColor: fromData.skin_color,
      name: fromData.name,
      films: fromData.films,
    } as StarWarsCharacterNature
  }
  
}
