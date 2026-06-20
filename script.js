// ==========================================
// 1. ระบบลูกเล่นย้ายหน้าต่างจำลอง (Tab Switcher)
// ==========================================
const navLinks = document.querySelectorAll('nav a');
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
        if (item.getAttribute('href') === targetId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    sections.forEach(section => {
        if ('#' + section.id === targetId) {
            section.style.display = 'block';
            if (targetId === '#map-section' && window.airwiseMap) {
                setTimeout(() => { window.airwiseMap.invalidateSize(); }, 100);
            }
        } else {
            section.style.display = 'none';
        }
    });
}

// ==========================================
// 2. ข้อมูลพิกัดและระบบเชื่อมต่อ OpenWeather API
// ==========================================

// 🔑 นำรหัส API Key ของคุณมาใส่ตรงนี้เหมือนเดิมครับ
const OPENWEATHER_API_KEY = 'วางรหัส API KEY ของคุณตรงนี้'; 

const amphoeCoordinates = {
    "เมือง": { lat: 8.4304, lon: 99.9631 },
    "พรหมคีรี": { lat: 8.5441, lon: 99.8242 },
    "ลานสกา": { lat: 8.3516, lon: 99.7891 },
    "ฉวาง": { lat: 8.4411, lon: 99.5019 },
    "พิปูน": { lat: 8.5639, lon: 99.5936 },
    "เชียรใหญ่": { lat: 8.1883, lon: 100.1283 },
    "ชะอวด": { lat: 7.9644, lon: 99.9983 },
    "ท่าศาลา": { lat: 8.6677, lon: 99.9197 },
    "ทุ่งสง": { lat: 8.1642, lon: 99.6811 },
    "นาบอน": { lat: 8.2575, lon: 99.5997 },
    "ทุ่งใหญ่": { lat: 8.2939, lon: 99.3814 },
    "ปากพนัง": { lat: 8.3547, lon: 100.1972 },
    "ร่อนพิบูลย์": { lat: 8.1814, lon: 99.8519 },
    "สิชล": { lat: 9.0069, lon: 99.9161 },
    "ขนอม": { lat: 9.2047, lon: 99.8583 },
    "หัวไทร": { lat: 8.0419, lon: 100.2797 },
    "บางขัน": { lat: 8.0194, lon: 99.4636 },
    "ถ้ำพรรณรา": { lat: 8.4194, lon: 99.3919 },
    "จุฬาภรณ์": { lat: 8.0664, lon: 99.8731 },
    "พระพรหม": { lat: 8.3664, lon: 99.9431 },
    "นบพิตำ": { lat: 8.7183, lon: 99.7567 },
    "ช้างกลาง": { lat: 8.3619, lon: 99.5694 },
    "เฉลิมพระเกียรติ": { lat: 8.1831, lon: 100.0631 }
};

// คลังเก็บข้อมูลฝุ่นที่ดึงมาได้ทั้งหมดเพื่อเอาไปใช้คำนวณหน้าแรก
let allAmphoeData = [];

