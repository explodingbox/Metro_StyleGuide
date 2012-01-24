SegmentedSelect = (function(el){
  var self;
  self = {}
  self.el = el;
  self.value = el.get('value');
  self.options = [];
  el.getElements('option').each(function(o){
    self.options.push({
      'value': o.get('value'),
      'text': o.get('text')
    })
  });
  self.proxy_el = new Element('div.segmented_select');
  self.proxy_el.set('id',el.get('id'));
  self.buttons = [];
  self.options.each(function(o){
    var b;
    b = new Element('button',{
      'text': o.text
    });
    if ( o.value == self.value) b.addClass('active');
    self.buttons.push(b);
    b.inject(self.proxy_el);
    new Button(b,{
      'mousedown': function(){
        self.buttons.each(function(btn){
          btn.removeClass('active');
        });
        b.addClass('active');
        self.el.set('value',o.value);
        self.el.fireEvent('change');
        self.value = o.value;
      }
    });
  });
  self.buttons[0].addClass('first');
  self.buttons.getLast().addClass('last');
  el.setStyle('display','none');
  self.proxy_el.inject(el,'after');
  return self;
});