+function ($) {
  'use strict';
  try{
  $('#timepicker1').datetimepicker();
  $('#timepicker2').datetimepicker();
  $('#timepicker3').datetimepicker();
  $('#timepicker4').datetimepicker();
	}
	catch(err){
		return false;
	}
}(jQuery);

+function ($) {
  'use strict';
  try{
  $('[data-toggle="popover"]').popover({html:true});
	}
	catch(err){
		return false;
	}
}(jQuery);

/* select color change */
+function ($) {
  'use strict';

  $('select').select2({
    minimumResultsForSearch: Infinity
  });

}(jQuery);

/* home email submit */
+function ($) {
  'use strict';

  $('.email-submit').on('click', function(){
     $('.intro-page').find('.hidden-container').fadeIn(function(){
        $(document.body).animate({
        'scrollTop': $('a[name="eligibility"]').offset().top
        }, 1000);
     });
  });
  $('.start-email').keydown(function(event) {
    if(event.keyCode == 13) {
      $('.intro-page').find('.hidden-container').fadeIn(function(){
        $(document.body).animate({
        'scrollTop': $('a[name="eligibility"]').offset().top
        }, 1000);
     });
      return false;
    }
  });

}(jQuery);

+function ($) {
  'use strict';
  $('.aff-code .citno').click(function(){
  	$('input.affiliation-code').fadeOut();
  });
  $('.aff-code .cityes').click(function(){
  	$('input.affiliation-code').fadeIn();
  });
}(jQuery);

+function ($) {
  'use strict';
  $('.start-email .btn').on('click', function(){
  	$(document.body).animate({
  		'scrollTop': $('a[name="eligibility"]').offset().top - 80
  	}, 1000);
  });
  $('.start-email input').keydown(function(event) {
  	if(event.keyCode == 13) {
  		$(document.body).animate({
  		'scrollTop': $('a[name="eligibility"]').offset().top - 80
  		}, 1000);
  		return false;
  	}
  });
}(jQuery);

+function ($) {
  'use strict';
  $('.elesave-btn').click(function(){
    $('.ele-zip, .ele-birth, .ele-ed, .aff-code, .affiliation-code').removeClass('req');
    if( $('.ele-zip').val() == "" || $('.ele-birth').val() == "" || $('.ele-ed').val() == null || !$('.aff-code input[type="radio"]').is(':checked') || ( $('.aff-code .cityes input').is(':checked') && $('.affiliation-code').val() == "") ){
      if( $('.ele-zip').val() == "" ){
        $('.ele-zip').addClass('req');
      }
      if( $('.ele-birth').val() == "" ){
        $('.ele-birth').addClass('req');
      }
      if( $('.ele-ed').val() == null ){
        $('.ele-ed').addClass('req');
      }
      if( !$('.aff-code input[type="radio"]').is(':checked') ){
        $('.aff-code').addClass('req');
      }
      if( $('.aff-code .cityes input').is(':checked') && $('.affiliation-code').val() == "" ){
        console.log($('.affiliation-code').val());
        $('.affiliation-code').addClass('req');
      } 
      $(this).popover('show');
      return false;
    } else {
      $('.login-hidden').fadeIn();
      $(document.body).animate({
  		'scrollTop': $('a[name="create-login"]').offset().top - 80
  		}, 1000);
  		return false;
    }

  });

  try {
    $(document).on('click', function(e){
      $('.elesave-btn').popover('hide');
    })
  } catch(err) {
    return false;
  }

}(jQuery);

+function ($) {
  'use strict';
  $('#attended1-dd').change(function(){
    if( $(this).val() == "option 2"){
      $('.col1-hidden').fadeIn();
    } else {
      $('.col1-hidden').fadeOut();
    }
  });
  $('#attended2-dd').change(function(){
    if( $(this).val() == "option 2"){
      $('.col2-hidden').fadeIn();
    } else {
      $('.col2-hidden').fadeOut();
    }
  });

}(jQuery);

