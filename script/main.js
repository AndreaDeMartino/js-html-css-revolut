// Descrizione:
// Ricreare la navbar di revolut (vedi grafiche allegate)
// Focus è rendere funzionali i menu dropdown all’interno della navigazione principale
// Importante l’uso di $(this)
// Potete scegliere di usare il click() oppure mouseenter() /mouseleave() per mostrare / nascondere i dropdown menu
// Modificare l’icona freccia nel selettore della lingua all’hover (freccia giù / freccia su) usando fontawesome

$(document).ready( function(){
  // Interazione Dropdown
  var item = $('.list-item .with-dropdown');

  item.click(function() {
    // Nascondi tutti i dropdown-menu ad eccezione di quello cliccato
    item.not($(this)).next().hide();
    // Toggle su visibilità dropdown-menu
    $(this).next().toggle();
  })


  // Interazione Icona su mouse hover
  var itemIcon = $('.with-icon');
  var icon = itemIcon.children('i');

  itemIcon.mouseenter(function(){
    icon.removeClass('fa-angle-down').addClass('fa-angle-up');
  })

  itemIcon.mouseleave(function(){
    icon.removeClass('fa-angle-up').addClass('fa-angle-down');
  })

});
