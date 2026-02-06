const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="font-bold text-2xl">Portfolio</h1>
        <div className="flex gap-7">
            <a href="#beranda">Home</a>
            <a href="#tentang">About</a>
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#achievments">Achievments</a>
        </div>
        <div className="flex items-center gap-3">
            <a href="#">
                <i className="ri-github-fill ri-2x"></i>
            </a>
            <a href="#">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>
            <a href="#">
                <i className="ri-linkedin-fill ri-2x"></i>
            </a>
        </div>
    </div>

  )
}

export default Footer