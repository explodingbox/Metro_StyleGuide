//Requires mootools slider
RangeSlider = (function(el,params){
  var self;
  self = {}
  self.element = el;
  el.setStyle('display','none');
  self.proxy_element = new Element('div.range_slider');
  self.track_element = new Element('div.track');
  self.thumb_element = new Element('div.thumb');
  self.indicator_element = new Element('div.range_indicator');
  self.proxy_element.adopt([self.track_element,self.thumb_element,self.indicator_element]);
  self.proxy_element.inject(el,'after');
  self.slider = new Slider(self.proxy_element, self.thumb_element,{
    range: [el.get('min'),el.get('max')],
    initialStep: el.get('value').toInt()
  });
  self.slider.addEvent('change', function(v){
    el.set('value',v);
    self.indicator_element.setStyle('width',self.thumb_element.getStyle('left'));
  });
  self.slider.addEvent('tick', function(v){
    el.set('value',v);
    self.indicator_element.setStyle('width',self.thumb_element.getStyle('left'));
  });
  
    self.indicator_element.setStyle('width',self.thumb_element.getStyle('left'));
  return self;
});