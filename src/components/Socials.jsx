const Socials = ({name, icon, link}) => {
  return (
    <a href={link}>
        <div className="hover:text-[#9B53FB] transition duration-300 hover:translate-x-0.5 rounded-lg px-4 py-3 orbitron cursor-pointer xs:min-w-60 bg-[#9B53FB]/5">
            <div className="flex items-center gap-3">
                <img className="w-6" src={icon} alt="social icon" />
                <p className="text-lg">{name}</p>
            </div>
        </div>
    </a>
  )
}

export default Socials