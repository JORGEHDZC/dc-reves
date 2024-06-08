import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Main() {
  return (
    <main className="flex-1">
      <section className="bg-[#343434] text-white py-12 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-[#C5B475]">
                Bienvenido a nuestro Barber Shop
              </h1>
              <p className="mt-4 text-lg md:text-xl text-[#C5B475]">
                En DC’S Rêves ofrecemos un servicio de corte de cabello y
                afeitado de primera calidad en un ambiente acogedor y relajante.
              </p>
              <div className="py-5">
                <Link href="/booking">
                  <Button
                    size="lg"
                    className="bg-[#C5B475] text-[#343434] hover:bg-[#646E78]/90"
                  >
                    Agendar cita
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/homeSplash.jpg"
                width={2000}
                height={2000}
                alt="Barbershop"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 lg:py-28  bg-[#C5B475]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-[#343434]">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-lg md:text-xl text-[#343434]">
            Descubre todos los servicios que ofrecemos en nuestro Barbershop.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className=" bg-[#343434]">
              <CardContent className="flex flex-col items-center gap-4 p-6 ">
                <ScissorsIcon className="w-12 h-12 text-[#C5B475] " />
                <h3 className="text-xl font-bold text-[#C5B475]">
                  Corte de Cabello
                </h3>
                <p className="text-center text-[#C5B475]">
                  Nuestros expertos barberos te ofrecen un corte de cabello
                  personalizado y de alta calidad.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#343434]">
              <CardContent className="flex flex-col items-center gap-4 p-6  ">
                <RaizorIcon className="w-12 h-12 text-[#C5B475] " />
                <h3 className="text-xl font-bold text-[#C5B475]">Afeitado</h3>
                <p className="text-center text-[#C5B475]">
                  Disfruta de un afeitado clásico y suave con nuestra
                  tradicional navaja.
                </p>
              </CardContent>
            </Card>
            <Card className=" bg-[#343434]">
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <TowelIcon className="w-12 h-12 text-[#C5B475] " />
                <h3 className="text-xl font-bold text-[#C5B475]">Masaje</h3>
                <p className="text-center text-[#C5B475]">
                  Relájate con un masaje de cuero cabelludo para una experiencia
                  completa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-[#343434] py-12 md:py-20 lg:py-28 ">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-[#C5B475]">
            Conoce a Nuestros Barberos
          </h2>
          <p className="mt-4 text-lg md:text-xl text-[#C5B475]">
            Nuestro equipo de expertos está listo para atenderte.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-[#C5B475]">
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <Image
                  src="/profile1.jpg"
                  width={120}
                  height={120}
                  alt="Barber 1"
                  className="rounded-full"
                />
                <h3 className="text-xl font-bold text-[#343434]">John Doe</h3>
                <p className="text-[#343434] text-center">
                  Experto en cortes de cabello y afeitado.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#C5B475]">
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <Image
                  src="/profile2.jpg"
                  width={120}
                  height={120}
                  alt="Barber 2"
                  className="rounded-full"
                />
                <h3 className="text-xl font-bold text-[#343434]">Jane Smith</h3>
                <p className="text-[#343434] text-center">
                  Especialista en cortes de cabello.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#C5B475]">
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <Image
                  src="/profile3.jpg"
                  width={120}
                  height={120}
                  alt="Barber 3"
                  className="rounded-full"
                />
                <h3 className="text-xl font-bold text-[#343434]">
                  Michael Johnson
                </h3>
                <p className="text-[#343434] text-center">
                  Maestro en el arte del afeitado.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#C5B475]">
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <Image
                  src="/profile4.jpg"
                  width={120}
                  height={120}
                  alt="Barber 4"
                  className="rounded-full"
                />
                <h3 className="text-xl font-bold text-[#343434]">
                  Emily Davis
                </h3>
                <p className="text-[#343434] text-center">
                  Experta en cortes de cabello y masajes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-[#C5B475] py-12 md:py-20 lg:py-28">
        <div className="text-[#343434] container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-[#343434]">
            Ubicación
          </h2>
          <p className="mt-4 text-lg md:text-xl text-[#343434]">
            Visítanos en nuestro local.
          </p>

          <p className="mt-4 text-lg md:text-xl text-[#343434] font-bold">
            Cozamaloc 1 Av.Peñon, Xochitenco 1A Seccion, Chimalhuacan, MEX,
            Estado de México 56360
          </p>

          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d940.6610075302029!2d-98.9634839!3d19.4277805!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e3307aa602c1%3A0xf2beb1371a9ae31d!2sDC&#39;S%20REVES%20Barber%20Shop!5e0!3m2!1sen!2smx!4v1717574146068!5m2!1sen!2smx"
              width="100%"
              height="400"
              style={{ border: "0" }}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function TowelIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="#C5B475"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 235.762 235.762"
    >
      <path
        d="M0,209.823c0,12.652,14.949,20.731,25.245,20.731h189.791c11.43,0,20.727-9.297,20.727-20.731
			c0-5.181-1.904-9.918-5.059-13.558c3.154-3.636,5.059-8.378,5.059-13.554c0-5.609-2.259-10.683-5.89-14.417
			c3.5-3.364,5.89-7.663,5.89-12.693v-27.116c0-12.652-14.948-20.729-25.244-20.729H20.727C9.294,107.756,0,117.053,0,128.485
			c0,5.181,1.907,9.922,5.062,13.558C1.907,145.678,0,150.42,0,155.596c0,5.609,2.257,10.688,5.888,14.421
			C2.39,173.377,0,177.675,0,182.707V209.823z M215.036,176.323c3.523,0,6.39,2.87,6.39,6.389c0,3.52-2.866,6.385-6.39,6.385H43.318
			v14.337h171.718c3.523,0,6.39,2.871,6.39,6.39c0,3.523-2.866,6.394-6.39,6.394H25.245c-4.91,0-10.907-4.284-10.907-6.394v-27.111
			c0-2.104,5.997-6.389,10.907-6.389h185.273H215.036z M20.727,161.985c-3.521,0-6.389-2.865-6.389-6.389
			c0-3.52,2.868-6.385,6.389-6.385h171.716v-14.337H20.727c-3.521,0-6.389-2.866-6.389-6.39s2.868-6.39,6.389-6.39h189.792
			c4.91,0,10.907,4.28,10.907,6.39v27.111c0,2.109-5.997,6.389-10.907,6.389H25.245H20.727z"
      />
      <path
        d="M63.883,8.625c-6.261,10.312-6.877,20.617-3.79,32.119c3.125,11.651,13.021,24.799,3.321,35.724
			c-6.116,6.886,3.986,17.065,10.137,10.137c8.067-9.085,9.936-18.563,7.115-30.271c-3.398-14.104-13.061-26.208-4.401-40.48
			C81.072,7.932,68.671,0.733,63.883,8.625z"
      />
      <path
        d="M116.453,8.625c-6.261,10.312-6.877,20.617-3.79,32.119c3.125,11.651,13.021,24.799,3.32,35.724
			c-6.116,6.886,3.986,17.065,10.14,10.137c8.064-9.085,9.932-18.563,7.112-30.271c-3.397-14.104-13.061-26.208-4.401-40.48
			C133.642,7.932,121.242,0.733,116.453,8.625z"
      />
      <path
        d="M164.244,8.625c-6.263,10.312-6.879,20.617-3.789,32.119c3.127,11.651,13.021,24.799,3.323,35.724
			c-6.119,6.886,3.985,17.065,10.137,10.137c8.064-9.085,9.932-18.563,7.112-30.271c-3.397-14.104-13.059-26.208-4.401-40.48
			C181.433,7.932,169.033,0.733,164.244,8.625z"
      />
    </svg>
  );
}

function RaizorIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="#C5B475"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 512 512"
    >
      <path
        d="M149.333,358.426c-5.888,0-10.667,4.779-10.667,10.667c0,5.888,4.779,10.667,10.667,10.667S160,374.981,160,369.093
    S155.221,358.426,149.333,358.426z"
      />
      <path
        d="M405.333,123.76c-5.888,0-10.667,4.779-10.667,10.667s4.779,10.667,10.667,10.667c5.888,0,10.667-4.779,10.667-10.667
    S411.221,123.76,405.333,123.76z"
      />
      <path
        d="M480.235,113.114h-18.965c5.291-7.616,12.416-18.88,17.109-26.389c1.792-2.901,2.112-6.485,0.832-9.643
    s-3.989-5.504-7.296-6.336c-29.739-7.445-61.056,1.835-81.813,24.192c-3.712,4.011-9.621,10.283-17.152,18.155H74.667
    C33.493,113.093,0,146.586,0,187.76c0,5.888,4.779,10.667,10.667,10.667h256c5.888,0,10.581-4.437,10.603-10.325
    c0.149-0.299,3.605-5.739,30.144-9.664c-60.373,57.728-142.784,129.6-217.451,170.923c-13.163,7.296-22.336,19.947-25.088,34.709
    c-2.773,14.784,1.173,29.888,10.816,41.451l0.043,0.064c9.899,11.883,24.192,18.197,38.699,18.197
    c8.512,0,17.088-2.176,24.896-6.699c65.003-37.397,189.12-136.853,280.256-262.08c11.243,0.256,22.101,0.576,31.915,0.853
    c10.752,0.341,20.352,0.64,28.181,0.768h0.555c8.384,0,16.277-3.221,22.272-9.088c6.123-6.037,9.493-14.08,9.493-22.656
    C512,127.365,497.749,113.114,480.235,113.114z M258.859,177.093H22.4c4.971-24.32,26.496-42.667,52.267-42.667h277.483
    c-6.315,6.4-13.035,13.12-20.096,20.075C300.032,156.528,268.352,161.178,258.859,177.093z M432.171,118.106
    c-8.747,13.952-17.728,27.371-26.709,39.851c-0.043,0.043-0.021,0.128-0.064,0.171
    C316.096,282.65,192.853,381.701,128.683,418.629c-12.16,6.997-27.52,4.181-36.565-6.699l-0.043-0.064
    c-5.547-6.677-7.829-15.36-6.229-23.851c1.6-8.491,6.869-15.787,14.464-19.989c127.701-70.677,276.843-227.776,305.429-258.56
    c11.904-12.821,28.48-19.861,45.589-19.904c-5.099,7.872-9.557,14.507-10.88,16c-0.619,0.619-1.152,1.28-1.6,2.027
    c-2.133,3.541-4.459,6.976-6.656,10.496C432.192,118.106,432.171,118.106,432.171,118.106z M487.552,152.282
    c-2.027,1.984-4.672,2.645-7.509,2.987c-7.744-0.128-17.259-0.427-27.904-0.747c-5.675-0.149-11.669-0.341-17.899-0.512
    c0.064-0.085,0.107-0.171,0.171-0.256c4.309-6.336,8.469-12.757,12.587-19.2c0.043-0.043,0.064-0.107,0.107-0.149h33.131
    c5.76,0,10.432,4.672,10.432,10.432C490.667,147.674,489.557,150.298,487.552,152.282z"
      />
      <path
        d="M298.667,241.093c-5.888,0-10.667,4.779-10.667,10.667c0,5.888,4.779,10.667,10.667,10.667s10.667-4.779,10.667-10.667
    C309.333,245.872,304.555,241.093,298.667,241.093z"
      />
    </svg>
  );
}

function ScissorsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 409.281 409.281"
      fill="#C5B475"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M403.281,395.304c-14.939,0-27.202-11.646-28.208-26.334c17.17-8.072,29.09-25.528,29.09-45.723
		c0-27.846-22.654-50.5-50.5-50.5c-13.046,0-24.952,4.973-33.923,13.123l-39.112-67.744c2.118-2.559,5.479-6.4,9.525-10.243
		c8.431-8.006,16.269-12.592,22.069-12.914c1.914-0.106,3.663-1.122,4.704-2.731c11.09-17.139,85.237-174.026,88.388-180.697
		c1.364-2.887,0.229-6.336-2.584-7.848c-2.813-1.51-6.314-0.556-7.972,2.174L273.39,206.015L152.021,5.866
		c-1.656-2.729-5.158-3.685-7.972-2.174c-2.813,1.512-3.948,4.961-2.584,7.848c3.15,6.671,77.298,163.559,88.388,180.697
		c1.041,1.609,2.79,2.625,4.704,2.731c5.801,0.322,13.639,4.908,22.069,12.914c4.046,3.843,7.407,7.684,9.525,10.243l-39.112,67.744
		c-8.971-8.149-20.877-13.123-33.923-13.123c-27.846,0-50.5,22.654-50.5,50.5s22.654,50.5,50.5,50.5s50.5-22.654,50.5-50.5
		c0-10.224-3.063-19.741-8.306-27.701l38.081-65.958l38.081,65.958c-5.243,7.96-8.306,17.478-8.306,27.701
		c0,27.846,22.654,50.5,50.5,50.5c3.337,0,6.597-0.334,9.755-0.954c2.809,19.487,19.611,34.511,39.863,34.511c3.313,0,6-2.687,6-6
		S406.595,395.304,403.281,395.304z M342.254,115.595c-15.275,31.484-28.591,58.342-34.005,67.797
		c-3.031,0.567-6.045,1.653-8.98,3.091L342.254,115.595z M238.53,183.392c-5.414-9.455-18.729-36.313-34.005-67.797l42.985,70.888
		C244.575,185.045,241.562,183.959,238.53,183.392z M193.115,361.747c-21.229,0-38.5-17.271-38.5-38.5s17.271-38.5,38.5-38.5
		s38.5,17.271,38.5,38.5S214.344,361.747,193.115,361.747z M315.164,323.247c0-21.229,17.271-38.5,38.5-38.5s38.5,17.271,38.5,38.5
		s-17.271,38.5-38.5,38.5S315.164,344.476,315.164,323.247z"
      />
      <path
        d="M107.779,13.978c3.313,0,6-2.687,6-6s-2.687-6-6-6H28.227C12.662,1.978,0,14.64,0,30.204V349.56
		c0,15.563,12.662,28.226,28.227,28.226h79.553c3.313,0,6-2.687,6-6s-2.687-6-6-6H34.227v-11.279h73.553c3.313,0,6-2.687,6-6
		s-2.687-6-6-6H34.227v-12.403h73.553c3.313,0,6-2.687,6-6s-2.687-6-6-6H34.227v-12.404h73.553c3.313,0,6-2.687,6-6s-2.687-6-6-6
		H34.227v-12.403h73.553c3.313,0,6-2.687,6-6s-2.687-6-6-6H34.227v-12.403h73.553c3.313,0,6-2.687,6-6s-2.687-6-6-6H34.227v-12.404
		h73.553c3.313,0,6-2.687,6-6s-2.687-6-6-6H34.227v-12.403h73.553c3.313,0,6-2.687,6-6s-2.687-6-6-6H34.227V183.68h73.553
		c3.313,0,6-2.687,6-6s-2.687-6-6-6H34.227v-12.403h73.553c3.313,0,6-2.687,6-6s-2.687-6-6-6H34.227v-12.404h73.553
		c3.313,0,6-2.687,6-6s-2.687-6-6-6H34.227v-12.403h73.553c3.313,0,6-2.687,6-6s-2.687-6-6-6H34.227V86.064h73.553
		c3.313,0,6-2.687,6-6s-2.687-6-6-6H34.227V61.661h73.553c3.313,0,6-2.687,6-6s-2.687-6-6-6H34.227V37.257h73.553
		c3.313,0,6-2.687,6-6s-2.687-6-6-6H34.227V13.978H107.779z M12,349.56V30.204c0-6.827,4.243-12.671,10.227-15.063v349.481
		C16.243,362.23,12,356.386,12,349.56z"
      />
    </svg>
  );
}
