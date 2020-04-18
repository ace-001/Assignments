export class Movie
{
    mname:string;
    mrate:number;
    genre:string;
    public constructor(mname:string,mrate:number,genre:string)
    {
        this.mname = mname;
        this.mrate = mrate;
        this.genre = genre;
    }
}