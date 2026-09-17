// app/registro/actions.ts
'use server'

import { registerSchema, type RegisterInput } from '@/lib/validations'

export type RegisterResult =
  | { success: true; message: string }
  | { success: false; error: string; fieldErrors?: Partial<Record<keyof RegisterInput, string>> }

export async function registerAction(
  input: RegisterInput
): Promise<RegisterResult> {
  // 1. Validación en servidor
  const parsed = registerSchema.safeParse(input)
  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof RegisterInput, string>> = {}
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof RegisterInput
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message
    }
    return { success: false, error: 'Revisa los campos', fieldErrors }
  }

  // 2. Simulación de latencia (aquí iría tu API real)
  await new Promise((r) => setTimeout(r, 1400))

  // 3. Éxito simulado
  return {
    success: true,
    message: '¡Cuenta creada! Te enviamos un email para confirmar.',
  }
}