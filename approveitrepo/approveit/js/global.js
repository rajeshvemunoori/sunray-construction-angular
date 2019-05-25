// HTML5 placeholder plugin version 0.3
// Enables cross-browser* html5 placeholder for inputs, by first testing
// for a native implementation before building one.
//
// USAGE: 
//$('input[placeholder]').placeholder();

(function($){
  
  $.fn.placeholder = function(options) {
    return this.each(function() {
      if ( !("placeholder"  in document.createElement(this.tagName.toLowerCase()))) {
        var $this = $(this);
        var placeholder = $this.attr('placeholder');
        $this.val(placeholder).data('color', $this.css('color')).css('color', '#aaa');
        $this
          .focus(function(){ if ($.trim($this.val())===placeholder){ $this.val('').css('color', $this.data('color')); } })
          .blur(function(){ if (!$.trim($this.val())){ $this.val(placeholder).data('color', $this.css('color')).css('color', '#aaa'); } });
      }
    });
  };
}(jQuery));


jQuery.fn.removeViewState = function()
{
    $(this).children(".aspNetHidden").html('');
    alert('removedViewstate');
}

var menuYloc = null;
var previewYloc = null;

// perform JavaScript after the document is scriptable.
$(document).ready(function () {

    /**
    * Setup Tooltips
    */
    // this set's up the sidebar tooltip for the recent contacts
    $('.recent .contact').tooltip({
        position: 'center right', // position it to the right
        effect: 'slide', // add a slide effect
        offset: [30, 15], // adjust the position 30 pixels to the top and 19 pixels to the left
        onBeforeShow: function () {
            this.getTip().appendTo('body');
        }
    });

    //$('[title]').tooltip({ effect: 'slide', offset: [-14, 0] });

    // html element for the help popup
    $('body').append('<div class="apple_overlay black" id="overlay"><iframe class="contentWrap" style="width: 100%; height: 500px"></iframe></div>');

    // this is the help popup
    $("a.help[rel]").overlay({

        effect: 'apple',

        onBeforeLoad: function () {

            // grab wrapper element inside content
            var wrap = this.getOverlay().find(".contentWrap");

            // load the page specified in the trigger
            wrap.attr('src', this.getTrigger().attr("href"));
        }

    });

  
    /**
    * Setup placeholder for text input
    */
    $('input[placeholder]').placeholder();



    // add close buttons to closeable message boxes
    $(".message.closeable").prepend('<span class="message-close"></span>')
        .find('.message-close')
        .click(function () {
            $(this).parent().fadeOut(function () { $(this).remove(); });
        });

    // setup popup balloons (add contact / add task)
    $('.has-popupballoon').click(function () {
        // close all open popup balloons
        $('.popupballoon').fadeOut();
        $(this).next().fadeIn();
        return false;
    });

    $('.popupballoon .close').click(function () {
        $(this).parents('.popupballoon').fadeOut();
    });
   


    // Regular Expression to test whether the value is valid
    $.tools.validator.fn("[type=time]", "Please supply a valid time", function (input, value) {
        return (/^\d\d:\d\d$/).test(value);
    });

    $.tools.validator.fn("[data-equals]", "Both fields must be the same", function (input) {
        //$.tools.validator.fn("[data-equals]", "Value not equal with the $1 field", function (input) {

        var name = input.attr("data-equals"),
        field = this.getInputs().filter("[name=" + name + "]");
        return input.val() === field.val() ? true : [name];
    });

    $.tools.validator.fn("[minlength]", function (input, value) {
        var min = input.attr("minlength");

        return value.length >= min ? true : {
            en: "Please provide at least " + min + " character" + (min > 1 ? "s" : "")
        };
    });

    $.tools.validator.localizeFn("[type=time]", {
        en: 'Please supply a valid time'
    });

    // setup the validators
    $(".form").validator({
        position: 'left',
        offset: [25, 10],
        messageClass: 'form-error',
        message: '<div><em/></div>' // em element is the arrow
    }).attr('novalidate', true);

    // setup the view switcher
    $('.main-content > header .view-switcher > h2 > a').click(function () {
        $(this).focus().parent().next().fadeIn();
        return false;
    }).blur(function () {
        $(this).parent().next().fadeOut();
        return false;
    });

    // promo closer
    $('#promo .close').click(function () {
        $('#promo').slideUp();
        $('body').removeClass('has-promo');
    });
});
