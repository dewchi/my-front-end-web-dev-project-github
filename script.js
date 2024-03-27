let how_old = prompt("Please enter your age")
let age = parseInt(how_old)
if (age >= 18) {
    alert('Access Granted');
  } else {
    console.log('Access Denied');
    alert('Access Denied')
    window.location.href ='http://google.co.uk';
  }


  function showSearchBar(){
    document.getElementById('searchBar').classList.remove('hidden')
  }
  function hideSearchBar(){
    document.getElementById('searchBar').classList.add('hidden')
  }

  document.getElementById('searchBar').addEventListener('click', showSearchBar)
  document.getElementById('searchBar').addEventListener('click', hideSearchBar)