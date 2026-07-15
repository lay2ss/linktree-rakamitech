import BorderGlow from "./BorderGlow";
import ColorBends from "./ColorBends";
import logo from "../assets/R_logo.png";
import Socials from "./Socials";
import GradientText from "./GradientText";
import Heart from '../assets/heart.png';
import tiktok from '../assets/purple_ttk.svg';
import insta from '../assets/purple_insta.svg';
import wpp from '../assets/purple_wpp.svg';

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
    <main>
        <div style={{ width: '100%', height: '95vh', position: 'relative' }}>
            <div className="flex w-full justify-center items-center h-full absolute z-2 px-5">
                <BorderGlow
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor="#04000f"
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
                                    colors={["#9B53FB","#FF9FFC","#B497CF"]}
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
            <ColorBends
            colors={["", "", "#A855F7"]}
            rotation={90}
            speed={0.2}
            scale={1}
            frequency={1}
            warpStrength={1}
            mouseInfluence={1}
            noise={0.15}
            parallax={0.5}
            iterations={1}
            intensity={1.5}
            bandWidth={6}
            transparent
            autoRotate={0}
            color="#A855F7"
            />
            </div>
            <footer className="mt-2 fredoka font-light opacity-70 text-sm flex gap-2 items-center justify-center">Made with <img className="w-4 h-min" src={Heart} alt="heart icon" /> by <a href="https://github.com/lay2ss">@lay2ss</a></footer>
    </main>
  )
}

export default Card