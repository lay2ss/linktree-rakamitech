import LightRays from "./LightRays"
import BorderGlow from "./BorderGlow"
import logo from "../assets/R_logo.png";
import Socials from "./Socials";
import GradientText from "./GradientText";
import Heart from '../assets/heart.png'
import tiktok from '../assets/purple_ttk.svg'
import insta from '../assets/purple_insta.svg'
import wpp from '../assets/purple_wpp.svg'

const Card = () => {

const socials = [
    {
        id: 1,
        name: "Instagram",
        link: "https://www.instagram.com/rakamitech",
        icon: insta,
    },
    {
        id: 2,
        name: "TikTok",
        link: "https://www.tiktok.com/@rakamitech",
        icon: tiktok,
    },
    {
        id: 3,
        name: "WhatsApp",
        link: "https://wa.me/message/PUKQDB62FKMIA1",
        icon: wpp,
    },
];

  return (
    <main className="px-5">
        <div style={{ width: '100%', height: '95vh', position: 'relative' }}>
            <div className="flex w-full justify-center items-center h-full absolute z-2">
                <BorderGlow
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor="#00000"
                borderRadius={28}
                glowRadius={40}
                glowIntensity={1}
                coneSpread={25}
                animated
                colors={['#c084fc', '#f472b6', '#31267e']}
                >
                <div className="p-10 xs:px-18 xs:py-30">
                    <div className="flex items-center flex-col">
                        <img className="w-40" src={logo} alt="logo" />
                        <h1 className="orbitron text-2xl pt-3 font-semibold">Rakami Tech</h1>
                            <div className="fredoka text-lg tracking-wide max-w-50 text-center">Transformando ideais em
                                <GradientText
                                    colors={["#5227FF","#FF9FFC","#B497CF"]}
                                    animationSpeed={8}
                                    showBorder={false}
                                    className="pl-2"
                                    >
                                    impressão 3d
                                    </GradientText>
                                </div>
                        <div className="flex gap-3 flex-col pt-5">
                            {socials.map((item) => (<Socials key={item.id} name={item.name} icon={item.icon} link={item.link}/>))}
                        </div>
                    </div>
                    
                </div>
                </BorderGlow>
            </div>
            <LightRays
                raysOrigin="top-center"
                raysColor="#9B53Fb"
                raysSpeed={1}
                lightSpread={0.5}
                rayLength={3}
                followMouse={true}
                mouseInfluence={0.1}
                noiseAmount={0}
                distortion={0}
                className="custom-rays"
                pulsating={false}
                fadeDistance={1}
                saturation={1}
            />
            </div>
            <p className="fredoka font-light opacity-50 text-sm flex gap-2 items-center justify-center">Made with <img className="w-4 h-min" src={Heart} alt="heart icon" /> by <a href="https://github.com/lay2ss">@lay2ss</a></p>
    </main>
  )
}

export default Card