// ฟังก์ชันหลักดึงค่าฝุ่นรายอำเภอ (แท็บที่ 2)
const amphoeSelect = document.getElementById('amphoe-select');
if (amphoeSelect) {
    amphoeSelect.addEventListener('change', async function() {
        const selectedAmphoe = this.value;
        const coords = amphoeCoordinates[selectedAmphoe];
        if (!coords) return;

        document.getElementById('pm-num').innerText = "...";
        document.getElementById('pm-badge').innerText = "กำลังอัปเดต...";
        document.getElementById('pm-badge').style.backgroundColor = "#cbd5e1";
        document.getElementById('air-result-card').style.display = "block";

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${coords.lat}&lon=${coords.lon}&appid=${OPENWEATHER_API_KEY}`);
            const data = await response.json();
            const pm25Value = Math.round(data.list[0].components.pm2_5);
            
            document.getElementById('selected-amphoe-title').innerText = "อำเภอ" + selectedAmphoe;
            document.getElementById('pm-num').innerText = pm25Value;

            let statusText = "";
            let statusColor = "";
            let adviceScript = "";

            if (pm25Value <= 15) {
                statusText = "อากาศดีมาก"; statusColor = "#10b981";
                adviceScript = `ขณะนี้อำเภอ${selectedAmphoe} มีปริมาณฝุ่นเพียง ${pm25Value} ไมโครกรัมต่อลูกบาศก์เมตร สภาพอากาศบริสุทธิ์ดีเยี่ยมค่ะ เหมาะสมกับการทำกิจกรรมกลางแจ้งได้อย่างปลอดภัยหายห่วงเลยนะคะ`;
            } else if (pm25Value <= 37.5) {
                statusText = "อากาศปานกลาง"; statusColor = "#f59e0b";
                adviceScript = `ตรวจสอบพบปริมาณฝุ่นที่อำเภอ${selectedAmphoe} อยู่ที่ ${pm25Value} ไมโครกรัมต่อลูกบาศก์เมตร สภาพอากาศอยู่ในเกณฑ์ปานกลางค่ะ ประชาชนทั่วไปใช้ชีวิตได้ตามปกติ แต่สำหรับกลุ่มเสี่ยงควรลดระยะเวลาทำกิจกรรมกลางแจ้งลงนิดหน่อยนะคะ`;
            } else {
                statusText = "เริ่มมีผลกระทบ"; statusColor = "#ef4444";
                adviceScript = `แจ้งเตือนค่ะ! อำเภอ${selectedAmphoe} มีปริมาณฝุ่นสูงถึง ${pm25Value} ไมโครกรัมต่อลูกบาศก์เมตร เริ่มมีผลกระทบต่อสุขภาพแล้ว แนะนำให้หลีกเลี่ยงกิจกรรมกลางแจ้ง และอย่าลืมสวมหน้ากากอนามัยป้องกันฝุ่นทุกครั้งนะคะ`;
            }

            document.getElementById('pm-badge').innerText = statusText;
            document.getElementById('pm-badge').style.backgroundColor = statusColor;

            const analysisZone = document.getElementById('analysis-zone');
            analysisZone.style.opacity = "1";
            analysisZone.style.pointerEvents = "auto";
            document.getElementById('protection-text').innerText = adviceScript; 
            document.getElementById('btn-speak').disabled = false;

            if (window.speechSynthesis) window.speechSynthesis.cancel();
            document.getElementById('character-img').src = 'assets/character-idle.png';
            document.getElementById('btn-speak').innerHTML = '🔊 กดเพื่อฟังการวิเคราะห์จากนกฮูก';

        } catch (error) {
            console.error(error);
            document.getElementById('pm-num').innerText = "Error";
        }
    });
}

// ==========================================
// 3. ฟังก์ชันดึงข้อมูล "ภาพรวมจังหวัด" และ "จัดอันดับ Top 3" (รันตอนโหลดเว็บ)
// ==========================================
async function loadDashboardData() {
    if (OPENWEATHER_API_KEY === 'วางรหัส API KEY ของคุณตรงนี้') return;

    // สุ่มดึงข้อมูลมาสัก 6 อำเภอหลักเพื่อประมวลผลความเร็ว (หรือเพิ่มได้ตามต้องการ)
    const sampleAmphoes = ["เมือง", "ทุ่งสง", "ท่าศาลา", "ปากพนัง", "สิชล", "หัวไทร"];
    let totalPM = 0;
    let count = 0;
    let rankList = [];

    for (let name of sampleAmphoes) {
        try {
            const coords = amphoeCoordinates[name];
            const response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${coords.lat}&lon=${coords.lon}&appid=${OPENWEATHER_API_KEY}`);
            const data = await response.json();
            const pm25 = Math.round(data.list[0].components.pm2_5);
            
            totalPM += pm25;
            count++;
            rankList.push({ name: name, pm: pm25 });
        } catch (e) {
            console.log("Error fetching ranking for " + name);
        }
    }

    if (count > 0) {
        // 1. คำนวณและแสดงค่าเฉลี่ยจังหวัด
        const avgPM = Math.round(totalPM / count);
        document.getElementById('avg-pm-display').innerHTML = `${avgPM} <span style="font-size: 1.2rem;">µg/m³</span>`;
        
        const badge = document.getElementById('avg-status-badge');
        const card = document.getElementById('provincial-card');
        if (avgPM <= 15) {
            badge.innerText = "ภาพรวมดีมาก"; card.style.backgroundColor = "#10b981";
        } else if (avgPM <= 37.5) {
            badge.innerText = "ภาพรวมปานกลาง"; card.style.backgroundColor = "#f59e0b";
        } else {
            badge.innerText = "เริ่มมีผลกระทบ"; card.style.backgroundColor = "#ef4444";
        }

        // 2. จัดอันดับ Top 3 ฝุ่นสูงสุด
        rankList.sort((a, b) => b.pm - a.pm); // เรียงจากมากไปน้อย
        const top3 = rankList.slice(0, 3);
        
        let listHTML = "";
        top3.forEach((item, index) => {
            let color = index === 0 ? "#ef4444" : (index === 1 ? "#f59e0b" : "#3b82f6");
            listHTML += `
                <div style="display: flex; justify-content: space-between; align-items: center; background: #f8fafc; padding: 0.8rem 1rem; border-radius: 8px; border-left: 4px solid ${color};">
                    <span style="font-weight: 500;">🛑 อันดับ ${index+1} : อำเภอ${item.name}</span>
                    <span style="font-weight: 600; color: ${color};">${item.pm} µg/m³</span>
                </div>
            `;
        });
        document.getElementById('top-dangerous-list').innerHTML = listHTML;
    }
}

// ==========================================
// 4. ระบบเสียงอ่านพากย์ตัวละคร
// ==========================================
const btnSpeak = document.getElementById('btn-speak');
if (btnSpeak && 'speechSynthesis' in window) {
    btnSpeak.addEventListener('click', () => {
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
            return;
        }
        const text = document.getElementById('protection-text').innerText;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'th-TH';
        utterance.rate = 1.1;

        utterance.onstart = () => {
            document.getElementById('character-img').src = 'assets/character-talking.png';
            btnSpeak.innerHTML = '🛑 กดเพื่อหยุดพูด';
        };
        utterance.onend = () => {
            document.getElementById('character-img').src = 'assets/character-idle.png';
            btnSpeak.innerHTML = '🔊 กดเพื่อฟังการวิเคราะห์จากนกฮูก';
        };
        window.speechSynthesis.speak(utterance);
    });
}

// ==========================================
// 5. ระบบแผนที่พื้นฐาน
// ==========================================
function initMap() {
    const nakhonLatLong = [8.4304, 99.9631];
    const map = L.map('map').setView(nakhonLatLong, 9);
    window.airwiseMap = map;
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    L.marker(nakhonLatLong).addTo(map).bindPopup('<b>ศูนย์ประสานงาน AIRWISE</b>').openPopup();
}

window.addEventListener('DOMContentLoaded', () => {
    initMap();
    loadDashboardData(); // สั่งให้โหลดข้อมูลแดชบอร์ดทันทีเมื่อเปิดเว็บ
});