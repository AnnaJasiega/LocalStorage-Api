import { Car } from '../car/car';

export const CarsList: Car[] = [
    new Car('DW 3489G', 'Anna Jasięga', 'dacia', true, [{name: 'sprzęgło', price: '30'}, {name: 'silnik', price: '50'}]),
    new Car('DW 3148G', 'Jan Kowalski', 'ford', false, [{name: 'rozrusznik', price: '80'}, {name: 'podwozie', price: '200'}]),
    new Car('DW 7818G', 'Maria Stępień', 'subaru', true, [{name: 'lusterko', price: '80'}, {name: 'wymiana opon', price: '200'}]),
    new Car('DW 29837', 'Anna Jasięga', 'dacia', true, [{name: 'lusterko', price: '80'}, {name: 'wymiana opon', price: '200'}]),
    new Car('DW 23112', 'Jan Kowalski', 'ford', false, [{name: 'rozrusznik', price: '80'}, {name: 'podwozie', price: '200'}]),
    new Car('DW 355DD', 'Maria Stępień', 'subaru', true, [{name: 'lusterko', price: '80'}, {name: 'wymiana opon', price: '200'}]),
];