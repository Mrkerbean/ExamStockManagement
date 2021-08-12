
/** DARK MODE funkcija koja omogucava promjenu root stanja iz light moda u dark mode pomocu CSS variajbli koje se apenduju
 * u samom body-u klikom na dugme
 */
//  let darkMode = localStorage.getItem('darkMode');
//  const darkModeToggle = document.querySelector('.dark-mode-toggle');
 
//  const enableDarkMode = () => {
 
//    document.body.classList.add('darkmode');
//    localStorage.setItem('darkMode', 'enabled');
//  }
 
//  const disableDarkMode = () => {
 
//    document.body.classList.remove('darkmode');
//    localStorage.setItem('darkMode', null);
//  }
 
//  if (darkMode === 'enabled') {
//    enableDarkMode();
//  }
 
//  darkModeToggle.addEventListener('click', () => {
//    darkMode = localStorage.getItem('darkMode');
 
//    if (darkMode !== 'enabled') {
//      enableDarkMode();
//    } else {
//      disableDarkMode();
//    }
//  });
 
 // Promjena pozicije toggle dugmeta u odnosu na to da li je aktivan dark mode u body-u ili nije
 const toggleDugmeId = document.getElementById("toggleDugmeId")
 
 const enableDarkModeDugme = () => {
   toggleDugmeId.classList.add('toggleDugmePomijeriDesno');
 };
 
 const disableDarkModeDugme = () => {
   toggleDugmeId.classList.remove('toggleDugmePomijeriDesno');
 };
 
 if (document.body.classList.contains('darkmode')) {
   enableDarkModeDugme();
 }
 
 toggleDugmeId.addEventListener("click", () => {
   if (document.body.classList.contains('darkmode')) {
     enableDarkModeDugme();
   } else {
     disableDarkModeDugme();
   }
 })
 
 