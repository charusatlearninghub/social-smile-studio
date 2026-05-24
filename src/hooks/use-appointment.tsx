import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { AppointmentDialog } from "@/components/site/AppointmentDialog";

type AppointmentContextValue = {
  openAppointment: (treatment?: string) => void;
  closeAppointment: () => void;
};

const AppointmentContext = createContext<AppointmentContextValue | null>(null);

export function AppointmentProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [defaultTreatment, setDefaultTreatment] = useState("");

  const openAppointment = useCallback((treatment?: string) => {
    setDefaultTreatment(treatment ?? "");
    setOpen(true);
  }, []);

  const closeAppointment = useCallback(() => {
    setOpen(false);
  }, []);

  const value = useMemo(
    () => ({ openAppointment, closeAppointment }),
    [openAppointment, closeAppointment],
  );

  return (
    <AppointmentContext.Provider value={value}>
      {children}
      <AppointmentDialog open={open} onOpenChange={setOpen} defaultTreatment={defaultTreatment} />
    </AppointmentContext.Provider>
  );
}

export function useAppointment() {
  const ctx = useContext(AppointmentContext);
  if (!ctx) {
    throw new Error("useAppointment must be used within AppointmentProvider");
  }
  return ctx;
}
