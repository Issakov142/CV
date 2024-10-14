import React, { ElementRef, useRef } from 'react';

import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { S } from './Contacts_Styles';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const form = useRef<ElementRef<'form'>>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm('service_l7gt0kh', 'template_9lz5gho', form.current, {
        publicKey: 'AB6RtdU00rK4okD_C',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset();
  };

  return (
    <S.Contact id={'contact'}>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <S.Form ref={form} onSubmit={sendEmail}>
          <S.Field required placeholder={'name'} name={'user_name'} />
          <S.Field required type={'email'} placeholder={'e-mail'} name={'e-mail'} />
          <S.Field required placeholder={'subject'} name={'subject'} />
          <S.Field required placeholder={'message'} as={'textarea'} name={'message'} />
          <Button type={'submit'}>Send message</Button>
        </S.Form>
      </Container>
    </S.Contact>
  );
};
