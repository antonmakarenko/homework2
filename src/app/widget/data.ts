import {of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {getRandomInt} from '../get-random-int.function';

export type Dest = {
    name: string,
    image: string
};

const data: Dest[] = [
    {
        name: 'Ireland',
        image: 'Ireland_090814CH184.jpg',
    },
    {
        name: 'New Zealand',
        image: 'lake-pukaki.jpg',
    },
    {
        name: 'Jamaica',
        image: 'jamaica.jpeg'
    }
];
export const data$ = of(data).pipe(delay(getRandomInt(3) * 1000));
