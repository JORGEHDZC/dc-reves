"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { es } from "date-fns/locale";

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const availableTimeslots = [
    { time: "9:00 AM", available: true },
    { time: "10:00 AM", available: true },
    { time: "11:00 AM", available: true },
    { time: "12:00 PM", available: false },
    { time: "1:00 PM", available: true },
    { time: "2:00 PM", available: true },
    { time: "3:00 PM", available: true },
    { time: "4:00 PM", available: false },
  ];
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };
  const handleConfirm = () => {
    setIsConfirmed(true);
  };
  const handleCancel = () => {
    setSelectedTime(null);
    setIsConfirmed(false);
  };
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-[#343434] text-white py-12 md:py-20 lg:py-28">
          <Card className="max-w-xl mx-auto bg-[#C5B475]">
            <CardHeader className="text-[#343434]">
              <CardTitle>Agenda una cita</CardTitle>
              <CardDescription className="text-[#343434]">
                Selecciona tu dia y hora
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="date">Fecha</Label>
                <Calendar
                  locale={es}
                  mode="single"
                  value={selectedDate}
                  onValueChange={handleDateChange}
                  className="bg-[#343434] text-[#C5B475] p-0 [&_td]:w-10 [&_td]:h-10 [&_th]:w-10 [&_[name=day]]:w-10 [&_[name=day]]:h-10 [&>div]:space-x-0 [&>div]:gap-6 "
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="time">Horarios disponible</Label>
                <div className="grid grid-cols-3 gap-2 text-[#343434]">
                  {availableTimeslots.map((timeslot, index) => (
                    <Button
                      key={index}
                      variant={
                        selectedTime === timeslot.time
                          ? "primary"
                          : timeslot.available
                          ? "outline"
                          : "ghost"
                      }
                      disabled={!timeslot.available}
                      onClick={() => handleTimeSelect(timeslot.time)}
                      className="justify-start bg-[#343434] text-[#C5B475]"
                    >
                      {timeslot.time}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              {!isConfirmed ? (
                <div className="flex gap-4">
                  <Button
                    disabled={selectedTime === null}
                    onClick={handleConfirm}
                  >
                    Confirmar Cita
                  </Button>
                  <Button variant="outline" onClick={handleCancel}>
                    Cancelar
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-4">
                  <CheckIcon className="w-8 h-8 text-green-500" />
                  <div className="text-center">
                    <h3 className="font-semibold">Cita Confirmada</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Tu cita está agendada para{" "}
                      {selectedDate.toLocaleDateString()} a las {selectedTime}.
                    </p>
                  </div>
                </div>
              )}
            </CardFooter>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
