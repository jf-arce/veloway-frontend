import { create } from "zustand";
import { Licencia } from "@/entities/licencia";
import  { FichaMedica } from "@/entities/fichaMedica"
import { Vehiculo } from "@/entities/vehiculo";

interface DriverRegistroStore {
  fichaValues: FichaMedica  
  setFichaValues: (values: Partial<FichaMedica>) => void;
  licenseValues: Licencia
  setLicenseValues: (values: Partial<Licencia>)  => void;
  vehicleValues: Vehiculo
  setVehicleValues: (values: Partial<Vehiculo>)  => void;
}

export const useDriverRegistroStore = create<DriverRegistroStore>((set) => ({
    fichaValues: {
        altura: 0,
        peso: 0,
        enfermedadCardiaca: null,
        enfermedadRespiratoria: null,
        alergias: null,
        epilepsia: false,
        diabetes: false,
        compartir: false    
    },

    setFichaValues: (values) => set((state) => ({ 
        fichaValues: { ...state.fichaValues, ...values } 
    })),

    licenseValues: {
        numero: 0,
        categoria: "",
        fechavencimiento: ""
    },

    setLicenseValues: (values) =>
    set((state) => ({ licenseValues: { ...state.licenseValues, ...values } })),

    vehicleValues: {
        anio: 0,
        color: "",
        descripcion: "",
        patente: "",
        tipoVehiculoId: 0,
        modeloId: 0,
        marcaId: 0 
    },

    setVehicleValues: (values) =>
    set((state) => ({ vehicleValues: { ...state.vehicleValues, ...values } })),

}))

