const translations = {
    en: {
        // Sidebar
        dash: "Dashboard",
        prof: "My Profile",
        fac: "Faculty Directory",
        pub: "Publications",
        gran: "Grants & Funding",
        lab: "Lab Infrastructure",
        stat: "Management Stats",
        time: "Research Timeline",
        log: "LOGOUT",
        // Main Headers
        welcome: "Research Workspace",
        sub_head: "Comprehensive Campus Dashboard",
        campus: "Vellore Campus",
        inst_res: "Institutional Resources",
        pers_port: "Personal Portfolio",
        // Card Titles
        c1_t: "Expertise Directory",
        c2_t: "Research Output",
        c3_t: "Infrastructure",
        c4_t: "My Attendance",
        c5_t: "Active Grants",
        c6_t: "PhD Timeline",
        // Button Mini
        btn_view: "View Details",
        btn_check: "Check Status"
    },
    ml: {
        // Sidebar
        dash: "ഡാഷ്‌ബോർഡ്",
        prof: "എന്റെ പ്രൊഫൈൽ",
        fac: "ഫാക്കൽറ്റി ഡയറക്ടറി",
        pub: "പ്രസിദ്ധീകരണങ്ങൾ",
        gran: "ഗ്രാന്റുകളും ഫണ്ടിംഗും",
        lab: "ലാബ് സൗകര്യങ്ങൾ",
        stat: "മാനേജ്മെന്റ് സ്റ്റാറ്റിസ്റ്റിക്സ്",
        time: "ഗവേഷണ ടൈംലൈൻ",
        log: "ലോഗൗട്ട്",
        // Main Headers
        welcome: "ഗവേഷണ ഇടം",
        sub_head: "സമഗ്രമായ ക്യാമ്പസ് ഡാഷ്‌ബോർഡ്",
        campus: "വെല്ലൂർ ക്യാമ്പസ്",
        inst_res: "സ്ഥാപന വിഭവങ്ങൾ",
        pers_port: "വ്യക്തിഗത പോർട്ട്‌ഫോളിയോ",
        // Card Titles
        c1_t: "വിദഗ്ദ്ധ ഡയറക്ടറി",
        c2_t: "ഗവേഷണ ഫലം",
        c3_t: "അടിസ്ഥാന സൗകര്യങ്ങൾ",
        c4_t: "എന്റെ ഹാജർ",
        c5_t: "സജീവ ഗ്രാന്റുകൾ",
        c6_t: "പിഎച്ച്ഡി ടൈംലൈൻ",
        // Button Mini
        btn_view: "വിശദാംശങ്ങൾ",
        btn_check: "നില പരിശോധിക്കുക"
    }
};

function applyLanguage() {
    const currentLang = localStorage.getItem('preferred_lang') || 'en';
    
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLang][key]) {
            // Check if it's a span/p/h or an input
            if (element.tagName === 'INPUT' && element.placeholder) {
                element.placeholder = translations[currentLang][key];
            } else {
                element.innerText = translations[currentLang][key];
            }
        }
    });

    // Update toggle buttons visual state if they exist on the page
    if(document.getElementById('btn-en')) {
        document.getElementById('btn-en').classList.toggle('active', currentLang === 'en');
        document.getElementById('btn-ml').classList.toggle('active', currentLang === 'ml');
    }
}

function toggleLanguage(lang) {
    localStorage.setItem('preferred_lang', lang);
    applyLanguage();
}

// Run on every page load
document.addEventListener("DOMContentLoaded", applyLanguage);