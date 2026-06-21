// ==========================================
// 0. ระบบสลับภาษา (TH / EN Localization)
// ==========================================
let currentLang = 'th'; 

const amphoeNamesEN = {
    "เมือง": "Mueang", "พรหมคีรี": "Phrom Khiri", "ลานสกา": "Lan Saka", "ฉวาง": "Chawang",
    "พิปูน": "Phipun", "เชียรใหญ่": "Chian Yai", "ชะอวด": "Cha-uat", "ท่าศาลา": "Tha Sala",
    "ทุ่งสง": "Thung Song", "นาบอน": "Nabon", "ทุ่งใหญ่": "Thung Yai", "ปากพนัง": "Pak Phanang",
    "ร่อนพิบูลย์": "Ron Phibun", "สิชล": "Sichon", "ขนอม": "Khanom", "หัวไทร": "Hua Sai",
    "บางขัน": "Bang Khan", "ถ้ำพรรณรา": "Tham Phannara", "จุฬาภรณ์": "Chulabhorn", "พระพรหม": "Phra Phrom",
    "นบพิตำ": "Nopphitam", "ช้างกลาง": "Chang Klang", "เฉลิมพระเกียรติ": "Chaloem Phra Kiat"
};

const translations = {
    th: {
        navHome: "🏠 หน้าแรก", navAir: "📊 ข้อมูลคุณภาพอากาศ", navMap: "🗺️ แผนที่มลพิษ", navInfo: "📝 สาเหตุและคำแนะนำ",
        heroTitle: "อากาศบริสุทธิ์<br>เพื่อชุมชนสุขภาพดี",
        heroDesc: "นวัตกรรมระบบฐานข้อมูลภูมิสารสนเทศและการรายงานสถิติฝุ่นละอองขนาดเล็กเรียลไทม์ ครอบคลุมพื้นที่ทั้ง 23 อำเภอ ขับเคลื่อนการเฝ้าระวังโดยเครือข่ายโรงเรียนในจังหวัดนครศรีธรรมราช",
        btnExplore: "🔍 ตรวจสอบรายอำเภอ", btnMap: "🗺️ เปิดแผนที่ขนาดใหญ่",
        dashTitle1: "🌍 สถานการณ์ภาพรวมจังหวัด", dashDesc1: "ค่าเฉลี่ยฝุ่นรวมทั้งจังหวัด",
        dashUpdate: "📍 ข้อมูลอัปเดต: เรียลไทม์จากระบบเครือข่าย", dashCover: "👥 ครอบคลุมพื้นที่การประมวลผล: ทั้ง 23 อำเภอ",
        dashTitle2: "⚠️ พื้นที่เฝ้าระวังค่าฝุ่นสูงสุด (Top 3)",
        airTitle: "📊 รายงานสถานการณ์ฝุ่นรายอำเภอ", airDesc: "เลือกอำเภอที่คุณต้องการตรวจสอบเพื่อฟังสรุปผลวิเคราะห์จากน้อง Wisdom Owl",
        airLabel: "📌 เลือกอำเภอในจังหวัดนครศรีธรรมราช:", defaultOpt: "-- กรุณาเลือกอำเภอ --",
        defaultText: "กรุณาเลือกอำเภอทางด้านซ้าย เพื่อให้น้อง Wisdom Owl เริ่มทำการวิเคราะห์สภาพอากาศและอ่านสคริปต์คำแนะนำให้ฟังค่ะ...",
        btnSpeakIdle: "🔊 กดเพื่อฟังการวิเคราะห์จากนกฮูก", btnSpeakActive: "🛑 กดเพื่อหยุดพูด",
        mapTitle: "🗺️ แผนที่พิกัดความหนาแน่นเชิงพื้นที่", mapDesc: "แสดงการกระจายตัวของมลพิษและฝุ่นละออง PM2.5 แบบเรียลไทม์",
        footerDesc: "พัฒนาขึ้นเพื่อสืบสานนวัตกรรมข้อมูลสุขภาพของชุมชนและโรงเรียนในพื้นที่",
        causeHeading: "⚠️ สาเหตุหลัก", preventHeading: "💡 วิธีป้องกันและแก้ไข",
        zones: {
            1: { title: "🌊 1. โซนทะเล", sub: "(ขนอม, สิชล, ท่าศาลา, ปากพนัง, หัวไทร, เชียรใหญ่)" },
            2: { title: "⛰️ 2. โซนภูเขา", sub: "(ลานสกา, พรหมคีรี, นบพิตำ, พิปูน, ฉวาง, ถ้ำพรรณรา, ช้างกลาง, จุฬาภรณ์)" },
            3: { title: "🏭 3. โซนอุตสาหกรรม", sub: "(เมือง, ทุ่งสง, ร่อนพิบูลย์, ทุ่งใหญ่)" },
            4: { title: "🌾 4. โซนเกษตรกรรม", sub: "(ชะอวด, บางขัน, นาบอน, พระพรหม, เฉลิมพระเกียรติ)" }
        },
        causes: {
            1: ["เขม่าควันจากเครื่องยนต์เรือประมงและท่อไอเสียรถยนต์", "ฝุ่น ควัน และกลิ่นจากโรงงานแปรรูปปลา/อาหารสัตว์", "การเผาวัสดุเหลือใช้ทางการเกษตร"],
            2: ["การเผากิ่งไม้ ใบไม้ และการจัดการพื้นที่ในสวนยางพารา", "ฝุ่นจากโรงงานแปรรูปไม้ยางพารา", "ฝุ่นและสารเคมีจากการกำจัดวัชพืชทางการเกษตร"],
            4: ["เผาฟางข้าว (พระพรหม, เฉลิมพระเกียรติ)", "เผาใบยางพารา และไฟไหม้ป่าพรุ (ชะอวด, บางขัน, นาบอน)", "หมอกควันข้ามแดนจากพื้นที่อื่นพัดเข้ามา"]
        },
        prevents: {
            1: ["ตรวจสภาพเครื่องยนต์และใช้เชื้อเพลิงสะอาดลดควันดำ", "ติดตั้งระบบบำบัดอากาศในโรงงานและเพิ่มพื้นที่สีเขียว", "งดการเผาเศษวัสดุเกษตร เปลี่ยนเป็นทำปุ๋ยหมัก"],
            2: ["ลดการเผา ใช้วิธีไถกลบหรือทำปุ๋ยอินทรีย์แทน", "เลี่ยงพื้นที่โรงเลื่อย หรือสวมหน้ากากป้องกันฝุ่นไม้", "ใช้สารเคมีอย่างถูกวิธี และปลูกต้นไม้เพิ่มตามเชิงเขา"],
            4: ["ไถกลบตอซัง นำไปผลิตปุ๋ยหรือเชื้อเพลิงชีวมวลแทน", "จัดทำแนวกันไฟ เฝ้าระวังไฟป่าพรุ และปลูกต้นไม้กันลม", "ติดตามค่าฝุ่น และประสานงานลดการเผาช่วงวิกฤต"]
        },
        ind: {
            muang: "<strong>📍 อ.เมือง (จราจร/ก่อสร้าง)</strong><ul style='margin-bottom:0.8rem; margin-top:0.3rem;'><li><span style='color:#ef4444;'>สาเหตุ:</span> ควันรถยนต์หนาแน่น ฝุ่นจากถนนและงานก่อสร้าง</li><li><span style='color:#10b981;'>ป้องกัน:</span> พัฒนาขนส่งสาธารณะ ตรวจควันดำ รดน้ำลดฝุ่น</li></ul>",
            thongsong: "<strong>📍 อ.ทุ่งสง & ร่อนพิบูลย์ (ปูนซีเมนต์/เหมือง)</strong><ul style='margin-bottom:0.8rem; margin-top:0.3rem;'><li><span style='color:#ef4444;'>สาเหตุ:</span> เหมืองหิน โรงโม่ การระเบิดหิน รถบรรทุกขนส่ง</li><li><span style='color:#10b981;'>ป้องกัน:</span> ติดระบบดักฝุ่น รดน้ำเหมือง คลุมผ้าใบรถบรรทุก</li></ul>",
            thungyai: "<strong>📍 อ.ทุ่งใหญ่ (โรงเลื่อย/ขยะ)</strong><ul style='margin-top:0.3rem;'><li><span style='color:#ef4444;'>สาเหตุ:</span> โรงงานเลื่อยไม้ และปัญหาการลักลอบเผาขยะ</li><li><span style='color:#10b981;'>ป้องกัน:</span> คัดแยกขยะอย่างจริงจัง สวมหน้ากากกันฝุ่น</li></ul>"
        }
    },
    en: {
        navHome: "🏠 Home", navAir: "📊 Air Quality", navMap: "🗺️ Dust Map", navInfo: "📝 Causes & Solutions",
        heroTitle: "Clean Air<br>For a Healthy Community",
        heroDesc: "An innovative real-time PM2.5 geospatial database and reporting system covering all 23 districts, driven by the local school network in Nakhon Si Thammarat.",
        btnExplore: "🔍 Check by District", btnMap: "🗺️ Open Large Map",
        dashTitle1: "🌍 Provincial Overview", dashDesc1: "Average PM2.5 across the province",
        dashUpdate: "📍 Last Updated: Real-time from the network", dashCover: "👥 Coverage: All 23 Districts",
        dashTitle2: "⚠️ Top 3 Monitored Areas",
        airTitle: "📊 District Air Quality Report", airDesc: "Select a district to check and listen to Wisdom Owl's analysis.",
        airLabel: "📌 Select a district in Nakhon Si Thammarat:", defaultOpt: "-- Please select a district --",
        defaultText: "Please select a district on the left so Wisdom Owl can analyze the air quality and read the recommendations for you...",
        btnSpeakIdle: "🔊 Listen to Owl's analysis", btnSpeakActive: "🛑 Stop speaking",
        mapTitle: "🗺️ Spatial Density Map", mapDesc: "Real-time PM2.5 pollution distribution map",
        footerDesc: "Developed to sustain health data innovation for local communities and schools.",
        causeHeading: "⚠️ Main Causes", preventHeading: "💡 Solutions & Preventions",
        zones: {
            1: { title: "🌊 1. Coastal Zone", sub: "(Khanom, Sichon, Tha Sala, Pak Phanang, Hua Sai, Chian Yai)" },
            2: { title: "⛰️ 2. Mountainous Zone", sub: "(Lan Saka, Phrom Khiri, Nopphitam, Phipun, Chawang, Tham Phannara, Chang Klang, Chulabhorn)" },
            3: { title: "🏭 3. Industrial Zone", sub: "(Mueang, Thung Song, Ron Phibun, Thung Yai)" },
            4: { title: "🌾 4. Agricultural Zone", sub: "(Cha-uat, Bang Khan, Nabon, Phra Phrom, Chaloem Phra Kiat)" }
        },
        causes: {
            1: ["Soot and smoke from fishing boats and vehicle exhausts", "Dust, smoke, and odor from fish processing & animal feed factories", "Burning of agricultural waste materials"],
            2: ["Burning branches and leaves in rubber plantations", "Wood dust from rubberwood processing factories", "Dust and chemicals from agricultural weed control"],
            4: ["Rice straw burning (Phra Phrom, Chaloem Phra Kiat)", "Rubber leaf burning and peat swamp forest fires (Cha-uat, Bang Khan, Nabon)", "Transboundary haze blowing in from other regions"]
        },
        prevents: {
            1: ["Regularly check engines and use clean fuel to reduce black smoke", "Install air treatment systems in factories and increase green spaces", "Stop burning agricultural waste and convert it to compost"],
            2: ["Reduce burning; use tillage or organic composting methods", "Avoid sawmill areas or wear masks to protect from wood dust", "Use herbicides correctly and plant more trees on slopes"],
            4: ["Plough rice stubble instead of burning; convert waste into biomass fuel", "Create firebreaks and monitor peat swamp forest fires closely", "Track PM2.5 levels continuously and alert the public"]
        },
        ind: {
            muang: "<strong>📍 Mueang District (Traffic & Construction)</strong><ul style='margin-bottom:0.8rem; margin-top:0.3rem;'><li><span style='color:#ef4444;'>Causes:</span> Heavy traffic smoke, dust from roads and construction sites</li><li><span style='color:#10b981;'>Prevention:</span> Develop public transit, inspect black smoke, spray water to suppress dust</li></ul>",
            thongsong: "<strong>📍 Thung Song & Ron Phibun (Cement & Mining)</strong><ul style='margin-bottom:0.8rem; margin-top:0.3rem;'><li><span style='color:#ef4444;'>Causes:</span> Limestone quarries, stone crushing, blasting, and cargo trucks</li><li><span style='color:#10b981;'>Prevention:</span> Install high-efficiency dust filters, spray water at mines, cover trucks</li></ul>",
            thungyai: "<strong>📍 Thung Yai District (Sawmill & Waste)</strong><ul style='margin-top:0.3rem;'><li><span style='color:#ef4444;'>Causes:</span> Wood sawmills and illegal open-air garbage burning</li><li><span style='color:#10b981;'>Prevention:</span> Promote waste segregation, strictly ban burning, increase inspection</li></ul>"
        }
    }
};

