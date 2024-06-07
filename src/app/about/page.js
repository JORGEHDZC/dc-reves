"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  //C5B475
  //343434
  const phone = "5539088830";
  return (
    <>
      <Header />

      <section className="bg-[#343434] text-[#C5B475] py-12 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Acerca de Nosotros
          </h2>
          <p className="mt-4 text-lg md:text-xl">
            Somos un equipo de barberos apasionados por nuestro oficio. Nos
            enorgullece ofrecer un servicio de alta calidad en un ambiente
            acogedor y relajante.
          </p>
          <div className="flex items-center justify-center ">
            <Image
              src="/dc-reves.jpg"
              width={2000}
              height={2000}
              alt="Barbershop"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#C5B475] text-[#343434] py-2 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold">Nuestra Historia</h3>
              <p className="mt-4 text-[#343434]">
                Nuestro Barbershop fue fundado hace más de 50 años por un grupo
                de amigos que compartían la pasión por el arte del corte de
                cabello y el afeitado. Desde entonces, hemos trabajado
                incansablemente para mantener viva esta tradición y brindar a
                nuestros clientes una experiencia única.
              </p>
              <Image
                src="/history.jpg"
                width={2000}
                height={2000}
                alt="Barbershop"
                className="rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold">Nuestro Compromiso</h3>
              <p className="mt-4 text-[#343434]">
                Nos comprometemos a ofrecer un servicio excepcional a cada uno
                de nuestros clientes. Nos esforzamos por mantener un ambiente
                acogedor y relajante, donde nuestros barberos puedan brindar su
                mejor trabajo y nuestros clientes puedan disfrutar de una
                experiencia única.
              </p>
              <Image
                src="/service.jpg"
                width={2000}
                height={2000}
                alt="Barbershop"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#343434] py-12 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-[#C5B475]">
            Contacto
          </h2>
          <p className="mt-4 text-lg md:text-xl text-[#C5B475]">
            Si tienes alguna pregunta o necesitas una cotización para un evento,
            no dudes en comunicarte con nosotros.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold text-[#C5B475]">Dirección</h3>
              <p className="mt-4 text-[#C5B475]">
                Cozamaloc 1 Av.Peñon, Xochitenco 1A Seccion, Chimalhuacan, MEX,
                Estado de México 56360
              </p>
            </div>
            <div>
              <div>
                <h3 className="text-xl font-bold text-[#C5B475]">Contacto</h3>
                <p className="mt-4 text-[#C5B475]">
                  Teléfono: <span className="font-bold">+52 55 3908 8830</span>
                  <br />
                  Correo: <span className="font-bold">info@barbershop</span>
                </p>
              </div>
              <div className="py-2">
                <Link
                  href={`https://wa.me/5539088830?text=Me%20gustaria%20preguntar%20sobre%20este%20servicio:`}
                  className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2 text-white hover:bg-[#25D366]/90 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
                  prefetch={false}
                >
                  <PhoneIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
function PhoneIcon(props) {
  return (
    <svg
      {...props}
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z"
        fill="#ffffff"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"
        fill="#ffffff"
      />
    </svg>
  );
}
