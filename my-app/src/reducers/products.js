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

import BritMiniImage from '../product_images/tanks/smok/britmini.jpg';
import Tfv8BabyImage from '../product_images/tanks/smok/tfv8baby.jpg';
import CleitoExoImage from '../product_images/tanks/aspire/cleitoexo.jpg';
import RafaleImage from '../product_images/tanks/uwell/rafale.jpg';

import CleitoCoilImage from '../product_images/coils/aspire/cleito.png';
import CleitoExoCoilImage from '../product_images/coils/aspire/cleitoexo.jpg';
import EnduraT18eCoilImage from '../product_images/coils/innokin/endurat18e.png';
import SlipstreamCoilImage from '../product_images/coils/innokin/slipstream.png';
import ISubCoilImage from '../product_images/coils/isub/isub.png';
import KangertechDualCoilImage from '../product_images/coils/kangertech/kangertechdual.jpg';
import OccCoilImage from '../product_images/coils/kangertech/kangertechocc.jpg';
import StickA10CoilImage from '../product_images/coils/smok/sticka10coil.jpg';
import CCellGdCoilImage from '../product_images/coils/vaporesso/ccellgd.jpg';
import EucTraditionalCoilImage from '../product_images/coils/vaporesso/euctraditional.jpg';

import BlueberryCupcakeImage from '../product_images/flavours/grumpymonkey/blueberrycupcake.jpg';
import BlueSlushImage from '../product_images/flavours/grumpymonkey/blueslush.jpg';
import KillerCustardImage from '../product_images/flavours/grumpymonkey/killercustard.jpg';
import MothersMilkImage from '../product_images/flavours/grumpymonkey/mothersmilk.jpg';
import PinkCrystalImage from '../product_images/flavours/grumpymonkey/pinkcrystal.jpg';
import SpearmintImage from '../product_images/flavours/grumpymonkey/spearmint.jpg';
import ScreamoMangoImage from '../product_images/flavours/monstavape/screamomango3pack.jpg';
import LightningLemonImage from '../product_images/flavours/mrcloud/lightninglemon.jpg';
import LycheeTwisterImage from '../product_images/flavours/mrcloud/lycheetwister.jpg';
import MonsoonMangoImage from '../product_images/flavours/mrcloud/monsoonmango.jpg';
import OrangeDrizzleImage from '../product_images/flavours/mrcloud/orangedrizzle.jpg';
import BubblegumImage from '../product_images/flavours/omg/bubblegum.jpg';
import BlackcurrantAndLiquoriceImage from '../product_images/flavours/picknmix/blackcurrantandliquorice.png';
import BlackJacksImage from '../product_images/flavours/picknmix/blackjacks.png';
import CherryLipsImage from '../product_images/flavours/picknmix/cherrylips.png';
import FoamBananasImage from '../product_images/flavours/picknmix/foambananas.png';
import SourCherriesImage from '../product_images/flavours/picknmix/sourcherries.png';
import StrawberryBeltsImage from '../product_images/flavours/picknmix/strawberrybelts.png';
import StrawberryMilkshakesImage from '../product_images/flavours/picknmix/strawberrymilkshakes.png';
import VanillaFudgeImage from '../product_images/flavours/picknmix/vanillafudge.png';
import BensGnSImage from '../product_images/flavours/vado/bensgns.jpg';
import BlackcurrantImage from '../product_images/flavours/vado/blackcurrant.jpg';
import BlackIceImage from '../product_images/flavours/vado/blackice.jpg';
import BlueberryImage from '../product_images/flavours/vado/blueberry.jpg';
import CherryImage from '../product_images/flavours/vado/cherry.jpg';
import ClassicTobaccoImage from '../product_images/flavours/vado/classictobacco.jpg';
import IceMintImage from '../product_images/flavours/vado/icemint.jpg';
import PremiumTobaccoImage from '../product_images/flavours/vado/premiumtobacco.jpg';
import Spearmint1Image from '../product_images/flavours/vado/spearmint.jpg';
import StrawberryImage from '../product_images/flavours/vado/strawberry.jpg';
import WatermelonImage from '../product_images/flavours/vado/watermelon.jpg';

import Efest3000BatteryImage from '../product_images/batteries/efest3000mah.jpg';
import Samsung2500BatteryImage from '../product_images/batteries/samsung2500mah.jpg';

