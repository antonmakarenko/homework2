import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

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

function getRandomInt(max): number {
    return Math.floor(Math.random() * Math.floor(max));
}
