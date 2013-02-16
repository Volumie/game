/// <reference path="../../../_references.ts" />

import key = module("../../../../common/keyCodes");

export class stepDown implements IList.IKeyboardAction {

  id = "step down";
  description = "";
  keySequence = [key.downArrow];

  constructor(private p: IList.IKeyboardParams) { }

  triggerAction() {
    var o = this;
    var index = o.p.inputParams.listIndex();
    o.p.inputParams.listIndex(index + 1);
  }

  //private check

  getCurrentState() {
    var o = this;
    return 0;
  }

}