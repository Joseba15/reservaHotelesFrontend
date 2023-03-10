import { Hotel } from '../../hotel/interfaces/hotel.interface';
export interface Room{
    codRoom: number,
    rating: number,
    price: number,
    numBed: number,
    avaliable: boolean,
    img:string,
    codHotel: Hotel,
}