const textMappings = {
    'nav-home': 'navHome', 'nav-air': 'navAir', 'nav-map': 'navMap', 'nav-info': 'navInfo',
    'hero-title': 'heroTitle', 'hero-desc': 'heroDesc', 'btn-explore': 'btnExplore', 'btn-map': 'btnMap',
    'dash-title1': 'dashTitle1', 'dash-desc1': 'dashDesc1', 'dash-update': 'dashUpdate', 'dash-cover': 'dashCover',
    'dash-title2': 'dashTitle2', 'air-title': 'airTitle', 'air-desc': 'airDesc', 'air-label': 'airLabel',
    'map-title': 'mapTitle', 'map-desc': 'mapDesc', 'footer-desc': 'footerDesc', 'info-main-title': 'navInfo'
};

function switchLanguage(lang) {
    currentLang = lang;
    const data = translations[lang];

    // เปลี่ยนคำทั่วไปทั้งหมด
    for (const [id, key] of Object.entries(textMappings)) {
        const el = document.getElementById(id);
        if (el) {
            if (id === 'hero-title' || id === 'hero-desc') el.innerHTML = data[key];
            else el.innerText = data[key];
        }
    }

    // อัปเดตรายชื่ออำเภอในช่อง Select
    const select = document.getElementById("amphoe-select");
    if (select) {
        select.options[0].innerText = data.defaultOpt;
        for (let i = 1; i < select.options.length; i++) {
            let val = select.options[i].value;
            let prefix = val === "เมือง" ? "" : "▲ ";
            select.options[i].innerText = lang === 'en' ? `${prefix}${amphoeNamesEN[val]} District` : `${prefix}อำเภอ${val}`;
        }
    }

    // เปลี่ยนคำกล่องความรู้โซนต่างๆ
    document.querySelectorAll(".cause-heading").forEach(el => el.innerText = data.causeHeading);
    document.querySelectorAll(".prevent-heading").forEach(el => el.innerText = data.preventHeading);
    document.querySelectorAll(".zone-title").forEach(el => { const id = el.getAttribute("data-zone"); if(data.zones[id]) el.innerText = data.zones[id].title; });
    document.querySelectorAll(".zone-sub").forEach(el => { const id = el.getAttribute("data-zone"); if(data.zones[id]) el.innerText = data.zones[id].sub; });
    document.querySelectorAll(".cause-list").forEach(el => { const id = el.getAttribute("data-zone"); if (data.causes[id]) el.innerHTML = data.causes[id].map(item => `<li>${item}</li>`).join(''); });
    document.querySelectorAll(".prevent-list").forEach(el => { const id = el.getAttribute("data-zone"); if (data.prevents[id]) el.innerHTML = data.prevents[id].map(item => `<li>${item}</li>`).join(''); });
    document.querySelectorAll(".ind-subzone").forEach(el => { const sub = el.getAttribute("data-sub"); if (data.ind[sub]) el.innerHTML = data.ind[sub]; });

    // เปลี่ยนสีปุ่มเมนู
    const btnTh = document.getElementById("btn-th"); const btnEn = document.getElementById("btn-en");
    if (lang === 'th') {
        if(btnTh) { btnTh.style.background = "#2563eb"; btnTh.style.color = "white"; }
        if(btnEn) { btnEn.style.background = "transparent"; btnEn.style.color = "#64748b"; }
    } else {
        if(btnEn) { btnEn.style.background = "#2563eb"; btnEn.style.color = "white"; }
        if(btnTh) { btnTh.style.background = "transparent"; btnTh.style.color = "#64748b"; }
    }

    // อัปเดตข้อมูลแดชบอร์ด (รีโหลดหน้าจอโดยไม่ดึงข้อมูลใหม่ให้เสียเวลา)
    if (cachedDashData) renderDashboard(cachedDashData.avgPM, cachedDashData.top3);

    // อัปเดตข้อมูลกล่องนกฮูก
    if (select && select.value && cachedAmphoeData[select.value]) {
        renderSelectedAmphoe(select.value, cachedAmphoeData[select.value]);
    } else {
        const textEl = document.getElementById('protection-text');
        if (textEl) textEl.innerText = data.defaultText;
        const engElement = document.getElementById('protection-text-en');
        if (engElement) engElement.style.display = 'none';
        
        const btnSpeak = document.getElementById("btn-speak");
        if (btnSpeak && !window.speechSynthesis.speaking) btnSpeak.innerHTML = data.btnSpeakIdle;
    }
}

