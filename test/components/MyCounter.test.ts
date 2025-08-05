import { describe, expect, test } from 'vitest';
import MyCounter from '@/components/MyCounter.vue';
import { mount } from '@vue/test-utils';

describe('<My Counter />', () => {
  test('should match snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 5,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('renders the counter value correctly', () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value: value,
      },
    });

    expect(wrapper.find('h3').text()).toContain(`Counter: ${value}`);
    expect(wrapper.find('[data-testid="square-label"]').text()).toContain(
      `Square: ${value * value}`,
    );

    const [counterLabel, squareLabel] = wrapper.findAll('h3');
    expect(counterLabel.text()).toContain(`Counter: ${value}`);
    expect(squareLabel.text()).toContain(`Square: ${value * value}`);
  });

  test('increments the counter when +1 button is clicked', async () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value: value,
      },
    });
    const btnIncrement = wrapper.find('button');
    await btnIncrement.trigger('click');
    const [counterLabel, squareLabel] = wrapper.findAll('h3');
    expect(counterLabel.text()).toContain(`Counter: ${value + 1}`);
    expect(squareLabel.text()).toContain(`Square: ${(value + 1) * (value + 1)}`);
  });
});

test('decrement the counter when -2 button is clicked', async () => {
  const value = 5;
  const wrapper = mount(MyCounter, {
    props: {
      value: value,
    },
  });

  const [btnIncrement, btnDecrement] = wrapper.findAll('button');
  await btnDecrement.trigger('click');
  await btnDecrement.trigger('click');

  const [counterLabel, squareLabel] = wrapper.findAll('h3');
  expect(counterLabel.text()).toContain(`Counter: ${value - 2}`);
  expect(squareLabel.text()).toContain(`Square: ${(value - 2) * (value - 2)}`);
});
