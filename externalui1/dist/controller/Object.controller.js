sap.ui.define(["./BaseController","sap/ui/model/json/JSONModel","sap/ui/core/routing/History","../model/formatter"],function(e,t,n,i){"use strict";return e.extend("ns.externalui1.controller.Object",{formatter:i,onInit:function(){var e=new t({busy:true,delay:0});this.getRouter().getRoute("object").attachPatternMatched(this._onObjectMatched,this);this.setModel(e,"objectView")},onNavBack:function(){var e=n.getInstance().getPreviousHash();if(e!==undefined){history.go(-1)}else{this.getRouter().navTo("worklist",{},true)}},_onObjectMatched:function(e){var t=e.getParameter("arguments").objectId;this._bindView("/Books"+t)},_bindView:function(e){var t=this.getModel("objectView");this.getView().bindElement({path:e,events:{change:this._onBindingChange.bind(this),dataRequested:function(){t.setProperty("/busy",true)},dataReceived:function(){t.setProperty("/busy",false)}}})},_onBindingChange:function(){var e=this.getView(),t=this.getModel("objectView"),n=e.getElementBinding();if(!n.getBoundContext()){this.getRouter().getTargets().display("objectNotFound");return}var i=this.getResourceBundle();e.getBindingContext().requestObject().then(function(e){var n=e.ID,o=e.title;t.setProperty("/busy",false);t.setProperty("/shareSendEmailSubject",i.getText("shareSendEmailObjectSubject",[n]));t.setProperty("/shareSendEmailMessage",i.getText("shareSendEmailObjectMessage",[o,n,location.href]))}.bind(this))}})});