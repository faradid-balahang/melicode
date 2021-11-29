import {codemeli} from "./script.js"
// cityofmelicode(codemeli);
function cityofmelicode(codemeli) {
    var number = "";
    var codemelis = String(codemeli);
    var codemelisLength = parseInt(codemelis.toString().length);
    if(codemelisLength<10){
        var howmemeny = 10 - codemelisLength;
        for (let i = 0; i < howmemeny; i++) {
            codemelis = "0" + codemelis;
          }
    }
    number   =  codemelis.slice(0,3); 
    return city(number);
}

function city(params) {
    params = String(params);
    switch(params) {
        case "169":
            return "آذر شهر"
          break;
        case "170":
           return "اسکو"
          break;
        case "149":
           return "اهر"
          break;
        case "150":
           return "اهر"
          break;
        case "171":            	
           return "بستان آباد"
          break;
        case "168":         	
           return "بناب"
          break;
        case "136":
           return "تبریز"
          break;
        case "137":
           return "تبریز"
          break;
        case "138":
           return "تبریز"
          break;
        case "545":
           return "ترکمانچای"
          break;
        case "505":
           return "جلفا"
          break;
        case "636":
           return "چاروایماق"
          break;
        case "164":
           return "سراب"
          break;
        case "165":
           return "سراب"
          break;
        case "172":
           return "شبستر"
          break;
        case "623":
           return "صوفیان"
          break;
        case "506":
           return "عجب شیر"
          break;
        case "519":
           return "کلیبر"
          break;
        case "154":
           return "مراغه"
          break;
        case "155":
           return "مراغه"
          break;
        case "567":
           return "ورزقان"
          break;
        case "173":
           return "هریس"
          break;
        case "159":
           return "هشترود"
          break;
        case "160":
           return "هشترود"
          break;
        case "604":
           return "هوراند"
          break;
        case "274":
           return "ارومیه"
          break;
        case "275":
           return "ارومیه"
          break;
        case "295":
           return "اشنویه"
          break;
        case "637":
           return "انزل"
          break;
        case "292":
           return "بوکان"
          break;
        case "492":
           return "پلدشت"
          break;
        case "289":
           return "پیرانشهر"
          break;
        case "677":
           return "تخت سلیمان"
          break;
        case "294":
           return "تکاب"
          break;
        case "493":
           return "چایپاره"
          break;
        case "279":
           return "خوی"
          break;
        case "280":
           return "خوی"
          break;
        case "288":
           return "سردشت"
          break;
        case "284":
           return "سلماس"
          break;
        case "285":
           return "سلماس"
          break;
        case "638":
           return "سیلوانه"
          break;
        case "291":
           return "چالدران"
          break;
        case "640":
           return "شوط"
          break;
        case "293":
           return "شاهین دژ"
          break;
        case "675":
           return "کشاورز"
          break;
        case "282":
           return "ماکو"
          break;
        case "283":
           return "ماکو"
          break;
        case "286":
           return "مهاباد"
          break;
        case "287":
           return "مهاباد"
          break;
        case "296":
           return "میاندوآب"
          break;
        case "297":
           return "میاندوآب"
          break;
        case "290":
           return "نقده"
          break;
        case "400":
           return "اسدآباد"
          break;
        case "401":
           return "اسدآباد"
          break;
        case "404":
           return "بهار"
          break;
        case "405":
           return "بهار"
          break;
        case "397":
           return "تویسرکان"
          break;
        case "398":
           return "رزن"
          break;
        case "399":
           return "رزن"
          break;
        case "647":
           return "پیشخوار"
          break;
        case "502":
           return "فامنین"
          break;
        case "584":
           return "قلقل رود"
          break;
        case "402":
           return "کبودرآهنگ"
          break;
        case "403":
           return "کبودرآهنگ"
          break;
        case "392":
           return "ملایر"
          break;
        case "393":
           return "ملایر"
          break;
        case "395":
           return "نهاوند"
          break;
        case "396":
           return "نهاوند"
          break;
        case "386":
           return "همدان"
          break;
        case "387":
           return "همدان"
          break;
        case "503":
           return "ابرکوه"
          break;
        case "444":
           return "اردکان"
          break;
        case "551":
           return "اشکذر"
          break;
        case "447":
           return "بافق"
          break;
        case "561":
           return "بهاباد"
          break;
        case "445":
           return "تفت"
          break;
        case "718":
           return "دستگردان"
          break;
        case "083":
           return "طبس"
          break;
        case "446":
           return "مهریز"
          break;
        case "446":
           return "مهریز"
          break;
        case "446":
           return "مهریز"
          break;
        case "446":
           return "مهریز"
          break;
        case "446":
           return "مهریز"
          break;
        case "446":
           return "مهریز"
          break;
        case "446":
           return "مهریز"
          break;
        case "446":
           return "مهریز"
          break;
        case "446":
           return "مهریز"
          break;
          case "448":
            return "میبد"
           break; 
        case "552":
            return "نیر"
           break; 
        case "543":
            return "هرات و مروست"
           break;
           case "051":
            return "آشتیان"
          break; 

        case "058":
            return "تفرش"
             break; 
        case "055":
            return "خمین"
          break; 
        case "617":
            return "خنداب"
        break; 
        case "057":
            return "دلیجان"
        break; 
        case "618":
            return "زرند مرکزی"
        break;
        case "544":
            return "فراهان"
            break;
        case "056":
            return "محلات"
            break;
        case "571":
            return "وفس"
            break;
        case "593":
            return "هندودر"
            break;
        case "667":
            return "ابوموسی"
            break;
        case "348":
            return "بستک"
            break;
        case "586":
            return "بشاگرد"
            break;
        case "346":
            return "جاسک"
            break;
        case "337":
            return "حاجی آباد"
            break;
        case "554":
            return "خمیر"
            break;
        case "469":
            return "رودان"
            break;
        case "537":
            return "فین"
            break;
        case "345":
            return "قشم"
            break;
        case "470":
            return "گاوبندی"
            break;
        case "557":
            return "اشترینان"
            break;
        case "418":
            return "الشتر"
            break;
        case "592":
            return "پاپی"
            break;
        case "612":
            return "چغلوندی"
            break;
        case "613":
            return "چگنی"
            break;
        case "421":
            return "دورود"
            break;
        case "598":
            return "رومشکان"
            break;
        case "419":
            return "کوهدشت"
            break;
        case "385":
            return "ملاوی(پلدختر)"
            break;
        case "420":
            return "نورآباد(دلفان)"
            break;
        case "528":
            return "ویسیان"
            break;
        case "498":
            return "بابلسر"
            break;
        case "568":
            return "بندپی"
            break;
        case "711":
            return "بندپی شرقی"
            break;
        case "221":
            return "تنکابن"
            break;
        case "582":
            return "جویبار"
            break;
        case "483":
            return "چالوس"
            break;
        case "625":
            return "چمستان"
            break;
        case "576":
            return "چهاردانگه"
            break;
        case "578":
            return "دودانگه"
            break;
        case "227":
            return "رامسر"
            break;
        case "225":
            return "سوادکوه"
            break;
        case "577":
            return "شیرگاه"
            break;
        case "712":
            return "عباس آباد"
            break;
        case "626":
            return "کجور"
            break;
        case "627":
            return "کلاردشت"
            break;
        case "579":
            return "گلوگاه"
            break;
        case "713":
            return "میاندورود"
            break;
        case "499":
            return "نکاء"
            break;
        case "222":
            return "نور"
            break;
        case "623":
            return "آزادشهر"
            break;
        case "497":
            return "آق قلا"
            break;
        case "223":
            return "بندرترکمن"
            break;
        case "689":
            return "بندرگز"
            break;
        case "487":
            return "رامیان"
            break;
        case "226":
            return "علی آباد"
            break;
        case "224":
            return "کردکوی"
            break;
        case "486":
            return "کلاله"
            break;
        case "628":
            return "گمیشان"
            break;
        case "531":
            return "مراوه تپه"
            break;
        case "488":
            return "مینودشت"
            break;
        case "261":
            return "آستارا"
            break;
        case "273":
            return "آستانه"
            break;
        case "630":
            return "املش"
            break;
        case "264":
            return "بندرانزلی"
            break;
        case "518":
            return "خمام"
            break;
        case "631":
            return "رحیم آباد"
            break;
        case "570":
            return "رضوانشهر"
            break;
        case "265":
            return "رودبار"
            break;
        case "653":
            return "سنگر"
            break;
        case "517":
            return "سیاهکل"
            break;
        case "569":
            return "شفت"
            break;
        case "267":
            return "صومعه سرا"
            break;
        case "593":
            return "عمارلو"
            break;
        case "266":
            return "فومن"
            break;
        case "693":
            return "کوچصفهان"
            break;
        case "694":
            return "لشت نشاء"
            break;
        case "270":
            return "لنگرود"
            break;
        case "516":
            return "ماسال و شاندرمن"
            break;
        case "691":
            return "باینگان"
            break;
        case "595":
            return "ثلاث باباجانی"
            break;
        case "395":
            return "جوانرود"
            break;
        case "641":
            return "حمیل"
            break;
        case "596":
            return "روانسر"
            break;
        case "336":
            return "سرپل ذهاب"
            break;
        case "335":
            return "سنقر"
            break;
        case "496":
            return "صحنه"
            break;
        case "337":
            return "قصرشیرین"
            break;
        case "394":
            return "کرند"
            break;
        case "330":
            return "کنگاور"
            break;
        case "332":
            return "گیلانغرب"
            break;
        case "331":
            return "هرسین"
            break;
        case "687":
            return "باشت"
            break;
        case "599":
            return "بهمنی"
            break;
        case "600":
            return "چاروسا"
            break;
        case "688":
            return "دروهان"
            break;
        case "424":
            return "425	کهکیلویه(دهدشت)"
            break;
        case "426":
            return "گچساران(دوگنبدان)"
            break;
        case "550":
            return "لنده"
            break;
        case "697":
            return "مارگون"
            break;
        case "384":
            return "بانه"
            break;
        case "558":
            return "دهگلان"
            break;
        case "385":
            return "دیواندره"
            break;
        case "646":
            return "سروآباد"
            break;
        case "674":
            return "کرانی"
            break;
        case "676":
            return "نمشیر"
            break;
        case "722":
            return "ارزونیه"
            break;
        case "542":
            return "انار"
            break;
        case "317":
            return "بردسیر"
            break;
        case "583":
            return "رابر"
            break;
        case "321":
            return "راور"
            break;
        case "382":
            return "راین"
            break;
        case "536":
            return "رودبار کهنوج"
            break;
        case "605":
            return "ریگان"
            break;
        case "319":
            return "شهداد"
            break;
        case "606":
            return "عنبرآباد"
            break;
        case "320":
            return "فهرج"
            break;
        case "698":
            return "قلعه گنج"
            break;
        case "298":
            return "299	کرمان"
            break;
        case "535":
            return "کوهبنان"
            break;
        case "315":
            return "316	کهنوج"
            break;
        case "318":
            return "گلباف"
            break;
        case "607":
            return "ماهان"
            break;
        case "608":
            return "منوجان"
            break;
        case "508":
            return "آبیک"
            break;
        case "538":
            return "آوج"
            break;
        case "728":
            return "البرز"
            break;
        case "509":
            return "بوئین زهرا"
            break;
        case "438":
            return "439	تاکستان"
            break;
        case "580":
            return "رودبار الموت"
            break;
        case "590":
            return "رودبار شهرستان"
            break;
        case "559":
            return "ضیاءآباد"
            break;
        case "588":
            return "طارم سفلی"
            break;
        case "702":
            return "کهک"
            break;
        case "670":
            return "آباده طشک"
            break;
        case "648":
            return "ارسنجان"
            break;
        case "252":
            return "استهبان"
            break;
        case "678":
            return "اشکنان"
            break;
        case "253":
            return "اقلید"
            break;
        case "649":
            return "اوز"
            break;
        case "513":
            return "بوانات"
            break;
        case "546":
            return "بیضا"
            break;
        case "671":
            return "جویم"
            break;
        case "654":
            return "حاجی آباد(زرین دشت)"
            break;
        case "548":
            return "خرامه"
            break;
        case "547":
            return "خشت و کمارج"
            break;
        case "655":
            return "خفر"
            break;
        case "253":
            return "سپیدان"
            break;
        case "514":
            return "سروستان"
            break;
        case "665":
            return "سعادت آباد"
            break;
        case "673":
            return "شیبکوه"
            break;
        case "679":
            return "فراشبند"
            break;
        case "681":
            return "قنقری(خرم بید)"
            break;
        case "723":
            return "قیروکارزین"
            break;
        case "683":
            return "کوار"
            break;
        case "656":
            return "کراش"
            break;
        case "515":
            return "لامرد"
            break;
        case "657":
            return "مهر"
            break;
        case "255":
            return "نی ریز"
            break;
        case "684":
            return "ایوانکی"
            break;
        case "700":
            return "بسطام"
            break;
        case "642":
            return "بیارجمند"
            break;
        case "457":
            return "دامغان"
            break;
        case "456":
            return "سمنان"
            break;
        case "458":
            return "459	شاهرود"
            break;
        case "460":
            return "گرمسار"
            break;
        case "530":
            return "مهدیشهر"
            break;
        case "520":
            return "میامی"
            break;
        case "682":
            return "بزمان"
            break;
        case "703":
            return "بمپور"
            break;
        case "371":
            return "خاش"
            break;
        case "701":
            return "دشتیاری"
            break;
        case "720":
            return "راسک"
            break;
        case "704":
            return "زابلی"
            break;
        case "635":
            return "سرباز"
            break;
        case "668":
            return "سیب و سوران"
            break;
        case "533":
            return "شهرکی و ناروئی(زهک)"
            break;
        case "705":
            return "شیب آب"
            break;
        case "699":
            return "فنوج"
            break;
        case "669":
            return "قصرقند"
            break;
        case "725":
            return "کنارک"
            break;
        case "597":
            return "لاشار(اسپکه)"
            break;
        case "611":
            return "میرجاوه"
            break;
        case "525":
            return "نیک شهر"
            break;
        case "181":
            return "آبادان"
            break;
        case "527":
            return "آغاجاری"
            break;
        case "585":
            return "اروندکنار"
            break;
        case "685":
            return "امیدیه"
            break;
        case "663":
            return "اندیکا"
            break;
        case "481":
            return "باغ ملک"
            break;
        case "706":
            return "بندر امام خمینی"
            break;
        case "182":
            return "خرمشهر"
            break;
        case "198":
            return "دشت آزادگان"
            break;
        case "662":
            return "رامشیر"
            break;
        case "692":
            return "سردشت"
            break;
        case "189":
            return "شادگان"
            break;
        case "707":
            return "شاوور"
            break;
        case "526":
            return "شوش"
            break;
        case "729":
            return "گتوند"
            break;
        case "730":
            return "لالی"
            break;
        case "661":
            return "هندیجان"
            break;
        case "680":
            return "هویزه"
            break;
        case "643":
            return "احمدآباد"
            break;
        case "562":
            return "بجستان"
            break;
        case "572":
            return "بردسکن"
            break;
        case "074":
            return "تایباد"
            break;
        case "644":
            return "تخت جلگه"
            break;
        case "521":
            return "جغتای"
            break;
        case "573":
            return "جوین"
            break;
        case "522":
            return "چناران"
            break;
        case "724":
            return "خلیل آباد"
            break;
        case "076":
            return "خواف"
            break;
        case "077":
            return "درگز"
            break;
        case "650":
            return "رشتخوار"
            break;
        case "574":
            return "زبرخان"
            break;
        case "078":
            return "079	سبزوار"
            break;
        case "081":
            return "سرخس"
            break;
        case "084":
            return "فریمان"
            break;
        case "651":
            return "فیض آباد"
            break;
        case "553":
            return "کلات"
            break;
        case "091":
            return "گناباد"
            break;
        case "097":
            return "مشهد منطقه2"
            break;
        case "098":
            return "مشهد منطقه3"
            break;
        case "096":
            return "مشهد منطقه1"
            break;
        case "063":
            return "اسفراین"
            break;
        case "075":
            return "جاجرم"
            break;
        case "591":
            return "رازوجرکلان"
            break;
        case "082":
            return "شیروان"
            break;
        case "635":
            return "فاروج"
            break;
        case "524":
            return "مانه و سملقان"
            break;
        case "468":
            return "اردل"
            break;
        case "465":
            return "بروجن"
            break;
        case "467":
            return "فارسان"
            break;
        case "632":
            return "فلارد"
            break;
        case "555":
            return "کوهرنگ"
            break;
        case "633":
            return "کیار"
            break;
        case "629":
            return "گندمان"
            break;
        case "466":
            return "لردگان"
            break;
        case "696":
            return "میانکوه"
            break;
        case "721":
            return "بشرویه"
            break;
        case "523":
            return "درمیان"
            break;
        case "652":
            return "زیرکوه"
            break;
        case "719":
            return "سرایان"
            break;
        case "716":
            return "سربیشه"
            break;
        case "085":
            return "فردوس"
            break;
        case "088":
            return "قائنات"
            break;
        case "563":
            return "نهبندان"
            break;
        case "529":
            return "بندر دیلم"
            break;
        case "353":
            return "بندر گناوه"
            break;
        case "349":
            return "350	بوشهر"
            break;
        case "355":
            return "تنگستان"
            break;
        case "609":
            return "جم"
            break;
        case "354":
            return "دشتی"
            break;
        case "732":
            return "دلوار"
            break;
        case "357":
            return "دیر"
            break;
        case "532":
            return "سعد آباد"
            break;
        case "610":
            return "شبانکاره"
            break;
        case "356":
            return "کنگان"
            break;
        case "556":
            return "اسلامشهر"
            break;
        case "658":
            return "پاکدشت"
            break;
        case "011":
            return "تهران جنوب"
            break;
        case "020":
            return "تهران شرق"
            break;
        case "025":
            return "تهرانشمال"
            break;
        case "015":
            return "تهران غرب"
            break;
        case "043":
            return "دماوند"
            break;
        case "666":
            return "رباط کریم"
            break;
        case "489":
            return "ساوجبلاغ"
            break;
        case "695":
            return "طالقان"
            break;
        case "659":
            return "فیروزکوه"
            break;
        case "664":
            return "کهریزک"
            break;
        case "717":
            return "نظرآباد"
            break;
        case "454":
            return "آبدانان"
            break;
        case "581":
            return "ارکوازی(ملکشاهی)"
            break;
        case "449":
            return "450	ایلام"
            break;
        case "616":
            return "ایوان"
            break;
        case "534":
            return "بدره"
            break;
        case "455":
            return "دره شهر"
            break;
        case "451":
            return "دهلران"
            break;
        case "726":
            return "زرین آباد"
            break;
        case "634":
            return "شیروان لومار"
            break;
        case "453":
            return "شیروان و چرداول"
            break;
        case "727":
            return "موسیان"
            break;
        case "452":
            return "مهران"
            break;
        case "731":
            return "ارشق"
            break;
        case "690":
            return "انگوت"
            break;
        case "601":
            return "بیله سوار"
            break;
        case "504":
            return "پارس آباد"
            break;
        case "163":
            return "خلخال"
            break;
        case "714":
            return "خورش رستم"
            break;
        case "715":
            return "سرعین"
            break;
        case "566":
            return "سنجبد(کوثر)"
            break;
        case "686":
            return "نمین"
            break;
        case "603":
            return "نیر"
            break;
        case "619":
            return "آران و بیدگل"
            break;
        case "118":
            return "اردستان"
            break;
        case "620":
            return "باغ بهادران"
            break;
        case "621":
            return "بوئین و میاندشت"
            break;
        case "549":
            return "تیران و کرون"
            break;
        case "564":
            return "جرقویه"
            break;
        case "575":
            return "چادگان"
            break;
        case "122":
            return "خوانسار"
            break;
        case "540":
            return "خور و بیابانک"
            break;
        case "660":
            return "دولت آباد"
            break;
        case "120":
            return "سمیرم"
            break;
        case "512":
            return "سمیرم سفلی (دهاقان)"
            break;
        case "119":
            return "شهرضا"
            break;
        case "115":
            return "فریدن"
            break;
        case "112":
            return "فریدونشهر"
            break;
        case "565":
            return "کوهپایه"
            break;
        case "121":
            return "گلپایگان"
            break;
        case "541":
            return "مبارکه"
            break;
        case "622":
            return "میمه"
            break;
        case "124":
            return "نائین"
            break;
        case "507":
            return "ملکان"
            break;
        case "158":
            return "مرند"
            break;
        case "615":
            return "ابهر و خرمدره"
            break;
        case "123":
            return "نطنز"
            break;
        case "383":
            return "کامیاران"
            break;
            case "442":
    return "یزد"
    break;
    case "443":
        return "یزد"
        break;
case "052":
    return "اراک"
    break;
    case "053":
        return "اراک"
        break;
case "059":
    return "ساوه"
    break;
    case "060":
        return "ساوه"
        break;
case "061":
    return "سربند"
    break;
    case "062":
        return "سربند"
        break;
case "338":
    return "بندرعباس"
    break;
    case "339":
        return "بندرعباس"
        break;
case "343":
    return "بندرلنگه"
    break;
    case "344":
        return "بندرلنگه"
        break;
case "341":
    return "میناب"
    break;
    case "342":
        return "میناب"
        break;
case "483":
    return "ازنا"
    break;
    case "484":
        return "ازنا"
        break;
case "416":
    return "الیگودرز"
    break;
    case "417":
        return "الیگودرز"
        break;
case "412":
    return "بروجرد"
    break;
    case "413":
        return "بروجرد"
        break;
case "406":
    return "خرم آباد"
    break;
    case "407":
        return "خرم آباد"
        break;
case "213":
    return "آمل"
    break;
    case "214":
        return "آمل"
        break;
case "205":
    return "بابل"
    break;
    case "206":
        return "بابل"
        break;
case "217":
    return "بهشهر"
    break;
    case "218":
        return "بهشهر"
        break;
case "208":
    return "ساری"
    break;
    case "209":
        return "ساری"
        break;
case "215":
    return "قائمشهر"
    break;
    case "216":
        return "قائمشهر"
        break;
case "219":
    return "نوشهر"
    break;
    case "220":
        return "نوشهر"
        break;
case "500":
    return "هراز و محمودآباد"
    break;
    case "501":
        return "هراز و محمودآباد"
        break;
case "211":
    return "گرگان"
    break;
    case "212":
        return "گرگان"
        break;
case "202":
    return "گنبد کاووس"
    break;
    case "203":
        return "گنبد کاووس"
        break;
case "258":
    return "رشت"
    break;
    case "259":
        return "رشت"
        break;
case "268":
    return "رودسر"
    break;
    case "269":
        return "رودسر"
        break;
case "262":
    return "طالش"
    break;
    case "263":
        return "طالش"
        break;
case "271":
    return "لاهیجان"
    break;
    case "272":
        return "لاهیجان"
        break;
case "333":
    return "اسلام آباد"
    break;
    case "334":
        return "اسلام آباد"
        break;
case "323":
    return "پاوه"
    break;
    case "322":
        return "پاوه"
        break;
case "324":
    return "کرمانشاه"
    break;
    case "325":
        return "کرمانشاه"
        break;
case "422":
    return "بویراحمد(یاسوج)"
    break;
    case "423":
        return "بویراحمد(یاسوج)"
        break;
case "377":
    return "بیجار"
    break;
    case "378":
        return "بیجار"
        break;
case "375":
    return "سقز"
    break;
    case "376":
        return "سقز"
        break;
case "372":
    return "سنندج"
    break;
    case "373":
        return "سنندج"
        break;
case "379":
    return "قروه"
    break;
    case "380":
        return "قروه"
        break;
case "381":
    return "مریوان"
    break;
    case "382":
        return "مریوان"
        break;
case "312":
    return "بافت"
    break;
    case "313":
        return "بافت"
        break;
case "310":
    return "بم"
    break;
    case "311":
        return "بم"
        break;
case "302":
    return "جیرفت"
    break;
    case "303":
        return "جیرفت"
        break;
case "304":
    return "رفسنجان"
    break;
    case "305":
        return "رفسنجان"
        break;
case "308":
    return "زرند"
    break;
    case "309":
        return "زرند"
        break;
case "306":
    return "سیرجان"
    break;
    case "307":
        return "سیرجان"
        break;
case "313":
    return "شهربابک"
    break;
    case "314":
        return "شهربابک"
        break;
case "431":
    return "قزوین"
    break;
    case "432":
        return "قزوین"
        break;
case "037":
    return "قم"
    break;
    case "038":
        return "قم"
        break;
case "240":
    return "آباده"
    break;
    case "241":
        return "آباده"
        break;
case "246":
    return "جهرم"
    break;
    case "247":
        return "جهرم"
        break;
case "248":
    return "داراب"
    break;
    case "249":
        return "داراب"
        break;
case "256":
    return "فسا"
    break;
    case "257":
        return "فسا"
        break;
        case "244":
            return "فیروزآباد"
            break;
            case "245":
                return "فیروزآباد"
                break;
        case "236":
            return "کازرون"
            break;
            case "237":
                return "کازرون"
                break;
        case "250":
            return "لارستان"
            break;
            case "251":
                return "لارستان"
                break;
        case "242":
            return "مرودشت"
            break;
            case "243":
                return "مرودشت"
                break;
        case "238":
            return "ممسنی"
            break;
            case "239":
                return "ممسنی"
                break;
        case "358":
            return "ایرانشهر"
            break;
            case "359":
                return "ایرانشهر"
                break;
        case "364":
            return "چابهار"
            break;
            case "365":
                return "چابهار"
                break;
        case "366":
            return "زابل"
            break;
            case "367":
                return "زابل"
                break;
        case "361":
            return "زاهدان"
            break;
            case "362":
                return "زاهدان"
                break;
        case "369":
            return "سراوان"
            break;
            case "370":
                return "سراوان"
                break;
        case "192":
            return "اندیمشک"
            break;
            case "193":
                return "اندیمشک"
                break;
        case "174":
            return "اهواز"
            break;
            case "175":
                return "اهواز"
                break;
        case "183":
            return "ایذه"
            break;
            case "184":
                return "ایذه"
                break;
        case "194":
            return "بندرماهشهر"
            break;
            case "195":
                return "بندرماهشهر"
                break;
        case "185":
            return "بهبهان"
            break;
            case "186":
                return "بهبهان"
                break;
        case "199":
            return "دزفول"
            break;
            case "200":
                return "دزفول"
                break;
        case "190":
            return "رامهرمز"
            break;
            case "191":
                return "رامهرمز"
                break;
        case "187":
            return "شوشتر"
            break;
            case "188":
                return "شوشتر"
                break;
        case "196":
            return "مسجدسلیمان"
            break;
            case "197":
                return "مسجدسلیمان"
                break;
        case "072":
            return "تربت جام"
            break;
            case "073":
                return "تربت جام"
                break;
        case "069":
            return "تربت حیدریه"
            break;
            case "070":
                return "تربت حیدریه"
                break;
        case "086":
            return "قوچان"
            break;
            case "087":
                return "قوچان"
                break;
        case "089":
            return "کاشمر"
            break;
            case "090":
                return "کاشمر"
                break;
        case "092":
            return "094	مشهد"
            break;
            case "093":
                return "094	مشهد"
                break;
        case "105":
            return "نیشابور"
            break;
            case "106":
                return "نیشابور"
                break;
        case "067":
            return "بجنورد"
            break;
            case "068":
                return "بجنورد"
                break;
        case "461":
            return "شهرکرد"
            break;
            case "462":
                return "شهرکرد"
                break;
        case "064":
            return "بیرجند"
            break;
            case "065":
                return "بیرجند"
                break;
        case "351":
            return "دشتستان"
            break;
            case "352":
                return "دشتستان"
                break;
        case "044":
            return "شمیران"
            break;
            case "045":
                return "شمیران"
                break;
        case "048":
            return "شهرری"
            break;
            case "049":
                return "شهرری"
                break;
        case "490":
            return "شهریار"
            break;
            case "491":
                return "شهریار"
                break;
        case "031":
            return "کرج"
            break;
            case "032":
                return "کرج"
                break;
        case "041":
            return "ورامین"
            break;
            case "042":
                return "ورامین"
                break;
        case "471":
            return "امور خارجه"
            break;
            case "472":
                return "امور خارجه"
                break;
        case "145":
            return "اردبیل"
            break;
            case "146":
                return "اردبیل"
                break;
        case "166":
            return "مشکین شهر"
            break;
            case "167":
                return "مشکین شهر"
                break;
        case "161":
            return "مغان"
            break;
            case "162":
                return "مغان"
                break;
        case "127":
            return "129	اصفهان"
            break;
            case "128":
                return "129	اصفهان"
                break;
        case "113":
            return "خمینی شهر"
            break;
            case "114":
                return "خمینی شهر"
                break;
        case "510":
            return "شاهین شهر"
            break;
            case "511":
                return "شاهین شهر"
                break;
        case "110":
            return "فلاورجان"
            break;
            case "111":
                return "فلاورجان"
                break;
        case "125":
            return "کاشان"
            break;
            case "126":
                return "کاشان"
                break;
        case "116":
            return "لنجان(زرینشهر)"
            break;
            case "117":
                return "لنجان(زرینشهر)"
                break;
        case "108":
            return "نجف آباد"
            break;
            case "109":
                return "نجف آباد"
                break;
        case "428":
            return "زنجان"
            break;
            case "427":
                return "زنجان"
                break;
        case "152":
            return "میانه"
            break;
            case "153":
                return "میانه"
                break;
            case "228":
                return "شیراز"
                break;
            case "229":
                return "شیراز"
                break;
            case "230":
                return "شیراز"
                break;
            case "001":
                return "تهران"
                break;
            case "002":
                return "تهران"
                break;
            case "003":
                return "تهران"
                break;
            case "004":
                return "تهران"
                break;
            case "005":
                return "تهران"
                break;
            case "006":
                return "تهران"
                break;
            case "007":
                return "تهران"
                break;
            case "008":
                return "تهران"
                break;
        default:
          // code block
      }
}

 
export {cityofmelicode};