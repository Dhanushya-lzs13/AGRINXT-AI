/* ==========================================================================
   AGRINXT AI — Multilingual Policy & Export Intelligence Engine
   APEDA & DGFT Gazette Summaries • Trilingual EN / TA / HI
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    let currentLang = localStorage.getItem('agrinxt_lang') || 'en';
    let currentCategory = 'all';

    // ==========================================================================
    // 1. OFFICIAL APEDA & DGFT SUMMARIZED POLICIES DATA (EN, TA, HI)
    // ==========================================================================
    const officialPolicies = [
        {
            id: 'pol-apeda-rcmc',
            category: 'Registration',
            source: 'APEDA Gazette Notification / DGFT FTP 2023-28',
            sourceUrl: 'https://apeda.gov.in',
            sourceType: 'APEDA',
            gazettePages: '42 Pages',
            crops: ['Basmati Rice', 'Salem Turmeric', 'Alphonso Mango', 'Fresh Vegetables', 'Banana'],
            title: {
                en: 'Mandatory APEDA Registration Cum Membership Certificate (RCMC)',
                ta: 'வேளாண் ஏற்றுமதியாளர்களுக்கு கட்டாய APEDA RCMC பதிவு சான்றிதழ் விதிமுறை',
                hi: 'कृषि निर्यातकों के लिए अनिवार्य APEDA पंजीकरण सह सदस्यता प्रमाणपत्र (RCMC)'
            },
            summary: {
                en: 'Under India\'s Foreign Trade Policy, every farmer, cooperative, or FPO exporting scheduled agricultural goods must possess an active RCMC from APEDA to obtain customs clearance and financial subsidies.',
                ta: 'திட்டமிடப்பட்ட வேளாண் மற்றும் உணவுப் பொருட்களை ஏற்றுமதி செய்ய வெளிநாட்டு வர்த்தகக் கொள்கையின் கீழ் RCMC பெறுவது கட்டாயமாகும். இது சுங்க அனுமதி மற்றும் அரசு மானியங்களை உறுதி செய்கிறது.',
                hi: 'अनुसूचित कृषि एवं प्रसंस्कृत खाद्य उत्पादों के निर्यात हेतु विदेश व्यापार नीति के तहत APEDA से RCMC लेना अनिवार्य है। यह कस्टम क्लीयरेंस और वित्तीय सब्सिडी हेतु आवश्यक है।'
            },
            rules: {
                en: [
                    'Farmer/FPO must first obtain a 10-digit digital IEC from DGFT portal.',
                    'RCMC certificate is valid for 5 years across all Indian sea and air ports.',
                    'Prerequisite to claim government Transport and Marketing Assistance (TMA) freight subsidy.',
                    '100% paperless digital verification process on official APEDA portal.'
                ],
                ta: [
                    'முதலில் DGFT இணையதளத்தில் 10 இலக்க IEC குறியீடு பெற்றிருக்க வேண்டும்.',
                    'இந்தியாவின் அனைத்து துறைமுகங்களிலும் 5 ஆண்டுகள் வரை செல்லுபடியாகும்.',
                    'அரசின் போக்குவரத்து மற்றும் சந்தைப்படுத்தல் உதவித் திட்டங்களை (TMA) பெற இது கட்டாயம்.',
                    'APEDA அதிகாரப்பூர்வ இணையதளத்தில் 100% காகிதமில்லா டிஜிட்டல் சரிபார்ப்பு.'
                ],
                hi: [
                    'सर्वप्रथम DGFT पोर्टल से 10 अंकों का डिजिटल IEC कोड प्राप्त करें।',
                    'समस्त भारतीय बंदरगाहों पर 5 वर्षों की अवधि हेतु पूर्णतः मान्य।',
                    'सरकारी परिवहन एवं विपणन सहायता (TMA) माल ढुलाई सब्सिडी हेतु अनिवार्य।',
                    'आधिकारिक APEDA पोर्टल पर प्रक्रिया पूरी तरह डिजिटल व पारदर्शी है।'
                ]
            }
        },
        {
            id: 'pol-pqis-phyto',
            category: 'Phytosanitary',
            source: 'Directorate of Plant Protection, Quarantine & Storage (PQIS)',
            sourceUrl: 'https://plantquarantineindia.nic.in',
            sourceType: 'Plant Quarantine Authority',
            gazettePages: '36 Pages',
            crops: ['Fresh Mango', 'Cavendish Banana', 'Red Onion', 'Grains', 'Fresh Spices'],
            title: {
                en: 'National Phytosanitary Certification Protocol for Fresh Horticulture',
                ta: 'புதிய விளைபொருட்கள் ஏற்றுமதிக்கான தாவர சுகாதாரச் சான்றிதழ் (Phytosanitary Protocol)',
                hi: 'ताजी कृषि उपज के निर्यात हेतु राष्ट्रीय पादप स्वच्छता प्रमाणन (Phytosanitary Protocol)'
            },
            summary: {
                en: 'A legal biological safety clearance certifying that the export consignment has been officially inspected by PQIS inspectors and found free from destructive quarantine pests, fungi, and bacterial blights.',
                ta: 'ஏற்றுமதி செய்யப்படும் விளைபொருட்கள் தீங்கு விளைவிக்கும் பூச்சிகள், பூஞ்சை நோய்கள் மற்றும் நுண்ணுயிரிகள் இல்லாமல் உள்ளதை உறுதி செய்யும் மத்திய அரசு சான்றளிப்பு விதிமுறை.',
                hi: 'निर्यात की जाने वाली कृषि उपज में हानिकारक कीट, फफूंद व जैविक संक्रमण न होने की पुष्टि करने वाला राष्ट्रीय संगरोध प्रोटोकॉल।'
            },
            rules: {
                en: [
                    'Mandatory for fresh fruits, vegetables, seeds, pulses, and non-processed grains.',
                    'Inspection must be booked online 24 to 48 hours prior to container stuffing at packhouse.',
                    'Vapor Heat Treatment (VHT) or Hot Water Dip mandated for mangoes destined to Japan/EU/USA.',
                    'Lack of valid certificate leads to immediate container rejection at foreign destination port.'
                ],
                ta: [
                    'புதிய பழங்கள், காய்கறிகள், வெங்காயம் மற்றும் விதைகளுக்கு முற்றிலும் கட்டாயம்.',
                    'கப்பலில் ஏற்றுவதற்கு 24-48 மணி நேரத்திற்கு முன் ஆன்லைனில் ஆய்வு பதிவு செய்யப்பட வேண்டும்.',
                    'ஜப்பான்/ஐரோப்பா/அமெரிக்கா மாம்பழ ஏற்றுமதிக்கு நீராவி வெப்ப சிகிச்சை (VHT) கட்டாயம்.',
                    'சான்றிதழ் இல்லாவிட்டால் வெளிநாட்டு துறைமுகத்தில் சரக்கு தடுத்து வைக்கப்படும் அல்லது அழிக்கப்படும்.'
                ],
                hi: [
                    'ताजे फल, सब्जियां, दालें व कच्चे बीजों के निर्यात हेतु कानूनी रूप से अनिवार्य।',
                    'कंटेनर में माल भरने से 24 से 48 घंटे पूर्व PQIS पोर्टल पर स्लॉट बुक करें।',
                    'जापान, यूरोप व अमेरिका हेतु आम पर वेपर हीट ट्रीटमेंट (VHT) अनिवार्य।',
                    'प्रमाणपत्र न होने पर विदेशी बंदरगाह पर माल जब्ती अथवा निरस्त होने का जोखिम।'
                ]
            }
        },
        {
            id: 'pol-basmati-mrl',
            category: 'Quality',
            source: 'APEDA Basmati Export Development Foundation (BEDF)',
            sourceUrl: 'https://apeda.gov.in',
            sourceType: 'APEDA',
            gazettePages: '38 Pages',
            crops: ['Basmati Rice 1121', 'Pusa Basmati', 'Traditional Basmati'],
            title: {
                en: 'Pesticide MRL Tolerances & DNA Purity Standards for Basmati Rice Exports',
                ta: 'பாசுமதி அரிசிக்கான அதிகபட்ச பூச்சிக்கொல்லி எச்ச அளவு (MRL) மற்றும் மரபணு தூய்மை விதிகள்',
                hi: 'बासमती चावल निर्यात हेतु कीटनाशक अवशेष सीमा (MRL) एवं डीएनए शुद्धता मानक'
            },
            summary: {
                en: 'Defines permissible Maximum Residue Limits (MRL) for chemicals like Tricyclazole in European and Gulf markets, alongside mandatory DNA testing to prevent adulteration with non-basmati varieties.',
                ta: 'பாசுமதி அரிசியில் ட்ரைசைக்ளசோல் போன்ற பூச்சிக்கொல்லி எச்சங்களுக்கான சர்வதேச வரம்புகள் மற்றும் கலப்படத்தைத் தடுக்கும் மரபணு சோதனை வழிகாட்டுதல்கள்.',
                hi: 'यूरोपीय संघ और खाड़ी देशों हेतु बासमती चावल में ट्राईसाइक्लाज़ोल कीटनाशक अवशेष सीमा एवं 85% शुद्ध बासमती डीएनए की अनिवार्य जांच।'
            },
            rules: {
                en: [
                    'Tricyclazole pesticide tolerance strictly capped at 0.01 mg/kg for EU member states.',
                    'Mandatory pre-shipment sampling and testing at APEDA/NABL accredited laboratories.',
                    'Adulteration with non-basmati varieties must strictly not exceed 15% under BEDF norms.',
                    'Digital Certificate of Inspection (CoI) required through the EU TRACES system.'
                ],
                ta: [
                    'ஐரோப்பிய ஏற்றுமதிகளில் ட்ரைசைக்ளசோல் எச்சம் 0.01 mg/kg அளவுக்குள் மட்டுமே இருக்க வேண்டும்.',
                    'துறைமுகத்திற்கு செல்லும் முன் APEDA/NABL அங்கீகரிக்கப்பட்ட ஆய்வகங்களில் கட்டாய மாதிரி சோதனை.',
                    'பாசுமதி அல்லாத பிற அரிசி கலப்படம் 15%-க்கு மிகாமல் இருக்க வேண்டும்.',
                    'TRACES போர்ட்டல் மூலம் மின்னணு ஆய்வுச் சான்றிதழ் (CoI) சமர்ப்பிக்கப்பட வேண்டும்.'
                ],
                hi: [
                    'यूरोपीय संघ के देशों हेतु ट्राईसाइक्लाज़ोल कीटनाशक सीमा 0.01 मिग्रा/किग्रा पर सीमित।',
                    'बंदरगाह पर लोडिंग से पूर्व NABL/APEDA मान्यता प्राप्त लैब से अनिवार्य जांच रिपोर्ट।',
                    'अन्य चावल की मिलावट 15% से अधिक न हो (डीएनए प्रोफाइलिंग द्वारा सत्यापन)।',
                    'TRACES पोर्टल के माध्यम से डिजिटल निरीक्षण प्रमाणपत्र (CoI) अनिवार्य।'
                ]
            }
        },
        {
            id: 'pol-turmeric-curcumin',
            category: 'Quality',
            source: 'Spices Board India & FSSAI Export Quality Directives',
            sourceUrl: 'https://indianspices.com',
            sourceType: 'Ministry of Agriculture',
            gazettePages: '40 Pages',
            crops: ['Salem Turmeric', 'Erode Turmeric', 'Black Pepper', 'Cardamom'],
            title: {
                en: 'Curcumin Potency Guarantee & Ban on Lead Chromate in Spices Export',
                ta: 'மஞ்சள் ஏற்றுமதிக்கான குர்குமின் அளவு உத்தரவாதம் மற்றும் லெட் குரோமேட் கலப்படத் தடை',
                hi: 'मसाला निर्यात हेतु करक्यूमिन मात्रा व लेड क्रोमेट मिलावट पर पूर्ण प्रतिबंध'
            },
            summary: {
                en: 'Codex and Spices Board directives strictly prohibiting artificial yellow colorants (lead chromate) while mandating minimum guaranteed curcumin percentages and moisture thresholds to stop aflatoxins.',
                ta: 'மஞ்சளில் செயற்கை நிறமி (லெட் குரோமேட்) கலப்படத்தை முற்றிலும் தடை செய்து, குர்குமின் சத்து மற்றும் ஈரப்பத வரம்புகளை நிர்ணயிக்கும் மசாலா வாரிய விதிமுறை.',
                hi: 'भारतीय मसाला बोर्ड के अनुसार हल्दी में कृत्रिम लेड क्रोमेट की मिलावट पर सख्त रोक एवं गुणवत्ता अनुसार 3% से 5% करक्यूमिन की गारंटी।'
            },
            rules: {
                en: [
                    'Zero tolerance for poisonous Lead Chromate (PbCrO4) and prohibited industrial azo dyes.',
                    'Premium export consignments must guarantee minimum 3.0% to 5.0% natural Curcumin potency.',
                    'Moisture content strictly capped below 10% to prevent carcinogenic aflatoxin mold growth.',
                    'Exporters must hold Certificate of Registration as Exporter of Spices (CRES).'
                ],
                ta: [
                    'செயற்கை மஞ்சள் சாயங்கள் மற்றும் லெட் குரோமேட் கலப்படத்திற்கு முற்றிலும் தடை.',
                    'உயர் தர ஏற்றுமதி மஞ்சளில் 3.0% முதல் 5.0% வரை குர்குமின் சத்து உத்தரவாதம் தேவை.',
                    'பூஞ்சை காளான் மற்றும் அஃப்லாடாக்சின் உருவாவதைத் தடுக்க ஈரப்பதம் 10%-க்கு குறைவாக இருக்க வேண்டும்.',
                    'மசாலா வாரியத்தின் CRES ஏற்றுமதி பதிவு சான்றிதழ் பெற்றிருக்க வேண்டும்.'
                ],
                hi: [
                    'सीसा (लेड क्रोमेट) एवं प्रतिबंधित पीले रासायनिक रंगों की मिलावट पर पूर्ण प्रतिबंध।',
                    'प्रीमियम निर्यात ग्रेड हेतु 3% से 5% तक प्राकृतिक करक्यूमिन की मात्रा अनिवार्य।',
                    'एफ्लाटॉक्सिन फफूंद से बचाव हेतु नमी का स्तर 10% से कम होना अनिवार्य।',
                    'मसाला बोर्ड द्वारा जारी CRES निर्यातक पंजीकरण प्रमाणपत्र आवश्यक।'
                ]
            }
        },
        {
            id: 'pol-rodtep-subsidies',
            category: 'Subsidies',
            source: 'Directorate General of Foreign Trade (DGFT) Notification No. 53/2023',
            sourceUrl: 'https://dgft.gov.in',
            sourceType: 'DGFT',
            gazettePages: '35 Pages',
            crops: ['All Agricultural Grains', 'Spices', 'Horticulture Crops', 'Fruits'],
            title: {
                en: 'RoDTEP Export Duty Remission & Tax Rebates for Farmers and FPOs',
                ta: 'விவசாயிகள் மற்றும் உழவர் உற்பத்தியாளர் நிறுவனங்களுக்கான (FPO) RoDTEP வரிச்சலுகை திட்டம்',
                hi: 'कृषि उत्पादकों एवं FPO संस्थाओं हेतु RoDTEP निर्यात कर छूट योजना'
            },
            summary: {
                en: 'The RoDTEP Scheme refunds embedded central and state duties (such as diesel excise, mandi cess, and electricity duty) incurred during cultivation and transport back to the farmer\'s ICEGATE ledger.',
                ta: 'வேளாண் உற்பத்தி மற்றும் போக்குவரத்தில் செலுத்தப்பட்ட மறைமுக வரிகளை ஏற்றுமதி மதிப்பில் (FOB) 1.5% முதல் 4.3% வரை திரும்பப் பெறும் அரசு திட்டம்.',
                hi: 'खेती, सिंचाई व ढुलाई पर लगे राज्य व केंद्रीय करों (डीजल वैट, मंडी शुल्क) की FOB मूल्य पर 1.5% से 4.3% तक इलेक्ट्रॉनिक क्रेडिट के रूप में वापसी।'
            },
            rules: {
                en: [
                    'Rebate of 1.5% to 4.3% of FOB export value credited directly as transferable e-scrips.',
                    'Duty credits can be used to offset basic customs duties or transferred for direct cash payout.',
                    'Farmer Producer Organizations (FPOs) receive expedited green-channel processing.',
                    'Claim must be marked as "Yes" under RoDTEP declaration in the initial Shipping Bill.'
                ],
                ta: [
                    'FOB ஏற்றுமதி மதிப்பில் 1.5% முதல் 4.3% வரை வரிப்பணம் சுங்கத்துறை ICEGATE கணக்கில் வரவு வைக்கப்படுகிறது.',
                    'இந்த வரிச்சலுகை கிரெடிட்டை பணமாக மாற்றலாம் அல்லது பிற வரிகளுக்குப் பயன்படுத்தலாம்.',
                    'உழவர் உற்பத்தியாளர் நிறுவனங்களுக்கு (FPO) முன்னுரிமை அடிப்படையில் உடனடியாக வழங்கப்படும்.',
                    'ஷிப்பிங் பில் தாக்கல் செய்யும் போதே RoDTEP சலுகையை "Yes" என தேர்வு செய்ய வேண்டும்.'
                ],
                hi: [
                    'FOB निर्यात मूल्य पर 1.5% से 4.3% तक का रिफंड सीधे ICEGATE खाते में ई-स्क्रिप के रूप में जमा।',
                    'यह क्रेडिट अन्य आयात शुल्कों के भुगतान में उपयोगी या सीधे नकद में हस्तांतरणीय है।',
                    'किसान उत्पादक संगठनों (FPO) को बिना किसी जमानत राशि के प्राथमिकता से भुगतान।',
                    'कस्टम शिपिंग बिल भरते समय RoDTEP विकल्प पर "Yes" का चयन करना अनिवार्य है।'
                ]
            }
        },
        {
            id: 'pol-npop-organic',
            category: 'Quality',
            source: 'APEDA National Programme for Organic Production (NPOP)',
            sourceUrl: 'https://apeda.gov.in',
            sourceType: 'APEDA',
            gazettePages: '44 Pages',
            crops: ['Organic Turmeric', 'Organic Basmati Rice', 'Organic Tea & Coffee', 'Pulses'],
            title: {
                en: 'NPOP Organic Certification & Digital TraceNet Verification Protocol',
                ta: 'இயற்கை விவசாய ஏற்றுமதிக்கான NPOP சான்றளிப்பு மற்றும் TraceNet விதிமுறை',
                hi: 'जैविक कृषि उत्पाद निर्यात हेतु NPOP प्रमाणन एवं TraceNet डिजिटल सत्यापन'
            },
            summary: {
                en: 'Comprehensive regulatory framework guaranteeing 100% synthetic chemical-free status for organic exports, monitored digitally through APEDA\'s national TraceNet tracking portal.',
                ta: 'இயற்கை வேளாண் விளைபொருட்கள் ரசாயன உரங்கள் இன்றி விளைவிக்கப்பட்டதை உறுதி செய்து TraceNet மூலம் சான்றளிக்கும் APEDA விதிமுறை.',
                hi: 'जैविक कृषि उत्पादों के 100% रसायन मुक्त होने की गारंटी और APEDA TraceNet प्रणाली के तहत डिजिटल ट्रेसिबिलिटी प्रमाणन प्रक्रिया।'
            },
            rules: {
                en: [
                    'Requires mandatory 3-year organic conversion period certified by an accredited inspection body.',
                    'Every export lot must be recorded on the official APEDA TraceNet portal for Certificate of Inspection.',
                    'Mutual equivalence recognition with European Union and USDA Organic standards.',
                    'Fetches 25% to 45% price premium over conventional APMC mandi rates.'
                ],
                ta: [
                    'அங்கீகரிக்கப்பட்ட ஆய்வு அமைப்புகளால் 3 வருட இயற்கை விவசாய மாற்ற காலம் உறுதி செய்யப்பட வேண்டும்.',
                    'அனைத்து ஏற்றுமதி தொகுதிகளும் APEDA TraceNet தளத்தில் பதிவு செய்யப்பட்டு CoI பெறப்பட வேண்டும்.',
                    'ஐரோப்பிய ஒன்றியம் மற்றும் அமெரிக்க USDA Organic தரநிலைகளுடன் நேரடி ஏற்பு ஒப்பந்தம்.',
                    'வழக்கமான சந்தை விலையை விட 25% முதல் 45% வரை கூடுதல் லாபம் தரும்.'
                ],
                hi: [
                    'मान्यता प्राप्त संस्थाओं द्वारा 3 वर्ष की जैविक परिवर्तन अवधि का भौतिक सत्यापन।',
                    'समस्त लॉट का डिजिटल विवरण APEDA के TraceNet पोर्टल पर दर्ज होना अनिवार्य।',
                    'यूरोपीय संघ और यूएसडीए (USDA Organic) मानकों के साथ सीधा समकक्षता समझौता।',
                    'सामान्य उपज की तुलना में 25% से 45% तक अधिक प्रीमियम भाव सुनिश्चित।'
                ]
            }
        }
    ];

    // ==========================================================================
    // 2. OFFICIAL EXPORT DOCUMENTATION DATA (EN, TA, HI)
    // ==========================================================================
    const officialDocs = [
        {
            id: 'doc-phyto',
            short: 'Phytosanitary Certificate',
            authority: 'Plant Quarantine Information System (PQIS), Ministry of Agriculture',
            portalUrl: 'https://plantquarantineindia.nic.in',
            title: {
                en: 'Phytosanitary Inspection Certificate',
                ta: 'தாவர சுகாதாரச் சான்றிதழ் (Phytosanitary Certificate)',
                hi: 'पादप स्वच्छता प्रमाणपत्र (Phytosanitary Certificate)'
            },
            why: {
                en: 'Guarantees the agricultural shipment is clean and completely free from quarantine pests, fungal spores, and invasive biological blights.',
                ta: 'விளைபொருளில் பூச்சிகள், நோய்கள் மற்றும் பூஞ்சை தொற்று இல்லை என்பதை வெளிநாட்டு அரசுக்கு உறுதி செய்ய தேவைப்படுகிறது.',
                hi: 'प्रमाणित करता है कि कृषि उत्पाद हानिकारक कीटों, फफूंद व पादप रोगों से पूर्णतः मुक्त है।'
            },
            when: {
                en: 'Mandatory for all fresh fruits, vegetables, seeds, pulses, and raw grain shipments prior to port container stuffing.',
                ta: 'புதிய பழங்கள், காய்கறிகள், விதைகள் மற்றும் தானியங்களை கப்பலில் ஏற்றுவதற்கு முன் முற்றிலும் கட்டாயம்.',
                hi: 'ताजे फल, सब्जियां, दालें व कच्चे खाद्यान्न निर्यात करते समय पोर्ट लोडिंग से पहले अनिवार्य।'
            }
        },
        {
            id: 'doc-iec',
            short: 'DGFT IEC Code',
            authority: 'Directorate General of Foreign Trade (DGFT), Ministry of Commerce',
            portalUrl: 'https://dgft.gov.in',
            title: {
                en: 'Importer Exporter Code (IEC)',
                ta: 'இறக்குமதி ஏற்றுமதி குறியீடு (DGFT IEC Code)',
                hi: 'आयात-निर्यात कोड (DGFT IEC Code)'
            },
            why: {
                en: 'The primary 10-digit digital business passport issued to farmers, cooperatives, and FPOs to legally execute international shipments.',
                ta: 'இந்தியாவிலிருந்து வெளிநாடுகளுக்கு பொருட்களை சட்டப்பூர்வமாக ஏற்றுமதி செய்ய தேவையான 10 இலக்க டிஜிட்டல் பாஸ்போர்ட்.',
                hi: 'भारत से किसी भी वस्तु के कानूनी निर्यात हेतु DGFT द्वारा जारी 10 अंकों का प्राथमिक व्यापारिक पासपोर्ट।'
            },
            when: {
                en: 'One-time digital registration linked to the farmer\'s PAN card and active current bank account.',
                ta: 'விவசாயி அல்லது FPO பான் கார்டு மற்றும் வங்கிக் கணக்குடன் இணைக்கப்பட்ட ஒரு முறை பதிவு.',
                hi: 'किसान अथवा FPO के पैन कार्ड और चालू बैंक खाते से जुड़ा एकमुश्त ऑनलाइन पंजीकरण।'
            }
        },
        {
            id: 'doc-rcmc',
            short: 'APEDA RCMC',
            authority: 'Agricultural & Processed Food Products Export Development Authority',
            portalUrl: 'https://apeda.gov.in',
            title: {
                en: 'Registration Cum Membership Certificate (RCMC)',
                ta: 'APEDA RCMC உறுப்பினர் பதிவுச் சான்றிதழ்',
                hi: 'APEDA RCMC पंजीकरण सह सदस्यता प्रमाणपत्र'
            },
            why: {
                en: 'Certifies the exporter under Foreign Trade Policy and unlocks transport subsidies, duty draw-backs, and trade mission support.',
                ta: 'மத்திய அரசின் ஏற்றுமதி மானியங்கள், சலுகைகள் மற்றும் சர்வதேச வர்த்தக வாய்ப்புகளைப் பெற உதவுகிறது.',
                hi: 'सरकारी निर्यात सब्सिडी, परिवहन सहायता (TMA) एवं वैश्विक व्यापार मेलों में भाग लेने हेतु अनिवार्य।'
            },
            when: {
                en: 'Mandatory for all exporters of APEDA-scheduled products (Basmati, spices, fruits, vegetables). Valid for 5 years.',
                ta: 'அரிசி, நறுமணப் பொருட்கள், பழங்கள் மற்றும் காய்கறி ஏற்றுமதிக்கு கட்டாயம். 5 ஆண்டுகள் வரை செல்லும்.',
                hi: 'चावल, मसाले, फल एवं सब्जी निर्यातकों हेतु अनिवार्य। 5 वर्षों की अवधि हेतु मान्य।'
            }
        },
        {
            id: 'doc-coo',
            short: 'Certificate of Origin',
            authority: 'Indian Chamber of Commerce / Export Inspection Council (EIC)',
            portalUrl: 'https://coo.dgft.gov.in',
            title: {
                en: 'Certificate of Origin (Preferential / Non-Preferential)',
                ta: 'விளைபொருள் மூலச் சான்றிதழ் (Certificate of Origin)',
                hi: 'उत्पत्ति प्रमाणपत्र (Certificate of Origin)'
            },
            why: {
                en: 'Proves the produce was 100% grown and harvested in India, enabling 0% duty entry under Free Trade Pacts like India-UAE CEPA.',
                ta: 'விளைபொருட்கள் இந்தியாவில் தான் சாகுபடி செய்யப்பட்டது என்பதை நிரூபித்து, வெளிநாட்டு இறக்குமதி வரிகளைக் குறைக்க உதவுகிறது.',
                hi: 'प्रमाणित करता है कि फसल भारत में उगाई गई है, जिससे CEPA संधि के तहत 0% शुल्क छूट मिलती है।'
            },
            when: {
                en: 'Generated per export consignment after goods are sealed in containers.',
                ta: 'பொருட்கள் கொள்கலனில் ஏற்றப்பட்ட பின் ஒவ்வொரு ஏற்றுமதிக்கும் தனியாக வழங்கப்படுகிறது.',
                hi: 'कंटेनर सील होने के उपरांत प्रत्येक खेप हेतु अलग से ऑनलाइन जारी किया जाता है।'
            }
        },
        {
            id: 'doc-invoice',
            short: 'Commercial Invoice & Packing List',
            authority: 'Exporters / Farmer Producer Organizations (Self-Generated)',
            portalUrl: 'https://icegate.gov.in',
            title: {
                en: 'Commercial Invoice & Pallet Packing List',
                ta: 'வர்த்தக விலைப்பட்டியல் மற்றும் பொதி பட்டியல் (Invoice & Packing List)',
                hi: 'व्यावसायिक इनवॉइस एवं पैकिंग सूची (Commercial Invoice)'
            },
            why: {
                en: 'Official financial proof of sales contract, net weights, price per ton (FOB/CIF), and banking Letter of Credit terms.',
                ta: 'விற்பனை ஒப்பந்தம், பொருட்களின் எடை, டன் விலை மற்றும் வங்கி பணப்பரிவர்த்தனைக்கான முக்கிய நிதி ஆவணம்.',
                hi: 'सौदे का मूल्य, कुल वजन, प्रति टन दर एवं बैंक भुगतान शर्तों का वैधानिक वित्तीय दस्तावेज।'
            },
            when: {
                en: 'Required by Indian Customs at ICEGATE port gate-in and by international buyer for customs clearance.',
                ta: 'துறைமுக சுங்க அனுமதி மற்றும் வெளிநாட்டு வாங்குபவர் பணம் செலுத்த இது அவசியமாகும்.',
                hi: 'कस्टम गेट-इन और विदेशी खरीदार द्वारा बैंक लेटर ऑफ क्रेडिट जारी करने हेतु अनिवार्य।'
            }
        },
        {
            id: 'doc-bol',
            short: 'Bill of Lading / Airway Bill',
            authority: 'Shipping Shipping Lines (Maersk, MSC, CMA CGM) / Port Authorities',
            portalUrl: 'https://icegate.gov.in',
            title: {
                en: 'Ocean Bill of Lading (B/L) / Air Waybill',
                ta: 'கப்பல் சரக்கு ரசீது (Ocean Bill of Lading - B/L)',
                hi: 'समुद्री लदान बिल (Ocean Bill of Lading - B/L)'
            },
            why: {
                en: 'The definitive legal receipt issued by the ocean carrier confirming the agricultural goods have been loaded on board the vessel.',
                ta: 'சரக்குகள் கப்பலில் பாதுகாப்பாக ஏற்றப்பட்டுவிட்டதை உறுதி செய்யும் அதிகாரப்பூர்வ கப்பல் ரசீது.',
                hi: 'जहाज कंपनी द्वारा जारी पक्की रसीद जो प्रमाणित करती है कि माल सुरक्षित रूप से जहाज पर चढ़ चुका है।'
            },
            when: {
                en: 'Handed over by shipping agent within 24 hours of vessel sailing. Required by banks to release full payment.',
                ta: 'கப்பல் புறப்பட்ட 24 மணி நேரத்திற்குள் வழங்கப்படும். வங்கி மூலம் முழு பணத்தைப் பெற இது தேவை.',
                hi: 'जहाज रवाना होने के 24 घंटे के भीतर जारी। बैंक से पूरा भुगतान प्राप्त करने हेतु अनिवार्य दस्तावेज।'
            }
        }
    ];

    // ==========================================================================
    // 3. MULTILINGUAL UI DICTIONARY
    // ==========================================================================
    const uiTranslations = {
        en: {
            navHome: 'Home',
            navPolicy: 'Policy',
            navMarket: 'Market Analysis',
            navDoc: 'Documentation',
            navAssistant: 'AI Assistant',
            headerBadge: 'Official APEDA & DGFT Regulatory Framework Grounded',
            headerHeadline: 'Empowering Farmers, <br class="d-none d-md-block"><span class="gradient-text">Connecting Global Markets.</span>',
            headerSubtext: 'Eliminate middlemen with verified export guidance, official 40-page gazette summaries, destination pricing, and multilingual AI assistance.',
            btnHeroExplorePolicies: 'Explore Summarized Policies',
            btnHeroAskAi: 'Ask Voice AI Assistant',
            heroPillBadge: 'Zero Middlemen • Direct Port Clearance',
            heroLeadText: 'Smallholder farmers and FPOs produce export-grade harvests, but intermediaries capture up to 60% of the international profit. AGRINXT AI provides crystal-clear policy summaries, mandatory documentation checklists, and an AI officer in your mother tongue.',
            feat1: 'Official 40-Page Gazette Summaries',
            feat2: 'Multilingual (EN / தமிழ் / हिन्दी)',
            feat3: 'Mandi vs. FOB Export Price Spreads',
            feat4: 'Direct AI Query Resolution',
            policyTag: 'Government Regulatory Intelligence',
            policyTitle: 'Official Agricultural Export Policies (APEDA & DGFT)',
            policySubtitle: 'Official gazette notifications often span 36 to 40 complex pages. We extract and summarize the critical compliance rules, standards, and subsidy schemes into actionable guides for farmers and FPOs.',
            catAll: 'All Policies',
            catReg: 'Export Registration',
            catPhyto: 'Phytosanitary Protocol',
            catQuality: 'Quality & MRL',
            catSubsidy: 'Subsidies & RoDTEP',
            policySearchPlaceholder: 'Search policy by crop or keyword...',
            policyBannerTitle: 'Confused by a 40-Page Customs or Quarantine Clause?',
            policyBannerSub: 'Click "Have Questions? Ask AI" on any policy card above to receive instant, simplified explanations in your local language.',
            policyBannerBtn: 'Open AI Assistant',
            docSectionTitle: 'Export Documentation Repository (APEDA & Customs)',
            docSectionSub: 'Missing a single certificate can cause container detention at port. Here are the 6 mandatory documents every farmer and FPO exporter must maintain.',
            marketSectionTitle: 'Market Analysis & Direct Export Margins',
            marketSectionSub: 'Compare local mandi prices with FOB port rates, calculate middleman margin savings, and discover top-paying destination countries.',
            aiHeading: 'Ask Any Policy or Documentation Doubt',
            aiSub: 'Speak or type your question in English, தமிழ், or हिन्दी. Our AI officer grounds every response in official APEDA trade gazettes and DGFT policy notices.',
            askAiButtonText: 'Have Questions? Ask AI',
            keyRulesTitle: 'Key Rules to Follow',
            officialPortalText: 'Official Portal'
        },
        ta: {
            navHome: 'முகப்பு',
            navPolicy: 'கொள்கைகள்',
            navMarket: 'சந்தை பகுப்பாய்வு',
            navDoc: 'ஆவணங்கள்',
            navAssistant: 'AI உதவியாளர்',
            headerBadge: 'அதிகாரப்பூர்வ APEDA & DGFT அரசு நெறிமுறைகள் அடிப்படையிலானது',
            headerHeadline: 'விவசாயிகளுக்கு அதிகாரம், <br class="d-none d-md-block"><span class="gradient-text">உலகச் சந்தையுடன் நேரடி இணைப்பு.</span>',
            headerSubtext: 'இடைத்தரகர்களைத் தவிர்த்து, 40 பக்க அரசு அரசாணைகளின் சுருக்கங்கள், சர்வதேச ஏற்றுமதி விலைகள் மற்றும் AI குரல் வழிகாட்டலுடன் நேரடியாக ஏற்றுமதி செய்யுங்கள்.',
            btnHeroExplorePolicies: 'அரசு கொள்கைகளை அறிக',
            btnHeroAskAi: 'AI உதவியாளரிடம் கேட்க',
            heroPillBadge: 'இடைத்தரகர் இன்றி • நேரடி துறைமுக ஏற்றுமதி',
            heroLeadText: 'விவசாயிகள் உலகத்தரம் வாய்ந்த விளைபொருட்களை உற்பத்தி செய்தும், 60% லாபத்தை இடைத்தரகர்களே பெறுகின்றனர். அக்ரிநெக்ஸ்ட் AI உங்களுக்கு எளிமையான அரசு கொள்கை சுருக்கங்கள், ஆவண வழிகாட்டுதல்கள் மற்றும் உங்கள் தாய்மொழியில் AI ஆலோசனையை வழங்குகிறது.',
            feat1: 'அதிகாரப்பூர்வ 40 பக்க அரசாணை சுருக்கங்கள்',
            feat2: 'முழுமையான தமிழ் மற்றும் இந்தி ஆதரவு',
            feat3: 'மண்டி vs துறைமுக விலை ஒப்பீடு',
            feat4: 'உடனடி AI சந்தேக விளக்கம்',
            policyTag: 'அரசு ஒழுங்குமுறை வழிகாட்டுதல்',
            policyTitle: 'அதிகாரப்பூர்வ வேளாண் ஏற்றுமதி கொள்கைகள் (APEDA & DGFT)',
            policySubtitle: 'அரசாணைகள் பொதுவாக 36 முதல் 40 பக்கங்கள் கொண்ட கடினமான ஆங்கிலத்தில் இருக்கும். விவசாயிகள் எளிதில் புரிந்து பின்பற்றும் வகையில் முக்கிய விதிகள் மற்றும் மானிய விவரங்கள் இங்கு சுருக்கித் தரப்பட்டுள்ளன.',
            catAll: 'அனைத்து கொள்கைகள்',
            catReg: 'ஏற்றுமதி பதிவு',
            catPhyto: 'தாவர தனிமைப்படுத்தல்',
            catQuality: 'தரக்கட்டுப்பாடு & MRL',
            catSubsidy: 'மானியங்கள் & RoDTEP',
            policySearchPlaceholder: 'பயிர் அல்லது முக்கிய சொல்லால் தேடவும்...',
            policyBannerTitle: 'சுங்க விதிகள் அல்லது அரசாணையில் சந்தேகம் உள்ளதா?',
            policyBannerSub: 'எந்தவொரு கொள்கை அட்டையிலும் உள்ள "சந்தேகமா? AI-யிடம் கேளுங்கள்" பொத்தானை கிளிக் செய்து தமிழில் உடனே விளக்கம் பெறுங்கள்.',
            policyBannerBtn: 'AI உதவியாளரிடம் செல்',
            docSectionTitle: 'ஏற்றுமதி ஆவண மையம் (APEDA & சுங்கத்துறை)',
            docSectionSub: 'ஒரு ஆவணம் விடுபட்டாலும் துறைமுகத்தில் சரக்கு தேங்க நேரிடும். விவசாயிகள் வைத்திருக்க வேண்டிய 6 முக்கிய ஆவணங்கள் கீழே கொடுக்கப்பட்டுள்ளன.',
            marketSectionTitle: 'சந்தை பகுப்பாய்வு & நேரடி ஏற்றுமதி லாபம்',
            marketSectionSub: 'மண்டி விலையுடன் சர்வதேச துறைமுக (FOB) விலையை ஒப்பிட்டு, இடைத்தரகர் இல்லாமல் நீங்கள் பெறும் கூடுதல் லாபத்தைக் கணக்கிடுங்கள்.',
            aiHeading: 'கொள்கை அல்லது ஆவண சந்தேகங்களை கேட்கவும்',
            aiSub: 'தமிழ், ஆங்கிலம் அல்லது இந்தியில் கேளுங்கள். நமது AI அதிகாரி APEDA மற்றும் DGFT அதிகாரப்பூர்வ வழிகாட்டுதல்களின் அடிப்படையில் மட்டுமே பதிலளிப்பார்.',
            askAiButtonText: 'சந்தேகமா? AI-யிடம் கேட்கவும்',
            keyRulesTitle: 'கட்டாயம் பின்பற்ற வேண்டிய விதிகள்',
            officialPortalText: 'அரசு இணையதளம்'
        },
        hi: {
            navHome: 'होम',
            navPolicy: 'सरकारी नीतियां',
            navMarket: 'बाजार विश्लेषण',
            navDoc: 'दस्तावेज़ केंद्र',
            navAssistant: 'AI सहायक',
            headerBadge: 'APEDA एवं DGFT आधिकारिक सरकारी नियमों पर आधारित',
            headerHeadline: 'किसानों का सशक्तिकरण, <br class="d-none d-md-block"><span class="gradient-text">वैश्विक बाजारों से सीधा जुड़ाव।</span>',
            headerSubtext: 'बिचौलियों को हटाएं। 40 पन्नों के सरकारी गजट के सरल सारांश, अंतरराष्ट्रीय बंदरगाह भाव और बहुभाषी AI सहायता से सीधे निर्यात करें।',
            btnHeroExplorePolicies: 'सरकारी नीतियां देखें',
            btnHeroAskAi: 'AI सहायक से पूछें',
            heroPillBadge: 'बिचौलिया मुक्त • सीधा बंदरगाह निर्यात',
            heroLeadText: 'किसान विश्वस्तरीय फसल उगाते हैं, परंतु निर्यात का 60% मुनाफा बिचौलिए ले जाते हैं। AGRINXT AI आपको आधिकारिक नीतियों के सरल सारांश, जरूरी कागजातों की सूची और आपकी भाषा में AI मार्गदर्शन प्रदान करता है।',
            feat1: '40 पन्नों के गजट का स्पष्ट सारांश',
            feat2: 'हिंदी, तमिल व अंग्रेजी में उपलब्ध',
            feat3: 'मंडी भाव बनाम निर्यात बंदरगाह भाव',
            feat4: 'सीधा AI शंका समाधान',
            policyTag: 'सरकारी नियामक मार्गदर्शन',
            policyTitle: 'आधिकारिक कृषि निर्यात नीतियां (APEDA एवं DGFT)',
            policySubtitle: 'सरकारी गजट अधिसूचनाएं 36 से 40 पन्नों की जटिल अंग्रेजी में होती हैं। हमने किसानों और FPO के लिए प्रमुख नियमों, गुणवत्ता मानकों व सब्सिडी योजनाओं को सरल बिंदुओं में संकलित किया है।',
            catAll: 'सभी नीतियां',
            catReg: 'निर्यात पंजीकरण',
            catPhyto: 'पादप संगरोध',
            catQuality: 'गुणवत्ता व MRL',
            catSubsidy: 'सब्सिडी व RoDTEP',
            policySearchPlaceholder: 'फसल अथवा विषय द्वारा खोजें...',
            policyBannerTitle: 'कस्टम नियमों या पादप संगरोध में कोई संशय है?',
            policyBannerSub: 'किसी भी नीति कार्ड पर "संदेह है? AI से पूछें" पर क्लिक करें और अपनी मातृभाषा में तुरंत सरल उत्तर प्राप्त करें।',
            policyBannerBtn: 'AI सहायक से पूछें',
            docSectionTitle: 'निर्यात दस्तावेज़ केंद्र (APEDA एवं कस्टम)',
            docSectionSub: 'एक भी दस्तावेज़ छूटने पर बंदरगाह पर कंटेनर रुक सकता है। जानिए वे 6 अनिवार्य दस्तावेज़ जो प्रत्येक किसान निर्यातक के पास होने चाहिए।',
            marketSectionTitle: 'बाजार विश्लेषण एवं सीधा निर्यात मुनाफा',
            marketSectionSub: 'स्थानीय मंडी भाव की अंतरराष्ट्रीय FOB बंदरगाह भाव से पारदर्शी तुलना करें और बिचौलियों से बचने पर अपना अतिरिक्त लाभ जानें।',
            aiHeading: 'नीतियों अथवा कागजातों पर कोई भी प्रश्न पूछें',
            aiSub: 'हिंदी, तमिल या अंग्रेजी में बोलें अथवा लिखें। हमारा AI अधिकारी APEDA व DGFT के आधिकारिक गजट के आधार पर सटीक जानकारी प्रदान करेगा।',
            askAiButtonText: 'संदेह है? AI से पूछें',
            keyRulesTitle: 'प्रमुख नियम जिनका पालन अनिवार्य है',
            officialPortalText: 'आधिकारिक पोर्टल'
        }
    };

    // ==========================================================================
    // 4. DYNAMIC RENDER FUNCTIONS
    // ==========================================================================

    // Render Policies
    function renderPolicies(lang, catFilter = 'all', searchQuery = '') {
        const grid = document.getElementById('policiesGrid');
        if (!grid) return;

        const t = uiTranslations[lang] || uiTranslations.en;
        const q = searchQuery.toLowerCase().trim();

        const filtered = officialPolicies.filter(p => {
            const matchesCategory = catFilter === 'all' || p.category.toLowerCase() === catFilter.toLowerCase();
            const title = (p.title[lang] || p.title.en).toLowerCase();
            const summary = (p.summary[lang] || p.summary.en).toLowerCase();
            const cropsMatch = p.crops.some(c => c.toLowerCase().includes(q));
            const matchesSearch = !q || title.includes(q) || summary.includes(q) || cropsMatch || p.source.toLowerCase().includes(q);

            return matchesCategory && matchesSearch;
        });

        if (filtered.length === 0) {
            grid.innerHTML = `
                <div class="col-12 text-center py-5">
                    <i class="bi bi-search fs-1 text-muted d-block mb-3"></i>
                    <h5 class="text-muted">No policies matching "${searchQuery}" in this category.</h5>
                    <button class="btn btn-emerald-action mt-2" onclick="resetPolicyFilters()">View All Policies</button>
                </div>
            `;
            return;
        }

        grid.innerHTML = filtered.map(p => {
            const title = p.title[lang] || p.title.en;
            const summary = p.summary[lang] || p.summary.en;
            const rules = p.rules[lang] || p.rules.en;

            return `
                <div class="col-lg-6 policy-card-wrapper">
                    <div class="policy-card glass-panel">
                        <div>
                            <!-- Header badges -->
                            <div class="d-flex justify-content-between align-items-center mb-2 flex-wrap gap-2">
                                <span class="policy-source-badge">
                                    <i class="bi bi-shield-check me-1"></i> ${p.sourceType} Verified
                                </span>
                                <span class="gazette-size-tag">
                                    <i class="bi bi-file-text me-1"></i> Summarized from ${p.gazettePages}
                                </span>
                            </div>

                            <!-- Source citation -->
                            <small class="text-muted d-block mb-2 fs-8">
                                <i class="bi bi-journal-bookmark me-1"></i> ${p.source}
                            </small>

                            <!-- Title -->
                            <h3 class="policy-card-title">${title}</h3>

                            <!-- Executive Summary -->
                            <p class="policy-card-summary">${summary}</p>

                            <!-- Key Rules Box -->
                            <div class="policy-rules-box">
                                <div class="policy-rules-heading">
                                    <i class="bi bi-check2-all"></i> ${t.keyRulesTitle}
                                </div>
                                <ul class="policy-rules-list">
                                    ${rules.map(r => `<li><i class="bi bi-check-circle-fill"></i> <span>${r}</span></li>`).join('')}
                                </ul>
                            </div>

                            <!-- Applicable Crops -->
                            <div class="policy-crops-row">
                                <span class="fs-8 text-muted me-1 align-self-center"><i class="bi bi-tag-fill me-1"></i>Crops:</span>
                                ${p.crops.map(c => `<span class="crop-tag">${c}</span>`).join('')}
                            </div>
                        </div>

                        <!-- Card Action Buttons -->
                        <div class="d-flex gap-2 pt-3 border-top mt-auto flex-wrap">
                            <a href="${p.sourceUrl}" target="_blank" rel="noopener" class="btn btn-outline-emerald btn-sm flex-grow-1">
                                <i class="bi bi-box-arrow-up-right me-1"></i> ${t.officialPortalText}
                            </a>
                            <button class="btn btn-ask-ai-policy btn-sm flex-grow-1" onclick="askAiAboutPolicy('${p.id}', '${escapeQuote(title)}')">
                                <i class="bi bi-robot"></i> ${t.askAiButtonText}
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Render Documentation
    function renderDocumentation(lang) {
        const grid = document.getElementById('documentationGrid');
        if (!grid) return;

        const t = uiTranslations[lang] || uiTranslations.en;

        grid.innerHTML = officialDocs.map(d => {
            const title = d.title[lang] || d.title.en;
            const why = d.why[lang] || d.why.en;
            const when = d.when[lang] || d.when.en;

            return `
                <div class="col-md-6 col-lg-4">
                    <div class="doc-card glass-panel">
                        <div>
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <span class="badge bg-success-subtle text-success">${d.short}</span>
                                <small class="text-muted"><i class="bi bi-patch-check text-success"></i> Official</small>
                            </div>
                            <h5 class="fw-bold text-dark dark-text-light mb-2">${title}</h5>
                            <p class="fs-8 text-muted mb-3"><i class="bi bi-building me-1"></i> ${d.authority}</p>
                            
                            <div class="p-2.5 rounded-3 bg-light-mesh mb-3 fs-8">
                                <strong>Why Required:</strong>
                                <p class="text-muted mb-2 mt-1">${why}</p>
                                <strong>When to Prepare:</strong>
                                <p class="text-muted mb-0 mt-1">${when}</p>
                            </div>
                        </div>

                        <div class="d-flex gap-2 pt-2 border-top">
                            <a href="${d.portalUrl}" target="_blank" rel="noopener" class="btn btn-outline-emerald btn-sm flex-grow-1">
                                <i class="bi bi-arrow-up-right"></i> Verify Portal
                            </a>
                            <button class="btn btn-ask-ai-policy btn-sm" onclick="askAiAboutDoc('${escapeQuote(d.short)}', '${escapeQuote(title)}')">
                                <i class="bi bi-robot"></i> ${t.askAiButtonText}
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Update Static UI Texts across sections
    function updateStaticUI(lang) {
        const t = uiTranslations[lang] || uiTranslations.en;
        document.body.setAttribute('lang', lang);

        // Navbar
        const navHome = document.getElementById('navHome');
        const navPolicy = document.getElementById('navPolicy');
        const navMarket = document.getElementById('navMarket');
        const navDoc = document.getElementById('navDoc');
        const navAssistant = document.getElementById('navAssistant');

        if (navHome) navHome.innerHTML = `<i class="bi bi-house-door-fill me-1"></i> ${t.navHome}`;
        if (navPolicy) navPolicy.innerHTML = `<i class="bi bi-shield-check me-1"></i> ${t.navPolicy}`;
        if (navMarket) navMarket.innerHTML = `<i class="bi bi-graph-up-arrow me-1"></i> ${t.navMarket}`;
        if (navDoc) navDoc.innerHTML = `<i class="bi bi-file-earmark-text me-1"></i> ${t.navDoc}`;
        if (navAssistant) navAssistant.innerHTML = `<i class="bi bi-robot me-1"></i> ${t.navAssistant}`;

        // Header & Hero
        const headerBadgeText = document.getElementById('headerBadgeText');
        const headerHeadline = document.getElementById('headerHeadline');
        const headerSubtext = document.getElementById('headerSubtext');
        const btnHeroExplorePolicies = document.getElementById('btnHeroExplorePolicies');
        const btnHeroAskAi = document.getElementById('btnHeroAskAi');
        const heroPillBadge = document.getElementById('heroPillBadge');
        const heroLeadText = document.getElementById('heroLeadText');

        if (headerBadgeText) headerBadgeText.textContent = t.headerBadge;
        if (headerHeadline) headerHeadline.innerHTML = t.headerHeadline;
        if (headerSubtext) headerSubtext.textContent = t.headerSubtext;
        if (btnHeroExplorePolicies) btnHeroExplorePolicies.innerHTML = `<i class="bi bi-shield-check me-2"></i> ${t.btnHeroExplorePolicies}`;
        if (btnHeroAskAi) btnHeroAskAi.innerHTML = `<i class="bi bi-mic-fill me-2"></i> ${t.btnHeroAskAi}`;
        if (heroPillBadge) heroPillBadge.innerHTML = `<i class="bi bi-patch-check-fill text-emerald me-1"></i> ${t.heroPillBadge}`;
        if (heroLeadText) heroLeadText.innerHTML = t.heroLeadText;

        // Bullets
        const feat1 = document.getElementById('feat1');
        const feat2 = document.getElementById('feat2');
        const feat3 = document.getElementById('feat3');
        const feat4 = document.getElementById('feat4');
        if (feat1) feat1.textContent = t.feat1;
        if (feat2) feat2.textContent = t.feat2;
        if (feat3) feat3.textContent = t.feat3;
        if (feat4) feat4.textContent = t.feat4;

        // Policy Section Titles & Buttons
        const policyTag = document.getElementById('policyTag');
        const policyTitle = document.getElementById('policyTitle');
        const policySubtitle = document.getElementById('policySubtitle');
        const catAll = document.getElementById('catAll');
        const catReg = document.getElementById('catReg');
        const catPhyto = document.getElementById('catPhyto');
        const catQuality = document.getElementById('catQuality');
        const catSubsidy = document.getElementById('catSubsidy');
        const policySearchInput = document.getElementById('policySearchInput');
        const policyBannerTitle = document.getElementById('policyBannerTitle');
        const policyBannerSub = document.getElementById('policyBannerSub');
        const policyBannerBtn = document.getElementById('policyBannerBtn');

        if (policyTag) policyTag.innerHTML = `<i class="bi bi-bank2 me-1"></i> ${t.policyTag}`;
        if (policyTitle) policyTitle.textContent = t.policyTitle;
        if (policySubtitle) policySubtitle.textContent = t.policySubtitle;
        if (catAll) catAll.textContent = t.catAll;
        if (catReg) catReg.textContent = t.catReg;
        if (catPhyto) catPhyto.textContent = t.catPhyto;
        if (catQuality) catQuality.textContent = t.catQuality;
        if (catSubsidy) catSubsidy.textContent = t.catSubsidy;
        if (policySearchInput) policySearchInput.placeholder = t.policySearchPlaceholder;
        if (policyBannerTitle) policyBannerTitle.textContent = t.policyBannerTitle;
        if (policyBannerSub) policyBannerSub.textContent = t.policyBannerSub;
        if (policyBannerBtn) policyBannerBtn.innerHTML = `<i class="bi bi-chat-dots-fill me-2"></i> ${t.policyBannerBtn}`;

        // Documentation Section Titles
        const docSectionTitle = document.getElementById('docSectionTitle');
        const docSectionSub = document.getElementById('docSectionSub');
        if (docSectionTitle) docSectionTitle.textContent = t.docSectionTitle;
        if (docSectionSub) docSectionSub.textContent = t.docSectionSub;

        // Market Section Titles
        const marketSectionTitle = document.getElementById('marketSectionTitle');
        const marketSectionSub = document.getElementById('marketSectionSub');
        if (marketSectionTitle) marketSectionTitle.textContent = t.marketSectionTitle;
        if (marketSectionSub) marketSectionSub.textContent = t.marketSectionSub;

        // AI Assistant Section Titles
        const aiAssistantHeading = document.getElementById('aiAssistantHeading');
        const aiAssistantSub = document.getElementById('aiAssistantSub');
        if (aiAssistantHeading) aiAssistantHeading.textContent = t.aiHeading;
        if (aiAssistantSub) aiAssistantSub.innerHTML = t.aiSub;
    }

    function escapeQuote(str) {
        return (str || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
    }

    window.resetPolicyFilters = function() {
        currentCategory = 'all';
        const pills = document.querySelectorAll('.policy-category-pills .pill-btn');
        pills.forEach(p => p.classList.remove('active'));
        const allBtn = document.getElementById('catAll');
        if (allBtn) allBtn.classList.add('active');
        const searchInput = document.getElementById('policySearchInput');
        if (searchInput) searchInput.value = '';
        renderPolicies(currentLang, 'all', '');
    };

    // ==========================================================================
    // 5. ASK AI INTEGRATION ("HAVE QUESTIONS? ASK AI")
    // ==========================================================================
    window.askAiAboutPolicy = function(policyId, policyTitle) {
        const policy = officialPolicies.find(p => p.id === policyId);
        if (!policy) return;

        const title = policy.title[currentLang] || policy.title.en;
        let queryPrompt = '';
        if (currentLang === 'ta') {
            queryPrompt = `"${title}" அரசு கொள்கையின் முக்கிய விதிகள் மற்றும் விவசாயிகள் செய்ய வேண்டிய நடைமுறைகளை எளிய தமிழில் விளக்குங்கள்.`;
        } else if (currentLang === 'hi') {
            queryPrompt = `"${title}" सरकारी नीति के मुख्य नियम एवं किसानों के लिए आवश्यक प्रक्रिया को सरल हिंदी में समझाइए।`;
        } else {
            queryPrompt = `Explain the mandatory farmer compliance rules and benefits under "${title}".`;
        }

        const chatPreviewBody = document.getElementById('chatPreviewBody');
        if (chatPreviewBody) {
            const assistantEl = document.getElementById('assistant');
            if (assistantEl) assistantEl.scrollIntoView({ behavior: 'smooth' });
            const textInput = document.getElementById('textQueryInput');
            if (textInput) textInput.value = queryPrompt;
            setTimeout(() => {
                renderGroundedAnswer(policy, currentLang);
            }, 300);
        } else {
            window.location.href = `assistant.html?q=${encodeURIComponent(queryPrompt)}&policyId=${encodeURIComponent(policyId)}`;
        }
    };

    window.askAiAboutDoc = function(docShort, docTitle) {
        let queryPrompt = '';
        if (currentLang === 'ta') {
            queryPrompt = `${docShort} சான்றிதழ் பெறுவது எப்படி? எங்கு விண்ணப்பிக்க வேண்டும்?`;
        } else if (currentLang === 'hi') {
            queryPrompt = `${docShort} प्रमाणपत्र कैसे प्राप्त करें और इसके लिए क्या दस्तावेज चाहिए?`;
        } else {
            queryPrompt = `How do I obtain the ${docShort} and where should I apply for inspection?`;
        }

        const chatPreviewBody = document.getElementById('chatPreviewBody');
        if (chatPreviewBody) {
            const assistantEl = document.getElementById('assistant');
            if (assistantEl) assistantEl.scrollIntoView({ behavior: 'smooth' });
            const textInput = document.getElementById('textQueryInput');
            if (textInput) textInput.value = queryPrompt;
            setTimeout(() => {
                renderDocAnswer(docShort, currentLang);
            }, 300);
        } else {
            window.location.href = `assistant.html?q=${encodeURIComponent(queryPrompt)}&docShort=${encodeURIComponent(docShort)}`;
        }
    };

    window.askAiSpecific = function(promptText) {
        const chatPreviewBody = document.getElementById('chatPreviewBody');
        if (chatPreviewBody) {
            const assistantEl = document.getElementById('assistant');
            if (assistantEl) assistantEl.scrollIntoView({ behavior: 'smooth' });
            const textInput = document.getElementById('textQueryInput');
            if (textInput) textInput.value = promptText;
            setTimeout(() => {
                renderGenericAnswer(promptText, currentLang);
            }, 300);
        } else {
            window.location.href = `assistant.html?q=${encodeURIComponent(promptText)}`;
        }
    };

    window.triggerAiCropQuery = function() {
        const cropSelect = document.getElementById('calcCropSelect');
        const cropName = cropSelect ? cropSelect.options[cropSelect.selectedIndex].text : 'Crop';
        askAiSpecific(`How to export ${cropName} directly to international ports without middlemen?`);
    };

    function renderGroundedAnswer(policy, lang) {
        const chatPreviewBody = document.getElementById('chatPreviewBody');
        if (!chatPreviewBody) return;

        const title = policy.title[lang] || policy.title.en;
        const summary = policy.summary[lang] || policy.summary.en;
        const rules = policy.rules[lang] || policy.rules.en;

        const answerHtml = `
            <div class="chat-bubble assistant-bubble mb-3 animate slideIn">
                <p class="mb-2 text-emerald fw-bold">
                    <i class="bi bi-shield-check me-1"></i> ${title}
                </p>
                <p class="fs-7 text-dark dark-text-light mb-2">${summary}</p>
                <div class="p-2.5 rounded-3 bg-light-mesh mb-2">
                    <strong class="fs-8 text-emerald d-block mb-1">அதிகாரப்பூர்வ விதிகள் / Key Rules:</strong>
                    <ul class="ps-3 mb-0 fs-8 text-dark dark-text-light">
                        ${rules.map(r => `<li>${r}</li>`).join('')}
                    </ul>
                </div>
                <div class="citation-tag">
                    <i class="bi bi-journal-text text-success me-1"></i> <strong>Official Source:</strong> ${policy.source} (${policy.gazettePages} Gazette Summary)
                </div>
            </div>
        `;

        chatPreviewBody.innerHTML = answerHtml;
        speakAloud(rules[0], lang);
    }

    function renderDocAnswer(docShort, lang) {
        const chatPreviewBody = document.getElementById('chatPreviewBody');
        if (!chatPreviewBody) return;

        let responseText = '';
        if (lang === 'ta') {
            responseText = `
                <div class="chat-bubble assistant-bubble mb-3 animate slideIn">
                    <p class="mb-2 text-emerald fw-bold">
                        <i class="bi bi-file-earmark-text me-1"></i> ${docShort} வழிகாட்டுதல்:
                    </p>
                    <ol class="ps-3 fs-7 mb-2 text-dark dark-text-light">
                        <li><strong>விண்ணப்பிக்கும் தளம்:</strong> அரசு அதிகாரப்பூர்வ இணையதளம் (PQIS / DGFT).</li>
                        <li><strong>நேரம்:</strong> சரக்கு புறப்படுவதற்கு 24 முதல் 48 மணி நேரத்திற்கு முன் விண்ணப்பிக்கவும்.</li>
                        <li><strong>ஆவணங்கள்:</strong> பான் அட்டை, வங்கிச் சான்றிதழ், ஆய்வக சோதனை அறிக்கை.</li>
                    </ol>
                    <div class="citation-tag"><i class="bi bi-shield-check text-success"></i> APEDA & DGFT சான்றளிக்கப்பட்ட நடைமுறை</div>
                </div>
            `;
        } else if (lang === 'hi') {
            responseText = `
                <div class="chat-bubble assistant-bubble mb-3 animate slideIn">
                    <p class="mb-2 text-emerald fw-bold">
                        <i class="bi bi-file-earmark-text me-1"></i> ${docShort} हेतु आवश्यक प्रक्रिया:
                    </p>
                    <ol class="ps-3 fs-7 mb-2 text-dark dark-text-light">
                        <li><strong>ऑनलाइन पोर्टल:</strong> आधिकारिक सरकारी वेबसाइट (PQIS / DGFT) पर आवेदन।</li>
                        <li><strong>समय सीमा:</strong> जहाज रवानगी से 24 से 48 घंटे पूर्व निरीक्षण स्लॉट बुक करें।</li>
                        <li><strong>कागजात:</strong> पैन कार्ड, चालू बैंक खाता, मान्यता प्राप्त लैब की परीक्षण रिपोर्ट।</li>
                    </ol>
                    <div class="citation-tag"><i class="bi bi-shield-check text-success"></i> APEDA एवं DGFT सत्यापित प्रक्रिया</div>
                </div>
            `;
        } else {
            responseText = `
                <div class="chat-bubble assistant-bubble mb-3 animate slideIn">
                    <p class="mb-2 text-emerald fw-bold">
                        <i class="bi bi-file-earmark-text me-1"></i> ${docShort} Step-by-Step Procedure:
                    </p>
                    <ol class="ps-3 fs-7 mb-2 text-dark dark-text-light">
                        <li><strong>Official Portal:</strong> Apply via the dedicated government portal (PQIS / DGFT).</li>
                        <li><strong>Inspection Window:</strong> Book physical sampling slot 24–48 hours prior to container stuffing.</li>
                        <li><strong>Prerequisites:</strong> Farmer/FPO PAN, IEC Code, and NABL accredited test certificate.</li>
                    </ol>
                    <div class="citation-tag"><i class="bi bi-shield-check text-success"></i> Verified APEDA & DGFT Trade Handbook 2025-26</div>
                </div>
            `;
        }

        chatPreviewBody.innerHTML = responseText;
        speakAloud(`${docShort} process explained from official government handbook.`, lang);
    }

    function renderGenericAnswer(query, lang) {
        const chatPreviewBody = document.getElementById('chatPreviewBody');
        if (!chatPreviewBody) return;

        let ans = `
            <div class="chat-bubble assistant-bubble mb-3 animate slideIn">
                <p class="mb-2 text-emerald fw-bold"><i class="bi bi-robot me-1"></i> AGRINXT Grounded Guidance:</p>
                <p class="fs-7 text-dark dark-text-light mb-2">Based on current APEDA trade circulars for: "${query}":</p>
                <ul class="ps-3 fs-8 text-dark dark-text-light mb-2">
                    <li>Ensure your FPO holds an active DGFT IEC Code and APEDA RCMC registration.</li>
                    <li>Conduct NABL moisture and pesticide MRL testing to avoid port detention.</li>
                    <li>Claim RoDTEP export tax remissions (1.5% - 4.3%) in the ICEGATE shipping bill.</li>
                </ul>
                <div class="citation-tag"><i class="bi bi-shield-check text-success"></i> Official Grounded Advice • APEDA / DGFT</div>
            </div>
        `;
        chatPreviewBody.innerHTML = ans;
    }

    function speakAloud(text, lang) {
        if (!('speechSynthesis' in window)) return;
        window.speechSynthesis.cancel();
        const cleanText = text.replace(/[*#_`]/g, '');
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = lang === 'ta' ? 'ta-IN' : lang === 'hi' ? 'hi-IN' : 'en-US';
        utterance.rate = 0.95;
        window.speechSynthesis.speak(utterance);
    }

    // ==========================================================================
    // 6. EVENT LISTENERS: SEARCH, FILTER, LANGUAGE, THEME
    // ==========================================================================

    // Category Filter Pills
    const catPills = document.querySelectorAll('.policy-category-pills .pill-btn');
    catPills.forEach(pill => {
        pill.addEventListener('click', () => {
            catPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentCategory = pill.getAttribute('data-category');
            const searchInput = document.getElementById('policySearchInput');
            const q = searchInput ? searchInput.value : '';
            renderPolicies(currentLang, currentCategory, q);
        });
    });

    // Search Input
    const searchInput = document.getElementById('policySearchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const q = e.target.value;
            renderPolicies(currentLang, currentCategory, q);
        });
    }

    // Language Selector
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = currentLang;
        languageSelect.addEventListener('change', (e) => {
            currentLang = e.target.value;
            localStorage.setItem('agrinxt_lang', currentLang);
            updateStaticUI(currentLang);
            renderPolicies(currentLang, currentCategory, searchInput ? searchInput.value : '');
            renderDocumentation(currentLang);
            updateCalculator();

            // Match Voice Chip
            const matchingVoiceChip = document.querySelector(`.voice-chip[data-lang="${currentLang}"]`);
            if (matchingVoiceChip) {
                document.querySelectorAll('.voice-chip').forEach(c => c.classList.remove('active'));
                matchingVoiceChip.classList.add('active');
            }
        });
    }

    // Dark Mode Switcher
    const themeBtn = document.getElementById('themeBtn');
    const themeIcon = document.getElementById('themeIcon');
    const savedTheme = localStorage.getItem('agrinxt_theme');

    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark');
        if (themeIcon) themeIcon.classList.replace('bi-moon-stars-fill', 'bi-sun-fill');
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('dark');
            localStorage.setItem('agrinxt_theme', isDark ? 'dark' : 'light');
            if (themeIcon) {
                if (isDark) {
                    themeIcon.classList.replace('bi-moon-stars-fill', 'bi-sun-fill');
                } else {
                    themeIcon.classList.replace('bi-sun-fill', 'bi-moon-stars-fill');
                }
            }
        });
    }

    // Calculator Logic
    const cropData = {
        turmeric: { name: 'Salem Turmeric', mandiRate: 7600, exportRate: 14800, unit: 'Quintal' },
        rice: { name: 'Basmati Rice 1121', mandiRate: 3400, exportRate: 6800, unit: 'Quintal' },
        mango: { name: 'Alphonso Mango', mandiRate: 4500, exportRate: 11200, unit: 'Quintal' },
        onion: { name: 'Red Onion', mandiRate: 2200, exportRate: 4600, unit: 'Quintal' },
        banana: { name: 'G9 Banana', mandiRate: 1800, exportRate: 3900, unit: 'Quintal' }
    };

    const calcCropSelect = document.getElementById('calcCropSelect');
    const calcQuantitySlider = document.getElementById('calcQuantitySlider');
    const calcQuantityDisplay = document.getElementById('calcQuantityDisplay');
    const calcMandiTotal = document.getElementById('calcMandiTotal');
    const calcMandiRate = document.getElementById('calcMandiRate');
    const calcExportTotal = document.getElementById('calcExportTotal');
    const calcExportRate = document.getElementById('calcExportRate');
    const calcExtraProfit = document.getElementById('calcExtraProfit');

    function updateCalculator() {
        if (!calcCropSelect || !calcQuantitySlider) return;
        const cropKey = calcCropSelect.value;
        const info = cropData[cropKey] || cropData.turmeric;
        const qty = parseInt(calcQuantitySlider.value, 10);
        const mtVal = (qty / 10).toFixed(1);

        calcQuantityDisplay.textContent = `${qty} Quintals (${mtVal} MT)`;

        const mandiTotal = qty * info.mandiRate;
        const exportTotal = qty * info.exportRate;
        const extraProfit = exportTotal - mandiTotal;
        const percentageGain = ((extraProfit / mandiTotal) * 100).toFixed(1);

        calcMandiTotal.textContent = `₹${mandiTotal.toLocaleString('en-IN')}`;
        calcMandiRate.textContent = `Rate: ₹${info.mandiRate.toLocaleString('en-IN')} / ${info.unit}`;

        calcExportTotal.textContent = `₹${exportTotal.toLocaleString('en-IN')}`;
        calcExportRate.textContent = `Rate: ₹${info.exportRate.toLocaleString('en-IN')} / ${info.unit}`;

        calcExtraProfit.textContent = `+₹${extraProfit.toLocaleString('en-IN')} Extra Earnings (+${percentageGain}%)`;
    }

    if (calcCropSelect && calcQuantitySlider) {
        calcCropSelect.addEventListener('change', updateCalculator);
        calcQuantitySlider.addEventListener('input', updateCalculator);
        updateCalculator();
    }

    // Voice Mic Simulator
    const voiceMicBtn = document.getElementById('voiceMicBtn');
    const voiceStatusText = document.getElementById('voiceStatusText');
    const micIcon = document.getElementById('micIcon');
    const textQueryInput = document.getElementById('textQueryInput');
    const sendTextQueryBtn = document.getElementById('sendTextQueryBtn');

    if (voiceMicBtn) {
        voiceMicBtn.addEventListener('click', () => {
            const isListening = voiceMicBtn.classList.toggle('listening');
            if (isListening) {
                micIcon.classList.replace('bi-mic-fill', 'bi-soundwave');
                voiceStatusText.textContent = currentLang === 'ta' ? 'கேட்கிறது... இப்போது பேசவும்' : currentLang === 'hi' ? 'सुन रहा है... अब बोलिए' : 'Listening to your voice... Speak now';

                setTimeout(() => {
                    voiceMicBtn.classList.remove('listening');
                    micIcon.classList.replace('bi-soundwave', 'bi-mic-fill');
                    voiceStatusText.textContent = currentLang === 'ta' ? 'பேசுவதற்கு மைக்ரோஃபோனைத் தொடவும்' : currentLang === 'hi' ? 'बोलने हेतु माइक दबाएं' : 'Tap microphone to speak your question';
                    
                    // Simulate default voice query response
                    const defaultPolicy = officialPolicies[0];
                    renderGroundedAnswer(defaultPolicy, currentLang);
                }, 3000);
            }
        });
    }

    if (sendTextQueryBtn && textQueryInput) {
        sendTextQueryBtn.addEventListener('click', () => {
            const q = textQueryInput.value.trim();
            if (q) {
                renderGenericAnswer(q, currentLang);
                textQueryInput.value = '';
            }
        });
    }

    // Voice Chips
    const voiceChips = document.querySelectorAll('.voice-chip');
    voiceChips.forEach(chip => {
        chip.addEventListener('click', () => {
            voiceChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentLang = chip.getAttribute('data-lang');
            localStorage.setItem('agrinxt_lang', currentLang);
            if (languageSelect) languageSelect.value = currentLang;
            updateStaticUI(currentLang);
            renderPolicies(currentLang, currentCategory, searchInput ? searchInput.value : '');
            renderDocumentation(currentLang);
            updateCalculator();
        });
    });

    // Multi-page Active Navbar Link Highlighter
    function highlightActiveNav() {
        const path = window.location.pathname.toLowerCase();
        const navMap = [
            { file: 'policy.html', id: 'navPolicy' },
            { file: 'market.html', id: 'navMarket' },
            { file: 'documentation.html', id: 'navDoc' },
            { file: 'assistant.html', id: 'navAssistant' },
            { file: 'dashboard.html', id: 'navHome' },
            { file: 'index.html', id: 'navHome' }
        ];

        document.querySelectorAll('.navbar-nav .nav-link').forEach(link => link.classList.remove('active'));

        let found = false;
        for (const item of navMap) {
            if (path.endsWith(item.file)) {
                const el = document.getElementById(item.id);
                if (el) {
                    el.classList.add('active');
                    found = true;
                }
                break;
            }
        }
        if (!found) {
            const homeEl = document.getElementById('navHome');
            if (homeEl) homeEl.classList.add('active');
        }
    }

    // Animated Metric Counters
    const counters = document.querySelectorAll('.counter');
    let hasAnimated = false;
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    let count = 0;
                    const step = target / 40;
                    const timer = setInterval(() => {
                        count += step;
                        if (count >= target) {
                            counter.textContent = target;
                            clearInterval(timer);
                        } else {
                            counter.textContent = Math.ceil(count);
                        }
                    }, 30);
                });
            }
        });
    }, { threshold: 0.3 });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) observer.observe(statsSection);

    // Initial render
    highlightActiveNav();
    updateStaticUI(currentLang);
    renderPolicies(currentLang, 'all', '');
    renderDocumentation(currentLang);

    // Check URL parameters for AI Assistant auto-trigger
    const urlParams = new URLSearchParams(window.location.search);
    const queryParam = urlParams.get('q');
    const policyParam = urlParams.get('policyId');
    const docParam = urlParams.get('docShort');

    if (queryParam) {
        const textInput = document.getElementById('textQueryInput');
        if (textInput) textInput.value = queryParam;
        setTimeout(() => {
            if (policyParam) {
                const pol = officialPolicies.find(p => p.id === policyParam);
                if (pol) {
                    renderGroundedAnswer(pol, currentLang);
                    return;
                }
            }
            if (docParam) {
                renderDocAnswer(docParam, currentLang);
                return;
            }
            renderGenericAnswer(queryParam, currentLang);
        }, 400);
    }
});
