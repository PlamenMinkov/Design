$(document).ready(function () {
    
    $('.jq_su').click(function(){                       $('.jq2').addClass('active')
      $('.jq2').removeClass('inactive')
      $('.jq1').addClass('inactive')
      $('.jq1').removeClass('active')
    });
    
    $('.jq_si').click(function(){                       $('.jq1').addClass('active')
      $('.jq1').removeClass('inactive')
      $('.jq2').addClass('inactive')
      $('.jq2').removeClass('active')
    });
});