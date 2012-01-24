Tabset = (function(el){
  var self;
  self = {};
  self.el = el;
  self.tabs = el.getElements('.section');
  self.nav_buttons = el.getElement('.nav').getElements('a');
  self.showTab = function(i){
    self.nav_buttons.removeClass('active');
    self.tabs.removeClass('active');
    self.nav_buttons[i].addClass('active');
    self.tabs[i].addClass('active');
  };
  self.nav_buttons.each(function(btn,i){
    new Button(btn,{
      'mousedown': function(){
        self.showTab(i);
      }
    });
  });
  self.showTab(0);
  return self;
});