// ==========================================
// 1. ระบบลูกเล่นย้ายหน้าต่างจำลอง (Tab Switcher)
// ==========================================
const navLinks = document.querySelectorAll('nav a.nav-link');
const sections = document.querySelectorAll('.content-section');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSectionId = this.getAttribute('href');
        switchToTab(targetSectionId);
    });
});

function switchToTab(targetId) {
    navLinks.forEach(item => {
        if (item.getAttribute('href') === targetId) item.classList.add('active');
        else item.classList.remove('active');
    });

    sections.forEach(section => {
        if ('#' + section.id === targetId) {
            section.style.display = 'block';
            if (targetId === '#map-section' && window.airwiseMap) setTimeout(() => { window.airwiseMap.invalidateSize(); }, 100);
        } else {
            section.style.display = 'none';
        }
    });
}

// ==========================================
// 2. ข้อมูลพิกัดและระบบเชื่อมต่อ API
// ==========================================
const OPENWEATHER_API_KEY = '403eca128baf67c32147f04fe74a8a71'; 
const amphoeCoordinates = {
    "เมือง": { lat: 8.4304, lon: 99.9631 }, "พรหมคีรี": { lat: 8.5441, lon: 99.8242 }, "ลานสกา": { lat: 8.3516, lon: 99.7891 }, "ฉวาง": { lat: 8.4411, lon: 99.5019 },
    "พิปูน": { lat: 8.5639, lon: 99.5936 }, "เชียรใหญ่": { lat: 8.1883, lon: 100.1283 }, "ชะอวด": { lat: 7.9644, lon: 99.9983 }, "ท่าศาลา": { lat: 8.6677, lon: 99.9197 },
    "ทุ่งสง": { lat: 8.1642, lon: 99.6811 }, "นาบอน": { lat: 8.2575, lon: 99.5997 }, "ทุ่งใหญ่": { lat: 8.2939, lon: 99.3814 }, "ปากพนัง": { lat: 8.3547, lon: 100.1972 },
    "ร่อนพิบูลย์": { lat: 8.1814, lon: 99.8519 }, "สิชล": { lat: 9.0069, lon: 99.9161 }, "ขนอม": { lat: 9.2047, lon: 99.8583 }, "หัวไทร": { lat: 8.0419, lon: 100.2797 },
    "บางขัน": { lat: 8.0194, lon: 99.4636 }, "ถ้ำพรรณรา": { lat: 8.4194, lon: 99.3919 }, "จุฬาภรณ์": { lat: 8.0664, lon: 99.8731 }, "พระพรหม": { lat: 8.3664, lon: 99.9431 },
    "นบพิตำ": { lat: 8.7183, lon: 99.7567 }, "ช้างกลาง": { lat: 8.3619, lon: 99.5694 }, "เฉลิมพระเกียรติ": { lat: 8.1831, lon: 100.0631 }
};