+function ($) {
  'use strict';
  try{
 	$('input.degree-search').typeahead({
 		source: ['Applied Behavioral Science', 'Cognitive Studies', 'Cultural Anthropology', 'Psychology', 'Social Science', 'Sociology']
 	});
  }
  catch(err){
	return false;
  }
}(jQuery);

+function ($) {
  'use strict';
  try{
  $('input.college-search').typeahead({
    source: ['University of Washington','California State University','Williams College','Yale University','Massachusetts Institute of Technology']
  });
  }
  catch(err){
  return false;
  }
}(jQuery);

+function ($) {
  'use strict';
  $('.citno').click(function(){
  	$('#immigration-status-dd').fadeIn();
  	$('#country-cit-dd').fadeIn();
  });
  $('.cityes').click(function(){
  	$('#immigration-status-dd').fadeOut();
  	$('#country-cit-dd').fadeOut();
  });
}(jQuery);

+function ($) {
  'use strict';
  $('.military .citno').click(function(){
  	$('.military-branch').fadeOut();
  });
  $('.military .cityes').click(function(){
  	$('.military-branch').fadeIn();
  });
}(jQuery);

+function ($) {
  'use strict';
  $('input[name="airforcecheck"]').click(function(){
  		if( $(this).is(':checked') ){
  			$('.airforce').fadeIn();
  		} else {
  			$('.airforce').fadeOut();
  		}
  });

  $('input[name="armycheck"]').click(function(){
  		if( $(this).is(':checked') ){
  			$('.army').fadeIn();
  		} else {
  			$('.army').fadeOut();
  		}
  });
}(jQuery);

+function ($) {
  'use strict';
  $('.add-school').click(function(){
  	$('.hidden-college').fadeIn();
  });
}(jQuery);

+function ($) {
  'use strict';
  $('.input-group.employer .input-group-addon').on('click', function(){
      if( $('.input-group.employer input').val().toLowerCase() == "starbucks" ){
         $('.starbucks-hidden').fadeIn();
         $('.input-group.employer input').val('');
      } else if ( $('.input-group.employer input').val().toLowerCase() == "boeing" ){
        $('.boeing-hidden').fadeIn();
         $('.input-group.employer input').val('');
      }
  });
  $('.input-group.employer input').keydown(function(event) {
    if(event.keyCode == 13) {
      if( $(this).val().toLowerCase() == "starbucks" ){
         $('.starbucks-hidden').fadeIn();
         $(this).val('');
      } else if ( $(this).val().toLowerCase() == "boeing" ){
        $('.boeing-hidden').fadeIn();
         $(this).val('');
      }
      return false;
    }
  });
}(jQuery);

/* custom placeholder */
+function ($) {
  'use strict';
  $('input').each(function(){
    if( $(this).attr('data-placeholder') || $(this).attr('data-mobile-placeholder') ){
      replacePlaceholder($(this));
    }
  });

  $(window).resize(function(){
    $('input').each(function(){
      if( $(this).attr('data-placeholder') || $(this).attr('data-mobile-placeholder') ){
        replacePlaceholder($(this));
      }
    });
  })
}(jQuery);

function replacePlaceholder(elem, breakPoint){
  var wWidth = $(window).width();
  var breakPoint = elem.attr('data-breakpoint');
  if( wWidth > breakPoint ){ 
    elem.attr('placeholder', elem.attr('data-placeholder'));
  } else {
    elem.attr('placeholder', elem.attr('data-mobile-placeholder'));
  }
}

/* form validation */
+function ($) {
  'use strict';
  $('a.btn-submit').on('click', function(e){
    e.preventDefault();
    $(this).parents('form').submit();
  });
}(jQuery);


+function ($) {
  'use strict';
  try{
    $('#form1').validate({
      ignore: [],
      errorPlacement: function( error, element) {
        $(element).parent().addClass('has-error');
      },
      success: function (label, element) {
        $(element).parent().removeClass('has-error');
      }
    });
  } catch(err){
    return false;
  }
}(jQuery);
