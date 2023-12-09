export enum AppRoute {
    Main = '/',
    SignIn = '/login',
    MyList = '/mylist',
    Film = '/films/:id',
    AddReview = '/films/:id/review',
    Player = '/player/:id'
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

export enum APIRoute {
    Films = '/films',
    SelectFilm = '/films/:filmId',
    MoreLike ='/films/:filmId/similar',
    FilmComments = '/comments/:filmId',
    SignIn = '/login',
    SignOut = '/logout',
    Favorite = '/favorite',
}
