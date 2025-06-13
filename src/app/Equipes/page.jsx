import Footer from "../Components2/Footer/Footer";
import Navbar2 from "../Components2/Navbar/Navbar2";

const Teams = () => {
  return (
    <>
      <Navbar2 />

      <section className="mt-[60px] text-[#20252C] py-[90px] px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-[AmaticBold] text-[8rem] text-center leading-[5.5rem]">
            Notre équipe
          </h1>

          <h2 className=" text-[2.5rem] text-center leading-[5.5rem] mt-[30px]">
            LES COMMUNICANTS
          </h2>
          <div className="flex flex-wrap justify-center gap-6 my-[30px]">
            <div>
              <img
                src="./img/pauline-polaroid.png"
                className="w-[250px]"
                alt="Pauline"
              />
              <p className="relative bottom-[12%] left-[22%]">
                Pauline Gazengel
              </p>
            </div>
            <div>
              <img
                src="./img/solene-polaroid.png"
                className="w-[250px]"
                alt="Solene"
              />
              <p className="relative bottom-[12%] left-[24%]">Solène Jeannin</p>
            </div>
            <div>
              <img
                src="./img/andrea-polaroid.png"
                className="w-[250px]"
                alt="Andréa"
              />
              <p className="relative bottom-[12%] left-[24%]">Andréa Laizeau</p>
            </div>
            <div>
              <img
                src="./img/hugo-polaroid.png"
                className="w-[250px]"
                alt="Andréa"
              />
              <p className="relative bottom-[12%] left-[24%]">Hugo Payeux</p>
            </div>
          </div>

          <h2 className="text-[2.5rem] text-center leading-[5.5rem] mt-[30px]">
            LES DÉVELOPPEURS
          </h2>
          <div className="flex flex-wrap justify-center gap-6 my-[30px]">
            <div>
              <img
                src="./img/daria-polaroid.png"
                className="w-[250px]"
                alt="Daria"
              />
              <p className="relative bottom-[12%] left-[24%]">Daria Iarovaia</p>
            </div>

            <div>
              <img
                src="./img/waldi-polaroid.png"
                className="w-[250px]"
                alt="waldi"
              />
              <p className="relative bottom-[12%] left-[29%]">Waldi Fiaga</p>
            </div>

            <div>
              <img
                src="./img/arthur-polaroid.png"
                className="w-[250px]"
                alt="arthur"
              />
              <p className="relative bottom-[12%] left-[24%]">Arthur Zachary</p>
            </div>

            <div>
              <img
                src="./img/manu-polaroid.png"
                className="w-[250px]"
                alt="manu"
              />
              <p className="relative bottom-[12%] left-[18%]">
                Manu TEAO HEREVERI
              </p>
            </div>

            <div>
              <img
                src="./img/caroline-polaroid.png"
                className="w-[250px]"
                alt="caroline"
              />
              <p className="relative bottom-[12%] left-[24%]">Caroline Doung</p>
            </div>

            <div>
              <img
                src="./img/neroli-polaroid.png"
                className="w-[250px]"
                alt="Néroli"
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
