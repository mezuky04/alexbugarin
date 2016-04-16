<!DOCTYPE html>
<html lang="en">
@include('layouts.base.partials.head')
<body>
<navigation></navigation>
@yield('content')
<custom-footer></custom-footer>

<!--  Scripts-->
<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-38457291-6', 'auto');
    ga('send', 'pageview');

</script>
<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="/js/app.js"></script>
<script src="/js/animations.js"></script>

</body>
</html>