let cachedAmphoeData = {}; // เก็บข้อมูลกันโหลดซ้ำเวลาเปลี่ยนภาษา

const amphoeSelect = document.getElementById('amphoe-select');
if (amphoeSelect) {
    amphoeSelect.addEventListener('change', async function() {
        const selectedAmphoe = this.value;
        const coords = amphoeCoordinates[selectedAmphoe];
        if (!coords) return;

        if (cachedAmphoeData[selectedAmphoe]) {
            renderSelectedAmphoe(selectedAmphoe, cachedAmphoeData[selectedAmphoe]);
            return;
        }

        document.getElementById('pm-num').innerText = "...";
        document.getElementById('pm-badge').innerText = currentLang === 'en' ? "Updating..." : "กำลังอัปเดต...";
        document.getElementById('pm-badge').style.backgroundColor = "#cbd5e1";
        document.getElementById('air-result-card').style.display = "block";

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${coords.lat}&lon=${coords.lon}&appid=${OPENWEATHER_API_KEY}`);
            const data = await response.json();
            const pm25Value = Math.round(data.list[0].components.pm2_5);
            
            cachedAmphoeData[selectedAmphoe] = pm25Value;
            renderSelectedAmphoe(selectedAmphoe, pm25Value);
        } catch (error) {
            console.error(error);
            document.getElementById('pm-num').innerText = "Error";
        }
    });
}

function renderSelectedAmphoe(selectedAmphoe, pm25Value) {
    document.getElementById('selected-amphoe-title').innerText = currentLang === 'en' ? `${amphoeNamesEN[selectedAmphoe]} District` : `อำเภอ${selectedAmphoe}`;
    document.getElementById('pm-num').innerText = pm25Value;
    document.getElementById('air-result-card').style.display = "block";

    let statusText = ""; let statusColor = ""; let adviceScript = ""; let adviceScriptEn = "";

    if (pm25Value <= 15) {
        statusText = currentLang === 'en' ? "Excellent" : "อากาศดีมาก"; statusColor = "#10b981";
        adviceScript = `ขณะนี้อำเภอ${selectedAmphoe} มีปริมาณฝุ่นเพียง ${pm25Value} ไมโครกรัมต่อลูกบาศก์เมตร สภาพอากาศบริสุทธิ์ดีเยี่ยมค่ะ เหมาะสมกับการทำกิจกรรมกลางแจ้งได้อย่างปลอดภัยหายห่วงเลยนะคะ`;
        adviceScriptEn = `Currently, the PM 2.5 level in ${amphoeNamesEN[selectedAmphoe]} is ${pm25Value} micrograms per cubic meter. The air quality is excellent. It is perfectly safe to enjoy outdoor activities.`;
    } else if (pm25Value <= 37.5) {
        statusText = currentLang === 'en' ? "Moderate" : "อากาศปานกลาง"; statusColor = "#f59e0b";
        adviceScript = `ตรวจสอบพบปริมาณฝุ่นที่อำเภอ${selectedAmphoe} อยู่ที่ ${pm25Value} ไมโครกรัมต่อลูกบาศก์เมตร สภาพอากาศอยู่ในเกณฑ์ปานกลางค่ะ ประชาชนทั่วไปใช้ชีวิตได้ตามปกติ แต่สำหรับกลุ่มเสี่ยงควรลดระยะเวลาทำกิจกรรมกลางแจ้งลงนิดหน่อยนะคะ`;
        adviceScriptEn = `The PM 2.5 level in ${amphoeNamesEN[selectedAmphoe]} is ${pm25Value} micrograms per cubic meter. The air quality is moderate. The general public can go about normal lives, but sensitive groups should reduce outdoor activities.`;
    } else {
        statusText = currentLang === 'en' ? "Unhealthy" : "เริ่มมีผลกระทบ"; statusColor = "#ef4444";
        adviceScript = `แจ้งเตือนค่ะ! อำเภอ${selectedAmphoe} มีปริมาณฝุ่นสูงถึง ${pm25Value} ไมโครกรัมต่อลูกบาศก์เมตร เริ่มมีผลกระทบต่อสุขภาพแล้ว แนะนำให้หลีกเลี่ยงกิจกรรมกลางแจ้ง และอย่าลืมสวมหน้ากากอนามัยป้องกันฝุ่นทุกครั้งนะคะ`;
        adviceScriptEn = `Warning! The PM 2.5 level in ${amphoeNamesEN[selectedAmphoe]} is as high as ${pm25Value} micrograms per cubic meter. This is unhealthy. Please avoid outdoor activities and always wear a mask.`;
    }

    document.getElementById('pm-badge').innerText = statusText;
    document.getElementById('pm-badge').style.backgroundColor = statusColor;

    const analysisZone = document.getElementById('analysis-zone');
    analysisZone.style.opacity = "1"; analysisZone.style.pointerEvents = "auto";
    
    // สร้างระบบซ่อน/โชว์ข้อความให้สอดคล้องกับภาษา
    let engElement = document.getElementById('protection-text-en');
    if (!engElement) {
        engElement = document.createElement('p');
        engElement.id = 'protection-text-en';
        engElement.style.color = '#2563eb';
        engElement.style.marginTop = '12px';
        engElement.style.fontStyle = 'italic';
        engElement.style.fontWeight = '500';
        document.getElementById('protection-text').parentNode.appendChild(engElement);
    }

    if (currentLang === 'en') {
        document.getElementById('protection-text').innerText = adviceScriptEn;
        engElement.style.display = 'none'; // ซ่อนภาษาอังกฤษตัวรอง
    } else {
        document.getElementById('protection-text').innerText = adviceScript;
        engElement.style.display = 'block'; // โชว์ภาษาอังกฤษตัวรอง
        engElement.innerText = "🇬🇧 " + adviceScriptEn;
    }

    const btnSpeak = document.getElementById('btn-speak');
    btnSpeak.disabled = false;
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    document.getElementById('character-img').src = 'assets/character-idle.png';
    btnSpeak.innerHTML = translations[currentLang].btnSpeakIdle;
}

// ==========================================
// 3. ฟังก์ชันดึงข้อมูล "ภาพรวมจังหวัด"
// ==========================================
let cachedDashData = null; // เก็บข้อมูล Top 3 ไว้ป้องกันโหลดใหม่

async function loadDashboardData() {
    if (!OPENWEATHER_API_KEY || OPENWEATHER_API_KEY === 'วางรหัส API KEY ของคุณตรงนี้') return;
    if (cachedDashData) { renderDashboard(cachedDashData.avgPM, cachedDashData.top3); return; }

    const sampleAmphoes = ["เมือง", "ทุ่งสง", "ท่าศาลา", "ปากพนัง", "สิชล", "หัวไทร"];
    let totalPM = 0; let count = 0; let rankList = [];

    for (let name of sampleAmphoes) {
        try {
            const coords = amphoeCoordinates[name];
            const response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${coords.lat}&lon=${coords.lon}&appid=${OPENWEATHER_API_KEY}`);
            const data = await response.json();
            const pm25 = Math.round(data.list[0].components.pm2_5);
            totalPM += pm25; count++; rankList.push({ name: name, pm: pm25 });
        } catch (e) { console.log("Error fetching ranking for " + name); }
    }

    if (count > 0) {
        const avgPM = Math.round(totalPM / count);
        rankList.sort((a, b) => b.pm - a.pm); 
        const top3 = rankList.slice(0, 3);
        cachedDashData = { avgPM, top3 };
        renderDashboard(avgPM, top3);
    }
}

