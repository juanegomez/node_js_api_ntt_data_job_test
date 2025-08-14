import { z } from "zod";

export const clientQuerySchema = z.object({
  tipoDocumento: z
    .string()
    .transform((val) => val.toUpperCase())
    .refine((val) => ["C", "P"].includes(val), {
      message: "El tipo de documento debe ser 'C' o 'P'"
    }),
  numeroDocumento: z.string().min(1, "El número de documento es obligatorio")
}).superRefine((data, ctx) => {
  if (data.tipoDocumento === "C" && !/^\d+$/.test(data.numeroDocumento)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["numeroDocumento"],
      message: "El número de documento debe contener solo números para tipo 'C'"
    });
  }
  if (data.tipoDocumento === "P" && !/^[a-zA-Z0-9]+$/.test(data.numeroDocumento)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["numeroDocumento"],
      message: "El número de documento debe contener solo letras y/o números para tipo 'P'"
    });
  }
});
