<!DOCTYPE html>
<html lang="en">
@include('layouts.base.partials.head')
<body>
<navigation></navigation>
@yield('content')
<custom-footer></custom-footer>

<!--  Scripts-->
<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="/js/app.js"></script>
<script src="/js/animations.js"></script>

</body>
</html>
