var workingUrl = "https://laurel-updates-dev64.koyeb.app"
//        main: https://laurel-updates.onrender.com
// alternative: https://laurel-updates-dev64.koyeb.app
var pathName = window.location.pathname;

if (pathName !== "/") {
    redirectLaurel = workingUrl + pathName

    document.getElementById("redirectLink").href = redirectLaurel;
    window.location.href = redirectLaurel;
}
