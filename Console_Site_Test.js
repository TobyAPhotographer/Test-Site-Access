console.log("🎉 Test script loaded successfully! I am now testing live updating Via GitHub Editor");
alert("Test script is working! Testing Updates");
<script>
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/gh/TobyAPhotographer/Test-Site-Access@main/Console_Site_Test.js?v=' + new Date().getTime();
  document.head.appendChild(script);
</script>
