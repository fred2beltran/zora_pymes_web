// lib/validations.ts
import { z } from 'zod'

export const registerSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Escribe tu nombre completo' })
    .max(80, { message: 'Máximo 80 caracteres' }),

  email: z
    .string()
    .min(1, { message: 'El email es obligatorio' })
    .email({ message: 'Email no válido' }),

  password: z
    .string()
    .min(8, { message: 'Mínimo 8 caracteres' })
    .regex(/[A-Z]/, { message: 'Al menos una mayúscula' })
    .regex(/[a-z]/, { message: 'Al menos una minúscula' })
    .regex(/[0-9]/, { message: 'Al menos un número' }),

  businessType: z.enum(['autonomo', 'pyme', 'freelance', 'otro'], {
    message: 'Selecciona tu tipo de negocio',
  }),

  terms: z
    .boolean()
    .refine((v) => v === true, {
      message: 'Debes aceptar los términos y la privacidad',
    }),
})

export type RegisterInput = z.infer<typeof registerSchema>

// Utilidad: medir fuerza de contraseña 0-4
export function passwordStrength(pwd: string): 0 | 1 | 2 | 3 | 4 {
  if (!pwd) return 0
  let score = 0
  if (pwd.length >= 8) score++
  if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd)) score++
  if (/[0-9]/.test(pwd)) score++
  if (/[^A-Za-z0-9]/.test(pwd)) score++
  return score as 0 | 1 | 2 | 3 | 4
}