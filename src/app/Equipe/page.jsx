import Footer from "../Components/Footer/Footer";
import Navbar2 from "../Components/Navbar/Navbar";

const Teams = () => {
  return (
    <>
      <Navbar2 />

      <section className="mt-[60px] text-[#20252C] py-[90px] px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-[AmaticBold] text-[8rem] text-center leading-[5.5rem]">
            Notre équipe
          </h1>

          <h2 className=" text-[2.5rem] text-center leading-[5.5rem] mt-[30px] uppercase">
            Les communicants
          </h2>
          <div className="flex flex-wrap justify-center gap-6 my-[30px]">
            <div>
              <img
                src="./img/equipe/pauline-polaroid.png"
                className="w-[250px]"
                alt=""
              />
              <p className="relative bottom-[12%] left-[22%]">
                Pauline Gazengel
              </p>
            </div>
            <div>
              <img
                src="./img/equipe/solene-polaroid.png"
                className="w-[250px]"
                alt=""
              />
              <p className="relative bottom-[12%] left-[24%]">Solène Jeannin</p>
            </div>
            <div>
              <img
                src="./img/equipe/andrea-polaroid.png"
                className="w-[250px]"
                alt=""
              />
              <p className="relative bottom-[12%] left-[24%]">Andréa Laizeau</p>
            </div>
            <div>
              <img
                src="./img/equipe/hugo-polaroid.png"
                className="w-[250px]"
                alt=""
              />
              <p className="relative bottom-[12%] left-[24%]">Hugo Payeux</p>
            </div>
          </div>

          <h2 className="text-[2.5rem] text-center leading-[5.5rem] mt-[30px] uppercase">
            Les développeurs
          </h2>
          <div className="flex flex-wrap justify-center gap-6 my-[30px]">
            <div>
              <img
                src="./img/equipe/daria-polaroid.png"
                className="w-[250px]"
                alt=""
              />
              <p className="relative bottom-[12%] left-[24%]">Daria Iarovaia</p>
            </div>

            <div>
              <img
                src="./img/equipe/waldi-polaroid.png"
                className="w-[250px]"
                alt=""
              />
              <p className="relative bottom-[12%] left-[29%]">Waldi Fiaga</p>
            </div>

            <div>
              <img
                src="./img/equipe/arthur-polaroid.png"
                className="w-[250px]"
                alt=""
              />
              <p className="relative bottom-[12%] left-[24%]">Arthur Zachary</p>
            </div>

            <div>
              <img
                src="./img/equipe/manu-polaroid.png"
                className="w-[250px]"
                alt=""
              />
              <p className="relative bottom-[12%] left-[18%]">
                Manu Teao Hereveri
              </p>
            </div>

            <div>
              <img
                src="./img/equipe/caroline-polaroid.png"
                className="w-[250px]"
                alt=""
              />
              <p className="relative bottom-[12%] left-[24%]">Caroline Doung</p>
            </div>

            <div>
              <img
                src="./img/equipe/neroli-polaroid.png"
                className="w-[250px]"
                alt=""
              />
              <p className="relative bottom-[12%] left-[32%]">Néroli Prak</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Teams;
