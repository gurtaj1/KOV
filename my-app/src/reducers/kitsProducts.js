import IStickKitImage from '../product_images/kits/eleaf/istick.png';
import IStickPicoKitImage from '../product_images/kits/eleaf/istickpico.jpg';
import CoolfireKitImage from '../product_images/kits/innokin/coolfire.jpg';
import CoolfireMiniKitImage from '../product_images/kits/innokin/coolfiremini.png';
import CoolfireUltraKitImage from '../product_images/kits/innokin/coolfireultra.jpg';
import EnduraT18eKitImage from '../product_images/kits/innokin/endurat18e.jpg';
import EnduraT22KitImage from '../product_images/kits/innokin/endurat22.jpg';
import Mpv4KitImage from '../product_images/kits/innokin/mpv4.jpg';
import PanguKitImage from '../product_images/kits/kangertech/pangu.png';
import AlienKitImage from '../product_images/kits/smok/alien.png';
import Gx2by4KitImage from '../product_images/kits/smok/gx2by4.jpg';
import ITasteKromaKitImage from '../product_images/kits/smok/itastekroma.jpg';
import QBoxKitImage from '../product_images/kits/smok/qbox.jpg';
import StickA10KitImage from '../product_images/kits/smok/sticka10.jpg';
import StickV8KitImage from '../product_images/kits/smok/stickv8.jpg';
import TargetMiniKitImage from '../product_images/kits/vaporesso/targetmini.jpg';
import TarotNanoKitImage from '../product_images/kits/vaporesso/tarotnano.jpg';
import Tc150KitImage from '../product_images/kits/vpark/tc150.jpg';

const initialState = [
        {
            id: 'KP1',
            brand: 'eleaf',
            model: 'istick',
            image: IStickKitImage,
            price: 15,
            priceRange: '£0-£20',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/istick',
            link2: '',
            qty: 1
        },
        {
            id: 'KP2',
            brand: 'eleaf',
            model: 'istick pico',
            image: IStickPicoKitImage,
            price: 30,
            priceRange: '£20-£40',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/istickpico',
            link2: '',
            qty: 1
        },
        {
            id: 'KP3',
            brand: 'innokin',
            model: 'coolfire',
            image: CoolfireKitImage,
            price: 50,
            priceRange: '£40-£60',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/coolfire',
            link2: '',
            qty: 1
        },
        {
            id: 'KP4',
            brand: 'innokin',
            model: 'coolfire mini',
            image: CoolfireMiniKitImage,
            price: 10,
            priceRange: '£0-£20',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/coolfiremini',
            link2: '',
            qty: 1
        },
        {
            id: 'KP5',
            brand: 'innokin',
            model: 'coolfire ultra',
            image: CoolfireUltraKitImage,
            price: 12,
            priceRange: '£0-£20',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/coolfireultra',
            link2: '',
            qty: 1
        },
        {
            id: 'KP6',
            brand: 'innokin',
            model: 'endura t18e',
            image: EnduraT18eKitImage,
            price: 18,
            priceRange: '£0-£20',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/endurat18e',
            link2: '',
            qty: 1
        },
        {
            id: 'KP7',
            brand: 'innokin',
            model: 'mpv4',
            image: Mpv4KitImage,
            price: 15,
            priceRange: '£0-£20',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/mpv4',
            link2: '',
            qty: 1
        },
        {
            id: 'KP8',
            brand: 'innokin',
            model: 'endura t22',
            image: EnduraT22KitImage,
            price: 15,
            priceRange: '£0-£20',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/endurat22',
            link2: '',
            qty: 1
        },
        {
            id: 'KP9',
            brand: 'kangertech',
            model: 'pangu',
            image: PanguKitImage,
            price: 15,
            priceRange: '£0-£20',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/pangu',
            link2: '',
            qty: 1
        },
        {
            id: 'KP10',
            brand: 'smok',
            model: 'alien',
            image: AlienKitImage,
            price: 25,
            priceRange: '£20-£40',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/alien',
            link2: '',
            qty: 1
        },
        {
            id: 'KP11',
            brand: 'smok',
            model: 'gx 2/4',
            image: Gx2by4KitImage,
            price: 25,
            priceRange: '£20-£40',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/gx2by4',
            link2: '',
            qty: 1
        },
        {
            id: 'KP12',
            brand: 'smok',
            model: 'itaste kroma',
            image: ITasteKromaKitImage,
            price: 25,
            priceRange: '£20-£40',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/itastekroma',
            link2: '',
            qty: 1
        },
        {
            id: 'KP13',
            brand: 'smok',
            model: 'qbox',
            image: QBoxKitImage,
            price: 25,
            priceRange: '£20-£40',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/qbox',
            link2: '',
            qty: 1
        },
        {
            id: 'KP14',
            brand: 'smok',
            model: 'stick a10',
            image: StickA10KitImage,
            price: 25,
            priceRange: '£20-£40',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/sticka10',
            link2: '',
            qty: 1
        },
        {
            id: 'KP15',
            brand: 'smok',
            model: 'stick v8',
            image: StickV8KitImage,
            price: 25,
            priceRange: '£20-£40',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/stickv8',
            link2: '',
            qty: 1
        },
        {
            id: 'KP16',
            brand: 'vaporesso',
            model: 'targetmini',
            image: TargetMiniKitImage,
            price: 50,
            priceRange: '£40-£60',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/targetmini',
            link2: '',
            qty: 1
        },
        {
            id: 'KP17',
            brand: 'vaporesso',
            model: 'tarotnano',
            image: TarotNanoKitImage,
            price: 50,
            priceRange: '£40-£60',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/tarotnano',
            link2: '',
            qty: 1
        },
        {
            id: 'KP18',
            brand: 'vpark',
            model: 'tc150',
            image: Tc150KitImage,
            price: 50,
            priceRange: '£40-£60',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/tc150',
            link2: '',
            qty: 1
        }
    ];

export default function(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
    return state;
};