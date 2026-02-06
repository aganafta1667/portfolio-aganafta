import DataImage from "./data"
import { listTools, listProyek, listEdu, listOrga, listTrain, listPres } from "./data"

function App() {
  return (
    <>
    {/* Hero */}
      <div className="hero grid md:grid-cols-2 items-center pl-3 pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="HeroImage" className="w-10 rounded-md" loading="lazy"/>
            <q>Never stop learning, because life never stops teaching.</q>
          </div>
          <h1 className="md:text-5xl/tight sm:text-3xl/tight text-2xl/tight font-bold mb-3 ">Hello!! <br /> I'm Aga Nafta Filadelfiano</h1>
          <p className="sm:text-base/loose text-sm mb-6 opacity-50">
            Undergraduate Informatics Engineering <br /> Institut Teknologi Sepuluh Nopember
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#" className="bg-violet-700 rounded-2xl p-4 hover:bg-violet-600">
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            {/* <a href="#proyek" className="bg-zinc-700 rounded-2xl p-4 hover:bg-zinc-600">
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a> */}
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="HeroImage" className="w-125 md:ml-auto animate__animated animate__fadeInUp animate__delay-3s" loading="lazy"/>
      </div>

      {/* Tentang */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          
          <p className="text-base/loose mb-10 text-justify">
            I am an undergraduate student in Informatics Engineering at the Institut Teknologi Sepuluh Nopember (ITS), admitted through the National Selection Based on Achievement (SNBP). Throughout my academic journey, I have been able to maintain a balanced commitment between academic excellence and non-academic involvement, particularly through active participation in student organizations (Unit Kegiatan Mahasiswa/UKM). I have a strong interest in technology and organizational leadership. Previously, during my high school years, I was actively involved in various academic and non-academic activities, including science olympiads, music competitions, and student council (OSIS) organizations. I am recognized as a disciplined and responsible individual with a strong learning ethic and the ability to work effectively in a team. I believe that success is not solely measured by achievements, but also by character development and meaningful contributions to the surrounding community.
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-15 rounded-md sm:block hidden" loading="lazy"/>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-1xl font-bold mb-2">Skill & Interest</h1>
                <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
                  <p className="border border-zinc-400 hover:bg-zinc-700 p-2 text-center rounded-lg">Technology</p>
                  <p className="border border-zinc-400 hover:bg-zinc-700 p-2 text-center rounded-lg">Programming</p>
                  <p className="border border-zinc-400 hover:bg-zinc-700 p-2 text-center rounded-lg">Web Development</p>
                  <p className="border border-zinc-400 hover:bg-zinc-700 p-2 text-center rounded-lg">Music</p>
                  <p className="border border-zinc-400 hover:bg-zinc-700 p-2 text-center rounded-lg">Event Management</p>
                  <p className="border border-zinc-400 hover:bg-zinc-700 p-2 text-center rounded-lg">Leadership</p>
                </div>
              </div>
              {/* <div>
                <h1 className="text-4xl mb-1">
                  45<span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  4<span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div> */}
            </div>
          </div>
        </div>
        
        {/* Education */}
        <div className="education mt-32" id="education">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Education</h1>
          <div className="tools-box mt-7 grid md:grid-cols-2 grid-cols-1 gap-4">
            {listEdu.map((edu) => (
              <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={edu.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={edu.dad} data-aos-once="true">
                <img src={edu.gambar} alt="Education Image" className="w-14 mr-3" loading="lazy"/>
                <div>
                  <h4 className="font-bold">{edu.nama}</h4>
                  <p className="opacity-50">{edu.desk}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="experience grid md:grid-cols-2 grid-cols-1">
        {/* Organization */}
        <div className="education mt-32" id="experience">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Organization</h1>
          <div className="tools-box mt-7 grid grid-cols-1 gap-4 mr-4">
            {listOrga.map((orga) => (
              <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={orga.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={orga.dad} data-aos-once="true">
                <img src={orga.gambar} alt="Oraganization Image" className="h-16 mr-3" loading="lazy"/>
                <div>
                  <h4 className="font-bold">{orga.nama}</h4>
                  <p className="opacity-50">{orga.desk}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trainings */}
        <div className="education mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Trainings</h1>
          <div className="tools-box mt-7 grid grid-cols-1 gap-4">
            {listTrain.map((train) => (
              <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={train.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={train.dad} data-aos-once="true">
                <img src={train.gambar} alt="Oraganization Image" className="h-16 mr-3" loading="lazy"/>
                <div>
                  <h4 className="font-bold">{train.nama}</h4>
                  <p className="opacity-50">{train.desk}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>

        {/* Achievments */}
        <div className="education mt-32" id="achievments">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Achievments</h1>
          <div className="tools-box mt-7 grid md:grid-cols-2 grid-cols-1 gap-4">
            {listPres.map((pres) => (
              <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={pres.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={pres.dad} data-aos-once="true">
                <img src={pres.gambar} alt="Achievments Image" className="w-14 mr-3" loading="lazy"/>
                <div>
                  <h4 className="font-bold">{pres.nama}</h4>
                  <p className="opacity-50">{pres.desk}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Tools */}
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools Used</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Below are some of the tools I use for website development and design.</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
                <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy"/>
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Proyek */}
      {/* <div className="proyek mt-32 py-10" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Proyek</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut ini beberapa proyek yang telah saya buat</p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map ((proyek) => (
            <div key={proyek.id} className="bg-zinc-800 p-4 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy"/>
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a href="#" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600">Lihat Website</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className="text-4xl font-bold text-center mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Contact</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" >Let’s get in touch</p>
        <form action="https://formsubmit.co/fldlfianonafta@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Full Name</label>
              <input type="text" name="nama" placeholder="Enter your name" className="border border-zinc-500 p-2 rounded-md" required/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Enter your email"  className="border border-zinc-500 p-2 rounded-md" required/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Message</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Message..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App
