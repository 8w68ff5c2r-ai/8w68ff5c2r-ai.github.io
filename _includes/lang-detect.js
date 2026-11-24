/* Automatic language selection — inlined ONLY into the root homepage "/".
   Order: saved manual choice > country (from the browser time zone) > browser languages > German.
   German stays on "/", English/Spanish are sent to /en/ or /es/ with location.replace()
   (temporary, no history entry). Crawlers are never redirected. */
(function () {
    var LANGS = ["de", "en", "es"];
    var nav = window.navigator || {};

    if (/bot|crawl|spider|slurp|mediapartners|facebookexternalhit|embedly|whatsapp|telegram|lighthouse/i.test(nav.userAgent || "")) return;

    // Germany, Austria, Switzerland, Liechtenstein
    var DE = ["Europe/Berlin", "Europe/Busingen", "Europe/Vienna", "Europe/Zurich", "Europe/Vaduz"];

    // Spain and Spanish-speaking countries
    var ES = [
        "Europe/Madrid", "Africa/Ceuta", "Atlantic/Canary",                       // Spain
        "America/Mexico_City", "America/Cancun", "America/Merida", "America/Monterrey",
        "America/Matamoros", "America/Chihuahua", "America/Ciudad_Juarez", "America/Ojinaga",
        "America/Mazatlan", "America/Bahia_Banderas", "America/Hermosillo", "America/Tijuana",
        "America/Ensenada",                                                         // Mexico
        "America/Buenos_Aires", "America/Cordoba", "America/Catamarca", "America/Jujuy",
        "America/Mendoza", "America/Rosario",                                       // Argentina (+ America/Argentina/*)
        "America/Bogota", "America/Santiago", "America/Punta_Arenas", "Pacific/Easter",
        "America/Lima", "America/Caracas", "America/La_Paz", "America/Asuncion",
        "America/Montevideo", "America/Guayaquil", "Pacific/Galapagos",
        "America/Guatemala", "America/El_Salvador", "America/Tegucigalpa", "America/Managua",
        "America/Costa_Rica", "America/Panama", "America/Havana", "America/Santo_Domingo",
        "America/Puerto_Rico", "Africa/Malabo"
    ];

    function fromTimeZone() {
        var tz = "";
        try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch (e) {}
        if (DE.indexOf(tz) > -1) return "de";
        if (ES.indexOf(tz) > -1 || tz.indexOf("America/Argentina/") === 0) return "es";
        // A real regional zone (not UTC/Etc/unknown) means a known country -> English
        if (/^(Africa|America|Antarctica|Arctic|Asia|Atlantic|Australia|Europe|Indian|Pacific)\//.test(tz)) return "en";
        return null;
    }

    function fromBrowserLanguages() {
        var list = nav.languages && nav.languages.length ? nav.languages : [nav.language || ""];
        for (var i = 0; i < list.length; i++) {
            var code = String(list[i]).slice(0, 2).toLowerCase();
            if (LANGS.indexOf(code) > -1) return code;
        }
        return null;
    }

    var saved = null;
    try { saved = localStorage.getItem("lang"); } catch (e) {}

    var lang = LANGS.indexOf(saved) > -1 ? saved : (fromTimeZone() || fromBrowserLanguages() || "de");

    if (lang !== "de") {
        location.replace("/" + lang + "/" + location.search + location.hash);
    }
})();
