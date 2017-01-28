$(document).ready(function() {
  var starter = 0,
      starter_hyd = 0,
      s_flour = 0,
      s_liquid = 0,
      flour,
      liquid,
      c_hyd,
      t_hyd = 0,
      need;
  
  $('.amount').change(function(){
    if ($('#starter').val() != "" && $('#starter_hyd').val() != "") {
      starter = parseFloat($('#starter').val());
      starter_hyd = parseFloat($('#starter_hyd').val())/100;
      s_flour = starter/(1+starter_hyd);
      s_liquid = starter - s_flour;
    }
    else {
      s_flour = 0;
      s_liquid = 0;
    }
    flour = parseFloat($('#flour').val()) + s_flour;
    liquid = parseFloat($('#liquid').val()) + s_liquid;
    c_hyd = (liquid/flour);
    $('#currenthydration').attr('value', (c_hyd*100).toFixed(1));
    
    if ($('#targethydration').val() != "") {
      t_hyd = parseFloat($("#targethydration").val())/100;
      if (c_hyd > t_hyd) {
      need = ((liquid/t_hyd)-flour).toFixed(1) + ' g flour';
      }
      else if (c_hyd < t_hyd) {
      need = ((t_hyd*flour)-liquid).toFixed(1) + ' g liquid';
      }
      else {
      need = "no change";
      }
      $('#addthis').attr('value', need);
    }

    });

});