const initialState = [
        {
            id: 'K1',
            type: 'kits',
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
            id: 'K2',
            type: 'kits',
            brand: 'eleaf',
            model: 'istick pico',
            image: IStickPicoKitImage,
            price: 30,
            priceRange: '£20-£40',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/istick%20pico',
            link2: '',
            qty: 1
        },
        {
            id: 'K3',
            type: 'kits',
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
            id: 'K4',
            type: 'kits',
            brand: 'innokin',
            model: 'coolfire mini',
            image: CoolfireMiniKitImage,
            price: 10,
            priceRange: '£0-£20',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/coolfire%20mini',
            link2: '',
            qty: 1
        },
        {
            id: 'K5',
            type: 'kits',
            brand: 'innokin',
            model: 'coolfire ultra',
            image: CoolfireUltraKitImage,
            price: 12,
            priceRange: '£0-£20',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/coolfire%20ultra',
            link2: '',
            qty: 1
        },
        {
            id: 'K6',
            type: 'kits',
            brand: 'innokin',
            model: 'endura t18e',
            image: EnduraT18eKitImage,
            price: 18,
            priceRange: '£0-£20',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/endura%20t18e',
            link2: '',
            qty: 1
        },
        {
            id: 'K7',
            type: 'kits',
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
            id: 'K8',
            type: 'kits',
            brand: 'innokin',
            model: 'endura t22',
            image: EnduraT22KitImage,
            price: 15,
            priceRange: '£0-£20',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/endura%20t22',
            link2: '',
            qty: 1
        },
        {
            id: 'K9',
            type: 'kits',
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
            id: 'K10',
            type: 'kits',
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
            id: 'K11',
            type: 'kits',
            brand: 'smok',
            model: 'gx 2/4',
            image: Gx2by4KitImage,
            price: 25,
            priceRange: '£20-£40',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/gx%202by4',
            link2: '',
            qty: 1
        },
        {
            id: 'K12',
            type: 'kits',
            brand: 'smok',
            model: 'itaste kroma',
            image: ITasteKromaKitImage,
            price: 25,
            priceRange: '£20-£40',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/itaste%20kroma',
            link2: '',
            qty: 1
        },
        {
            id: 'K13',
            type: 'kits',
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
            id: 'K14',
            type: 'kits',
            brand: 'smok',
            model: 'stick a10',
            image: StickA10KitImage,
            price: 25,
            priceRange: '£20-£40',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/stick%20a10',
            link2: '',
            qty: 1
        },
        {
            id: 'K15',
            type: 'kits',
            brand: 'smok',
            model: 'stick v8',
            image: StickV8KitImage,
            price: 25,
            priceRange: '£20-£40',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/stick%20v8',
            link2: '',
            qty: 1
        },
        {
            id: 'K16',
            type: 'kits',
            brand: 'vaporesso',
            model: 'target mini',
            image: TargetMiniKitImage,
            price: 50,
            priceRange: '£40-£60',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/target%20mini',
            link2: '',
            qty: 1
        },
        {
            id: 'K17',
            type: 'kits',
            brand: 'vaporesso',
            model: 'tarot nano',
            image: TarotNanoKitImage,
            price: 50,
            priceRange: '£40-£60',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/tarot%20nano',
            link2: '',
            qty: 1
        },
        {
            id: 'K18',
            type: 'kits',
            brand: 'vpark',
            model: 'tc150',
            image: Tc150KitImage,
            price: 50,
            priceRange: '£40-£60',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/tc150',
            link2: '',
            qty: 1
        },
        {
            id: 'T1',
            type: 'tanks',
            brand: 'smok',
            model: 'brit mini',
            image: BritMiniImage,
            price: 15,
            priceRange: '£10-£20',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/brit%20mini',
            link2: '',
            qty: 1
        },
                {
            id: 'T2',
            type: 'tanks',
            brand: 'smok',
            model: 'tfv8 baby',
            image: Tfv8BabyImage,
            price: 20,
            priceRange: '£10-£20',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/tfv8%20baby',
            link2: '',
            qty: 1
        },
        {
            id: 'T3',
            type: 'tanks',
            brand: 'aspire',
            model: 'cleito exo',
            image: CleitoExoImage,
            price: 25,
            priceRange: '£20-£30',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/cleito%20exo',
            link2: '',
            qty: 1
        },
        {
            id: 'T4',
            type: 'tanks',
            brand: 'uwell',
            model: 'rafale',
            image: RafaleImage,
            price: 25,
            priceRange: '£20-£30',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/rafale',
            link2: '',
            qty: 1
        },
        {
            id: 'C1',
            type: 'coils',
            brand: 'aspire',
            model: 'cleito coil',
            image: CleitoCoilImage,
            price: 5,
            priceRange: '£0-£5',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/cleito%20coil',
            link2: '',
            qty: 1
        },
        {
            id: 'C2',
            type: 'coils',
            brand: 'aspire',
            model: 'cleito exo coil',
            image: CleitoExoCoilImage,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/cleito%20exo%20coil',
            link2: '',
            qty: 1
        },
        {
            id: 'C3',
            type: 'coils',
            brand: 'innokin',
            model: 'endura t18e coil',
            image: EnduraT18eCoilImage,
            price: 5,
            priceRange: '£0-£5',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/endura%20t18e%20coil',
            link2: '',
            qty: 1
        },
        {
            id: 'C4',
            type: 'coils',
            brand: 'innokin',
            model: 'slipstream coil',
            image: SlipstreamCoilImage,
            price: 13,
            priceRange: '£10-£15',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/slipstream%20coil',
            link2: '',
            qty: 1
        },
        {
            id: 'C5',
            type: 'coils',
            brand: 'isub',
            model: 'isub coil',
            image: ISubCoilImage,
            price: 9,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/isub%20coil',
            link2: '',
            qty: 1
        },
        {
            id: 'C6',
            type: 'coils',
            brand: 'kangertech',
            model: 'dual coil',
            image: KangertechDualCoilImage,
            price: 4,
            priceRange: '£0-£5',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/dual%20coil',
            link2: '',
            qty: 1
        },
        {
            id: 'C7',
            type: 'coils',
            brand: 'kangertech',
            model: 'occ coil',
            image: OccCoilImage,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/occ%20coil',
            link2: '',
            qty: 1
        },
        {
            id: 'C8',
            type: 'coils',
            brand: 'smok',
            model: 'stick a10 coil',
            image: StickA10CoilImage,
            price: 12,
            priceRange: '£10-£15',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/stick%20a10%20coil',
            link2: '',
            qty: 1
        },
        {
            id: 'C9',
            type: 'coils',
            brand: 'vaporesso',
            model: 'c cell gd coil',
            image: CCellGdCoilImage,
            price: 6,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/c%20cell%20gd%20coil',
            link2: '',
            qty: 1
        },
        {
            id: 'C10',
            type: 'coils',
            brand: 'vaporesso',
            model: 'euc traditional coil',
            image: EucTraditionalCoilImage,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/euc%20traditional%20coil',
            link2: '',
            qty: 1
        },
        {
            id: 'EL1',
            type: 'eliquids',
            brand: 'grumpy monkey',
            model: 'blueberry cupcake',
            image: BlueberryCupcakeImage,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/blueberry%20cupcake',
            link2: '',
            qty: 1
        },
        {
            id: 'EL2',
            type: 'eliquids',
            brand: 'grumpy monkey',
            model: 'blue slush',
            image: BlueSlushImage,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/blue%20slush',
            link2: '',
            qty: 1
        },
        {
            id: 'EL3',
            type: 'eliquids',
            brand: 'grumpy monkey',
            model: 'killer custard',
            image: KillerCustardImage,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/killer%20custard',
            link2: '',
            qty: 1
        },
        {
            id: 'EL4',
            type: 'eliquids',
            brand: 'grumpy monkey',
            model: 'mothers milk',
            image: MothersMilkImage,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/mothers%20milk',
            link2: '',
            qty: 1
        },
        {
            id: 'EL5',
            type: 'eliquids',
            brand: 'grumpy monkey',
            model: 'pink crystal',
            image: PinkCrystalImage,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/pink%20crystal',
            link2: '',
            qty: 1
        },
        {
            id: 'EL6',
            type: 'eliquids',
            brand: 'grumpy monkey',
            model: 'spearmint',
            image: SpearmintImage,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/spearmint',
            link2: '',
            qty: 1
        },
        {
            id: 'EL7',
            type: 'eliquids',
            brand: 'monsta vape',
            model: 'screamo mango',
            image: ScreamoMangoImage,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/screamo%20mango',
            link2: '',
            qty: 1
        },
        {
            id: 'EL8',
            type: 'eliquids',
            brand: 'mr cloud',
            model: 'lightning lemon',
            image: LightningLemonImage,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/lightning%20lemon',
            link2: '',
            qty: 1
        },
        {
            id: 'EL9',
            type: 'eliquids',
            brand: 'mr cloud',
            model: 'lychee twister',
            image: LycheeTwisterImage,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/lychee%20twister',
            link2: '',
            qty: 1
        },
        {
            id: 'EL10',
            type: 'eliquids',
            brand: 'mr cloud',
            model: 'monsoon mango',
            image: MonsoonMangoImage,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/monsoon%20mango',
            link2: '',
            qty: 1
        },
        {
            id: 'EL11',
            type: 'eliquids',
            brand: 'omg',
            model: 'bubble gum',
            image: BubblegumImage,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/bubble%20gum',
            link2: '',
            qty: 1
        },
        {
            id: 'EL12',
            type: 'eliquids',
            brand: "pick 'n' mix",
            model: 'blackcurrant and liquorice',
            image: BlackcurrantAndLiquoriceImage,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/blackcurrant%20and%20liquorice',
            link2: '',
            qty: 1
        },
        {
            id: 'EL13',
            type: 'eliquids',
            brand: "pick 'n' mix",
            model: 'black jacks',
            image: BlackJacksImage,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/black%20jacks',
            link2: '',
            qty: 1
        },
        {
            id: 'EL14',
            type: 'eliquids',
            brand: "pick 'n' mix",
            model: 'cherry lips',
            image: CherryLipsImage,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/cherry%20lips',
            link2: '',
            qty: 1
        },
        {
            id: 'EL15',
            type: 'eliquids',
            brand: "pick 'n' mix",
            model: 'foam bananas',
            image: FoamBananasImage,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/foam%20bananas',
            link2: '',
            qty: 1
        },
        {
            id: 'EL16',
            type: 'eliquids',
            brand: "pick 'n' mix",
            model: 'sour cherries',
            image: SourCherriesImage,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/sour%20cherries',
            link2: '',
            qty: 1
        },
        {
            id: 'EL17',
            type: 'eliquids',
            brand: "pick 'n' mix",
            model: 'strawberry belts',
            image: StrawberryBeltsImage,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/strawberry%20belts',
            link2: '',
            qty: 1
        },
        {
            id: 'EL18',
            type: 'eliquids',
            brand: "pick 'n' mix",
            model: 'strawberry milkshake',
            image: StrawberryMilkshakesImage,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/strawberry%20milkshake',
            link2: '',
            qty: 1
        },
        {
            id: 'EL19',
            type: 'eliquids',
            brand: "pick 'n' mix",
            model: 'vanilla fudge',
            image: VanillaFudgeImage,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/vanilla%20fudge',
            link2: '',
            qty: 1
        },
        {
            id: 'EL20',
            type: 'eliquids',
            brand: 'vado',
            model: 'bens g n s',
            image: BensGnSImage,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/bens%20g%20n%20s',
            link2: '',
            qty: 1
        },
        {
            id: 'EL21',
            type: 'eliquids',
            brand: 'vado',
            model: 'blackcurrant',
            image: BlackcurrantImage,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/blackcurrant',
            link2: '',
            qty: 1
        },
        {
            id: 'EL22',
            type: 'eliquids',
            brand: 'vado',
            model: 'black ice',
            image: BlackIceImage,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/black%20ice',
            link2: '',
            qty: 1
        },
        {
            id: 'EL23',
            type: 'eliquids',
            brand: 'vado',
            model: 'blueberry',
            image: BlueberryImage,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/blueberry',
            link2: '',
            qty: 1
        },
        {
            id: 'EL24',
            type: 'eliquids',
            brand: 'vado',
            model: 'cherry',
            image: CherryImage,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/cherry',
            link2: '',
            qty: 1
        },
        {
            id: 'EL25',
            type: 'eliquids',
            brand: 'vado',
            model: 'classic tobacco',
            image: ClassicTobaccoImage,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/classic%20tobacco',
            link2: '',
            qty: 1
        },
        {
            id: 'EL26',
            type: 'eliquids',
            brand: 'vado',
            model: 'ice mint',
            image: IceMintImage,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/ice%20mint',
            link2: '',
            qty: 1
        },
        {
            id: 'EL27',
            type: 'eliquids',
            brand: 'vado',
            model: 'premium tobacco',
            image: PremiumTobaccoImage,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/premium%20tobacco',
            link2: '',
            qty: 1
        },
        {
            id: 'EL28',
            type: 'eliquids',
            brand: 'vado',
            model: 'spearmint',
            image: Spearmint1Image,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/spearmint1',
            link2: '',
            qty: 1
        },
        {
            id: 'EL29',
            type: 'eliquids',
            brand: 'vado',
            model: 'strawberry',
            image: StrawberryImage,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/strawberry',
            link2: '',
            qty: 1
        },
        {
            id: 'EL30',
            type: 'eliquids',
            brand: 'vado',
            model: 'watermelon',
            image: WatermelonImage,
            price: 8,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/watermelon',
            link2: '',
            qty: 1
        },
        {
            id: 'B1',
            type: 'batteries',
            brand: 'efest',
            model: '3000',
            image: Efest3000BatteryImage,
            price: 5,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/3000',
            link2: '',
            qty: 1
        },
        {
            id: 'B2',
            type: 'batteries',
            brand: 'samsung',
            model: '2500',
            image: Samsung2500BatteryImage,
            price: 5,
            priceRange: '£5-£10',
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            link1: '/2500',
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