function renderDashboard(avgPM, top3) {
    document.getElementById('avg-pm-display').innerHTML = `${avgPM} <span style="font-size: 1.2rem;">µg/m³</span>`;
    const badge = document.getElementById('avg-status-badge');
    const card = document.getElementById('provincial-card');
    
    if (avgPM <= 15) {
        badge.innerText = currentLang === 'en' ? "Excellent" : "ภาพรวมดีมาก"; 
        card.style.backgroundColor = "#10b981";
    } else if (avgPM <= 37.5) {
        badge.innerText = currentLang === 'en' ? "Moderate" : "ภาพรวมปานกลาง"; 
        card.style.backgroundColor = "#f59e0b";
    } else {
        badge.innerText = currentLang === 'en' ? "Unhealthy" : "เริ่มมีผลกระทบ"; 
        card.style.backgroundColor = "#ef4444";
    }

    let listHTML = "";
    let prefixRank = currentLang === 'en' ? "Rank" : "อันดับ";
    let prefixAmphoe = currentLang === 'en' ? "District" : "อำเภอ";

    top3.forEach((item, index) => {
        let color = index === 0 ? "#ef4444" : (index === 1 ? "#f59e0b" : "#3b82f6");
        let name = currentLang === 'en' ? amphoeNamesEN[item.name] : item.name;
        let displayStr = currentLang === 'en' ? `🛑 ${prefixRank} ${index+1} : ${name} ${prefixAmphoe}` : `🛑 ${prefixRank} ${index+1} : ${prefixAmphoe}${name}`;
        
        listHTML += `
            <div style="display: flex; justify-content: space-between; align-items: center; background: #f8fafc; padding: 0.8rem 1rem; border-radius: 8px; border-left: 4px solid ${color};">
                <span style="font-weight: 500;">${displayStr}</span>
                <span style="font-weight: 600; color: ${color};">${item.pm} µg/m³</span>
            </div>
        `;
    });
    document.getElementById('top-dangerous-list').innerHTML = listHTML;
}

