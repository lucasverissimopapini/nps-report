"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type AlertType = "success" | "warn" | "error";

interface Alert {
  id: number;
  type: AlertType;
  message: string;
}

interface AlertContextProps {
  alerts: Alert[];
  showAlert: (message: string, type: AlertType) => void;
}

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const showAlert = (message: string, type: AlertType) => {
    const id = Date.now();
    setAlerts((prev) => [...prev, { id, type, message }]);

    setTimeout(() => {
      setAlerts((prev) => prev.filter((alert) => alert.id !== id));
    }, 5000);
  };

  return (
    <AlertContext.Provider value={{ alerts, showAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};
