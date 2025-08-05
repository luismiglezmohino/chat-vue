import MessageBox from '@/chat/MessageBox.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

describe('<Message Box />', () => {
  const wrapper = mount(MessageBox);
  test('renders input and button elements correcty', () => {
    console.log(wrapper.html());

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('input[type=text]').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button svg').exists()).toBe(true);
  });

  test('emits sendMenssage event when button is clicked', async () => {
    const message = 'Hola Mundo';
    await wrapper.find('input[type="text"').setValue(message);
    await wrapper.find('button').trigger('click');
    console.log(wrapper.emitted('sendMessage'));
    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);

    expect((wrapper.vm as any).message).toBe('');
  });

  test('emit sendMssage event where keypress.enter', async () => {
    const message = 'Hola Mundo';
    const input = wrapper.find('input[type="text"');
    await input.setValue(message);
    await input.trigger('keypress.enter');
    console.log(wrapper.emitted('sendMessage'));

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
    expect((wrapper.vm as any).message).toBe('');
  });

  test('emit sendMssage event where keypress.enter', async () => {
    //const message = 'Hola Mundo';
    //Se crea de nuevo el wrapper, para que no afecten las pruebas anteriores.
    const wrapper = mount(MessageBox);
    const input = wrapper.find('input[type="text"');
    await input.trigger('keypress.enter');
    await input.trigger('click');

    //console.log(wrapper.emitted('sendMessage'));

    expect(wrapper.emitted('sendMessage')).toBeFalsy();
    //expect((wrapper.vm as any).message).toBe('');
  });
});
