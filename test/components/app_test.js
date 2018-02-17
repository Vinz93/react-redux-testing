import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders component', () => {
    expect(component).to.exist;
  });
  it('shows the correct text', () => {
    expect(component).to.contain('React simple starter');
  });
});
