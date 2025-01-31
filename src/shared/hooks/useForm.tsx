import { useForm } from 'react-hook-form';
import type { FieldValues, UseFormProps } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export interface IUseAppForm<
  TZod extends ZodType,
  TFieldValues extends FieldValues = FieldValues,
> extends UseFormProps<TFieldValues> {
  formSchema: TZod;
}

function useAppForm<
  TZod extends ZodType,
  TFieldValues extends FieldValues = FieldValues,
>({ formSchema, ...props }: IUseAppForm<TZod, TFieldValues>) {
  return useForm<z.infer<TZod>>({
    ...props,
    resolver: zodResolver(formSchema),
  });
}

export default useAppForm;