// ==========================================
// 4. ระบบเสียงอ่านพากย์ตัวละคร + ขยับปากถี่ๆ
// ==========================================
const btnSpeak = document.getElementById('btn-speak');
let mouthAnimationInterval = null; // สำหรับจดจำและเคลียร์ตัวจับเวลาอนิเมชั่น
let isMouthOpen = false;

if (btnSpeak && 'speechSynthesis' in window) {
    
    // ฟังก์ชันทำหน้าที่สลับรูปปากเปิด-ปิดถี่ๆ
    function doMouthToggling() {
        const charImg = document.getElementById('character-img');
        if (!charImg) return;
        
        if (window.speechSynthesis.speaking) {
            charImg.src = isMouthOpen ? 'assets/character-idle.png' : 'assets/character-talking.png';
            isMouthOpen = !isMouthOpen;
        }
    }

    function stopMouthAndReset() {
        // 1. ล้างลูปเวลาขยับปากทิ้ง
        if (mouthAnimationInterval) {
            clearInterval(mouthAnimationInterval);
            mouthAnimationInterval = null;
        }
        // 2. คืนรูปนกฮูกท่านิ่ง
        const charImg = document.getElementById('character-img');
        if (charImg) charImg.src = 'assets/character-idle.png';
        isMouthOpen = false;
        // 3. เปลี่ยนคำที่ปุ่มกลับมาเป็นค่าเริ่มต้น
        btnSpeak.innerHTML = translations[currentLang].btnSpeakIdle;
    }

    btnSpeak.addEventListener('click', () => {
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
            stopMouthAndReset();
            return;
        }
        
        let textToSpeak = "";
        const utterance = new SpeechSynthesisUtterance();

        if (currentLang === 'en') {
            textToSpeak = document.getElementById('protection-text').innerText;
        } else {
            const engElement = document.getElementById('protection-text-en');
            if (!engElement) return;
            textToSpeak = engElement.innerText.replace("🇬🇧 ", "");
        }
        
        utterance.text = textToSpeak;
        utterance.lang = 'en-US'; 
        utterance.rate = 0.85;  
        utterance.volume = 1.0; 

        const availableVoices = window.speechSynthesis.getVoices();
        const engVoice = availableVoices.find(v => v.lang === 'en-US' || v.lang.includes('en'));
        if (engVoice) utterance.voice = engVoice;

        utterance.onstart = () => {
            btnSpeak.innerHTML = translations[currentLang].btnSpeakActive;
            
            // 🌟 ขยับปากถี่ๆ: ตั้งให้สลับรูปภาพทุกๆ 350 มิลลิวินาที (ถี่ขึ้นและกำลังพอดีกับการพูดภาษาอังกฤษ)
            if (mouthAnimationInterval) clearInterval(mouthAnimationInterval);
            mouthAnimationInterval = setInterval(doMouthToggling, 350);
        };

        utterance.onend = stopMouthAndReset;
        utterance.onerror = (event) => {
            console.error('Speech Error:', event);
            stopMouthAndReset();
        };

        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
    });
}

