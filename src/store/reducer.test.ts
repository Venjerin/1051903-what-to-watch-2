// import { configureStore, createAction } from '@reduxjs/toolkit';
// import { initialState, reducer } from './reducer';
// import {
//   changeFavoriteFilms,
//   changeGenre,
//   loadComments,
//   loadFavFilms,
//   loadFilms,
//   loadMoreLike,
//   loadPromoFilm,
//   loadSelectedFilm,
//   setAuthStatus,
//   setMovies,
//   setUserData,
// } from './action';

// describe(`Redusers's tests`, () => {
//   it('should return initial state with empty action', () => {
//     const emptyAction = createAction('emtyAction');
//     const store = configureStore({ reducer });

//     store.dispatch(emptyAction());
//     const curretState = store.getState();

//     expect(curretState).toEqual(initialState);
//   });
//   it('should handle changeGenre action', () => {
//     const action = changeGenre('newGenre');
//     const newState = reducer(initialState, action);
//     expect(newState.selectedGenre).toEqual('newGenre');
//   });
//   //----------------------------------------------------
//   it('should handle setMovies action', () => {
//     const action = setMovies(['movie1', 'movie2']);
//     const newState = reducer(initialState, action);
//     expect(newState.films).toEqual(['movie1', 'movie2']);
//   });
//   it('should handle loadPromoFilm action', () => {
//     const action = loadPromoFilm('promoFilmData');
//     const newState = reducer(initialState, action);
//     expect(newState.promoFilm).toEqual('promoFilmData');
//   });
//   it('should handle setAuthStatus action', () => {
//     const action = setAuthStatus('loggedIn');
//     const newState = reducer(initialState, action);
//     expect(newState.authorizationStatus).toEqual('loggedIn');
//   });
//   //----------------------------------------------------------
//   it('should handle changeGenre action', () => {
//     const action = changeGenre('newGenre');
//     const newState = reducer(initialState, action);
//     expect(newState.selectedGenre).toEqual('newGenre');
//   });
//   it('should handle setMovies action', () => {
//     const action = setMovies(['movie1', 'movie2']);
//     const newState = reducer(initialState, action);
//     expect(newState.films).toEqual(['movie1', 'movie2']);
//   });
//   it('should handle loadFilms action', () => {
//     const action = loadFilms(['film1', 'film2']);
//     const newState = reducer(initialState, action);
//     expect(newState.previewFilms).toEqual(['film1', 'film2']);
//   });
//   it('should handle loadPromoFilm action', () => {
//     const action = loadPromoFilm('promoFilmData');
//     const newState = reducer(initialState, action);
//     expect(newState.promoFilm).toEqual('promoFilmData');
//   });
//   it('should handle setAuthStatus action', () => {
//     const action = setAuthStatus('loggedIn');
//     const newState = reducer(initialState, action);
//     expect(newState.authorizationStatus).toEqual('loggedIn');
//   });
//   it('should handle loadSelectedFilm action', () => {
//     const action = loadSelectedFilm('selectedFilmData');
//     const newState = reducer(initialState, action);
//     expect(newState.selectedFilm).toEqual('selectedFilmData');
//   });
//   it('should handle changeFavoriteFilms action', () => {
//     const action = changeFavoriteFilms(['favoriteFilm1', 'favoriteFilm2']);
//     const newState = reducer(initialState, action);
//     expect(newState.favoriteFilms).toEqual(['favoriteFilm1', 'favoriteFilm2']);
//   });
//   it('should handle loadFavFilms action', () => {
//     const action = loadFavFilms(['favFilm1', 'favFilm2']);
//     const newState = reducer(initialState, action);
//     expect(newState.favoriteFilms).toEqual(['favFilm1', 'favFilm2']);
//   });
//   it('should handle loadMoreLike action', () => {
//     const action = loadMoreLike(['moreLike1', 'moreLike2']);
//     const newState = reducer(initialState, action);
//     expect(newState.moreLike).toEqual(['moreLike1', 'moreLike2']);
//   });
//   it('should handle loadComments action', () => {
//     const action = loadComments(['comment1', 'comment2']);
//     const newState = reducer(initialState, action);
//     expect(newState.comments).toEqual(['comment1', 'comment2']);
//   });
//   it('should handle setUserData action', () => {
//     const action = setUserData({
//       username: 'user123',
//       email: 'user123@example.com',
//     });
//     const newState = reducer(initialState, action);
//     expect(newState.user).toEqual({
//       username: 'user123',
//       email: 'user123@example.com',
//     });
//   });
// });
