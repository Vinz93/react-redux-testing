import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/CommentList';

describe('CommentList', () => {
  let component;
  beforeEach(() => {
    const props = { comments: ['so cool', 'get in', 'get out'] };
    component = renderComponent(CommentList, null, props);
  })
  it('shows an LI for each comment', () => {
    expect(component.find('li').length).to.equal(3);
  });

  it('shows each comment that is provided', () => {
      expect(component).to.contain('so cool');
      expect(component).to.contain('get in');
      expect(component).to.contain('get out');
  });
})
