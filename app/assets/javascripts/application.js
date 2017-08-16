// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require syntax-highlighter-rails/shCore
//= require syntax-highlighter-rails/shBrushCpp
//= require syntax-highlighter-rails/shBrushJava
//= require syntax-highlighter-rails/shBrushPython
//= require syntax-highlighter-rails/shBrushXml
//= require syntax-highlighter-rails/shBrushCss
//= require jquery
//= require jquery_ujs
//= require tether
//= require bootstrap-sprockets


//= require_tree .

function refresh(href) {
  console.log('실행됨');
  $('#list').load(href, function () {
      console.log('콜백 호출');
      SyntaxHighlighter.all();
  });

}

SyntaxHighlighter.all();

 function fnMove(seq){
        var offset = $("#div" + seq).offset();
        $('html, body').animate({scrollTop : offset.top}, 500);
    }


