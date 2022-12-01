import { FocusEvent } from 'react';
import { z } from 'zod';
import { inputOptions } from '../fields/Input';

export const ValidatorFn = (
  e: FocusEvent<HTMLInputElement>,
  config: inputOptions
): void => {
  const textValidator = z.string().min(1);
  const emailValidator = z.string().email();
  const passwordValidator = z.string().min(8);
  const numberValidator = z.string().min(1).regex(/[0-9]/);
  const telValidator = z.string().regex(/^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/);
  const urlValidator = z.string().url();
  const dateValidator = z.date();
  const timeValidator = z.string().regex(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/);
  const colorValidator = z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
  const searchValidator = z.string().min(1);
  const rangeValidator = z.string().min(1).regex(/[0-9]/);
  const fileValidator = z.string().min(1);

  const validators = {
    text: textValidator,
    email: emailValidator,
    password: passwordValidator,
    number: numberValidator,
    tel: telValidator,
    url: urlValidator,
    date: dateValidator,
    time: timeValidator,
    color: colorValidator,
    search: searchValidator,
    range: rangeValidator,
    file: fileValidator,
  };

  if (config) {
    const isValid = validators[config].safeParse(e.target.value);

    if (!isValid.success) {
      const errorText = isValid.error.issues[0].message;
      if (e.target.labels?.[0].childNodes[1]) {
        e.target.labels?.[0].childNodes[1].remove();
      }
      e.target.classList.remove(
        'dark:border-yellow-500',
        'dark:text-yellow-500'
      );
      e.target.classList.add(
        'dark:border-red-500',
        'dark:text-red-500',
        'failure'
      );
      e.target.labels?.[0].firstChild?.after(` ${errorText}`);
      e.target.labels?.[0].classList.add('dark:text-red-500');
      e.target.labels?.[0].classList.add('failure');
    } else {
      e.target.classList.remove('dark:border-red-500', 'dark:text-red-500');
      e.target.classList.add(
        'dark:border-yellow-500',
        'dark:text-yellow-500',
        // 'success'
      );
      if (e.target.labels?.[0].childNodes[1]) {
        e.target.labels?.[0].childNodes[1].remove();
      }
      e.target.labels?.[0].classList.remove('dark:text-red-500');
      e.target.labels?.[0].classList.add('dark:text-yellow-500');
      e.target.labels?.[0].classList.remove('failure');
      e.target.labels?.[0].classList.add('success');
    }
  }
};
