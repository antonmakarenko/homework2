import {of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {getRandomInt} from '../get-random.function';
import {IGeoId} from './geo-id.interface';

export interface IDest {
    name: string;
    image: string;
    title: string;
    activities: IActivity[];
}

export interface IActivity extends IGeoId {
    title: string;
    description: string[];
    contactInfo: string;
    images: string[];
}

export interface ISelectedActivity {
    activity: IActivity;
    numPeople: number;
}

const data: IDest[] = [
    {
        name: 'Ireland',
        image: 'Ireland_090814CH184.jpg',
        title: 'Centuries of ancient stories',
        activities: [
            {
                geoId: 11,
                title: 'Dublin',
                description: [
                    'Surprising by nature.',
                    'Epic adventures and all that can happen in between – Dublin is the ultimate city experience.',
                ],
                contactInfo: '+353(0)11111111',
                images: ['dublin01.jpg', 'dublin02.jpg']
            },
            {
                geoId: 12,
                title: 'Northern Ireland',
                description: [
                    'Get ready for an adventure.',
                    'Welcome to a land of fantastical landscapes, warm welcomes, dramatic history and enduring legend',
                ],
                contactInfo: '+353(0)11111111',
                images: ['n_ireland01.jpg', 'n_ireland02.jpg']
            },
            {
                geoId: 13,
                title: 'Ireland\'s ancient east',
                description: [
                    'Centuries of ancient stories.',
                    'Ireland makes sure you remain in the present while soaking up its past.',
                ],
                contactInfo: '+353(0)11111111',
                images: ['e_ireland01.jpg', 'e_ireland02.jpg']
            }
        ],
    },
    {
        name: 'New Zealand',
        image: 'lake-pukaki.jpg',
        title: 'Wake up in paradise',
        activities: [
            {
                geoId: 21,
                title: 'Matamata',
                description: [
                    'Matamata is a must see if you\'re a Lord of the Rings and Hobbit fan.',
                    'Take a guided tour of the Hobbiton Movie Set™ and enjoy the town\'s fabulous cafes.',
                ],
                contactInfo: '+64 1 123 0456',
                images: ['matamata01.jpg', 'matamata02.jpg']
            },
            {
                geoId: 22,
                title: 'Rotorua',
                description: [
                    'Rotorua is known for bubbling mud pools, shooting geysers and natural hot springs.',
                    'As well as showcasing our fascinating Maori culture.'
                ],
                contactInfo: '+64 1 123 0456',
                images: ['rotorua01.jpg', 'rotorua02.jpg']
            },
            {
                geoId: 23,
                title: 'South Island',
                description: [
                    'From glaciers to beaches, whale-watching to wine-tasting, New Zealand has so much to offer.',
                    'Not sure where to begin? Get started with these places.',
                ],
                contactInfo: '+64 1 123 0456',
                images: ['south01.jpg', 'south02.jpg']
            }
        ],
    },
    {
        name: 'Jamaica',
        image: 'jamaica.jpeg',
        title: 'Daydream into a real-life adventure',
        activities: [
            {
                geoId: 31,
                title: 'Kingston',
                description: [
                    'Explore our capital city',
                    'Our busy cosmopolitan Kingston is one-of-a-kind; half exotic jungle, bursting with sunshine, and thriving business.',
                ],
                contactInfo: '876-555-1111',
                images: ['kingston01.jpg', 'kingston02.jpg']
            },
            {
                geoId: 32,
                title: 'Montego Bay',
                description: [
                    'Get out and about for a one-of-a-kind adventure.',
                    'There’s no doubt about it; we’re an island who knows how to chill out in style.',
                ],
                contactInfo: '876-555-1111',
                images: ['montego01.jpg', 'montego02.jpg']
            },
            {
                geoId: 33,
                title: 'Ocho Rios',
                description: [
                    'From exquisite luxury plazas, filled with world-class brands, to traditional stalls and stores,',
                    'where one can uncover all kinds of charming mementos, Ocho Rios is a shopper’s dream come true.'
                ],
                contactInfo: '876-555-1111',
                images: ['ochorios01.jpg', 'ochorios02.jpg']
            }
        ],
    }
];
export const data$ = of(data).pipe(delay(getRandomInt(3) * 1000));
