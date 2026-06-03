import { useState } from "react";
import type { manicuristas, servicios } from "../../interfaces/servicios";

interface serviciosProps {
    selectedService: number;
     manicuristas?: manicuristas[];
     servicios: servicios[]
}
export const useCitas = ({ selectedService, manicuristas, servicios }: serviciosProps) => {
    const steps = [
          "Servicio",
          "Estilista",
          "Fecha y hora",
          "Datos",
        ];
    
        const [step, setStep] = useState(0);
        const [selectedDate, setSelectedDate] = useState<Date | null>(null);
        // selectedTime stores 'HH:mm'
        const [selectedTime, setSelectedTime] = useState<string | null>(null);
    
        // Estados para selección real
        const [selectedServiceId, setSelectedServiceId] = useState<number>(selectedService ?? 0);
        const [selectedManicuristaId, setSelectedManicuristaId] = useState<number | null>(null);
        const [clientName, setClientName] = useState<string>('');
        const [clientPhone, setClientPhone] = useState<string>('');
    
        // Datos quemados: citas ya agendadas (ISO: YYYY-MM-DDTHH:mm:SS)
        const [bookedAppointments, setBookedAppointments] = useState<string[]>([
          '2026-05-24T09:00:00',
          '2026-05-24T10:30:00',
          '2026-05-25T13:00:00',
        ]);
    
        // Genera ranuras cada 30 minutos entre 09:00 y 17:00
        const generateSlots = () => {
          const slots: string[] = [];
          for (let h = 9; h <= 16; h++) {
            slots.push(`${h.toString().padStart(2, '0')}:00`);
            slots.push(`${h.toString().padStart(2, '0')}:30`);
          }
          // incluir 17:00 como última opción
          slots.push('17:00');
          return slots;
        };
    
        const formatDate = (d: Date) => {
          const y = d.getFullYear();
          const m = (d.getMonth() + 1).toString().padStart(2, '0');
          const day = d.getDate().toString().padStart(2, '0');
          return `${y}-${m}-${day}`;
        };
    
        const handleSelectSlot = (slot: string) => {
          if (!selectedDate) return;
          const dateStr = formatDate(selectedDate);
          const iso = `${dateStr}T${slot}:00`;
          // Si ya está reservado, no hacer nada
          if (bookedAppointments.includes(iso)) return;
          // Seleccionar y marcar como reservado (simula agendado)
          setSelectedTime(slot);
          setBookedAppointments((prev) => [...prev, iso]);
        };
    
        const handleNext = () => {
          setStep((prevStep) => prevStep + 1);
        };
    
        // Nombres resueltos para mostrar en modal
        const serviceName = servicios.find(s => s.id === selectedServiceId)?.nombre ?? '';
        const stylistName = manicuristas?.find(m => m.id === selectedManicuristaId)?.nombre ?? '';
  return (
 {
    steps,
    step,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    selectedServiceId,
    setSelectedServiceId,
    selectedManicuristaId,
    setSelectedManicuristaId,
    clientName,
    setClientName,
    clientPhone,
    setClientPhone,
    bookedAppointments,
    generateSlots,
    handleSelectSlot,
    handleNext,
    serviceName,
    stylistName,
    formatDate,
    setStep
 }
  )
}
