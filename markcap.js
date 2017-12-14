(function() {
  if (!($ = window.jQuery)) {
      script = document.createElement( 'script' );
     script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
      script.onload=markCap;
      document.body.appendChild(script);
  }
  else {
      markCap();
  }

  function markCap() {
    var iTotalMarketCap = parseFloat($('#total-marketcap').attr('data-usd'));
    $('table#currencies tbody tr td:nth-child(3)').each(function(){
      if (this.innerHTML.includes('%')) {
        return;
      }
      var iThisMarketCap = parseFloat($(this).attr('data-usd'));
      var iPercent = iThisMarketCap / iTotalMarketCap * 100;
      this.append(' (' + iPercent.toFixed(1).toString() + '%)')
    });
  }
}());
