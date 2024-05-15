/* A short automatic script for Google Analytics audience service */
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  /* Here are set the default values for these variables,
   * corresponding to the default domain. */
  var my_id = 'UA-38514290-15',    my_domain = 'ga-beacon.appspot.com';
  /* Here a case-by-case analysis is done to change this variable
   * when the page is located on another web server. */
  switch(window.location.host) {
    case 'www.dptinfo.ens-cachan.fr':
        my_id = 'UA-38514290-2';  my_domain = 'dptinfo.ens-cachan.fr';
        break;
    case 'lbesson.bitbucket.io':
        my_id = 'UA-38514290-14'; my_domain = 'bitbucket.org';
        break;
    case 'perso.crans.org':
        my_id = 'UA-38514290-1'; my_domain = 'crans.org';
        break;
    default:
        break; };
  /* New method. */
  ga('create', my_id, my_domain); ga('send', 'pageview');
  /* Old method. */
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', my_id]);
  // _gaq.push(['_setDomainName', my_domain]);
  _gaq.push(['_trackPageview']);
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; 
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    console.log("[INFO] Sending info to Google Analytics: id=" + my_id + ", domain=" + my_domain);
  })();