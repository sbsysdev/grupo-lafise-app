import { z } from 'zod';

export const accountNumberValidation = z
  .number({
    required_error: 'número de cuenta es requerido',
    invalid_type_error: 'solo se permiten números',
  })
  .int('no se permiten decimales')
  .min(9, 'debe contener al menos 9 dígitos')
  .max(10, 'debe contener 10 dígitos como máximo');

export const transferAmountValidation = (currency: string, min: number, max: number) =>
  z
    .number({
      required_error: 'cantidad de dinero es requerido',
      invalid_type_error: 'solo se permiten números',
    })
    .gte(min, `debe transferir al menos ${currency} ${min}`)
    .lte(max, `puedes transferir asta ${currency} ${max}`);

export const transferFormValidation = (currency: string, min: number, max: number) =>
  z.object({
    account: accountNumberValidation,
    amount: transferAmountValidation(currency, min, max),
  });
