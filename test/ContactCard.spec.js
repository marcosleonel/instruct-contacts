import { mount } from '@vue/test-utils';
import ContactCard from '@/components/ContactCard/ContactCard.vue';

describe('ContactCard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ContactCard);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
