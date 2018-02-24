 import { expect } from '../test_helper';
 import { SAVE_COMMENT } from '../../src/actions/types';
 import { saveComment } from '../../src/actions';


 describe('Actions', () => {
   describe('saveComment', () => {
     let action;
     beforeEach(() =>{
       action = saveComment('we are testing actions');
     })
     it('has the correct type', () => {
       expect(action.type).to.be.equal(SAVE_COMMENT);
     });

     it('has the correct payload', () => {
       expect(action.comment).to.be.equal('we are testing actions');
     });

   });

 });