if ('speechSynthesis' in window) {
    window.speechSynthesis.getVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => { window.speechSynthesis.getVoices(); };
    }
}

// ==========================================
// 5. ระบบแผนที่พื้นฐาน (อัปเกรดเป็นสไตล์เมืองอัจฉริยะ คลีนและเด่นชัด)
// ==========================================
function initMap() {
    const nakhonLatLong = [8.4304, 99.9631];
    
    // สร้างแผนที่กำหนดให้อยู่ในตัวแปรหลัก
    const map = L.map('map').setView(nakhonLatLong, 9);
    window.airwiseMap = map;
    
    // 🏙️ เปลี่ยน TileLayer เป็น CartoDB Positron
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);
    
    // ปักหมุดพิกัดศูนย์ประสานงานหลัก
    L.marker(nakhonLatLong).addTo(map)
        .bindPopup('<b>🏢 ศูนย์ประสานงาน AIRWISE</b><br>ระบบเฝ้าระวังคุณภาพอากาศนครศรีธรรมราช')
        .openPopup();
}

// ========================================================
// 6. ระบบเริ่มต้นทำงานเมื่อโหลดหน้าเว็บ (Event Listener DOMContentLoaded)
// ========================================================
window.addEventListener('DOMContentLoaded', () => {
    // เริ่มทำงานระบบแผนที่และแดชบอร์ดภาพรวม
    initMap();
    loadDashboardData(); 
    
    // ตั้งค่าปุ่มสลับภาษา TH / EN ให้เชื่อมโยงกับฟังก์ชัน switchLanguage
    const btnTh = document.getElementById("btn-th");
    const btnEn = document.getElementById("btn-en");
    if (btnTh) btnTh.addEventListener('click', () => switchLanguage('th'));
    if (btnEn) btnEn.addEventListener('click', () => switchLanguage('en'));

    // ตั้งค่าส่วนควบคุมเมนู 3 ขีด (Mobile Hamburger Menu)
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // คลิกที่ลิงก์ในเมนูแล้วให้ปิดแถบลงอัตโนมัติ
        document.querySelectorAll('#nav-menu .nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // ตั้งค่าหน้าต่าง Modal คณะผู้จัดทำโครงงาน (Producer Modal)
    const btnProducer = document.getElementById('btn-producer');
    const producerModal = document.getElementById('producer-modal');
    const closeProducer = document.getElementById('close-producer');

    if (btnProducer && producerModal && closeProducer) {
        btnProducer.addEventListener('click', () => { 
            producerModal.style.display = 'flex'; 
        });
        closeProducer.addEventListener('click', () => { 
            producerModal.style.display = 'none'; 
        });
        producerModal.addEventListener('click', (e) => { 
            if (e.target === producerModal) producerModal.style.display = 'none'; 
        });
    }
});