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

import LightningLemonImage from '../product_images/flavours/mrcloud/lightninglemon.jpg';
import LycheeTwisterImage from '../product_images/flavours/mrcloud/lycheetwister.jpg';
import MonsoonMangoImage from '../product_images/flavours/mrcloud/monsoonmango.jpg';
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
            text: "The Eleaf iStick combines easy to use operation, long battery life and innovative features to create a streamlined e-cigarette starter kit. The iStick Basic is perfect for new and experienced vapers alike.",
            image: IStickKitImage,
            price: 15,
            priceRange: '£0-£20',
            link1: '/istick',
            link2: '',
            qty: 1
        },
        {
            id: 'K2',
            type: 'kits',
            brand: 'eleaf',
            model: 'istick pico',
            text: "The popular Eleaf iStick Pico box mod is now available as a kit and it delivers power, flexibility and smart design in a minute package. The Eleaf iStick is one of the smallest box mod e-cigs with a removable 18650 battery and it features a design which is epitomises the idea of a palm sized box mod. The sleek and handheld nature of the design makes it popular and portable and it is further enhanced with a choice of five different colours to choose from.",
            image: IStickPicoKitImage,
            price: 30,
            priceRange: '£20-£40',
            link1: '/istick%20pico',
            link2: '',
            qty: 1
        },
        {
            id: 'K3',
            type: 'kits',
            brand: 'innokin',
            model: 'coolfire',
            text: "The Coolfire is Innokin’s latest e-cigarette battery mod. With its compact design and ability to fire up to 40 watts and as low as 0.2ohms, it’s the perfect combination of style and power to create a fantastic mid-range mod. The compact power, bright OLED display, long lasting battery capacity and easy to use menu system makes the Innokin Cool Fire IV the ultimate compact vaporizer. Additionally, useful features such as the puff counter, internal battery and ability to use whilst charging make this a great addition to any vaper’s arsenal!",
            image: CoolfireKitImage,
            price: 50,
            priceRange: '£40-£60',
            link1: '/coolfire',
            link2: '',
            qty: 1
        },
        {
            id: 'K4',
            type: 'kits',
            brand: 'innokin',
            model: 'coolfire mini',
            text: "The CoolFire Mini packs 40 Watts of precise output and a real 1300mAh battery into an ergonomic shape that is only 63mm tall and designed to fit perfectly in your hand. The new curved button design is more comfortable than ever and the bright OLED clearly displays all important vaping information. The high quality stainless steel 510 threading and gold plated spring loaded connector pin are perfectly compatible with all standard coil and tank systems.",
            image: CoolfireMiniKitImage,
            price: 10,
            priceRange: '£0-£20',
            link1: '/coolfire%20mini',
            link2: '',
            qty: 1
        },
        {
            id: 'K5',
            type: 'kits',
            brand: 'innokin',
            model: 'coolfire ultra',
            text: "The Cool Fire Ultra TC150 is Innokin's latest. With an incredible long lasting built-in 4000mAh battery and a maximum wattage of 150 watts, the Cool Fire Ultra TC150 is an even more powerful version of the Cool Fire 4 TC. The Innokin Coolfire Ultra features the same temperature control precision for Nickel 200, Titanium and Stainless Steel 316 coils.",
            image: CoolfireUltraKitImage,
            price: 12,
            priceRange: '£0-£20',
            link1: '/coolfire%20ultra',
            link2: '',
            qty: 1
        },
        {
            id: 'K6',
            type: 'kits',
            brand: 'innokin',
            model: 'endura t18e',
            text: "The Innokin Endura T18E is the TPD compliant version of this best-selling vaping starter kit. To comply with the new Tobacco Products Directive (TPD), the atomizer tank capacity has been lowered from 2.5 to 2ml. Apart from the tiny reduction in e liquid capacity, the Endura T18E retains all the easy-to-use features of the original kit. Those features include a 1000mAh pen-style battery and simple, one-click operation. With 14 Watts of power output, the Endura T18E extracts superb flavour from the Prism tank’s organic cotton coils.",
            image: EnduraT18eKitImage,
            price: 18,
            priceRange: '£0-£20',
            link1: '/endura%20t18e',
            link2: '',
            qty: 1
        },
        {
            id: 'K7',
            type: 'kits',
            brand: 'innokin',
            model: 'mpv4',
            text: "The Innokin MVP4 features a large 4500mAh built-in battery, along with a 100W of maximum output. The MVP4 continues on from Innokin's MVP range, this time increasing both battery capacity and output wattage. Utilising Innokin's Aethon Temperature Control (TC) chipset, the device can support a variety of different kinds of wire, including Kanthal, Ni200, Ti, and SS316, and it also features a pass-through capability; meaning it can be vaped on while the battery is charging. With precision TC, Dry Hit detection, and ultra-low standby power consumption, the MVP4 has plenty of features to keep its user safe and in control.",
            image: Mpv4KitImage,
            price: 15,
            priceRange: '£0-£20',
            link1: '/mpv4',
            link2: '',
            qty: 1
        },
        {
            id: 'K8',
            type: 'kits',
            brand: 'innokin',
            model: 'endura t22',
            text: "Designed to be ready to go in a few short minutes as soon as you open the box, the Endura T22 is a powerful mod which helps to ensure you get the full impact of your chosen e-liquid flavours. It makes the mouth-to-lung vape experience as smooth and seamless as you can imagine and it has a feeling as natural as a traditional cigarette. It’s larger box-style design means it may not be a natural choice for first-time vapers but those who do go for it get an easy-to-use and super-powerful vaping experience.",
            image: EnduraT22KitImage,
            price: 15,
            priceRange: '£0-£20',
            link1: '/endura%20t22',
            link2: '',
            qty: 1
        },
        {
            id: 'K9',
            type: 'kits',
            brand: 'kangertech',
            model: 'pangu',
            text: "New design, new features, and a whole new experience, this is the Pangu vape Tank. The Pangu promises much, with a whole host of fantastic internal features and a sleek design to match, this tank is going to be attractive for all e-cigarette users. With a new 'Clean Hands' coil replacement system, the Pangu brings an end to the days of getting juice all over your hands whilst changing your coils and assembling your tank.",
            image: PanguKitImage,
            price: 15,
            priceRange: '£0-£20',
            link1: '/pangu',
            link2: '',
            qty: 1
        },
        {
            id: 'K10',
            type: 'kits',
            brand: 'smok',
            model: 'alien',
            text: "The Smok Alien Vape Kit is a combination of the Alien 220 box mod and the TFV8 baby beast tank. Its VW mode ranges from 6-220w and TC modes ranges from 200-600F (100-300C). It also comes with manual resistance adjustments, puff counter and upgradeable firmware. The TFV8 baby beast tank features a dual adjustable airflow, top filling system, 2ml juice capacity and a 510 threading connection.",
            image: AlienKitImage,
            price: 25,
            priceRange: '£20-£40',
            link1: '/alien',
            link2: '',
            qty: 1
        },
        {
            id: 'K11',
            type: 'kits',
            brand: 'smok',
            model: 'gx 2/4',
            text: "The Smok GX2/4 Kit features the GX2/4 Box Mod and the TFV8 Big Baby Beast Tank. The mod is capable of firing up to 220W when powered by dual 18650 batteries or 350W with four batteries. Also featuring a detailed OLED display, minimum firing resistance of 0.1Ω for VW mode or 0.06Ω for TC mode, as well as having multiple vaping modes. The Smok TFV8 Big Baby Beast features a 2ml capacity due to the large block Smok TFV8 Big Baby Tank coils, a top filling design and an adjustable bottom airflow.",
            image: Gx2by4KitImage,
            price: 25,
            priceRange: '£20-£40',
            link1: '/gx%202by4',
            link2: '',
            qty: 1
        },
        {
            id: 'K12',
            type: 'kits',
            brand: 'innokin',
            model: 'itaste kroma',
            text: "The Innokin iTaste Kroma is a dinky vaping starter kit that comes with a few surprises. With its sporty styling and attractive looks, it could be love at first sight when you check-out this tiny, wattage and temperature control kit. The colourful, Kroma mod may be designed for easy operation in the mid-power range, but it also comes with a punchy ‘pre-boost’ feature to enhance the e juice flavour from each vape. For safer vaping, the iTaste Kroma starter kit comes with a child-proof, 2ml ‘Slipstream’ atomizer tank. This cool, inset tank complies with the new ‘TPD’ vaping laws.",
            image: ITasteKromaKitImage,
            price: 25,
            priceRange: '£20-£40',
            link1: '/itaste%20kroma',
            link2: '',
            qty: 1
        },
        {
            id: 'K13',
            type: 'kits',
            brand: 'smok',
            model: 'qbox',
            text: "Bringing together an ultra-compact SMOK box mod with the ever popular Baby Beast Tank, the Smok Q-Box makes it easy stealth vape even sub ohm e-liquids. Fantastic flavour and compact, robust design combine in this innovative SMOK box mod and you can be sure of a great vape with every use. Easy to fit into the palm of your hand or slip into your pocket, the SMOK Q Box is extremely powerful, especially considering its size. Offerings from 1W to 50W of power, this compact box mod is powered by an integrated 1600 mAh battery. Long-lasting as well as powerful, the SMOK Q-Box battery charges up in less than two hours too so you’re never left for long without your mod.",
            image: QBoxKitImage,
            price: 25,
            priceRange: '£20-£40',
            link1: '/qbox',
            link2: '',
            qty: 1
        },
        {
            id: 'K14',
            type: 'kits',
            brand: 'smok',
            model: 'stick a10',
            text: "Stick AIO adopts pen style design with leak-proof built-in glass tank. Top rotary cap is convenient to refill, 1600mAh battery capacity provides long run time, and the combination of intelligent LED indicator and multiple protections ensures the safety to use. Stick AIO——excellent design and performance for you. Innovation keeps changing the vaping experience!",
            image: StickA10KitImage,
            price: 25,
            priceRange: '£20-£40',
            link1: '/stick%20a10',
            link2: '',
            qty: 1
        },
        {
            id: 'K15',
            type: 'kits',
            brand: 'smok',
            model: 'stick v8',
            text: "Stick V8 is the newest pen style starter kit from SMOK, which brings the user experiences to the top level of its kind, the battery has a 3000mAh super high capacity and 20amps continious discharge capability, while its tank is the famous TFV8 big baby tank which is 5ml and shares all the baby beast coils, when used with the included baby M2 coil head, which specially made for stick v8 battery , it will bring you a smooth and flavorful clouds,besides its swivel top cap design just brings you so much convenience when refills, all in all, this kit will defintely made to be one of your favorite daily vaping device.",
            image: StickV8KitImage,
            price: 25,
            priceRange: '£20-£40',
            link1: '/stick%20v8',
            link2: '',
            qty: 1
        },
        {
            id: 'K16',
            type: 'kits',
            brand: 'vaporesso',
            model: 'target mini',
            text: "The Target Mini Kit is designed for portability while offering Vapers an authentic vaping experience, with all of the cloud chasing benefits and none of the heft of larger mods. The Target Mini kit combines the Target Mini Mod, Guardian Tank, patented Ccell ceramic coil, built-in 1400mAh battery and a brand official USB cable- everything you need to get vaping right out of the box.",
            image: TargetMiniKitImage,
            price: 50,
            priceRange: '£40-£60',
            link1: '/target%20mini',
            link2: '',
            qty: 1
        },
        {
            id: 'T1',
            type: 'tanks',
            brand: 'smok',
            model: 'brit mini',
            text: "The stainless steel construction incorporates a glass tank section and to top up your Brit Mini Tank with your favourite e-liquid you simply remove the top of the tank, expose the liquid reservoir and fill with your favourite liquid. It is a small tank when compared to some of the others of the market but its minimalist style suits many different types of vaper and with a dual core system it delivers on flavour and effectiveness. Its base features a 510 connector which allows it to be linked up with almost any box mod or starter kit.",
            image: BritMiniImage,
            price: 15,
            priceRange: '£10-£20',
            link1: '/brit%20mini',
            link2: '',
            qty: 1
        },
                {
            id: 'T2',
            type: 'tanks',
            brand: 'smok',
            model: 'tfv8 baby',
            text: "TFV8 Baby, which size is 1/3 smaller than the Cloud Beast - TFV8. Meanwhile, its airflow system: the bottom pair air-slots, the air chamber, the drip tip, are re-designed after precise calculations and optimizations. All those efforts ensure that TFV8 Baby is another Cloud Beast - a Baby Beast. TFV8 Big Baby is the enlarged version based on TFV8 Baby, both its 5ml e-juice capacity and more vapors will let you enjoy pleasant vaping time. Two editions, two experiences for you.",
            image: Tfv8BabyImage,
            price: 20,
            priceRange: '£10-£20',
            link1: '/tfv8%20baby',
            link2: '',
            qty: 1
        },
        {
            id: 'T3',
            type: 'tanks',
            brand: 'aspire',
            model: 'cleito exo',
            text: "Employing the latest in flavor enhancing tank technology, Cleito EXO. Prepare to produce your own microclimate! New topside airway to bottom side chimney intake will take flavor and vapor production to next levels, as well as guaranteeing zero leaks. Top fill, easy to disassemble for ultra-low maintenance and convenience of everyday use. Utilizing the well-established Cleito coils, brings you storm clouds of flavor.",
            image: CleitoExoImage,
            price: 25,
            priceRange: '£20-£30',
            link1: '/cleito%20exo',
            link2: '',
            qty: 1
        },
        {
            id: 'T4',
            type: 'tanks',
            brand: 'uwell',
            model: 'rafale',
            text: "Uwell Rafale Sub Ohm Tank is now scheduled to be released after phenomenal success of the Uwell Crown tank, that took the e cigarette world by storm. The Uwell Rafale Sub Ohm Tank has great build quality and is awesome value for money and flavour delivery is exceptional due to its upgraded adjustable airflow. The Uwell Rafale Tank comes with 2 coil heads in the pack that utilise Japanese organic cotton for maximum flavour delivery; a 0.2 ohms coil preinstalled that is dual parallel allowing it to handle a massive 120w of power and a spare 0.5 ohms coil head that can handle 30 to 70 watts of power.",
            image: RafaleImage,
            price: 25,
            priceRange: '£20-£30',
            link1: '/rafale',
            link2: '',
            qty: 1
        },
        {
            id: 'C1',
            type: 'coils',
            brand: 'aspire',
            model: 'cleito coil',
            text: "A replacement pack of 5 coils for the Aspire Cleito 120 tank. These coils can handle up to 120 watts of power hence the '120' in its name and are available in 0.16 ohm resistance. The Clapton coil wire inside enables you to experience rich, dense flavour and high vapour. The oval wicking ports are positioned low in the coil head to maximise coil saturation – right down to the very last drops of e liquid.",
            image: CleitoCoilImage,
            price: 5,
            priceRange: '£0-£5',
            link1: '/cleito%20coil',
            link2: '',
            qty: 1
        },
        {
            id: 'C2',
            type: 'coils',
            brand: 'aspire',
            model: 'cleito exo coil',
            text: "Fitting these replacement Aspire Cleito EXO Coils in your EXO tank will ensure that it stays within the TPD’s 2ml capacity rules. Though EXO coils have the same length and threading as other Cleito coils, the barrel is slighter fatter. This reduces the filling capacity of the EXO tank. EXO coils are designed to take full advantage of the EXO tank’s revolutionary airflow system. The EXO tank and coils are optimised for use on high power mods. These Cleito EXO coils have a resistance of 0.16 Ohms. EXO coils score well on flavour and cloud production at power levels ranging from 60 to 100 Watts. Long oval wicking ports ensure that the coil wire remains fully saturated with e juice – even when fired at high power settings.",
            image: CleitoExoCoilImage,
            price: 8,
            priceRange: '£5-£10',
            link1: '/cleito%20exo%20coil',
            link2: '',
            qty: 1
        },
        {
            id: 'C3',
            type: 'coils',
            brand: 'innokin',
            model: 'endura t18e coil',
            text: "The Innokin Endura T18E Coils now come in either 1.5 ohm or 2.0 ohm BVC for the Prism T18E Tank used in the Endura T18E Vaping Kit. Just like the ones that come with other Innokin Tanks, these replacement coils include Japanese organic cotton. They can be replaced in a matter of seconds and without a hassle. NOTE - These coils ONLY fit the T18E tank and not the T18 tank",
            image: EnduraT18eCoilImage,
            price: 5,
            priceRange: '£0-£5',
            link1: '/endura%20t18e%20coil',
            link2: '',
            qty: 1
        },
        {
            id: 'C4',
            type: 'coils',
            brand: 'innokin',
            model: 'slipstream coil',
            text: "This 5 pack of Innokin Slipstream Coils is compatible with the Slipstream atomizer tank. This tank is shipped with Innokin’s Kroma and Pebble mid-power vaping starter kits. These Slipstream, BVC (bottom vertical coils) allow inhaled air to pass down through the coil body, then up through the atomizer coil’s central airflow channel. This advanced airflow system is designed to make the Slipstream tank virtually leak free. Slipstream coils are currently available with two types of coil wire:",
            image: SlipstreamCoilImage,
            price: 13,
            priceRange: '£10-£15',
            link1: '/slipstream%20coil',
            link2: '',
            qty: 1
        },
        {
            id: 'C5',
            type: 'coils',
            brand: 'innokin',
            model: 'isub coil',
            text: "The iSub Tank coils are designed to be used with the Innokin iSub series of tanks, and are crafted from 100% organic Japanese Cotton for the purest flavour production possible. The iSub series from Innokin employ a new and innovative technology Innokin are calling the 'No spill coil swap' system.Essentially the coil can be removed without the need to 'open' the tank. What this means is that the Innokin iSub Replacement Coil houses the 510 connector pin itself, making cleaning the iSub and iSub G Tank a breeze as well as increasing both tanks longevity.",
            image: ISubCoilImage,
            price: 9,
            priceRange: '£5-£10',
            link1: '/isub%20coil',
            link2: '',
            qty: 1
        },
        {
            id: 'C6',
            type: 'coils',
            brand: 'kangertech',
            model: 'dual coil',
            text: "The Kanger Dual Coils (BDC) 5 Pack is a pack of five Kanger replacement coils for a number of Kanger tanks and clearomizers including the highly popular Mini, Mega and V2 from the Aerotank series; Mini Protank; Mini, Mega and original Genitank; EVOD Glass; EVOD 2; T3D and EMOW, to mention just a few. Available in resistances of 0.8 ohm, 1.5 ohm and 1.8 ohm, these replacement coils have been designed to produce lots of vapour and lots of flavour with each vape, making your preferred E-Juice taste even better. They have also been designed to be easy to replace but there are slight differences between different tanks and clearomizers. Please read the manufacturer 's instructions on how to replace the coil on your tank/clearomizer.",
            image: KangertechDualCoilImage,
            price: 4,
            priceRange: '£0-£5',
            link1: '/dual%20coil',
            link2: '',
            qty: 1
        },
        {
            id: 'C7',
            type: 'coils',
            brand: 'kangertech',
            model: 'occ coil',
            text: "These Kangertech Subtank Vertical OCC Coils feature an updated design providing a more fulfulling vaping experience with the KangerTech Subtank. The Subtank gives you the freedom to switch between the Organic Cotton Coil head (OCC) and a rebuildable atomizer head. The vertical coil design allows for more e-liquid absorbtion due to the increased surface area, and the improved RBA unit means coil building is easier than ever. Only suitable for use with the KangerTech Subtank range.",
            image: OccCoilImage,
            price: 8,
            priceRange: '£5-£10',
            link1: '/occ%20coil',
            link2: '',
            qty: 1
        },
        {
            id: 'C8',
            type: 'coils',
            brand: 'smok',
            model: 'stick a10 coil',
            text: "These novel coils are designed for use with the SMOK Stick AIO vape pen. This amazing device packs the full sub-ohm vaping experience into a simple vape pen. The unusual thing about SMOK Stick AIO Dual Coils is the way that they connect to the atomizer tank. The coils screw into AIO’s removeable top section, then hang down inside the tank. It’s a great design that eliminates e juice leaks and flooding. For optimised wicking, the barrel of these AIO dual coils is drilled with two pairs of wicking ports. This ensures that the coils have a consistent feed of e juice as the level drops. These 0.23 Ohm coils deliver premium clouds and flavour. Though the SMOK Stick AIO device has no display screen or power settings, these coils are actually operating at around 45 Watts when fired with a fully charged battery! ",
            image: StickA10CoilImage,
            price: 12,
            priceRange: '£10-£15',
            link1: '/stick%20a10%20coil',
            link2: '',
            qty: 1
        },
        {
            id: 'C9',
            type: 'coils',
            brand: 'vaporesso',
            model: 'ccell gd coil',
            text: "Vaporesso’s innovative CCell-GD ceramic coils are primarily designed to avoid the pitfalls of tradtional vaping coil heads. Instead of the regular silica or organic cotton, the CCell coils use a porous ceramic core designed to reduce spitback and dry hits, while delivering excellent flavour production and a longer coil lifespan. The CCell GD Coils are designed for use in the Vaporesso Guardian tank that comes with The Target Mini Kit and The Guardian One Kit. The 0.5 ohm variety of these coils are designed for a direct to lung style vape, and the 0.6 ohm coils are built for mouth to lung vaping. ",
            image: CCellGdCoilImage,
            price: 6,
            priceRange: '£5-£10',
            link1: '/c%20cell%20gd%20coil',
            link2: '',
            qty: 1
        },
        {
            id: 'C10',
            type: 'coils',
            brand: 'vaporesso',
            model: 'euc traditional coil',
            text: "The EUC reinvents traditional atomizers allowing a fast and easier than ever system to replace your coil and wick after use. Before, we had to replace the ENTIRE coil head, shell, coil, wick, connective element, but now you’ll only have to replace the core, the heart of the atomizer encasing the coil and the CCELL wick or traditional cotton saving therefore time, money, and cutting the environment some deserved slack.",
            image: EucTraditionalCoilImage,
            price: 8,
            priceRange: '£5-£10',
            link1: '/euc%20traditional%20coil',
            link2: '',
            qty: 1
        },
        {
            id: 'EL1',
            type: 'eliquids',
            brand: 'vado',
            model: 'blueberry',
            text: "Blueberry 50-50(VG/PG) E-Juice from Vado is a Classic Blueberry Flavour. Blueberry 50-50(VG/PG) E-Juice from Vado is new to the market but is made by a well established manufacturer (the makers of Oplus). It is a 50-50 (VG/PG) liquid/juice which can be vaped in almost any electronic smoking device. It is well packaged in a 10 ML plastic bottle inside a cardboard box. You can choose from the following nicotine strengths: 3 mg (0.3%), 6 mg (0.6%), 12 mg (1.2%) or 18 mg (1.8%).",
            image: BlueberryImage,
            price: 4,
            priceRange: '£0-£5',
            link1: '/blueberry',
            link2: '',
            qty: 1
        },
        {
            id: 'EL2',
            type: 'eliquids',
            brand: 'vado',
            model: 'cherry',
            text: "Picked at the peak of freshness, our cherry flavour offers the ultimate sweet fruity richness. The flavor is strong; the cherry has just the right amount of sweetness and meatiness. One taste and we are sure that you will get a crush on this flavour.",
            image: CherryImage,
            price: 4,
            priceRange: '£0-£5',
            link1: '/cherry',
            link2: '',
            qty: 1
        },
        {
            id: 'EL3',
            type: 'eliquids',
            brand: 'vado',
            model: 'classic tobacco',
            text: "Classic Tobacco 50-50(VG/PG) E-Juice from Vado is a Classic Tobacco Flavour. Classic Tobacco 50-50(VG/PG) E-Juice from Vado is new to the market but is made by a well established manufacturer (the makers of Oplus). It is a 50-50 (VG/PG) liquid/juice which can be vaped in almost any electronic smoking device. It is well packaged in a 10 ML plastic bottle inside a cardboard box. You can choose from the following nicotine strengths: 3 mg (0.3%), 6 mg (0.6%), 12 mg (1.2%) or 18 mg (1.8%).",
            image: ClassicTobaccoImage,
            price: 4,
            priceRange: '£0-£5',
            link1: '/classic%20tobacco',
            link2: '',
            qty: 1
        },
        {
            id: 'EL4',
            type: 'eliquids',
            brand: 'vado',
            model: 'ice mint',
            text: "Ice Mint 50-50(VG/PG) E-Juice from Vado is a Classic Ice Mint Flavour. Ice Mint 50-50(VG/PG) E-Juice from Vado is new to the market but is made by a well established manufacturer (the makers of Oplus). It is a 50-50 (VG/PG) liquid/juice which can be vaped in almost any electronic smoking device. It is well packaged in a 10 ML plastic bottle inside a cardboard box. You can choose from the following nicotine strengths: 3 mg (0.3%), 6 mg (0.6%), 12 mg (1.2%) or 18 mg (1.8%).",
            image: IceMintImage,
            price: 4,
            priceRange: '£0-£5',
            link1: '/ice%20mint',
            link2: '',
            qty: 1
        },
        {
            id: 'EL5',
            type: 'eliquids',
            brand: 'vado',
            model: 'premium tobacco',
            text: "Vado 10 ML 50-50 (VG/PG) E-Liquid is a well made and well presented e-liquid which can be used in most electronic vaping devises. It comes in a factory sealed 10 ML plastic bottle inside an individual cardboard box.There are many popular flavours; all of which passed my personal taste test.",
            image: PremiumTobaccoImage,
            price: 4,
            priceRange: '£0-£5',
            link1: '/premium%20tobacco',
            link2: '',
            qty: 1
        },
        {
            id: 'EL6',
            type: 'eliquids',
            brand: 'vado',
            model: 'spearmint',
            text: "Spearmint 50-50(VG/PG) E-Juice from Vado is a Classic Spearmint Flavour. Spearmint 50-50(VG/PG) E-Juice from Vado is new to the market but is made by a well established manufacturer (the makers of Oplus). It is a 50-50 (VG/PG) liquid/juice which can be vaped in almost any electronic smoking device. It is well packaged in a 10 ML plastic bottle inside a cardboard box. You can choose from the following nicotine strengths: 3 mg (0.3%), 6 mg (0.6%), 12 mg (1.2%) or 18 mg (1.8%).",
            image: Spearmint1Image,
            price: 4,
            priceRange: '£0-£5',
            link1: '/spearmint1',
            link2: '',
            qty: 1
        },
        {
            id: 'EL7',
            type: 'eliquids',
            brand: 'vado',
            model: 'black ice',
            text: "Black Ice 50-50(VG/PG) E-Juice from Vado is a Classic Black Ice Flavour. Black Ice 50-50(VG/PG) E-Juice from Vado is new to the market but is made by a well established manufacturer (the makers of Oplus). It is a 50-50 (VG/PG) liquid/juice which can be vaped in almost any electronic smoking device. It is well packaged in a 10 ML plastic bottle inside a cardboard box. You can choose from the following nicotine strengths: 3 mg (0.3%), 6 mg (0.6%), 12 mg (1.2%) or 18 mg (1.8%).",
            image: BlackIceImage,
            price: 4,
            priceRange: '£0-£5',
            link1: '/black%20ice',
            link2: '',
            qty: 1
        },
        {
            id: 'EL8',
            type: 'eliquids',
            brand: 'mr cloud',
            model: 'lightning lemon',
            text: "3 x 10ml bottles. 70 / 30 VG / PG Ratio. Lightning Lemon by Mr Cloud delivers a twist of sharp lemon and green berries crafted to deploying a perfect lemon hit.",
            image: LightningLemonImage,
            price: 14,
            priceRange: '£10-£15',
            link1: '/lightning%20lemon',
            link2: '',
            qty: 1
        },
        {
            id: 'EL9',
            type: 'eliquids',
            brand: 'mr cloud',
            model: 'lychee twister',
            text: "3 x 10ml bottles. 70 / 30 VG / PG Ratio. Lychee Twister by Mr Cloud delivers a perfect blend of lychee and watermelon, a twist for your taste buds.",
            image: LycheeTwisterImage,
            price: 14,
            priceRange: '£10-£15',
            link1: '/lychee%20twister',
            link2: '',
            qty: 1
        },
        {
            id: 'EL10',
            type: 'eliquids',
            brand: 'mr cloud',
            model: 'monsoon mango',
            text: "3 x 10ml 3mg bottles. 70/30 VG/PG Ratio. Monsoon Mango by Mr Cloud delivers a perfect blend of ripe mangoes and a hint of cooling mint to give you that perfect full of flavour vape.",
            image: MonsoonMangoImage,
            price: 14,
            priceRange: '£10-£15',
            link1: '/monsoon%20mango',
            link2: '',
            qty: 1
        },
        {
            id: 'EL11',
            type: 'eliquids',
            brand: "pick 'n' mix",
            model: 'vanilla fudge',
            text: "There are some combinations that are just right, this is one of them! A beautiful rich Caramel Fudge mixed with the best Vanilla combines perfectly to make this a special scrumptious treat. A sophisticated and decedent treat, this is one you won’t want to share, so find a nice quiet place, sit back and enjoy this wickedly addictive Vanilla Fudge in a perfect vape -enjoy. You could happily vape this one all day if you wanted! “It is just so creamy and Fudgelicious! *** Voted Best Candy E-liquid at Vape Jam 3 ***",
            image: VanillaFudgeImage,
            price: 4,
            priceRange: '£0-£5',
            link1: '/vanilla%20fudge',
            link2: '',
            qty: 1
        },
        {
            id: 'EL12',
            type: 'eliquids',
            brand: "pick 'n' mix",
            model: 'black jacks',
            text: "BlackJacks are the Ultimate Retro Sweet. This tantalising e juice perfectly replicates the flavour of Black Jacks and one vape of this aniseed retro taste explosion will whisk you straight back to the 90’s. Of course you don’t need to be that old to know about Black Jacks as you can still buy them today. Black Jacks the sweets used to make your tongue go black but we can assure you this doesn’t happen with the e-liquid flavour. Even if they had never been invented this sweet, flavourful aniseed e-liquid would still be awesome.",
            image: BlackJacksImage,
            price: 8,
            priceRange: '£5-£10',
            link1: '/black%20jacks',
            link2: '',
            qty: 1
        },
        {
            id: 'EL13',
            type: 'eliquids',
            brand: "pick 'n' mix",
            model: 'cherry lips',
            text: "Tastes just like your favourite retro cherry chewy sweet. A sweet Cherry taste taking you back through the years to your childhood. This eLiquid has a really good cherry taste and a brilliant smell. How it works: You get 80ml of 0mg e liquid and 2 bottles of 10ml nic shots (included in price). Add both bottles to make 100ml of juice at 3mg Please leave for 24 hours to steep.",
            image: CherryLipsImage,
            price: 8,
            priceRange: '£5-£10',
            link1: '/cherry%20lips',
            link2: '',
            qty: 1
        },
        {
            id: 'EL14',
            type: 'eliquids',
            brand: "pick 'n' mix",
            model: 'foam bananas',
            text: "Foam Bananas 80-100ml 80/20 VG/PG 10ml 1.5mg nicotine shots provided free of charge: 0 x 10ml bottle = 0mg (80ml) 1 x 10ml bottle = 1.5mg (90ml) 2 x 10ml bottles = 3mg (100ml)",
            image: FoamBananasImage,
            price: 8,
            priceRange: '£5-£10',
            link1: '/foam%20bananas',
            link2: '',
            qty: 1
        },
        {
            id: 'EL15',
            type: 'eliquids',
            brand: "pick 'n' mix",
            model: 'sour cherries',
            text: "Sour Cherry E liquid by Pick n Mix 100ml. 80ml 0mg + 2 x 10ml Nic Shots Only £14.95. Premier E Vape are proud to bring you the PICK ‘N’ MIX range from Bowman. I’ve tried so many ‘cherry vapes’ and this is up there with the top ones it really tastes just like it sounds. A lovely tangy non-sweet cherries in vape form.",
            image: SourCherriesImage,
            price: 8,
            priceRange: '£5-£10',
            link1: '/sour%20cherries',
            link2: '',
            qty: 1
        },
        {
            id: 'EL16',
            type: 'eliquids',
            brand: "pick 'n' mix",
            model: 'strawberry belts',
            text: "Strawberry Belts are one of the Ultimate Retro Sweets. A sweet Fizzy sweet Strawberry taste taking you back through the years to your childhood. This eLiquid has a really good Fizzy Strawberry taste and a brilliant smell.",
            image: StrawberryBeltsImage,
            price: 8,
            priceRange: '£5-£10',
            link1: '/strawberry%20belts',
            link2: '',
            qty: 1
        },
        {
            id: 'EL17',
            type: 'eliquids',
            brand: "pick 'n' mix",
            model: 'strawberry milkshake',
            text: "Strawberry Milkshake - Pick 'N' Mix - 80ml + 2x FREE Nic Shots. Strawberry Milkshake  Flavour Profile:  Strawberry Milkshake - A Juicy, Flavoursome Quality, Great Value Juice",
            image: StrawberryMilkshakesImage,
            price: 6,
            priceRange: '£5-£10',
            link1: '/strawberry%20milkshake',
            link2: '',
            qty: 1
        },
        {
            id: 'EL18',
            type: 'eliquids',
            brand: 'vado',
            model: 'strawberry',
            text: "Strawberry 50-50(VG/PG) E-Juice from Vado is a Classic Strawberry Flavour. Strawberry 50-50(VG/PG) E-Juice from Vado is new to the market but is made by a well established manufacturer (the makers of Oplus). It is a 50-50 (VG/PG) liquid/juice which can be vaped in almost any electronic smoking device. It is well packaged in a 10 ML plastic bottle inside a cardboard box. You can choose from the following nicotine strengths: 3 mg (0.3%), 6 mg (0.6%), 12 mg (1.2%) or 18 mg (1.8%).",
            image: StrawberryImage,
            price: 4,
            priceRange: '£0-£5',
            link1: '/strawberry',
            link2: '',
            qty: 1
        },
        {
            id: 'EL19',
            type: 'eliquids',
            brand: 'vado',
            model: 'watermelon',
            text: "Watermelon 50-50(VG/PG) E-Juice from Vado is a Classic Watermelon Flavour. Watermelon 50-50(VG/PG) E-Juice from Vado is new to the market but is made by a well established manufacturer (the makers of Oplus). It is a 50-50 (VG/PG) liquid/juice which can be vaped in almost any electronic smoking device. It is well packaged in a 10 ML plastic bottle inside a cardboard box. You can choose from the following nicotine strengths: 3 mg (0.3%), 6 mg (0.6%), 12 mg (1.2%) or 18 mg (1.8%).",
            image: WatermelonImage,
            price: 8,
            priceRange: '£5-£10',
            link1: '/watermelon',
            link2: '',
            qty: 1
        },
        {
            id: 'EL20',
            type: 'eliquids',
            brand: 'vado',
            model: 'bens g n s',
            text: "Bens G&S 50-50(VG/PG) E-Juice from Vado is a Classic Bens G&S Flavour. Bens G&S 50-50(VG/PG) E-Juice from Vado is new to the market but is made by a well established manufacturer (the makers of Oplus). It is a 50-50 (VG/PG) liquid/juice which can be vaped in almost any electronic smoking device. It is well packaged in a 10 ML plastic bottle inside a cardboard box. You can choose from the following nicotine strengths: 3 mg (0.3%), 6 mg (0.6%), 12 mg (1.2%) or 18 mg (1.8%).",
            image: BensGnSImage,
            price: 4,
            priceRange: '£0-£5',
            link1: '/bens%20g%20n%20s',
            link2: '',
            qty: 1
        },
        {
            id: 'EL21',
            type: 'eliquids',
            brand: 'vado',
            model: 'blackcurrant',
            text: "Blackcurrant 50-50(VG/PG) E-Juice from Vado is a Classic Blackcurrant Flavour. Blackcurrant 50-50(VG/PG) E-Juice from Vado is new to the market but is made by a well established manufacturer (the makers of Oplus). It is a 50-50 (VG/PG) liquid/juice which can be vaped in almost any electronic smoking device. It is well packaged in a 10 ML plastic bottle inside a cardboard box. You can choose from the following nicotine strengths: 3 mg (0.3%), 6 mg (0.6%), 12 mg (1.2%) or 18 mg (1.8%).",
            image: BlackcurrantImage,
            price: 4,
            priceRange: '£0-£5',
            link1: '/blackcurrant',
            link2: '',
            qty: 1
        },
        {
            id: 'B1',
            type: 'batteries',
            brand: 'efest',
            model: '3000mAh 18650',
            text: "High maximum discharge of 35A. Quality brand name. Perfect for sub ohm electronic cigarettes. 3000mAh full capacity even at high current. 2 x batteries and protective case",
            image: Efest3000BatteryImage,
            price: 5,
            priceRange: '£0-£5',
            link1: '/3000',
            link2: '',
            qty: 1
        },
        {
            id: 'B2',
            type: 'batteries',
            brand: 'samsung',
            model: '2500',
            text: "Model: 25R5/25R6/25RM. Manufacturer: Samsung SDI. Country of Origin: South Korea. Chemistry: INR (Hybrid). Max. continuous discharge current: 20A (Rated by Mooch). Nominal capacity: 2500 mAh. Nominal voltage: 3.6 V. Discharge end voltage: 2.5 V. Charging voltage: 4.20 +/- 0.05 V. Standard charging current: 1.5 A. Protection: Not Protected (Flat-Top)",
            image: Samsung2500BatteryImage,
            price: 6,
            priceRange: '£5-£10',
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
};